import React, { useState } from 'react';
import { Volume2, Sparkles, MessageCircle, Mic, CheckCircle2, RotateCcw } from 'lucide-react';
import { SentencePattern, PhonicsItem } from '../types';
import { soundService } from '../services/soundEffects';

interface SentencePatternsProps {
  patterns: SentencePattern[];
  phonics: PhonicsItem[];
}

export const SentencePatterns: React.FC<SentencePatternsProps> = ({
  patterns,
  phonics,
}) => {
  const [activePatternIndex, setActivePatternIndex] = useState(0);

  const handleSpeak = (text: string) => {
    soundService.speak(text, { rate: 0.85 });
  };

  const currentPattern = patterns[activePatternIndex] || patterns[0];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Pattern Selector Tabs if multiple patterns exist */}
      {patterns.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {patterns.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                soundService.playClickSound();
                setActivePatternIndex(idx);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap border ${
                activePatternIndex === idx
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Mẫu câu {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Main Pattern Card */}
      {currentPattern && (
        <div className="bg-linear-to-br from-amber-50/50 via-white to-rose-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-sm space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Mẫu câu trọng tâm
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentPattern.pattern}
            </h3>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              💡 {currentPattern.explanation}
            </p>
          </div>

          {/* Dialogues & Character Roleplay */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-amber-500" />
              Hội thoại mẫu trong sách giáo khoa:
            </h4>

            <div className="space-y-3">
              {currentPattern.examples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3"
                >
                  {/* Speaker A */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 border border-amber-300">
                      {ex.speakerA.slice(0, 2)}
                    </div>
                    <div className="flex-1 bg-amber-50/80 rounded-2xl rounded-tl-none p-3 border border-amber-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-900">{ex.speakerA}:</span>
                        <button
                          onClick={() => handleSpeak(ex.textA)}
                          className="p-1 rounded-lg hover:bg-amber-200 text-amber-800 transition-colors cursor-pointer"
                          title="Nghe câu"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-base font-bold text-slate-900 mt-0.5">"{ex.textA}"</p>
                    </div>
                  </div>

                  {/* Speaker B */}
                  <div className="flex items-start gap-3 pl-4 sm:pl-8">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs shrink-0 border border-indigo-300">
                      {ex.speakerB.slice(0, 2)}
                    </div>
                    <div className="flex-1 bg-indigo-50/80 rounded-2xl rounded-tl-none p-3 border border-indigo-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-900">{ex.speakerB}:</span>
                        <button
                          onClick={() => handleSpeak(ex.textB)}
                          className="p-1 rounded-lg hover:bg-indigo-200 text-indigo-800 transition-colors cursor-pointer"
                          title="Nghe câu"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-base font-bold text-slate-900 mt-0.5">"{ex.textB}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Phonics & Pronunciation Section */}
      {phonics && phonics.length > 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗣️</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Góc Ngữ Âm (Phonics)</h3>
                <p className="text-xs text-slate-500">Luyện nghe và phát âm chuẩn từng âm tiết</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {phonics.map((p, idx) => (
              <div
                key={idx}
                className="bg-indigo-50/60 rounded-2xl p-4 border border-indigo-200 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-indigo-200 pb-2">
                  <span className="text-xl font-black text-indigo-900 tracking-wide font-mono">
                    {p.sound}
                  </span>
                  <button
                    onClick={() => handleSpeak(p.sound)}
                    className="p-1.5 rounded-xl bg-indigo-200 hover:bg-indigo-300 text-indigo-900 transition-colors cursor-pointer"
                    title="Nghe âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  {p.sampleWords.map((sw, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white rounded-xl p-2.5 border border-indigo-100 flex items-center justify-between gap-2 shadow-2xs"
                    >
                      <div>
                        <span className="text-sm font-bold text-indigo-600 block">{sw.word}</span>
                        <span className="text-xs text-slate-700 italic">"{sw.sentence}"</span>
                      </div>
                      <button
                        onClick={() => handleSpeak(sw.sentence)}
                        className="p-1 text-slate-400 hover:text-indigo-600 transition-colors"
                        title="Nghe câu"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
