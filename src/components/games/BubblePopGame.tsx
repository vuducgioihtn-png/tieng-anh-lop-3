import React, { useState, useEffect } from 'react';
import { Volume2, Trophy, Sparkles, RotateCcw } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { soundService } from '../../services/soundEffects';

interface BubblePopGameProps {
  vocabularies: VocabularyItem[];
  onGameComplete: (score: number, starsEarned: number) => void;
}

export const BubblePopGame: React.FC<BubblePopGameProps> = ({
  vocabularies,
  onGameComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [targetWord, setTargetWord] = useState<VocabularyItem | null>(null);
  const [bubbles, setBubbles] = useState<VocabularyItem[]>([]);
  const [poppedId, setPoppedId] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const totalRounds = Math.min(8, Math.max(5, vocabularies.length));

  const startNewGame = () => {
    soundService.playClickSound();
    setScore(0);
    setRound(1);
    setIsGameOver(false);
    setIsPlaying(true);
    setupRound(1);
  };

  const setupRound = (rNum: number) => {
    if (rNum > totalRounds) {
      endGame(score);
      return;
    }

    const randomTarget = vocabularies[Math.floor(Math.random() * vocabularies.length)];
    setTargetWord(randomTarget);

    const others = vocabularies.filter((v) => v.id !== randomTarget.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const activeSet = [randomTarget, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setBubbles(activeSet);
    setPoppedId(null);

    setTimeout(() => {
      soundService.speak(randomTarget.word, { rate: 0.85 });
    }, 300);
  };

  const endGame = (finalScore: number) => {
    setIsPlaying(false);
    setIsGameOver(true);
    soundService.playCelebrationFanfare();
    const stars = finalScore >= 60 ? 3 : finalScore >= 40 ? 2 : 1;
    onGameComplete(finalScore, stars);
  };

  const handlePop = (item: VocabularyItem) => {
    if (!targetWord || poppedId) return;

    setPoppedId(item.id);

    if (item.id === targetWord.id) {
      soundService.playCorrectSound();
      setScore((s) => s + 10);

      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        setupRound(nextRound);
      }, 600);
    } else {
      soundService.playWrongSound();
      setTimeout(() => {
        setPoppedId(null);
      }, 500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🫧</span>
            <h3 className="font-extrabold text-slate-900 text-lg">Bắn Bóng Từ Vựng (Bubble Pop)</h3>
          </div>
          <p className="text-xs text-slate-500">
            Lắng nghe âm thanh và chọc nổ đúng quả bóng chứa từ vựng tương ứng!
          </p>
        </div>

        {isPlaying && (
          <div className="text-right">
            <span className="text-xs text-slate-500 font-bold block">Điểm:</span>
            <span className="text-xl font-black text-amber-600">{score}</span>
          </div>
        )}
      </div>

      {!isPlaying && !isGameOver && (
        <div className="bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600 text-white rounded-3xl p-8 text-center shadow-xl space-y-6">
          <div className="text-6xl animate-bounce">🫧</div>
          <div>
            <h4 className="text-2xl font-black">Sẵn sàng chọc bóng chưa nào?</h4>
            <p className="text-sm text-sky-100 max-w-sm mx-auto mt-2">
              Hãy lắng nghe giọng đọc mẫu và bấm vỡ quả bóng chứa từ chính xác nhé!
            </p>
          </div>
          <button
            onClick={startNewGame}
            className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer text-base"
          >
            Bắt đầu chơi!
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="relative bg-linear-to-b from-sky-100 via-indigo-50 to-purple-100 rounded-3xl p-8 border-2 border-sky-300 shadow-md min-h-[380px] flex flex-col justify-between overflow-hidden">
          {/* Top prompt bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-800 bg-sky-200 px-3 py-1 rounded-full">
              Vòng {round} / {totalRounds}
            </span>
            <button
              onClick={() => targetWord && soundService.speak(targetWord.word, { rate: 0.85 })}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200 shadow-xs cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-sky-600" />
              <span>Nghe lại</span>
            </button>
          </div>

          {/* Floating Bubbles */}
          <div className="grid grid-cols-2 gap-6 my-auto py-6">
            {bubbles.map((b) => {
              const isPopped = poppedId === b.id;
              const isTarget = targetWord?.id === b.id;

              return (
                <button
                  key={b.id}
                  onClick={() => handlePop(b)}
                  className={`relative p-6 rounded-full w-36 h-36 sm:w-44 sm:h-44 mx-auto flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-lg border-4 ${
                    isPopped
                      ? isTarget
                        ? 'scale-110 bg-emerald-400 border-emerald-500 text-white animate-ping'
                        : 'bg-rose-400 border-rose-500 text-white animate-shake'
                      : 'bg-white/90 hover:bg-white border-sky-300 hover:scale-105 active:scale-95 text-slate-800 hover:shadow-xl'
                  }`}
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.4)',
                  }}
                >
                  <span className="text-4xl sm:text-5xl mb-1 filter drop-shadow-sm">{b.icon}</span>
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    {b.word}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center text-xs font-bold text-sky-700 italic">
            "Chọc nổ đúng quả bóng chứa từ vừa nghe!"
          </div>
        </div>
      )}

      {isGameOver && (
        <div className="bg-white rounded-3xl p-8 text-center border-2 border-sky-300 shadow-xl space-y-4">
          <div className="text-5xl">🏆</div>
          <h4 className="text-2xl font-black text-slate-900">Hoàn thành xuất sắc!</h4>
          <p className="text-sm text-slate-600">
            Số điểm đạt được: <span className="font-black text-amber-600 text-xl">{score}</span>
          </p>
          <button
            onClick={startNewGame}
            className="px-6 py-3 bg-linear-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-2xl shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            Chơi lại
          </button>
        </div>
      )}
    </div>
  );
};
