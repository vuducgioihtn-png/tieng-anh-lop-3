import React, { useState, useEffect } from 'react';
import { X, Volume2, Sparkles, Check, RotateCcw, Sliders, Music } from 'lucide-react';
import { soundService, FemaleVoiceInfo } from '../services/soundEffects';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({ isOpen, onClose }) => {
  const [voices, setVoices] = useState<FemaleVoiceInfo[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [pitch, setPitch] = useState<number>(1.28);
  const [rate, setRate] = useState<number>(0.92);
  const [isPlayingTest, setIsPlayingTest] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const available = soundService.getAvailableFemaleVoices();
      setVoices(available);
      setSelectedVoice(soundService.getSelectedVoiceName());
      setPitch(soundService.getPitch());
      setRate(soundService.getRate());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestSpeech = (sample?: string) => {
    setIsPlayingTest(true);
    soundService
      .testFemaleVoice(
        sample ||
          "Hello class! Welcome to our lovely English lesson. Let's learn and sing with joy! Brilliant! 🇬🇧✨"
      )
      .finally(() => {
        setTimeout(() => setIsPlayingTest(false), 2000);
      });
  };

  const handleSelectVoice = (voiceName: string) => {
    setSelectedVoice(voiceName);
    soundService.setSelectedVoice(voiceName);
    handleTestSpeech("Splendid! Cheerful British English voice selected!");
  };

  const handlePitchChange = (newPitch: number) => {
    setPitch(newPitch);
    soundService.setPitch(newPitch);
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    soundService.setRate(newRate);
  };

  const handleReset = () => {
    soundService.resetToBrightDefault();
    setPitch(soundService.getPitch());
    setRate(soundService.getRate());
    setSelectedVoice(soundService.getSelectedVoiceName());
    soundService.playCorrectSound();
    handleTestSpeech("Hello students! Restored to bright, cheerful British English voice!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-rose-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-linear-to-r from-rose-500 via-pink-500 to-amber-500 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl shadow-inner">
              🇬🇧
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Giọng Nữ Anh - Anh (UK) Vang Sáng & Hào Hứng</h3>
              <p className="text-xs text-rose-100 font-medium">
                Đã khóa duy nhất giọng nữ Anh - Anh cao giọng, vui tươi • Đã loại bỏ các giọng khác
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Audio Test Banner */}
          <div className="bg-rose-50 rounded-2xl p-4 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👩‍🏫</span>
              <div>
                <p className="text-xs font-bold text-rose-700 uppercase tracking-wide">
                  Giọng đang sử dụng (Anh - Anh)
                </p>
                <p className="text-sm font-black text-slate-800">
                  {soundService.getVoiceDisplayName()}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleTestSpeech()}
              disabled={isPlayingTest}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Volume2 className={`w-4 h-4 ${isPlayingTest ? 'animate-bounce' : ''}`} />
              <span>{isPlayingTest ? 'Đang đọc thử...' : 'Nghe thử câu mẫu'}</span>
            </button>
          </div>

          {/* Voice Tuning Sliders */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-rose-500" />
                <span>Hiệu chỉnh cao độ giọng & Tốc độ</span>
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                title="Khôi phục thông số mặc định giọng cao vui tươi"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Mặc định cao & vui tươi</span>
              </button>
            </div>

            {/* Pitch Slider (Độ cao & Vang sáng) */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1">
                  <span>✨ Cao độ giọng (Pitch):</span>
                  <span className="text-rose-600 font-extrabold">{pitch.toFixed(2)}x</span>
                </label>
                <span className="text-[11px] text-rose-600 font-semibold">
                  {pitch >= 1.25 ? 'Giọng cao, vui tươi hào hứng 🌟' : pitch >= 1.15 ? 'Vang sáng tự nhiên' : 'Tiêu chuẩn'}
                </span>
              </div>
              <input
                type="range"
                min="0.95"
                max="1.45"
                step="0.02"
                value={pitch}
                onChange={(e) => handlePitchChange(parseFloat(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>0.95x (Bình thường)</span>
                <span className="text-rose-600 font-bold">1.28x (Giọng cao vui tươi chuẩn 🌟)</span>
                <span>1.45x (Rất cao)</span>
              </div>
            </div>

            {/* Speed Slider */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1">
                  <span>⚡ Tốc độ đọc (Speed):</span>
                  <span className="text-rose-600 font-extrabold">{rate.toFixed(2)}x</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  {rate <= 0.85 ? 'Chậm rõ âm' : rate <= 0.95 ? 'Hoạt bát, dễ nghe 🌟' : 'Nhanh'}
                </span>
              </div>
              <input
                type="range"
                min="0.75"
                max="1.1"
                step="0.02"
                value={rate}
                onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>0.75x (Chậm)</span>
                <span className="text-rose-500 font-bold">0.92x (Khuyên dùng)</span>
                <span>1.10x (Nhanh)</span>
              </div>
            </div>
          </div>

          {/* Available Female British English Voices on this device */}
          <div>
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-rose-500" />
              <span>Danh sách giọng nữ Anh - Anh trên thiết bị ({voices.length} giọng):</span>
            </h4>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {voices.length === 0 ? (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
                  Đang khởi tạo công cụ đọc giọng Anh - Anh từ trình duyệt...
                </div>
              ) : (
                voices.map((v) => {
                  const isSelected = selectedVoice === v.name;
                  return (
                    <button
                      key={v.name}
                      onClick={() => handleSelectVoice(v.name)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-rose-50 border-rose-400 font-bold text-rose-900 shadow-2xs'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-base">{v.isRecommended ? '🌟' : '🇬🇧'}</span>
                        <div className="truncate">
                          <p className="truncate font-semibold">{v.displayName}</p>
                          <p className="text-[10px] text-slate-400 truncate">{v.name} • {v.lang}</p>
                        </div>
                      </div>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-rose-600 shrink-0" />
                      ) : (
                        <span className="text-[11px] text-slate-400 hover:text-rose-500 shrink-0">Chọn</span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Quick Sentence Test Chips (British English classroom phrases) */}
          <div>
            <p className="text-xs font-bold text-slate-600 mb-2">Thử các mẫu câu bài học vui tươi:</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Hello, I'm Mai. Splendid to meet you!",
                "How are you today? I'm fine, thank you!",
                "Stand up, please! Open your book.",
                "Brilliant! Let's sing together!"
              ].map((txt) => (
                <button
                  key={txt}
                  onClick={() => handleTestSpeech(txt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-rose-100 hover:text-rose-700 text-slate-700 text-xs border border-slate-200 transition-colors cursor-pointer"
                >
                  "{txt.slice(0, 24)}..."
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Xong & Khóa giọng này</span>
          </button>
        </div>
      </div>
    </div>
  );
};
