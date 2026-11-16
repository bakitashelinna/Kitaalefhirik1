/**
 * מַאֲגַר אִיּוּרִים וֶקְטוֹרִיִּים (SVG) אֵיכוּתִיִּים, בְּרוּרִים וּמְדֻיָּקִים לְתַלְמִידֵי כִּתָּה א'
 * הוֹרָאָה בַּהֲנָעָה - מִשֻּׁלְחָנָהּ שֶׁל הַמּוֹרָה זִינוֹבִי אִינָה
 */

const ILLUSTRATIONS = {
  // ==========================================
  // פְּעִילוּת 1: 23 צֵרוּפֵי תְּנוּעַת חִירִיק
  // ==========================================

  // 1. תִ = תִי (תינוק)
  tinok: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <!-- שמיכה/חיתול עוטף -->
    <path d="M35 105 Q70 130 105 105 Q98 85 70 85 Q42 85 35 105 Z" fill="#81D4FA" stroke="#29B6F6" stroke-width="3"/>
    <!-- אוזניים -->
    <circle cx="34" cy="66" r="9" fill="#FFCCBC"/>
    <circle cx="106" cy="66" r="9" fill="#FFCCBC"/>
    <!-- ראש התינוק -->
    <circle cx="70" cy="64" r="34" fill="#FFE0B2" stroke="#FFAB91" stroke-width="2.5"/>
    <!-- תלתל חמוד בראש -->
    <path d="M68 30 Q75 16 82 26 Q76 34 66 32" fill="none" stroke="#6D4C41" stroke-width="4.5" stroke-linecap="round"/>
    <!-- עיניים שמחות -->
    <circle cx="56" cy="60" r="4.5" fill="#3E2723"/>
    <circle cx="84" cy="60" r="4.5" fill="#3E2723"/>
    <circle cx="54.5" cy="58.5" r="1.5" fill="#FFF"/>
    <circle cx="82.5" cy="58.5" r="1.5" fill="#FFF"/>
    <!-- לחיים ורודות -->
    <ellipse cx="48" cy="70" rx="6" ry="4" fill="#FF8A80" opacity="0.6"/>
    <ellipse cx="92" cy="70" rx="6" ry="4" fill="#FF8A80" opacity="0.6"/>
    <!-- מוצץ של תינוק -->
    <ellipse cx="70" cy="77" rx="11" ry="8" fill="#F48FB1" stroke="#EC407A" stroke-width="2"/>
    <circle cx="70" cy="77" r="4.5" fill="#EC407A"/>
    <path d="M62 80 A10 9 0 0 0 78 80" fill="none" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // 2. שִׁ = שִׁי (שיניים)
  shinayim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E0F7FA"/>
    <!-- חיוך רחב עם שיניים לבנות וברורות -->
    <path d="M22 58 Q70 38 118 58 Q106 108 70 108 Q34 108 22 58 Z" fill="#EF5350" stroke="#C62828" stroke-width="4" stroke-linejoin="round"/>
    <!-- שורת שיניים עליונה -->
    <rect x="34" y="54" width="16" height="22" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="52" y="52" width="17" height="25" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="71" y="52" width="17" height="25" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="90" y="54" width="16" height="22" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <!-- שורת שיניים תחתונה -->
    <rect x="42" y="80" width="13" height="18" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="56" y="81" width="13" height="19" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="70" y="81" width="13" height="19" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <rect x="84" y="80" width="13" height="18" rx="4" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <!-- נצנוץ ניקיון -->
    <path d="M108 32 L111 40 L119 43 L111 46 L108 54 L105 46 L97 43 L105 40 Z" fill="#FFD54F"/>
  </svg>`,

  // 3. אִ = אִי (אמא)
  ima: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FCE4EC"/>
    <!-- שיער אמא -->
    <path d="M32 88 Q28 32 70 28 Q112 32 108 88 Q98 96 90 88 L50 88 Q42 96 32 88 Z" fill="#5D4037"/>
    <!-- חולצה וצווארון -->
    <path d="M36 122 Q38 92 70 92 Q102 92 104 122 Z" fill="#EC407A"/>
    <circle cx="70" cy="96" r="14" fill="#FFE0B2"/>
    <!-- שרשרת פנינים -->
    <path d="M55 98 Q70 110 85 98" fill="none" stroke="#FFF9C4" stroke-width="4" stroke-dasharray="2 5" stroke-linecap="round"/>
    <!-- פנים -->
    <circle cx="70" cy="64" r="26" fill="#FFE0B2"/>
    <!-- שיער פוני -->
    <path d="M44 58 Q56 36 72 44 Q88 36 96 58 Q82 46 70 50 Q56 46 44 58 Z" fill="#5D4037"/>
    <!-- עיניים וחיוך חם -->
    <circle cx="60" cy="64" r="3.5" fill="#3E2723"/>
    <circle cx="80" cy="64" r="3.5" fill="#3E2723"/>
    <ellipse cx="53" cy="71" rx="5" ry="3" fill="#F48FB1" opacity="0.6"/>
    <ellipse cx="87" cy="71" rx="5" ry="3" fill="#F48FB1" opacity="0.6"/>
    <path d="M61 75 Q70 83 79 75" fill="none" stroke="#D81B60" stroke-width="3" stroke-linecap="round"/>
    <!-- לב אהבה של אמא -->
    <path d="M110 38 C110 33 103 30 100 35 C97 30 90 33 90 38 C90 45 100 50 100 50 C100 50 110 45 110 38 Z" fill="#E91E63"/>
  </svg>`,

  // 4. גִ = גִי (גיטרה)
  gitara: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <g transform="rotate(-35 70 70)">
      <!-- גוף הגיטרה -->
      <path d="M52 72 C42 72 44 52 56 52 C62 52 64 56 70 56 C76 56 78 52 84 52 C96 52 98 72 88 72 C102 76 104 114 70 114 C36 114 38 76 52 72 Z" fill="#E67E22" stroke="#A04000" stroke-width="3"/>
      <!-- צוואר הגיטרה -->
      <rect x="65" y="14" width="10" height="44" fill="#6E2C00"/>
      <!-- ראש הגיטרה -->
      <rect x="63" y="4" width="14" height="12" rx="3" fill="#A04000"/>
      <!-- פתח תהודה -->
      <circle cx="70" cy="78" r="11" fill="#3E2723" stroke="#F5B041" stroke-width="3"/>
      <!-- גשר -->
      <rect x="58" y="96" width="24" height="5" rx="2" fill="#3E2723"/>
      <!-- מיתרים -->
      <line x1="67" y1="14" x2="67" y2="96" stroke="#FFF" stroke-width="1"/>
      <line x1="70" y1="14" x2="70" y2="96" stroke="#FFF" stroke-width="1"/>
      <line x1="73" y1="14" x2="73" y2="96" stroke="#FFF" stroke-width="1"/>
    </g>
  </svg>`,

  // 5. חִ = חִי (חיפושית פרת משה רבינו)
  chipushit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <!-- רגליים -->
    <g stroke="#212121" stroke-width="4" stroke-linecap="round">
      <line x1="30" y1="58" x2="48" y2="64"/>
      <line x1="26" y1="78" x2="46" y2="78"/>
      <line x1="32" y1="98" x2="48" y2="92"/>
      <line x1="110" y1="58" x2="92" y2="64"/>
      <line x1="114" y1="78" x2="94" y2="78"/>
      <line x1="108" y1="98" x2="92" y2="92"/>
    </g>
    <!-- מחושים -->
    <path d="M62 32 Q52 18 44 22" fill="none" stroke="#212121" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M78 32 Q88 18 96 22" fill="none" stroke="#212121" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="44" cy="22" r="3.5" fill="#212121"/>
    <circle cx="96" cy="22" r="3.5" fill="#212121"/>
    <!-- ראש -->
    <ellipse cx="70" cy="42" rx="18" ry="14" fill="#212121"/>
    <circle cx="63" cy="38" r="3" fill="#FFF"/>
    <circle cx="77" cy="38" r="3" fill="#FFF"/>
    <!-- גוף אדום -->
    <ellipse cx="70" cy="78" rx="32" ry="36" fill="#E53935" stroke="#B71C1C" stroke-width="3"/>
    <line x1="70" y1="42" x2="70" y2="114" stroke="#212121" stroke-width="3"/>
    <!-- נקודות שחורות -->
    <circle cx="55" cy="62" r="5.5" fill="#212121"/>
    <circle cx="85" cy="62" r="5.5" fill="#212121"/>
    <circle cx="50" cy="80" r="6" fill="#212121"/>
    <circle cx="90" cy="80" r="6" fill="#212121"/>
    <circle cx="58" cy="98" r="5" fill="#212121"/>
    <circle cx="82" cy="98" r="5" fill="#212121"/>
    <circle cx="70" cy="72" r="5" fill="#212121"/>
  </svg>`,

  // 6. קִ = קִי (קיפוד)
  kipod: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <!-- קוצים של קיפוד -->
    <polygon points="24,84 18,66 32,68 28,48 44,54 46,36 60,46 70,32 80,46 92,38 94,56 108,52 102,72 112,84" fill="#5D4037" stroke="#3E2723" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- גוף ופנים בהירים -->
    <path d="M32 86 Q32 62 72 62 Q108 62 118 82 Q108 98 70 98 Q32 98 32 86 Z" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2.5"/>
    <!-- אף חמוד ועין -->
    <circle cx="118" cy="81" r="5" fill="#212121"/>
    <circle cx="96" cy="74" r="4" fill="#212121"/>
    <circle cx="95" cy="73" r="1.5" fill="#FFF"/>
    <path d="M98 86 Q105 90 110 85" fill="none" stroke="#5D4037" stroke-width="2.5" stroke-linecap="round"/>
    <!-- רגליים קטנות -->
    <ellipse cx="48" cy="100" rx="7" ry="4" fill="#8D6E63"/>
    <ellipse cx="86" cy="100" rx="7" ry="4" fill="#8D6E63"/>
  </svg>`,

  // 7. סִ = סִי (סירה)
  sira: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- תורן ומפרשים -->
    <line x1="70" y1="22" x2="70" y2="86" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/>
    <polygon points="67,26 32,78 67,78" fill="#FF7043" stroke="#D84315" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="73,32 104,78 73,78" fill="#FFEE58" stroke="#FBC02D" stroke-width="2" stroke-linejoin="round"/>
    <!-- דגלון -->
    <polygon points="70,22 86,27 70,32" fill="#E53935"/>
    <!-- גוף הסירה -->
    <polygon points="26,84 114,84 98,106 42,106" fill="#8D6E63" stroke="#5D4037" stroke-width="3" stroke-linejoin="round"/>
    <!-- גלים כחולים -->
    <path d="M18 106 Q32 98 46 106 T74 106 T102 106 T124 106" fill="none" stroke="#0288D1" stroke-width="5" stroke-linecap="round"/>
  </svg>`,

  // 8. בִּ = בִּי (בניין גבוה)
  binyan: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8EAF6"/>
    <!-- בניין גבוה -->
    <rect x="42" y="18" width="56" height="98" rx="3" fill="#90CAF9" stroke="#1E88E5" stroke-width="3"/>
    <rect x="52" y="10" width="36" height="8" fill="#64B5F6" stroke="#1E88E5" stroke-width="2"/>
    <!-- חלונות בקומות -->
    <g fill="#FFF9C4" stroke="#1976D2" stroke-width="1.5">
      <rect x="50" y="26" width="14" height="12" rx="1"/>
      <rect x="76" y="26" width="14" height="12" rx="1"/>
      <rect x="50" y="44" width="14" height="12" rx="1"/>
      <rect x="76" y="44" width="14" height="12" rx="1"/>
      <rect x="50" y="62" width="14" height="12" rx="1"/>
      <rect x="76" y="62" width="14" height="12" rx="1"/>
      <rect x="50" y="80" width="14" height="12" rx="1"/>
      <rect x="76" y="80" width="14" height="12" rx="1"/>
    </g>
    <!-- דלת כניסה -->
    <rect x="61" y="98" width="18" height="18" rx="2" fill="#5D4037"/>
    <line x1="26" y1="116" x2="114" y2="116" stroke="#78909C" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // 9. דִ = דִי (דמעה)
  dima: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <!-- עין גדולה וברורה -->
    <path d="M24 54 Q70 24 116 54 Q70 84 24 54 Z" fill="#FFFFFF" stroke="#37474F" stroke-width="3.5"/>
    <circle cx="70" cy="54" r="14" fill="#5D4037"/>
    <circle cx="70" cy="54" r="6" fill="#212121"/>
    <circle cx="65" cy="49" r="3.5" fill="#FFFFFF"/>
    <!-- דמעה כחולה גדולה וברורה זולגת מהעין -->
    <path d="M84 68 C84 68 104 92 104 104 A16 16 0 1 1 68 104 C68 92 84 68 84 68 Z" fill="#29B6F6" stroke="#0288D1" stroke-width="3"/>
    <ellipse cx="80" cy="102" rx="4" ry="7" fill="#E1F5FE" transform="rotate(-15 80 102)"/>
  </svg>`,

  // 10. מִ = מִי (מטרייה)
  mitriya: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F3E5F5"/>
    <!-- מוט וידית המטרייה -->
    <line x1="70" y1="22" x2="70" y2="104" stroke="#5D4037" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M70 104 Q70 118 58 118 Q48 118 48 108" fill="none" stroke="#8D6E63" stroke-width="5" stroke-linecap="round"/>
    <!-- חופת המטרייה הצבעונית -->
    <path d="M20 72 C20 34 120 34 120 72 Q103 64 86 72 Q70 64 54 72 Q37 64 20 72 Z" fill="#EC407A" stroke="#AD1457" stroke-width="3" stroke-linejoin="round"/>
    <path d="M54 72 C56 42 70 30 70 30 C70 30 84 42 86 72 Q70 64 54 72 Z" fill="#AB47BC" stroke="#6A1B9A" stroke-width="2"/>
  </svg>`,

  // 11. וִ = וִי (וילון)
  vilon: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFFDE7"/>
    <!-- מסגרת החלון -->
    <rect x="34" y="28" width="72" height="84" fill="#B3E5FC" stroke="#8D6E63" stroke-width="3"/>
    <line x1="70" y1="28" x2="70" y2="112" stroke="#8D6E63" stroke-width="2.5"/>
    <line x1="34" y1="70" x2="106" y2="70" stroke="#8D6E63" stroke-width="2.5"/>
    <!-- מוט הווילון -->
    <line x1="22" y1="26" x2="118" y2="26" stroke="#5D4037" stroke-width="4.5" stroke-linecap="round"/>
    <!-- בד הווילון ימין ושמאל -->
    <path d="M28 26 L62 26 Q56 62 42 76 Q52 96 48 114 L28 114 Z" fill="#FF7043" stroke="#D84315" stroke-width="2.5"/>
    <path d="M112 26 L78 26 Q84 62 98 76 Q88 96 92 114 L112 114 Z" fill="#FF7043" stroke="#D84315" stroke-width="2.5"/>
    <!-- סרטי קשירה -->
    <ellipse cx="38" cy="76" rx="11" ry="4" fill="#FFD54F" stroke="#F57F17" stroke-width="1.5"/>
    <ellipse cx="102" cy="76" rx="11" ry="4" fill="#FFD54F" stroke="#F57F17" stroke-width="1.5"/>
  </svg>`,

  // 12. יִ = יִי (מפת ארץ ישראל)
  israel: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- מפת ארץ ישראל משורטטת בבירור -->
    <path d="M76 14 L86 16 L88 26 L82 32 L80 46 L82 66 L78 82 L68 124 L62 124 L50 86 L46 74 L56 68 L62 48 L68 28 L76 14 Z" fill="#AED581" stroke="#33691E" stroke-width="3" stroke-linejoin="round"/>
    <!-- כנרת וים המלח -->
    <ellipse cx="81" cy="33" rx="3.5" ry="5" fill="#0288D1"/>
    <ellipse cx="78" cy="74" rx="4" ry="9" fill="#0288D1"/>
    <!-- מגן דוד כחול במרכז המפה -->
    <polygon points="68,52 75,64 61,64" fill="none" stroke="#1565C0" stroke-width="2"/>
    <polygon points="68,68 75,56 61,56" fill="none" stroke="#1565C0" stroke-width="2"/>
  </svg>`,

  // 13. פִּ = פִּי (פיל)
  pil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F5F5F5"/>
    <!-- אוזניים גדולות של פיל -->
    <ellipse cx="34" cy="64" rx="20" ry="26" fill="#90A4AE" stroke="#546E7A" stroke-width="2.5"/>
    <ellipse cx="36" cy="64" rx="13" ry="18" fill="#F8BBD0"/>
    <ellipse cx="106" cy="64" rx="20" ry="26" fill="#90A4AE" stroke="#546E7A" stroke-width="2.5"/>
    <ellipse cx="104" cy="64" rx="13" ry="18" fill="#F8BBD0"/>
    <!-- רגליים וגוף -->
    <rect x="44" y="88" width="16" height="26" rx="6" fill="#78909C" stroke="#546E7A" stroke-width="2"/>
    <rect x="80" y="88" width="16" height="26" rx="6" fill="#78909C" stroke="#546E7A" stroke-width="2"/>
    <!-- ראש הפיל -->
    <circle cx="70" cy="64" r="28" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
    <!-- עיניים -->
    <circle cx="58" cy="56" r="4" fill="#263238"/>
    <circle cx="82" cy="56" r="4" fill="#263238"/>
    <circle cx="57" cy="54.5" r="1.5" fill="#FFF"/>
    <circle cx="81" cy="54.5" r="1.5" fill="#FFF"/>
    <!-- חדק ארוך ומורם בשמחה -->
    <path d="M64 66 Q64 102 84 102 Q96 102 96 90 Q96 84 88 86" fill="none" stroke="#90A4AE" stroke-width="11" stroke-linecap="round"/>
    <path d="M64 66 Q64 102 84 102 Q96 102 96 90 Q96 84 88 86" fill="none" stroke="#B0BEC5" stroke-width="7" stroke-linecap="round"/>
  </svg>`,

  // 14. זִ = זִי (זיקית)
  zikit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <!-- ענף עץ -->
    <line x1="16" y1="96" x2="124" y2="90" stroke="#795548" stroke-width="7" stroke-linecap="round"/>
    <!-- זנב מסולסל של זיקית -->
    <path d="M44 82 C20 82 18 112 38 112 C50 112 52 98 40 98 C34 98 34 104 38 104" fill="none" stroke="#689F38" stroke-width="7" stroke-linecap="round"/>
    <!-- גוף הזיקית עם פסים צבעוניים -->
    <path d="M42 84 Q56 44 92 56 L92 86 Z" fill="#8BC34A" stroke="#33691E" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M58 62 L58 84 M70 56 L70 85 M82 58 L82 85" stroke="#FFEB3B" stroke-width="4" stroke-linecap="round"/>
    <!-- ראש ועין גדולה של זיקית -->
    <polygon points="88,52 116,66 112,84 88,84" fill="#7CB342" stroke="#33691E" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="100" cy="68" r="8" fill="#FFF9C4" stroke="#33691E" stroke-width="2"/>
    <circle cx="102" cy="68" r="3.5" fill="#212121"/>
    <!-- רגליים אוחזות בענף -->
    <line x1="54" y1="84" x2="54" y2="95" stroke="#558B2F" stroke-width="5" stroke-linecap="round"/>
    <line x1="84" y1="84" x2="84" y2="93" stroke="#558B2F" stroke-width="5" stroke-linecap="round"/>
  </svg>`,

  // 15. נִ = נִי (ניצן של פרח)
  nitzan: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <!-- גבעול ועלים -->
    <line x1="70" y1="68" x2="70" y2="120" stroke="#43A047" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 102 Q44 94 42 78 Q62 80 70 98 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
    <path d="M70 96 Q96 88 98 72 Q78 74 70 92 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
    <!-- ניצן פרח סגור/נפתח ורוד -->
    <path d="M70 22 C46 38 48 68 70 72 C92 68 94 38 70 22 Z" fill="#EC407A" stroke="#AD1457" stroke-width="2.5"/>
    <path d="M70 22 C60 40 62 64 70 72 C78 64 80 40 70 22 Z" fill="#F48FB1"/>
    <!-- עלי גביע ירוקים העוטפים את הניצן -->
    <path d="M50 54 Q56 74 70 74 Q54 66 50 54 Z" fill="#43A047" stroke="#1B5E20" stroke-width="2"/>
    <path d="M90 54 Q84 74 70 74 Q86 66 90 54 Z" fill="#43A047" stroke="#1B5E20" stroke-width="2"/>
  </svg>`,

  // 16. כִּ = כִּי (כינור)
  kinor: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <g transform="rotate(-30 66 72)">
      <!-- גוף הכינור -->
      <path d="M52 72 C40 70 42 52 54 52 C60 52 62 56 66 56 C70 56 72 52 78 52 C90 52 92 70 80 72 C94 76 96 112 66 112 C36 112 38 76 52 72 Z" fill="#B95827" stroke="#6E2C00" stroke-width="3"/>
      <!-- צוואר ושבלול -->
      <rect x="62" y="18" width="8" height="40" fill="#3E2723"/>
      <circle cx="66" cy="14" r="6" fill="#5D4037"/>
      <!-- פתחי f ומיתרים -->
      <path d="M54 74 Q52 84 56 92" fill="none" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M78 74 Q80 84 76 92" fill="none" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="61,96 71,96 68,110 64,110" fill="#3E2723"/>
      <line x1="64" y1="20" x2="64" y2="96" stroke="#FFF8E1" stroke-width="1"/>
      <line x1="68" y1="20" x2="68" y2="96" stroke="#FFF8E1" stroke-width="1"/>
    </g>
    <!-- קשת הכינור -->
    <line x1="28" y1="92" x2="116" y2="54" stroke="#5D4037" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="30" y1="96" x2="114" y2="58" stroke="#FFF" stroke-width="1.5"/>
  </svg>`,

  // 17. עִ = עִי (עיפרון)
  iparon: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFFDE7"/>
    <g transform="rotate(35 70 70)">
      <!-- מחק ורוד וטבעת מתכת -->
      <rect x="58" y="18" width="24" height="16" rx="5" fill="#F48FB1" stroke="#C2185B" stroke-width="2.5"/>
      <rect x="58" y="30" width="24" height="8" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/>
      <!-- גוף העיפרון הצהוב -->
      <rect x="58" y="38" width="24" height="58" fill="#FFCA28" stroke="#F57F17" stroke-width="2.5"/>
      <line x1="66" y1="38" x2="66" y2="96" stroke="#F57F17" stroke-width="2"/>
      <line x1="74" y1="38" x2="74" y2="96" stroke="#F57F17" stroke-width="2"/>
      <!-- חוד העץ והעופרת -->
      <polygon points="58,96 82,96 70,122" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="65,111 75,111 70,122" fill="#37474F"/>
    </g>
  </svg>`,

  // 18. לִ = לִי (לימון)
  limon: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F9FBE7"/>
    <!-- עלה ירוק -->
    <path d="M72 42 Q94 20 112 32 Q98 52 72 42 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="2.5"/>
    <!-- פרי הלימון הצהוב -->
    <path d="M24 74 Q32 42 70 42 Q108 42 116 74 Q108 106 70 106 Q32 106 24 74 Z" fill="#FFEE58" stroke="#FBC02D" stroke-width="3.5"/>
    <!-- נקודות ברק על קליפת הלימון -->
    <circle cx="52" cy="64" r="2.5" fill="#FBC02D"/>
    <circle cx="64" cy="58" r="2" fill="#FBC02D"/>
    <circle cx="48" cy="76" r="2" fill="#FBC02D"/>
    <path d="M44 56 Q68 48 90 56" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // 19. הִ = הִי (היפופוטם)
  hipopotam: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EDE7F6"/>
    <!-- אוזניים קטנות -->
    <ellipse cx="42" cy="34" rx="8" ry="10" fill="#9575CD" stroke="#5E35B1" stroke-width="2.5"/>
    <ellipse cx="98" cy="34" rx="8" ry="10" fill="#9575CD" stroke="#5E35B1" stroke-width="2.5"/>
    <!-- ראש עליון -->
    <circle cx="70" cy="56" r="28" fill="#B39DDB" stroke="#5E35B1" stroke-width="2.5"/>
    <!-- עיניים -->
    <circle cx="58" cy="48" r="4" fill="#212121"/>
    <circle cx="82" cy="48" r="4" fill="#212121"/>
    <circle cx="57" cy="46.5" r="1.5" fill="#FFF"/>
    <circle cx="81" cy="46.5" r="1.5" fill="#FFF"/>
    <!-- אף רחב וגדול של היפופוטם -->
    <ellipse cx="70" cy="82" rx="38" ry="26" fill="#D1C4E9" stroke="#5E35B1" stroke-width="2.5"/>
    <!-- נחיריים ושיניים קטנות -->
    <ellipse cx="54" cy="74" rx="5" ry="7" fill="#5E35B1"/>
    <ellipse cx="86" cy="74" rx="5" ry="7" fill="#5E35B1"/>
    <path d="M52 94 Q70 102 88 94" fill="none" stroke="#5E35B1" stroke-width="3" stroke-linecap="round"/>
    <rect x="56" y="95" width="7" height="7" rx="2" fill="#FFF"/>
    <rect x="77" y="95" width="7" height="7" rx="2" fill="#FFF"/>
  </svg>`,

  // 20. צִ = צִי (צינור השקייה)
  tzinor: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <!-- סליל צינור השקייה ירוק -->
    <ellipse cx="56" cy="84" rx="28" ry="22" fill="none" stroke="#2E7D32" stroke-width="9"/>
    <ellipse cx="56" cy="84" rx="18" ry="13" fill="none" stroke="#43A047" stroke-width="8"/>
    <path d="M78 72 Q88 52 96 52" fill="none" stroke="#43A047" stroke-width="8" stroke-linecap="round"/>
    <!-- פיית התזה וטיפות מים -->
    <polygon points="94,46 108,42 108,58 94,54" fill="#FFB300" stroke="#EF6C00" stroke-width="2"/>
    <path d="M114 44 L126 36 M114 50 L128 50 M114 56 L126 64" stroke="#29B6F6" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  // 21. טִ = טִי (טיפות גשם גדולות)
  tipot: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- שלוש טיפות גשם גדולות וברורות -->
    <path d="M44 26 C44 26 62 52 62 64 A18 18 0 1 1 26 64 C26 52 44 26 44 26 Z" fill="#29B6F6" stroke="#0288D1" stroke-width="3"/>
    <ellipse cx="38" cy="62" rx="3.5" ry="7" fill="#E1F5FE" transform="rotate(-15 38 62)"/>

    <path d="M96 34 C96 34 114 60 114 72 A18 18 0 1 1 78 72 C78 60 96 34 96 34 Z" fill="#29B6F6" stroke="#0288D1" stroke-width="3"/>
    <ellipse cx="90" cy="70" rx="3.5" ry="7" fill="#E1F5FE" transform="rotate(-15 90 70)"/>

    <path d="M68 68 C68 68 86 94 86 106 A18 18 0 1 1 50 106 C50 94 68 68 68 68 Z" fill="#039BE5" stroke="#01579B" stroke-width="3"/>
    <ellipse cx="62" cy="104" rx="3.5" ry="7" fill="#E1F5FE" transform="rotate(-15 62 104)"/>
  </svg>`,

  // 22. שִׂ = שִׂי (שמלה)
  simla: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FCE4EC"/>
    <!-- שמלה חגיגית ורודה -->
    <path d="M52 28 L88 28 L98 44 L86 50 L82 42 L82 60 L110 112 Q70 120 30 112 L58 60 L58 42 L54 50 L42 44 Z" fill="#EC407A" stroke="#AD1457" stroke-width="3" stroke-linejoin="round"/>
    <!-- צווארון לבן וסרט מותן -->
    <path d="M56 28 Q70 40 84 28" fill="#FFF" stroke="#AD1457" stroke-width="2"/>
    <rect x="57" y="56" width="26" height="7" rx="3" fill="#FFD54F" stroke="#F57F17" stroke-width="1.5"/>
    <!-- נקודות קישוט בחצאית השמלה -->
    <circle cx="56" cy="88" r="3.5" fill="#FFF"/>
    <circle cx="70" cy="96" r="3.5" fill="#FFF"/>
    <circle cx="84" cy="88" r="3.5" fill="#FFF"/>
  </svg>`,

  // 23. רִ = רִי (ריבת תות)
  riba: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFEBEE"/>
    <!-- צנצנת זכוכית מלאה ריבה אדומה -->
    <rect x="40" y="42" width="60" height="72" rx="12" fill="#D32F2F" stroke="#B71C1C" stroke-width="3"/>
    <!-- מכסה בד משובץ -->
    <path d="M36 32 L104 32 L108 46 Q70 52 32 46 Z" fill="#FF8A80" stroke="#C62828" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- תווית עם ציור של תות שדה -->
    <rect x="48" y="60" width="44" height="38" rx="6" fill="#FFF8E1" stroke="#FFA000" stroke-width="2"/>
    <path d="M70 68 C60 68 60 84 70 92 C80 84 80 68 70 68 Z" fill="#E53935"/>
    <path d="M64 68 L70 72 L76 68" fill="none" stroke="#43A047" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // ==========================================
  // אִיּוּרִים נוֹסָפִים לִפְעִילוּיוֹת 2-12
  // ==========================================

  // גינה
  gina: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <circle cx="104" cy="34" r="12" fill="#FFD54F"/>
    <!-- גדר עץ -->
    <g fill="#FFE0B2" stroke="#8D6E63" stroke-width="2">
      <polygon points="28,96 28,62 35,54 42,62 42,96"/>
      <polygon points="50,96 50,62 57,54 64,62 64,96"/>
      <polygon points="72,96 72,62 79,54 86,62 86,96"/>
      <polygon points="94,96 94,62 101,54 108,62 108,96"/>
      <rect x="24" y="72" width="88" height="6"/>
    </g>
    <!-- דשא ופרחים בגינה -->
    <path d="M18 96 Q70 86 122 96 L112 118 L28 118 Z" fill="#66BB6A"/>
    <circle cx="46" cy="86" r="7" fill="#EC407A"/>
    <circle cx="46" cy="86" r="3" fill="#FFEB3B"/>
    <circle cx="88" cy="84" r="7" fill="#AB47BC"/>
    <circle cx="88" cy="84" r="3" fill="#FFEB3B"/>
  </svg>`,

  // פרפר
  parpar: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <ellipse cx="46" cy="54" rx="22" ry="18" fill="#FF7043" stroke="#D84315" stroke-width="2.5"/>
    <ellipse cx="94" cy="54" rx="22" ry="18" fill="#FF7043" stroke="#D84315" stroke-width="2.5"/>
    <ellipse cx="50" cy="86" rx="16" ry="14" fill="#FFA726" stroke="#EF6C00" stroke-width="2.5"/>
    <ellipse cx="90" cy="86" rx="16" ry="14" fill="#FFA726" stroke="#EF6C00" stroke-width="2.5"/>
    <circle cx="44" cy="52" r="6" fill="#FFF59D"/>
    <circle cx="96" cy="52" r="6" fill="#FFF59D"/>
    <ellipse cx="70" cy="70" rx="6" ry="26" fill="#4E342E"/>
    <path d="M67 44 Q58 28 50 30 M73 44 Q82 28 90 30" fill="none" stroke="#4E342E" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // חסה
  chasa: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <path d="M40 96 C22 76 30 42 52 44 C58 28 82 28 88 44 C110 42 118 76 100 96 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="3"/>
    <path d="M50 98 C40 78 46 52 70 48 C94 52 100 78 90 98 Z" fill="#9CCC65" stroke="#558B2F" stroke-width="2.5"/>
    <path d="M70 58 L70 104 M70 76 L56 66 M70 84 L84 72" stroke="#DCEDC8" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // תיק
  tik: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <path d="M56 32 Q70 16 84 32" fill="none" stroke="#1565C0" stroke-width="6" stroke-linecap="round"/>
    <rect x="38" y="34" width="64" height="78" rx="16" fill="#42A5F5" stroke="#1565C0" stroke-width="3"/>
    <path d="M38 56 Q70 68 102 56 L102 46 Q102 34 86 34 L54 34 Q38 34 38 46 Z" fill="#1E88E5" stroke="#0D47A1" stroke-width="2.5"/>
    <rect x="48" y="72" width="44" height="28" rx="8" fill="#FFCA28" stroke="#F57F17" stroke-width="2.5"/>
    <rect x="65" y="56" width="10" height="12" rx="3" fill="#FFD54F" stroke="#F57F17" stroke-width="2"/>
  </svg>`,

  // כדור
  kadur: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <circle cx="70" cy="70" r="42" fill="#FF5252" stroke="#B71C1C" stroke-width="3"/>
    <path d="M32 54 Q70 70 108 54" fill="none" stroke="#FFEB3B" stroke-width="8"/>
    <path d="M32 86 Q70 70 108 86" fill="none" stroke="#29B6F6" stroke-width="8"/>
    <circle cx="70" cy="70" r="10" fill="#FFFFFF" stroke="#37474F" stroke-width="2"/>
  </svg>`,

  // בננה
  banana: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFFDE7"/>
    <path d="M36 96 Q76 112 104 42 Q108 32 100 28 Q94 34 86 52 Q66 88 32 86 Z" fill="#FFEE58" stroke="#FBC02D" stroke-width="3" stroke-linejoin="round"/>
    <rect x="98" y="22" width="7" height="9" rx="2" fill="#6D4C41" transform="rotate(20 100 26)"/>
  </svg>`,

  // גזר
  gezer: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <path d="M88 42 Q98 20 108 26 M92 46 Q112 32 114 42 M84 38 Q86 18 76 22" fill="none" stroke="#43A047" stroke-width="5" stroke-linecap="round"/>
    <polygon points="76,36 100,56 36,112" fill="#FF7043" stroke="#D84315" stroke-width="3" stroke-linejoin="round"/>
    <line x1="72" y1="56" x2="80" y2="64" stroke="#D84315" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="58" y1="72" x2="66" y2="80" stroke="#D84315" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // שמש
  shemesh: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <g stroke="#FFB300" stroke-width="5" stroke-linecap="round">
      <line x1="70" y1="16" x2="70" y2="28"/><line x1="70" y1="112" x2="70" y2="124"/>
      <line x1="16" y1="70" x2="28" y2="70"/><line x1="112" y1="70" x2="124" y2="70"/>
      <line x1="32" y1="32" x2="41" y2="41"/><line x1="99" y1="99" x2="108" y2="108"/>
      <line x1="108" y1="32" x2="99" y2="41"/><line x1="41" y1="99" x2="32" y2="108"/>
    </g>
    <circle cx="70" cy="70" r="30" fill="#FFEE58" stroke="#FBC02D" stroke-width="3"/>
    <circle cx="60" cy="64" r="3.5" fill="#5D4037"/>
    <circle cx="80" cy="64" r="3.5" fill="#5D4037"/>
    <path d="M60 76 Q70 84 80 76" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // כלב
  kelev: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EFEBE9"/>
    <ellipse cx="38" cy="66" rx="12" ry="22" fill="#6D4C41" transform="rotate(15 38 66)"/>
    <ellipse cx="102" cy="66" rx="12" ry="22" fill="#6D4C41" transform="rotate(-15 102 66)"/>
    <circle cx="70" cy="68" r="28" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
    <circle cx="58" cy="60" r="4" fill="#212121"/>
    <circle cx="82" cy="60" r="4" fill="#212121"/>
    <ellipse cx="70" cy="72" rx="7" ry="5" fill="#212121"/>
    <path d="M62 82 Q70 88 78 82" fill="none" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M66 85 Q70 98 74 85" fill="#F48FB1"/>
  </svg>`,

  // תפוח
  tapuach: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFEBEE"/>
    <path d="M70 42 L74 24" stroke="#5D4037" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M72 32 Q90 22 96 34 Q82 42 72 32 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
    <path d="M70 44 C50 34 32 52 34 76 C36 102 56 112 70 106 C84 112 104 102 106 76 C108 52 90 34 70 44 Z" fill="#E53935" stroke="#B71C1C" stroke-width="3"/>
    <path d="M46 58 Q42 72 48 84" fill="none" stroke="#FFCDD2" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  // אוטו
  oto: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <path d="M24 84 L34 62 L52 46 L90 46 L108 62 L118 84 L118 96 L24 96 Z" fill="#EF5350" stroke="#C62828" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="42,62 55,50 86,50 98,62" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
    <circle cx="46" cy="96" r="13" fill="#37474F" stroke="#263238" stroke-width="2"/>
    <circle cx="46" cy="96" r="6" fill="#CFD8DC"/>
    <circle cx="96" cy="96" r="13" fill="#37474F" stroke="#263238" stroke-width="2"/>
    <circle cx="96" cy="96" r="6" fill="#CFD8DC"/>
  </svg>`,

  // עץ
  etz: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <rect x="60" y="74" width="20" height="42" rx="3" fill="#795548" stroke="#4E342E" stroke-width="2.5"/>
    <circle cx="50" cy="62" r="22" fill="#66BB6A"/>
    <circle cx="90" cy="62" r="22" fill="#66BB6A"/>
    <circle cx="70" cy="44" r="26" fill="#43A047"/>
  </svg>`,

  // ספר
  sefer: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <path d="M24 42 Q48 36 70 46 Q92 36 116 42 L116 98 Q92 92 70 102 Q48 92 24 98 Z" fill="#FFFFFF" stroke="#1E88E5" stroke-width="3.5" stroke-linejoin="round"/>
    <line x1="70" y1="46" x2="70" y2="102" stroke="#1E88E5" stroke-width="3"/>
    <line x1="36" y1="58" x2="58" y2="58" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="36" y1="70" x2="58" y2="70" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="82" y1="58" x2="104" y2="58" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="82" y1="70" x2="104" y2="70" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // כובע
  kova: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8EAF6"/>
    <ellipse cx="70" cy="86" rx="48" ry="12" fill="#42A5F5" stroke="#1565C0" stroke-width="3"/>
    <path d="M38 84 C38 44 102 44 102 84 Z" fill="#1E88E5" stroke="#1565C0" stroke-width="3"/>
    <rect x="38" y="74" width="64" height="8" fill="#FFCA28"/>
    <circle cx="70" cy="48" r="6" fill="#FFCA28"/>
  </svg>`,

  // שולחן
  shulchan: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EFEBE9"/>
    <rect x="28" y="58" width="8" height="50" fill="#6D4C41"/>
    <rect x="104" y="58" width="8" height="50" fill="#6D4C41"/>
    <rect x="44" y="58" width="6" height="38" fill="#8D6E63"/>
    <rect x="90" y="58" width="6" height="38" fill="#8D6E63"/>
    <polygon points="20,58 34,42 106,42 120,58" fill="#A1887F" stroke="#5D4037" stroke-width="3" stroke-linejoin="round"/>
    <rect x="20" y="58" width="100" height="7" fill="#795548"/>
  </svg>`,

  // בלון
  balon: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FCE4EC"/>
    <path d="M70 86 Q62 104 74 122" fill="none" stroke="#78909C" stroke-width="2.5"/>
    <ellipse cx="70" cy="54" rx="26" ry="32" fill="#EC407A" stroke="#AD1457" stroke-width="2.5"/>
    <polygon points="66,86 74,86 70,80" fill="#EC407A"/>
    <ellipse cx="58" cy="44" rx="5" ry="9" fill="#F8BBD0" transform="rotate(-20 58 44)"/>
  </svg>`,

  // ==========================================
  // פְּעִילוּת 3: קִרְקָס, חִטָּה, שִׁמְשִׁיָּה, כִּתָּה, פִּיצָה, לִוְיָתָן, מִטְפַּחַת
  // ==========================================

  // קרקס
  kirkas: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- דגלון בראש אוהל הקרקס -->
    <line x1="70" y1="14" x2="70" y2="30" stroke="#5D4037" stroke-width="3"/>
    <polygon points="70,14 92,20 70,26" fill="#29B6F6"/>
    <!-- גג האוהל המפוספס -->
    <polygon points="70,28 22,68 118,68" fill="#E53935" stroke="#B71C1C" stroke-width="2.5" stroke-linejoin="round"/>
    <polygon points="70,28 46,68 94,68" fill="#FFEE58"/>
    <polygon points="70,28 60,68 80,68" fill="#E53935"/>
    <!-- קירות האוהל והכניסה -->
    <rect x="28" y="68" width="84" height="44" fill="#FFEE58" stroke="#B71C1C" stroke-width="2.5"/>
    <rect x="42" y="68" width="14" height="44" fill="#E53935"/>
    <rect x="84" y="68" width="14" height="44" fill="#E53935"/>
    <polygon points="56,112 70,78 84,112" fill="#3E2723"/>
  </svg>`,

  // חיטה
  chita: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFFDE7"/>
    <!-- גבעול שיבולת חיטה זהובה -->
    <line x1="70" y1="24" x2="70" y2="120" stroke="#FBC02D" stroke-width="4.5" stroke-linecap="round"/>
    <!-- זיפים עליונים -->
    <line x1="70" y1="30" x2="58" y2="16" stroke="#FBC02D" stroke-width="2"/>
    <line x1="70" y1="30" x2="82" y2="16" stroke="#FBC02D" stroke-width="2"/>
    <!-- גרעיני החיטה משני הצדדים -->
    <g fill="#FFD54F" stroke="#F57F17" stroke-width="2">
      <ellipse cx="60" cy="38" rx="6" ry="10" transform="rotate(-30 60 38)"/>
      <ellipse cx="80" cy="38" rx="6" ry="10" transform="rotate(30 80 38)"/>
      <ellipse cx="60" cy="54" rx="6" ry="10" transform="rotate(-30 60 54)"/>
      <ellipse cx="80" cy="54" rx="6" ry="10" transform="rotate(30 80 54)"/>
      <ellipse cx="60" cy="70" rx="6" ry="10" transform="rotate(-30 60 70)"/>
      <ellipse cx="80" cy="70" rx="6" ry="10" transform="rotate(30 80 70)"/>
      <ellipse cx="60" cy="86" rx="6" ry="10" transform="rotate(-30 60 86)"/>
      <ellipse cx="80" cy="86" rx="6" ry="10" transform="rotate(30 80 86)"/>
    </g>
  </svg>`,

  // שמשייה
  shimshiya: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- חול הים -->
    <path d="M18 104 Q70 92 122 104 Q100 128 70 128 Q40 128 18 104 Z" fill="#FFE082"/>
    <!-- מוט השמשייה נטוע בחול -->
    <line x1="76" y1="28" x2="62" y2="106" stroke="#8D6E63" stroke-width="4.5" stroke-linecap="round"/>
    <!-- חופת שמשייה מפוספסת לחוף הים -->
    <g transform="rotate(10 74 52)">
      <path d="M26 56 C26 22 122 22 122 56 Z" fill="#FF5252" stroke="#C62828" stroke-width="2.5"/>
      <path d="M54 56 C56 26 74 24 74 24 C74 24 92 26 94 56 Z" fill="#FFFFFF"/>
    </g>
  </svg>`,

  // כיתה
  kita: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- לוח ירוק של כיתה א' -->
    <rect x="26" y="24" width="88" height="48" rx="4" fill="#2E7D32" stroke="#8D6E63" stroke-width="4"/>
    <text x="70" y="54" text-anchor="middle" fill="#FFFFFF" font-family="Rubik, sans-serif" font-size="22" font-weight="bold">א ב ג</text>
    <!-- שולחנות תלמידים בכיתה -->
    <rect x="30" y="88" width="34" height="8" rx="2" fill="#FFB74D" stroke="#8D6E63" stroke-width="2"/>
    <line x1="36" y1="96" x2="36" y2="114" stroke="#6D4C41" stroke-width="3"/>
    <line x1="58" y1="96" x2="58" y2="114" stroke="#6D4C41" stroke-width="3"/>

    <rect x="76" y="88" width="34" height="8" rx="2" fill="#FFB74D" stroke="#8D6E63" stroke-width="2"/>
    <line x1="82" y1="96" x2="82" y2="114" stroke="#6D4C41" stroke-width="3"/>
    <line x1="104" y1="96" x2="104" y2="114" stroke="#6D4C41" stroke-width="3"/>
  </svg>`,

  // פיצה
  pitza: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <!-- משולש פיצה עסיסי -->
    <path d="M30 40 Q70 20 110 40 L70 118 Z" fill="#FFCA28" stroke="#E65100" stroke-width="3" stroke-linejoin="round"/>
    <!-- קראסט לחם -->
    <path d="M28 40 Q70 20 112 40" fill="none" stroke="#D87A2B" stroke-width="11" stroke-linecap="round"/>
    <!-- זיתים ורוטב עגבניות -->
    <circle cx="60" cy="58" r="7" fill="#D32F2F"/>
    <circle cx="82" cy="62" r="7" fill="#D32F2F"/>
    <circle cx="70" cy="84" r="7" fill="#D32F2F"/>
    <circle cx="70" cy="50" r="4" fill="#37474F"/>
    <circle cx="64" cy="74" r="4" fill="#37474F"/>
  </svg>`,

  // לווייתן
  livyatan: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- מזרקת מים של לווייתן -->
    <path d="M62 46 Q56 24 42 26 M62 46 Q68 22 82 26" fill="none" stroke="#29B6F6" stroke-width="3.5" stroke-linecap="round"/>
    <!-- גוף הלווייתן הכחול -->
    <path d="M24 82 C24 46 74 44 92 74 C104 78 112 68 116 56 C122 60 120 74 112 80 C120 84 122 94 114 96 C104 94 96 88 86 90 Z" fill="#1E88E5" stroke="#0D47A1" stroke-width="3" stroke-linejoin="round"/>
    <!-- בטן לבנה מפוספסת ועין -->
    <path d="M26 82 Q56 82 78 90 L26 90 Z" fill="#E3F2FD"/>
    <circle cx="42" cy="68" r="3.5" fill="#FFF"/>
    <circle cx="42" cy="68" r="2" fill="#0D47A1"/>
    <!-- גלי ים -->
    <path d="M18 96 Q38 88 58 96 T98 96 T122 96" fill="none" stroke="#0288D1" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // מטפחת
  mitpachat: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FCE4EC"/>
    <!-- מטפחת בד משולשת מנוקדת -->
    <polygon points="22,42 118,42 70,110" fill="#EC407A" stroke="#AD1457" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="30,48 110,48 70,102" fill="none" stroke="#FCE4EC" stroke-width="2" stroke-dasharray="4 4"/>
    <circle cx="54" cy="60" r="4" fill="#FFF"/>
    <circle cx="70" cy="60" r="4" fill="#FFF"/>
    <circle cx="86" cy="60" r="4" fill="#FFF"/>
    <circle cx="62" cy="76" r="4" fill="#FFF"/>
    <circle cx="78" cy="76" r="4" fill="#FFF"/>
    <circle cx="70" cy="90" r="4" fill="#FFF"/>
  </svg>`,

  // ==========================================
  // פְּעִילוּת 5: עַכָּבִישׁ, תָּוִים, בַּיִת, חֲצָאִית, מְעִיל, צְדָפִים, כְּבָשִׂים
  // ==========================================

  // עכביש
  akavish: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F3E5F5"/>
    <!-- חוט קורי עכביש -->
    <line x1="70" y1="8" x2="70" y2="54" stroke="#90A4AE" stroke-width="2.5"/>
    <!-- 8 רגליים של עכביש -->
    <g fill="none" stroke="#263238" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="54,68 32,54 24,66"/>
      <polyline points="52,74 28,70 20,84"/>
      <polyline points="52,80 30,86 24,100"/>
      <polyline points="56,86 38,98 34,112"/>
      <polyline points="86,68 108,54 116,66"/>
      <polyline points="88,74 112,70 120,84"/>
      <polyline points="88,80 110,86 116,100"/>
      <polyline points="84,86 102,98 106,112"/>
    </g>
    <!-- גוף וראש העכביש -->
    <circle cx="70" cy="78" r="20" fill="#37474F"/>
    <circle cx="70" cy="56" r="12" fill="#263238"/>
    <circle cx="65" cy="54" r="3" fill="#FFF"/>
    <circle cx="75" cy="54" r="3" fill="#FFF"/>
    <circle cx="65" cy="54" r="1.5" fill="#000"/>
    <circle cx="75" cy="54" r="1.5" fill="#000"/>
  </svg>`,

  // תווים של נגינה
  tavim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- חמשה מוזיקלית -->
    <g stroke="#B0BEC5" stroke-width="1.5">
      <line x1="20" y1="50" x2="120" y2="50"/>
      <line x1="20" y1="62" x2="120" y2="62"/>
      <line x1="20" y1="74" x2="120" y2="74"/>
      <line x1="20" y1="86" x2="120" y2="86"/>
      <line x1="20" y1="98" x2="120" y2="98"/>
    </g>
    <!-- תווי נגינה צבעוניים וברורים -->
    <ellipse cx="44" cy="86" rx="11" ry="8" fill="#E91E63" transform="rotate(-20 44 86)"/>
    <ellipse cx="82" cy="74" rx="11" ry="8" fill="#E91E63" transform="rotate(-20 82 74)"/>
    <polyline points="53,84 53,38 91,28 91,72" fill="none" stroke="#E91E63" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="104" cy="94" rx="9" ry="7" fill="#1E88E5" transform="rotate(-20 104 94)"/>
    <line x1="111" y1="92" x2="111" y2="52" stroke="#1E88E5" stroke-width="4.5" stroke-linecap="round"/>
  </svg>`,

  // בית
  bayit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <rect x="36" y="62" width="68" height="50" fill="#FFF9C4" stroke="#8D6E63" stroke-width="3"/>
    <polygon points="26,64 70,26 114,64" fill="#E53935" stroke="#B71C1C" stroke-width="3" stroke-linejoin="round"/>
    <rect x="60" y="80" width="20" height="32" rx="2" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
    <circle cx="75" cy="96" r="2" fill="#FFD54F"/>
    <rect x="42" y="70" width="14" height="14" fill="#81D4FA" stroke="#0288D1" stroke-width="2"/>
    <rect x="84" y="70" width="14" height="14" fill="#81D4FA" stroke="#0288D1" stroke-width="2"/>
  </svg>`,

  // חצאית
  chatzait: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F3E5F5"/>
    <!-- חגורת המותן של החצאית -->
    <rect x="46" y="34" width="48" height="12" rx="3" fill="#7B1FA2" stroke="#4A148C" stroke-width="2.5"/>
    <!-- קפלי החצאית -->
    <polygon points="46,46 94,46 114,104 26,104" fill="#AB47BC" stroke="#4A148C" stroke-width="3" stroke-linejoin="round"/>
    <line x1="58" y1="46" x2="48" y2="104" stroke="#4A148C" stroke-width="2"/>
    <line x1="70" y1="46" x2="70" y2="104" stroke="#4A148C" stroke-width="2"/>
    <line x1="82" y1="46" x2="92" y2="104" stroke="#4A148C" stroke-width="2"/>
  </svg>`,

  // מעיל
  meil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <!-- מעיל חורף חם עם צווארון פרווה וכפתורים -->
    <path d="M48 34 L92 34 L118 64 L104 74 L92 56 L96 110 L44 110 L48 56 L36 74 L22 64 Z" fill="#1E88E5" stroke="#0D47A1" stroke-width="3" stroke-linejoin="round"/>
    <!-- צווארון לבן חם -->
    <ellipse cx="70" cy="34" rx="22" ry="8" fill="#FFF8E1" stroke="#8D6E63" stroke-width="2.5"/>
    <line x1="70" y1="42" x2="70" y2="110" stroke="#0D47A1" stroke-width="2.5"/>
    <!-- כפתורים וכיסים -->
    <circle cx="64" cy="56" r="3" fill="#FFD54F"/>
    <circle cx="64" cy="74" r="3" fill="#FFD54F"/>
    <circle cx="64" cy="92" r="3" fill="#FFD54F"/>
    <rect x="48" y="82" width="12" height="14" rx="2" fill="#1565C0"/>
    <rect x="80" y="82" width="12" height="14" rx="2" fill="#1565C0"/>
  </svg>`,

  // צדפים
  tzdafim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- צדף ורוד גדול -->
    <g transform="translate(8, 0)">
      <path d="M24 68 C24 34 76 34 76 68 L58 84 L42 84 Z" fill="#F48FB1" stroke="#C2185B" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="50" y1="84" x2="36" y2="48" stroke="#C2185B" stroke-width="2"/>
      <line x1="50" y1="84" x2="50" y2="42" stroke="#C2185B" stroke-width="2"/>
      <line x1="50" y1="84" x2="64" y2="48" stroke="#C2185B" stroke-width="2"/>
    </g>
    <!-- צדף כתום שני -->
    <g transform="translate(46, 26)">
      <path d="M24 68 C24 34 76 34 76 68 L58 84 L42 84 Z" fill="#FFCC80" stroke="#EF6C00" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="50" y1="84" x2="36" y2="48" stroke="#EF6C00" stroke-width="2"/>
      <line x1="50" y1="84" x2="50" y2="42" stroke="#EF6C00" stroke-width="2"/>
      <line x1="50" y1="84" x2="64" y2="48" stroke="#EF6C00" stroke-width="2"/>
    </g>
  </svg>`,

  // כבשים
  kvasim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <!-- כבשה 1 -->
    <g transform="translate(-14, -8)">
      <line x1="48" y1="84" x2="48" y2="104" stroke="#424242" stroke-width="4" stroke-linecap="round"/>
      <line x1="68" y1="84" x2="68" y2="104" stroke="#424242" stroke-width="4" stroke-linecap="round"/>
      <circle cx="46" cy="72" r="14" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="60" cy="66" r="15" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="72" cy="74" r="13" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="58" cy="78" r="13" fill="#FFFFFF"/>
      <ellipse cx="38" cy="68" rx="9" ry="11" fill="#424242"/>
      <circle cx="35" cy="65" r="2" fill="#FFF"/>
    </g>
    <!-- כבשה 2 -->
    <g transform="translate(34, 14)">
      <line x1="48" y1="84" x2="48" y2="104" stroke="#424242" stroke-width="4" stroke-linecap="round"/>
      <line x1="68" y1="84" x2="68" y2="104" stroke="#424242" stroke-width="4" stroke-linecap="round"/>
      <circle cx="46" cy="72" r="14" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="60" cy="66" r="15" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="72" cy="74" r="13" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
      <circle cx="58" cy="78" r="13" fill="#FFFFFF"/>
      <ellipse cx="38" cy="68" rx="9" ry="11" fill="#424242"/>
      <circle cx="35" cy="65" r="2" fill="#FFF"/>
    </g>
  </svg>`,

  // ==========================================
  // פְּעִילוּת 6: צָעִיף, יַיִן, חֲצָאִית, פִּטְרִיָּה, מַעֲלִית, חֲבִיתָה, עַגְבָנִיָּה
  // ==========================================

  // צעיף
  tzaif: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <!-- קצה צעיף תלוי עם פרנזים -->
    <rect x="74" y="48" width="22" height="54" rx="4" fill="#EF5350" stroke="#B71C1C" stroke-width="2.5"/>
    <rect x="74" y="68" width="22" height="8" fill="#FFEE58"/>
    <rect x="74" y="84" width="22" height="8" fill="#42A5F5"/>
    <!-- לולאת הצעיף העליונה -->
    <ellipse cx="70" cy="46" rx="34" ry="14" fill="#EF5350" stroke="#B71C1C" stroke-width="3"/>
    <ellipse cx="70" cy="44" rx="20" ry="6" fill="#FFF3E0" stroke="#B71C1C" stroke-width="2"/>
    <!-- קצה שני -->
    <rect x="44" y="52" width="22" height="42" rx="4" fill="#EF5350" stroke="#B71C1C" stroke-width="2.5"/>
    <rect x="44" y="68" width="22" height="8" fill="#FFEE58"/>
    <!-- פרנזים -->
    <path d="M46 94 L46 104 M55 94 L55 104 M64 94 L64 104 M76 102 L76 112 M85 102 L85 112 M94 102 L94 112" stroke="#B71C1C" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // יין
  yayin: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F3E5F5"/>
    <!-- בקבוק יין -->
    <rect x="42" y="24" width="12" height="22" fill="#4A148C"/>
    <path d="M34 56 Q34 44 42 44 L54 44 Q62 44 62 56 L62 110 L34 110 Z" fill="#6A1B9A" stroke="#4A148C" stroke-width="2.5"/>
    <rect x="38" y="68" width="20" height="24" rx="2" fill="#FFF8E1"/>
    <circle cx="48" cy="80" r="5" fill="#8E24AA"/>
    <!-- גביע יין -->
    <path d="M78 58 L106 58 Q106 84 92 84 Q78 84 78 58 Z" fill="#E1F5FE" stroke="#0288D1" stroke-width="2.5"/>
    <path d="M80 66 L104 66 Q104 82 92 82 Q80 82 80 66 Z" fill="#8E24AA"/>
    <line x1="92" y1="84" x2="92" y2="108" stroke="#0288D1" stroke-width="3"/>
    <line x1="80" y1="108" x2="104" y2="108" stroke="#0288D1" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  // פטרייה
  pitriya: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <!-- רגל הפטרייה -->
    <path d="M56 72 L52 110 Q70 116 88 110 L84 72 Z" fill="#FFF8E1" stroke="#BCAAA4" stroke-width="3"/>
    <!-- כובע הפטרייה האדום עם נקודות לבנות -->
    <path d="M24 74 C24 30 116 30 116 74 Z" fill="#E53935" stroke="#B71C1C" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="50" cy="58" r="7" fill="#FFFFFF"/>
    <circle cx="70" cy="46" r="8" fill="#FFFFFF"/>
    <circle cx="92" cy="60" r="6" fill="#FFFFFF"/>
  </svg>`,

  // מעלית
  maalit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#ECEFF1"/>
    <!-- מסגרת ודלתות המעלית -->
    <rect x="34" y="24" width="64" height="92" rx="3" fill="#CFD8DC" stroke="#455A64" stroke-width="3.5"/>
    <rect x="52" y="28" width="28" height="10" rx="2" fill="#263238"/>
    <text x="66" y="36" text-anchor="middle" fill="#FF5252" font-family="monospace" font-size="10" font-weight="bold">▲ 3</text>
    <rect x="40" y="42" width="25" height="72" fill="#90A4AE" stroke="#455A64" stroke-width="2"/>
    <rect x="67" y="42" width="25" height="72" fill="#90A4AE" stroke="#455A64" stroke-width="2"/>
    <!-- כפתורי קריאה למעלה ולמטה -->
    <rect x="104" y="62" width="14" height="26" rx="3" fill="#B0BEC5" stroke="#455A64" stroke-width="2"/>
    <polygon points="111,66 107,72 115,72" fill="#43A047"/>
    <polygon points="111,84 107,78 115,78" fill="#E53935"/>
  </svg>`,

  // חביתה
  chavita: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- ידית המחבת -->
    <line x1="96" y1="96" x2="124" y2="118" stroke="#37474F" stroke-width="9" stroke-linecap="round"/>
    <!-- מחבת עגולה -->
    <circle cx="64" cy="66" r="40" fill="#455A64" stroke="#263238" stroke-width="3.5"/>
    <!-- חביתה / ביצת עין במחבת -->
    <path d="M40 56 Q52 38 74 44 Q94 50 88 72 Q82 94 58 88 Q34 82 40 56 Z" fill="#FFFFFF" stroke="#FFE082" stroke-width="2"/>
    <circle cx="64" cy="66" r="13" fill="#FFB300" stroke="#F57F17" stroke-width="2"/>
    <circle cx="60" cy="62" r="3.5" fill="#FFF8E1"/>
  </svg>`,

  // עגבנייה
  agvaniya: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFEBEE"/>
    <!-- עגבנייה אדומה ועגולה -->
    <ellipse cx="70" cy="76" rx="36" ry="32" fill="#E53935" stroke="#B71C1C" stroke-width="3"/>
    <!-- עלים ירוקים למעלה -->
    <polygon points="70,34 64,48 48,44 60,54 52,66 70,56 88,66 80,54 92,44 76,48" fill="#43A047" stroke="#1B5E20" stroke-width="2" stroke-linejoin="round"/>
    <ellipse cx="52" cy="68" rx="5" ry="10" fill="#FFCDD2" opacity="0.6" transform="rotate(-25 52 68)"/>
  </svg>`,

  // ==========================================
  // אִיּוּרִים נוֹסָפִים לִפְעִילוּיוֹת 4, 7, 10, 11, 12
  // ==========================================

  // סיר
  sir: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#ECEFF1"/>
    <!-- ידיות הסיר -->
    <path d="M32 66 L20 66 Q18 74 28 76 M108 66 L120 66 Q122 74 112 76" fill="none" stroke="#37474F" stroke-width="5" stroke-linecap="round"/>
    <!-- גוף הסיר ומכסה -->
    <rect x="32" y="54" width="76" height="52" rx="8" fill="#90A4AE" stroke="#455A64" stroke-width="3"/>
    <path d="M30 54 Q70 38 110 54 Z" fill="#B0BEC5" stroke="#455A64" stroke-width="3"/>
    <circle cx="70" cy="40" r="6" fill="#37474F"/>
  </svg>`,

  // קיר
  kir: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EFEBE9"/>
    <!-- קיר לבנים -->
    <rect x="26" y="34" width="88" height="72" rx="3" fill="#D84315" stroke="#BF360C" stroke-width="3"/>
    <g stroke="#EFEBE9" stroke-width="3">
      <line x1="26" y1="52" x2="114" y2="52"/>
      <line x1="26" y1="70" x2="114" y2="70"/>
      <line x1="26" y1="88" x2="114" y2="88"/>
      <line x1="56" y1="34" x2="56" y2="52"/><line x1="86" y1="34" x2="86" y2="52"/>
      <line x1="42" y1="52" x2="42" y2="70"/><line x1="72" y1="52" x2="72" y2="70"/><line x1="100" y1="52" x2="100" y2="70"/>
      <line x1="56" y1="70" x2="56" y2="88"/><line x1="86" y1="70" x2="86" y2="88"/>
      <line x1="42" y1="88" x2="42" y2="106"/><line x1="72" y1="88" x2="72" y2="106"/><line x1="100" y1="88" x2="100" y2="106"/>
    </g>
  </svg>`,

  // תירס
  tiras: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F9FBE7"/>
    <!-- קלח תירס צהוב עם עלים ירוקים -->
    <ellipse cx="70" cy="64" rx="18" ry="36" fill="#FFEE58" stroke="#FBC02D" stroke-width="3"/>
    <g stroke="#FBC02D" stroke-width="1.5">
      <line x1="54" y1="48" x2="86" y2="48"/><line x1="52" y1="60" x2="88" y2="60"/><line x1="54" y1="72" x2="86" y2="72"/>
      <line x1="64" y1="32" x2="64" y2="90"/><line x1="76" y1="32" x2="76" y2="90"/>
    </g>
    <path d="M70 112 Q40 94 42 56 Q56 76 70 100 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="2.5"/>
    <path d="M70 112 Q100 94 98 56 Q84 76 70 100 Z" fill="#43A047" stroke="#2E7D32" stroke-width="2.5"/>
  </svg>`,

  // עציץ
  atzitz: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <!-- גבעול ופרח בעציץ -->
    <line x1="70" y1="42" x2="70" y2="74" stroke="#43A047" stroke-width="5"/>
    <path d="M70 64 Q50 56 48 46 Q64 48 70 60 Z" fill="#66BB6A"/>
    <path d="M70 64 Q90 56 92 46 Q76 48 70 60 Z" fill="#66BB6A"/>
    <circle cx="70" cy="36" r="14" fill="#EC407A"/>
    <circle cx="70" cy="36" r="6" fill="#FFEE58"/>
    <!-- כלי העציץ -->
    <polygon points="46,74 94,74 86,114 54,114" fill="#D87A56" stroke="#A04000" stroke-width="2.5"/>
    <rect x="42" y="68" width="56" height="8" rx="2" fill="#E07A5F" stroke="#A04000" stroke-width="2.5"/>
  </svg>`,

  // כפית
  kapit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <g transform="rotate(-35 70 70)">
      <rect x="66" y="54" width="8" height="62" rx="4" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
      <ellipse cx="70" cy="40" rx="16" ry="22" fill="#CFD8DC" stroke="#546E7A" stroke-width="2.5"/>
      <ellipse cx="66" cy="36" rx="5" ry="10" fill="#ECEFF1"/>
    </g>
  </svg>`,

  // עניבה
  aniva: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <polygon points="58,24 82,24 76,40 64,40" fill="#1E88E5" stroke="#0D47A1" stroke-width="2.5" stroke-linejoin="round"/>
    <polygon points="64,40 76,40 86,96 70,116 54,96" fill="#42A5F5" stroke="#0D47A1" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="60" y1="60" x2="80" y2="70" stroke="#FFCA28" stroke-width="5"/>
    <line x1="57" y1="80" x2="83" y2="92" stroke="#FFCA28" stroke-width="5"/>
  </svg>`,

  // גבינה
  gvina: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFFDE7"/>
    <!-- משולש גבינה צהובה עם חורים -->
    <polygon points="28,64 88,36 112,64" fill="#FFEE58" stroke="#FBC02D" stroke-width="3" stroke-linejoin="round"/>
    <rect x="28" y="64" width="84" height="36" fill="#FFD54F" stroke="#FBC02D" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="48" cy="80" r="6" fill="#F57F17" opacity="0.5"/>
    <circle cx="74" cy="76" r="8" fill="#F57F17" opacity="0.5"/>
    <circle cx="96" cy="86" r="5" fill="#F57F17" opacity="0.5"/>
  </svg>`,

  // משאית
  masait: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8EAF6"/>
    <!-- ארגז המשאית -->
    <rect x="20" y="42" width="64" height="46" rx="4" fill="#42A5F5" stroke="#1565C0" stroke-width="3"/>
    <!-- תא הנהג -->
    <path d="M84 56 L108 56 L118 72 L118 88 L84 88 Z" fill="#FF7043" stroke="#D84315" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="88,60 105,60 112,72 88,72" fill="#E1F5FE"/>
    <!-- גלגלים -->
    <circle cx="42" cy="92" r="12" fill="#37474F"/><circle cx="42" cy="92" r="5" fill="#CFD8DC"/>
    <circle cx="98" cy="92" r="12" fill="#37474F"/><circle cx="98" cy="92" r="5" fill="#CFD8DC"/>
  </svg>`,

  // גלידה
  glida: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FCE4EC"/>
    <polygon points="50,66 90,66 70,118" fill="#FFB74D" stroke="#E65100" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="58" cy="54" r="16" fill="#FFF9C4" stroke="#FBC02D" stroke-width="2"/>
    <circle cx="82" cy="54" r="16" fill="#81D4FA" stroke="#0288D1" stroke-width="2"/>
    <circle cx="70" cy="38" r="18" fill="#F48FB1" stroke="#C2185B" stroke-width="2.5"/>
    <circle cx="70" cy="20" r="5" fill="#E53935"/>
  </svg>`,

  // גיר
  gir: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8F5E9"/>
    <rect x="26" y="30" width="88" height="58" rx="4" fill="#2E7D32" stroke="#795548" stroke-width="3"/>
    <path d="M40 64 Q60 44 84 64" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="4 3" stroke-linecap="round"/>
    <!-- מקל גיר לבן גדול בחזית -->
    <g transform="rotate(-20 76 92)">
      <rect x="46" y="84" width="54" height="16" rx="4" fill="#FFFFFF" stroke="#90A4AE" stroke-width="2.5"/>
      <rect x="46" y="84" width="18" height="16" rx="2" fill="#81D4FA" stroke="#0288D1" stroke-width="2"/>
    </g>
  </svg>`,

  // טיל
  til: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#1A237E"/>
    <circle cx="36" cy="40" r="2" fill="#FFF59D"/><circle cx="106" cy="52" r="2.5" fill="#FFF59D"/>
    <!-- להבה של טיל -->
    <polygon points="58,96 70,124 82,96" fill="#FF9800"/>
    <polygon points="63,96 70,114 77,96" fill="#FFEB3B"/>
    <!-- כנפיים וגוף הטיל -->
    <polygon points="50,74 34,98 54,94" fill="#E53935"/>
    <polygon points="90,74 106,98 86,94" fill="#E53935"/>
    <path d="M70 20 C50 44 52 74 54 96 L86 96 C88 74 90 44 70 20 Z" fill="#ECEFF1" stroke="#455A64" stroke-width="2.5"/>
    <path d="M70 20 C60 32 58 42 58 42 L82 42 C82 42 80 32 70 20 Z" fill="#E53935"/>
    <circle cx="70" cy="62" r="10" fill="#4FC3F7" stroke="#0288D1" stroke-width="3"/>
  </svg>`,

  // מיטה
  mita: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <!-- מסגרת המיטה -->
    <rect x="22" y="42" width="10" height="64" rx="3" fill="#8D6E63"/>
    <rect x="108" y="62" width="10" height="44" rx="3" fill="#8D6E63"/>
    <!-- כרית ושמיכה -->
    <rect x="34" y="58" width="24" height="14" rx="6" fill="#FFFFFF" stroke="#90A4AE" stroke-width="2"/>
    <rect x="32" y="70" width="78" height="22" rx="4" fill="#64B5F6" stroke="#1E88E5" stroke-width="2.5"/>
    <rect x="24" y="86" width="92" height="10" fill="#8D6E63"/>
  </svg>`,

  // מפית
  mapit: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E0F2F1"/>
    <polygon points="70,26 114,70 70,114 26,70" fill="#FFFFFF" stroke="#26A69A" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="70,36 104,70 70,104 36,70" fill="none" stroke="#80CBC4" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="70" cy="70" r="8" fill="#F48FB1"/>
  </svg>`,

  // חליל
  chalil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <g transform="rotate(35 70 70)">
      <rect x="63" y="18" width="14" height="104" rx="4" fill="#D7A15C" stroke="#8D6E63" stroke-width="2.5"/>
      <polygon points="65,18 75,18 78,32 62,32" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2"/>
      <circle cx="70" cy="50" r="3" fill="#3E2723"/>
      <circle cx="70" cy="64" r="3" fill="#3E2723"/>
      <circle cx="70" cy="78" r="3" fill="#3E2723"/>
      <circle cx="70" cy="92" r="3" fill="#3E2723"/>
      <circle cx="70" cy="106" r="3" fill="#3E2723"/>
    </g>
  </svg>`,

  // שביל
  shvil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#C8E6C9"/>
    <!-- שביל מתפתל בדשא -->
    <path d="M56 20 Q92 48 52 76 Q22 98 44 124 L94 124 Q64 96 86 72 Q112 44 74 20 Z" fill="#FFE082" stroke="#FFA000" stroke-width="2.5"/>
    <ellipse cx="68" cy="44" rx="8" ry="4" fill="#BCAAA4"/>
    <ellipse cx="66" cy="74" rx="10" ry="5" fill="#BCAAA4"/>
    <ellipse cx="64" cy="106" rx="12" ry="5" fill="#BCAAA4"/>
  </svg>`,

  // מסיחים נוספים (מכנסיים, שעון, כוכב, חתול, פרח, כיסא, דג, נעל)
  michnasayim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E3F2FD"/>
    <polygon points="44,28 96,28 102,112 76,112 70,64 64,112 38,112" fill="#1976D2" stroke="#0D47A1" stroke-width="3" stroke-linejoin="round"/>
  </svg>`,

  shaon: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <circle cx="70" cy="70" r="40" fill="#FFFFFF" stroke="#E53935" stroke-width="6"/>
    <line x1="70" y1="70" x2="70" y2="44" stroke="#212121" stroke-width="4" stroke-linecap="round"/>
    <line x1="70" y1="70" x2="90" y2="70" stroke="#212121" stroke-width="4" stroke-linecap="round"/>
    <circle cx="70" cy="70" r="4" fill="#E53935"/>
  </svg>`,

  kochav: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EDE7F6"/>
    <polygon points="70,20 84,52 118,56 92,78 100,112 70,94 40,112 48,78 22,56 56,52" fill="#FFD54F" stroke="#F57F17" stroke-width="3" stroke-linejoin="round"/>
  </svg>`,

  chatul: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF3E0"/>
    <polygon points="38,56 42,26 62,44" fill="#FFB74D" stroke="#E65100" stroke-width="2.5"/>
    <polygon points="102,56 98,26 78,44" fill="#FFB74D" stroke="#E65100" stroke-width="2.5"/>
    <circle cx="70" cy="72" r="30" fill="#FFA726" stroke="#E65100" stroke-width="2.5"/>
    <circle cx="58" cy="66" r="4" fill="#212121"/><circle cx="82" cy="66" r="4" fill="#212121"/>
    <polygon points="66,74 74,74 70,80" fill="#EC407A"/>
    <line x1="28" y1="72" x2="48" y2="76" stroke="#5D4037" stroke-width="2"/><line x1="28" y1="82" x2="48" y2="80" stroke="#5D4037" stroke-width="2"/>
    <line x1="112" y1="72" x2="92" y2="76" stroke="#5D4037" stroke-width="2"/><line x1="112" y1="82" x2="92" y2="80" stroke="#5D4037" stroke-width="2"/>
  </svg>`,

  perach: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <line x1="70" y1="64" x2="70" y2="118" stroke="#43A047" stroke-width="6" stroke-linecap="round"/>
    <circle cx="70" cy="40" r="14" fill="#FF80AB"/><circle cx="90" cy="54" r="14" fill="#FF80AB"/>
    <circle cx="82" cy="76" r="14" fill="#FF80AB"/><circle cx="58" cy="76" r="14" fill="#FF80AB"/>
    <circle cx="50" cy="54" r="14" fill="#FF80AB"/><circle cx="70" cy="60" r="14" fill="#FFEE58"/>
  </svg>`,

  kise: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#EFEBE9"/>
    <rect x="44" y="26" width="8" height="88" fill="#8D6E63"/>
    <rect x="86" y="72" width="8" height="42" fill="#8D6E63"/>
    <rect x="44" y="32" width="44" height="16" rx="2" fill="#A1887F" stroke="#5D4037" stroke-width="2"/>
    <rect x="42" y="68" width="54" height="10" rx="3" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
  </svg>`,

  dag: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <polygon points="94,70 120,48 120,92" fill="#FF7043" stroke="#D84315" stroke-width="2.5" stroke-linejoin="round"/>
    <ellipse cx="64" cy="70" rx="36" ry="24" fill="#FF9800" stroke="#E65100" stroke-width="3"/>
    <circle cx="44" cy="64" r="4" fill="#212121"/><circle cx="43" cy="63" r="1.5" fill="#FFF"/>
  </svg>`,

  naal: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E8EAF6"/>
    <path d="M32 50 L64 50 L76 74 L108 78 Q116 80 116 92 L28 92 L28 60 Z" fill="#42A5F5" stroke="#1565C0" stroke-width="3" stroke-linejoin="round"/>
    <rect x="26" y="90" width="92" height="10" rx="4" fill="#FFFFFF" stroke="#90A4AE" stroke-width="2"/>
  </svg>`,

  // ==========================================
  // פְּעִילוּת 8: 5 סְצֵנוֹת מְצֻיָּרוֹת לַמִּשְׁפָּטִים
  // ==========================================

  // 1. מִיכַל לָקְחָה תִּיק קָטָן לַכִּתָּה.
  scene_michal: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" rx="16" fill="#FFF8E1"/>
    <!-- לוח כיתה ברקע -->
    <rect x="115" y="18" width="88" height="52" rx="4" fill="#2E7D32" stroke="#8D6E63" stroke-width="4"/>
    <text x="159" y="50" text-anchor="middle" fill="#FFF" font-family="Rubik, sans-serif" font-size="18" font-weight="bold">כִּתָּה א'</text>
    <!-- הילדה מיכל עם תיק קטן -->
    <circle cx="66" cy="54" r="18" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2"/>
    <path d="M46 52 Q66 28 86 52" fill="#5D4037"/>
    <circle cx="60" cy="54" r="2.5" fill="#3E2723"/><circle cx="72" cy="54" r="2.5" fill="#3E2723"/>
    <path d="M61 62 Q66 67 71 62" fill="none" stroke="#D81B60" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M48 118 L56 72 L76 72 L84 118 Z" fill="#EC407A"/>
    <!-- התיק הקטן על הגב/ביד של מיכל -->
    <rect x="30" y="72" width="24" height="30" rx="6" fill="#42A5F5" stroke="#1565C0" stroke-width="2.5"/>
    <rect x="35" y="84" width="14" height="12" rx="3" fill="#FFCA28"/>
  </svg>`,

  // 2. יָנִיב פָּתַח אֶת הַמִּטְרִיָּה בַּגִּנָּה.
  scene_yaniv: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" rx="16" fill="#E1F5FE"/>
    <!-- דשא ופרחים בגינה -->
    <rect x="0" y="114" width="220" height="36" rx="8" fill="#66BB6A"/>
    <circle cx="38" cy="112" r="8" fill="#EC407A"/><circle cx="38" cy="112" r="3" fill="#FFEB3B"/>
    <circle cx="182" cy="112" r="8" fill="#AB47BC"/><circle cx="182" cy="112" r="3" fill="#FFEB3B"/>
    <!-- טיפות גשם -->
    <line x1="40" y1="24" x2="36" y2="36" stroke="#29B6F6" stroke-width="3" stroke-linecap="round"/>
    <line x1="176" y1="28" x2="172" y2="40" stroke="#29B6F6" stroke-width="3" stroke-linecap="round"/>
    <!-- הילד יניב מחזיק מטרייה פתוחה -->
    <line x1="110" y1="26" x2="110" y2="96" stroke="#5D4037" stroke-width="4"/>
    <path d="M62 58 C62 20 158 20 158 58 Z" fill="#FF7043" stroke="#D84315" stroke-width="3"/>
    <circle cx="96" cy="78" r="15" fill="#FFE0B2"/>
    <path d="M81 72 Q96 58 111 72" fill="#4E342E"/>
    <circle cx="91" cy="78" r="2" fill="#212121"/><circle cx="101" cy="78" r="2" fill="#212121"/>
    <path d="M92 84 Q96 88 100 84" fill="none" stroke="#3E2723" stroke-width="2"/>
    <rect x="84" y="93" width="24" height="26" rx="4" fill="#1E88E5"/>
  </svg>`,

  // 3. שָׂגִיא קָנָה מַגָּפַיִם חֲדָשִׁים.
  scene_sagi: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" rx="16" fill="#F3E5F5"/>
    <!-- הילד שגיא שמח ליד זוג מגפיים חדשים ומבריקים -->
    <circle cx="64" cy="54" r="18" fill="#FFE0B2"/>
    <path d="M46 48 Q64 30 82 48" fill="#3E2723"/>
    <circle cx="58" cy="54" r="2.5" fill="#212121"/><circle cx="70" cy="54" r="2.5" fill="#212121"/>
    <path d="M58 62 Q64 68 70 62" fill="none" stroke="#3E2723" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="48" y="72" width="32" height="44" rx="6" fill="#26A69A"/>
    <!-- זוג מגפיים חדשים עם נצנוץ -->
    <path d="M118 54 L138 54 L138 96 L154 96 Q160 96 160 108 L118 108 Z" fill="#FFCA28" stroke="#F57F17" stroke-width="3" stroke-linejoin="round"/>
    <path d="M164 54 L184 54 L184 96 L200 96 Q206 96 206 108 L164 108 Z" fill="#FFCA28" stroke="#F57F17" stroke-width="3" stroke-linejoin="round"/>
    <path d="M148 34 L151 42 L159 45 L151 48 L148 56 L145 48 L137 45 L145 42 Z" fill="#EC407A"/>
  </svg>`,

  // 4. הַכִּבְשָׂה אָכְלָה תִּירָס וְעַגְבָנִיָּה.
  scene_kivsa: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" rx="16" fill="#E8F5E9"/>
    <!-- כבשה חמודה -->
    <line x1="56" y1="96" x2="56" y2="122" stroke="#424242" stroke-width="5" stroke-linecap="round"/>
    <line x1="88" y1="96" x2="88" y2="122" stroke="#424242" stroke-width="5" stroke-linecap="round"/>
    <circle cx="52" cy="78" r="20" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <circle cx="72" cy="70" r="22" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <circle cx="92" cy="80" r="18" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2"/>
    <ellipse cx="98" cy="68" rx="12" ry="15" fill="#424242"/>
    <circle cx="102" cy="64" r="2.5" fill="#FFF"/>
    <!-- תירס ועגבנייה ליד הכבשה -->
    <ellipse cx="142" cy="92" rx="12" ry="24" fill="#FFEE58" stroke="#FBC02D" stroke-width="2.5"/>
    <path d="M142 116 Q126 104 128 84 Q136 96 142 112 Z" fill="#43A047"/>
    <circle cx="180" cy="100" r="16" fill="#E53935" stroke="#B71C1C" stroke-width="2.5"/>
    <polygon points="180,80 174,88 186,88" fill="#43A047"/>
  </svg>`,

  // 5. אָלִין נִגְּנָה בְּגִיטָרָה וְדָנִי שָׁר שִׁיר.
  scene_alin_dani: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" rx="16" fill="#FFF3E0"/>
    <!-- אלין מנגנת בגיטרה -->
    <circle cx="64" cy="50" r="16" fill="#FFE0B2"/>
    <path d="M46 54 Q64 26 82 54" fill="#6D4C41"/>
    <rect x="50" y="66" width="28" height="46" rx="6" fill="#EC407A"/>
    <ellipse cx="58" cy="86" rx="14" ry="10" fill="#E67E22" stroke="#6E2C00" stroke-width="2"/>
    <line x1="58" y1="86" x2="88" y2="68" stroke="#6E2C00" stroke-width="5" stroke-linecap="round"/>
    <!-- דני שר שיר במיקרופון -->
    <circle cx="154" cy="50" r="16" fill="#FFE0B2"/>
    <path d="M138 44 Q154 28 170 44" fill="#3E2723"/>
    <circle cx="154" cy="56" r="4" fill="#D84315"/>
    <rect x="140" y="66" width="28" height="46" rx="6" fill="#42A5F5"/>
    <line x1="130" y1="66" x2="130" y2="116" stroke="#37474F" stroke-width="3"/>
    <circle cx="130" cy="62" r="5" fill="#263238"/>
    <!-- תווי נגינה באוויר -->
    <text x="108" y="42" font-size="22" fill="#8E24AA">🎵🎶</text>
  </svg>`,

  // ==========================================
  // אִיּוּרִים לְמִשְׂחַק הַזִּכָּרוֹן (פְּעִילוּת 11): עֲגִיל, חָצִיל, דַּחְלִיל, תַּנִּין, מַיִם
  // ==========================================

  // עגיל
  agil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#FFF8E1"/>
    <!-- מתלה זהב של העגיל -->
    <path d="M54 36 C54 16 86 16 86 38 C86 48 70 50 70 60" fill="none" stroke="#FFB300" stroke-width="5" stroke-linecap="round"/>
    <!-- חישוק זהב ואבן חן נוצצת -->
    <circle cx="70" cy="64" r="7" fill="#FFD54F" stroke="#F57F17" stroke-width="2.5"/>
    <polygon points="70,72 94,96 70,120 46,96" fill="#EC407A" stroke="#AD1457" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="70,79 85,96 70,113 55,96" fill="#F48FB1"/>
    <!-- נצנוץ -->
    <path d="M104 44 L107 52 L115 55 L107 58 L104 66 L101 58 L93 55 L101 52 Z" fill="#FFD54F"/>
  </svg>`,

  // חציל
  chatzil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F3E5F5"/>
    <g transform="rotate(-25 70 74)">
      <!-- גוף החציל הסגול והמבריק -->
      <path d="M58 38 C52 58 42 78 44 98 C46 116 94 116 96 98 C98 78 88 58 82 38 Z" fill="#6A1B9A" stroke="#4A148C" stroke-width="3" stroke-linejoin="round"/>
      <!-- ברק לבן-סגלגל על החציל -->
      <path d="M56 60 Q52 80 56 98" fill="none" stroke="#CE93D8" stroke-width="5" stroke-linecap="round"/>
      <!-- כתר עלים ירוק וגבעול -->
      <path d="M54 42 L64 30 L70 38 L76 30 L86 42 L78 48 L70 42 L62 48 Z" fill="#43A047" stroke="#1B5E20" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M70 34 Q70 20 80 18" fill="none" stroke="#2E7D32" stroke-width="5" stroke-linecap="round"/>
    </g>
  </svg>`,

  // דחליל
  dachlil: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#F1F8E9"/>
    <!-- מוטות עץ של הדחליל -->
    <line x1="70" y1="36" x2="70" y2="122" stroke="#795548" stroke-width="7" stroke-linecap="round"/>
    <line x1="22" y1="74" x2="118" y2="74" stroke="#795548" stroke-width="7" stroke-linecap="round"/>
    <!-- קש בקצות הידיים -->
    <path d="M22 70 L14 64 M22 74 L12 74 M22 78 L14 84" stroke="#FBC02D" stroke-width="3" stroke-linecap="round"/>
    <path d="M118 70 L126 64 M118 74 L128 74 M118 78 L126 84" stroke="#FBC02D" stroke-width="3" stroke-linecap="round"/>
    <!-- חולצת הדחליל עם טלאי -->
    <path d="M32 68 L108 68 L104 82 L86 82 L90 108 L50 108 L54 82 L36 82 Z" fill="#42A5F5" stroke="#1565C0" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="72" y="88" width="12" height="12" fill="#FFCA28" stroke="#E65100" stroke-width="1.5"/>
    <!-- ראש הדחליל וכובע קש -->
    <circle cx="70" cy="52" r="16" fill="#FFE0B2" stroke="#A1887F" stroke-width="2.5"/>
    <circle cx="64" cy="50" r="2.5" fill="#3E2723"/><circle cx="76" cy="50" r="2.5" fill="#3E2723"/>
    <polygon points="70,52 66,57 74,57" fill="#FF7043"/>
    <path d="M62 60 Q70 65 78 60" fill="none" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
    <!-- כובע קש -->
    <ellipse cx="70" cy="36" rx="28" ry="6" fill="#FFD54F" stroke="#F57F17" stroke-width="2.5"/>
    <polygon points="52,36 60,18 80,18 88,36" fill="#FFEE58" stroke="#F57F17" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`,

  // תנין
  tanin: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E0F7FA"/>
    <!-- זנב וגוף התנין הירוק -->
    <path d="M18 82 Q24 62 46 66 L90 66 L90 88 L30 88 Q18 88 18 82 Z" fill="#43A047" stroke="#1B5E20" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- קשקשים משוננים על הגב -->
    <polygon points="34,66 40,56 46,66 52,56 58,66 64,56 70,66" fill="#2E7D32"/>
    <!-- לסת עליונה ותחתונה עם שיניים לבנות -->
    <path d="M76 56 L122 58 Q126 64 122 70 L84 70 Z" fill="#43A047" stroke="#1B5E20" stroke-width="2.5"/>
    <path d="M84 76 L120 76 Q122 84 114 86 L76 86 Z" fill="#66BB6A" stroke="#1B5E20" stroke-width="2.5"/>
    <polygon points="92,70 95,75 98,70 102,70 105,75 108,70 112,70 115,75 118,70" fill="#FFFFFF"/>
    <!-- עין התנין -->
    <circle cx="84" cy="54" r="6" fill="#FFEE58" stroke="#1B5E20" stroke-width="2"/>
    <circle cx="85" cy="54" r="2.5" fill="#212121"/>
    <!-- רגליים וגלי מים -->
    <rect x="44" y="86" width="10" height="12" rx="3" fill="#2E7D32"/>
    <rect x="72" y="86" width="10" height="12" rx="3" fill="#2E7D32"/>
    <path d="M18 102 Q42 96 66 102 T118 102" fill="none" stroke="#0288D1" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  // מים
  mayim: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="62" fill="#E1F5FE"/>
    <!-- כוס זכוכית שקופה מלאה מים צלולים -->
    <polygon points="40,34 100,34 92,112 48,112" fill="#FFFFFF" stroke="#0288D1" stroke-width="3.5" stroke-linejoin="round"/>
    <!-- המים בכוס עם גל עדין -->
    <path d="M43 56 Q56 50 70 56 T97 56 L91 109 L49 109 Z" fill="#4FC3F7"/>
    <!-- בועות וטיפת מים מעל הכוס -->
    <circle cx="60" cy="88" r="4" fill="#E1F5FE"/>
    <circle cx="78" cy="76" r="5" fill="#E1F5FE"/>
    <circle cx="66" cy="68" r="3" fill="#E1F5FE"/>
    <path d="M70 16 C70 16 80 28 80 34 A10 10 0 1 1 60 34 C60 28 70 16 70 16 Z" fill="#29B6F6" stroke="#0288D1" stroke-width="2"/>
  </svg>`
};
