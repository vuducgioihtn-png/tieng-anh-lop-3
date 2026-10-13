import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, CheckCircle2, AlertCircle, Trophy, RotateCcw, ArrowRight, Star } from 'lucide-react';
import { QuizQuestion, Unit } from '../types';
import { soundService } from '../services/soundEffects';

interface UnitTestModalProps {
  unit: Unit;
  isOpen: boolean;
  onClose: () => void;
  onSaveQuizResult: (unitId: number, scorePercent: number, starsEarned: number) => void;
}

export const UnitTestModal: React.FC<UnitTestModalProps> = ({
  unit,
  isOpen,
  onClose,
  onSaveQuizResult,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: boolean }>({});

  if (!isOpen) return null;

  const questions = unit.quizQuestions;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    soundService.playClickSound();
    setSelectedAnswer(option);
  };

  const handlePlayAudio = (text?: string) => {
    if (!text) return;
    soundService.speak(text, { rate: 0.85 });
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedAnswer.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase();

    if (isCorrect) {
      soundService.playCorrectSound();
      setScore((s) => s + 1);
    } else {
      soundService.playWrongSound();
    }

    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: isCorrect }));
  };

  const handleNextQuestion = () => {
    soundService.playClickSound();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((idx) => idx + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Completed quiz!
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsQuizComplete(true);
    const finalScore = score + (selectedAnswer?.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase() ? 0 : 0);
    const percent = Math.round((finalScore / questions.length) * 100);
    const stars = percent === 100 ? 3 : percent >= 70 ? 2 : 1;

    if (percent >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      soundService.playCelebrationFanfare();
    } else {
      soundService.playStarSound();
    }

    onSaveQuizResult(unit.id, percent, stars);
  };

  const handleRestartQuiz = () => {
    soundService.playClickSound();
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizComplete(false);
    setUserAnswers({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-linear-to-r from-amber-500 via-rose-500 to-indigo-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="text-lg font-black leading-tight">
                {unit.unitNumber === 0 ? 'Starter' : `Unit ${unit.unitNumber}`}: Bài Kiểm Tra Nhanh
              </h3>
              <p className="text-xs text-amber-100 font-medium">{unit.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!isQuizComplete ? (
            <div className="space-y-6">
              {/* Progress and Question Counter */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>
                  Câu hỏi {currentQuestionIndex + 1} / {questions.length}
                </span>
                <div className="flex items-center gap-1">
                  <span>Điểm hiện tại:</span>
                  <span className="text-amber-600 font-black text-sm">{score}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Card */}
              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {currentQ.prompt}
                  </h4>

                  {/* Audio Prompt button if available */}
                  {currentQ.audioText && (
                    <button
                      onClick={() => handlePlayAudio(currentQ.audioText)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs font-bold shrink-0 transition-transform hover:scale-105 cursor-pointer shadow-xs"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe</span>
                    </button>
                  )}
                </div>

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {currentQ.options?.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option.toLowerCase() === currentQ.correctAnswer.toLowerCase();

                    let btnStyle = 'bg-white hover:bg-amber-50/70 border-slate-200 text-slate-800';
                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-rose-500 text-rose-950 font-black';
                      } else {
                        btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-amber-100 border-amber-500 text-amber-950 font-black ring-2 ring-amber-400';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all cursor-pointer flex items-center justify-between shadow-2xs ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>

                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {isAnswerSubmitted && (
                  <div className="p-4 rounded-xl bg-white border border-amber-300 shadow-2xs text-sm space-y-1 animate-in fade-in duration-200">
                    <span className="font-extrabold text-amber-900 block">
                      Giải thích đáp án:
                    </span>
                    <p className="text-slate-700">{currentQ.explanation}</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="flex justify-end pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className={`px-6 py-3 rounded-2xl font-black text-sm transition-all cursor-pointer shadow-md ${
                      selectedAnswer
                        ? 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-105'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Kiểm tra đáp án
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>
                      {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-5xl shadow-lg text-white">
                🏆
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900">
                  {score === questions.length
                    ? 'Xuất sắc tuyệt đối! 100 điểm!'
                    : score >= questions.length * 0.7
                    ? 'Làm rất tốt! Giỏi quá!'
                    : 'Hãy cố gắng luyện tập thêm nhé!'}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Em đã trả lời đúng <span className="font-black text-amber-600 text-lg">{score}</span> / {questions.length} câu hỏi.
                </p>
              </div>

              {/* Stars Display */}
              <div className="flex justify-center gap-3">
                {[1, 2, 3].map((star) => {
                  const percent = Math.round((score / questions.length) * 100);
                  const isGold =
                    (star === 1 && percent >= 30) ||
                    (star === 2 && percent >= 70) ||
                    (star === 3 && percent === 100);

                  return (
                    <div
                      key={star}
                      className={`text-4xl transition-transform ${
                        isGold ? 'scale-110' : 'opacity-30 grayscale'
                      }`}
                    >
                      ⭐
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm lại bài kiểm tra</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-2xl font-black text-sm bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-md transition-all cursor-pointer"
                >
                  Hoàn tất & Lưu điểm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
