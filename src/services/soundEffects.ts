// Sound Service - Locked exclusively to British English (Anh - Anh / en-GB) Bright, Cheerful, Enthusiastic Female Voice
// Loại bỏ hoàn toàn tất cả các giọng khác, chỉ giữ lại giọng nữ Anh - Anh vang sáng, giọng cao, vui tươi.

export interface FemaleVoiceInfo {
  name: string;
  lang: string;
  displayName: string;
  isRecommended?: boolean;
}

class SoundService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private selectedFallbackVoice: SpeechSynthesisVoice | null = null;
  private audioMemoryCache: Map<string, string> = new Map();
  private currentAudioElement: HTMLAudioElement | null = null;
  private serverTTSAvailable: boolean = true;

  // Custom acoustics for bright, enthusiastic, high-pitched British tone ("giọng cao, vang sáng, vui tươi, hào hứng")
  private customPitch: number = 1.28; // 1.28 gives high, radiant, cheerful pedagogical timbre (giọng cao vui tươi)
  private customRate: number = 0.92;  // 0.92 is lively, animated yet crystal-clear for learners
  private userSelectedVoiceName: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      // Load saved preferences
      const savedPitch = localStorage.getItem('uk_teacher_voice_pitch');
      if (savedPitch) {
        const val = parseFloat(savedPitch);
        if (!isNaN(val) && val >= 0.9 && val <= 1.5) this.customPitch = val;
      }

      const savedRate = localStorage.getItem('uk_teacher_voice_rate');
      if (savedRate) {
        const val = parseFloat(savedRate);
        if (!isNaN(val) && val >= 0.7 && val <= 1.2) this.customRate = val;
      }

      const savedVoice = localStorage.getItem('uk_teacher_voice_name');
      if (savedVoice) this.userSelectedVoiceName = savedVoice;

      if ('speechSynthesis' in window) {
        this.initFallbackVoice();
        window.speechSynthesis.onvoiceschanged = () => {
          this.initFallbackVoice();
        };
      }
    }
  }

  /**
   * Filter strictly for British English (UK / en-GB) female voices.
   * Discards all other voices (male voices, American, Australian, Indian, etc. are eliminated).
   */
  public getAvailableFemaleVoices(): FemaleVoiceInfo[] {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];

    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return [];

    const maleKeywords = [
      'david', 'george', 'oliver', 'harry', 'william', 'jack', 'james', 'charles',
      'male', 'boy', 'man', 'guy', 'ryan', 'daniel', 'peter', 'edward', 'charon',
      'fenrir', 'puck', 'mark', 'richard', 'tom', 'paul', 'brian', 'andrew', 'steven', 'john'
    ];

    const isMale = (name: string) => {
      const lower = name.toLowerCase();
      return maleKeywords.some((kw) => lower.includes(kw));
    };

    // Filter strictly for UK / British English
    const isUK = (v: SpeechSynthesisVoice) => {
      const lang = (v.lang || '').toLowerCase().replace('_', '-');
      const name = (v.name || '').toLowerCase();
      return (
        lang === 'en-gb' ||
        lang.startsWith('en-gb') ||
        name.includes('united kingdom') ||
        name.includes('uk english') ||
        name.includes('british') ||
        name.includes('great britain')
      );
    };

    // Filter out male voices and non-UK voices
    let ukFemaleList = voices.filter((v) => isUK(v) && !isMale(v.name));

    // If device has no explicit en-GB voice installed, allow general female English voices
    // but tag them to use British English synthesis
    if (ukFemaleList.length === 0) {
      const generalEnglish = voices.filter(
        (v) => (v.lang.startsWith('en') || v.lang.includes('en')) && !isMale(v.name)
      );
      ukFemaleList = generalEnglish;
    }

    return ukFemaleList.map((v) => {
      let displayName = v.name;
      const lower = v.name.toLowerCase();
      let isRecommended = false;

      if (lower.includes('libby')) {
        displayName = `Cô Libby (Anh - Anh Vang Sáng, Ngọt Ngào) 🇬🇧🌟`;
        isRecommended = true;
      } else if (lower.includes('maisie')) {
        displayName = `Cô Maisie (Anh - Anh Vui Tươi, Hào Hứng) 🇬🇧🎉`;
        isRecommended = true;
      } else if (lower.includes('uk english female') || (lower.includes('google') && lower.includes('uk'))) {
        displayName = `Cô Google UK (Anh - Anh Chuẩn Trường Học) 🇬🇧🌟`;
        isRecommended = true;
      } else if (lower.includes('sonia')) {
        displayName = `Cô Sonia (Anh - Anh Rành Mạch, Sáng Giọng) 🇬🇧✨`;
        isRecommended = true;
      } else if (lower.includes('serena') || lower.includes('martha')) {
        displayName = `Cô ${lower.includes('serena') ? 'Serena' : 'Martha'} (Apple UK Vang Sáng) 🇬🇧`;
        isRecommended = true;
      } else if (lower.includes('hazel')) {
        displayName = `Cô Hazel (Anh - Anh Ấm Áp) 🇬🇧`;
      } else if (lower.includes('susan')) {
        displayName = `Cô Susan (Anh - Anh Rõ Ràng) 🇬🇧`;
      } else {
        displayName = `${v.name} (Anh - Anh) 🇬🇧`;
      }

      return {
        name: v.name,
        lang: v.lang,
        displayName,
        isRecommended,
      };
    });
  }

  /**
   * Strictly initialize and lock into highest quality bright British English female voice.
   */
  private initFallbackVoice() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const maleKeywords = [
      'david', 'george', 'oliver', 'harry', 'william', 'jack', 'james', 'charles',
      'male', 'boy', 'man', 'guy', 'ryan', 'daniel', 'peter', 'edward', 'charon',
      'fenrir', 'puck', 'mark', 'richard', 'tom', 'paul', 'brian', 'andrew', 'steven', 'john'
    ];

    const isMale = (name: string) => {
      const lower = name.toLowerCase();
      return maleKeywords.some((m) => lower.includes(m));
    };

    const isUK = (v: SpeechSynthesisVoice) => {
      const lang = (v.lang || '').toLowerCase().replace('_', '-');
      const name = (v.name || '').toLowerCase();
      return (
        lang === 'en-gb' ||
        lang.startsWith('en-gb') ||
        name.includes('united kingdom') ||
        name.includes('uk english') ||
        name.includes('british') ||
        name.includes('great britain')
      );
    };

    let ukFemaleVoices = voices.filter((v) => isUK(v) && !isMale(v.name));

    // Fallback if no en-GB voice is natively installed
    if (ukFemaleVoices.length === 0) {
      ukFemaleVoices = voices.filter(
        (v) => (v.lang.startsWith('en') || v.lang.includes('en')) && !isMale(v.name)
      );
    }

    if (ukFemaleVoices.length === 0) return;

    // 1. If user previously selected a voice, honor it
    if (this.userSelectedVoiceName) {
      const match = ukFemaleVoices.find((v) => v.name === this.userSelectedVoiceName);
      if (match) {
        this.selectedFallbackVoice = match;
        return;
      }
    }

    // 2. Highest priority bright, cheerful, enthusiastic British English voices:
    const ukBrightPriority = [
      'maisie',                     // Microsoft Maisie: youthful, cheerful, enthusiastic British female
      'libby',                      // Microsoft Libby: radiant, natural, sweet British female
      'google uk english female',   // Google UK Female: crisp, articulate British school voice
      'sonia',                      // Microsoft Sonia: articulate, bright British female
      'serena',                     // Apple Serena: British English natural
      'martha',                     // Apple Martha: British English
      'stephanie',                  // Apple Stephanie UK
      'fiona',                      // Apple Fiona UK
      'hazel',                      // Microsoft Hazel UK
      'en-gb-neural',               // Neural en-GB female
      'en-gb-standard',             // Standard en-GB female
      'en-gb'                       // Any other en-GB voice
    ];

    for (const kw of ukBrightPriority) {
      const match = ukFemaleVoices.find((v) => v.name.toLowerCase().includes(kw));
      if (match) {
        this.selectedFallbackVoice = match;
        return;
      }
    }

    this.selectedFallbackVoice = ukFemaleVoices[0];
  }

  public getVoiceDisplayName(): string {
    if (this.selectedFallbackVoice) {
      const lower = this.selectedFallbackVoice.name.toLowerCase();
      if (lower.includes('maisie')) return '🇬🇧 Cô Maisie (Vui tươi, hào hứng)';
      if (lower.includes('libby')) return '🇬🇧 Cô Libby (Vang sáng, ngọt ngào)';
      if (lower.includes('uk english female') || (lower.includes('google') && lower.includes('uk'))) {
        return '🇬🇧 Cô Google UK (Vang chuẩn)';
      }
      if (lower.includes('sonia')) return '🇬🇧 Cô Sonia (Rành mạch)';
      if (lower.includes('serena') || lower.includes('martha')) return '🇬🇧 Cô UK (Apple)';
      return `🇬🇧 ${this.selectedFallbackVoice.name.split(' ')[0]} (Anh - Anh)`;
    }
    return '🇬🇧 Cô giáo UK (Anh - Anh Vui Tươi)';
  }

  public getSelectedVoiceName(): string {
    return this.selectedFallbackVoice?.name || '';
  }

  public setSelectedVoice(voiceName: string) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v) => v.name === voiceName);
    if (match) {
      this.selectedFallbackVoice = match;
      this.userSelectedVoiceName = voiceName;
      localStorage.setItem('uk_teacher_voice_name', voiceName);
    }
  }

  public getPitch(): number {
    return this.customPitch;
  }

  public setPitch(pitch: number) {
    this.customPitch = Math.max(0.9, Math.min(1.5, pitch));
    if (typeof window !== 'undefined') {
      localStorage.setItem('uk_teacher_voice_pitch', this.customPitch.toString());
    }
  }

  public getRate(): number {
    return this.customRate;
  }

  public setRate(rate: number) {
    this.customRate = Math.max(0.7, Math.min(1.2, rate));
    if (typeof window !== 'undefined') {
      localStorage.setItem('uk_teacher_voice_rate', this.customRate.toString());
    }
  }

  public resetToBrightDefault() {
    this.customPitch = 1.28; // Giọng cao, vang sáng, vui tươi, hào hứng
    this.customRate = 0.92;  // Tốc độ chuẩn, hoạt bát
    this.userSelectedVoiceName = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('uk_teacher_voice_name');
      localStorage.setItem('uk_teacher_voice_pitch', '1.28');
      localStorage.setItem('uk_teacher_voice_rate', '0.92');
    }
    this.initFallbackVoice();
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public playClickSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio fallback
    }
  }

  public playStarSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.12);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      // Audio fallback
    }
  }

  public playSlapSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Audio fallback
    }
  }

  public playCorrectSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.setValueAtTime(659.25, now + 0.08);

      osc2.frequency.setValueAtTime(1046.5, now);
      osc2.frequency.setValueAtTime(1318.5, now + 0.08);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.25);
      osc2.stop(now + 0.25);
    } catch {
      // Audio fallback
    }
  }

  public playCelebrationSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const frequencies = [523.25, 659.25, 783.99, 1046.5];

      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch {
      // Audio fallback
    }
  }

  public playWrongSound() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.08;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.08);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.09);
    } catch {
      // Audio fallback
    }
  }

  public playCelebrationFanfare() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        { f: 392.0, d: 0.12, t: 0 },
        { f: 523.25, d: 0.12, t: 0.13 },
        { f: 659.25, d: 0.12, t: 0.26 },
        { f: 783.99, d: 0.38, t: 0.39 },
      ];
      notes.forEach(({ f, d, t }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + t);

        gain.gain.setValueAtTime(0, now + t);
        gain.gain.linearRampToValueAtTime(0.22, now + t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + d + 0.02);
      });
    } catch {
      // Audio fallback
    }
  }

  /**
   * Speak using dedicated bright, cheerful, high-pitched British English (UK / en-GB) female voice.
   * All other voices are completely discarded.
   */
  public async speak(
    text: string,
    options: { rate?: number; pitch?: number; onEnd?: () => void } = {}
  ): Promise<boolean> {
    if (this.isMuted || !text.trim()) {
      if (options.onEnd) options.onEnd();
      return false;
    }

    this.stopSpeaking();

    const cleanText = text.trim();
    const cacheKey = `uk_female_${cleanText.toLowerCase()}`;

    // 1. If audio is cached, play it immediately!
    if (this.audioMemoryCache.has(cacheKey)) {
      const audioUrl = this.audioMemoryCache.get(cacheKey)!;
      return this.playAudioUrl(audioUrl, options.onEnd);
    }

    // 2. Try fetching audio from /api/tts if server is available
    if (this.serverTTSAvailable) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const res = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: cleanText, accent: 'en-GB' }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.fallback) {
            this.serverTTSAvailable = false;
            return this.speakClientFallback(cleanText, options);
          }
          if (data.audioData) {
            this.audioMemoryCache.set(cacheKey, data.audioData);
            return this.playAudioUrl(data.audioData, options.onEnd);
          }
        } else {
          this.serverTTSAvailable = false;
        }
      } catch {
        this.serverTTSAvailable = false;
      }
    }

    // 3. Client Web Speech Synthesis (locked to British English UK female, high-pitched, enthusiastic)
    return this.speakClientFallback(cleanText, options);
  }

  private playAudioUrl(url: string, onEnd?: () => void): boolean {
    try {
      const audio = new Audio(url);
      this.currentAudioElement = audio;
      audio.onended = () => {
        this.currentAudioElement = null;
        if (onEnd) onEnd();
      };
      audio.onerror = () => {
        this.currentAudioElement = null;
        if (onEnd) onEnd();
      };
      audio.play().catch(() => {
        if (onEnd) onEnd();
      });
      return true;
    } catch {
      if (onEnd) onEnd();
      return false;
    }
  }

  private speakClientFallback(
    text: string,
    options: { rate?: number; pitch?: number; onEnd?: () => void } = {}
  ): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onEnd) options.onEnd();
      return false;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British English standard (Anh - Anh)

      if (!this.selectedFallbackVoice) {
        this.initFallbackVoice();
      }

      if (this.selectedFallbackVoice) {
        utterance.voice = this.selectedFallbackVoice;
      }

      // Tuned for high, bright, enthusiastic, cheerful British pedagogical register
      utterance.rate = options.rate ?? this.customRate;
      utterance.pitch = options.pitch ?? this.customPitch;
      utterance.volume = 1.0;

      if (options.onEnd) {
        utterance.onend = options.onEnd;
        utterance.onerror = options.onEnd;
      }

      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      if (options.onEnd) options.onEnd();
      return false;
    }
  }

  public testFemaleVoice(customText?: string) {
    const textToSpeak =
      customText ||
      "Hello everyone! Cheerful British English is here. Welcome to our lovely English class! Let's learn with a big smile! Brilliant!";
    return this.speak(textToSpeak, {
      rate: this.customRate,
      pitch: this.customPitch,
    });
  }

  public stopSpeaking() {
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundService = new SoundService();
