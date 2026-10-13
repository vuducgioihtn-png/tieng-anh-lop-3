import { Unit } from '../types';

export const UNITS_DATA: Unit[] = [
  // --- TẬP 1 (TERM 1) ---
  {
    id: 0,
    term: 1,
    unitNumber: 0,
    title: 'Starter: Numbers & Alphabet',
    vietnameseTitle: 'Khởi động: Số đếm & Bảng chữ cái',
    theme: 'Me and My Friends',
    color: 'emerald',
    icon: '🔢',
    page: 7,
    competences: [
      'Đếm và đọc số từ 1 đến 10',
      'Đọc thuộc bảng chữ cái tiếng Anh A - Z',
      'Đánh vần tên các nhân vật trong sách'
    ],
    vocabularies: [
      { id: 's-1', word: 'one', phonetic: '/wʌn/', meaning: 'số một (1)', icon: '1️⃣', color: '#10b981', exampleEn: 'One apple on the table.', exampleVi: 'Một quả táo trên bàn.' },
      { id: 's-2', word: 'two', phonetic: '/tuː/', meaning: 'số hai (2)', icon: '2️⃣', color: '#06b6d4', exampleEn: 'Two eyes on my face.', exampleVi: 'Hai mắt trên khuôn mặt.' },
      { id: 's-3', word: 'three', phonetic: '/θriː/', meaning: 'số ba (3)', icon: '3️⃣', color: '#3b82f6', exampleEn: 'I have three pencils.', exampleVi: 'Mình có ba chiếc bút chì.' },
      { id: 's-4', word: 'four', phonetic: '/fɔːr/', meaning: 'số bốn (4)', icon: '4️⃣', color: '#8b5cf6', exampleEn: 'Four legs of the desk.', exampleVi: 'Bốn chân của chiếc bàn.' },
      { id: 's-5', word: 'five', phonetic: '/faɪv/', meaning: 'số năm (5)', icon: '5️⃣', color: '#ec4899', exampleEn: 'Five fingers on a hand.', exampleVi: 'Năm ngón tay trên một bàn tay.' },
      { id: 's-6', word: 'six', phonetic: '/sɪks/', meaning: 'số sáu (6)', icon: '6️⃣', color: '#f59e0b', exampleEn: 'Six books in my bag.', exampleVi: 'Sáu quyển sách trong cặp.' },
      { id: 's-7', word: 'seven', phonetic: '/ˈsev.ən/', meaning: 'số bảy (7)', icon: '7️⃣', color: '#10b981', exampleEn: 'I am seven years old.', exampleVi: 'Mình bảy tuổi.' },
      { id: 's-8', word: 'eight', phonetic: '/eɪt/', meaning: 'số tám (8)', icon: '8️⃣', color: '#06b6d4', exampleEn: 'Eight crayons on the desk.', exampleVi: 'Tám cây bút màu trên bàn.' },
      { id: 's-9', word: 'nine', phonetic: '/naɪn/', meaning: 'số chín (9)', icon: '9️⃣', color: '#6366f1', exampleEn: 'Nine stars in the sky.', exampleVi: 'Chín ngôi sao trên bầu trời.' },
      { id: 's-10', word: 'ten', phonetic: '/ten/', meaning: 'số mười (10)', icon: '🔟', color: '#ef4444', exampleEn: 'Count one to ten, please!', exampleVi: 'Hãy đếm từ một đến mười nhé!' },
      { id: 's-11', word: 'alphabet', phonetic: '/ˈæl.fə.bet/', meaning: 'bảng chữ cái', icon: '🔤', color: '#8b5cf6', exampleEn: 'Sing the alphabet song.', exampleVi: 'Hát bài hát bảng chữ cái.' }
    ],
    patterns: [
      {
        id: 'sp-1',
        pattern: 'Count one to ten.',
        explanation: 'Lời đề nghị cùng nhau đếm số từ 1 đến 10.',
        examples: [
          { speakerA: 'Teacher', textA: 'Count one to ten, class!', speakerB: 'Pupils', textB: 'One, two, three, four, five, six, seven, eight, nine, ten!' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'A B C D E F G',
        sampleWords: [
          { word: 'A, B, C', sentence: 'Now I know my ABCs.' },
          { word: 'One, two, three', sentence: 'Listen, point and repeat.' }
        ]
      }
    ],
    chant: {
      title: 'The Alphabet Song',
      lines: [
        'A B C D E F G',
        'H I J K L M N O P',
        'Q R S T U V',
        'W X Y and Z',
        'Now I know my ABCs,',
        'Next time will you sing with me?'
      ]
    },
    quizQuestions: [
      {
        id: 'sq-1',
        type: 'multiple-choice',
        prompt: 'Số "8" trong tiếng Anh được viết là gì?',
        options: ['seven', 'eight', 'nine', 'ten'],
        correctAnswer: 'eight',
        explanation: 'Số 8 là "eight" (/eɪt/).'
      },
      {
        id: 'sq-2',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn số đúng:',
        audioText: 'five',
        options: ['four', 'five', 'six', 'three'],
        correctAnswer: 'five',
        explanation: 'Từ vừa phát âm là "five" (số 5).'
      },
      {
        id: 'sq-3',
        type: 'unscramble',
        prompt: 'Sắp xếp các chữ cái thành số 3:',
        scrambledWords: ['t', 'h', 'r', 'e', 'e'],
        correctAnswer: 'three',
        explanation: 'Số 3 viết là "three".'
      },
      {
        id: 'sq-4',
        type: 'fill-blank',
        prompt: 'Điền từ còn thiếu: one, two, three, four, _____',
        options: ['five', 'six', 'seven', 'ten'],
        correctAnswer: 'five',
        explanation: 'Thứ tự tiếp theo sau four (4) là five (5).'
      }
    ]
  },
  {
    id: 1,
    term: 1,
    unitNumber: 1,
    title: 'Unit 1: Hello',
    vietnameseTitle: 'Bài 1: Xin chào',
    theme: 'Me and My Friends',
    color: 'amber',
    icon: '👋',
    page: 10,
    competences: [
      'Chào hỏi và tự giới thiệu tên mình',
      'Hỏi thăm sức khỏe và đáp lại lời cảm ơn',
      'Nói lời chào tạm biệt'
    ],
    vocabularies: [
      { id: 'u1-1', word: 'hello', phonetic: '/həˈləʊ/', meaning: 'xin chào', icon: '👋', color: '#f59e0b', exampleEn: 'Hello. I\'m Ben.', exampleVi: 'Xin chào. Mình là Ben.' },
      { id: 'u1-2', word: 'hi', phonetic: '/haɪ/', meaning: 'chào (thân mật)', icon: '🖐️', color: '#eab308', exampleEn: 'Hi, Ben. I\'m Mai.', exampleVi: 'Chào Ben. Mình là Mai.' },
      { id: 'u1-3', word: 'how', phonetic: '/haʊ/', meaning: 'như thế nào', icon: '❓', color: '#3b82f6', exampleEn: 'How are you?', exampleVi: 'Bạn có khỏe không?' },
      { id: 'u1-4', word: 'fine', phonetic: '/faɪn/', meaning: 'khỏe, tốt', icon: '😊', color: '#10b981', exampleEn: 'Fine, thank you.', exampleVi: 'Mình khỏe, cảm ơn bạn.' },
      { id: 'u1-5', word: 'thank you', phonetic: '/ˈθæŋk juː/', meaning: 'cảm ơn bạn', icon: '🙏', color: '#ec4899', exampleEn: 'Fine, thank you.', exampleVi: 'Mình khỏe, cảm ơn bạn.' },
      { id: 'u1-6', word: 'goodbye', phonetic: '/ˌɡʊdˈbaɪ/', meaning: 'tạm biệt', icon: '👋', color: '#6366f1', exampleEn: 'Goodbye, Mai.', exampleVi: 'Tạm biệt Mai nhé.' },
      { id: 'u1-7', word: 'bye', phonetic: '/baɪ/', meaning: 'tạm biệt (ngắn gọn)', icon: '🏃', color: '#8b5cf6', exampleEn: 'Bye, Ben.', exampleVi: 'Tạm biệt Ben.' }
    ],
    patterns: [
      {
        id: 'u1-p1',
        pattern: 'Hello / Hi. I\'m [Tên].',
        explanation: 'Dùng để chào và tự giới thiệu tên mình.',
        examples: [
          { speakerA: 'Ben', textA: 'Hello. I\'m Ben.', speakerB: 'Mai', textB: 'Hi, Ben. I\'m Mai.' },
          { speakerA: 'Minh', textA: 'Hi. I\'m Minh.', speakerB: 'Lucy', textB: 'Hello, Minh. I\'m Lucy.' }
        ]
      },
      {
        id: 'u1-p2',
        pattern: 'Hi. How are you? - Fine, thank you.',
        explanation: 'Hỏi thăm sức khỏe và trả lời lịch sự kèm lời cảm ơn.',
        examples: [
          { speakerA: 'Ben', textA: 'Hi, Mai. How are you?', speakerB: 'Mai', textB: 'Fine, thank you.' },
          { speakerA: 'Ben', textA: 'Goodbye, Mai.', speakerB: 'Mai', textB: 'Bye, Ben.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'h - /h/',
        sampleWords: [
          { word: 'hello', sentence: 'Hello, Ben.' },
          { word: 'how', sentence: 'How are you?' }
        ]
      },
      {
        sound: 'b - /b/',
        sampleWords: [
          { word: 'bye', sentence: 'Bye, Ben.' },
          { word: 'Ben', sentence: 'I\'m Ben.' }
        ]
      }
    ],
    chant: {
      title: 'Hello Chant (Trang 14)',
      lines: [
        'Hello. I\'m Ben.',
        'Hello. I\'m Ben.',
        'Hi, Ben. Hi, Ben. I\'m Mai. I\'m Mai.',
        'How are you, Ben?',
        'Fine, thank you.',
        'Bye, Ben. Bye, Ben. Bye, Mai. Bye, Mai.'
      ]
    },
    quizQuestions: [
      {
        id: 'u1-q1',
        type: 'multiple-choice',
        prompt: 'Khi gặp bạn lần đầu, để tự giới thiệu mình tên Nam, bạn nói:',
        options: ['Hello. I\'m Nam.', 'Goodbye, Nam.', 'Fine, thank you.', 'How are you, Nam?'],
        correctAnswer: 'Hello. I\'m Nam.',
        explanation: 'Cấu trúc "Hello / Hi. I\'m [Tên]" dùng để chào và giới thiệu tên mình.'
      },
      {
        id: 'u1-q2',
        type: 'multiple-choice',
        prompt: 'Bạn Ben hỏi: "Hi, Mai. How are you?". Mai nên đáp lại thế nào?',
        options: ['Fine, thank you.', 'I\'m Mai.', 'Goodbye, Ben.', 'Hi. I\'m Ben.'],
        correctAnswer: 'Fine, thank you.',
        explanation: 'Khi được hỏi "How are you?" (Bạn có khỏe không?), câu trả lời đúng là "Fine, thank you." (Mình khỏe, cảm ơn bạn).'
      },
      {
        id: 'u1-q3',
        type: 'fill-blank',
        prompt: 'Điền từ còn thiếu: "Goodbye, Mai." - "_____, Ben."',
        options: ['Bye', 'Hello', 'Fine', 'How'],
        correctAnswer: 'Bye',
        explanation: 'Đáp lại lời chào tạm biệt "Goodbye" là "Bye" hoặc "Goodbye".'
      },
      {
        id: 'u1-q4',
        type: 'listen-and-choose',
        prompt: 'Nghe phát âm và chọn từ chính xác:',
        audioText: 'thank you',
        options: ['thank you', 'goodbye', 'hello', 'fine'],
        correctAnswer: 'thank you',
        explanation: 'Âm thanh vừa nghe là "thank you" (/ˈθæŋk juː/).'
      }
    ]
  },
  {
    id: 2,
    term: 1,
    unitNumber: 2,
    title: 'Unit 2: Our names',
    vietnameseTitle: 'Bài 2: Tên của chúng mình',
    theme: 'Me and My Friends',
    color: 'sky',
    icon: '🏷️',
    page: 16,
    competences: [
      'Hỏi và trả lời về tên của một người',
      'Hỏi và trả lời về số tuổi của một người'
    ],
    vocabularies: [
      { id: 'u2-1', word: 'name', phonetic: '/neɪm/', meaning: 'tên', icon: '📇', color: '#0ea5e9', exampleEn: 'My name\'s Ben.', exampleVi: 'Tên của mình là Ben.' },
      { id: 'u2-2', word: 'what', phonetic: '/wɒt/', meaning: 'cái gì, gì', icon: '❓', color: '#6366f1', exampleEn: 'What\'s your name?', exampleVi: 'Tên của bạn là gì?' },
      { id: 'u2-3', word: 'your', phonetic: '/jɔːr/', meaning: 'của bạn', icon: '👉', color: '#10b981', exampleEn: 'What\'s your name?', exampleVi: 'Tên của bạn là gì?' },
      { id: 'u2-4', word: 'my', phonetic: '/maɪ/', meaning: 'của tôi, của mình', icon: '🙋', color: '#ec4899', exampleEn: 'My name is Linh.', exampleVi: 'Tên mình là Linh.' },
      { id: 'u2-5', word: 'old', phonetic: '/əʊld/', meaning: 'tuổi, già', icon: '🎂', color: '#f59e0b', exampleEn: 'How old are you?', exampleVi: 'Bạn bao nhiêu tuổi?' },
      { id: 'u2-6', word: 'years old', phonetic: '/jɪəz əʊld/', meaning: 'tuổi', icon: '🕯️', color: '#8b5cf6', exampleEn: 'I\'m eight years old.', exampleVi: 'Mình 8 tuổi.' }
    ],
    patterns: [
      {
        id: 'u2-p1',
        pattern: 'What\'s your name? - My name\'s [Tên].',
        explanation: 'Hỏi và trả lời tên của bạn.',
        examples: [
          { speakerA: 'Linh', textA: 'Hi. I\'m Linh. What\'s your name?', speakerB: 'Ben', textB: 'My name\'s Ben.' },
          { speakerA: 'Nam', textA: 'What\'s your name?', speakerB: 'Mary', textB: 'My name\'s Mary.' }
        ]
      },
      {
        id: 'u2-p2',
        pattern: 'How old are you? - I\'m [Số tuổi] years old.',
        explanation: 'Hỏi và trả lời tuổi.',
        examples: [
          { speakerA: 'Nam', textA: 'How old are you, Mary?', speakerB: 'Mary', textB: 'I\'m eight years old.' },
          { speakerA: 'Baker', textA: 'How old are you?', speakerB: 'Pupil', textB: 'I\'m seven years old.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'm - /m/',
        sampleWords: [
          { word: 'Mary', sentence: 'I\'m Mary.' },
          { word: 'my', sentence: 'My name\'s Mary.' }
        ]
      },
      {
        sound: 'n - /n/',
        sampleWords: [
          { word: 'Nam', sentence: 'My name\'s Nam.' },
          { word: 'name', sentence: 'What\'s your name?' }
        ]
      }
    ],
    chant: {
      title: 'What\'s your name? (Trang 20)',
      lines: [
        'What\'s your name?',
        'My name\'s Mary. Mary, Mary, Mary.',
        'What\'s your name?',
        'My name\'s Nam. Nam, Nam, Nam.'
      ]
    },
    quizQuestions: [
      {
        id: 'u2-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi tên bạn, em dùng câu hỏi nào?',
        options: ['What\'s your name?', 'How old are you?', 'How are you?', 'Is this Mary?'],
        correctAnswer: 'What\'s your name?',
        explanation: '"What\'s your name?" có nghĩa là "Tên bạn là gì?".'
      },
      {
        id: 'u2-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: "How _____ are you?" - "I\'m eight years old."',
        options: ['old', 'name', 'fine', 'your'],
        correctAnswer: 'old',
        explanation: 'Câu hỏi tuổi luôn dùng "How old are you?".'
      },
      {
        id: 'u2-q3',
        type: 'unscramble',
        prompt: 'Sắp xếp câu: Mary / name\'s / My / .',
        scrambledWords: ['My', 'name\'s', 'Mary', '.'],
        correctAnswer: 'My name\'s Mary .',
        explanation: 'Cấu trúc giới thiệu tên: My name\'s Mary.'
      },
      {
        id: 'u2-q4',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn số tuổi đúng:',
        audioText: 'I am eight years old.',
        options: ['7 tuổi', '8 tuổi', '9 tuổi', '10 tuổi'],
        correctAnswer: '8 tuổi',
        explanation: '"eight years old" nghĩa là 8 tuổi.'
      }
    ]
  },
  {
    id: 3,
    term: 1,
    unitNumber: 3,
    title: 'Unit 3: Our friends',
    vietnameseTitle: 'Bài 3: Các bạn của chúng mình',
    theme: 'Me and My Friends',
    color: 'indigo',
    icon: '👫',
    page: 22,
    competences: [
      'Giới thiệu bạn bè hoặc thầy cô giáo',
      'Hỏi và trả lời xác nhận một ai đó (Is this / that...?)'
    ],
    vocabularies: [
      { id: 'u3-1', word: 'friend', phonetic: '/frend/', meaning: 'bạn, bạn bè', icon: '🤝', color: '#6366f1', exampleEn: 'This is my friend, Mai.', exampleVi: 'Đây là bạn của mình, Mai.' },
      { id: 'u3-2', word: 'teacher', phonetic: '/ˈtiː.tʃər/', meaning: 'giáo viên, thầy/cô giáo', icon: '👩‍🏫', color: '#3b82f6', exampleEn: 'That\'s my teacher, Mr Long.', exampleVi: 'Kia là thầy giáo của mình, thầy Long.' },
      { id: 'u3-3', word: 'this', phonetic: '/ðɪs/', meaning: 'đây, này (ở gần)', icon: '👇', color: '#10b981', exampleEn: 'This is Mary.', exampleVi: 'Đây là Mary.' },
      { id: 'u3-4', word: 'that', phonetic: '/ðæt/', meaning: 'kia, đó (ở xa)', icon: '👉', color: '#f59e0b', exampleEn: 'That\'s Mr Long.', exampleVi: 'Kia là thầy Long.' },
      { id: 'u3-5', word: 'Mr', phonetic: '/ˈmɪs.tər/', meaning: 'thầy, ông (dành cho nam)', icon: '👨', color: '#0ea5e9', exampleEn: 'Hello, Mr Long.', exampleVi: 'Em chào thầy Long ạ.' },
      { id: 'u3-6', word: 'Ms', phonetic: '/mɪz/', meaning: 'cô, bà (dành cho nữ)', icon: '👩', color: '#ec4899', exampleEn: 'Good morning, Ms Hoa.', exampleVi: 'Em chào cô Hoa ạ.' }
    ],
    patterns: [
      {
        id: 'u3-p1',
        pattern: 'This is [Tên]. / That\'s [Tên].',
        explanation: 'Giới thiệu ai đó ở gần (This is...) hoặc ở xa (That\'s...).',
        examples: [
          { speakerA: 'Ben', textA: 'This is Mary.', speakerB: 'Nam', textB: 'Hi, Mary.' },
          { speakerA: 'Mai', textA: 'That\'s Mr Long.', speakerB: 'Ben', textB: 'Hello, Mr Long.' }
        ]
      },
      {
        id: 'u3-p2',
        pattern: 'Is this / that [Tên]? - Yes, it is. / No, it isn\'t. It\'s [Tên].',
        explanation: 'Hỏi xác nhận có phải người đó không.',
        examples: [
          { speakerA: 'Mai', textA: 'Is this Bill?', speakerB: 'Nam', textB: 'Yes, it is.' },
          { speakerA: 'Lucy', textA: 'Is that Nam?', speakerB: 'Mary', textB: 'No, it isn\'t. It\'s Minh.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'th - /ð/',
        sampleWords: [
          { word: 'that', sentence: 'That\'s Lucy.' },
          { word: 'this', sentence: 'This is my friend.' }
        ]
      },
      {
        sound: 'th - /θ/',
        sampleWords: [
          { word: 'thank', sentence: 'Thank you, Bill.' }
        ]
      }
    ],
    chant: {
      title: 'Our Friends Chant (Trang 26)',
      lines: [
        'Is that Mai? Yes, it is.',
        'Is that Minh? No, it isn\'t. It\'s Nam. It\'s Nam.',
        'Hello, Mary. Hello, Mary.',
        'How are you? I\'m fine, thank you. I\'m fine, thank you.'
      ]
    },
    quizQuestions: [
      {
        id: 'u3-q1',
        type: 'multiple-choice',
        prompt: 'Để giới thiệu "Kia là cô giáo của mình, cô Hoa", em nói:',
        options: ['That\'s my teacher, Ms Hoa.', 'This is my friend, Mai.', 'Is that Mr Long?', 'How old are you, Ms Hoa?'],
        correctAnswer: 'That\'s my teacher, Ms Hoa.',
        explanation: '"That\'s my teacher, Ms Hoa." đúng nghĩa "Kia là cô giáo của mình, cô Hoa".'
      },
      {
        id: 'u3-q2',
        type: 'multiple-choice',
        prompt: 'Nam hỏi: "Is that Bill?". Mai muốn trả lời "Không phải, đó là Ben" thì chọn câu nào?',
        options: ['No, it isn\'t. It\'s Ben.', 'Yes, it is.', 'Fine, thank you.', 'My name\'s Ben.'],
        correctAnswer: 'No, it isn\'t. It\'s Ben.',
        explanation: 'Khi trả lời phủ định: "No, it isn\'t. It\'s [Tên]."'
      },
      {
        id: 'u3-q3',
        type: 'fill-blank',
        prompt: 'Điền từ: "Is _____ Mai?" - "Yes, it is."',
        options: ['this', 'how', 'what', 'are'],
        correctAnswer: 'this',
        explanation: 'Cấu trúc hỏi: Is this / that + Tên?'
      },
      {
        id: 'u3-q4',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn câu nói đúng:',
        audioText: 'This is my friend, Linh.',
        options: ['This is my friend, Linh.', 'That is my teacher, Mr Long.', 'Is that Minh?', 'Goodbye, Linh.'],
        correctAnswer: 'This is my friend, Linh.',
        explanation: 'Câu vừa nghe là "This is my friend, Linh."'
      }
    ]
  },
  {
    id: 4,
    term: 1,
    unitNumber: 4,
    title: 'Unit 4: Our bodies',
    vietnameseTitle: 'Bài 4: Cơ thể của chúng mình',
    theme: 'Me and My Friends',
    color: 'rose',
    icon: '👂',
    page: 28,
    competences: [
      'Hỏi và chỉ các bộ phận trên cơ thể (tai, mắt, mũi, miệng, tay, mặt, tóc)',
      'Đưa ra và thực hiện mệnh lệnh (Chạm vào... / Mở... ra)'
    ],
    vocabularies: [
      { id: 'u4-1', word: 'ear', phonetic: '/ɪər/', meaning: 'tai', icon: '👂', color: '#f43f5e', exampleEn: 'Touch your ears!', exampleVi: 'Hãy chạm vào tai của bạn!' },
      { id: 'u4-2', word: 'eye', phonetic: '/aɪ/', meaning: 'mắt', icon: '👁️', color: '#3b82f6', exampleEn: 'Open your eyes!', exampleVi: 'Hãy mở mắt ra!' },
      { id: 'u4-3', word: 'face', phonetic: '/feɪs/', meaning: 'khuôn mặt', icon: '🧒', color: '#f59e0b', exampleEn: 'Wash your face.', exampleVi: 'Rửa mặt của bạn.' },
      { id: 'u4-4', word: 'hair', phonetic: '/heər/', meaning: 'mái tóc', icon: '💇', color: '#8b5cf6', exampleEn: 'Touch your hair!', exampleVi: 'Hãy chạm vào tóc của bạn!' },
      { id: 'u4-5', word: 'hand', phonetic: '/hænd/', meaning: 'bàn tay', icon: '✋', color: '#10b981', exampleEn: 'It\'s a hand.', exampleVi: 'Đó là một bàn tay.' },
      { id: 'u4-6', word: 'mouth', phonetic: '/maʊθ/', meaning: 'miệng', icon: '👄', color: '#ec4899', exampleEn: 'Open your mouth!', exampleVi: 'Hãy mở miệng ra!' },
      { id: 'u4-7', word: 'nose', phonetic: '/nəʊz/', meaning: 'mũi', icon: '👃', color: '#06b6d4', exampleEn: 'Touch your nose!', exampleVi: 'Hãy chạm vào mũi của bạn!' },
      { id: 'u4-8', word: 'touch', phonetic: '/tʌtʃ/', meaning: 'chạm vào, sờ', icon: '👉', color: '#eab308', exampleEn: 'Touch your hair!', exampleVi: 'Hãy chạm vào tóc của bạn!' },
      { id: 'u4-9', word: 'open', phonetic: '/ˈəʊ.pən/', meaning: 'mở ra', icon: '📖', color: '#6366f1', exampleEn: 'Open your mouth, please!', exampleVi: 'Làm ơn hãy mở miệng ra!' }
    ],
    patterns: [
      {
        id: 'u4-p1',
        pattern: 'What\'s this? / What\'s that? - It\'s a / an [bộ phận].',
        explanation: 'Hỏi và trả lời về một bộ phận trên cơ thể.',
        examples: [
          { speakerA: 'Ben', textA: 'What\'s this?', speakerB: 'Mai', textB: 'It\'s a nose.' },
          { speakerA: 'Teacher', textA: 'What\'s that?', speakerB: 'Pupil', textB: 'It\'s an ear.' }
        ]
      },
      {
        id: 'u4-p2',
        pattern: 'Touch your [bộ phận]! / Open your [bộ phận]!',
        explanation: 'Mệnh lệnh yêu cầu chạm vào hoặc mở bộ phận cơ thể.',
        examples: [
          { speakerA: 'Teacher', textA: 'Touch your nose!', speakerB: 'Pupil', textB: '(Chạm tay vào mũi)' },
          { speakerA: 'Doctor', textA: 'Open your mouth!', speakerB: 'Ben', textB: '(Mở miệng ra để khám)' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'air - /eər/',
        sampleWords: [
          { word: 'hair', sentence: 'Touch your hair!' }
        ]
      },
      {
        sound: 'ear - /ɪər/',
        sampleWords: [
          { word: 'ears', sentence: 'Touch your ears!' }
        ]
      }
    ],
    chant: {
      title: 'Our Bodies Chant (Trang 32)',
      lines: [
        'Ears, ears, ears. Touch your ears! Touch your ears!',
        'Hair, hair, hair. Touch your hair! Touch your hair!'
      ]
    },
    quizQuestions: [
      {
        id: 'u4-q1',
        type: 'multiple-choice',
        prompt: 'Bác sĩ nha khoa bảo Ben mở miệng ra, bác sĩ sẽ nói:',
        options: ['Open your mouth!', 'Touch your hair!', 'Close your eyes!', 'Touch your ears!'],
        correctAnswer: 'Open your mouth!',
        explanation: '"Open your mouth!" nghĩa là "Hãy mở miệng ra!".'
      },
      {
        id: 'u4-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: What\'s this? - It\'s _____ eye.',
        options: ['an', 'a', 'the', 'two'],
        correctAnswer: 'an',
        explanation: 'Từ "eye" bắt đầu bằng nguyên âm "e" nên dùng mạo từ "an".'
      },
      {
        id: 'u4-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn hình/từ tương ứng:',
        audioText: 'Touch your nose!',
        options: ['Chạm vào mũi', 'Chạm vào tai', 'Chạm vào mắt', 'Chạm vào tóc'],
        correctAnswer: 'Chạm vào mũi',
        explanation: '"nose" là chiếc mũi.'
      },
      {
        id: 'u4-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái để thành từ "tai":',
        scrambledWords: ['e', 'a', 'r'],
        correctAnswer: 'ear',
        explanation: 'Cái tai viết là "ear".'
      }
    ]
  },
  {
    id: 5,
    term: 1,
    unitNumber: 5,
    title: 'Unit 5: My hobbies',
    vietnameseTitle: 'Bài 5: Sở thích của mình',
    theme: 'Me and My Friends',
    color: 'teal',
    icon: '🎨',
    page: 34,
    competences: [
      'Hỏi và trả lời về sở thích của một người',
      'Nói về những hoạt động mình yêu thích (hát, múa, vẽ, nấu ăn, bơi, chạy...)'
    ],
    vocabularies: [
      { id: 'u5-1', word: 'cooking', phonetic: '/ˈkʊk.ɪŋ/', meaning: 'nấu ăn', icon: '🍳', color: '#f59e0b', exampleEn: 'I like cooking.', exampleVi: 'Mình thích nấu ăn.' },
      { id: 'u5-2', word: 'dancing', phonetic: '/ˈdɑːn.sɪŋ/', meaning: 'nhảy múa, khiêu vũ', icon: '💃', color: '#ec4899', exampleEn: 'It\'s dancing.', exampleVi: 'Đó là nhảy múa.' },
      { id: 'u5-3', word: 'drawing', phonetic: '/ˈdrɔː.ɪŋ/', meaning: 'vẽ (bằng bút chì, bút mực)', icon: '✏️', color: '#3b82f6', exampleEn: 'I like drawing.', exampleVi: 'Mình thích vẽ tranh.' },
      { id: 'u5-4', word: 'painting', phonetic: '/ˈpeɪn.tɪŋ/', meaning: 'vẽ (bằng cọ màu, màu nước)', icon: '🎨', color: '#8b5cf6', exampleEn: 'It\'s painting.', exampleVi: 'Đó là vẽ màu.' },
      { id: 'u5-5', word: 'running', phonetic: '/ˈrʌn.ɪŋ/', meaning: 'chạy bộ', icon: '🏃', color: '#10b981', exampleEn: 'I like running.', exampleVi: 'Mình thích chạy bộ.' },
      { id: 'u5-6', word: 'singing', phonetic: '/ˈsɪŋ.ɪŋ/', meaning: 'ca hát', icon: '🎤', color: '#06b6d4', exampleEn: 'It\'s singing.', exampleVi: 'Đó là ca hát.' },
      { id: 'u5-7', word: 'swimming', phonetic: '/ˈswɪm.ɪŋ/', meaning: 'bơi lội', icon: '🏊', color: '#0ea5e9', exampleEn: 'I like swimming.', exampleVi: 'Mình thích bơi lội.' },
      { id: 'u5-8', word: 'walking', phonetic: '/ˈwɔː.kɪŋ/', meaning: 'đi bộ', icon: '🚶', color: '#14b8a6', exampleEn: 'I like walking.', exampleVi: 'Mình thích đi bộ.' }
    ],
    patterns: [
      {
        id: 'u5-p1',
        pattern: 'What\'s your hobby? - It\'s [sở thích]. / I like [sở thích].',
        explanation: 'Hỏi và chia sẻ về sở thích cá nhân.',
        examples: [
          { speakerA: 'Mai', textA: 'What\'s your hobby, Ben?', speakerB: 'Ben', textB: 'It\'s singing.' },
          { speakerA: 'Nam', textA: 'What\'s your hobby?', speakerB: 'Lucy', textB: 'I like dancing.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'p - /p/',
        sampleWords: [
          { word: 'painting', sentence: 'I like painting.' }
        ]
      },
      {
        sound: 'r - /r/',
        sampleWords: [
          { word: 'running', sentence: 'I like running.' }
        ]
      }
    ],
    chant: {
      title: 'Painting and Running Chant (Trang 38)',
      lines: [
        'Painting. Painting. I like painting.',
        'Running. Running. I like running.',
        'Painting. Running. I like painting. I like running.'
      ]
    },
    quizQuestions: [
      {
        id: 'u5-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi sở thích của bạn mình, em dùng câu:',
        options: ['What\'s your hobby?', 'What\'s your name?', 'How old are you?', 'Is this your school?'],
        correctAnswer: 'What\'s your hobby?',
        explanation: '"What\'s your hobby?" nghĩa là "Sở thích của bạn là gì?".'
      },
      {
        id: 'u5-q2',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn sở thích được nhắc tới:',
        audioText: 'I like swimming.',
        options: ['Bơi lội (swimming)', 'Nấu ăn (cooking)', 'Ca hát (singing)', 'Chạy (running)'],
        correctAnswer: 'Bơi lội (swimming)',
        explanation: '"swimming" nghĩa là bơi lội.'
      },
      {
        id: 'u5-q3',
        type: 'fill-blank',
        prompt: 'What\'s your hobby? - I like _____ (nấu ăn).',
        options: ['cooking', 'drawing', 'dancing', 'walking'],
        correctAnswer: 'cooking',
        explanation: '"cooking" nghĩa là nấu ăn.'
      },
      {
        id: 'u5-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "ca hát":',
        scrambledWords: ['s', 'i', 'n', 'g', 'i', 'n', 'g'],
        correctAnswer: 'singing',
        explanation: 'Ca hát là "singing".'
      }
    ]
  },
  {
    id: 6,
    term: 1,
    unitNumber: 6,
    title: 'Unit 6: Our school',
    vietnameseTitle: 'Bài 6: Trường học của chúng mình',
    theme: 'Me and My School',
    color: 'emerald',
    icon: '🏫',
    page: 44,
    competences: [
      'Hỏi và trả lời xác nhận các phòng chức năng trong trường học',
      'Đưa ra lời rủ bạn cùng đi đến một nơi trong trường (Let\'s go to...)'
    ],
    vocabularies: [
      { id: 'u6-1', word: 'school', phonetic: '/skuːl/', meaning: 'trường học', icon: '🏫', color: '#10b981', exampleEn: 'Is this our school? - Yes, it is.', exampleVi: 'Đây có phải trường mình không? - Đúng rồi.' },
      { id: 'u6-2', word: 'classroom', phonetic: '/ˈklɑːs.ruːm/', meaning: 'phòng học, lớp học', icon: '🎒', color: '#3b82f6', exampleEn: 'Is that our classroom?', exampleVi: 'Kia có phải phòng học của mình không?' },
      { id: 'u6-3', word: 'art room', phonetic: '/ˈɑːt ˌruːm/', meaning: 'phòng mỹ thuật', icon: '🎨', color: '#f59e0b', exampleEn: 'Let\'s go to the art room.', exampleVi: 'Chúng mình cùng đến phòng mỹ thuật nhé.' },
      { id: 'u6-4', word: 'computer room', phonetic: '/kəmˈpjuː.tə ˌruːm/', meaning: 'phòng tin học', icon: '💻', color: '#6366f1', exampleEn: 'Let\'s go to the computer room.', exampleVi: 'Cùng đến phòng tin học nào.' },
      { id: 'u6-5', word: 'gym', phonetic: '/dʒɪm/', meaning: 'phòng thể chất, nhà tập thể dục', icon: '🏀', color: '#ef4444', exampleEn: 'Let\'s go to the gym.', exampleVi: 'Chúng mình cùng vào phòng thể chất nhé.' },
      { id: 'u6-6', word: 'library', phonetic: '/ˈlaɪ.brər.i/', meaning: 'thư viện', icon: '📚', color: '#8b5cf6', exampleEn: 'We like reading in the library.', exampleVi: 'Chúng mình thích đọc sách trong thư viện.' },
      { id: 'u6-7', word: 'music room', phonetic: '/ˈmjuː.zɪk ˌruːm/', meaning: 'phòng âm nhạc', icon: '🎵', color: '#ec4899', exampleEn: 'Let\'s go to the music room.', exampleVi: 'Cùng đến phòng âm nhạc nào.' },
      { id: 'u6-8', word: 'playground', phonetic: '/ˈpleɪ.ɡraʊnd/', meaning: 'sân chơi', icon: '🛝', color: '#14b8a6', exampleEn: 'Let\'s go to the playground.', exampleVi: 'Chúng mình ra sân chơi nhé.' }
    ],
    patterns: [
      {
        id: 'u6-p1',
        pattern: 'Is this / that our [địa điểm]? - Yes, it is. / No, it isn\'t.',
        explanation: 'Hỏi xác nhận xem đây/kia có phải địa điểm của trường mình không.',
        examples: [
          { speakerA: 'Teacher', textA: 'Is this our school?', speakerB: 'Pupils', textB: 'Yes, it is. It\'s our school.' },
          { speakerA: 'Ben', textA: 'Is that our classroom?', speakerB: 'Mai', textB: 'No, it isn\'t.' }
        ]
      },
      {
        id: 'u6-p2',
        pattern: 'Let\'s go to the [địa điểm]. - OK, let\'s go.',
        explanation: 'Rủ bạn cùng đi đến một phòng học hoặc sân chơi.',
        examples: [
          { speakerA: 'Lucy', textA: 'Let\'s go to the art room.', speakerB: 'Ben', textB: 'OK, let\'s go.' },
          { speakerA: 'Nam', textA: 'Let\'s go to the music room.', speakerB: 'Minh', textB: 'OK, let\'s go. I like singing.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'pl - /pl/',
        sampleWords: [
          { word: 'playground', sentence: 'Let\'s go to the playground.' }
        ]
      },
      {
        sound: 'cl - /kl/',
        sampleWords: [
          { word: 'classroom', sentence: 'Is that your classroom?' }
        ]
      }
    ],
    chant: {
      title: 'Our School Chant (Trang 48)',
      lines: [
        'Classroom, classroom. Is that your classroom? Yes, it is. Yes, it is.',
        'Let\'s go to your classroom.',
        'Playground, playground. Is that our playground? Yes, it is. Yes, it is.',
        'Let\'s go to our playground.'
      ]
    },
    quizQuestions: [
      {
        id: 'u6-q1',
        type: 'multiple-choice',
        prompt: 'Khi muốn rủ bạn "Cùng đến thư viện nhé", em nói:',
        options: ['Let\'s go to the library.', 'Is this the gym?', 'I have a book.', 'What\'s this?'],
        correctAnswer: 'Let\'s go to the library.',
        explanation: '"Let\'s go to the library." có nghĩa là "Cùng đến thư viện nào".'
      },
      {
        id: 'u6-q2',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn phòng học được nói đến:',
        audioText: 'Let\'s go to the music room.',
        options: ['Phòng âm nhạc', 'Phòng tin học', 'Phòng mỹ thuật', 'Thư viện'],
        correctAnswer: 'Phòng âm nhạc',
        explanation: '"music room" là phòng âm nhạc.'
      },
      {
        id: 'u6-q3',
        type: 'fill-blank',
        prompt: 'Điền từ: "Let\'s go to the art room." - "OK, let\'s _____."',
        options: ['go', 'is', 'have', 'come'],
        correctAnswer: 'go',
        explanation: 'Đáp lại lời rủ là: "OK, let\'s go."'
      },
      {
        id: 'u6-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "sân chơi":',
        scrambledWords: ['p', 'l', 'a', 'y', 'g', 'r', 'o', 'u', 'n', 'd'],
        correctAnswer: 'playground',
        explanation: 'Sân chơi là "playground".'
      }
    ]
  },
  {
    id: 7,
    term: 1,
    unitNumber: 7,
    title: 'Unit 7: Classroom instructions',
    vietnameseTitle: 'Bài 7: Hiệu lệnh trong lớp học',
    theme: 'Me and My School',
    color: 'orange',
    icon: '🗣️',
    page: 50,
    competences: [
      'Đưa ra và thực hiện các hiệu lệnh trong lớp học (đứng lên, ngồi xuống, mở sách, gấp sách)',
      'Xin phép giáo viên trong lớp (May I come in / go out / speak...?)'
    ],
    vocabularies: [
      { id: 'u7-1', word: 'stand up', phonetic: '/ˌstænd ˈʌp/', meaning: 'đứng lên', icon: '🧍', color: '#f97316', exampleEn: 'Stand up, please!', exampleVi: 'Xin mời cả lớp đứng lên!' },
      { id: 'u7-2', word: 'sit down', phonetic: '/ˌsɪt ˈdaʊn/', meaning: 'ngồi xuống', icon: '🪑', color: '#3b82f6', exampleEn: 'Sit down, please!', exampleVi: 'Xin mời ngồi xuống!' },
      { id: 'u7-3', word: 'open your book', phonetic: '/ˈəʊ.pən jɔːr bʊk/', meaning: 'mở sách ra', icon: '📖', color: '#10b981', exampleEn: 'Open your books, please!', exampleVi: 'Cả lớp mở sách ra nào!' },
      { id: 'u7-4', word: 'close your book', phonetic: '/kləʊz jɔːr bʊk/', meaning: 'gấp sách lại', icon: '📕', color: '#ef4444', exampleEn: 'Close your book, please!', exampleVi: 'Xin mời gấp sách lại!' },
      { id: 'u7-5', word: 'come in', phonetic: '/kʌm ɪn/', meaning: 'đi vào lớp', icon: '🚪', color: '#8b5cf6', exampleEn: 'May I come in? - Yes, you can.', exampleVi: 'Em xin phép vào lớp ạ? - Được, em vào đi.' },
      { id: 'u7-6', word: 'go out', phonetic: '/ɡəʊ aʊt/', meaning: 'ra ngoài', icon: '🏃‍♂️', color: '#ec4899', exampleEn: 'May I go out? - No, you can\'t.', exampleVi: 'Em xin phép ra ngoài ạ? - Không được em nhé.' },
      { id: 'u7-7', word: 'speak English', phonetic: '/spiːk ˈɪŋ.ɡlɪʃ/', meaning: 'nói tiếng Anh', icon: '🗣️', color: '#06b6d4', exampleEn: 'Speak English, please!', exampleVi: 'Xin hãy nói tiếng Anh nhé!' }
    ],
    patterns: [
      {
        id: 'u7-p1',
        pattern: '[Mệnh lệnh], please!',
        explanation: 'Hiệu lệnh lịch sự trong lớp học.',
        examples: [
          { speakerA: 'Ms Hoa', textA: 'Open your books, please!', speakerB: 'Pupils', textB: '(Cả lớp cùng mở sách)' },
          { speakerA: 'Ms Hoa', textA: 'Sit down, please!', speakerB: 'Pupils', textB: '(Cả lớp cùng ngồi xuống)' }
        ]
      },
      {
        id: 'u7-p2',
        pattern: 'May I [hành động]? - Yes, you can. / No, you can\'t.',
        explanation: 'Xin phép giáo viên làm điều gì đó.',
        examples: [
          { speakerA: 'Minh', textA: 'May I come in, Ms Hoa?', speakerB: 'Ms Hoa', textB: 'Yes, you can.' },
          { speakerA: 'Ben', textA: 'May I go out?', speakerB: 'Teacher', textB: 'No, you can\'t.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'sp - /sp/',
        sampleWords: [
          { word: 'speak', sentence: 'Speak English, please!' }
        ]
      },
      {
        sound: 'st - /st/',
        sampleWords: [
          { word: 'stand', sentence: 'May I stand up?' }
        ]
      }
    ],
    chant: {
      title: 'Classroom Instructions Chant (Trang 54)',
      lines: [
        'Stand up! Stand up! May I stand up? Yes, you can. Yes, you can.',
        'Speak English! Speak English! May I speak English? Yes, you can. Yes, you can.'
      ]
    },
    quizQuestions: [
      {
        id: 'u7-q1',
        type: 'multiple-choice',
        prompt: 'Khi muốn xin phép cô giáo cho vào lớp, em nói câu nào?',
        options: ['May I come in?', 'May I go out?', 'Sit down, please!', 'Open your book, please!'],
        correctAnswer: 'May I come in?',
        explanation: '"May I come in?" nghĩa là "Em xin phép vào lớp ạ?".'
      },
      {
        id: 'u7-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: "May I go out?" - "No, you _____."',
        options: ['can\'t', 'can', 'are', 'do'],
        correctAnswer: 'can\'t',
        explanation: 'Trả lời từ chối xin phép: "No, you can\'t."'
      },
      {
        id: 'u7-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe hiệu lệnh và chọn ý nghĩa đúng:',
        audioText: 'Close your book, please!',
        options: ['Gấp sách lại', 'Mở sách ra', 'Đứng lên', 'Ngồi xuống'],
        correctAnswer: 'Gấp sách lại',
        explanation: '"Close your book" là gấp sách lại.'
      },
      {
        id: 'u7-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp câu: English / Speak / please / , / !',
        scrambledWords: ['Speak', 'English', ',', 'please', '!'],
        correctAnswer: 'Speak English , please !',
        explanation: 'Mệnh lệnh nói tiếng Anh: Speak English, please!'
      }
    ]
  },
  {
    id: 8,
    term: 1,
    unitNumber: 8,
    title: 'Unit 8: My school things',
    vietnameseTitle: 'Bài 8: Đồ dùng học tập của mình',
    theme: 'Me and My School',
    color: 'cyan',
    icon: '✏️',
    page: 56,
    competences: [
      'Nói về đồ dùng học tập mình có (I have a...)',
      'Hỏi xem bạn có đồ dùng học tập đó không (Do you have a...?)'
    ],
    vocabularies: [
      { id: 'u8-1', word: 'pen', phonetic: '/pen/', meaning: 'bút mực', icon: '🖊️', color: '#06b6d4', exampleEn: 'I have a pen.', exampleVi: 'Mình có một chiếc bút mực.' },
      { id: 'u8-2', word: 'pencil', phonetic: '/ˈpen.səl/', meaning: 'bút chì', icon: '✏️', color: '#f59e0b', exampleEn: 'Do you have a pencil?', exampleVi: 'Bạn có bút chì không?' },
      { id: 'u8-3', word: 'ruler', phonetic: '/ˈruː.lər/', meaning: 'thước kẻ', icon: '📏', color: '#10b981', exampleEn: 'I have a ruler, too.', exampleVi: 'Mình cũng có một cây thước kẻ.' },
      { id: 'u8-4', word: 'book', phonetic: '/bʊk/', meaning: 'quyển sách', icon: '📖', color: '#3b82f6', exampleEn: 'This is an English book.', exampleVi: 'Đây là quyển sách tiếng Anh.' },
      { id: 'u8-5', word: 'school bag', phonetic: '/ˈskuːl bæɡ/', meaning: 'cặp sách, ba lô', icon: '🎒', color: '#8b5cf6', exampleEn: 'I have a school bag.', exampleVi: 'Mình có một chiếc cặp sách.' },
      { id: 'u8-6', word: 'eraser', phonetic: '/ɪˈreɪ.zər/', meaning: 'cục tẩy, gôm', icon: '🧼', color: '#ec4899', exampleEn: 'Do you have an eraser?', exampleVi: 'Bạn có cục tẩy không?' },
      { id: 'u8-7', word: 'pencil case', phonetic: '/ˈpen.səl keɪs/', meaning: 'hộp bút', icon: '👝', color: '#f97316', exampleEn: 'I have a pencil case.', exampleVi: 'Mình có một chiếc hộp bút.' },
      { id: 'u8-8', word: 'notebook', phonetic: '/ˈnəʊt.bʊk/', meaning: 'vở viết', icon: '📓', color: '#6366f1', exampleEn: 'I have a notebook.', exampleVi: 'Mình có một quyển vở.' }
    ],
    patterns: [
      {
        id: 'u8-p1',
        pattern: 'I have a / an [đồ vật].',
        explanation: 'Nói về đồ dùng học tập mà mình sở hữu.',
        examples: [
          { speakerA: 'Linh', textA: 'Look, Ben. I have a pen.', speakerB: 'Ben', textB: 'It\'s nice. I like it.' },
          { speakerA: 'Linh', textA: 'I have a ruler, too.', speakerB: 'Ben', textB: 'It\'s nice.' }
        ]
      },
      {
        id: 'u8-p2',
        pattern: 'Do you have a / an [đồ vật]? - Yes, I do. / No, I don\'t.',
        explanation: 'Hỏi xem bạn có đồ vật đó không.',
        examples: [
          { speakerA: 'Mary', textA: 'Do you have a pen?', speakerB: 'Nam', textB: 'Yes, I do.' },
          { speakerA: 'Mary', textA: 'Do you have a ruler?', speakerB: 'Nam', textB: 'No, I don\'t.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'oo - /ʊ/',
        sampleWords: [
          { word: 'book', sentence: 'I have a book.' }
        ]
      },
      {
        sound: 'a - /eɪ/',
        sampleWords: [
          { word: 'eraser', sentence: 'Do you have an eraser?' }
        ]
      }
    ],
    chant: {
      title: 'School Things Chant (Trang 60)',
      lines: [
        'Book, book, book. I have a book.',
        'Do you have a book? Yes, I do. Yes, I do.',
        'Eraser, eraser, eraser. I have an eraser.',
        'Do you have an eraser? No, I don\'t. No, I don\'t.'
      ]
    },
    quizQuestions: [
      {
        id: 'u8-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi bạn: "Bạn có thước kẻ không?", em hỏi thế nào?',
        options: ['Do you have a ruler?', 'I have a ruler.', 'What colour is the ruler?', 'Is that your ruler?'],
        correctAnswer: 'Do you have a ruler?',
        explanation: 'Cấu trúc hỏi: "Do you have a ruler?".'
      },
      {
        id: 'u8-q2',
        type: 'fill-blank',
        prompt: 'Do you have an eraser? - No, I _____.',
        options: ['don\'t', 'do', 'not', 'can\'t'],
        correctAnswer: 'don\'t',
        explanation: 'Trả lời phủ định câu hỏi Do you have: "No, I don\'t."'
      },
      {
        id: 'u8-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn đồ vật chính xác:',
        audioText: 'I have a pencil case.',
        options: ['Hộp bút', 'Thước kẻ', 'Cục tẩy', 'Cặp sách'],
        correctAnswer: 'Hộp bút',
        explanation: '"pencil case" là hộp bút.'
      },
      {
        id: 'u8-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "cục tẩy":',
        scrambledWords: ['e', 'r', 'a', 's', 'e', 'r'],
        correctAnswer: 'eraser',
        explanation: 'Cục tẩy là "eraser".'
      }
    ]
  },
  {
    id: 9,
    term: 1,
    unitNumber: 9,
    title: 'Unit 9: Colours',
    vietnameseTitle: 'Bài 9: Màu sắc',
    theme: 'Me and My School',
    color: 'pink',
    icon: '🎨',
    page: 62,
    competences: [
      'Hỏi và trả lời về màu sắc của một đồ vật (What colour is it? - It\'s...)',
      'Hỏi và trả lời về màu sắc của nhiều đồ vật (What colour are they? - They\'re...)'
    ],
    vocabularies: [
      { id: 'u9-1', word: 'blue', phonetic: '/bluː/', meaning: 'màu xanh da trời', icon: '🔵', color: '#3b82f6', exampleEn: 'It\'s blue.', exampleVi: 'Nó màu xanh da trời.' },
      { id: 'u9-2', word: 'brown', phonetic: '/braʊn/', meaning: 'màu nâu', icon: '🟤', color: '#92400e', exampleEn: 'The pencil cases are brown.', exampleVi: 'Những chiếc hộp bút màu nâu.' },
      { id: 'u9-3', word: 'red', phonetic: '/red/', meaning: 'màu đỏ', icon: '🔴', color: '#ef4444', exampleEn: 'I have a red pen.', exampleVi: 'Mình có một chiếc bút màu đỏ.' },
      { id: 'u9-4', word: 'yellow', phonetic: '/ˈjel.əʊ/', meaning: 'màu vàng', icon: '🟡', color: '#eab308', exampleEn: 'It\'s yellow.', exampleVi: 'Nó màu vàng.' },
      { id: 'u9-5', word: 'orange', phonetic: '/ˈɒr.ɪndʒ/', meaning: 'màu cam', icon: '🟠', color: '#f97316', exampleEn: 'They\'re orange.', exampleVi: 'Chúng có màu cam.' },
      { id: 'u9-6', word: 'green', phonetic: '/ɡriːn/', meaning: 'màu xanh lá cây', icon: '🟢', color: '#10b981', exampleEn: 'They\'re green.', exampleVi: 'Chúng có màu xanh lá cây.' },
      { id: 'u9-7', word: 'white', phonetic: '/waɪt/', meaning: 'màu trắng', icon: '⚪', color: '#64748b', exampleEn: 'It\'s white.', exampleVi: 'Nó màu trắng.' },
      { id: 'u9-8', word: 'black', phonetic: '/blæk/', meaning: 'màu đen', icon: '⚫', color: '#1e293b', exampleEn: 'My pen is black.', exampleVi: 'Bút của mình màu đen.' }
    ],
    patterns: [
      {
        id: 'u9-p1',
        pattern: 'What colour is it? - It\'s [màu sắc].',
        explanation: 'Hỏi và trả lời màu của 1 đồ vật (số ít).',
        examples: [
          { speakerA: 'Mary', textA: 'What colour is it?', speakerB: 'Nam', textB: 'It\'s blue.' }
        ]
      },
      {
        id: 'u9-p2',
        pattern: 'What colour are they? - They\'re [màu sắc].',
        explanation: 'Hỏi và trả lời màu của từ 2 đồ vật trở lên (số nhiều).',
        examples: [
          { speakerA: 'Lucy', textA: 'What colour are they?', speakerB: 'Minh', textB: 'They\'re green.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'bl - /bl/',
        sampleWords: [
          { word: 'blue', sentence: 'My school bag is blue.' }
        ]
      },
      {
        sound: 'br - /br/',
        sampleWords: [
          { word: 'brown', sentence: 'The pencil cases are brown.' }
        ]
      }
    ],
    chant: {
      title: 'Colours Chant (Trang 66)',
      lines: [
        'What colour is it? It\'s blue.',
        'What colour is it? It\'s brown.',
        'What colour are they? They\'re blue.',
        'What colour are they? They\'re brown.'
      ]
    },
    quizQuestions: [
      {
        id: 'u9-q1',
        type: 'multiple-choice',
        prompt: 'Khi hỏi màu sắc của một cây bút (số ít), em hỏi câu nào?',
        options: ['What colour is it?', 'What colour are they?', 'What is your hobby?', 'Do you have a pen?'],
        correctAnswer: 'What colour is it?',
        explanation: 'Hỏi màu 1 đồ vật dùng "What colour is it?".'
      },
      {
        id: 'u9-q2',
        type: 'multiple-choice',
        prompt: 'Khi hỏi màu sắc của các cây bút chì (số nhiều), câu trả lời bắt đầu bằng:',
        options: ['They\'re...', 'It\'s...', 'I have...', 'This is...'],
        correctAnswer: 'They\'re...',
        explanation: 'Số nhiều dùng "They\'re + màu sắc".'
      },
      {
        id: 'u9-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn màu được phát âm:',
        audioText: 'yellow',
        options: ['Màu vàng', 'Màu xanh da trời', 'Màu đỏ', 'Màu cam'],
        correctAnswer: 'Màu vàng',
        explanation: '"yellow" là màu vàng.'
      },
      {
        id: 'u9-q4',
        type: 'fill-blank',
        prompt: 'Red + Blue = _____ (Màu tím trong bài pha màu)',
        options: ['purple', 'green', 'orange', 'black'],
        correctAnswer: 'purple',
        explanation: 'Màu đỏ pha màu xanh ra màu tím (purple).'
      }
    ]
  },
  {
    id: 10,
    term: 1,
    unitNumber: 10,
    title: 'Unit 10: Break time activities',
    vietnameseTitle: 'Bài 10: Hoạt động giờ ra chơi',
    theme: 'Me and My School',
    color: 'violet',
    icon: '⚽',
    page: 68,
    competences: [
      'Nói về các hoạt động thể thao, trò chơi mình làm trong giờ ra chơi',
      'Hỏi và trả lời: What do you do at break time? - I...'
    ],
    vocabularies: [
      { id: 'u10-1', word: 'play chess', phonetic: '/pleɪ tʃes/', meaning: 'chơi cờ vua', icon: '♟️', color: '#6366f1', exampleEn: 'I play chess at break time.', exampleVi: 'Mình chơi cờ vua vào giờ ra chơi.' },
      { id: 'u10-2', word: 'play football', phonetic: '/pleɪ ˈfʊt.bɔːl/', meaning: 'chơi bóng đá', icon: '⚽', color: '#10b981', exampleEn: 'I play football.', exampleVi: 'Mình chơi đá bóng.' },
      { id: 'u10-3', word: 'play basketball', phonetic: '/pleɪ ˈbɑː.skɪt.bɔːl/', meaning: 'chơi bóng rổ', icon: '🏀', color: '#f97316', exampleEn: 'I play basketball at break time.', exampleVi: 'Mình chơi bóng rổ vào giờ giải lao.' },
      { id: 'u10-4', word: 'play badminton', phonetic: '/pleɪ ˈbæd.mɪn.tən/', meaning: 'chơi cầu lông', icon: '🏸', color: '#06b6d4', exampleEn: 'Let\'s play badminton.', exampleVi: 'Cùng chơi cầu lông nhé.' },
      { id: 'u10-5', word: 'play volleyball', phonetic: '/pleɪ ˈvɒl.i.bɔːl/', meaning: 'chơi bóng chuyền', icon: '🏐', color: '#eab308', exampleEn: 'I play volleyball.', exampleVi: 'Mình chơi bóng chuyền.' },
      { id: 'u10-6', word: 'play table tennis', phonetic: '/pleɪ ˈteɪ.bəl ˌten.ɪs/', meaning: 'chơi bóng bàn', icon: '🏓', color: '#ec4899', exampleEn: 'I play table tennis.', exampleVi: 'Mình chơi bóng bàn.' },
      { id: 'u10-7', word: 'do word puzzles', phonetic: '/duː wɜːd ˈpʌz.əlz/', meaning: 'chơi giải ô chữ', icon: '🧩', color: '#8b5cf6', exampleEn: 'I do word puzzles.', exampleVi: 'Mình giải câu đố chữ.' },
      { id: 'u10-8', word: 'chat with my friends', phonetic: '/tʃæt wɪð maɪ frendz/', meaning: 'tán gẫu với bạn bè', icon: '💬', color: '#3b82f6', exampleEn: 'I chat with my friends.', exampleVi: 'Mình trò chuyện cùng bạn bè.' }
    ],
    patterns: [
      {
        id: 'u10-p1',
        pattern: 'I [hoạt động] at break time.',
        explanation: 'Kể về hoạt động em làm vào giờ ra chơi.',
        examples: [
          { speakerA: 'Ben', textA: 'It\'s break time. Let\'s play chess.', speakerB: 'Nam', textB: 'OK!' },
          { speakerA: 'Minh', textA: 'I play volleyball at break time.', speakerB: 'Ben', textB: 'I play basketball.' }
        ]
      },
      {
        id: 'u10-p2',
        pattern: 'What do you do at break time? - I [hoạt động].',
        explanation: 'Hỏi và trả lời xem bạn làm gì vào giờ ra chơi.',
        examples: [
          { speakerA: 'Mai', textA: 'What do you do at break time?', speakerB: 'Ben', textB: 'I play football.' },
          { speakerA: 'Lucy', textA: 'What do you do at break time?', speakerB: 'Mai', textB: 'I play badminton.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'f - /f/',
        sampleWords: [
          { word: 'football', sentence: 'I play football at break time.' }
        ]
      },
      {
        sound: 'v - /v/',
        sampleWords: [
          { word: 'volleyball', sentence: 'I play volleyball at break time.' }
        ]
      }
    ],
    chant: {
      title: 'Break Time Chant (Trang 72)',
      lines: [
        'What do you do at break time?',
        'Football. Football. I play football. I play football.',
        'What do you do at break time?',
        'Volleyball. Volleyball. I play volleyball. I play volleyball.'
      ]
    },
    quizQuestions: [
      {
        id: 'u10-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi bạn làm gì vào giờ ra chơi, em hỏi:',
        options: ['What do you do at break time?', 'What\'s your hobby?', 'What colour is it?', 'Do you have a ball?'],
        correctAnswer: 'What do you do at break time?',
        explanation: '"What do you do at break time?" là câu hỏi chuẩn trong sách.'
      },
      {
        id: 'u10-q2',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn môn thể thao:',
        audioText: 'I play basketball at break time.',
        options: ['Bóng rổ', 'Bóng đá', 'Cầu lông', 'Bóng bàn'],
        correctAnswer: 'Bóng rổ',
        explanation: '"basketball" là môn bóng rổ.'
      },
      {
        id: 'u10-q3',
        type: 'fill-blank',
        prompt: 'Điền từ: What do you do at break time? - I play _____ (cờ vua).',
        options: ['chess', 'football', 'badminton', 'tennis'],
        correctAnswer: 'chess',
        explanation: 'Cờ vua là "chess".'
      },
      {
        id: 'u10-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành môn "cầu lông":',
        scrambledWords: ['b', 'a', 'd', 'm', 'i', 'n', 't', 'o', 'n'],
        correctAnswer: 'badminton',
        explanation: 'Môn cầu lông là "badminton".'
      }
    ]
  },

  // --- TẬP 2 (TERM 2) ---
  {
    id: 11,
    term: 2,
    unitNumber: 11,
    title: 'Unit 11: My family',
    vietnameseTitle: 'Bài 11: Gia đình của mình',
    theme: 'Me and My Family',
    color: 'rose',
    icon: '👨‍👩‍👧‍👦',
    page: 6,
    competences: [
      'Hỏi và giới thiệu các thành viên trong gia đình (Who\'s this / that? - It\'s my...)',
      'Hỏi và trả lời về tuổi của người thân (How old is he / she? He\'s / She\'s... tuổi từ 11 đến 20)'
    ],
    vocabularies: [
      { id: 'u11-1', word: 'father', phonetic: '/ˈfɑː.ðər/', meaning: 'bố, ba, cha', icon: '👨', color: '#3b82f6', exampleEn: 'This is my father.', exampleVi: 'Đây là bố của mình.' },
      { id: 'u11-2', word: 'mother', phonetic: '/ˈmʌð.ər/', meaning: 'mẹ, má', icon: '👩', color: '#ec4899', exampleEn: 'That\'s my mother.', exampleVi: 'Kia là mẹ của mình.' },
      { id: 'u11-3', word: 'brother', phonetic: '/ˈbrʌð.ər/', meaning: 'anh trai, em trai', icon: '👦', color: '#06b6d4', exampleEn: 'It\'s my brother.', exampleVi: 'Đó là anh trai của mình.' },
      { id: 'u11-4', word: 'sister', phonetic: '/ˈsɪs.tər/', meaning: 'chị gái, em gái', icon: '👧', color: '#f59e0b', exampleEn: 'It\'s my sister.', exampleVi: 'Đó là em gái của mình.' },
      { id: 'u11-5', word: 'eleven', phonetic: '/ɪˈlev.ən/', meaning: 'số mười một (11)', icon: '1️⃣1️⃣', color: '#10b981', exampleEn: 'She\'s eleven years old.', exampleVi: 'Chị ấy 11 tuổi.' },
      { id: 'u11-6', word: 'twelve', phonetic: '/twelv/', meaning: 'số mười hai (12)', icon: '1️⃣2️⃣', color: '#6366f1', exampleEn: 'He\'s twelve years old.', exampleVi: 'Anh ấy 12 tuổi.' },
      { id: 'u11-7', word: 'thirteen', phonetic: '/ˌθɜːˈtiːn/', meaning: 'số mười ba (13)', icon: '1️⃣3️⃣', color: '#8b5cf6', exampleEn: 'She\'s thirteen years old.', exampleVi: 'Chị ấy 13 tuổi.' },
      { id: 'u11-8', word: 'fourteen', phonetic: '/ˌfɔːˈtiːn/', meaning: 'số mười bốn (14)', icon: '1️⃣4️⃣', color: '#14b8a6', exampleEn: 'He\'s fourteen years old.', exampleVi: 'Anh ấy 14 tuổi.' },
      { id: 'u11-9', word: 'fifteen', phonetic: '/ˌfɪfˈtiːn/', meaning: 'số mười lăm (15)', icon: '1️⃣5️⃣', color: '#f97316', exampleEn: 'She\'s fifteen years old.', exampleVi: 'Chị ấy 15 tuổi.' },
      { id: 'u11-10', word: 'twenty', phonetic: '/ˈtwen.ti/', meaning: 'số hai mươi (20)', icon: '2️⃣0️⃣', color: '#ef4444', exampleEn: 'He\'s twenty years old.', exampleVi: 'Anh ấy 20 tuổi.' }
    ],
    patterns: [
      {
        id: 'u11-p1',
        pattern: 'Who\'s this / that? - It\'s my [thành viên].',
        explanation: 'Hỏi xem đây/kia là ai trong gia đình.',
        examples: [
          { speakerA: 'Mary', textA: 'Who\'s this?', speakerB: 'Lucy', textB: 'It\'s my sister.' },
          { speakerA: 'Nam', textA: 'Who\'s that?', speakerB: 'Minh', textB: 'It\'s my brother.' }
        ]
      },
      {
        id: 'u11-p2',
        pattern: 'How old is he / she? - He\'s / She\'s [số] years old.',
        explanation: 'Hỏi và trả lời tuổi của anh ấy (he) hoặc cô ấy (she).',
        examples: [
          { speakerA: 'Ben', textA: 'How old is your brother?', speakerB: 'Nam', textB: 'He\'s twenty years old.' },
          { speakerA: 'Lucy', textA: 'How old is she?', speakerB: 'Mary', textB: 'She\'s thirteen years old.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'o - /əʊ/',
        sampleWords: [
          { word: 'old', sentence: 'How old is your brother?' }
        ]
      },
      {
        sound: 'ure - /ʃɔːr/',
        sampleWords: [
          { word: 'sure', sentence: 'Are you sure?' }
        ]
      }
    ],
    chant: {
      title: 'Family Age Chant (Trang 10 - Tập 2)',
      lines: [
        'How old is your brother? He\'s sixteen. He\'s sixteen.',
        'Are you sure? Are you sure?',
        'How old is your sister? She\'s fifteen. She\'s fifteen.',
        'Are you sure? Are you sure?'
      ]
    },
    quizQuestions: [
      {
        id: 'u11-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi "Kia là ai vậy?", em dùng câu nào?',
        options: ['Who\'s that?', 'What\'s that?', 'How old are you?', 'Where is he?'],
        correctAnswer: 'Who\'s that?',
        explanation: '"Who\'s that?" có nghĩa là "Kia là ai?".'
      },
      {
        id: 'u11-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: "How old is _____ sister?" - "She\'s twelve years old."',
        options: ['your', 'you', 'he', 'name'],
        correctAnswer: 'your',
        explanation: '"your sister" nghĩa là chị/em gái của bạn.'
      },
      {
        id: 'u11-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe số tuổi và chọn phương án đúng:',
        audioText: 'He is twenty years old.',
        options: ['12 tuổi', '15 tuổi', '20 tuổi', '13 tuổi'],
        correctAnswer: '20 tuổi',
        explanation: '"twenty" là số 20.'
      },
      {
        id: 'u11-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "anh trai/em trai":',
        scrambledWords: ['b', 'r', 'o', 't', 'h', 'e', 'r'],
        correctAnswer: 'brother',
        explanation: 'Anh/em trai là "brother".'
      }
    ]
  },
  {
    id: 12,
    term: 2,
    unitNumber: 12,
    title: 'Unit 12: Jobs',
    vietnameseTitle: 'Bài 12: Nghề nghiệp',
    theme: 'Me and My Family',
    color: 'amber',
    icon: '👨‍⚕️',
    page: 12,
    competences: [
      'Hỏi và trả lời về nghề nghiệp của một người (What\'s his / her job?)',
      'Hỏi xác nhận: Is he / she a doctor / teacher...?'
    ],
    vocabularies: [
      { id: 'u12-1', word: 'doctor', phonetic: '/ˈdɒk.tər/', meaning: 'bác sĩ', icon: '🩺', color: '#06b6d4', exampleEn: 'She\'s a doctor.', exampleVi: 'Cô ấy là một bác sĩ.' },
      { id: 'u12-2', word: 'teacher', phonetic: '/ˈtiː.tʃər/', meaning: 'giáo viên', icon: '👩‍🏫', color: '#3b82f6', exampleEn: 'He\'s a teacher.', exampleVi: 'Thầy ấy là giáo viên.' },
      { id: 'u12-3', word: 'driver', phonetic: '/ˈdraɪ.vər/', meaning: 'tài xế, lái xe', icon: '🚌', color: '#f59e0b', exampleEn: 'My father is a driver.', exampleVi: 'Bố mình là tài xế lái xe.' },
      { id: 'u12-4', word: 'worker', phonetic: '/ˈwɜː.kər/', meaning: 'công nhân', icon: '👷', color: '#f97316', exampleEn: 'He\'s a worker.', exampleVi: 'Chú ấy là công nhân.' },
      { id: 'u12-5', word: 'cook', phonetic: '/kʊk/', meaning: 'đầu bếp', icon: '👨‍🍳', color: '#eab308', exampleEn: 'Is she a cook? - Yes, she is.', exampleVi: 'Cô ấy có phải đầu bếp không? - Đúng vậy.' },
      { id: 'u12-6', word: 'farmer', phonetic: '/ˈfɑː.mər/', meaning: 'người nông dân', icon: '🌾', color: '#10b981', exampleEn: 'My grandfather is a farmer.', exampleVi: 'Ông mình là nông dân.' },
      { id: 'u12-7', word: 'nurse', phonetic: '/nɜːs/', meaning: 'y tá', icon: '💉', color: '#ec4899', exampleEn: 'She\'s a nurse.', exampleVi: 'Cô ấy là một y tá.' },
      { id: 'u12-8', word: 'singer', phonetic: '/ˈsɪŋ.ər/', meaning: 'ca sĩ', icon: '🎤', color: '#8b5cf6', exampleEn: 'He\'s a singer.', exampleVi: 'Anh ấy là ca sĩ.' }
    ],
    patterns: [
      {
        id: 'u12-p1',
        pattern: 'What\'s his / her job? - He\'s / She\'s a [nghề nghiệp].',
        explanation: 'Hỏi về nghề nghiệp của anh ấy (his) hoặc cô ấy (her).',
        examples: [
          { speakerA: 'Lucy', textA: 'This is my mother. What\'s her job?', speakerB: 'Ben', textB: 'She\'s a doctor.' },
          { speakerA: 'Nam', textA: 'What\'s his job?', speakerB: 'Minh', textB: 'He\'s a teacher.' }
        ]
      },
      {
        id: 'u12-p2',
        pattern: 'Is he / she a [nghề]? - Yes, he/she is. / No, he/she isn\'t. He\'s/She\'s a...',
        explanation: 'Hỏi xác nhận nghề nghiệp.',
        examples: [
          { speakerA: 'Ben', textA: 'Is she a worker?', speakerB: 'Mai', textB: 'Yes, she is.' },
          { speakerA: 'Nam', textA: 'Is he a doctor?', speakerB: 'Minh', textB: 'No, he isn\'t. He\'s a nurse.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'er - /ər/',
        sampleWords: [
          { word: 'mother', sentence: 'My mother is a teacher.' },
          { word: 'teacher', sentence: 'He\'s a teacher.' }
        ]
      },
      {
        sound: 'or - /ər/',
        sampleWords: [
          { word: 'doctor', sentence: 'My father is a doctor.' }
        ]
      }
    ],
    chant: {
      title: 'Jobs Chant (Trang 16 - Tập 2)',
      lines: [
        'Mother, mother. That\'s my mother.',
        'Doctor, doctor. My mother is a doctor.',
        'Father, father. That\'s my father.',
        'Farmer, farmer. My father is a farmer.'
      ]
    },
    quizQuestions: [
      {
        id: 'u12-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi nghề nghiệp của một người phụ nữ trong ảnh, em dùng câu:',
        options: ['What\'s her job?', 'What\'s his job?', 'How old is she?', 'Who\'s he?'],
        correctAnswer: 'What\'s her job?',
        explanation: 'Phái nữ dùng "her": "What\'s her job?".'
      },
      {
        id: 'u12-q2',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn nghề nghiệp được phát âm:',
        audioText: 'She is a nurse.',
        options: ['Y tá (nurse)', 'Bác sĩ (doctor)', 'Giáo viên (teacher)', 'Đầu bếp (cook)'],
        correctAnswer: 'Y tá (nurse)',
        explanation: '"nurse" nghĩa là y tá.'
      },
      {
        id: 'u12-q3',
        type: 'fill-blank',
        prompt: 'Điền từ: "Is he a doctor?" - "No, he _____."',
        options: ['isn\'t', 'is', 'not', 'can\'t'],
        correctAnswer: 'isn\'t',
        explanation: 'Trả lời phủ định câu hỏi Is he...: "No, he isn\'t."'
      },
      {
        id: 'u12-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "nông dân":',
        scrambledWords: ['f', 'a', 'r', 'm', 'e', 'r'],
        correctAnswer: 'farmer',
        explanation: 'Nông dân là "farmer".'
      }
    ]
  },
  {
    id: 13,
    term: 2,
    unitNumber: 13,
    title: 'Unit 13: My house',
    vietnameseTitle: 'Bài 13: Ngôi nhà của mình',
    theme: 'Me and My Family',
    color: 'blue',
    icon: '🏡',
    page: 18,
    competences: [
      'Hỏi vị trí của một căn phòng trong nhà (Where\'s the...? - It\'s here / there)',
      'Hỏi vị trí của các đồ vật (Where are the chairs? - They\'re in the kitchen / on the table)'
    ],
    vocabularies: [
      { id: 'u13-1', word: 'living room', phonetic: '/ˈlɪv.ɪŋ ˌruːm/', meaning: 'phòng khách', icon: '🛋️', color: '#3b82f6', exampleEn: 'This is the living room.', exampleVi: 'Đây là phòng khách.' },
      { id: 'u13-2', word: 'bedroom', phonetic: '/ˈbed.ruːm/', meaning: 'phòng ngủ', icon: '🛏️', color: '#8b5cf6', exampleEn: 'Where\'s your bedroom? - It\'s here.', exampleVi: 'Phòng ngủ bạn ở đâu? - Ở đây này.' },
      { id: 'u13-3', word: 'kitchen', phonetic: '/ˈkɪtʃ.ɪn/', meaning: 'phòng bếp', icon: '🍳', color: '#f59e0b', exampleEn: 'They\'re in the kitchen.', exampleVi: 'Chúng ở trong phòng bếp.' },
      { id: 'u13-4', word: 'bathroom', phonetic: '/ˈbɑːθ.ruːm/', meaning: 'phòng tắm', icon: '🛁', color: '#06b6d4', exampleEn: 'Where\'s the bathroom? - It\'s there.', exampleVi: 'Phòng tắm ở đâu? - Ở đằng kia.' },
      { id: 'u13-5', word: 'chair', phonetic: '/tʃeər/', meaning: 'cái ghế', icon: '🪑', color: '#10b981', exampleEn: 'Where are the chairs?', exampleVi: 'Những chiếc ghế ở đâu?' },
      { id: 'u13-6', word: 'table', phonetic: '/ˈteɪ.bəl/', meaning: 'cái bàn', icon: '🪵', color: '#92400e', exampleEn: 'The books are on the table.', exampleVi: 'Những quyển sách ở trên bàn.' },
      { id: 'u13-7', word: 'lamp', phonetic: '/læmp/', meaning: 'đèn ngủ, đèn bàn', icon: '💡', color: '#eab308', exampleEn: 'There are two lamps.', exampleVi: 'Có hai chiếc đèn.' },
      { id: 'u13-8', word: 'here', phonetic: '/hɪər/', meaning: 'ở đây (gần)', icon: '📍', color: '#14b8a6', exampleEn: 'It\'s here.', exampleVi: 'Nó ở đây.' },
      { id: 'u13-9', word: 'there', phonetic: '/ðeər/', meaning: 'ở kia, ở đó (xa)', icon: '👉', color: '#6366f1', exampleEn: 'It\'s there.', exampleVi: 'Nó ở đằng kia.' }
    ],
    patterns: [
      {
        id: 'u13-p1',
        pattern: 'Where\'s the [căn phòng]? - It\'s here / there.',
        explanation: 'Hỏi vị trí của căn phòng trong ngôi nhà.',
        examples: [
          { speakerA: 'Mai', textA: 'Where\'s your bedroom?', speakerB: 'Linh', textB: 'It\'s here.' },
          { speakerA: 'Ben', textA: 'Where\'s the bathroom?', speakerB: 'Nam', textB: 'It\'s there.' }
        ]
      },
      {
        id: 'u13-p2',
        pattern: 'Where are the [đồ vật]? - They\'re in / on the [địa điểm].',
        explanation: 'Hỏi vị trí của nhiều đồ vật (số nhiều).',
        examples: [
          { speakerA: 'Mai', textA: 'Where are the chairs?', speakerB: 'Linh', textB: 'They\'re in the kitchen.' },
          { speakerA: 'Nam', textA: 'Where are the books?', speakerB: 'Minh', textB: 'They\'re on the table.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'ou - /aʊ/',
        sampleWords: [
          { word: 'house', sentence: 'Wow, it\'s a big house!' }
        ]
      },
      {
        sound: 'ow - /aʊ/',
        sampleWords: [
          { word: 'brown', sentence: 'Wow, it\'s a brown house!' }
        ]
      }
    ],
    chant: {
      title: 'Big House Chant (Trang 22 - Tập 2)',
      lines: [
        'Big house, big house. It\'s a big house. It\'s my big house. Come in, please!',
        'Brown house, brown house. It\'s a brown house. It\'s my brown house. Come in, please!'
      ]
    },
    quizQuestions: [
      {
        id: 'u13-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi "Phòng bếp ở đâu vậy?", em dùng câu:',
        options: ['Where\'s the kitchen?', 'What\'s the kitchen?', 'Is this the bathroom?', 'How old is the kitchen?'],
        correctAnswer: 'Where\'s the kitchen?',
        explanation: '"Where\'s the kitchen?" có nghĩa là "Phòng bếp ở đâu?".'
      },
      {
        id: 'u13-q2',
        type: 'fill-blank',
        prompt: 'Điền giới từ: The books are _____ the table (ở trên bàn).',
        options: ['on', 'in', 'at', 'to'],
        correctAnswer: 'on',
        explanation: '"on the table" nghĩa là ở trên mặt bàn.'
      },
      {
        id: 'u13-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn căn phòng được nói đến:',
        audioText: 'It is in the living room.',
        options: ['Phòng khách', 'Phòng ngủ', 'Phòng bếp', 'Phòng tắm'],
        correctAnswer: 'Phòng khách',
        explanation: '"living room" là phòng khách.'
      },
      {
        id: 'u13-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "phòng ngủ":',
        scrambledWords: ['b', 'e', 'd', 'r', 'o', 'o', 'm'],
        correctAnswer: 'bedroom',
        explanation: 'Phòng ngủ là "bedroom".'
      }
    ]
  },
  {
    id: 14,
    term: 2,
    unitNumber: 14,
    title: 'Unit 14: My bedroom',
    vietnameseTitle: 'Bài 14: Phòng ngủ của mình',
    theme: 'Me and My Family',
    color: 'purple',
    icon: '🛏️',
    page: 24,
    competences: [
      'Nói về số lượng đồ đạc trong phòng (There\'s a... / There are two...)',
      'Miêu tả đặc điểm đồ vật (The door is big / small / old / new)'
    ],
    vocabularies: [
      { id: 'u14-1', word: 'bed', phonetic: '/bed/', meaning: 'cái giường ngủ', icon: '🛏️', color: '#8b5cf6', exampleEn: 'There\'s a bed in the room.', exampleVi: 'Có một chiếc giường trong phòng.' },
      { id: 'u14-2', word: 'desk', phonetic: '/desk/', meaning: 'bàn học', icon: '🪵', color: '#3b82f6', exampleEn: 'There\'s a desk in the room.', exampleVi: 'Có một bàn học trong phòng.' },
      { id: 'u14-3', word: 'door', phonetic: '/dɔːr/', meaning: 'cửa ra vào', icon: '🚪', color: '#f59e0b', exampleEn: 'The door is big.', exampleVi: 'Cửa ra vào rất to.' },
      { id: 'u14-4', word: 'window', phonetic: '/ˈwɪn.dəʊ/', meaning: 'cửa sổ', icon: '🪟', color: '#06b6d4', exampleEn: 'The windows are small.', exampleVi: 'Các ô cửa sổ nhỏ.' },
      { id: 'u14-5', word: 'big', phonetic: '/bɪɡ/', meaning: 'to, lớn', icon: '🐘', color: '#10b981', exampleEn: 'It\'s big.', exampleVi: 'Nó to lớn.' },
      { id: 'u14-6', word: 'small', phonetic: '/smɔːl/', meaning: 'nhỏ, bé', icon: '🐭', color: '#ec4899', exampleEn: 'The windows are small.', exampleVi: 'Các cửa sổ nhỏ.' },
      { id: 'u14-7', word: 'old', phonetic: '/əʊld/', meaning: 'cũ', icon: '📜', color: '#92400e', exampleEn: 'The chairs are old.', exampleVi: 'Những chiếc ghế đã cũ.' },
      { id: 'u14-8', word: 'new', phonetic: '/njuː/', meaning: 'mới', icon: '✨', color: '#eab308', exampleEn: 'The bed is new.', exampleVi: 'Chiếc giường còn mới.' }
    ],
    patterns: [
      {
        id: 'u14-p1',
        pattern: 'There\'s a [đồ vật] in the room. / There are [số lượng] [đồ vật] in the room.',
        explanation: 'Diễn tả có 1 (There\'s a) hoặc nhiều (There are) đồ vật trong phòng.',
        examples: [
          { speakerA: 'Mai', textA: 'This is my bedroom. There\'s a desk in the room.', speakerB: 'Linh', textB: 'There are two chairs in the room.' }
        ]
      },
      {
        id: 'u14-p2',
        pattern: 'The [đồ vật] is [tính từ]. / The [đồ vật số nhiều] are [tính từ].',
        explanation: 'Miêu tả tính chất kích thước hoặc độ mới cũ của đồ vật.',
        examples: [
          { speakerA: 'Mai', textA: 'The door is big.', speakerB: 'Linh', textB: 'And look! The windows are small.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'oom - /uːm/',
        sampleWords: [
          { word: 'room', sentence: 'There\'s a bed in the room.' }
        ]
      },
      {
        sound: 'oor - /ɔːr/',
        sampleWords: [
          { word: 'door', sentence: 'The doors are big.' }
        ]
      }
    ],
    chant: {
      title: 'Doors and Rooms Chant (Trang 28 - Tập 2)',
      lines: [
        'A door in the bedroom. There\'s a door in the bedroom. The door is big. The bedroom is big, too.',
        'Doors in the living room. There are two doors in the living room. The doors are small. The living room is small, too.'
      ]
    },
    quizQuestions: [
      {
        id: 'u14-q1',
        type: 'multiple-choice',
        prompt: 'Để nói "Có hai chiếc ghế trong phòng", câu đúng là:',
        options: ['There are two chairs in the room.', 'There\'s a chair in the room.', 'The chair is big.', 'Where are two chairs?'],
        correctAnswer: 'There are two chairs in the room.',
        explanation: 'Số nhiều (hai chiếc) phải dùng "There are two chairs...".'
      },
      {
        id: 'u14-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: "There _____ a bed in the bedroom."',
        options: ['is', 'are', 'am', 'have'],
        correctAnswer: 'is',
        explanation: 'Một cái giường dùng "There is" (viết tắt là There\'s).'
      },
      {
        id: 'u14-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn đặc điểm của chiếc cửa:',
        audioText: 'The door is big.',
        options: ['Cửa to lớn', 'Cửa nhỏ bé', 'Cửa màu xanh', 'Cửa đã cũ'],
        correctAnswer: 'Cửa to lớn',
        explanation: '"big" nghĩa là to, lớn.'
      },
      {
        id: 'u14-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "cửa sổ":',
        scrambledWords: ['w', 'i', 'n', 'd', 'o', 'w'],
        correctAnswer: 'window',
        explanation: 'Cửa sổ là "window".'
      }
    ]
  },
  {
    id: 15,
    term: 2,
    unitNumber: 15,
    title: 'Unit 15: At the dining table',
    vietnameseTitle: 'Bài 15: Trên bàn ăn',
    theme: 'Me and My Family',
    color: 'emerald',
    icon: '🍽️',
    page: 30,
    competences: [
      'Mời ai đó dùng món ăn/thức uống và đáp lại lịch sự (Would you like some...? - Yes, please / No, thanks)',
      'Hỏi muốn ăn/uống gì (What would you like to eat / drink? - I\'d like some...)'
    ],
    vocabularies: [
      { id: 'u15-1', word: 'rice', phonetic: '/raɪs/', meaning: 'cơm', icon: '🍚', color: '#10b981', exampleEn: 'Would you like some rice? - Yes, please.', exampleVi: 'Bạn dùng cơm nhé? - Vâng ạ.' },
      { id: 'u15-2', word: 'bread', phonetic: '/bred/', meaning: 'bánh mì', icon: '🍞', color: '#f59e0b', exampleEn: 'I\'d like some bread, please.', exampleVi: 'Cho mình xin một ít bánh mì nhé.' },
      { id: 'u15-3', word: 'chicken', phonetic: '/ˈtʃɪk.ɪn/', meaning: 'thịt gà', icon: '🍗', color: '#f97316', exampleEn: 'I\'d like some chicken.', exampleVi: 'Mình muốn ăn thịt gà.' },
      { id: 'u15-4', word: 'fish', phonetic: '/fɪʃ/', meaning: 'cá', icon: '🐟', color: '#06b6d4', exampleEn: 'Would you like some fish?', exampleVi: 'Bạn có muốn dùng cá không?' },
      { id: 'u15-5', word: 'meat', phonetic: '/miːt/', meaning: 'thịt', icon: '🥩', color: '#ef4444', exampleEn: 'Would you like some meat?', exampleVi: 'Bạn dùng thịt nhé?' },
      { id: 'u15-6', word: 'beans', phonetic: '/biːnz/', meaning: 'đậu, đỗ', icon: '🫘', color: '#22c55e', exampleEn: 'Would you like some beans?', exampleVi: 'Bạn dùng đậu nhé?' },
      { id: 'u15-7', word: 'milk', phonetic: '/mɪlk/', meaning: 'sữa', icon: '🥛', color: '#3b82f6', exampleEn: 'I\'d like some milk, please.', exampleVi: 'Cho mình xin một ly sữa nhé.' },
      { id: 'u15-8', word: 'juice', phonetic: '/dʒuːs/', meaning: 'nước hoa quả, nước ép', icon: '🧃', color: '#ec4899', exampleEn: 'Would you like some juice?', exampleVi: 'Bạn có muốn uống nước ép không?' },
      { id: 'u15-9', word: 'water', phonetic: '/ˈwɔː.tər/', meaning: 'nước lọc', icon: '💧', color: '#0ea5e9', exampleEn: 'Some water, please.', exampleVi: 'Cho mình xin nước lọc nhé.' }
    ],
    patterns: [
      {
        id: 'u15-p1',
        pattern: 'Would you like some [món ăn/đồ uống]? - Yes, please. / No, thanks.',
        explanation: 'Mời ai đó dùng món gì và lời đáp lịch sự.',
        examples: [
          { speakerA: 'Father', textA: 'Would you like some rice?', speakerB: 'Nam', textB: 'Yes, please.' },
          { speakerA: 'Mother', textA: 'Would you like some juice?', speakerB: 'Minh', textB: 'No, thanks.' }
        ]
      },
      {
        id: 'u15-p2',
        pattern: 'What would you like to eat / drink? - I\'d like some [món], please.',
        explanation: 'Hỏi bạn muốn ăn gì (to eat) hoặc uống gì (to drink).',
        examples: [
          { speakerA: 'Chef', textA: 'What would you like to eat?', speakerB: 'Ben', textB: 'I\'d like some bread, please.' },
          { speakerA: 'Chef', textA: 'What would you like to drink?', speakerB: 'Lucy', textB: 'I\'d like some milk, please.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'ea - /e/',
        sampleWords: [
          { word: 'bread', sentence: 'I\'d like some bread, please.' }
        ]
      },
      {
        sound: 'ea - /iː/',
        sampleWords: [
          { word: 'meat', sentence: 'Would you like some meat?' }
        ]
      }
    ],
    chant: {
      title: 'Bread and Meat Chant (Trang 34 - Tập 2)',
      lines: [
        'Bread, bread, bread. What would you like to eat? Some bread, please.',
        'Meat, meat, meat. Would you like some meat? Yes, please. Yes, please.'
      ]
    },
    quizQuestions: [
      {
        id: 'u15-q1',
        type: 'multiple-choice',
        prompt: 'Khi muốn mời bạn dùng cơm, em nói câu nào?',
        options: ['Would you like some rice?', 'What would you like to drink?', 'I have some rice.', 'Do you like apples?'],
        correctAnswer: 'Would you like some rice?',
        explanation: '"Would you like some rice?" là lời mời lịch sự.'
      },
      {
        id: 'u15-q2',
        type: 'fill-blank',
        prompt: 'Would you like some milk? - Yes, _____ (vâng, làm ơn).',
        options: ['please', 'thanks', 'no', 'can'],
        correctAnswer: 'please',
        explanation: 'Khi đồng ý nhận lời mời: "Yes, please."'
      },
      {
        id: 'u15-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn món được gọi:',
        audioText: 'I would like some bread, please.',
        options: ['Bánh mì (bread)', 'Thịt gà (chicken)', 'Nước ép (juice)', 'Cơm (rice)'],
        correctAnswer: 'Bánh mì (bread)',
        explanation: '"bread" là bánh mì.'
      },
      {
        id: 'u15-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "nước hoa quả":',
        scrambledWords: ['j', 'u', 'i', 'c', 'e'],
        correctAnswer: 'juice',
        explanation: 'Nước hoa quả là "juice".'
      }
    ]
  },
  {
    id: 16,
    term: 2,
    unitNumber: 16,
    title: 'Unit 16: My pets',
    vietnameseTitle: 'Bài 16: Thú cưng của mình',
    theme: 'Me and the World Around',
    color: 'green',
    icon: '🐶',
    page: 40,
    competences: [
      'Hỏi xem bạn có nuôi thú cưng không (Do you have any dogs/cats...?)',
      'Hỏi số lượng thú cưng bạn có (How many rabbits do you have? - I have...)'
    ],
    vocabularies: [
      { id: 'u16-1', word: 'dog', phonetic: '/dɒɡ/', meaning: 'con chó', icon: '🐕', color: '#10b981', exampleEn: 'I have a dog.', exampleVi: 'Mình có một chú chó.' },
      { id: 'u16-2', word: 'cat', phonetic: '/kæt/', meaning: 'con mèo', icon: '🐈', color: '#f59e0b', exampleEn: 'I have two cats.', exampleVi: 'Mình có hai chú mèo.' },
      { id: 'u16-3', word: 'goldfish', phonetic: '/ˈɡəʊld.fɪʃ/', meaning: 'cá vàng', icon: '🐠', color: '#f97316', exampleEn: 'These are my goldfish.', exampleVi: 'Đây là đàn cá vàng của mình.' },
      { id: 'u16-4', word: 'parrot', phonetic: '/ˈpær.ət/', meaning: 'con vẹt', icon: '🦜', color: '#ec4899', exampleEn: 'I have a parrot.', exampleVi: 'Mình có một chú vẹt.' },
      { id: 'u16-5', word: 'rabbit', phonetic: '/ˈræb.ɪt/', meaning: 'con thỏ', icon: '🐇', color: '#8b5cf6', exampleEn: 'I have two rabbits.', exampleVi: 'Mình có hai chú thỏ.' },
      { id: 'u16-6', word: 'many', phonetic: '/ˈmen.i/', meaning: 'nhiều', icon: '🔢', color: '#3b82f6', exampleEn: 'I have many rabbits.', exampleVi: 'Mình có nhiều thỏ lắm.' },
      { id: 'u16-7', word: 'some', phonetic: '/sʌm/', meaning: 'một vài, một ít', icon: '✨', color: '#06b6d4', exampleEn: 'I have some goldfish.', exampleVi: 'Mình có vài con cá vàng.' }
    ],
    patterns: [
      {
        id: 'u16-p1',
        pattern: 'Do you have any [thú cưng số nhiều]? - Yes, I do. / No, I don\'t.',
        explanation: 'Hỏi xem bạn có nuôi loại thú cưng nào không.',
        examples: [
          { speakerA: 'Nam', textA: 'Do you have any dogs?', speakerB: 'Ben', textB: 'Yes, I do.' },
          { speakerA: 'Mai', textA: 'Do you have any cats?', speakerB: 'Bill', textB: 'No, I don\'t. I have one dog.' }
        ]
      },
      {
        id: 'u16-p2',
        pattern: 'How many [thú cưng số nhiều] do you have? - I have [số lượng / many / some].',
        explanation: 'Hỏi số lượng thú cưng bạn sở hữu.',
        examples: [
          { speakerA: 'Ben', textA: 'How many rabbits do you have?', speakerB: 'Lucy', textB: 'I have many.' },
          { speakerA: 'Bill', textA: 'How many goldfish do you have?', speakerB: 'Linh', textB: 'I have some.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'o - /ɒ/',
        sampleWords: [
          { word: 'dog', sentence: 'Do you have any dogs?' },
          { word: 'goldfish', sentence: 'How many goldfish do you have?' }
        ]
      }
    ],
    chant: {
      title: 'My Pets Chant (Trang 44 - Tập 2)',
      lines: [
        'Dogs, dogs, dogs. Do you have any dogs? Yes, I do. Yes, I do.',
        'Goldfish, goldfish, goldfish. How many goldfish do you have? I have some goldfish.'
      ]
    },
    quizQuestions: [
      {
        id: 'u16-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi bạn có nuôi mèo không, câu đúng là:',
        options: ['Do you have any cats?', 'How many cats do you have?', 'What colour is the cat?', 'Is this a cat?'],
        correctAnswer: 'Do you have any cats?',
        explanation: 'Cấu trúc hỏi có thú cưng nào không: Do you have any + [danh từ số nhiều]?'
      },
      {
        id: 'u16-q2',
        type: 'fill-blank',
        prompt: '_____ many rabbits do you have? - I have three.',
        options: ['How', 'What', 'Where', 'Who'],
        correctAnswer: 'How',
        explanation: 'Hỏi số lượng dùng "How many...".'
      },
      {
        id: 'u16-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn con vật:',
        audioText: 'goldfish',
        options: ['Cá vàng (goldfish)', 'Con vẹt (parrot)', 'Con thỏ (rabbit)', 'Con chó (dog)'],
        correctAnswer: 'Cá vàng (goldfish)',
        explanation: '"goldfish" là cá vàng.'
      },
      {
        id: 'u16-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "con thỏ":',
        scrambledWords: ['r', 'a', 'b', 'b', 'i', 't'],
        correctAnswer: 'rabbit',
        explanation: 'Con thỏ là "rabbit".'
      }
    ]
  },
  {
    id: 17,
    term: 2,
    unitNumber: 17,
    title: 'Unit 17: Our toys',
    vietnameseTitle: 'Bài 17: Đồ chơi của chúng mình',
    theme: 'Me and the World Around',
    color: 'teal',
    icon: '🧸',
    page: 46,
    competences: [
      'Nói về đồ chơi của một người (He/She has...)',
      'Nói về đồ chơi của nhiều người (They have...)'
    ],
    vocabularies: [
      { id: 'u17-1', word: 'car', phonetic: '/kɑːr/', meaning: 'xe ô tô đồ chơi', icon: '🚗', color: '#ef4444', exampleEn: 'My brother has a car.', exampleVi: 'Anh trai mình có một chiếc ô tô.' },
      { id: 'u17-2', word: 'kite', phonetic: '/kaɪt/', meaning: 'con diều', icon: '🪁', color: '#f59e0b', exampleEn: 'She has a kite.', exampleVi: 'Bạn ấy có một con diều.' },
      { id: 'u17-3', word: 'train', phonetic: '/treɪn/', meaning: 'tàu hỏa đồ chơi', icon: '🚂', color: '#10b981', exampleEn: 'They have trains.', exampleVi: 'Các bạn ấy có đoàn tàu hỏa.' },
      { id: 'u17-4', word: 'plane', phonetic: '/pleɪn/', meaning: 'máy bay', icon: '✈️', color: '#06b6d4', exampleEn: 'He has three planes.', exampleVi: 'Bạn ấy có 3 chiếc máy bay.' },
      { id: 'u17-5', word: 'ship', phonetic: '/ʃɪp/', meaning: 'tàu thủy', icon: '🚢', color: '#3b82f6', exampleEn: 'They have ships.', exampleVi: 'Các bạn ấy có tàu thủy.' },
      { id: 'u17-6', word: 'truck', phonetic: '/trʌk/', meaning: 'xe tải', icon: '🚚', color: '#8b5cf6', exampleEn: 'They have trucks.', exampleVi: 'Họ có những chiếc xe tải.' },
      { id: 'u17-7', word: 'bus', phonetic: '/bʌs/', meaning: 'xe buýt', icon: '🚌', color: '#f97316', exampleEn: 'They have buses.', exampleVi: 'Họ có xe buýt.' },
      { id: 'u17-8', word: 'teddy bear', phonetic: '/ˈted.i beər/', meaning: 'gấu bông', icon: '🧸', color: '#92400e', exampleEn: 'She has a teddy bear.', exampleVi: 'Bạn ấy có một chú gấu bông.' },
      { id: 'u17-9', word: 'doll', phonetic: '/dɒl/', meaning: 'búp bê', icon: '🪆', color: '#ec4899', exampleEn: 'My sister has two dolls.', exampleVi: 'Em gái mình có hai con búp bê.' }
    ],
    patterns: [
      {
        id: 'u17-p1',
        pattern: 'He / She has [đồ chơi].',
        explanation: 'Nói về món đồ chơi mà bạn nam (He) hoặc bạn nữ (She) sở hữu.',
        examples: [
          { speakerA: 'Ben', textA: 'My brother has a car.', speakerB: 'Nam', textB: 'Wow, I like cars!' },
          { speakerA: 'Lucy', textA: 'She has a kite.', speakerB: 'Mary', textB: 'It\'s nice.' }
        ]
      },
      {
        id: 'u17-p2',
        pattern: 'They have [đồ chơi số nhiều].',
        explanation: 'Nói về đồ chơi của nhóm bạn (They).',
        examples: [
          { speakerA: 'Linh', textA: 'Lucy and Mary have two dolls.', speakerB: 'Nam', textB: 'Yes, they do.' },
          { speakerA: 'Ben', textA: 'They have three cars.', speakerB: 'Minh', textB: 'Yes, they do.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'i - /aɪ/',
        sampleWords: [
          { word: 'kite', sentence: 'She has a kite.' }
        ]
      },
      {
        sound: 'oy - /ɔɪ/',
        sampleWords: [
          { word: 'toy', sentence: 'He has a toy.' }
        ]
      }
    ],
    chant: {
      title: 'Our Toys Chant (Trang 50 - Tập 2)',
      lines: [
        'Kite, kite, kite. Ben has a kite. He has a kite.',
        'Bike, bike, bike. Mary has a bike. She has a bike.',
        'Toys, toys, toys. Ben and Mary have toys. They have toys.'
      ]
    },
    quizQuestions: [
      {
        id: 'u17-q1',
        type: 'multiple-choice',
        prompt: 'Để nói "Cô ấy có một con diều", câu đúng là:',
        options: ['She has a kite.', 'He has a kite.', 'They have a kite.', 'I have a car.'],
        correctAnswer: 'She has a kite.',
        explanation: 'Cô ấy (She) đi với "has": She has a kite.'
      },
      {
        id: 'u17-q2',
        type: 'fill-blank',
        prompt: 'Điền từ: "They _____ three cars."',
        options: ['have', 'has', 'is', 'are'],
        correctAnswer: 'have',
        explanation: 'Chủ ngữ "They" đi với "have".'
      },
      {
        id: 'u17-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn món đồ chơi:',
        audioText: 'teddy bear',
        options: ['Gấu bông', 'Búp bê', 'Tàu hỏa', 'Máy bay'],
        correctAnswer: 'Gấu bông',
        explanation: '"teddy bear" là gấu bông.'
      },
      {
        id: 'u17-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "tàu hỏa":',
        scrambledWords: ['t', 'r', 'a', 'i', 'n'],
        correctAnswer: 'train',
        explanation: 'Tàu hỏa là "train".'
      }
    ]
  },
  {
    id: 18,
    term: 2,
    unitNumber: 18,
    title: 'Unit 18: Playing and doing',
    vietnameseTitle: 'Bài 18: Hoạt động đang diễn ra',
    theme: 'Me and the World Around',
    color: 'yellow',
    icon: '🎶',
    page: 52,
    competences: [
      'Nói về hành động mình đang làm (I\'m dancing / singing / reading...)',
      'Hỏi bạn đang làm gì (What are you doing? - I\'m...)'
    ],
    vocabularies: [
      { id: 'u18-1', word: 'reading', phonetic: '/ˈriː.dɪŋ/', meaning: 'đang đọc sách', icon: '📖', color: '#3b82f6', exampleEn: 'I\'m reading a book.', exampleVi: 'Mình đang đọc một quyển sách.' },
      { id: 'u18-2', word: 'writing', phonetic: '/ˈraɪ.tɪŋ/', meaning: 'đang viết', icon: '✍️', color: '#10b981', exampleEn: 'I\'m writing.', exampleVi: 'Mình đang viết bài.' },
      { id: 'u18-3', word: 'dancing', phonetic: '/ˈdɑːn.sɪŋ/', meaning: 'đang nhảy múa', icon: '💃', color: '#ec4899', exampleEn: 'Mum, I\'m dancing.', exampleVi: 'Mẹ ơi, con đang nhảy múa nè.' },
      { id: 'u18-4', word: 'singing', phonetic: '/ˈsɪŋ.ɪŋ/', meaning: 'đang hát', icon: '🎤', color: '#06b6d4', exampleEn: 'I\'m singing a song.', exampleVi: 'Mình đang hát một bài hát.' },
      { id: 'u18-5', word: 'drawing a picture', phonetic: '/ˌdrɔː.ɪŋ ə ˈpɪk.tʃər/', meaning: 'đang vẽ tranh', icon: '🎨', color: '#8b5cf6', exampleEn: 'I\'m drawing a picture.', exampleVi: 'Mình đang vẽ một bức tranh.' },
      { id: 'u18-6', word: 'listening to music', phonetic: '/ˈlɪs.ən.ɪŋ tuː ˈmjuː.zɪk/', meaning: 'đang nghe nhạc', icon: '🎧', color: '#f59e0b', exampleEn: 'I\'m listening to music.', exampleVi: 'Mình đang nghe nhạc.' },
      { id: 'u18-7', word: 'watching TV', phonetic: '/ˈwɒtʃ.ɪŋ ˌtiːˈviː/', meaning: 'đang xem ti vi', icon: '📺', color: '#ef4444', exampleEn: 'I\'m watching TV.', exampleVi: 'Mình đang xem ti vi.' },
      { id: 'u18-8', word: 'playing basketball', phonetic: '/ˈpleɪ.ɪŋ ˈbɑː.skɪt.bɔːl/', meaning: 'đang chơi bóng rổ', icon: '🏀', color: '#f97316', exampleEn: 'I\'m playing basketball.', exampleVi: 'Mình đang chơi bóng rổ.' }
    ],
    patterns: [
      {
        id: 'u18-p1',
        pattern: 'I\'m [động từ-ing].',
        explanation: 'Nói về việc mình đang làm ở hiện tại.',
        examples: [
          { speakerA: 'Mother', textA: 'Where are you, Linh?', speakerB: 'Linh', textB: 'I\'m in my room. I\'m dancing.' }
        ]
      },
      {
        id: 'u18-p2',
        pattern: 'What are you doing? - I\'m [động từ-ing].',
        explanation: 'Hỏi xem bạn đang làm gì.',
        examples: [
          { speakerA: 'Lucy', textA: 'Hi, Ben. What are you doing?', speakerB: 'Ben', textB: 'I\'m watching TV.' },
          { speakerA: 'Ben', textA: 'What are you doing, Lucy?', speakerB: 'Lucy', textB: 'I\'m singing.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'n - /n/',
        sampleWords: [
          { word: 'listen', sentence: 'We listen to music at break time.' }
        ]
      },
      {
        sound: 'ng - /ŋ/',
        sampleWords: [
          { word: 'singing', sentence: 'I\'m singing my favourite song.' }
        ]
      }
    ],
    chant: {
      title: 'Doing Chant (Trang 56 - Tập 2)',
      lines: [
        'Listen, everyone! Stand up! Count to ten, and sing with me.',
        'No! No! No! I\'m reading a book.',
        'No! No! No! I\'m drawing a train.'
      ]
    },
    quizQuestions: [
      {
        id: 'u18-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi bạn: "Bạn đang làm gì thế?", em nói câu nào?',
        options: ['What are you doing?', 'What do you do?', 'What\'s your hobby?', 'What colour is it?'],
        correctAnswer: 'What are you doing?',
        explanation: '"What are you doing?" là câu hỏi hành động đang diễn ra.'
      },
      {
        id: 'u18-q2',
        type: 'fill-blank',
        prompt: 'What are you doing? - I\'m _____ to music.',
        options: ['listening', 'reading', 'watching', 'drawing'],
        correctAnswer: 'listening',
        explanation: 'Nghe nhạc đi với "listening to music".'
      },
      {
        id: 'u18-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn hành động:',
        audioText: 'I am drawing a picture.',
        options: ['Đang vẽ tranh', 'Đang đọc sách', 'Đang xem TV', 'Đang nhảy múa'],
        correctAnswer: 'Đang vẽ tranh',
        explanation: '"drawing a picture" là đang vẽ tranh.'
      },
      {
        id: 'u18-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "đang đọc":',
        scrambledWords: ['r', 'e', 'a', 'd', 'i', 'n', 'g'],
        correctAnswer: 'reading',
        explanation: 'Đang đọc là "reading".'
      }
    ]
  },
  {
    id: 19,
    term: 2,
    unitNumber: 19,
    title: 'Unit 19: Outdoor activities',
    vietnameseTitle: 'Bài 19: Hoạt động ngoài trời',
    theme: 'Me and the World Around',
    color: 'emerald',
    icon: '🪁',
    page: 58,
    competences: [
      'Nói về hoạt động ngoài trời của một ai đó (Look! Nam is running)',
      'Hỏi và trả lời: What\'s he / she doing? - He\'s / She\'s cycling, skating, flying a kite...'
    ],
    vocabularies: [
      { id: 'u19-1', word: 'cycling', phonetic: '/ˈsaɪ.klɪŋ/', meaning: 'đang đạp xe', icon: '🚴', color: '#10b981', exampleEn: 'Mai is cycling in the park.', exampleVi: 'Mai đang đạp xe trong công viên.' },
      { id: 'u19-2', word: 'skating', phonetic: '/ˈskeɪ.tɪŋ/', meaning: 'đang trượt patin', icon: '🛼', color: '#3b82f6', exampleEn: 'He\'s skating.', exampleVi: 'Cậu ấy đang trượt patin.' },
      { id: 'u19-3', word: 'flying a kite', phonetic: '/ˌflaɪ.ɪŋ ə ˈkaɪt/', meaning: 'đang thả diều', icon: '🪁', color: '#f59e0b', exampleEn: 'Nam is flying a kite.', exampleVi: 'Nam đang thả diều.' },
      { id: 'u19-4', word: 'skipping', phonetic: '/ˈskɪp.ɪŋ/', meaning: 'đang nhảy dây', icon: '🪢', color: '#ec4899', exampleEn: 'She\'s skipping.', exampleVi: 'Cô bé đang nhảy dây.' },
      { id: 'u19-5', word: 'running', phonetic: '/ˈrʌn.ɪŋ/', meaning: 'đang chạy', icon: '🏃', color: '#ef4444', exampleEn: 'Look! Nam is running.', exampleVi: 'Nhìn kìa! Nam đang chạy.' },
      { id: 'u19-6', word: 'walking', phonetic: '/ˈwɔː.kɪŋ/', meaning: 'đang đi bộ', icon: '🚶', color: '#8b5cf6', exampleEn: 'She\'s walking.', exampleVi: 'Cô ấy đang đi bộ.' },
      { id: 'u19-7', word: 'playing badminton', phonetic: '/ˈpleɪ.ɪŋ ˈbæd.mɪn.tən/', meaning: 'đang chơi cầu lông', icon: '🏸', color: '#06b6d4', exampleEn: 'Linh is playing badminton.', exampleVi: 'Linh đang chơi cầu lông.' }
    ],
    patterns: [
      {
        id: 'u19-p1',
        pattern: 'He\'s / She\'s [hoạt động ngoài trời].',
        explanation: 'Miêu tả bạn nam (He\'s) hoặc bạn nữ (She\'s) đang làm gì.',
        examples: [
          { speakerA: 'Mai', textA: 'Look! Nam is running.', speakerB: 'Lucy', textB: 'Yes, he is.' },
          { speakerA: 'Ben', textA: 'Look! Linh is painting.', speakerB: 'Mary', textB: 'Yes, she is.' }
        ]
      },
      {
        id: 'u19-p2',
        pattern: 'What\'s he / she doing? - He\'s / She\'s [động từ-ing].',
        explanation: 'Hỏi xem cậu ấy/cô ấy đang làm gì.',
        examples: [
          { speakerA: 'Nam', textA: 'What\'s he doing?', speakerB: 'Mary', textB: 'He\'s skating.' },
          { speakerA: 'Ben', textA: 'What\'s she doing?', speakerB: 'Mai', textB: 'She\'s skipping.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'pl - /pl/',
        sampleWords: [
          { word: 'play', sentence: 'She\'s playing volleyball.' }
        ]
      },
      {
        sound: 'fl - /fl/',
        sampleWords: [
          { word: 'fly', sentence: 'He\'s flying a kite.' }
        ]
      }
    ],
    chant: {
      title: 'Playing and Flying Chant (Trang 62 - Tập 2)',
      lines: [
        'Playing, playing, playing. What\'s she doing? She\'s playing volleyball.',
        'Flying, flying, flying. What\'s he doing? He\'s flying a kite.'
      ]
    },
    quizQuestions: [
      {
        id: 'u19-q1',
        type: 'multiple-choice',
        prompt: 'Nhìn thấy một bạn nam đang đạp xe, để hỏi bạn ấy đang làm gì, em hỏi:',
        options: ['What\'s he doing?', 'What\'s she doing?', 'What are you doing?', 'Where is he?'],
        correctAnswer: 'What\'s he doing?',
        explanation: 'Bạn nam dùng đại từ "he": What\'s he doing?'
      },
      {
        id: 'u19-q2',
        type: 'fill-blank',
        prompt: 'Nam is in the park. He is _____ a kite.',
        options: ['flying', 'riding', 'doing', 'skating'],
        correctAnswer: 'flying',
        explanation: 'Thả diều là cụm từ "flying a kite".'
      },
      {
        id: 'u19-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn hoạt động ngoài trời:',
        audioText: 'She is skating.',
        options: ['Trượt patin (skating)', 'Nhảy dây (skipping)', 'Đạp xe (cycling)', 'Chạy bộ (running)'],
        correctAnswer: 'Trượt patin (skating)',
        explanation: '"skating" là trượt patin.'
      },
      {
        id: 'u19-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "nhảy dây":',
        scrambledWords: ['s', 'k', 'i', 'p', 'p', 'i', 'n', 'g'],
        correctAnswer: 'skipping',
        explanation: 'Nhảy dây là "skipping".'
      }
    ]
  },
  {
    id: 20,
    term: 2,
    unitNumber: 20,
    title: 'Unit 20: At the zoo',
    vietnameseTitle: 'Bài 20: Ở thảo cầm viên (vườn thú)',
    theme: 'Me and the World Around',
    color: 'orange',
    icon: '🦁',
    page: 64,
    competences: [
      'Hỏi và trả lời về con vật nhìn thấy ở vườn thú (What can you see? - I can see a...)',
      'Hỏi và trả lời về hành động của con vật (What\'s the elephant doing? - It\'s dancing/swinging...)'
    ],
    vocabularies: [
      { id: 'u20-1', word: 'tiger', phonetic: '/ˈtaɪ.ɡər/', meaning: 'con hổ', icon: '🐅', color: '#f97316', exampleEn: 'I can see a tiger.', exampleVi: 'Mình có thể nhìn thấy một con hổ.' },
      { id: 'u20-2', word: 'horse', phonetic: '/hɔːs/', meaning: 'con ngựa', icon: '🐎', color: '#92400e', exampleEn: 'I can see a horse.', exampleVi: 'Mình nhìn thấy một chú ngựa.' },
      { id: 'u20-3', word: 'monkey', phonetic: '/ˈmʌŋ.ki/', meaning: 'con khỉ', icon: '🐒', color: '#f59e0b', exampleEn: 'A monkey is swinging.', exampleVi: 'Một chú khỉ đang đánh đu.' },
      { id: 'u20-4', word: 'peacock', phonetic: '/ˈpiː.kɒk/', meaning: 'con công', icon: '🦚', color: '#06b6d4', exampleEn: 'The peacock is dancing.', exampleVi: 'Chú chim công đang múa đuôi.' },
      { id: 'u20-5', word: 'elephant', phonetic: '/ˈel.ɪ.fənt/', meaning: 'con voi', icon: '🐘', color: '#64748b', exampleEn: 'I can see an elephant.', exampleVi: 'Mình nhìn thấy một chú voi.' },
      { id: 'u20-6', word: 'climbing', phonetic: '/ˈklaɪ.mɪŋ/', meaning: 'đang leo trèo', icon: '🧗', color: '#10b981', exampleEn: 'A tiger is climbing a tree.', exampleVi: 'Một con hổ đang trèo cây.' },
      { id: 'u20-7', word: 'swinging', phonetic: '/ˈswɪŋ.ɪŋ/', meaning: 'đang đu đưa, đánh đu', icon: '🌴', color: '#8b5cf6', exampleEn: 'The monkey is swinging.', exampleVi: 'Chú khỉ đang đánh đu.' },
      { id: 'u20-8', word: 'counting', phonetic: '/ˈkaʊn.tɪŋ/', meaning: 'đang đếm số', icon: '🔢', color: '#3b82f6', exampleEn: 'The parrot is counting.', exampleVi: 'Chú vẹt đang đếm số: một, hai...' }
    ],
    patterns: [
      {
        id: 'u20-p1',
        pattern: 'What can you see? - I can see a / an [con vật].',
        explanation: 'Hỏi xem em có thể nhìn thấy con vật gì.',
        examples: [
          { speakerA: 'Ben', textA: 'What can you see?', speakerB: 'Mai', textB: 'I can see a tiger.' },
          { speakerA: 'Nam', textA: 'What can you see?', speakerB: 'Lucy', textB: 'I can see an elephant.' }
        ]
      },
      {
        id: 'u20-p2',
        pattern: 'What\'s the [con vật] doing? - It\'s [hành động-ing].',
        explanation: 'Hỏi xem con vật đó đang làm hành động gì.',
        examples: [
          { speakerA: 'Ben', textA: 'What\'s the elephant doing?', speakerB: 'Mai', textB: 'It\'s dancing.' },
          { speakerA: 'Lucy', textA: 'What\'s the monkey doing?', speakerB: 'Nam', textB: 'It\'s swinging.' }
        ]
      }
    ],
    phonics: [
      {
        sound: 'a - /æ/',
        sampleWords: [
          { word: 'parrot', sentence: 'I can see a parrot.' }
        ]
      },
      {
        sound: 'a - /ɑː/',
        sampleWords: [
          { word: 'dancing', sentence: 'The peacock is dancing.' }
        ]
      }
    ],
    chant: {
      title: 'At the Zoo Chant (Trang 68 - Tập 2)',
      lines: [
        'What can you see at the zoo? I can see a monkey.',
        'What\'s the monkey doing? It\'s swinging.',
        'What can you see at the zoo? I can see a peacock.',
        'What\'s the peacock doing? It\'s dancing.'
      ]
    },
    quizQuestions: [
      {
        id: 'u20-q1',
        type: 'multiple-choice',
        prompt: 'Để hỏi "Bạn có thể nhìn thấy con gì ở vườn thú?", em hỏi:',
        options: ['What can you see?', 'What\'s your pet?', 'Where is the zoo?', 'Do you have a tiger?'],
        correctAnswer: 'What can you see?',
        explanation: '"What can you see?" có nghĩa là "Bạn nhìn thấy gì?".'
      },
      {
        id: 'u20-q2',
        type: 'fill-blank',
        prompt: 'What can you see? - I can see _____ elephant.',
        options: ['an', 'a', 'the', 'some'],
        correctAnswer: 'an',
        explanation: 'Từ "elephant" bắt đầu bằng nguyên âm "e" nên dùng "an".'
      },
      {
        id: 'u20-q3',
        type: 'listen-and-choose',
        prompt: 'Nghe và chọn con vật:',
        audioText: 'I can see a peacock.',
        options: ['Con công (peacock)', 'Con khỉ (monkey)', 'Con hổ (tiger)', 'Con voi (elephant)'],
        correctAnswer: 'Con công (peacock)',
        explanation: '"peacock" là con công.'
      },
      {
        id: 'u20-q4',
        type: 'unscramble',
        prompt: 'Sắp xếp chữ cái thành từ "con khỉ":',
        scrambledWords: ['m', 'o', 'n', 'k', 'e', 'y'],
        correctAnswer: 'monkey',
        explanation: 'Con khỉ là "monkey".'
      }
    ]
  }
];

export const CHARACTER_AVATARS = [
  { id: 'ben', name: 'Ben', desc: 'Cậu bé đeo kính tóc đỏ thông minh', emoji: '👦' },
  { id: 'mai', name: 'Mai', desc: 'Cô bé tóc buộc nơ đen dịu dàng', emoji: '👧' },
  { id: 'nam', name: 'Nam', desc: 'Cậu bé tóc đen năng động mê thể thao', emoji: '🧑' },
  { id: 'lucy', name: 'Lucy', desc: 'Cô bé tóc ngắn áo yếm cam vui tươi', emoji: '👧' },
  { id: 'mary', name: 'Mary', desc: 'Cô bé tóc vàng cài nơ đỏ đáng yêu', emoji: '👱‍♀️' },
  { id: 'minh', name: 'Minh', desc: 'Cậu bé lanh lợi yêu động vật', emoji: '👦' },
  { id: 'bill', name: 'Bill', desc: 'Cậu bé tóc xoăn vàng hào hứng', emoji: '🧒' },
  { id: 'linh', name: 'Linh', desc: 'Cô bé tóc ngắn thích vẽ tranh', emoji: '👧' },
  { id: 'mshoa', name: 'Ms Hoa', desc: 'Cô giáo tiếng Anh thân thiện', emoji: '👩‍🏫' },
  { id: 'mrlong', name: 'Mr Long', desc: 'Thầy giáo đeo kính ân cần', emoji: '👨‍🏫' },
];
