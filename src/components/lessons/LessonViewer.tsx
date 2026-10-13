import React, { useState } from 'react';
import { Volume2, CheckCircle2, RotateCcw, Sparkles, BookOpen, MessageSquare, ArrowRight, Music, Award, Check } from 'lucide-react';
import { getUnitLessons, UnitLessonData } from '../../data/lessonData';
import { soundService } from '../../services/soundEffects';
import confetti from 'canvas-confetti';

interface LessonViewerProps {
  unitId?: number;
  onOpenPupilCard: () => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({ unitId = 1, onOpenPupilCard }) => {
  const [selectedLessonNum, setSelectedLessonNum] = useState<1 | 2 | 3>(1);
  const [activeActivityIndex, setActiveActivityIndex] = useState(0);

  // States for interactive exercises
  const [listenCircleAnswers, setListenCircleAnswers] = useState<Record<string, string>>({});
  const [completeReadAnswers, setCompleteReadAnswers] = useState<Record<string, string>>({});
  const [readCircleAnswers, setReadCircleAnswers] = useState<Record<string, string>>({});
  const [matchSelectedPrompt, setMatchSelectedPrompt] = useState<string | null>(null);
  const [matchesMade, setMatchesMade] = useState<Record<string, string>>({}); // promptId -> optionId
  const [writingInputs, setWritingInputs] = useState<Record<string, string>>({});
  const [speakingBubbleId, setSpeakingBubbleId] = useState<string | null>(null);
  const [cakeAge, setCakeAge] = useState<number>(8);

  const lessons = getUnitLessons(unitId);
  const currentLesson: UnitLessonData =
    lessons.find((l) => l.lessonNumber === selectedLessonNum) || lessons[0];

  const handleSpeak = (text: string, bubbleId?: string) => {
    if (bubbleId) setSpeakingBubbleId(bubbleId);
    soundService.speak(text, {
      rate: 0.86,
      onEnd: () => setSpeakingBubbleId(null),
    });
  };

  const handleLessonChange = (num: 1 | 2 | 3) => {
    soundService.playClickSound();
    setSelectedLessonNum(num);
    setActiveActivityIndex(0);
  };

  // Activity 4 Listen and circle
  const handleSelectCircleOption = (qId: string, optionId: string, isCorrect: boolean) => {
    soundService.playClickSound();
    setListenCircleAnswers((prev) => ({ ...prev, [qId]: optionId }));
    if (isCorrect) {
      soundService.playCorrectSound();
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    } else {
      soundService.playWrongSound();
    }
  };

  // Activity 5 Read and circle
  const handleSelectReadCircle = (itemId: string, optionId: string, isCorrect: boolean) => {
    soundService.playClickSound();
    setReadCircleAnswers((prev) => ({ ...prev, [itemId]: optionId }));
    if (isCorrect) {
      soundService.playCorrectSound();
    } else {
      soundService.playWrongSound();
    }
  };

  // Matching game (Lesson 2 Activity 5)
  const handleSelectMatchPrompt = (promptId: string) => {
    soundService.playClickSound();
    setMatchSelectedPrompt(promptId);
  };

  const handleSelectMatchOption = (optionId: string, correctTargetId: string) => {
    if (!matchSelectedPrompt) return;
    soundService.playClickSound();

    if (optionId === correctTargetId) {
      soundService.playCorrectSound();
      setMatchesMade((prev) => ({ ...prev, [matchSelectedPrompt]: optionId }));
      setMatchSelectedPrompt(null);
      if (Object.keys(matchesMade).length + 1 >= 3) {
        soundService.playCelebrationFanfare();
        confetti({ particleCount: 60, spread: 60 });
      }
    } else {
      soundService.playWrongSound();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Lesson Selector Top Bar (Matching SGK Lesson 1, 2, 3) */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-300 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-black shadow-sm">
              📖
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Sách Giáo Khoa Lớp 3 · Unit 1
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                {currentLesson.vietnameseTitle}
              </h2>
            </div>
          </div>

          {/* 3 Big Lesson Buttons */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleLessonChange(num as 1 | 2 | 3)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  selectedLessonNum === num
                    ? 'bg-amber-500 text-white shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                Lesson {num}
              </button>
            ))}
          </div>
        </div>

        {/* Objective Strip */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="text-amber-500">🎯 Mục tiêu:</span>
          <span>{currentLesson.objective}</span>
        </div>
      </div>

      {/* Activities Quick Pill Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {currentLesson.activities.map((act, idx) => (
          <button
            key={act.activityNumber}
            onClick={() => {
              soundService.playClickSound();
              setActiveActivityIndex(idx);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap border ${
              activeActivityIndex === idx
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {act.title}
          </button>
        ))}
      </div>

      {/* Active Activity Canvas */}
      {(() => {
        const act = currentLesson.activities[activeActivityIndex] || currentLesson.activities[0];

        return (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-sm space-y-6">
            {/* Activity Header */}
            <div className="flex items-start justify-between gap-4 border-b border-amber-100 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wide text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  Hoạt động {act.activityNumber}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {act.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">
                  {act.vietnameseTitle}
                </p>
              </div>

              {/* Next Activity Button */}
              {activeActivityIndex < currentLesson.activities.length - 1 && (
                <button
                  onClick={() => {
                    soundService.playClickSound();
                    setActiveActivityIndex((i) => i + 1);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all cursor-pointer shrink-0"
                >
                  <span>Hoạt động tiếp theo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 1. LOOK, LISTEN AND REPEAT */}
            {act.type === 'look-listen' && (
              <div className="space-y-6">
                {act.data.note && (
                  <div className="bg-amber-50 p-3 rounded-2xl border border-amber-300 text-xs font-bold text-amber-900 flex items-center justify-between">
                    <span>💡 Ghi nhớ quy tắc vàng:</span>
                    <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-xl text-sm font-black shadow-2xs">
                      {act.data.note}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {act.data.scenes.map((scene: any) => (
                    <div
                      key={scene.id}
                      className="bg-linear-to-b from-amber-50/40 via-white to-orange-50/30 rounded-3xl p-6 border-2 border-amber-200 shadow-2xs space-y-4"
                    >
                      <div className="border-b border-amber-200 pb-2">
                        <h4 className="font-extrabold text-base text-slate-900">{scene.title}</h4>
                        <p className="text-xs text-slate-500">{scene.description}</p>
                      </div>

                      <div className="space-y-3">
                        {scene.bubbles.map((b: any) => {
                          const isPlaying = speakingBubbleId === b.id;
                          return (
                            <div
                              key={b.id}
                              onClick={() => handleSpeak(b.text, b.id)}
                              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 shadow-2xs ${
                                isPlaying
                                  ? 'bg-amber-200 border-amber-400 scale-102'
                                  : 'bg-white hover:bg-amber-50/80 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shrink-0 border border-amber-300">
                                  {b.speakerAvatar}
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-black text-amber-900">
                                      {b.speaker}:
                                    </span>
                                    <span className="text-lg font-black text-slate-900">
                                      "{b.text}"
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-500 font-medium">
                                    → {b.vietnamese}
                                  </span>
                                </div>
                              </div>

                              <button
                                className={`p-2 rounded-xl text-amber-700 bg-amber-100 hover:bg-amber-200 transition-colors shrink-0 ${
                                  isPlaying ? 'animate-bounce' : ''
                                }`}
                                title="Nghe giọng cô giáo đọc"
                              >
                                <Volume2 className="w-5 h-5" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. LISTEN, POINT AND SAY */}
            {act.type === 'point-say' && (
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 text-center space-y-1">
                  <span className="text-xs font-black text-amber-700 uppercase tracking-wider block">
                    Cấu trúc mẫu câu cần luyện
                  </span>
                  <p className="text-xl font-black text-slate-900">{act.data.patternA}</p>
                  {act.data.patternB && (
                    <p className="text-lg font-bold text-amber-900">{act.data.patternB}</p>
                  )}
                </div>

                {/* Character clickable cards */}
                {act.data.characters && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {act.data.characters.map((char: any) => (
                      <button
                        key={char.id}
                        onClick={() => handleSpeak(`Hello. I'm ${char.name}.`)}
                        className="p-5 rounded-3xl bg-linear-to-b from-white to-amber-50 hover:to-amber-100 border-2 border-amber-200 hover:border-amber-400 text-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 space-y-2"
                      >
                        <div className="text-4xl">{char.emoji}</div>
                        <div className="font-black text-base text-slate-900">{char.name}</div>
                        <div className="text-xs font-bold text-amber-700 bg-amber-100 py-1 px-2 rounded-xl flex items-center justify-center gap-1">
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Bấm để nói</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Situations for Lesson 2 */}
                {act.data.situations && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {act.data.situations.map((sit: any) => (
                      <div
                        key={sit.id}
                        className="bg-amber-50/50 rounded-3xl p-6 border-2 border-amber-200 space-y-4"
                      >
                        <span className="text-xs font-black text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
                          {sit.title} ({sit.desc})
                        </span>
                        <div className="space-y-2">
                          <div
                            onClick={() => handleSpeak(sit.textQ)}
                            className="bg-white p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between cursor-pointer hover:bg-amber-50 transition-colors"
                          >
                            <span className="font-extrabold text-slate-900">{sit.textQ}</span>
                            <Volume2 className="w-4 h-4 text-amber-600" />
                          </div>
                          <div
                            onClick={() => handleSpeak(sit.textA)}
                            className="bg-white p-3.5 rounded-2xl border border-indigo-200 flex items-center justify-between cursor-pointer hover:bg-indigo-50 transition-colors"
                          >
                            <span className="font-extrabold text-indigo-950">{sit.textA}</span>
                            <Volume2 className="w-4 h-4 text-indigo-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. LET'S TALK */}
            {act.type === 'talk' && (
              <div className="bg-linear-to-b from-sky-50 via-white to-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-sky-200 space-y-6 text-center">
                <div className="text-5xl">🏫 🌳</div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Thực hành giao tiếp tại sân trường (School Talk)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Chạm vào từng câu để cùng cô giáo đối đáp tự tin nhé!
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                  <button
                    onClick={() => handleSpeak("Hello. I'm Ben. - Hi, Ben. I'm Mai.")}
                    className="p-4 rounded-2xl bg-white hover:bg-amber-50 border-2 border-amber-300 text-left transition-all cursor-pointer shadow-xs hover:scale-102"
                  >
                    <span className="text-xs font-bold text-amber-700 block mb-1">
                      Mẫu chào hỏi (Greeting):
                    </span>
                    <p className="font-extrabold text-slate-900">"Hello. I'm Ben."</p>
                    <p className="font-extrabold text-indigo-900 mt-1">"Hi, Ben. I'm Mai."</p>
                  </button>

                  <button
                    onClick={() => handleSpeak("Hi, Mai. How are you? - Fine, thank you.")}
                    className="p-4 rounded-2xl bg-white hover:bg-indigo-50 border-2 border-indigo-300 text-left transition-all cursor-pointer shadow-xs hover:scale-102"
                  >
                    <span className="text-xs font-bold text-indigo-700 block mb-1">
                      Mẫu hỏi thăm (How are you?):
                    </span>
                    <p className="font-extrabold text-slate-900">"Hi, Mai. How are you?"</p>
                    <p className="font-extrabold text-indigo-900 mt-1">"Fine, thank you."</p>
                  </button>
                </div>
              </div>
            )}

            {/* 4. LISTEN AND CIRCLE */}
            {act.type === 'listen-circle' && (
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 text-xs font-bold text-amber-900">
                  🎧 Hãy bấm nút nghe phát âm của cô giáo, sau đó chọn bức tranh/phương án phù hợp!
                </div>

                <div className="space-y-4">
                  {act.data.questions.map((q: any) => {
                    const selected = listenCircleAnswers[q.id];
                    return (
                      <div
                        key={q.id}
                        className="bg-slate-50 rounded-3xl p-5 border-2 border-slate-200 space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-black text-slate-900 text-base">{q.question}</h4>
                          <button
                            onClick={() => handleSpeak(q.audio)}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>Nghe giọng đọc</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {q.options.map((opt: any) => {
                            const isChosen = selected === opt.id;
                            let btnStyle = 'bg-white hover:bg-amber-50 border-slate-200 text-slate-800';
                            if (isChosen) {
                              btnStyle = opt.isCorrect
                                ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400'
                                : 'bg-rose-100 border-rose-500 text-rose-950 font-black ring-2 ring-rose-400';
                            }

                            return (
                              <button
                                key={opt.id}
                                onClick={() => handleSelectCircleOption(q.id, opt.id, opt.isCorrect)}
                                className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer shadow-2xs ${btnStyle}`}
                              >
                                {opt.emoji && <div className="text-2xl mb-1">{opt.emoji}</div>}
                                <span className="font-bold text-sm block">{opt.label}</span>
                                {isChosen && opt.isCorrect && (
                                  <span className="text-xs text-emerald-700 font-extrabold mt-1 block">
                                    ✓ Đúng rồi!
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. COMPLETE AND READ */}
            {act.type === 'complete-read' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {act.data.items.map((item: any) => {
                    const userSelected = completeReadAnswers[item.id] || '';
                    const isCorrect = userSelected === item.correct;

                    return (
                      <div
                        key={item.id}
                        className="bg-amber-50/50 rounded-3xl p-5 border-2 border-amber-200 space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.avatar}</span>
                          <span className="font-bold text-slate-800 text-sm">
                            Tranh nhân vật: {item.character}
                          </span>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-amber-200 font-black text-lg text-slate-900 flex items-center gap-1.5 flex-wrap">
                          <span>{item.preText}</span>
                          <span className="px-3 py-0.5 rounded-xl bg-amber-200 text-amber-950 border border-amber-300 min-w-[60px] text-center inline-block">
                            {userSelected || '_____'}
                          </span>
                          <span>{item.postText}</span>
                        </div>

                        {/* Options */}
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-xs font-bold text-slate-500">Chọn từ điền:</span>
                          {item.options.map((opt: string) => (
                            <button
                              key={opt}
                              onClick={() => {
                                soundService.playClickSound();
                                setCompleteReadAnswers((prev) => ({ ...prev, [item.id]: opt }));
                                if (opt === item.correct) {
                                  soundService.playCorrectSound();
                                } else {
                                  soundService.playWrongSound();
                                }
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                userSelected === opt
                                  ? opt === item.correct
                                    ? 'bg-emerald-500 text-white border-emerald-600'
                                    : 'bg-rose-500 text-white border-rose-600'
                                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. READ AND MATCH (Lesson 2 Activity 5) */}
            {act.type === 'read-match' && (
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 text-xs font-bold text-amber-900">
                  👉 Bấm chọn câu hỏi ở cột bên trái, rồi bấm vào câu đáp lại phù hợp ở cột bên phải!
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left Prompts */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Câu hỏi / Lời chào:
                    </h4>
                    {act.data.prompts.map((p: any) => {
                      const isSelected = matchSelectedPrompt === p.id;
                      const matched = matchesMade[p.id];
                      return (
                        <button
                          key={p.id}
                          onClick={() => handleSelectMatchPrompt(p.id)}
                          className={`w-full p-4 rounded-2xl border-2 text-left font-black text-base transition-all cursor-pointer shadow-2xs flex items-center justify-between ${
                            matched
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                              : isSelected
                              ? 'bg-amber-200 border-amber-500 text-slate-900 ring-2 ring-amber-400'
                              : 'bg-white hover:bg-amber-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <span>{p.text}</span>
                          {matched && <Check className="w-5 h-5 text-emerald-600" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Options */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Câu đáp lại tương ứng:
                    </h4>
                    {act.data.options.map((opt: any) => {
                      return (
                        <button
                          key={opt.id}
                          onClick={() =>
                            handleSelectMatchOption(
                              opt.id,
                              act.data.prompts.find((p: any) => p.id === matchSelectedPrompt)
                                ?.correctTargetId
                            )
                          }
                          className="w-full p-4 rounded-2xl border-2 text-left font-black text-base bg-white hover:bg-indigo-50 border-slate-200 text-indigo-950 transition-all cursor-pointer shadow-2xs flex items-center justify-between"
                        >
                          <span>{opt.label}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak(opt.label);
                            }}
                            className="p-1 hover:bg-indigo-100 rounded-lg text-indigo-700"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 1. PHONICS (Lesson 3) */}
            {act.type === 'phonics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {act.data.phonicsPairs.map((p: any) => (
                    <div
                      key={p.letter}
                      className="bg-linear-to-b from-amber-50 to-orange-50/50 rounded-3xl p-6 border-2 border-amber-300 text-center space-y-4 shadow-xs"
                    >
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500 text-white flex items-center justify-center text-3xl font-black font-mono shadow-md">
                        {p.letter}
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-500">Phiên âm: {p.sound}</span>
                        <h4 className="text-2xl font-black text-slate-900">
                          <span className="text-rose-600 font-extrabold underline">{p.highlightChar}</span>
                          {p.word.slice(1)}
                        </h4>
                      </div>

                      <div className="bg-white p-3.5 rounded-2xl border border-amber-200">
                        <p className="font-extrabold text-base text-slate-900">"{p.sentence}"</p>
                        <p className="text-xs text-slate-500 mt-0.5">({p.vietnamese})</p>
                      </div>

                      <button
                        onClick={() => handleSpeak(`${p.letter}. ${p.word}. ${p.sentence}`)}
                        className="w-full py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Nghe cô giáo phát âm âm /{p.letter}/</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. READ AND CIRCLE (Lesson 3) */}
            {act.type === 'read-circle' && (
              <div className="space-y-4">
                {act.data.items.map((item: any) => {
                  const selected = readCircleAnswers[item.id];
                  return (
                    <div
                      key={item.id}
                      className="bg-amber-50/40 rounded-3xl p-5 border-2 border-amber-200 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-black text-lg text-slate-900">{item.prompt}</h4>
                        <button
                          onClick={() => handleSpeak(item.prompt)}
                          className="p-1.5 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-900"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.options.map((opt: any) => {
                          const isChosen = selected === opt.text;
                          let btnStyle = 'bg-white hover:bg-amber-50 border-slate-200 text-slate-800';
                          if (isChosen) {
                            btnStyle = opt.isCorrect
                              ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black'
                              : 'bg-rose-100 border-rose-500 text-rose-950 font-black';
                          }

                          return (
                            <button
                              key={opt.text}
                              onClick={() => handleSelectReadCircle(item.id, opt.text, opt.isCorrect)}
                              className={`p-3.5 rounded-2xl border-2 text-left font-extrabold text-sm transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt.text}</span>
                              {isChosen && opt.isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {selected && (
                        <p className="text-xs text-amber-900 font-semibold bg-white p-2.5 rounded-xl border border-amber-200">
                          💡 {item.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* 5. LET'S WRITE (Lesson 3) */}
            {act.type === 'write' && (
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 text-xs font-bold text-amber-900">
                  ✍️ Hãy tập gõ/điền câu trả lời của chính em vào ô trống bên dưới:
                </div>

                <div className="space-y-4">
                  {act.data.dialogues.map((d: any) => {
                    const userVal = writingInputs[d.id] || '';
                    return (
                      <div
                        key={d.id}
                        className="bg-white rounded-3xl p-5 border-2 border-slate-200 space-y-3 shadow-2xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{d.charAvatar}</span>
                          <span className="font-black text-slate-900">
                            {d.char}: "{d.charSay}"
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-amber-700 shrink-0">You:</span>
                          <input
                            type="text"
                            value={userVal}
                            onChange={(e) =>
                              setWritingInputs((prev) => ({ ...prev, [d.id]: e.target.value }))
                            }
                            placeholder={d.placeholder}
                            className="flex-1 px-4 py-2 border-2 border-amber-300 rounded-xl font-bold text-sm bg-amber-50/40 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                          />
                          <button
                            onClick={() => {
                              soundService.playCorrectSound();
                              confetti({ particleCount: 30, spread: 50 });
                            }}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                          >
                            Xong
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 6. SING & CHANT */}
            {act.type === 'sing-chant' && (
              <div className="bg-linear-to-b from-amber-50 to-orange-50/50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 text-center space-y-6">
                <div className="text-5xl">🎶 🎤</div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">{act.data.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Chạm vào từng câu để cô giáo đọc mẫu và hát theo nhịp điệu nhé!
                  </p>
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  {act.data.lines.map((line: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleSpeak(line)}
                      className="w-full p-3 rounded-2xl bg-white hover:bg-amber-100 border border-amber-200 font-extrabold text-base text-slate-900 flex items-center justify-between cursor-pointer shadow-2xs transition-all hover:scale-102"
                    >
                      <span>{line}</span>
                      <Volume2 className="w-4 h-4 text-amber-600" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 6. PROJECT (PUPIL CARD OR BIRTHDAY CAKE) */}
            {act.type === 'project' && (
              <div className="bg-linear-to-b from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-400 text-center space-y-6">
                {act.data.sample?.title === 'My Birthday Cake' ? (
                  <div className="space-y-6">
                    <div className="text-6xl animate-bounce">🎂 🕯️</div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                        Project: My birthday cake (Trang 21)
                      </span>
                      <h4 className="text-2xl font-black text-slate-900 mt-2">
                        Bánh sinh nhật tuổi lên {cakeAge} của em
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                        Hãy chọn số tuổi của em, trang trí nến sinh nhật và đứng trước lớp thuyết trình như bạn Mary nhé!
                      </p>
                    </div>

                    {/* Cake Age Selector */}
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xs font-bold text-slate-600">Chọn số nến tuổi:</span>
                      {[7, 8, 9, 10].map((age) => (
                        <button
                          key={age}
                          onClick={() => {
                            soundService.playClickSound();
                            setCakeAge(age);
                          }}
                          className={`w-12 h-12 rounded-2xl font-black text-lg transition-all cursor-pointer border-2 ${
                            cakeAge === age
                              ? 'bg-rose-500 text-white border-rose-600 scale-110 shadow-md ring-2 ring-rose-300'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-rose-50'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>

                    {/* Display Cake */}
                    <div className="p-6 rounded-3xl bg-white max-w-sm mx-auto border-2 border-rose-200 shadow-sm space-y-3">
                      <div className="text-7xl filter drop-shadow-md">🎂</div>
                      <div className="text-xl font-black text-rose-600">
                        Candle Number: {cakeAge} 🕯️
                      </div>
                      <div className="p-3 rounded-2xl bg-rose-50 text-slate-800 text-sm font-bold">
                        "Hi everyone! I'm {cakeAge} years old. This is my birthday cake!"
                      </div>
                    </div>

                    {/* Present Button */}
                    <button
                      onClick={() => {
                        soundService.playCelebrationFanfare();
                        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
                        soundService.speak(
                          `Hi everyone! I'm ${cakeAge} years old. This is my birthday cake!`,
                          { rate: 0.88 }
                        );
                      }}
                      className="px-8 py-3.5 bg-linear-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-sm rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                    >
                      <span>🗣️ Thuyết trình trước lớp (Cô giáo Anh - Anh đọc mẫu)</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-5xl">🎓 🏷️</div>
                    <div className="mt-4">
                      <h4 className="text-2xl font-black text-slate-900">
                        Dự án: Thẻ học sinh (My Pupil Card - Trang 15)
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                        Em đã sẵn sàng tạo Thẻ Học Sinh cá nhân của chính mình với Tên, Lớp và Trường học chưa?
                      </p>
                    </div>

                    <button
                      onClick={onOpenPupilCard}
                      className="mt-6 px-8 py-3.5 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-sm rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    >
                      Mở Thẻ Học Sinh Của Em Ngay! ⭐
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
};
