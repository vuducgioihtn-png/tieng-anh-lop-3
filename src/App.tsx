import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { UnitGrid } from './components/UnitGrid';
import { UnitDashboard } from './components/UnitDashboard';
import { PupilCardModal } from './components/PupilCardModal';
import { UNITS_DATA } from './data/curriculum';
import { PupilProfile, Term } from './types';
import { soundService } from './services/soundEffects';
import { BookOpen, Sparkles, Award, Star, Compass, Smile, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'tienganh3_global_success_profile_v1';

const DEFAULT_PROFILE: PupilProfile = {
  name: 'Lê Văn Thanh',
  className: '3A',
  school: 'Tiểu học Sao Mai',
  avatarId: 'ben',
  stars: 12,
  completedUnits: [0, 1],
  highScores: { 0: 100, 1: 100 },
  learnedWords: ['s-1', 's-2', 'u1-1', 'u1-2'],
};

export default function App() {
  const [profile, setProfile] = useState<PupilProfile>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // LocalStorage parse error fallback
      }
    }
    return DEFAULT_PROFILE;
  });

  const [currentTerm, setCurrentTerm] = useState<Term | 'all'>('all');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sync profile to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // LocalStorage error ignore
    }
  }, [profile]);

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundService.setMuted(nextMuted);
  };

  const handleToggleMasteredWord = (vocabId: string) => {
    setProfile((prev) => {
      const alreadyLearned = prev.learnedWords.includes(vocabId);
      const updatedWords = alreadyLearned
        ? prev.learnedWords.filter((id) => id !== vocabId)
        : [...prev.learnedWords, vocabId];

      const starBonus = alreadyLearned ? 0 : 1;

      return {
        ...prev,
        learnedWords: updatedWords,
        stars: prev.stars + starBonus,
      };
    });
  };

  const handleUpdateStars = (starsToAdd: number, unitId: number) => {
    setProfile((prev) => ({
      ...prev,
      stars: prev.stars + starsToAdd,
      completedUnits: prev.completedUnits.includes(unitId)
        ? prev.completedUnits
        : [...prev.completedUnits, unitId],
    }));
  };

  const handleSaveQuizResult = (unitId: number, scorePercent: number, starsEarned: number) => {
    setProfile((prev) => {
      const currentHigh = prev.highScores[unitId] || 0;
      const newHigh = Math.max(currentHigh, scorePercent);
      const isCompleted = prev.completedUnits.includes(unitId) || scorePercent >= 60;

      return {
        ...prev,
        stars: prev.stars + starsEarned,
        completedUnits: isCompleted && !prev.completedUnits.includes(unitId)
          ? [...prev.completedUnits, unitId]
          : prev.completedUnits,
        highScores: {
          ...prev.highScores,
          [unitId]: newHigh,
        },
      };
    });
  };

  const handleUpdateProfile = (updated: Partial<PupilProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const selectedUnit = selectedUnitId !== null ? UNITS_DATA.find((u) => u.id === selectedUnitId) : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Universal Top Bar */}
      <Header
        currentTerm={currentTerm}
        onSelectTerm={setCurrentTerm}
        profile={profile}
        onOpenProfile={() => setIsProfileOpen(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        activeView={selectedUnitId !== null ? 'unit' : 'home'}
        onGoHome={() => setSelectedUnitId(null)}
        currentUnitTitle={selectedUnit?.title}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8">
        {selectedUnit ? (
          <UnitDashboard
            unit={selectedUnit}
            onBack={() => setSelectedUnitId(null)}
            onSelectUnit={(id) => setSelectedUnitId(id)}
            allUnits={UNITS_DATA}
            profile={profile}
            onToggleMasteredWord={handleToggleMasteredWord}
            onUpdateStars={handleUpdateStars}
            onSaveQuizResult={handleSaveQuizResult}
            onOpenPupilCard={() => setIsProfileOpen(true)}
          />
        ) : (
          <div className="space-y-8">
            {/* Friendly Hero Banner for Grade 3 Students */}
            <div className="relative rounded-3xl bg-linear-to-r from-amber-400 via-orange-400 to-rose-400 p-6 sm:p-10 text-white shadow-xl overflow-hidden">
              <div className="relative z-10 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-900" /> Sách Giáo Khoa Tiếng Anh Lớp 3
                </div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Chào mừng em đến với thế giới Tiếng Anh 3!
                </h1>
                <p className="text-base sm:text-lg text-amber-950 font-semibold leading-relaxed">
                  Đồng hành cùng Ben, Mai, Nam, Lucy khám phá trọn bộ 20 bài học theo sách giáo khoa Global Success qua Flashcard 3D thông minh, trò chơi đập bảng lớp học và bài kiểm tra bổ ích!
                </p>

                {/* Quick Action Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-900">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 shadow-2xs">
                    <span className="text-base">🗂️</span> Flashcard phát âm chuẩn
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 shadow-2xs">
                    <span className="text-base">🖐️</span> Trò chơi Đập Bảng
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 shadow-2xs">
                    <span className="text-base">📝</span> Kiểm tra có sao thưởng
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 shadow-2xs">
                    <span className="text-base">🎵</span> Hát và đọc vè (Chant)
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icons */}
              <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-6xl shadow-lg">
                  🎒
                </div>
                <span className="text-xs font-black bg-amber-900/30 px-3 py-1 rounded-full text-white">
                  Kết Nối Tri Thức
                </span>
              </div>
            </div>

            {/* Units Catalog Section */}
            <UnitGrid
              units={UNITS_DATA}
              profile={profile}
              currentTerm={currentTerm}
              onSelectUnit={(id) => setSelectedUnitId(id)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium">
            Bộ Sách Giáo Khoa Tiếng Anh 3 (Tập 1 & Tập 2) · Nhà Xuất Bản Giáo Dục Việt Nam
          </p>
          <div className="flex items-center gap-4 font-semibold text-slate-600">
            <span>20 Unit & Starter</span>
            <span>·</span>
            <span>Flashcard 3D & TTS</span>
            <span>·</span>
            <span>Trò chơi tương tác</span>
          </div>
        </div>
      </footer>

      {/* Pupil Card Profile Modal */}
      <PupilCardModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}
