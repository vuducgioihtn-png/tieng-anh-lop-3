import React, { useState, useEffect } from 'react';
import { RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { VocabularyItem } from '../../types';
import { soundService } from '../../services/soundEffects';

interface MemoryMatchGameProps {
  vocabularies: VocabularyItem[];
  onGameComplete: (score: number, starsEarned: number) => void;
}

interface Card {
  id: string; // unique card id
  vocabId: string;
  type: 'word' | 'meaning';
  text: string;
  subText?: string;
  icon?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryMatchGame: React.FC<MemoryMatchGameProps> = ({
  vocabularies,
  onGameComplete,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [isWon, setIsWon] = useState(false);

  // Take up to 6 pairs for a clean 3x4 grid suitable for kids
  const pairCount = Math.min(6, vocabularies.length);

  const initGame = () => {
    soundService.playClickSound();
    setMoves(0);
    setMatchedCount(0);
    setIsWon(false);
    setFlippedCards([]);

    // Select vocabularies
    const selectedVocabs = [...vocabularies].sort(() => 0.5 - Math.random()).slice(0, pairCount);

    const generatedCards: Card[] = [];
    selectedVocabs.forEach((v) => {
      // Card 1: English word with icon
      generatedCards.push({
        id: `${v.id}-word`,
        vocabId: v.id,
        type: 'word',
        text: v.word,
        subText: v.phonetic,
        icon: v.icon,
        isFlipped: false,
        isMatched: false,
      });

      // Card 2: Vietnamese meaning
      generatedCards.push({
        id: `${v.id}-meaning`,
        vocabId: v.id,
        type: 'meaning',
        text: v.meaning,
        icon: '🇻🇳',
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    setCards(generatedCards.sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    initGame();
  }, [vocabularies]);

  const handleCardClick = (card: Card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) return;

    soundService.playClickSound();
    if (card.type === 'word') {
      soundService.speak(card.text, { rate: 0.85 });
    }

    const updated = cards.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c));
    setCards(updated);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;

      if (first.vocabId === second.vocabId) {
        // MATCH!
        soundService.playCorrectSound();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.vocabId === first.vocabId ? { ...c, isMatched: true, isFlipped: true } : c
            )
          );
          setFlippedCards([]);
          const newMatched = matchedCount + 1;
          setMatchedCount(newMatched);

          if (newMatched === pairCount) {
            // GAME WON!
            setIsWon(true);
            soundService.playCelebrationFanfare();
            const stars = moves <= pairCount + 2 ? 3 : moves <= pairCount + 6 ? 2 : 1;
            onGameComplete(100, stars);
          }
        }, 500);
      } else {
        // NO MATCH
        soundService.playWrongSound();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
        }, 900);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top status */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🎴</span>
            <h3 className="font-extrabold text-slate-900 text-lg">Trò Chơi Nối Thẻ (Memory Match)</h3>
          </div>
          <p className="text-xs text-slate-500">
            Lật thẻ để tìm cặp đôi ăn ý giữa từ tiếng Anh và nghĩa tiếng Việt!
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-bold">
          <div className="text-slate-600">
            Số lượt lật: <span className="font-black text-slate-900">{moves}</span>
          </div>
          <div className="text-emerald-700">
            Đã ghép: <span className="font-black">{matchedCount} / {pairCount}</span>
          </div>
          <button
            onClick={initGame}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
            title="Chơi lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="h-28 sm:h-32 rounded-2xl cursor-pointer perspective-1000 select-none"
            >
              <div
                className={`w-full h-full rounded-2xl border-2 transition-all duration-300 transform-style-preserve-3d flex items-center justify-center p-3 text-center shadow-xs ${
                  card.isMatched
                    ? 'bg-emerald-50 border-emerald-400 opacity-90 scale-95'
                    : card.isFlipped
                    ? card.type === 'word'
                      ? 'bg-linear-to-br from-amber-50 to-orange-50 border-amber-400'
                      : 'bg-linear-to-br from-indigo-50 to-sky-50 border-indigo-400'
                    : 'bg-linear-to-br from-slate-100 to-slate-200 hover:from-amber-100 hover:to-orange-100 border-slate-300'
                }`}
              >
                {card.isFlipped || card.isMatched ? (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl mb-1">{card.icon}</span>
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                      {card.text}
                    </span>
                    {card.subText && (
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                        {card.subText}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <span className="text-2xl">❓</span>
                    <span className="text-[11px] font-bold mt-1 text-slate-500">Chạm để lật</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Victory Announcement */}
      {isWon && (
        <div className="bg-emerald-50 rounded-3xl p-8 text-center border-2 border-emerald-300 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="text-5xl">🎉</div>
          <div>
            <h4 className="text-2xl font-black text-emerald-900">Tuyệt vời! Em đã ghép đúng tất cả!</h4>
            <p className="text-sm text-emerald-700 mt-1">
              Hoàn thành chỉ sau <span className="font-bold">{moves}</span> lượt lật thẻ.
            </p>
          </div>
          <button
            onClick={initGame}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md transition-transform hover:scale-105 cursor-pointer"
          >
            Chơi lại ván mới
          </button>
        </div>
      )}
    </div>
  );
};
