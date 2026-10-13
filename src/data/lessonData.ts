export interface DialogBubble {
  id: string;
  speaker: string;
  speakerAvatar: string;
  speakerSide: 'left' | 'right';
  text: string;
  vietnamese: string;
}

export interface LessonScene {
  id: string;
  title: string;
  description: string;
  bubbles: DialogBubble[];
}

export interface MatchPair {
  id: string;
  prompt: string;
  correctTargetId: string;
}

export interface MatchOption {
  id: string;
  text: string;
}

export interface FillBlankItem {
  id: string;
  preText: string;
  blank: string;
  postText: string;
  correctAnswers: string[];
  options: string[];
  character: string;
  avatar: string;
}

export interface UnitLessonData {
  unitId: number;
  lessonNumber: 1 | 2 | 3;
  title: string;
  vietnameseTitle: string;
  objective: string;
  activities: {
    activityNumber: number;
    title: string;
    vietnameseTitle: string;
    type: 'look-listen' | 'point-say' | 'talk' | 'listen-circle' | 'complete-read' | 'sing-chant' | 'read-match' | 'phonics' | 'read-circle' | 'write' | 'project';
    data: any;
  }[];
}

export const UNIT1_LESSONS: UnitLessonData[] = [
  // LESSON 1
  {
    unitId: 1,
    lessonNumber: 1,
    title: 'Lesson 1: Greetings & Self-Introduction',
    vietnameseTitle: 'Tiết 1: Chào hỏi & Giới thiệu tên (Trang 10 - 11)',
    objective: 'Biết cách chào (Hello / Hi) và tự giới thiệu tên mình (I\'m + Tên)',
    activities: [
      {
        activityNumber: 1,
        title: '1. Look, listen and repeat',
        vietnameseTitle: 'Nhìn tranh, nghe cô giáo đọc và nhắc lại',
        type: 'look-listen',
        data: {
          note: 'Chú ý: Hello = Hi (Đều có nghĩa là Xin chào)',
          scenes: [
            {
              id: 'l1-s1',
              title: 'Tranh a: Ben và Mai gặp nhau',
              description: 'Ben và Mai chào nhau bên hành lang lớp học',
              bubbles: [
                {
                  id: 'b1',
                  speaker: 'Ben',
                  speakerAvatar: '👦',
                  speakerSide: 'left',
                  text: "Hello. I'm Ben.",
                  vietnamese: 'Xin chào. Mình là Ben.',
                },
                {
                  id: 'b2',
                  speaker: 'Mai',
                  speakerAvatar: '👧',
                  speakerSide: 'right',
                  text: "Hi, Ben. I'm Mai.",
                  vietnamese: 'Chào Ben. Mình là Mai.',
                },
              ],
            },
            {
              id: 'l1-s2',
              title: 'Tranh b: Minh và Lucy gặp nhau',
              description: 'Minh và Lucy vẫy tay chào nhau',
              bubbles: [
                {
                  id: 'b3',
                  speaker: 'Minh',
                  speakerAvatar: '👦',
                  speakerSide: 'left',
                  text: "Hi. I'm Minh.",
                  vietnamese: 'Chào bạn. Mình là Minh.',
                },
                {
                  id: 'b4',
                  speaker: 'Lucy',
                  speakerAvatar: '👧',
                  speakerSide: 'right',
                  text: "Hello, Minh. I'm Lucy.",
                  vietnamese: 'Xin chào Minh. Mình là Lucy.',
                },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen, point and say',
        vietnameseTitle: 'Nghe, chỉ tranh và tập nói',
        type: 'point-say',
        data: {
          patternA: "Hello. / Hi. I'm ____.",
          patternB: "Hello, / Hi, ____. I'm ____.",
          characters: [
            { id: 'ben', name: 'Ben', emoji: '👦', pair: 'mai' },
            { id: 'mai', name: 'Mai', emoji: '👧', pair: 'ben' },
            { id: 'minh', name: 'Minh', emoji: '👦', pair: 'lucy' },
            { id: 'lucy', name: 'Lucy', emoji: '👧', pair: 'minh' },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's talk",
        vietnameseTitle: 'Cùng thực hành nói theo ngữ cảnh trường học',
        type: 'talk',
        data: {
          context: 'Tại sân trường rợp bóng cây (School)',
          characters: ['Lucy', 'Minh', 'Ben', 'Mai'],
        },
      },
      {
        activityNumber: 4,
        title: '4. Listen and circle',
        vietnameseTitle: 'Nghe và chọn tranh đúng',
        type: 'listen-circle',
        data: {
          questions: [
            {
              id: 'lc-1',
              audio: "Hi. I'm Lucy. - Hello, Lucy. I'm Ben.",
              question: 'Câu 1: Nghe xem ai đang chào nhau?',
              options: [
                { id: 'a', label: 'Tranh a: Lucy & Ben', isCorrect: true, emoji: '👧 👦' },
                { id: 'b', label: 'Tranh b: Lucy & Minh', isCorrect: false, emoji: '👧 🧑' },
              ],
            },
            {
              id: 'lc-2',
              audio: "Hello. I'm Ben. - Hi, Ben. I'm Mai.",
              question: 'Câu 2: Nghe xem ai đang chào nhau?',
              options: [
                { id: 'a', label: 'Tranh a: Ben & Mai', isCorrect: true, emoji: '👦 👧' },
                { id: 'b', label: 'Tranh b: Ben & Lucy', isCorrect: false, emoji: '👦 👧' },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 5,
        title: '5. Look, complete and read',
        vietnameseTitle: 'Nhìn tranh, điền từ vào chỗ trống và đọc to',
        type: 'complete-read',
        data: {
          items: [
            {
              id: 'cr-1',
              character: 'Ben',
              avatar: '👦',
              preText: '',
              blank: 'Hello',
              postText: ". I'm Ben.",
              options: ['Hello', 'Hi', 'Bye', 'Fine'],
              correct: 'Hello',
            },
            {
              id: 'cr-2',
              character: 'Lucy',
              avatar: '👧',
              preText: '',
              blank: 'Hi',
              postText: ". I'm Lucy.",
              options: ['Hi', 'Goodbye', 'How', 'Thank'],
              correct: 'Hi',
            },
            {
              id: 'cr-3',
              character: 'Mai',
              avatar: '👧',
              preText: 'Hi, Ben. ',
              blank: "I'm",
              postText: ' Mai.',
              options: ["I'm", 'You', 'He', 'She'],
              correct: "I'm",
            },
            {
              id: 'cr-4',
              character: 'Minh',
              avatar: '👦',
              preText: 'Hello, Lucy. ',
              blank: "I'm",
              postText: ' Minh.',
              options: ["I'm", 'Is', 'Are', 'My'],
              correct: "I'm",
            },
          ],
        },
      },
      {
        activityNumber: 6,
        title: "6. Let's sing: Hello",
        vietnameseTitle: 'Cùng hát bài "Hello"',
        type: 'sing-chant',
        data: {
          title: 'Hello Song',
          lines: [
            'Hello. Hello.',
            "I'm Ben.",
            'Hi, Ben. Hi, Ben.',
            "I'm Mai.",
            'Hello. Hello.',
            "I'm Minh.",
            'Hi, Minh. Hi, Minh.',
            "I'm Lucy.",
          ],
        },
      },
    ],
  },

  // LESSON 2
  {
    unitId: 1,
    lessonNumber: 2,
    title: 'Lesson 2: Asking How Someone Is & Saying Goodbye',
    vietnameseTitle: 'Tiết 2: Hỏi thăm sức khỏe & Tạm biệt (Trang 12 - 13)',
    objective: 'Biết hỏi thăm sức khỏe (How are you?) - trả lời (Fine, thank you) và chào tạm biệt (Goodbye / Bye)',
    activities: [
      {
        activityNumber: 1,
        title: '1. Look, listen and repeat',
        vietnameseTitle: 'Nhìn tranh, nghe cô giáo đọc và nhắc lại',
        type: 'look-listen',
        data: {
          scenes: [
            {
              id: 'l2-s1',
              title: 'Tranh a: Ben hỏi thăm sức khỏe của Mai',
              description: 'Gặp nhau trên đường đến trường',
              bubbles: [
                {
                  id: 'b1',
                  speaker: 'Ben',
                  speakerAvatar: '👦',
                  speakerSide: 'left',
                  text: 'Hi, Mai. How are you?',
                  vietnamese: 'Chào Mai. Bạn có khỏe không?',
                },
                {
                  id: 'b2',
                  speaker: 'Mai',
                  speakerAvatar: '👧',
                  speakerSide: 'right',
                  text: 'Fine, thank you.',
                  vietnamese: 'Mình khỏe, cảm ơn bạn.',
                },
              ],
            },
            {
              id: 'l2-s2',
              title: 'Tranh b: Ben và Mai chào tạm biệt',
              description: 'Vẫy tay chào tạm biệt nhau khi tan học',
              bubbles: [
                {
                  id: 'b3',
                  speaker: 'Ben',
                  speakerAvatar: '👦',
                  speakerSide: 'left',
                  text: 'Goodbye, Mai.',
                  vietnamese: 'Tạm biệt Mai nhé.',
                },
                {
                  id: 'b4',
                  speaker: 'Mai',
                  speakerAvatar: '👧',
                  speakerSide: 'right',
                  text: 'Bye, Ben.',
                  vietnamese: 'Tạm biệt Ben.',
                },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen, point and say',
        vietnameseTitle: 'Nghe, chỉ tranh và tập nói',
        type: 'point-say',
        data: {
          patternA: 'Hi. How are you? - Fine, thank you.',
          patternB: 'Goodbye. / Bye. - Goodbye. / Bye.',
          situations: [
            {
              id: 'sit-a',
              title: 'Tranh a: Hỏi thăm sức khỏe',
              textQ: 'Hi. How are you?',
              textA: 'Fine, thank you.',
              desc: 'Ben & Mai',
            },
            {
              id: 'sit-b',
              title: 'Tranh b: Chào tạm biệt',
              textQ: 'Goodbye, Minh.',
              textA: 'Bye, Lucy.',
              desc: 'Minh & Lucy',
            },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's talk",
        vietnameseTitle: 'Cùng thực hành nói hỏi thăm và tạm biệt',
        type: 'talk',
        data: {
          context: 'Tại sân trường giờ tan học',
          prompts: [
            { q: 'Hi. How are you?', a: 'Fine, thank you.' },
            { q: 'Goodbye.', a: 'Bye.' },
          ],
        },
      },
      {
        activityNumber: 5,
        title: '5. Read and match',
        vietnameseTitle: 'Đọc và nối câu phù hợp (Trang 13)',
        type: 'read-match',
        data: {
          prompts: [
            { id: 'p1', text: "1. Hi. I'm Mai.", correctTargetId: 'o2' },
            { id: 'p2', text: '2. Goodbye, Mai.', correctTargetId: 'o3' },
            { id: 'p3', text: '3. How are you, Mai?', correctTargetId: 'o1' },
          ],
          options: [
            { id: 'o1', label: 'a. Fine, thank you.' },
            { id: 'o2', label: "b. Hello, Mai. I'm Ben." },
            { id: 'o3', label: 'c. Bye, Ben.' },
          ],
        },
      },
      {
        activityNumber: 6,
        title: "6. Let's play: Hello and goodbye",
        vietnameseTitle: 'Trò chơi vòng tròn "Hello and Goodbye"',
        type: 'sing-chant',
        data: {
          title: 'Hello and Goodbye Circle Game',
          lines: [
            "Hello. I'm Ben.",
            "Hi, Ben. I'm Mai.",
            'How are you, Mai?',
            'Fine, thank you.',
            'Goodbye, Mai.',
            'Bye, Ben.',
          ],
        },
      },
    ],
  },

  // LESSON 3
  {
    unitId: 1,
    lessonNumber: 3,
    title: 'Lesson 3: Phonics (h & b), Chant & Pupil Card Project',
    vietnameseTitle: 'Tiết 3: Luyện ngữ âm h & b, Đọc vè & Dự án Thẻ học sinh (Trang 14 - 15)',
    objective: 'Luyện chuẩn phát âm hai âm /h/ và /b/, đọc vè vui nhộn và làm thẻ học sinh',
    activities: [
      {
        activityNumber: 1,
        title: '1. Listen and repeat (Phonics)',
        vietnameseTitle: 'Lắng nghe và phát âm chuẩn âm h và b',
        type: 'phonics',
        data: {
          phonicsPairs: [
            {
              letter: 'h',
              sound: '/h/',
              word: 'hello',
              sentence: 'Hello, Ben.',
              vietnamese: 'Xin chào Ben.',
              highlightChar: 'h',
            },
            {
              letter: 'b',
              sound: '/b/',
              word: 'bye',
              sentence: 'Bye, Ben.',
              vietnamese: 'Tạm biệt Ben.',
              highlightChar: 'b',
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen and circle',
        vietnameseTitle: 'Nghe và khoanh tròn từ đúng',
        type: 'listen-circle',
        data: {
          questions: [
            {
              id: 'p-lc-1',
              audio: 'Hello, Ben.',
              question: 'Câu 1: _____ , Ben.',
              options: [
                { id: 'a', label: 'a. Hi', isCorrect: false },
                { id: 'b', label: 'b. Bye', isCorrect: false },
                { id: 'c', label: 'c. Hello', isCorrect: true },
              ],
            },
            {
              id: 'p-lc-2',
              audio: 'Bye, Ben.',
              question: 'Câu 2: _____ , Ben.',
              options: [
                { id: 'a', label: 'a. Bye', isCorrect: true },
                { id: 'b', label: 'b. Hello', isCorrect: false },
                { id: 'c', label: 'c. Hi', isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's chant",
        vietnameseTitle: 'Cùng đọc vè theo nhịp điệu (Trang 14)',
        type: 'sing-chant',
        data: {
          title: 'Hello Chant',
          lines: [
            "Hello. I'm Ben.",
            "Hello. I'm Ben.",
            "Hi, Ben. Hi, Ben. I'm Mai. I'm Mai.",
            'How are you, Ben?',
            'Fine, thank you.',
            'Bye, Ben. Bye, Ben.',
            'Bye, Mai. Bye, Mai.',
          ],
        },
      },
      {
        activityNumber: 4,
        title: '4. Read and circle',
        vietnameseTitle: 'Đọc câu đối thoại và khoanh tròn câu đáp lại đúng (Trang 15)',
        type: 'read-circle',
        data: {
          items: [
            {
              id: 'rc-1',
              prompt: "1. Hi. I'm Ben.",
              options: [
                { id: 'a', text: 'a. Bye, Ben.', isCorrect: false },
                { id: 'b', text: "b. Hello, Ben. I'm Lucy.", isCorrect: true },
              ],
              explanation: 'Khi Ben tự giới thiệu tên, Lucy chào lại và tự giới thiệu tên mình.',
            },
            {
              id: 'rc-2',
              prompt: '2. Hello, Mai.',
              options: [
                { id: 'a', text: 'a. Hi, Ben.', isCorrect: true },
                { id: 'b', text: 'b. Goodbye, Ben.', isCorrect: false },
              ],
              explanation: 'Khi được chào Hello, lời đáp lại tương ứng là Hi, Ben.',
            },
            {
              id: 'rc-3',
              prompt: '3. Goodbye, Ben.',
              options: [
                { id: 'a', text: 'a. Bye, Mai.', isCorrect: true },
                { id: 'b', text: 'b. How are you?', isCorrect: false },
              ],
              explanation: 'Khi chào tạm biệt Goodbye, lời đáp tương ứng là Bye, Mai.',
            },
            {
              id: 'rc-4',
              prompt: '4. How are you?',
              options: [
                { id: 'a', text: 'a. Hi, Ben.', isCorrect: false },
                { id: 'b', text: 'b. Fine, thank you.', isCorrect: true },
              ],
              explanation: 'Hỏi thăm sức khỏe "How are you?" trả lời bằng "Fine, thank you.".',
            },
          ],
        },
      },
      {
        activityNumber: 5,
        title: "5. Let's write",
        vietnameseTitle: 'Thực hành điền vào câu đối thoại (Trang 15)',
        type: 'write',
        data: {
          dialogues: [
            {
              id: 'w-1',
              char: 'Lucy',
              charAvatar: '👧',
              charSay: "Hi. I'm Lucy.",
              prompt: 'You: Hello, Lucy. I\'m [tên em]',
              placeholder: 'Nhập tên của em...',
            },
            {
              id: 'w-2',
              char: 'Ben',
              charAvatar: '👦',
              charSay: 'How are you?',
              prompt: 'You: Fine, [thank you].',
              answer: 'thank you',
              placeholder: 'thank you',
            },
            {
              id: 'w-3',
              char: 'Lucy',
              charAvatar: '👧',
              charSay: 'Goodbye.',
              prompt: 'You: [Bye / Goodbye].',
              answer: 'Bye',
              placeholder: 'Bye',
            },
          ],
        },
      },
      {
        activityNumber: 6,
        title: '6. Project: My pupil card',
        vietnameseTitle: 'Dự án: Thẻ học sinh của em (Trang 15)',
        type: 'project',
        data: {
          sample: {
            name: 'Le Van Thanh',
            className: '3A',
            school: 'Sao Mai',
          },
        },
      },
    ],
  },
];

export const UNIT2_LESSONS: UnitLessonData[] = [
  // UNIT 2 - LESSON 1
  {
    unitId: 2,
    lessonNumber: 1,
    title: 'Lesson 1: Asking and Answering About Names',
    vietnameseTitle: 'Tiết 1: Hỏi và trả lời về tên (Trang 16 - 17)',
    objective: "Hỏi tên bạn: What's your name? và trả lời: My name's + Tên",
    activities: [
      {
        activityNumber: 1,
        title: '1. Look, listen and repeat',
        vietnameseTitle: 'Nhìn tranh, nghe cô giáo đọc và nhắc lại',
        type: 'look-listen',
        data: {
          note: "Cách hỏi tên chuẩn: What's your name? (Tên bạn là gì?) - My name's... (Tên mình là...)",
          scenes: [
            {
              id: 'u2-l1-s1',
              title: 'Tranh a: Linh và Ben trong lớp học',
              description: 'Linh gặp Ben trong lớp học và chủ động làm quen',
              bubbles: [
                {
                  id: 'u2-b1',
                  speaker: 'Linh',
                  speakerAvatar: '👧',
                  speakerSide: 'left',
                  text: "Hi. I'm Linh. What's your name?",
                  vietnamese: 'Chào bạn. Mình là Linh. Tên bạn là gì?',
                },
                {
                  id: 'u2-b2',
                  speaker: 'Ben',
                  speakerAvatar: '👦',
                  speakerSide: 'right',
                  text: "My name's Ben.",
                  vietnamese: 'Tên của mình là Ben.',
                },
              ],
            },
            {
              id: 'u2-l1-s2',
              title: 'Tranh b: Nam và Mary trên sân bóng',
              description: 'Nam ôm quả bóng và hỏi tên bạn Mary',
              bubbles: [
                {
                  id: 'u2-b3',
                  speaker: 'Nam',
                  speakerAvatar: '🧑',
                  speakerSide: 'left',
                  text: "What's your name?",
                  vietnamese: 'Tên của bạn là gì?',
                },
                {
                  id: 'u2-b4',
                  speaker: 'Mary',
                  speakerAvatar: '👱‍♀️',
                  speakerSide: 'right',
                  text: "My name's Mary.",
                  vietnamese: 'Tên của mình là Mary.',
                },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen, point and say',
        vietnameseTitle: 'Nghe, chỉ tranh và tập nói',
        type: 'point-say',
        data: {
          patternA: "What's your name? - My name's ____.",
          characters: [
            { id: 'nam', name: 'Nam', emoji: '🧑', pair: 'bill' },
            { id: 'bill', name: 'Bill', emoji: '🧒', pair: 'nam' },
            { id: 'linh', name: 'Linh', emoji: '👧', pair: 'mary' },
            { id: 'mary', name: 'Mary', emoji: '👱‍♀️', pair: 'linh' },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's talk",
        vietnameseTitle: 'Cùng thực hành hỏi đáp trên đường tới trường',
        type: 'talk',
        data: {
          context: 'Bill và Mai đi bộ tới trường có tháp đồng hồ (School)',
          prompts: [
            { q: "What's your name?", a: "My name's Mai." },
            { q: "What's your name?", a: "My name's Bill." },
          ],
        },
      },
      {
        activityNumber: 4,
        title: '4. Listen and tick',
        vietnameseTitle: 'Nghe và đánh dấu tích vào tranh đúng (Trang 17)',
        type: 'listen-circle',
        data: {
          questions: [
            {
              id: 'u2-lt-1',
              audio: "What's your name? - My name's Mary.",
              question: 'Câu 1: Nghe xem Nam đang hỏi tên ai?',
              options: [
                { id: 'a', label: 'Tranh a: Nam & Lucy', isCorrect: false, emoji: '🧑 👧' },
                { id: 'b', label: 'Tranh b: Nam & Mary', isCorrect: true, emoji: '🧑 👱‍♀️' },
              ],
            },
            {
              id: 'u2-lt-2',
              audio: "Hi. I'm Mai. What's your name? - My name's Bill.",
              question: 'Câu 2: Nghe xem Mai đang làm quen với ai?',
              options: [
                { id: 'a', label: 'Tranh a: Mai & Bill', isCorrect: true, emoji: '👧 🧒' },
                { id: 'b', label: 'Tranh b: Mai & Ben', isCorrect: false, emoji: '👧 👦' },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 5,
        title: '5. Look, complete and read',
        vietnameseTitle: 'Nhìn tranh, điền từ vào chỗ trống và đọc to',
        type: 'complete-read',
        data: {
          items: [
            {
              id: 'u2-cr-1',
              character: 'Nam & Lucy',
              avatar: '🧑 👧',
              preText: "Hi. My name's Nam. What's your name? - My name's ",
              blank: 'Lucy',
              postText: '.',
              options: ['Lucy', 'Mary', 'Mai', 'Ben'],
              correct: 'Lucy',
            },
            {
              id: 'u2-cr-2',
              character: 'Mai & Mary',
              avatar: '👧 👱‍♀️',
              preText: "Hi. I'm Mai. What's your ",
              blank: 'name',
              postText: "? - My name's Mary.",
              options: ['name', 'old', 'how', 'this'],
              correct: 'name',
            },
          ],
        },
      },
      {
        activityNumber: 6,
        title: "6. Let's play: Slap the board",
        vietnameseTitle: 'Trò chơi Đập bảng tên (Slap the board - Trang 17)',
        type: 'sing-chant',
        data: {
          title: 'Slap the board: Name Game',
          lines: [
            "Teacher: What's your name?",
            "Bill: My name's Bill.",
            "Pupil: (Slap 'Bill' on the blackboard!)",
            "Teacher: What's your name?",
            "Mary: My name's Mary.",
            "Pupil: (Slap 'Mary' on the blackboard!)",
          ],
        },
      },
    ],
  },

  // UNIT 2 - LESSON 2
  {
    unitId: 2,
    lessonNumber: 2,
    title: 'Lesson 2: Asking and Answering About Age',
    vietnameseTitle: 'Tiết 2: Hỏi và trả lời về số tuổi (Trang 18 - 19)',
    objective: "Hỏi tuổi: How old are you? và trả lời: I'm + [số tuổi] years old",
    activities: [
      {
        activityNumber: 1,
        title: '1. Look, listen and repeat',
        vietnameseTitle: 'Nhìn tranh, nghe cô giáo đọc và nhắc lại',
        type: 'look-listen',
        data: {
          note: "Hỏi tuổi: How old are you? - I'm [seven / eight / nine / ten] years old.",
          scenes: [
            {
              id: 'u2-l2-s1',
              title: 'Tranh a: Nam và Mary ở cổng trường',
              description: 'Nam hỏi lại tên của bạn Mary',
              bubbles: [
                {
                  id: 'u2-l2-b1',
                  speaker: 'Nam',
                  speakerAvatar: '🧑',
                  speakerSide: 'left',
                  text: "What's your name?",
                  vietnamese: 'Tên bạn là gì?',
                },
                {
                  id: 'u2-l2-b2',
                  speaker: 'Mary',
                  speakerAvatar: '👱‍♀️',
                  speakerSide: 'right',
                  text: "My name's Mary.",
                  vietnamese: 'Tên mình là Mary.',
                },
              ],
            },
            {
              id: 'u2-l2-s2',
              title: 'Tranh b: Nam hỏi tuổi của Mary',
              description: 'Mary trả lời mình 8 tuổi',
              bubbles: [
                {
                  id: 'u2-l2-b3',
                  speaker: 'Nam',
                  speakerAvatar: '🧑',
                  speakerSide: 'left',
                  text: 'How old are you?',
                  vietnamese: 'Bạn bao nhiêu tuổi?',
                },
                {
                  id: 'u2-l2-b4',
                  speaker: 'Mary',
                  speakerAvatar: '👱‍♀️',
                  speakerSide: 'right',
                  text: "I'm eight years old.",
                  vietnamese: 'Mình 8 tuổi.',
                },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen, point and say',
        vietnameseTitle: 'Nghe, chỉ tranh các bánh sinh nhật và tập nói tuổi',
        type: 'point-say',
        data: {
          patternA: "How old are you? - I'm ____ years old.",
          situations: [
            {
              id: 'cake-7',
              title: 'Bánh số 7: Bill (7 tuổi)',
              textQ: 'How old are you?',
              textA: "I'm seven years old.",
              desc: 'seven (7)',
            },
            {
              id: 'cake-8',
              title: 'Bánh số 8: Mai (8 tuổi)',
              textQ: 'How old are you?',
              textA: "I'm eight years old.",
              desc: 'eight (8)',
            },
            {
              id: 'cake-9',
              title: 'Bánh số 9: Ben (9 tuổi)',
              textQ: 'How old are you?',
              textA: "I'm nine years old.",
              desc: 'nine (9)',
            },
            {
              id: 'cake-10',
              title: 'Bánh số 10: Nam (10 tuổi)',
              textQ: 'How old are you?',
              textA: "I'm ten years old.",
              desc: 'ten (10)',
            },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's talk",
        vietnameseTitle: 'Cùng thực hành tại tiệm bánh sinh nhật (Bakery)',
        type: 'talk',
        data: {
          context: 'Đầu bếp tiệm bánh (Baker) hỏi tuổi các bạn học sinh',
          prompts: [
            { q: 'How old are you?', a: "I'm seven years old." },
            { q: 'How old are you?', a: "I'm eight years old." },
            { q: 'How old are you?', a: "I'm nine years old." },
          ],
        },
      },
      {
        activityNumber: 4,
        title: '4. Listen and number',
        vietnameseTitle: 'Nghe và đánh số thứ tự cho các bánh sinh nhật (Trang 19)',
        type: 'listen-circle',
        data: {
          questions: [
            {
              id: 'u2-ln-1',
              audio: "How old are you? - I'm eight years old.",
              question: 'Bánh nào được nhắc tới ở số 1?',
              options: [
                { id: 'cake-8', label: 'Bánh số 8 (eight)', isCorrect: true, emoji: '🎂 8️⃣' },
                { id: 'cake-7', label: 'Bánh số 7 (seven)', isCorrect: false, emoji: '🎂 7️⃣' },
              ],
            },
            {
              id: 'u2-ln-2',
              audio: "How old are you? - I'm ten years old.",
              question: 'Bánh nào được nhắc tới ở số 2?',
              options: [
                { id: 'cake-10', label: 'Bánh số 10 (ten)', isCorrect: true, emoji: '🎂 🔟' },
                { id: 'cake-9', label: 'Bánh số 9 (nine)', isCorrect: false, emoji: '🎂 9️⃣' },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 5,
        title: '5. Look, complete and read',
        vietnameseTitle: 'Nhìn tranh bánh kem, điền từ và đọc to',
        type: 'complete-read',
        data: {
          items: [
            {
              id: 'u2-cr2-1',
              character: 'Bạn cầm bánh số 7',
              avatar: '👦 🎂',
              preText: "How old are you? - I'm ",
              blank: 'seven',
              postText: ' years old.',
              options: ['seven', 'eight', 'nine', 'ten'],
              correct: 'seven',
            },
            {
              id: 'u2-cr2-2',
              character: 'Bạn cầm bánh số 8',
              avatar: '👧 🎂',
              preText: "How old are you? - I'm eight years ",
              blank: 'old',
              postText: '.',
              options: ['old', 'year', 'name', 'how'],
              correct: 'old',
            },
            {
              id: 'u2-cr2-3',
              character: 'Bạn cầm bánh số 9',
              avatar: '👧 🎂',
              preText: 'How old are ',
              blank: 'you',
              postText: "? - I'm nine years old.",
              options: ['you', 'your', 'he', 'she'],
              correct: 'you',
            },
          ],
        },
      },
      {
        activityNumber: 6,
        title: "6. Let's sing: How old are you?",
        vietnameseTitle: 'Cùng hát bài "How old are you?" (Trang 19)',
        type: 'sing-chant',
        data: {
          title: 'How Old Are You? Song',
          lines: [
            'How old are you?',
            "I'm seven.",
            "I'm seven years old.",
            'How old are you?',
            "I'm eight.",
            "I'm eight years old.",
          ],
        },
      },
    ],
  },

  // UNIT 2 - LESSON 3
  {
    unitId: 2,
    lessonNumber: 3,
    title: 'Lesson 3: Phonics (m & n), Chant & Birthday Cake Project',
    vietnameseTitle: 'Tiết 3: Luyện ngữ âm m & n, Đọc vè & Dự án Bánh sinh nhật (Trang 20 - 21)',
    objective: 'Luyện chuẩn âm /m/ và /n/, đọc vè vui nhộn và làm dự án bánh sinh nhật',
    activities: [
      {
        activityNumber: 1,
        title: '1. Listen and repeat (Phonics m & n)',
        vietnameseTitle: 'Lắng nghe và phát âm chuẩn âm m và n (Trang 20)',
        type: 'phonics',
        data: {
          phonicsPairs: [
            {
              letter: 'm',
              sound: '/m/',
              word: 'Mary',
              sentence: "I'm Mary.",
              vietnamese: 'Mình là Mary.',
              highlightChar: 'M',
            },
            {
              letter: 'n',
              sound: '/n/',
              word: 'Nam',
              sentence: "My name's Nam.",
              vietnamese: 'Tên của mình là Nam.',
              highlightChar: 'N',
            },
          ],
        },
      },
      {
        activityNumber: 2,
        title: '2. Listen and circle',
        vietnameseTitle: 'Nghe và khoanh tròn tên đúng (Trang 20)',
        type: 'listen-circle',
        data: {
          questions: [
            {
              id: 'u2-plc-1',
              audio: "Hi. I'm Mary.",
              question: "Câu 1: Hi. I'm _____ .",
              options: [
                { id: 'a', label: 'a. Mai', isCorrect: false },
                { id: 'b', label: 'b. Mary', isCorrect: true },
                { id: 'c', label: 'c. Minh', isCorrect: false },
              ],
            },
            {
              id: 'u2-plc-2',
              audio: "Hello. My name's Nam.",
              question: "Câu 2: Hello. My name's _____ .",
              options: [
                { id: 'a', label: 'a. Mary', isCorrect: false },
                { id: 'b', label: 'b. Mai', isCorrect: false },
                { id: 'c', label: 'c. Nam', isCorrect: true },
              ],
            },
          ],
        },
      },
      {
        activityNumber: 3,
        title: "3. Let's chant",
        vietnameseTitle: 'Cùng đọc vè theo nhịp điệu (Trang 20)',
        type: 'sing-chant',
        data: {
          title: "What's your name? Chant",
          lines: [
            "What's your name?",
            "My name's Mary.",
            'Mary, Mary, Mary.',
            "What's your name?",
            "My name's Nam.",
            'Nam, Nam, Nam.',
          ],
        },
      },
      {
        activityNumber: 4,
        title: '4. Read and match',
        vietnameseTitle: 'Đọc đoạn hội thoại và nối với bức tranh tương ứng (Trang 21)',
        type: 'read-match',
        data: {
          prompts: [
            {
              id: 'u2-m-1',
              text: "1. Hi. My name's Linh. What's your name? - My name's Mary.",
              correctTargetId: 'pic-b',
            },
            {
              id: 'u2-m-2',
              text: "2. How old are you, Lucy? - I'm eight years old.",
              correctTargetId: 'pic-c',
            },
            {
              id: 'u2-m-3',
              text: "3. Hi. I'm Mai. - Hello, Mai. I'm Ben.",
              correctTargetId: 'pic-a',
            },
          ],
          options: [
            { id: 'pic-a', label: 'Tranh a: Ben & Mai chào nhau' },
            { id: 'pic-b', label: 'Tranh b: Linh & Mary làm quen' },
            { id: 'pic-c', label: 'Tranh c: Lucy cầm bánh số 8 cùng Nam' },
          ],
        },
      },
      {
        activityNumber: 5,
        title: "5. Let's write",
        vietnameseTitle: 'Tập điền câu trả lời giao tiếp với Minh (Trang 21)',
        type: 'write',
        data: {
          dialogues: [
            {
              id: 'u2-w-1',
              char: 'Minh',
              charAvatar: '👦',
              charSay: "Hi. I'm Minh. What's your name?",
              prompt: "You: My name's [tên em].",
              placeholder: "Nhập tên em (ví dụ: My name's Linh)...",
            },
            {
              id: 'u2-w-2',
              char: 'Minh',
              charAvatar: '👦',
              charSay: 'How old are you?',
              prompt: "You: I'm [số tuổi] years old.",
              placeholder: "Nhập tuổi của em (ví dụ: I'm eight years old)...",
            },
          ],
        },
      },
      {
        activityNumber: 6,
        title: '6. Project: My birthday cake',
        vietnameseTitle: 'Dự án: Vẽ và giới thiệu bánh sinh nhật của em (Trang 21)',
        type: 'project',
        data: {
          sample: {
            title: 'My Birthday Cake',
            desc: 'Giới thiệu bánh sinh nhật với số nến tuổi của em trước lớp!',
          },
        },
      },
    ],
  },
];

export const getUnitLessons = (unitId: number): UnitLessonData[] => {
  if (unitId === 2) return UNIT2_LESSONS;
  return UNIT1_LESSONS;
};

