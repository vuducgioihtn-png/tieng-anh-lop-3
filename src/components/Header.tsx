import React, { useState } from 'react';
import { Volume2, VolumeX, Award, Sparkles, BookOpen, SlidersHorizontal } from 'lucide-react';
import { PupilProfile, Term } from '../types';
import { soundService } from '../services/soundEffects';
import { VoiceSettingsModal } from './VoiceSettingsModal';

interface HeaderProps {
  currentTerm: Term | 'all';
  onSelectTerm: (term: Term | 'all') => void;
  profile: PupilProfile;
  onOpenProfile: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  activeView: 'home' | 'unit';
  onGoHome: () => void;
  currentUnitTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTerm,
  onSelectTerm,
  profile,
  onOpenProfile,
  isMuted,
  onToggleMute,
  activeView,
  onGoHome,
  currentUnitTitle,
}) => {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              soundService.playClickSound();
              onGoHome();
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                  Tiếng Anh 3
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                  Global Success
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block mt-0.5">
                Kết Nối Tri Thức Với Cuộc Sống
              </p>
            </div>
          </button>
        </div>

        {/* Center Navigation: Filter by Term */}
        {activeView === 'home' ? (
          <nav className="flex items-center bg-slate-100 p-1 rounded-xl text-xs sm:text-sm font-semibold">
            <button
              onClick={() => {
                soundService.playClickSound();
                onSelectTerm('all');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentTerm === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả 20 Unit
            </button>
            <button
              onClick={() => {
                soundService.playClickSound();
                onSelectTerm(1);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentTerm === 1
                  ? 'bg-amber-500 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📘 Tập 1 (Unit 1-10)
            </button>
            <button
              onClick={() => {
                soundService.playClickSound();
                onSelectTerm(2);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentTerm === 2
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📗 Tập 2 (Unit 11-20)
            </button>
          </nav>
        ) : (
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-600 truncate max-w-md">
            <button
              onClick={onGoHome}
              className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer underline underline-offset-4"
            >
              Danh sách bài học
            </button>
            <span>/</span>
            <span className="font-bold text-slate-800 truncate">{currentUnitTitle}</span>
          </div>
        )}

        {/* Right Zone: Female voice tester, Audio toggle & Pupil Card Profile button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Bright British English Female Voice Pill & Tuning Trigger */}
          <div className="hidden sm:flex items-center rounded-xl bg-linear-to-r from-rose-50 to-pink-50 border border-rose-200 text-rose-800 text-xs font-bold shadow-2xs hover:shadow-xs transition-all">
            <button
              onClick={() => {
                soundService.playClickSound();
                setIsVoiceModalOpen(true);
              }}
              title="Bấm để tùy chỉnh độ cao giọng và vang sáng hoặc chọn giọng cô giáo Anh - Anh"
              className="flex items-center gap-1.5 px-3 py-1.5 hover:text-rose-950 transition-colors cursor-pointer"
            >
              <span>👩‍🏫</span>
              <span>{soundService.getVoiceDisplayName()}</span>
              <SlidersHorizontal className="w-3 h-3 text-rose-500" />
            </button>
            <div className="h-4 w-px bg-rose-200" />
            <button
              onClick={() => {
                soundService.testFemaleVoice();
              }}
              title="Bấm để nghe thử giọng cô giáo Anh - Anh vui tươi hào hứng"
              className="p-1.5 hover:bg-rose-100 rounded-r-xl transition-colors cursor-pointer text-rose-600 hover:text-rose-900"
              aria-label="Nghe thử giọng"
            >
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleMute();
            }}
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-500" /> : <Volume2 className="w-5 h-5 text-emerald-600" />}
          </button>

          {/* Pupil Card Button */}
          <button
            onClick={() => {
              soundService.playClickSound();
              onOpenProfile();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all cursor-pointer shadow-xs"
          >
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
              ⭐
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-xs font-bold block leading-none">{profile.name}</span>
              <span className="text-[10px] text-amber-700 font-medium">Lớp {profile.className}</span>
            </div>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full bg-amber-200 text-amber-900">
              {profile.stars}
            </span>
          </button>
        </div>
      </div>
    </header>

    {/* Dedicated Bright Female Voice Settings Modal */}
    <VoiceSettingsModal
      isOpen={isVoiceModalOpen}
      onClose={() => setIsVoiceModalOpen(false)}
    />
  </>
  );
};
