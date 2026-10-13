import React, { useState, useEffect } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, Check, Sparkles, Shuffle } from 'lucide-react';
import { VocabularyItem } from '../types';
import { soundService } from '../services/soundEffects';

interface FlashcardViewerProps {
  vocabularies: VocabularyItem[];
  masteredIds: string[];
  onToggleMastered: (id: string) => void;
}

export const FlashcardViewer: React.FC<FlashcardViewerProps> = ({
  vocabularies,
  masteredIds,
  onToggleMastered,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSlowSpeech, setIsSlowSpeech] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Reset to first card if vocab list changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [vocabularies]);

  if (!vocabularies || vocabularies.length === 0) {
    return <div className="text-center py-12 text-slate-500">Chưa có từ vựng cho bài học này.</div>;
  }

  const currentItem = vocabularies[currentIndex];
  const isMastered = masteredIds.includes(currentItem.id);

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsSpeaking(true);
    soundService.speak(text, {
      rate: isSlowSpeech ? 0.7 : 0.88,
      onEnd: () => setIsSpeaking(false),
    });
  };

  const handleNext = () => {
    soundService.playClickSound();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % vocabularies.length);
  };

  const handlePrev = () => {
    soundService.playClickSound();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + vocabularies.length) % vocabularies.length);
  };

  const handleCardClick = () => {
    soundService.playClickSound();
    setIsFlipped(!isFlipped);
  };

  const handleToggleMaster = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMastered(currentItem.id);
    if (!isMastered) {
      soundService.playStarSound();
    } else {
      soundService.playClickSound();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Controls Toolbar */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700">
            Thẻ {currentIndex + 1} / {vocabularies.length}
          </span>
          {isMastered && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              <Check className="w-3.5 h-3.5" /> Đã thuộc
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Speed Toggle */}
          <button
            onClick={() => setIsSlowSpeech(!isSlowSpeech)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isSlowSpeech
                ? 'bg-amber-100 border-amber-300 text-amber-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Điều chỉnh tốc độ phát âm"
          >
            {isSlowSpeech ? '🐢 Giọng chậm' : '🐇 Giọng chuẩn'}
          </button>
        </div>
      </div>

      {/* 3D Flashcard Container */}
      <div
        onClick={handleCardClick}
        className="relative w-full h-84 sm:h-96 rounded-3xl cursor-pointer perspective-1000 select-none transition-transform active:scale-[0.99]"
      >
        <div
          className={`relative w-full h-full rounded-3xl shadow-xl transition-all duration-500 transform-style-preserve-3d border-2 ${
            isFlipped
              ? 'rotate-y-180 bg-linear-to-br from-indigo-50 via-white to-sky-50 border-indigo-200'
              : 'bg-linear-to-br from-amber-50/60 via-white to-orange-50/40 border-amber-200'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* FRONT SIDE (English Word, Visual Icon, IPA, Audio Button) */}
          <div
            className="absolute inset-0 p-8 flex flex-col items-center justify-between backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Top row */}
            <div className="w-full flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">Chạm vào thẻ để xem nghĩa tiếng Việt</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-bold"
              >
                <RotateCw className="w-3.5 h-3.5" /> Lật thẻ
              </button>
            </div>

            {/* Central Content */}
            <div className="flex flex-col items-center text-center my-auto space-y-3">
              {/* Visual Icon / Emoji Frame */}
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center text-5xl sm:text-6xl shadow-md border-2 border-white"
                style={{ backgroundColor: `${currentItem.color}15` }}
              >
                {currentItem.icon}
              </div>

              {/* English Word */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {currentItem.word}
              </h3>

              {/* Phonetic IPA */}
              <span className="font-mono text-sm sm:text-base font-semibold text-slate-500 px-3 py-1 rounded-full bg-slate-100">
                {currentItem.phonetic}
              </span>
            </div>

            {/* Bottom Audio & Action */}
            <div className="w-full flex items-center justify-between pt-2">
              <button
                onClick={(e) => handleSpeak(currentItem.word, e)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-md transition-all cursor-pointer ${
                  isSpeaking
                    ? 'bg-amber-600 scale-95'
                    : 'bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:scale-105'
                }`}
              >
                <Volume2 className="w-5 h-5" />
                <span>Nghe phát âm</span>
              </button>

              <button
                onClick={handleToggleMaster}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  isMastered
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{isMastered ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}</span>
              </button>
            </div>
          </div>

          {/* BACK SIDE (Vietnamese Meaning, Textbook Example Sentence) */}
          <div
            className="absolute inset-0 p-8 flex flex-col items-center justify-between backface-hidden rotate-y-180"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Top row */}
            <div className="w-full flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">Nghĩa & Ví dụ trong sách</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold"
              >
                <RotateCw className="w-3.5 h-3.5" /> Lật về trước
              </button>
            </div>

            {/* Central Content */}
            <div className="flex flex-col items-center text-center my-auto space-y-4 max-w-lg">
              <div className="text-4xl">{currentItem.icon}</div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block mb-1">
                  Nghĩa tiếng Việt
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentItem.meaning}
                </h4>
              </div>

              {/* Example in textbook */}
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-indigo-100 shadow-xs text-left w-full">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-500">Câu ví dụ trong bài:</span>
                  <button
                    onClick={(e) => handleSpeak(currentItem.exampleEn, e)}
                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-base font-bold text-indigo-900 leading-snug">
                  "{currentItem.exampleEn}"
                </p>
                <p className="text-xs text-slate-600 mt-1 italic">
                  → {currentItem.exampleVi}
                </p>
              </div>
            </div>

            {/* Bottom Audio & Action */}
            <div className="w-full flex items-center justify-between pt-2">
              <button
                onClick={(e) => handleSpeak(currentItem.word, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold bg-indigo-100 hover:bg-indigo-200 text-indigo-900 transition-colors cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Đọc từ: {currentItem.word}</span>
              </button>

              <button
                onClick={handleToggleMaster}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  isMastered
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{isMastered ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl font-bold border border-slate-200 shadow-xs transition-all cursor-pointer hover:border-slate-300 active:scale-98"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Từ trước</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-2xl font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer active:scale-98"
        >
          <span>Từ tiếp theo</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail Card Strip */}
      <div className="pt-4 border-t border-slate-200">
        <span className="text-xs font-bold text-slate-500 block mb-2">Danh sách từ vựng Unit này:</span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {vocabularies.map((item, idx) => {
            const mastered = masteredIds.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundService.playClickSound();
                  setIsFlipped(false);
                  setCurrentIndex(idx);
                }}
                className={`px-3 py-2 rounded-xl text-left border shrink-0 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'
                    : mastered
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300'
                }`}
              >
                <div className="text-xs flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  <span className="font-semibold">{item.word}</span>
                  {mastered && <span className="text-[10px]">✓</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
