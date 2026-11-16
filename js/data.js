/**
 * נְתוּנֵי 12 הַפְּעִילוּיוֹת בָּאֲפְּלִיקַצְיָה: "לוֹמְדִים לִקְרֹא - הַכָּרַת תְּנוּעַת חִירִיק"
 * הוֹרָאָה בַּהֲנָעָה - מִשֻּׁלְחָנָהּ שֶׁל הַמּוֹרָה זִינוֹבִי אִינָה
 */

// 1. פְּעִילוּת 1: הַכָּרַת 23 הַצֵּרוּפִים בִּתְנוּעַת חִירִיק
const ACT1_SYLLABLES = [
  { id: 's1', pair: 'תִ = תִי', short: 'תִ', long: 'תִי', speakText: 'תִּי', word: 'תִּינוֹק', desc: 'צִיּוּר שֶׁל תִּינוֹק', img: 'tinok' },
  { id: 's2', pair: 'שִׁ = שִׁי', short: 'שִׁ', long: 'שִׁי', speakText: 'שִׁי', word: 'שִׁנַּיִם', desc: 'צִיּוּר שֶׁל שִׁנַּיִם', img: 'shinayim' },
  { id: 's3', pair: 'אִ = אִי', short: 'אִ', long: 'אִי', speakText: 'אִי', word: 'אִמָּא', desc: 'צִיּוּר שֶׁל אִמָּא', img: 'ima' },
  { id: 's4', pair: 'גִ = גִי', short: 'גִ', long: 'גִי', speakText: 'גִּי', word: 'גִּיטָרָה', desc: 'צִיּוּר שֶׁל גִּיטָרָה', img: 'gitara' },
  { id: 's5', pair: 'חִ = חִי', short: 'חִ', long: 'חִי', speakText: 'חִי', word: 'חִפּוּשִׁית פָּרַת מֹשֶׁה רַבֵּנוּ', desc: 'צִיּוּר שֶׁל חִפּוּשִׁית פָּרַת מֹשֶׁה רַבֵּנוּ', img: 'chipushit' },
  { id: 's6', pair: 'קִ = קִי', short: 'קִ', long: 'קִי', speakText: 'קִי', word: 'קִפּוֹד', desc: 'צִיּוּר שֶׁל קִפּוֹד', img: 'kipod' },
  { id: 's7', pair: 'סִ = סִי', short: 'סִ', long: 'סִי', speakText: 'סִי', word: 'סִירָה', desc: 'צִיּוּר שֶׁל סִירָה', img: 'sira' },
  { id: 's8', pair: 'בִּ = בִּי', short: 'בִּ', long: 'בִּי', speakText: 'בִּי', word: 'בִּנְיָן גָּבוֹהַּ', desc: 'צִיּוּר שֶׁל בִּנְיָן גָּבוֹהַּ', img: 'binyan' },
  { id: 's9', pair: 'דִ = דִי', short: 'דִ', long: 'דִי', speakText: 'דִּי', word: 'דִּמְעָה', desc: 'צִיּוּר שֶׁל דִּמְעָה', img: 'dima' },
  { id: 's10', pair: 'מִ = מִי', short: 'מִ', long: 'מִי', speakText: 'מִי', word: 'מִטְרִיָּה', desc: 'צִיּוּר שֶׁל מִטְרִיָּה', img: 'mitriya' },
  { id: 's11', pair: 'וִ = וִי', short: 'וִ', long: 'וִי', speakText: 'וִי', word: 'וִילוֹן', desc: 'צִיּוּר שֶׁל וִילוֹן', img: 'vilon' },
  { id: 's12', pair: 'יִ = יִי', short: 'יִ', long: 'יִי', speakText: 'יִי', word: 'מַפַּת אֶרֶץ יִשְׂרָאֵל', desc: 'צִיּוּר שֶׁל מַפַּת אֶרֶץ יִשְׂרָאֵל', img: 'israel' },
  { id: 's13', pair: 'פִּ = פִּי', short: 'פִּ', long: 'פִּי', speakText: 'פִּי', word: 'פִּיל', desc: 'צִיּוּר שֶׁל פִּיל', img: 'pil' },
  { id: 's14', pair: 'זִ = זִי', short: 'זִ', long: 'זִי', speakText: 'זִי', word: 'זִיקִית', desc: 'צִיּוּר שֶׁל זִיקִית', img: 'zikit' },
  { id: 's15', pair: 'נִ = נִי', short: 'נִ', long: 'נִי', speakText: 'נִי', word: 'נִצָּן שֶׁל פֶּרַח', desc: 'צִיּוּר שֶׁל נִצָּן שֶׁל פֶּרַח', img: 'nitzan' },
  { id: 's16', pair: 'כִּ = כִּי', short: 'כִּ', long: 'כִּי', speakText: 'כִּי', word: 'כִּנּוֹר', desc: 'צִיּוּר שֶׁל כִּנּוֹר', img: 'kinor' },
  { id: 's17', pair: 'עִ = עִי', short: 'עִ', long: 'עִי', speakText: 'עִי', word: 'עִפָּרוֹן', desc: 'צִיּוּר שֶׁל עִפָּרוֹן', img: 'iparon' },
  { id: 's18', pair: 'לִ = לִי', short: 'לִ', long: 'לִי', speakText: 'לִי', word: 'לִימוֹן', desc: 'צִיּוּר שֶׁל לִימוֹן', img: 'limon' },
  { id: 's19', pair: 'הִ = הִי', short: 'הִ', long: 'הִי', speakText: 'הִי', word: 'הִיפּוֹפּוֹטָם', desc: 'צִיּוּר שֶׁל הִיפּוֹפּוֹטָם', img: 'hipopotam' },
  { id: 's20', pair: 'צִ = צִי', short: 'צִ', long: 'צִי', speakText: 'צִי', word: 'צִנּוֹר הַשְׁקָיָה', desc: 'צִיּוּר שֶׁל צִנּוֹר הַשְׁקָיָה', img: 'tzinor' },
  { id: 's21', pair: 'טִ = טִי', short: 'טִ', long: 'טִי', speakText: 'טִי', word: 'טִפּוֹת גֶּשֶׁם גְּדוֹלוֹת', desc: 'צִיּוּר שֶׁל טִפּוֹת גֶּשֶׁם גְּדוֹלוֹת', img: 'tipot' },
  { id: 's22', pair: 'שִׂ = שִׂי', short: 'שִׂ', long: 'שִׂי', speakText: 'סִי', word: 'שִׂמְלָה', desc: 'צִיּוּר שֶׁל שִׂמְלָה', img: 'simla' },
  { id: 's23', pair: 'רִ = רִי', short: 'רִ', long: 'רִי', speakText: 'רִי', word: 'רִבַּת תּוּת', desc: 'צִיּוּר שֶׁל רִבַּת תּוּת', img: 'riba' }
];

// 2. פְּעִילוּת 2: מָה מַתְחִיל בַּצֵּרוּף? (7 צֵרוּפִים, 3 צִיּוּרִים לְכָל אֶחָד)
const ACT2_QUESTIONS = [
  {
    id: 'a2_1',
    blend: 'גִ / גִי',
    speakBlend: 'גִּי',
    options: [
      { id: 'parpar', label: 'פַּרְפַּר', img: 'parpar', isCorrect: false },
      { id: 'gina', label: 'גִּנָּה', img: 'gina', isCorrect: true },
      { id: 'chasa', label: 'חַסָּה', img: 'chasa', isCorrect: false }
    ]
  },
  {
    id: 'a2_2',
    blend: 'תִ / תִי',
    speakBlend: 'תִּי',
    options: [
      { id: 'tinok', label: 'תִּינוֹק', img: 'tinok', isCorrect: true },
      { id: 'kadur', label: 'כַּדּוּר', img: 'kadur', isCorrect: false },
      { id: 'banana', label: 'בָּנָנָה', img: 'banana', isCorrect: false }
    ]
  },
  {
    id: 'a2_3',
    blend: 'רִ / רִי',
    speakBlend: 'רִי',
    options: [
      { id: 'gezer', label: 'גֶּזֶר', img: 'gezer', isCorrect: false },
      { id: 'shemesh', label: 'שֶׁמֶשׁ', img: 'shemesh', isCorrect: false },
      { id: 'riba', label: 'רִבַּת תּוּת', img: 'riba', isCorrect: true }
    ]
  },
  {
    id: 'a2_4',
    blend: 'זִ / זִי',
    speakBlend: 'זִי',
    options: [
      { id: 'kelev', label: 'כֶּלֶב', img: 'kelev', isCorrect: false },
      { id: 'zikit', label: 'זִיקִית', img: 'zikit', isCorrect: true },
      { id: 'tapuach', label: 'תַּפּוּחַ', img: 'tapuach', isCorrect: false }
    ]
  },
  {
    id: 'a2_5',
    blend: 'סִ / סִי',
    speakBlend: 'סִי',
    options: [
      { id: 'sira', label: 'סִירָה', img: 'sira', isCorrect: true },
      { id: 'oto', label: 'אוֹטוֹ', img: 'oto', isCorrect: false },
      { id: 'etz', label: 'עֵץ', img: 'etz', isCorrect: false }
    ]
  },
  {
    id: 'a2_6',
    blend: 'עִ / עִי',
    speakBlend: 'עִי',
    options: [
      { id: 'sefer', label: 'סֵפֶר', img: 'sefer', isCorrect: false },
      { id: 'kova', label: 'כּוֹבַע', img: 'kova', isCorrect: false },
      { id: 'iparon', label: 'עִפָּרוֹן', img: 'iparon', isCorrect: true }
    ]
  },
  {
    id: 'a2_7',
    blend: 'וִ / וִי',
    speakBlend: 'וִי',
    options: [
      { id: 'shulchan', label: 'שֻׁלְחָן', img: 'shulchan', isCorrect: false },
      { id: 'vilon', label: 'וִילוֹן', img: 'vilon', isCorrect: true },
      { id: 'balon', label: 'בָּלוֹן', img: 'balon', isCorrect: false }
    ]
  }
];

// 3. פְּעִילוּת 3: אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה הַכְּתוּבָה? (7 מילים, 2 ציורים לכל מילה)
const ACT3_QUESTIONS = [
  {
    id: 'a3_1',
    word: 'קִרְקָס',
    options: [
      { id: 'kirkas', label: 'קִרְקָס', img: 'kirkas', isCorrect: true },
      { id: 'bayit', label: 'בַּיִת', img: 'bayit', isCorrect: false }
    ]
  },
  {
    id: 'a3_2',
    word: 'חִטָּה',
    options: [
      { id: 'perach', label: 'פֶּרַח', img: 'perach', isCorrect: false },
      { id: 'chita', label: 'חִטָּה', img: 'chita', isCorrect: true }
    ]
  },
  {
    id: 'a3_3',
    word: 'שִׁמְשִׁיָּה',
    options: [
      { id: 'shimshiya', label: 'שִׁמְשִׁיָּה', img: 'shimshiya', isCorrect: true },
      { id: 'kise', label: 'כִּסֵּא', img: 'kise', isCorrect: false }
    ]
  },
  {
    id: 'a3_4',
    word: 'כִּתָּה',
    options: [
      { id: 'gina', label: 'גִּנָּה', img: 'gina', isCorrect: false },
      { id: 'kita', label: 'כִּתָּה', img: 'kita', isCorrect: true }
    ]
  },
  {
    id: 'a3_5',
    word: 'פִּיצָה',
    options: [
      { id: 'pitza', label: 'פִּיצָה', img: 'pitza', isCorrect: true },
      { id: 'glida', label: 'גְּלִידָה', img: 'glida', isCorrect: false }
    ]
  },
  {
    id: 'a3_6',
    word: 'לִוְיָתָן',
    options: [
      { id: 'dag', label: 'דָּג', img: 'dag', isCorrect: false },
      { id: 'livyatan', label: 'לִוְיָתָן', img: 'livyatan', isCorrect: true }
    ]
  },
  {
    id: 'a3_7',
    word: 'מִטְפַּחַת',
    options: [
      { id: 'mitpachat', label: 'מִטְפַּחַת', img: 'mitpachat', isCorrect: true },
      { id: 'kova', label: 'כּוֹבַע', img: 'kova', isCorrect: false }
    ]
  }
];

// 4. פְּעִילוּת 4: מִלָּה חֲסֵרָה בַּמִּשְׁפָּט (בתנועות קמץ-פתח ושווא + המילה החסרה בחיריק)
const ACT4_SENTENCES = [
  {
    id: 'a4_1',
    before: 'אַבָּא שָׂם מָרָק חַם בַּ',
    after: '.',
    correct: 'סִיר',
    options: ['סִיר', 'קִיר'],
    img: 'sir'
  },
  {
    id: 'a4_2',
    before: 'בַּגַּן רָאָה דָּן ',
    after: ' עֲנָק.',
    correct: 'פִּיל',
    options: ['תִּיק', 'פִּיל'],
    img: 'pil'
  },
  {
    id: 'a4_3',
    before: 'סָבָא שָׁתַל הֲדַס בַּ',
    after: '.',
    correct: 'גִּנָּה',
    options: ['גִּנָּה', 'כִּתָּה'],
    img: 'gina'
  },
  {
    id: 'a4_4',
    before: 'תָּמָר לָקְחָה ',
    after: ' חָדָשׁ לַגַּן.',
    correct: 'תִּיק',
    options: ['סִיר', 'תִּיק'],
    img: 'tik'
  },
  {
    id: 'a4_5',
    before: 'אַבָּא תָּלָה מַפָּה עַל הַ',
    after: '.',
    correct: 'קִיר',
    options: ['קִיר', 'פִּיל'],
    img: 'kir'
  },
  {
    id: 'a4_6',
    before: 'הַיַּלְדָּה יָשְׁבָה וְלָמְדָה בַּ',
    after: '.',
    correct: 'כִּתָּה',
    options: ['גִּנָּה', 'כִּתָּה'],
    img: 'kita'
  },
  {
    id: 'a4_7',
    before: 'גַּל אָכַל ',
    after: ' חַם בַּגַּן.',
    correct: 'תִּירָס',
    options: ['תִּירָס', 'קִיר'],
    img: 'tiras'
  }
];

// 5. פְּעִילוּת 5: תְּנוּעַת חִירִיק בְּאֶמְצַע הַמִּלָּה (7 צרופים, 3 ציורים לכל אחד)
const ACT5_QUESTIONS = [
  {
    id: 'a5_1',
    blend: 'בִ / בִי',
    speakBlend: 'וִי',
    targetWord: 'עַכָּבִישׁ',
    options: [
      { id: 'akavish', label: 'עַכָּבִישׁ', img: 'akavish', isCorrect: true },
      { id: 'parpar', label: 'פַּרְפַּר', img: 'parpar', isCorrect: false },
      { id: 'dag', label: 'דָּג', img: 'dag', isCorrect: false }
    ]
  },
  {
    id: 'a5_2',
    blend: 'וִ / וִי',
    speakBlend: 'וִי',
    targetWord: 'תָּוִים (שֶׁל נְגִינָה)',
    options: [
      { id: 'kova', label: 'כּוֹבַע', img: 'kova', isCorrect: false },
      { id: 'tavim', label: 'תָּוִים (שֶׁל נְגִינָה)', img: 'tavim', isCorrect: true },
      { id: 'tapuach', label: 'תַּפּוּחַ', img: 'tapuach', isCorrect: false }
    ]
  },
  {
    id: 'a5_3',
    blend: 'יִ / יִי',
    speakBlend: 'יִי',
    targetWord: 'בַּיִת',
    options: [
      { id: 'etz', label: 'עֵץ', img: 'etz', isCorrect: false },
      { id: 'kadur', label: 'כַּדּוּר', img: 'kadur', isCorrect: false },
      { id: 'bayit', label: 'בַּיִת', img: 'bayit', isCorrect: true }
    ]
  },
  {
    id: 'a5_4',
    blend: 'אִ / אִי',
    speakBlend: 'אִי',
    targetWord: 'חֲצָאִית',
    options: [
      { id: 'chatzait', label: 'חֲצָאִית', img: 'chatzait', isCorrect: true },
      { id: 'michnasayim', label: 'מִכְנָסַיִם', img: 'michnasayim', isCorrect: false },
      { id: 'naal', label: 'נַעַל', img: 'naal', isCorrect: false }
    ]
  },
  {
    id: 'a5_5',
    blend: 'עִ / עִי',
    speakBlend: 'עִי',
    targetWord: 'מְעִיל',
    options: [
      { id: 'shaon', label: 'שָׁעוֹן', img: 'shaon', isCorrect: false },
      { id: 'meil', label: 'מְעִיל', img: 'meil', isCorrect: true },
      { id: 'shulchan', label: 'שֻׁלְחָן', img: 'shulchan', isCorrect: false }
    ]
  },
  {
    id: 'a5_6',
    blend: 'פִ / פִי',
    speakBlend: 'פִי',
    targetWord: 'צְדָפִים',
    options: [
      { id: 'kochav', label: 'כּוֹכָב', img: 'kochav', isCorrect: false },
      { id: 'banana', label: 'בָּנָנָה', img: 'banana', isCorrect: false },
      { id: 'tzdafim', label: 'צְדָפִים', img: 'tzdafim', isCorrect: true }
    ]
  },
  {
    id: 'a5_7',
    blend: 'שִׂ / שִׂי',
    speakBlend: 'סִי',
    targetWord: 'כְּבָשִׂים',
    options: [
      { id: 'kvasim', label: 'כְּבָשִׂים', img: 'kvasim', isCorrect: true },
      { id: 'chatul', label: 'חָתוּל', img: 'chatul', isCorrect: false },
      { id: 'gezer', label: 'גֶּזֶר', img: 'gezer', isCorrect: false }
    ]
  }
];

// 6. פְּעִילוּת 6: אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה הַכְּתוּבָה? (חיריק באמצע מילה - 7 מילים, 2 ציורים)
const ACT6_QUESTIONS = [
  {
    id: 'a6_1',
    word: 'צָעִיף',
    options: [
      { id: 'tzaif', label: 'צָעִיף', img: 'tzaif', isCorrect: true },
      { id: 'kova', label: 'כּוֹבַע', img: 'kova', isCorrect: false }
    ]
  },
  {
    id: 'a6_2',
    word: 'יַיִן',
    options: [
      { id: 'glida', label: 'גְּלִידָה', img: 'glida', isCorrect: false },
      { id: 'yayin', label: 'יַיִן', img: 'yayin', isCorrect: true }
    ]
  },
  {
    id: 'a6_3',
    word: 'חֲצָאִית',
    options: [
      { id: 'chatzait', label: 'חֲצָאִית', img: 'chatzait', isCorrect: true },
      { id: 'michnasayim', label: 'מִכְנָסַיִם', img: 'michnasayim', isCorrect: false }
    ]
  },
  {
    id: 'a6_4',
    word: 'פִּטְרִיָּה',
    options: [
      { id: 'etz', label: 'עֵץ', img: 'etz', isCorrect: false },
      { id: 'pitriya', label: 'פִּטְרִיָּה', img: 'pitriya', isCorrect: true }
    ]
  },
  {
    id: 'a6_5',
    word: 'מַעֲלִית',
    options: [
      { id: 'maalit', label: 'מַעֲלִית', img: 'maalit', isCorrect: true },
      { id: 'oto', label: 'אוֹטוֹ', img: 'oto', isCorrect: false }
    ]
  },
  {
    id: 'a6_6',
    word: 'חֲבִיתָה',
    options: [
      { id: 'banana', label: 'בָּנָנָה', img: 'banana', isCorrect: false },
      { id: 'chavita', label: 'חֲבִיתָה', img: 'chavita', isCorrect: true }
    ]
  },
  {
    id: 'a6_7',
    word: 'עַגְבָנִיָּה',
    options: [
      { id: 'agvaniya', label: 'עַגְבָנִיָּה', img: 'agvaniya', isCorrect: true },
      { id: 'gezer', label: 'גֶּזֶר', img: 'gezer', isCorrect: false }
    ]
  }
];

// 7. פְּעִילוּת 7: מִלָּה חֲסֵרָה בַּמִּשְׁפָּט (עָצִיץ, כַּפִּית, מְעִיל, עֲנִיבָה, גְּבִינָה, מַשָּׂאִית, גְּלִידָה)
const ACT7_SENTENCES = [
  {
    id: 'a7_1',
    before: 'דָּנָה שָׂמָה ',
    after: ' קָטָן בַּגַּן.',
    correct: 'עָצִיץ',
    options: ['עָצִיץ', 'מְעִיל'],
    img: 'atzitz'
  },
  {
    id: 'a7_2',
    before: 'דָּן אָכַל מָרָק חַם בְּ',
    after: '.',
    correct: 'כַּפִּית',
    options: ['מַשָּׂאִית', 'כַּפִּית'],
    img: 'kapit'
  },
  {
    id: 'a7_3',
    before: 'חָנָן לָבַשׁ ',
    after: ' חַם וְרַךְ.',
    correct: 'מְעִיל',
    options: ['מְעִיל', 'עָצִיץ'],
    img: 'meil'
  },
  {
    id: 'a7_4',
    before: 'סָבָא לָבַשׁ ',
    after: ' חֲדָשָׁה לַחַג.',
    correct: 'עֲנִיבָה',
    options: ['גְּבִינָה', 'עֲנִיבָה'],
    img: 'aniva'
  },
  {
    id: 'a7_5',
    before: 'הָעַכְבָּר אָכַל ',
    after: ' לְבָנָה.',
    correct: 'גְּבִינָה',
    options: ['גְּבִינָה', 'עֲנִיבָה'],
    img: 'gvina'
  },
  {
    id: 'a7_6',
    before: 'עַל הַכְּבִישׁ נָסְעָה ',
    after: ' רְחָבָה.',
    correct: 'מַשָּׂאִית',
    options: ['כַּפִּית', 'מַשָּׂאִית'],
    img: 'masait'
  },
  {
    id: 'a7_7',
    before: 'בַּשַּׁבָּת אָכְלָה מָאיָה ',
    after: ' קָרָה.',
    correct: 'גְּלִידָה',
    options: ['גְּלִידָה', 'מַשָּׂאִית'],
    img: 'glida'
  }
];

// 8. פְּעִילוּת 8: אֵיזֶה מִשְׁפָּט מַתְאִים לְצִיּוּר? (5 ציורים שונים, 2 משפטים לכל ציור)
const ACT8_ITEMS = [
  {
    id: 'a8_1',
    img: 'scene_michal',
    options: [
      { text: 'מִיכַל לָקְחָה תִּיק קָטָן לַכִּתָּה.', isCorrect: true },
      { text: 'מִיכַל אָכְלָה פִּיצָה חַמָּה בַּגִּנָּה.', isCorrect: false }
    ]
  },
  {
    id: 'a8_2',
    img: 'scene_yaniv',
    options: [
      { text: 'יָנִיב שָׁט בְּסִירָה בַּיָּם.', isCorrect: false },
      { text: 'יָנִיב פָּתַח אֶת הַמִּטְרִיָּה בַּגִּנָּה.', isCorrect: true }
    ]
  },
  {
    id: 'a8_3',
    img: 'scene_sagi',
    options: [
      { text: 'שָׂגִיא קָנָה מַגָּפַיִם חֲדָשִׁים.', isCorrect: true },
      { text: 'שָׂגִיא צִיֵּר חִפּוּשִׁית בְּעִפָּרוֹן.', isCorrect: false }
    ]
  },
  {
    id: 'a8_4',
    img: 'scene_kivsa',
    options: [
      { text: 'הַכִּבְשָׂה לָבְשָׁה מְעִיל וְצָעִיף.', isCorrect: false },
      { text: 'הַכִּבְשָׂה אָכְלָה תִּירָס וְעַגְבָנִיָּה.', isCorrect: true }
    ]
  },
  {
    id: 'a8_5',
    img: 'scene_alin_dani',
    options: [
      { text: 'אָלִין נִגְּנָה בְּגִיטָרָה וְדָנִי שָׁר שִׁיר.', isCorrect: true },
      { text: 'אָלִין וְדָנִי טָסוּ בְּטִיל לַשָּׁמַיִם.', isCorrect: false }
    ]
  }
];

// 9. פְּעִילוּת 9: הַצָּעִיף שֶׁל דְּבִיר + 9 שְׁאֵלוֹת רַב-בְּרֵרָה (3 אפשרויות לכל שאלה)
const ACT9_STORY = {
  title: 'הַצָּעִיף שֶׁל דְּבִיר',
  lines: [
    'סָבְתָא סָרְגָה לִדְבִיר צָעִיף חָדָשׁ.',
    'דְּבִיר אָהַב אֶת הַצָּעִיף הֶחָדָשׁ.',
    'דְּבִיר לָקַח אֶת הַצָּעִיף הֶחָדָשׁ לַכִּתָּה.',
    'דְּבִיר חָזַר הַבַּיְתָה.',
    'אִמָּא שָׁאֲלָה:',
    'דְּבִיר מָה קָרָה לַצָּעִיף הֶחָדָשׁ שֶׁסָּבְתָא סָרְגָה לְךָ?',
    'דְּבִיר הִבִּיט וְלֹא מָצָא אֶת הַצָּעִיף הֶחָדָשׁ.',
    'אָמַר דְּבִיר לְאִמָּא:',
    'אִמָּא שָׁכַחְתִּי אֶת הַצָּעִיף בַּכִּתָּה!',
    'חָזַר דְּבִיר לַכִּתָּה וּמָצָא אֶת הַצָּעִיף הֶחָדָשׁ',
    'עַל הַוָּו בַּכְּנִיסָה לַכִּתָּה.',
    'לָקַח דְּבִיר אֶת הַצָּעִיף וְחָזַר בְּשִׂמְחָה הַבַּיְתָה.',
    'אָמַר דְּבִיר לְאִמָּא: הַצָּעִיף הֶחָדָשׁ חָזַר!'
  ],
  questions: [
    {
      id: 'q9_1',
      q: '1. מִי סָרְגָה לִדְבִיר צָעִיף חָדָשׁ?',
      options: ['סָבְתָא', 'אִמָּא', 'הַמּוֹרָה'],
      correctIndex: 0
    },
    {
      id: 'q9_2',
      q: '2. מָה סָרְגָה סָבְתָא לִדְבִיר?',
      options: ['מְעִיל חָדָשׁ', 'צָעִיף חָדָשׁ', 'כּוֹבַע חָדָשׁ'],
      correctIndex: 1
    },
    {
      id: 'q9_3',
      q: '3. אֵיךְ הִרְגִּישׁ דְּבִיר כְּשֶׁקִּבֵּל אֶת הַצָּעִיף?',
      options: ['הוּא כָּעַס', 'הוּא בָּכָה', 'הוּא אָהַב אֶת הַצָּעִיף הֶחָדָשׁ'],
      correctIndex: 2
    },
    {
      id: 'q9_4',
      q: '4. לְאָן לָקַח דְּבִיר אֶת הַצָּעִיף הֶחָדָשׁ?',
      options: ['לַכִּתָּה', 'לַגִּנָּה', 'לַיָּם'],
      correctIndex: 0
    },
    {
      id: 'q9_5',
      q: '5. מִי שָׁאֲלָה אֶת דְּבִיר מָה קָרָה לַצָּעִיף?',
      options: ['סָבְתָא', 'אִמָּא', 'דָּנִי'],
      correctIndex: 1
    },
    {
      id: 'q9_6',
      q: '6. מָה גִּלָּה דְּבִיר כְּשֶׁהִבִּיט וְחִפֵּשׂ אֶת הַצָּעִיף בַּבַּיִת?',
      options: ['שֶׁהַצָּעִיף בַּתִּיק', 'שֶׁהַצָּעִיף בַּמִּטָּה', 'שֶׁהוּא לֹא מָצָא אֶת הַצָּעִיף הֶחָדָשׁ'],
      correctIndex: 2
    },
    {
      id: 'q9_7',
      q: '7. הֵיכָן שָׁכַח דְּבִיר אֶת הַצָּעִיף?',
      options: ['בַּכִּתָּה', 'בַּמַּעֲלִית', 'בַּקִּרְקָס'],
      correctIndex: 0
    },
    {
      id: 'q9_8',
      q: '8. הֵיכָן מָצָא דְּבִיר אֶת הַצָּעִיף הֶחָדָשׁ כְּשֶׁחָזַר לַכִּתָּה?',
      options: ['מִתַּחַת לַשֻּׁלְחָן', 'עַל הַוָּו בַּכְּנִיסָה לַכִּתָּה', 'בְּתוֹךְ הַסִּיר'],
      correctIndex: 1
    },
    {
      id: 'q9_9',
      q: '9. אֵיךְ חָזַר דְּבִיר הַבַּיְתָה עִם הַצָּעִיף?',
      options: ['בְּשִׂמְחָה', 'בְּעֶצֶב', 'בְּכַעַס'],
      correctIndex: 0
    }
  ]
};

// 10. פְּעִילוּת 10: מִשְׂחַק דּוֹמִינוֹ מִלִּים בִּתְנוּעַת חִירִיק (11 קוביות דומינו בשרשרת)
// כל קובייה: rightImg (ציור שמתאים למילה הקודמת) | leftWord (המילה הבאה בשרשרת)
const ACT10_DOMINO_CHAIN = [
  { id: 'dom_1', rightImg: 'tinok', rightLabel: 'תִּינוֹק', leftWord: 'פִּיל', nextMatchImg: 'pil' },
  { id: 'dom_2', rightImg: 'pil', rightLabel: 'פִּיל', leftWord: 'סִירָה', nextMatchImg: 'sira' },
  { id: 'dom_3', rightImg: 'sira', rightLabel: 'סִירָה', leftWord: 'מִטְרִיָּה', nextMatchImg: 'mitriya' },
  { id: 'dom_4', rightImg: 'mitriya', rightLabel: 'מִטְרִיָּה', leftWord: 'תִּירָס', nextMatchImg: 'tiras' },
  { id: 'dom_5', rightImg: 'tiras', rightLabel: 'תִּירָס', leftWord: 'גִּיטָרָה', nextMatchImg: 'gitara' },
  { id: 'dom_6', rightImg: 'gitara', rightLabel: 'גִּיטָרָה', leftWord: 'זִקִּית', nextMatchImg: 'zikit' },
  { id: 'dom_7', rightImg: 'zikit', rightLabel: 'זִקִּית', leftWord: 'תִּיק', nextMatchImg: 'tik' },
  { id: 'dom_8', rightImg: 'tik', rightLabel: 'תִּיק', leftWord: 'פִּיצָה', nextMatchImg: 'pitza' },
  { id: 'dom_9', rightImg: 'pitza', rightLabel: 'פִּיצָה', leftWord: 'רִבָּה', nextMatchImg: 'riba' },
  { id: 'dom_10', rightImg: 'riba', rightLabel: 'רִבָּה', leftWord: 'צָעִיף', nextMatchImg: 'tzaif' },
  { id: 'dom_11', rightImg: 'tzaif', rightLabel: 'צָעִיף', leftWord: '🏁 סִיּוּם!', nextMatchImg: null }
];

// 11. פְּעִילוּת 11: מִשְׂחַק זִכָּרוֹן מִלִּים וְצִיּוּרִים בִּתְנוּעַת חִירִיק (18 קְלָפִים = 9 זוּגוֹת)
const ACT11_MEMORY_PAIRS = [
  { pairId: 'm1', word: 'פִּיל', img: 'pil' },
  { pairId: 'm2', word: 'סִירָה', img: 'sira' },
  { pairId: 'm3', word: 'מִטְרִיָּה', img: 'mitriya' },
  { pairId: 'm4', word: 'גִּיטָרָה', img: 'gitara' },
  { pairId: 'm5', word: 'עֲגִיל', img: 'agil' },
  { pairId: 'm6', word: 'חָצִיל', img: 'chatzil' },
  { pairId: 'm7', word: 'דַּחְלִיל', img: 'dachlil' },
  { pairId: 'm8', word: 'תַּנִּין', img: 'tanin' },
  { pairId: 'm9', word: 'מַיִם', img: 'mayim' }
];

// 12. פְּעִילוּת 12: 7 תִּפְזוֹרוֹת נִפְרָדוֹת וְקַלּוֹת מְאֹד (גִיר, טִיל, מִטָּה, כִּתָּה, מַפִּית, חָלִיל, שְׁבִיל)
// בכל תפזורת המילה מופיעה מספר פעמים מוגדר, התלמיד יכול לסמן את המילים ולכתוב כמה פעמים נמצאה המילה!
const ACT12_WORDSEARCHES = [
  {
    id: 'ws_1',
    word: 'גִּיר',
    plainWord: 'גיר',
    img: 'gir',
    correctCount: 3,
    grid: [
      ['גִּ', 'י', 'ר', 'א', 'ב'],
      ['ד', 'ה', 'גִּ', 'י', 'ר'],
      ['מ', 'ס', 'פ', 'צ', 'ק'],
      ['גִּ', 'י', 'ר', 'ת', 'ש'],
      ['ל', 'נ', 'ע', 'כ', 'ח']
    ],
    // מיקומי המילים לצורך סימון בלחיצה (שורה, עמודה התחלה-סוף)
    occurrences: [
      [[0,0],[0,1],[0,2]],
      [[1,2],[1,3],[1,4]],
      [[3,0],[3,1],[3,2]]
    ]
  },
  {
    id: 'ws_2',
    word: 'טִיל',
    plainWord: 'טיל',
    img: 'til',
    correctCount: 4,
    grid: [
      ['טִ', 'י', 'ל', 'מ', 'נ'],
      ['א', 'טִ', 'י', 'ל', 'ס'],
      ['ג', 'ד', 'טִ', 'י', 'ל'],
      ['כ', 'ע', 'פ', 'צ', 'ק'],
      ['טִ', 'י', 'ל', 'ר', 'ש']
    ],
    occurrences: [
      [[0,0],[0,1],[0,2]],
      [[1,1],[1,2],[1,3]],
      [[2,2],[2,3],[2,4]],
      [[4,0],[4,1],[4,2]]
    ]
  },
  {
    id: 'ws_3',
    word: 'מִטָּה',
    plainWord: 'מטה',
    img: 'mita',
    correctCount: 3,
    grid: [
      ['מִ', 'טָּ', 'ה', 'א', 'ב'],
      ['ג', 'ד', 'כ', 'ל', 'נ'],
      ['ס', 'מִ', 'טָּ', 'ה', 'פ'],
      ['צ', 'ק', 'ר', 'ש', 'ת'],
      ['מִ', 'טָּ', 'ה', 'ו', 'ז']
    ],
    occurrences: [
      [[0,0],[0,1],[0,2]],
      [[2,1],[2,2],[2,3]],
      [[4,0],[4,1],[4,2]]
    ]
  },
  {
    id: 'ws_4',
    word: 'כִּתָּה',
    plainWord: 'כתה',
    img: 'kita',
    correctCount: 2,
    grid: [
      ['א', 'כִּ', 'תָּ', 'ה', 'ב'],
      ['ג', 'ד', 'ל', 'מ', 'נ'],
      ['ס', 'ע', 'פ', 'צ', 'ק'],
      ['כִּ', 'תָּ', 'ה', 'ר', 'ש'],
      ['ו', 'ז', 'ח', 'ט', 'י']
    ],
    occurrences: [
      [[0,1],[0,2],[0,3]],
      [[3,0],[3,1],[3,2]]
    ]
  },
  {
    id: 'ws_5',
    word: 'מַפִּית',
    plainWord: 'מפית',
    img: 'mapit',
    correctCount: 3,
    grid: [
      ['מַ', 'פִּ', 'י', 'ת', 'א'],
      ['ב', 'ג', 'ד', 'ה', 'ו'],
      ['ז', 'מַ', 'פִּ', 'י', 'ת'],
      ['ח', 'ט', 'כ', 'ל', 'נ'],
      ['מַ', 'פִּ', 'י', 'ת', 'ס']
    ],
    occurrences: [
      [[0,0],[0,1],[0,2],[0,3]],
      [[2,1],[2,2],[2,3],[2,4]],
      [[4,0],[4,1],[4,2],[4,3]]
    ]
  },
  {
    id: 'ws_6',
    word: 'חָלִיל',
    plainWord: 'חליל',
    img: 'chalil',
    correctCount: 4,
    grid: [
      ['חָ', 'לִ', 'י', 'ל', 'א'],
      ['ב', 'חָ', 'לִ', 'י', 'ל'],
      ['ג', 'ד', 'ה', 'ו', 'ז'],
      ['חָ', 'לִ', 'י', 'ל', 'ט'],
      ['כ', 'חָ', 'לִ', 'י', 'ל']
    ],
    occurrences: [
      [[0,0],[0,1],[0,2],[0,3]],
      [[1,1],[1,2],[1,3],[1,4]],
      [[3,0],[3,1],[3,2],[3,3]],
      [[4,1],[4,2],[4,3],[4,4]]
    ]
  },
  {
    id: 'ws_7',
    word: 'שְׁבִיל',
    plainWord: 'שביל',
    img: 'shvil',
    correctCount: 3,
    grid: [
      ['א', 'שְׁ', 'בִ', 'י', 'ל'],
      ['ג', 'ד', 'ה', 'ו', 'ז'],
      ['שְׁ', 'בִ', 'י', 'ל', 'ח'],
      ['ט', 'כ', 'מ', 'נ', 'ס'],
      ['ע', 'שְׁ', 'בִ', 'י', 'ל']
    ],
    occurrences: [
      [[0,1],[0,2],[0,3],[0,4]],
      [[2,0],[2,1],[2,2],[2,3]],
      [[4,1],[4,2],[4,3],[4,4]]
    ]
  }
];
