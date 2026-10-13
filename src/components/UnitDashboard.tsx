import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, CheckCircle2, Gamepad2, BookOpen, MessageCircle, FileText, Music, Sparkles } from 'lucide-react';
import { Unit, PupilProfile } from '../types';
import { soundService } from '../services/soundEffects';
import { FlashcardViewer } from './FlashcardViewer';
import { SentencePatterns } from './SentencePatterns';
import { SlapTheBoardGame } from './games/SlapTheBoardGame';
import { MemoryMatchGame } from './games/MemoryMatchGame';
import { WordBuilderGame } from './games/WordBuilderGame';
import { BubblePopGame } from './games/BubblePopGame';
import { SongChantViewer } from './SongChantViewer';
import { UnitTestModal } from './UnitTestModal';
import { LessonViewer } from './lessons/LessonViewer';

interface UnitDashboardProps {
  unit: Unit;
  onBack: () => void;
  onSelectUnit: (unitId: number) => void;
  allUnits: Unit[];
  profile: PupilProfile;
  onToggleMasteredWord: (vocabId: string) => void;
  onUpdateStars: (stars: number, unitId: number) => void;
  onSaveQuizResult: (unitId: number, scorePercent: number, starsEarned: number) => void;
  onOpenPupilCard?: () => void;
}

type TabType = 'lessons' | 'flashcard' | 'patterns' | 'games' | 'chant' | 'quiz';
type GameType = 'slap' | 'memory' | 'builder' | 'bubble';

export const UnitDashboard: React.FC<UnitDashboardProps> = ({
  unit,
  onBack,
  onSelectUnit,
  allUnits,
  profile,
  onToggleMasteredWord,
  onUpdateStars,
  onSaveQuizResult,
  onOpenPupilCard,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('lessons');
  const [activeGame, setActiveGame] = useState<GameType>('slap');
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const currentIndex = allUnits.findIndex((u) => u.id === unit.id);
  const prevUnit = currentIndex > 0 ? allUnits[currentIndex - 1] : null;
  const nextUnit = currentIndex < allUnits.length - 1 ? allUnits[currentIndex + 1] : null;

  const unitHighScore = profile.highScores[unit.id];
  const isCompleted = profile.completedUnits.includes(unit.id);

  const handleGameComplete = (score: number, starsEarned: number) => {
    onUpdateStars(starsEarned, unit.id);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            soundService.playClickSound();
            onBack();
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </button>

        <div className="flex items-center gap-2">
          {prevUnit && (
            <button
              onClick={() => {
                soundService.playClickSound();
                onSelectUnit(prevUnit.id);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              title={prevUnit.title}
            >
              <span>← Bài trước</span>
            </button>
          )}
          {nextUnit && (
            <button
              onClick={() => {
                soundService.playClickSound();
                onSelectUnit(nextUnit.id);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold cursor-pointer shadow-xs"
              title={nextUnit.title}
            >
              <span>Bài sau →</span>
            </button>
          )}
        </div>
      </div>

      {/* Unit Hero Banner */}
      <div className="bg-linear-to-r from-amber-500 via-rose-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wide">
                Tập {unit.term} · Trang {unit.page} SGK
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold">
                {unit.theme}
              </span>
              {isCompleted && (
                <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-900 text-xs font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
              <span>{unit.icon}</span>
              <span>{unit.title}</span>
            </h1>
            <p className="text-base sm:text-lg text-amber-100 font-semibold">
              {unit.vietnameseTitle}
            </p>

            {/* Competences */}
            <div className="pt-2 flex flex-wrap gap-2">
              {unit.competences.map((c, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/15 px-3 py-1 rounded-lg text-white font-medium"
                >
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Quiz CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center shrink-0 min-w-[200px] flex flex-col items-center justify-center space-y-2">
            <div className="text-xs text-amber-200 font-bold uppercase tracking-wider">
              Điểm kiểm tra Unit
            </div>
            <div className="text-3xl font-black">
              {unitHighScore !== undefined ? `${unitHighScore}%` : '--'}
            </div>
            <button
              onClick={() => {
                soundService.playClickSound();
                setIsQuizModalOpen(true);
              }}
              className="w-full py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              📝 {unitHighScore !== undefined ? 'Làm lại kiểm tra' : 'Làm bài kiểm tra'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 scrollbar-none">
        <button
          onClick={() => {
            soundService.playClickSound();
            setActiveTab('lessons');
          }}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'lessons'
              ? 'border-amber-500 text-amber-700 font-extrabold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Lesson 1 · 2 · 3 (SGK)</span>
          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">
            Mới
          </span>
        </button>

        <button
          onClick={() => {
            soundService.playClickSound();
            setActiveTab('flashcard');
          }}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'flashcard'
              ? 'border-amber-500 text-amber-700 font-extrabold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Flashcard & Từ vựng ({unit.vocabularies.length})</span>
        </button>

        <button
          onClick={() => {
            soundService.playClickSound();
            setActiveTab('patterns');
          }}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'patterns'
              ? 'border-amber-500 text-amber-700 font-extrabold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span>Mẫu câu & Ngữ âm ({unit.patterns.length})</span>
        </button>

        <button
          onClick={() => {
            soundService.playClickSound();
            setActiveTab('games');
          }}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'games'
              ? 'border-amber-500 text-amber-700 font-extrabold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>Trò chơi tương tác (4 Games)</span>
        </button>

        {unit.chant && (
          <button
            onClick={() => {
              soundService.playClickSound();
              setActiveTab('chant');
            }}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'chant'
                ? 'border-amber-500 text-amber-700 font-extrabold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Bài hát & Vè</span>
          </button>
        )}

        <button
          onClick={() => {
            soundService.playClickSound();
            setIsQuizModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-sm font-bold text-rose-600 hover:text-rose-700 cursor-pointer ml-auto whitespace-nowrap"
        >
          <FileText className="w-4 h-4" />
          <span>Làm bài kiểm tra ⭐</span>
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="pt-2">
        {activeTab === 'lessons' && (
          <LessonViewer unitId={unit.id} onOpenPupilCard={onOpenPupilCard || (() => {})} />
        )}

        {activeTab === 'flashcard' && (
          <FlashcardViewer
            vocabularies={unit.vocabularies}
            masteredIds={profile.learnedWords}
            onToggleMastered={onToggleMasteredWord}
          />
        )}

        {activeTab === 'patterns' && (
          <SentencePatterns patterns={unit.patterns} phonics={unit.phonics} />
        )}

        {activeTab === 'games' && (
          <div className="space-y-6">
            {/* Game Selector Sub-tabs */}
            <div className="flex items-center justify-center gap-2 bg-slate-100 p-1.5 rounded-2xl max-w-xl mx-auto">
              <button
                onClick={() => {
                  soundService.playClickSound();
                  setActiveGame('slap');
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeGame === 'slap'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🖐️ Đập Bảng
              </button>
              <button
                onClick={() => {
                  soundService.playClickSound();
                  setActiveGame('memory');
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeGame === 'memory'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🎴 Nối Thẻ
              </button>
              <button
                onClick={() => {
                  soundService.playClickSound();
                  setActiveGame('builder');
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeGame === 'builder'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🔤 Xếp Chữ
              </button>
              <button
                onClick={() => {
                  soundService.playClickSound();
                  setActiveGame('bubble');
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeGame === 'bubble'
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🫧 Bắn Bóng
              </button>
            </div>

            {/* Active Game Container */}
            {activeGame === 'slap' && (
              <SlapTheBoardGame
                vocabularies={unit.vocabularies}
                onGameComplete={handleGameComplete}
              />
            )}
            {activeGame === 'memory' && (
              <MemoryMatchGame
                vocabularies={unit.vocabularies}
                onGameComplete={handleGameComplete}
              />
            )}
            {activeGame === 'builder' && (
              <WordBuilderGame
                vocabularies={unit.vocabularies}
                onGameComplete={handleGameComplete}
              />
            )}
            {activeGame === 'bubble' && (
              <BubblePopGame
                vocabularies={unit.vocabularies}
                onGameComplete={handleGameComplete}
              />
            )}
          </div>
        )}

        {activeTab === 'chant' && <SongChantViewer chant={unit.chant} />}
      </div>

      {/* Quiz Modal */}
      <UnitTestModal
        unit={unit}
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onSaveQuizResult={onSaveQuizResult}
      />
    </div>
  );
};
