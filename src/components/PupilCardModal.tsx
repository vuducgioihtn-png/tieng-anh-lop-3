import React, { useState } from 'react';
import { X, Award, Star, BookOpen, CheckCircle, Edit2, Save } from 'lucide-react';
import { PupilProfile } from '../types';
import { CHARACTER_AVATARS, UNITS_DATA } from '../data/curriculum';
import { soundService } from '../services/soundEffects';

interface PupilCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PupilProfile;
  onUpdateProfile: (updated: Partial<PupilProfile>) => void;
}

export const PupilCardModal: React.FC<PupilCardModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [className, setClassName] = useState(profile.className);
  const [school, setSchool] = useState(profile.school);
  const [avatarId, setAvatarId] = useState(profile.avatarId);

  if (!isOpen) return null;

  const currentAvatar = CHARACTER_AVATARS.find((a) => a.id === avatarId) || CHARACTER_AVATARS[0];

  const handleSave = () => {
    onUpdateProfile({
      name: name.trim() || 'Học sinh',
      className: className.trim() || '3A',
      school: school.trim() || 'Tiểu học Sao Mai',
      avatarId,
    });
    setIsEditing(false);
    soundService.playStarSound();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-linear-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">MY PUPIL CARD</h2>
              <p className="text-xs text-amber-100 font-medium">Thẻ Học Sinh Tiếng Anh Lớp 3</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Card Presentation (Matching Textbook Page 16) */}
          <div className="bg-linear-to-b from-amber-50/70 to-rose-50/50 rounded-2xl p-6 border-2 border-dashed border-amber-400 relative shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar Photo Frame */}
              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 shadow-md border-2 border-amber-300 flex items-center justify-center text-5xl">
                  {currentAvatar.emoji}
                </div>
                <span className="mt-2 text-xs font-bold text-slate-700 bg-amber-100 px-2 py-0.5 rounded-full">
                  {currentAvatar.name}
                </span>
              </div>

              {/* Information Fields */}
              <div className="flex-1 space-y-3 w-full text-left">
                {isEditing ? (
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs font-bold text-slate-600 block">Họ và tên (Name):</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                        placeholder="Nhập tên em..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-bold text-slate-600 block">Lớp (Class):</label>
                        <input
                          type="text"
                          value={className}
                          onChange={(e) => setClassName(e.target.value)}
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                          placeholder="3A, 3B..."
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-600 block">Trường (School):</label>
                        <input
                          type="text"
                          value={school}
                          onChange={(e) => setSchool(e.target.value)}
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                          placeholder="Tiểu học..."
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="border-b border-amber-200 pb-1">
                      <span className="text-xs text-slate-500 block">Name (Họ và tên):</span>
                      <span className="text-lg font-bold text-slate-900">{profile.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-amber-200 pb-1">
                      <div>
                        <span className="text-xs text-slate-500 block">Class (Lớp):</span>
                        <span className="text-base font-bold text-indigo-700">{profile.className}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">School (Trường):</span>
                        <span className="text-base font-bold text-slate-800">{profile.school}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Avatar Selector in Edit Mode */}
            {isEditing && (
              <div className="mt-4 pt-4 border-t border-amber-200">
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  Chọn nhân vật đại diện yêu thích trong sách:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {CHARACTER_AVATARS.map((char) => (
                    <button
                      key={char.id}
                      onClick={() => setAvatarId(char.id)}
                      className={`p-2 rounded-xl text-center border-2 transition-all cursor-pointer ${
                        avatarId === char.id
                          ? 'border-amber-500 bg-amber-100 scale-105'
                          : 'border-slate-200 hover:border-amber-300 bg-white'
                      }`}
                    >
                      <div className="text-2xl">{char.emoji}</div>
                      <div className="text-[10px] font-bold text-slate-700 truncate">{char.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Edit / Save Action Button */}
            <div className="mt-4 flex justify-end">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
                >
                  <Save className="w-4 h-4" /> Lưu thông tin
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Chỉnh sửa thẻ
                </button>
              )}
            </div>
          </div>

          {/* Achievement Statistics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200">
              <div className="w-8 h-8 mx-auto rounded-full bg-amber-400 text-white flex items-center justify-center font-bold mb-1">
                ⭐
              </div>
              <div className="text-xl font-black text-amber-800">{profile.stars}</div>
              <div className="text-[11px] font-semibold text-amber-700">Sao vàng tích lũy</div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-200">
              <div className="w-8 h-8 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold mb-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="text-xl font-black text-emerald-800">{profile.completedUnits.length} / 20</div>
              <div className="text-[11px] font-semibold text-emerald-700">Unit đã hoàn thành</div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-3 border border-indigo-200">
              <div className="w-8 h-8 mx-auto rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-1">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-xl font-black text-indigo-800">{profile.learnedWords.length}</div>
              <div className="text-[11px] font-semibold text-indigo-700">Từ vựng đã thuộc</div>
            </div>
          </div>

          {/* Unlocked Unit Badges */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" /> Huy hiệu từng Unit đã chinh phục
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {UNITS_DATA.slice(0, 12).map((unit) => {
                const isCompleted = profile.completedUnits.includes(unit.id);
                return (
                  <div
                    key={unit.id}
                    title={`${unit.title} - ${isCompleted ? 'Đã hoàn thành!' : 'Chưa hoàn thành'}`}
                    className={`p-2 rounded-xl text-center border transition-all ${
                      isCompleted
                        ? 'bg-amber-50 border-amber-300 shadow-xs'
                        : 'bg-slate-50 border-slate-200 opacity-40'
                    }`}
                  >
                    <div className="text-2xl mb-1">{unit.icon}</div>
                    <div className="text-[10px] font-bold text-slate-700 truncate">
                      {unit.unitNumber === 0 ? 'Starter' : `Unit ${unit.unitNumber}`}
                    </div>
                    {isCompleted && <span className="text-[9px] text-amber-600 font-extrabold">⭐ Xong</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
