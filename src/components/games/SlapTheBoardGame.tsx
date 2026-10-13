import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Trophy, RotateCcw, Sparkles, Zap, Award } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { soundService } from '../../services/soundEffects';

interface SlapTheBoardGameProps {
  vocabularies: VocabularyItem[];
  onGameComplete: (score: number, starsEarned: number) => void;
}

export const SlapTheBoardGame: React.FC<SlapTheBoardGameProps> = ({
  vocabularies,
  onGameComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [round, setRound] = useState(0);
  const [targetWord, setTargetWord] = useState<VocabularyItem | null>(null);
  const [boardWords, setBoardWords] = useState<VocabularyItem[]>([]);
  const [slappedId, setSlappedId] = useState<string | null>(null);
  const [slappedState, setSlappedState] = useState<'correct' | 'wrong' | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(30);

  const totalRounds = Math.min(8, Math.max(5, vocabularies.length));
  const timerRef = useRef<number | null>(null);

  const startNewGame = () => {
    soundService.playClickSound();
    setScore(0);
    setCombo(0);
    setRound(1);
    setIsGameOver(false);
    setIsPlaying(true);
    setTimer(30);
    pickNextRound(1);
  };

  const pickNextRound = (currentRoundNum: number) => {
    if (currentRoundNum > totalRounds) {
      endGame(score);
      return;
    }

    // Pick random target word
    const randomTarget = vocabularies[Math.floor(Math.random() * vocabularies.length)];
    setTargetWord(randomTarget);

    // Pick 3-5 distractor words
    const others = vocabularies.filter((v) => v.id !== randomTarget.id);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 4);
    const activeSet = [randomTarget, ...shuffledOthers].sort(() => 0.5 - Math.random());
    setBoardWords(activeSet);
    setSlappedId(null);
    setSlappedState(null);

    // Teacher voice calls out target word
    setTimeout(() => {
      soundService.speak(randomTarget.word, { rate: 0.85 });
    }, 400);
  };

  const endGame = (finalScore: number) => {
    setIsGameOver(true);
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);

    const starsEarned = finalScore >= 50 ? 3 : finalScore >= 30 ? 2 : 1;
    soundService.playCelebrationFanfare();
    onGameComplete(finalScore, starsEarned);
  };

  // Timer countdown
  useEffect(() => {
    if (isPlaying && timer > 0) {
      timerRef.current = window.setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            endGame(score);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, timer, score]);

  const handleSlapWord = (item: VocabularyItem) => {
    if (!targetWord || slappedId) return;

    setSlappedId(item.id);
    soundService.playSlapSound();

    if (item.id === targetWord.id) {
      // Correct slap!
      setSlappedState('correct');
      soundService.playCorrectSound();
      const points = 10 + combo * 2;
      setScore((s) => s + points);
      setCombo((c) => c + 1);

      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        pickNextRound(nextRound);
      }, 700);
    } else {
      // Wrong slap
      setSlappedState('wrong');
      soundService.playWrongSound();
      setCombo(0);

      setTimeout(() => {
        setSlappedId(null);
        setSlappedState(null);
      }, 600);
    }
  };

  const handleReplayAudio = () => {
    if (targetWord) {
      soundService.speak(targetWord.word, { rate: 0.85 });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Game Info Bar */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🖐️</span>
            <h3 className="font-extrabold text-slate-900 text-lg">Đập Bảng Từ Vựng (Slap The Board)</h3>
          </div>
          <p className="text-xs text-slate-500">
            Trò chơi lớp học quen thuộc: Nghe cô giáo đọc và đập tay thật nhanh vào từ đúng trên bảng!
          </p>
        </div>

        {isPlaying && (
          <div className="flex items-center gap-4 text-sm font-bold">
            <div className="text-amber-600 flex items-center gap-1">
              <span>⭐ Điểm:</span>
              <span className="text-lg font-black">{score}</span>
            </div>
            <div className={`px-3 py-1 rounded-xl text-xs font-black ${timer <= 5 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
              ⏱️ {timer}s
            </div>
          </div>
        )}
      </div>

      {!isPlaying && !isGameOver && (
        <div className="bg-emerald-900/90 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border-4 border-amber-800 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-5xl">
            🖐️
          </div>
          <div>
            <h4 className="text-2xl font-black tracking-tight text-amber-200">Luật chơi Đập Bảng</h4>
            <p className="text-sm text-emerald-100 max-w-md mx-auto mt-2 leading-relaxed">
              1. Bấm nút <strong>Bắt đầu</strong> để vào trận.<br />
              2. Lắng nghe từ tiếng Anh được phát âm.<br />
              3. Chạm vào chữ trên bảng phấn nhanh nhất có thể để ghi điểm!
            </p>
          </div>
          <button
            onClick={startNewGame}
            className="px-8 py-3.5 bg-linear-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-900 font-extrabold rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer text-base"
          >
            Bắt đầu chơi ngay!
          </button>
        </div>
      )}

      {/* Chalkboard Game Arena */}
      {isPlaying && (
        <div className="relative bg-[#1c3f2d] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-8 border-[#78350f] overflow-hidden min-h-[380px] flex flex-col justify-between">
          {/* Top Board Bar */}
          <div className="flex items-center justify-between border-b border-emerald-700/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-amber-300">
                Vòng {round} / {totalRounds}
              </span>
              {combo > 1 && (
                <span className="text-xs font-black bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full animate-bounce">
                  🔥 Combo x{combo}
                </span>
              )}
            </div>

            {/* Listen again button */}
            <button
              onClick={handleReplayAudio}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-black transition-all cursor-pointer shadow-md"
            >
              <Volume2 className="w-4 h-4" />
              <span>Nghe lại từ</span>
            </button>
          </div>

          {/* Board Center: Chalk Words floating */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto py-4">
            {boardWords.map((item) => {
              const isSlapped = slappedId === item.id;
              let slapClass = 'bg-white/10 hover:bg-white/20 border-white/30 text-white';

              if (isSlapped) {
                if (slappedState === 'correct') {
                  slapClass = 'bg-emerald-500/80 border-emerald-300 text-white scale-105 ring-4 ring-emerald-300';
                } else if (slappedState === 'wrong') {
                  slapClass = 'bg-rose-500/80 border-rose-300 text-white animate-shake ring-4 ring-rose-300';
                }
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleSlapWord(item)}
                  className={`p-5 sm:p-6 rounded-2xl border-2 border-dashed font-extrabold text-xl sm:text-2xl tracking-wide transition-all duration-150 cursor-pointer shadow-md select-none font-sans text-center flex flex-col items-center justify-center gap-1.5 ${slapClass}`}
                >
                  <span className="text-2xl filter drop-shadow-sm">{item.icon}</span>
                  <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{item.word}</span>
                </button>
              );
            })}
          </div>

          {/* Teacher Hint at Bottom */}
          <div className="text-center pt-2 text-xs text-emerald-200/80 font-medium italic">
            "Hãy lắng nghe thật kỹ phát âm tiếng Anh và đập tay vào từ đúng trên bảng nhé!"
          </div>
        </div>
      )}

      {/* Game Over Modal */}
      {isGameOver && (
        <div className="bg-white rounded-3xl p-8 text-center border-2 border-amber-300 shadow-xl space-y-5">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-4xl shadow-xs">
            🏆
          </div>
          <div>
            <h4 className="text-2xl font-black text-slate-900">Chúc mừng em đã hoàn thành!</h4>
            <p className="text-sm text-slate-600 mt-1">
              Em đã xuất sắc đạt được <span className="font-extrabold text-amber-600 text-lg">{score}</span> điểm!
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((star) => (
              <span
                key={star}
                className={`text-3xl ${
                  score >= star * 20 ? 'text-amber-400 scale-110 transition-transform' : 'text-slate-300'
                }`}
              >
                ⭐
              </span>
            ))}
          </div>

          <button
            onClick={startNewGame}
            className="px-6 py-3 bg-linear-to-r from-amber-500 to-rose-500 text-white rounded-2xl font-bold shadow-md hover:from-amber-600 hover:to-rose-600 transition-all cursor-pointer"
          >
            Chơi lại lần nữa
          </button>
        </div>
      )}
    </div>
  );
};
