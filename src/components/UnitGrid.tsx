import React, { useState } from 'react';
import { Search, Star, Award, BookOpen, CheckCircle, ChevronRight, Play } from 'lucide-react';
import { Unit, PupilProfile, Term } from '../types';
import { soundService } from '../services/soundEffects';

interface UnitGridProps {
  units: Unit[];
  profile: PupilProfile;
  currentTerm: Term | 'all';
  onSelectUnit: (unitId: number) => void;
}

export const UnitGrid: React.FC<UnitGridProps> = ({
  units,
  profile,
  currentTerm,
  onSelectUnit,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUnits = units.filter((unit) => {
    // Term filter
    if (currentTerm !== 'all' && unit.term !== currentTerm) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = unit.title.toLowerCase().includes(q);
      const matchVi = unit.vietnameseTitle.toLowerCase().includes(q);
      const matchVocab = unit.vocabularies.some(
        (v) => v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q)
      );
      return matchTitle || matchVi || matchVocab;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo chủ đề, từ vựng (ví dụ: book, pet, family...)"
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium"
          />
        </div>

        {/* Quick summary stats */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Hoàn thành: {profile.completedUnits.length} / {units.length} Unit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Thuộc: {profile.learnedWords.length} từ vựng</span>
          </div>
        </div>
      </div>

      {/* Grid of Unit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUnits.map((unit) => {
          const isCompleted = profile.completedUnits.includes(unit.id);
          const highScore = profile.highScores[unit.id];
          const masteredInUnit = unit.vocabularies.filter((v) =>
            profile.learnedWords.includes(v.id)
          ).length;

          return (
            <div
              key={unit.id}
              onClick={() => {
                soundService.playClickSound();
                onSelectUnit(unit.id);
              }}
              className="group bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {unit.unitNumber === 0 ? 'Khởi động' : `Unit ${unit.unitNumber}`} · Trang {unit.page}
                </span>

                {isCompleted ? (
                  <span className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5" /> Đã xong
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-slate-400">
                    {unit.theme}
                  </span>
                )}
              </div>

              {/* Main Info */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-3xl shrink-0 transition-colors border border-amber-200">
                    {unit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {unit.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {unit.vietnameseTitle}
                    </p>
                  </div>
                </div>

                {/* Sample Vocab Preview Tag Strip */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {unit.vocabularies.slice(0, 4).map((v) => (
                    <span
                      key={v.id}
                      className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-medium"
                    >
                      {v.word}
                    </span>
                  ))}
                  {unit.vocabularies.length > 4 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-lg text-slate-400 font-bold">
                      +{unit.vocabularies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Progress & Play Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <div>
                    Đã thuộc: <span className="font-bold text-slate-800">{masteredInUnit}/{unit.vocabularies.length}</span>
                  </div>
                  {highScore !== undefined && (
                    <div className="text-amber-600 font-bold flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{highScore}%</span>
                    </div>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-amber-500 text-amber-800 group-hover:text-white flex items-center justify-center transition-all shadow-xs group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredUnits.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <div className="text-4xl">🔍</div>
          <h4 className="text-lg font-bold text-slate-800">Không tìm thấy bài học phù hợp</h4>
          <p className="text-xs text-slate-500">
            Hãy thử tìm kiếm với từ khóa khác như "family", "book", "hello", hoặc bấm xem Tất cả bài học.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-bold"
          >
            Xóa tìm kiếm
          </button>
        </div>
      )}
    </div>
  );
};
