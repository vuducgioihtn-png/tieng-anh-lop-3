export type Term = 1 | 2;

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  category?: string;
  icon: string; // Emoji or visual representation
  color: string;
  exampleEn: string;
  exampleVi: string;
  soundHint?: string;
}

export interface SentencePattern {
  id: string;
  pattern: string;
  explanation: string;
  examples: {
    speakerA: string;
    textA: string;
    speakerB: string;
    textB: string;
  }[];
}

export interface PhonicsItem {
  sound: string;
  sampleWords: {
    word: string;
    sentence: string;
  }[];
}

export interface SongOrChant {
  title: string;
  lines: string[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'listen-and-choose' | 'fill-blank' | 'unscramble';
  prompt: string;
  audioText?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  scrambledWords?: string[];
}

export interface Unit {
  id: number;
  term: Term;
  unitNumber: number; // 0 for Starter
  title: string;
  vietnameseTitle: string;
  theme: string; // e.g. "Me and My Friends"
  color: string;
  icon: string;
  page: number;
  competences: string[];
  vocabularies: VocabularyItem[];
  patterns: SentencePattern[];
  phonics: PhonicsItem[];
  chant?: SongOrChant;
  quizQuestions: QuizQuestion[];
}

export interface PupilProfile {
  name: string;
  className: string;
  school: string;
  avatarId: string;
  stars: number;
  completedUnits: number[];
  highScores: Record<number, number>; // unitId -> score percentage
  learnedWords: string[]; // list of vocabulary ids mastered
}
