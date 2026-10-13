import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, RotateCcw, CheckCircle2, Delete } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { soundService } from '../../services/soundEffects';

interface WordBuilderGameProps {
  vocabularies: VocabularyItem[];
  onGameComplete: (score: number, starsEarned: number) => void;
}

export const WordBuilderGame: React.FC<WordBuilderGameProps> = ({
  vocabularies,
  onGameComplete,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentSelectedLetters, setCurrentSelectedLetters] = useState<{ id: number; char: string }[]>([]);
  const [availableTiles, setAvailableTiles] = useState<{ id: number; char: string; used: boolean }[]>([]);
  const [isWordCorrect, setIsWordCorrect] = useState(false);
  const [score, setScore] = useState(0);

  // Take words with length between 3 and 10 letters (exclude long phrases for spelling fun)
  const playableWords = vocabularies.filter(
    (v) => v.word.length >= 3 && v.word.length <= 10 && !v.word.includes(' ')
  );

  const wordsToPlay = playableWords.length > 0 ? playableWords : vocabularies.slice(0, 5);
  const currentVocab = wordsToPlay[wordIndex] || wordsToPlay[0];

  const setupWord = (targetWord: string) => {
    setCurrentSelectedLetters([]);
    setIsWordCorrect(false);

    // Split target word into chars and shuffle
    const chars = targetWord.toLowerCase().split('');
    const tiles = chars.map((char, index) => ({
      id: index,
      char,
      used: false,
    }));

    // Shuffle tiles
    setAvailableTiles([...tiles].sort(() => 0.5 - Math.random()));
    soundService.speak(targetWord, { rate: 0.85 });
  };

  useEffect(() => {
    if (currentVocab) {
      setupWord(currentVocab.word);
    }
  }, [wordIndex, currentVocab]);

  const handleTileClick = (tile: { id: number; char: string; used: boolean }) => {
    if (tile.used || isWordCorrect) return;

    soundService.playClickSound();

    const updatedTiles = availableTiles.map((t) =>
      t.id === tile.id ? { ...t, used: true } : t
    );
    setAvailableTiles(updatedTiles);

    const newSelected = [...currentSelectedLetters, { id: tile.id, char: tile.char }];
    setCurrentSelectedLetters(newSelected);

    // Check if word completed
    const assembled = newSelected.map((s) => s.char).join('');
    const target = currentVocab.word.toLowerCase();

    if (assembled.length === target.length) {
      if (assembled === target) {
        // CORRECT!
        setIsWordCorrect(true);
        soundService.playCorrectSound();
        setScore((s) => s + 15);

        setTimeout(() => {
          if (wordIndex < wordsToPlay.length - 1) {
            setWordIndex((w) => w + 1);
          } else {
            // FINISHED ALL WORDS
            soundService.playCelebrationFanfare();
            onGameComplete(100, 3);
          }
        }, 1200);
      } else {
        // WRONG ORDER
        soundService.playWrongSound();
      }
    }
  };

  const handleRemoveLetter = (indexToRemove: number) => {
    soundService.playClickSound();
    const itemToRemove = currentSelectedLetters[indexToRemove];
    setCurrentSelectedLetters((prev) => prev.filter((_, idx) => idx !== indexToRemove));

    setAvailableTiles((prev) =>
      prev.map((t) => (t.id === itemToRemove.id ? { ...t, used: false } : t))
    );
  };

  const handleResetLetters = () => {
    soundService.playClickSound();
    setCurrentSelectedLetters([]);
    setAvailableTiles((prev) => prev.map((t) => ({ ...t, used: false })));
  };

  if (!currentVocab) {
    return <div className="text-center py-8">Không có từ khả dụng để ghép chữ.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🔤</span>
            <h3 className="font-extrabold text-slate-900 text-lg">Xếp Chữ Thần Tốc (Word Builder)</h3>
          </div>
          <p className="text-xs text-slate-500">
            Chạm vào các ô chữ cái theo đúng thứ tự để tạo thành từ tiếng Anh chuẩn xác!
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-slate-500 block">Tiến độ:</span>
          <span className="text-base font-black text-amber-600">
            {wordIndex + 1} / {wordsToPlay.length} từ
          </span>
        </div>
      </div>

      {/* Target Word Card */}
      <div className="bg-linear-to-b from-amber-50 to-orange-50/50 rounded-3xl p-6 sm:p-8 text-center border-2 border-amber-200 shadow-sm space-y-6">
        {/* Visual clue & Meaning */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl filter drop-shadow-sm animate-bounce duration-1000">
            {currentVocab.icon}
          </div>
          <div className="text-2xl font-black text-slate-900">{currentVocab.meaning}</div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-slate-600 px-3 py-0.5 rounded-full bg-white border border-slate-200">
              {currentVocab.phonetic}
            </span>
            <button
              onClick={() => soundService.speak(currentVocab.word, { rate: 0.85 })}
              className="p-1.5 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-900 transition-colors cursor-pointer"
              title="Nghe phát âm"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selected Letter Slots */}
        <div className="flex flex-wrap justify-center gap-2 min-h-[64px] items-center p-3 rounded-2xl bg-white/80 border border-amber-200">
          {Array.from({ length: currentVocab.word.length }).map((_, idx) => {
            const letter = currentSelectedLetters[idx];
            return (
              <button
                key={idx}
                onClick={() => letter && handleRemoveLetter(idx)}
                className={`w-12 h-14 sm:w-14 sm:h-16 rounded-2xl font-black text-2xl sm:text-3xl flex items-center justify-center transition-all cursor-pointer border-2 shadow-xs ${
                  isWordCorrect
                    ? 'bg-emerald-500 border-emerald-600 text-white scale-105'
                    : letter
                    ? 'bg-amber-400 border-amber-500 text-slate-900 hover:bg-amber-300'
                    : 'bg-slate-100 border-dashed border-slate-300 text-transparent'
                }`}
              >
                {letter ? letter.char.toUpperCase() : '_'}
              </button>
            );
          })}
        </div>

        {/* Available Shuffled Tiles */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Chọn các chữ cái bên dưới:
          </span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {availableTiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => handleTileClick(tile)}
                disabled={tile.used || isWordCorrect}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-center transition-all cursor-pointer border-2 shadow-sm ${
                  tile.used
                    ? 'bg-slate-100 border-slate-200 text-slate-300 opacity-40 cursor-not-allowed'
                    : 'bg-white hover:bg-amber-50 hover:border-amber-400 border-slate-300 text-slate-800 hover:scale-105 active:scale-95'
                }`}
              >
                {tile.char.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Actions */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={handleResetLetters}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Xóa làm lại
          </button>
        </div>
      </div>
    </div>
  );
};
