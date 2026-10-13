import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Audio cache to prevent repeated calls and ensure instant playback
const audioCache = new Map<string, string>();
let quotaExhaustedUntil = 0;

let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Dedicated TTS endpoint tuned for British English (UK) cheerful bright teacher voice
app.post('/api/tts', async (req, res) => {
  const { text, voice, accent } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Text is required' });
  }

  const selectedVoice = (typeof voice === 'string' && voice) ? voice : 'Aoede';
  const cleanText = text.trim();
  const cacheKey = `uk_${selectedVoice.toLowerCase()}_${cleanText.toLowerCase()}`;

  // Check cache first
  if (audioCache.has(cacheKey)) {
    return res.json({ audioData: audioCache.get(cacheKey), voice: `${selectedVoice} (UK Cached)` });
  }

  // If quota was previously exceeded, immediately delegate to client voice
  if (Date.now() < quotaExhaustedUntil) {
    return res.json({
      fallback: true,
      message: 'Quota exceeded, seamlessly using client British English female voice',
      voice: selectedVoice,
      accent: 'en-GB'
    });
  }

  if (!aiClient) {
    return res.json({
      fallback: true,
      message: 'Gemini API not configured, using client fallback',
      voice: selectedVoice,
      accent: 'en-GB'
    });
  }

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Read in a bright, cheerful, high-spirited, enthusiastic British English accent for elementary children: "${cleanText}"`
            }
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: selectedVoice },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.json({ fallback: true, error: 'No audio returned', voice: selectedVoice, accent: 'en-GB' });
    }

    const dataUri = `data:audio/wav;base64,${base64Audio}`;
    audioCache.set(cacheKey, dataUri);

    return res.json({ audioData: dataUri, voice: selectedVoice, accent: 'en-GB' });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    const isQuota =
      errMsg.includes('429') ||
      errMsg.includes('quota') ||
      errMsg.includes('RESOURCE_EXHAUSTED') ||
      errMsg.includes('exceeded your current quota');

    if (isQuota) {
      // Pause Gemini API requests for 1 hour to prevent hammering the exhausted quota
      quotaExhaustedUntil = Date.now() + 60 * 60 * 1000;
      console.log('Gemini TTS quota limit reached (429). Seamlessly delegating to client-side British English female voice.');
    } else {
      console.log('Gemini TTS fallback note:', errMsg);
    }

    return res.json({
      fallback: true,
      error: isQuota ? 'Quota exceeded' : errMsg,
      voice: selectedVoice,
      accent: 'en-GB'
    });
  }
});

// Mounting Vite in development or static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
