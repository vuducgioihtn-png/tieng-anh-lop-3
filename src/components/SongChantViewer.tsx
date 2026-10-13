import React, { useState } from 'react';
import { Volume2, Play, Square, Music, Sparkles } from 'lucide-react';
import { SongOrChant } from '../types';
import { soundService } from '../services/soundEffects';

interface SongChantViewerProps {
  chant?: SongOrChant;
}

export const SongChantViewer: React.FC<SongChantViewerProps> = ({ chant }) => {
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  if (!chant) {
    return <div className="text-center py-8 text-slate-500">Bài này không có chant.</div>;
  }

  const handlePlayLine = (line: string, index: number) => {
    soundService.playClickSound();
    setActiveLine(index);
    soundService.speak(line, {
      rate: 0.85,
      onEnd: () => {
        if (!isPlayingAll) setActiveLine(null);
      },
    });
  };

  const playSequence = (idx: number) => {
    if (idx >= chant.lines.length) {
      setIsPlayingAll(false);
      setActiveLine(null);
      return;
    }
    setActiveLine(idx);
    soundService.speak(chant.lines[idx], {
      rate: 0.85,
      onEnd: () => {
        setTimeout(() => playSequence(idx + 1), 350);
      },
    });
  };

  const handlePlayAll = () => {
    if (isPlayingAll) {
      soundService.stopSpeaking();
      setIsPlayingAll(false);
      setActiveLine(null);
    } else {
      setIsPlayingAll(true);
      playSequence(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-6 text-white flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
            🎵
          </div>
          <div>
            <span className="text-xs font-bold text-rose-100 uppercase tracking-wider block">
              Let's Chant & Sing
            </span>
            <h3 className="text-xl sm:text-2xl font-black">{chant.title}</h3>
          </div>
        </div>

        <button
          onClick={handlePlayAll}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
            isPlayingAll
              ? 'bg-white text-rose-600 hover:bg-rose-50'
              : 'bg-amber-300 text-slate-900 hover:bg-amber-200 hover:scale-105'
          }`}
        >
          {isPlayingAll ? <Square className="w-4 h-4 fill-rose-600" /> : <Play className="w-4 h-4 fill-slate-900" />}
          <span>{isPlayingAll ? 'Dừng đọc' : 'Đọc toàn bài'}</span>
        </button>
      </div>

      {/* Lyrics Paper Card (Styled like textbook manuscript scroll) */}
      <div className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border-2 border-dashed border-amber-300 shadow-sm space-y-3">
        <div className="text-center pb-2 border-b border-amber-200">
          <span className="text-xs font-bold text-amber-800">
            Chạm vào từng câu để nghe giai điệu đọc mẫu:
          </span>
        </div>

        <div className="space-y-2 pt-2">
          {chant.lines.map((line, idx) => {
            const isActive = activeLine === idx;
            return (
              <div
                key={idx}
                onClick={() => handlePlayLine(line, idx)}
                className={`flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-300/80 text-amber-950 font-black scale-102 shadow-xs'
                    : 'hover:bg-white/90 text-slate-800 font-bold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 text-xs text-amber-700/60 font-mono text-right">
                    {idx + 1}.
                  </span>
                  <p className="text-base sm:text-lg leading-relaxed">{line}</p>
                </div>

                <button
                  className={`p-1.5 rounded-lg transition-colors ${
                    isActive ? 'text-amber-950' : 'text-slate-400 hover:text-amber-700'
                  }`}
                  title="Nghe câu này"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
