/**
 * לוגיקת האפליקציה: "לוֹמְדִים לִקְרֹא-הַכָּרַת תְּנוּעַת חִירִיק"
 * הוֹרָאָה בַּהֲנָעָה, מִשֻׁלְחָנָה שֶׁל הַמוֹרָה זִינוֹבִי אִינָה
 */

const STAGES_META = [
  { num: 1, title: 'פְּעִילוּת 1: הַכָּרַת הַצֵּרוּפִים בִּתְנוּעַת חִירִיק', short: '1. הַכָּרַת הַצֵּרוּפִים', icon: '✨', desc: 'לַחֲצוּ עַל כָּל צֵרוּף כְּדֵי לְהַכִּיר אוֹתוֹ וְלִרְאוֹת אֶת הַצִּיּוּר הַמַּתְאִים!' },
  { num: 2, title: 'פְּעִילוּת 2: מָה מַתְחִיל בַּצֵּרוּף?', short: '2. מָה מַתְחִיל בַּצֵּרוּף?', icon: '🌟', desc: 'בַּחֲרוּ מִתּוֹךְ שְׁלוֹשָׁה צִיּוּרִים אֶת הַצִּיּוּר שֶׁמַּתְחִיל בַּצֵּרוּף הַמְּבֻקָּשׁ.' },
  { num: 3, title: 'פְּעִילוּת 3: אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה הַכְּתוּבָה?', short: '3. מִלָּה לְצִיּוּר (א)', icon: '🖼️', desc: 'קִרְאוּ אֶת הַמִּלָּה וּבַחֲרוּ אֶת הַצִּיּוּר הַמַּתְאִים מִתּוֹךְ שְׁנֵי הַצִּיּוּרִים.' },
  { num: 4, title: 'פְּעִילוּת 4: מִלָּה חֲסֵרָה בַּמִּשְׁפָּט', short: '4. מִלָּה חֲסֵרָה (א)', icon: '✏️', desc: 'קִרְאוּ אֶת הַמִּשְׁפָּט הַקַּל וּבַחֲרוּ אֶת הַמִּלָּה הַחֲסֵרָה מִתּוֹךְ שְׁתֵּי הָאֶפְשָׁרוּיוֹת.' },
  { num: 5, title: 'פְּעִילוּת 5: תְּנוּעַת חִירִיק בְּאֶמְצַע הַמִּלָּה', short: '5. חִירִיק בְּאֶמְצַע מִלָּה', icon: '🎯', desc: 'הֵיכָן שׁוֹמְעִים אֶת הַצֵּרוּף בְּאֶמְצַע הַמִּלָּה? בַּחֲרוּ מִתּוֹךְ שְׁלוֹשָׁה צִיּוּרִים!' },
  { num: 6, title: 'פְּעִילוּת 6: אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה הַכְּתוּבָה?', short: '6. מִלָּה לְצִיּוּר (ב)', icon: '🎨', desc: 'קִרְאוּ אֶת הַמִּלָּה וּבַחֲרוּ אֶת הַצִּיּוּר הַמַּתְאִים מִתּוֹךְ שְׁנֵי הַצִּיּוּרִים.' },
  { num: 7, title: 'פְּעִילוּת 7: מִלָּה חֲסֵרָה בַּמִּשְׁפָּט', short: '7. מִלָּה חֲסֵרָה (ב)', icon: '📝', desc: 'קִרְאוּ אֶת הַמִּשְׁפָּט וּבַחֲרוּ אֶת הַמִּלָּה הַחֲסֵרָה מִתּוֹךְ שְׁתֵּי הָאֶפְשָׁרוּיוֹת.' },
  { num: 8, title: 'פְּעִילוּת 8: אֵיזֶה מִשְׁפָּט מַתְאִים לְצִיּוּר?', short: '8. מִשְׁפָּט לְצִיּוּר', icon: '🏞️', desc: 'הִתְבּוֹנְנוּ בַּצִּיּוּר וּבַחֲרוּ אֶת הַמִּשְׁפָּט הַנָּכוֹן שֶׁמַּתְאִים לוֹ.' },
  { num: 9, title: 'פְּעִילוּת 9: הַסִּפּוּר "הַצָּעִיף שֶׁל דְּבִיר"', short: '9. סִפּוּר: הַצָּעִיף שֶׁל דְּבִיר', icon: '📖', desc: 'קִרְאוּ אֶת הַסִּפּוּר הַקָּצָר וַעֲנוּ עַל 9 שְׁאֵלוֹת רַב-בְּרֵרָה.' },
  { num: 10, title: 'פְּעִילוּת 10: מִשְׂחַק דּוֹמִינוֹ מִלִּים בִּתְנוּעַת חִירִיק', short: '10. מִשְׂחַק דּוֹמִינוֹ', icon: '🁣', desc: 'חַבְּרוּ אֶת 11 קֻבִּיּוֹת הַדּוֹמִינוֹ לְפִי הַתְאָמָה בֵּין הַמִּלָּה לַצִּיּוּר!' },
  { num: 11, title: 'פְּעִילוּת 11: מִשְׂחַק זִכָּרוֹן מִלִּים וְצִיּוּרִים (18 קְלָפִים)', short: '11. מִשְׂחַק זִכָּרוֹן', icon: '🃏', desc: 'הִפְכוּ שְׁנֵי קְלָפִים בְּכָל תּוֹר וּמִצְאוּ אֶת 9 הַזּוּגוֹת שֶׁל מִלָּה וְצִיּוּר!' },
  { num: 12, title: 'פְּעִילוּת 12: תִּפְזוֹרֶת חִירִיק (7 תִּפְזוֹרוֹת קַלּוֹת)', short: '12. תִּפְזוֹרֶת חִירִיק', icon: '🔍', desc: 'מִצְאוּ אֶת הַמִּלָּה הַמְּבֻקֶּשֶׁת בְּכָל תִּפְזוֹרֶת וְכִתְבוּ כַּמָּה פְּעָמִים הִיא מוֹפִיעָה!' }
];

const POSITIVE_MESSAGES = [
  'כָּל הַכָּבוֹד! תְּשׁוּבָה נְכוֹנָה וּמְצֻיֶּנֶת! 🌟',
  'יוֹפִי שֶׁל קְרִיאָה! הַמְשִׁיכוּ כָּךְ! 🎉',
  'נֶהֱדָר! הִצְלַחְתֶּם בַּמְּשִׂימָה! ⭐',
  'אַלּוּפִים! זִהִיתֶם נָכוֹן אֶת תְּנוּעַת הַחִירִיק! 🏆'
];

const RETRY_MESSAGES = [
  'לֹא נוֹרָא! נַסּוּ שׁוּב בְּרוֹגַע, אַתֶּם יְכוֹלִים! 💪',
  'כִּמְעַט! הִתְבּוֹנְנוּ שׁוּב וּבַחֲרוּ אֶת הַתְּשׁוּבָה הַמַּתְאִימָה 💡',
  'בּוֹאוּ נְנַסֶּה פַּעַם נוֹסֶפֶת! קִרְאוּ בְּשִׂים לֵב 🌈'
];

// מצב האפליקציה
const state = {
  currentView: 'hub', // 'hub' או 1..12
  totalSuccesses: 0,
  completedStages: {}, // { 1: true, ... }
  solvedIds: new Set(),

  // מצב פנימי לכל פעילות
  act1Listened: new Set(),
  act2Index: 0,
  act3Index: 0,
  act5Index: 0,
  act6Index: 0,

  // פעילות 10 - דומינו
  dominoPlacedCount: 1, // קובייה ראשונה כבר על הלוח
  dominoBankOrder: [],

  // פעילות 11 - משחק זיכרון
  memoryDeck: [],
  memoryFlipped: [],
  memoryMatchedPairs: new Set(),
  memoryLocked: false,

  // פעילות 12 - 7 תפזורות
  wsCurrentIndex: 0,
  wsMarkedCells: {}, // { ws_1: Set('0,0', ...) }
  wsSolved: new Set()
};

let feedbackTimer = null;

// ==========================================
// אתחול ושמירת התקדמות
// ==========================================
function initApp() {
  loadProgress();
  initDominoBank();
  initMemoryGameData();
  renderTrophyShelf();
  renderNavBar();
  renderCurrentView();
  updateHeaderStats();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('inna_chirik_grade1_v1');
    if (raw) {
      const data = JSON.parse(raw);
      state.totalSuccesses = data.totalSuccesses || 0;
      state.completedStages = data.completedStages || {};
      if (Array.isArray(data.solvedIds)) {
        state.solvedIds = new Set(data.solvedIds);
      }
      if (Array.isArray(data.act1Listened)) {
        state.act1Listened = new Set(data.act1Listened);
      }
      if (Array.isArray(data.wsSolved)) {
        state.wsSolved = new Set(data.wsSolved);
      }
    }
  } catch (e) {
    console.warn('Could not load saved state:', e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem('inna_chirik_grade1_v1', JSON.stringify({
      totalSuccesses: state.totalSuccesses,
      completedStages: state.completedStages,
      solvedIds: Array.from(state.solvedIds),
      act1Listened: Array.from(state.act1Listened),
      wsSolved: Array.from(state.wsSolved)
    }));
  } catch (e) {
    console.warn('Could not save state:', e);
  }
}

function recordSuccess(uniqueId) {
  if (!state.solvedIds.has(uniqueId)) {
    state.solvedIds.add(uniqueId);
    state.totalSuccesses += 1;
    saveProgress();
    updateHeaderStats();
  }
}

function updateHeaderStats() {
  const sEl = document.getElementById('total-success-display');
  if (sEl) sEl.textContent = state.totalSuccesses;

  const earnedCount = Object.values(state.completedStages).filter(Boolean).length;
  const tEl = document.getElementById('total-trophies-display');
  if (tEl) tEl.textContent = `${earnedCount} / 12`;
}

// ==========================================
// מוזיקת רקע
// ==========================================
function toggleMusicUI() {
  const playing = audioEngine.toggleBackgroundMusic();
  const btn = document.getElementById('music-toggle-btn');
  const icon = document.getElementById('music-icon');
  const label = document.getElementById('music-label');
  if (playing) {
    btn.classList.add('playing');
    icon.textContent = '🎶';
    label.textContent = 'מוּסִיקַת רֶקַע: פּוֹעֶלֶת';
  } else {
    btn.classList.remove('playing');
    icon.textContent = '🎵';
    label.textContent = 'מוּסִיקַת רֶקַע: כְּבוּיָה';
  }
}

// ==========================================
// חיזוק חיובי, עידוד לתיקון, וחגיגת גביע בסיום שלב
// ==========================================
function showFeedback(isSuccess, customText = null) {
  const banner = document.getElementById('inline-feedback');
  const iconEl = document.getElementById('inline-feedback-icon');
  const textEl = document.getElementById('inline-feedback-text');
  if (!banner) return;

  if (feedbackTimer) clearTimeout(feedbackTimer);

  banner.classList.remove('hidden', 'success', 'retry');
  if (isSuccess) {
    banner.classList.add('success');
    iconEl.textContent = '🌟';
    textEl.textContent = customText || POSITIVE_MESSAGES[Math.floor(Math.random() * POSITIVE_MESSAGES.length)];
    audioEngine.playSuccessChime();
    fireConfetti(30);
  } else {
    banner.classList.add('retry');
    iconEl.textContent = '💡';
    textEl.textContent = customText || RETRY_MESSAGES[Math.floor(Math.random() * RETRY_MESSAGES.length)];
    audioEngine.playGentleRetry();
  }

  feedbackTimer = setTimeout(() => {
    banner.classList.add('hidden');
  }, 3800);
}

function awardStageTrophy(stageNum) {
  state.completedStages[stageNum] = true;
  saveProgress();
  renderTrophyShelf();
  renderNavBar();
  updateHeaderStats();

  const meta = STAGES_META.find(s => s.num === stageNum);
  const modal = document.getElementById('stage-celebration-modal');
  const titleEl = document.getElementById('celebration-title');
  const subEl = document.getElementById('celebration-subtitle');
  const nextBtn = document.getElementById('modal-next-btn');

  if (titleEl && meta) {
    titleEl.textContent = `כָּל הַכָּבוֹד! סִיַּמְתֶּם אֶת ${meta.short}! 🏆`;
  }
  if (subEl) {
    subEl.textContent = 'זָכִיתֶם בְּגָבִיעַ זָהָב, קוֹנְפֶטִי וּמְחִיאוֹת כַּפַּיִם סוֹעֲרוֹת! 👏🎉';
  }
  if (nextBtn) {
    if (stageNum < 12) {
      nextBtn.textContent = `הַמְשִׁיכוּ לִפְעִילוּת ${stageNum + 1} 🚀`;
    } else {
      nextBtn.textContent = 'חֲזָרָה לְלוּחַ הַפְּעִילוּיוֹת הָרָאשִׁי 🏠';
    }
  }

  if (modal) modal.classList.remove('hidden');
  audioEngine.playStageCelebration();
  fireConfetti(110);
}

function closeCelebrationModal() {
  const modal = document.getElementById('stage-celebration-modal');
  if (modal) modal.classList.add('hidden');
}

function goToNextStageFromModal() {
  closeCelebrationModal();
  if (typeof state.currentView === 'number' && state.currentView < 12) {
    switchStage(state.currentView + 1);
  } else {
    switchStage('hub');
  }
}

// ==========================================
// מדף הגביעים וסרגל הניווט
// ==========================================
function renderTrophyShelf() {
  const shelf = document.getElementById('trophy-shelf');
  if (!shelf) return;
  shelf.innerHTML = STAGES_META.map(s => {
    const earned = !!state.completedStages[s.num];
    return `
      <div class="trophy-slot ${earned ? 'earned' : ''}"
           title="${s.title}"
           onclick="switchStage(${s.num})">
        🏆
        <span class="slot-num">${s.num}</span>
      </div>
    `;
  }).join('');
}

function renderNavBar() {
  const nav = document.getElementById('activities-nav');
  if (!nav) return;

  let html = `
    <button class="nav-pill ${state.currentView === 'hub' ? 'active' : ''}" onclick="switchStage('hub')">
      🏠 <span>לֻחַ הַפְּעִילוּיוֹת (12)</span>
    </button>
  `;

  STAGES_META.forEach(s => {
    const isActive = state.currentView === s.num;
    const isDone = !!state.completedStages[s.num];
    html += `
      <button class="nav-pill ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}"
              onclick="switchStage(${s.num})">
        <span>${s.icon}</span>
        <span>${s.short}</span>
        ${isDone ? '<span>🏆</span>' : ''}
      </button>
    `;
  });

  nav.innerHTML = html;
}

function switchStage(target) {
  state.currentView = target;
  const banner = document.getElementById('inline-feedback');
  if (banner) banner.classList.add('hidden');
  renderNavBar();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentView() {
  const viewport = document.getElementById('stage-viewport');
  if (!viewport) return;

  if (state.currentView === 'hub') {
    renderHubView(viewport);
    return;
  }

  switch (state.currentView) {
    case 1: renderActivity1(viewport); break;
    case 2: renderActivity2(viewport); break;
    case 3: renderActivity3(viewport); break;
    case 4: renderActivity4(viewport); break;
    case 5: renderActivity5(viewport); break;
    case 6: renderActivity6(viewport); break;
    case 7: renderActivity7(viewport); break;
    case 8: renderActivity8(viewport); break;
    case 9: renderActivity9(viewport); break;
    case 10: renderActivity10(viewport); break;
    case 11: renderActivity11(viewport); break;
    case 12: renderActivity12(viewport); break;
    default: renderHubView(viewport);
  }
}

// ==========================================
// תפריט הבית - 12 כרטיסי הפעילויות
// ==========================================
function renderHubView(container) {
  const cardsHtml = STAGES_META.map(s => {
    const isDone = !!state.completedStages[s.num];
    return `
      <div class="hub-card ${isDone ? 'done' : ''}" onclick="switchStage(${s.num})">
        <div>
          <div class="hub-card-top">
            <span class="hub-num-badge">${s.icon} פְּעִילוּת ${s.num}</span>
            <span class="hub-trophy-status">${isDone ? '🏆 הֻשְׁלַם!' : '⭐'}</span>
          </div>
          <h3 style="margin-top:10px;">${s.title.replace(/^פְּעִילוּת \d+:\s*/, '')}</h3>
          <p style="margin-top:6px;">${s.desc}</p>
        </div>
        <button class="hub-start-btn">
          ${isDone ? 'שַׂחֲקוּ שׁוּב 🔄' : 'הַתְחִילוּ פְּעִילוּת 👈'}
        </button>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>🏫 בְּרוּכִים הַבָּאִים לְכִתָּה א' - בַּחֲרוּ פְּעִילוּת לִלְמִידָה וּלְתִרְגּוּל!</h2>
        <p>לִפְנֵיכֶם 12 פְּעִילוּיוֹת חֲוָיָתִיּוֹת לְהַכָּרַת תְּנוּעַת הַחִירִיק. בְּסוֹף כָּל פְּעִילוּת תִּזְכּוּ בְּגָבִיעַ, קוֹנְפֶטִי וּמְחִיאוֹת כַּפַּיִם!</p>
      </div>
    </div>
    <div class="hub-grid">
      ${cardsHtml}
    </div>
  `;
}

// ==========================================
// פעילות 1: הכרת 23 הצירופים בתנועת חיריק
// ==========================================
function renderActivity1(container) {
  const listenedCount = state.act1Listened.size;
  const totalCount = ACT1_SYLLABLES.length;

  const cardsHtml = ACT1_SYLLABLES.map(item => {
    const isListened = state.act1Listened.has(item.id);
    const svg = ILLUSTRATIONS[item.img] || '';
    return `
      <div class="syllable-card ${isListened ? 'listened' : ''}"
           onclick="handleSyllableClick('${item.id}')">
        <span class="syllable-check">${isListened ? '✅' : '⭐'}</span>
        <div class="syllable-badge">${item.pair}</div>
        <div class="syllable-art">${svg}</div>
        <div class="syllable-word">${item.word}</div>
        <span class="speaker-pill">👆 לַחֲצוּ עַל הַצֵּרוּף</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[0].title}</h2>
        <p>קִרְאוּ אֶת הַצֵּרוּפִים בִּתְנוּעַת חִירִיק וְלַחֲצוּ עַל כָּל כַּרְטִיס כְּדֵי לְהַכִּיר אֶת הַצֵּרוּף וְהַצִּיּוּר הַמַּתְאִים!</p>
      </div>
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        <span class="stage-progress-pill">הִכַּרְתֶּם: ${listenedCount} / ${totalCount} צֵרוּפִים</span>
        <button class="hub-start-btn" style="width:auto; padding:8px 18px;" onclick="awardStageTrophy(1)">
          🏆 סִיַּמְתִּי לְהַכִּיר אֶת הַצֵּרוּפִים!
        </button>
      </div>
    </div>
    <div class="syllables-grid">
      ${cardsHtml}
    </div>
  `;
}

function handleSyllableClick(id) {
  const item = ACT1_SYLLABLES.find(x => x.id === id);
  if (!item) return;

  // צליל נעים בלחיצה (ללא דיבוב)
  audioEngine.playTone(660, 'sine', 0.12, 0, 0.08);

  const wasNew = !state.act1Listened.has(id);
  state.act1Listened.add(id);
  recordSuccess(`act1_${id}`);

  renderActivity1(document.getElementById('stage-viewport'));

  if (wasNew && state.act1Listened.size === ACT1_SYLLABLES.length) {
    awardStageTrophy(1);
  }
}

// ==========================================
// פעילויות מבוססות כרטיסי שאלות (2, 3, 5, 6)
// ==========================================
function renderStepDots(questions, currentIndex, onSelectFnName) {
  return `
    <div style="display:flex; justify-content:center; gap:8px; margin-bottom:18px; flex-wrap:wrap;">
      ${questions.map((q, idx) => {
        const solved = state.solvedIds.has(q.id);
        const active = idx === currentIndex;
        return `
          <button onclick="${onSelectFnName}(${idx})"
                  style="width:42px; height:42px; border-radius:12px; font-weight:800; font-size:1.1rem; cursor:pointer;
                         border:2px solid ${active ? '#0D47A1' : solved ? '#4CAF50' : '#CFD8DC'};
                         background:${active ? '#1E88E5' : solved ? '#E8F5E9' : '#FFFFFF'};
                         color:${active ? '#FFFFFF' : solved ? '#1B5E20' : '#37474F'};">
            ${idx + 1}
          </button>
        `;
      }).join('')}
    </div>
  `;
}

// פעילות 2: מה מתחיל בצרוף? (3 ציורים)
function renderActivity2(container) {
  const q = ACT2_QUESTIONS[state.act2Index];
  const solvedCount = ACT2_QUESTIONS.filter(x => state.solvedIds.has(x.id)).length;

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[1].title}</h2>
        <p>${STAGES_META[1].desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${ACT2_QUESTIONS.length}</span>
    </div>

    ${renderStepDots(ACT2_QUESTIONS, state.act2Index, 'setAct2Step')}

    <div class="question-card-wrap">
      <div class="prompt-banner">
        <span style="font-size:1.65rem; font-weight:800; color:#37474F;">מָה מַתְחִיל בַּצֵּרוּף:</span>
        <span class="big-target-text">${q.blend} ?</span>
      </div>

      <div class="choices-grid-3">
        ${q.options.map((opt, idx) => {
          const isSolved = state.solvedIds.has(q.id) && opt.isCorrect;
          return `
            <div id="a2_opt_${idx}" class="choice-pic-card ${isSolved ? 'correct-pick' : ''}"
                 onclick="checkAct2Choice(${idx})">
              <div class="choice-svg-box">${ILLUSTRATIONS[opt.img] || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function setAct2Step(idx) {
  state.act2Index = idx;
  renderActivity2(document.getElementById('stage-viewport'));
}

function checkAct2Choice(optIdx) {
  const q = ACT2_QUESTIONS[state.act2Index];
  const opt = q.options[optIdx];
  const cardEl = document.getElementById(`a2_opt_${optIdx}`);

  if (opt.isCorrect) {
    if (cardEl) cardEl.classList.add('correct-pick');
    recordSuccess(q.id);
    showFeedback(true, `כָּל הַכָּבוֹד! "${opt.label}" מַתְחִיל בַּצֵּרוּף ${q.blend}! 🌟`);

    const allDone = ACT2_QUESTIONS.every(x => state.solvedIds.has(x.id));
    setTimeout(() => {
      if (allDone) {
        awardStageTrophy(2);
      } else if (state.act2Index < ACT2_QUESTIONS.length - 1) {
        state.act2Index++;
        renderActivity2(document.getElementById('stage-viewport'));
      } else {
        renderActivity2(document.getElementById('stage-viewport'));
      }
    }, 1100);
  } else {
    if (cardEl) {
      cardEl.classList.add('wrong-pick');
      setTimeout(() => cardEl.classList.remove('wrong-pick'), 600);
    }
    showFeedback(false, 'לֹא מְדֻיָּק... הַקְשִׁיבוּ לַצְּלִיל הַפּוֹתֵחַ וְנַסּוּ שׁוּב! 💡');
  }
}

// פעילות 3: איזה ציור מתאים למילה הכתובה? (2 ציורים)
function renderActivity3(container) {
  const q = ACT3_QUESTIONS[state.act3Index];
  const solvedCount = ACT3_QUESTIONS.filter(x => state.solvedIds.has(x.id)).length;

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[2].title}</h2>
        <p>${STAGES_META[2].desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${ACT3_QUESTIONS.length}</span>
    </div>

    ${renderStepDots(ACT3_QUESTIONS, state.act3Index, 'setAct3Step')}

    <div class="question-card-wrap">
      <div class="prompt-banner">
        <span style="font-size:1.65rem; font-weight:800; color:#37474F;">אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה:</span>
        <span class="big-target-text">${q.word}</span>
      </div>

      <div class="choices-grid-2">
        ${q.options.map((opt, idx) => {
          const isSolved = state.solvedIds.has(q.id) && opt.isCorrect;
          return `
            <div id="a3_opt_${idx}" class="choice-pic-card ${isSolved ? 'correct-pick' : ''}"
                 onclick="checkAct3Choice(${idx})">
              <div class="choice-svg-box">${ILLUSTRATIONS[opt.img] || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function setAct3Step(idx) {
  state.act3Index = idx;
  renderActivity3(document.getElementById('stage-viewport'));
}

function checkAct3Choice(optIdx) {
  const q = ACT3_QUESTIONS[state.act3Index];
  const opt = q.options[optIdx];
  const cardEl = document.getElementById(`a3_opt_${optIdx}`);

  if (opt.isCorrect) {
    if (cardEl) cardEl.classList.add('correct-pick');
    recordSuccess(q.id);
    showFeedback(true, `נֶהֱדָר! הַצִּיּוּר מַתְאִים לַמִּלָּה "${q.word}"! 🌟`);

    const allDone = ACT3_QUESTIONS.every(x => state.solvedIds.has(x.id));
    setTimeout(() => {
      if (allDone) {
        awardStageTrophy(3);
      } else if (state.act3Index < ACT3_QUESTIONS.length - 1) {
        state.act3Index++;
        renderActivity3(document.getElementById('stage-viewport'));
      } else {
        renderActivity3(document.getElementById('stage-viewport'));
      }
    }, 1100);
  } else {
    if (cardEl) {
      cardEl.classList.add('wrong-pick');
      setTimeout(() => cardEl.classList.remove('wrong-pick'), 600);
    }
    showFeedback(false, 'קִרְאוּ שׁוּב אֶת הַמִּלָּה בְּשִׂים לֵב וּבַחֲרוּ אֶת הַצִּיּוּר הַמַּתְאִים! 💡');
  }
}

// ==========================================
// פעילות 4: מילה חסרה במשפט (7 משפטים)
// ==========================================
function renderActivity4(container) {
  renderSentencesActivity(container, 4, ACT4_SENTENCES);
}

function renderActivity7(container) {
  renderSentencesActivity(container, 7, ACT7_SENTENCES);
}

function renderSentencesActivity(container, stageNum, sentencesList) {
  const meta = STAGES_META[stageNum - 1];
  const solvedCount = sentencesList.filter(s => state.solvedIds.has(s.id)).length;

  const rowsHtml = sentencesList.map((item, idx) => {
    const isSolved = state.solvedIds.has(item.id);
    const fillWord = isSolved ? item.correct : '______';
    return `
      <div class="sentence-row-card ${isSolved ? 'solved' : ''}" id="sent_row_${item.id}">
        <div class="sentence-visual-and-text">
          <div class="mini-illust">${ILLUSTRATIONS[item.img] || ''}</div>
          <div class="sentence-text-line">
            <span>${idx + 1}. ${item.before}</span><span class="blank-slot">${fillWord}</span><span>${item.after}</span>
          </div>
        </div>
        <div class="word-options-pair">
          ${item.options.map((w, wIdx) => {
            const isCorrectBtn = isSolved && w === item.correct;
            return `
              <button class="word-option-btn ${isCorrectBtn ? 'correct' : ''}"
                      id="btn_${item.id}_${wIdx}"
                      ${isSolved ? 'disabled' : ''}
                      onclick="checkSentenceWord(${stageNum}, '${item.id}', ${wIdx})">
                ${w}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${meta.title}</h2>
        <p>${meta.desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${sentencesList.length}</span>
    </div>
    <div class="sentences-list">
      ${rowsHtml}
    </div>
  `;
}

function checkSentenceWord(stageNum, itemId, optionIdx) {
  const list = stageNum === 4 ? ACT4_SENTENCES : ACT7_SENTENCES;
  const item = list.find(x => x.id === itemId);
  if (!item) return;

  const chosen = item.options[optionIdx];
  const btnEl = document.getElementById(`btn_${itemId}_${optionIdx}`);

  if (chosen === item.correct) {
    recordSuccess(item.id);
    showFeedback(true, `מצוין! הַמִּלָּה "${item.correct}" מַשְׁלִימָה אֶת הַמִּשְׁפָּט נָכוֹן! 🌟`);
    renderSentencesActivity(document.getElementById('stage-viewport'), stageNum, list);

    if (list.every(x => state.solvedIds.has(x.id))) {
      setTimeout(() => awardStageTrophy(stageNum), 700);
    }
  } else {
    if (btnEl) {
      btnEl.classList.add('wrong');
      setTimeout(() => btnEl.classList.remove('wrong'), 500);
    }
    showFeedback(false, 'נסו את המילה השנייה כדי שהמשפט יהיה הגיוני ונכון! 💡');
  }
}

// ==========================================
// פעילות 5: תנועת חיריק באמצע המילה (7 שאלות, 3 ציורים)
// ==========================================
function renderActivity5(container) {
  const q = ACT5_QUESTIONS[state.act5Index];
  const solvedCount = ACT5_QUESTIONS.filter(x => state.solvedIds.has(x.id)).length;

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[4].title}</h2>
        <p>${STAGES_META[4].desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${ACT5_QUESTIONS.length}</span>
    </div>

    ${renderStepDots(ACT5_QUESTIONS, state.act5Index, 'setAct5Step')}

    <div class="question-card-wrap">
      <div class="prompt-banner">
        <span style="font-size:1.6rem; font-weight:800; color:#37474F;">הֵיכָן שׁוֹמְעִים</span>
        <span class="big-target-text">${q.blend}</span>
        <span style="font-size:1.6rem; font-weight:800; color:#37474F;">בְּאֶמְצַע הַמִּלָּה?</span>
      </div>

      <div class="choices-grid-3">
        ${q.options.map((opt, idx) => {
          const isSolved = state.solvedIds.has(q.id) && opt.isCorrect;
          return `
            <div id="a5_opt_${idx}" class="choice-pic-card ${isSolved ? 'correct-pick' : ''}"
                 onclick="checkAct5Choice(${idx})">
              <div class="choice-svg-box">${ILLUSTRATIONS[opt.img] || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function setAct5Step(idx) {
  state.act5Index = idx;
  renderActivity5(document.getElementById('stage-viewport'));
}

function checkAct5Choice(optIdx) {
  const q = ACT5_QUESTIONS[state.act5Index];
  const opt = q.options[optIdx];
  const cardEl = document.getElementById(`a5_opt_${optIdx}`);

  if (opt.isCorrect) {
    if (cardEl) cardEl.classList.add('correct-pick');
    recordSuccess(q.id);
    showFeedback(true, `יָפֶה מְאֹד! בַּמִּלָּה "${q.targetWord}" שׁוֹמְעִים ${q.blend} בְּאֶמְצַע הַמִּלָּה! 🌟`);

    const allDone = ACT5_QUESTIONS.every(x => state.solvedIds.has(x.id));
    setTimeout(() => {
      if (allDone) {
        awardStageTrophy(5);
      } else if (state.act5Index < ACT5_QUESTIONS.length - 1) {
        state.act5Index++;
        renderActivity5(document.getElementById('stage-viewport'));
      } else {
        renderActivity5(document.getElementById('stage-viewport'));
      }
    }, 1100);
  } else {
    if (cardEl) {
      cardEl.classList.add('wrong-pick');
      setTimeout(() => cardEl.classList.remove('wrong-pick'), 600);
    }
    showFeedback(false, 'אִמְרוּ בְּקוֹל אֶת שֵׁם הַצִּיּוּר וּבִדְקוּ הֵיכָן שׁוֹמְעִים אֶת הַצֵּרוּף בְּאֶמְצַע הַמִּלָּה! 💡');
  }
}

// ==========================================
// פעילות 6: איזה ציור מתאים למילה הכתובה? (חיריק באמצע מילה)
// ==========================================
function renderActivity6(container) {
  const q = ACT6_QUESTIONS[state.act6Index];
  const solvedCount = ACT6_QUESTIONS.filter(x => state.solvedIds.has(x.id)).length;

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[5].title}</h2>
        <p>${STAGES_META[5].desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${ACT6_QUESTIONS.length}</span>
    </div>

    ${renderStepDots(ACT6_QUESTIONS, state.act6Index, 'setAct6Step')}

    <div class="question-card-wrap">
      <div class="prompt-banner">
        <span style="font-size:1.65rem; font-weight:800; color:#37474F;">אֵיזֶה צִיּוּר מַתְאִים לַמִּלָּה:</span>
        <span class="big-target-text">${q.word}</span>
      </div>

      <div class="choices-grid-2">
        ${q.options.map((opt, idx) => {
          const isSolved = state.solvedIds.has(q.id) && opt.isCorrect;
          return `
            <div id="a6_opt_${idx}" class="choice-pic-card ${isSolved ? 'correct-pick' : ''}"
                 onclick="checkAct6Choice(${idx})">
              <div class="choice-svg-box">${ILLUSTRATIONS[opt.img] || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function setAct6Step(idx) {
  state.act6Index = idx;
  renderActivity6(document.getElementById('stage-viewport'));
}

function checkAct6Choice(optIdx) {
  const q = ACT6_QUESTIONS[state.act6Index];
  const opt = q.options[optIdx];
  const cardEl = document.getElementById(`a6_opt_${optIdx}`);

  if (opt.isCorrect) {
    if (cardEl) cardEl.classList.add('correct-pick');
    recordSuccess(q.id);
    showFeedback(true, `אַלּוּפִים! הַצִּיּוּר מַתְאִים לַמִּלָּה "${q.word}"! 🌟`);

    const allDone = ACT6_QUESTIONS.every(x => state.solvedIds.has(x.id));
    setTimeout(() => {
      if (allDone) {
        awardStageTrophy(6);
      } else if (state.act6Index < ACT6_QUESTIONS.length - 1) {
        state.act6Index++;
        renderActivity6(document.getElementById('stage-viewport'));
      } else {
        renderActivity6(document.getElementById('stage-viewport'));
      }
    }, 1100);
  } else {
    if (cardEl) {
      cardEl.classList.add('wrong-pick');
      setTimeout(() => cardEl.classList.remove('wrong-pick'), 600);
    }
    showFeedback(false, 'קִרְאוּ שׁוּב אֶת הַמִּלָּה הַכְּתוּבָה וְנַסּוּ אֶת הַצִּיּוּר הַשֵּׁנִי! 💡');
  }
}

// ==========================================
// פעילות 8: איזה משפט מתאים לציור? (5 ציורים)
// ==========================================
function renderActivity8(container) {
  const solvedCount = ACT8_ITEMS.filter(x => state.solvedIds.has(x.id)).length;

  const listHtml = ACT8_ITEMS.map((item, idx) => {
    const isSolved = state.solvedIds.has(item.id);
    return `
      <div class="scene-quiz-card ${isSolved ? 'solved' : ''}">
        <div class="scene-art-box">${ILLUSTRATIONS[item.img] || ''}</div>
        <div class="scene-sentences-col">
          <div style="font-weight:800; color:#546E7A; font-size:1rem;">צִיּוּר ${idx + 1} - בַּחֲרוּ אֶת הַמִּשְׁפָּט הַמַּתְאִים:</div>
          ${item.options.map((opt, oIdx) => {
            const isCorrectBtn = isSolved && opt.isCorrect;
            return `
              <button class="sentence-choice-btn ${isCorrectBtn ? 'correct' : ''}"
                      id="act8_btn_${item.id}_${oIdx}"
                      ${isSolved ? 'disabled' : ''}
                      onclick="checkAct8Choice('${item.id}', ${oIdx})">
                ${opt.text}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[7].title}</h2>
        <p>${STAGES_META[7].desc}</p>
      </div>
      <span class="stage-progress-pill">הֻשְׁלְמוּ: ${solvedCount} / ${ACT8_ITEMS.length}</span>
    </div>
    <div class="scene-quiz-list">
      ${listHtml}
    </div>
  `;
}

function checkAct8Choice(itemId, optionIdx) {
  const item = ACT8_ITEMS.find(x => x.id === itemId);
  if (!item) return;

  const opt = item.options[optionIdx];
  const btnEl = document.getElementById(`act8_btn_${itemId}_${optionIdx}`);

  if (opt.isCorrect) {
    recordSuccess(item.id);
    showFeedback(true, 'כָּל הַכָּבוֹד! הַמִּשְׁפָּט מַתְאִים בְּדִיּוּק לַצִּיּוּר! 🌟');
    renderActivity8(document.getElementById('stage-viewport'));

    if (ACT8_ITEMS.every(x => state.solvedIds.has(x.id))) {
      setTimeout(() => awardStageTrophy(8), 700);
    }
  } else {
    if (btnEl) {
      btnEl.classList.add('wrong');
      setTimeout(() => btnEl.classList.remove('wrong'), 500);
    }
    showFeedback(false, 'הִתְבּוֹנְנוּ הֵיטֵב בַּצִּיּוּר וְקִרְאוּ אֶת הַמִּשְׁפָּט הַשֵּׁנִי! 💡');
  }
}

// ==========================================
// פעילות 9: סיפור קצר "הצעיף של דביר" + 9 שאלות רב-ברירה
// ==========================================
function renderActivity9(container) {
  const questions = ACT9_STORY.questions;
  const solvedCount = questions.filter(q => state.solvedIds.has(q.id)).length;

  const questionsHtml = questions.map(q => {
    const isSolved = state.solvedIds.has(q.id);
    return `
      <div class="story-q-card ${isSolved ? 'solved' : ''}">
        <div class="story-q-title">${q.q}</div>
        <div class="story-q-options">
          ${q.options.map((optText, oIdx) => {
            const isCorrectBtn = isSolved && oIdx === q.correctIndex;
            return `
              <button class="sentence-choice-btn ${isCorrectBtn ? 'correct' : ''}"
                      style="font-size:1.25rem; text-align:center;"
                      id="act9_btn_${q.id}_${oIdx}"
                      ${isSolved ? 'disabled' : ''}
                      onclick="checkAct9Answer('${q.id}', ${oIdx})">
                ${optText}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[8].title}</h2>
        <p>${STAGES_META[8].desc}</p>
      </div>
      <span class="stage-progress-pill">שְׁאֵלוֹת שֶׁנֶּעֱנוּ: ${solvedCount} / ${questions.length}</span>
    </div>

    <div class="story-paper">
      <div>
        <h3 class="story-title">🧣 ${ACT9_STORY.title}</h3>
        <div class="story-lines">
          ${ACT9_STORY.lines.map(line => `<p>${line}</p>`).join('')}
        </div>
      </div>
      <div class="story-illust-box">
        ${ILLUSTRATIONS.tzaif}
      </div>
    </div>

    <div class="story-questions-grid">
      ${questionsHtml}
    </div>
  `;
}

function checkAct9Answer(qId, chosenIdx) {
  const q = ACT9_STORY.questions.find(x => x.id === qId);
  if (!q) return;

  const btnEl = document.getElementById(`act9_btn_${qId}_${chosenIdx}`);
  if (chosenIdx === q.correctIndex) {
    recordSuccess(q.id);
    showFeedback(true, 'תְּשׁוּבָה נְכוֹנָה! הֲבָנַת הַנִּקְרָא מְצֻיֶּנֶת! 🌟');
    renderActivity9(document.getElementById('stage-viewport'));

    if (ACT9_STORY.questions.every(x => state.solvedIds.has(x.id))) {
      setTimeout(() => awardStageTrophy(9), 700);
    }
  } else {
    if (btnEl) {
      btnEl.classList.add('wrong');
      setTimeout(() => btnEl.classList.remove('wrong'), 500);
    }
    showFeedback(false, 'חִזְרוּ לַסִּפּוּר, קִרְאוּ שׁוּב וְנַסּוּ תְּשׁוּבָה אַחֶרֶת! 💡');
  }
}

// ==========================================
// פעילות 10: משחק דומינו מילים בתנועת חיריק (11 קוביות דומינו)
// ==========================================
function initDominoBank() {
  const remaining = ACT10_DOMINO_CHAIN.slice(1).map((item, idx) => ({
    ...item,
    chainIndex: idx + 1
  }));
  // ערבוב הקוביות במחסן
  for (let i = remaining.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
  }
  state.dominoBankOrder = remaining;
}

function renderActivity10(container) {
  const placedTiles = ACT10_DOMINO_CHAIN.slice(0, state.dominoPlacedCount);
  const currentLastTile = placedTiles[placedTiles.length - 1];
  const remainingTiles = state.dominoBankOrder.filter(t => t.chainIndex >= state.dominoPlacedCount);

  const boardHtml = placedTiles.map((tile, idx) => `
    <div class="domino-tile">
      <div class="domino-half pic-half" title="${tile.rightLabel}">
        <div class="domino-svg">${ILLUSTRATIONS[tile.rightImg] || ''}</div>
      </div>
      <div class="domino-half word-half">
        ${tile.leftWord}
      </div>
    </div>
    ${idx < placedTiles.length - 1 ? '<span style="font-size:1.5rem; font-weight:800; color:#2E7D32;">⬅</span>' : ''}
  `).join('');

  const bankHtml = remainingTiles.map(tile => `
    <div class="domino-tile selectable" id="dom_bank_${tile.id}" onclick="handleDominoPick('${tile.id}')">
      <div class="domino-half pic-half">
        <div class="domino-svg">${ILLUSTRATIONS[tile.rightImg] || ''}</div>
      </div>
      <div class="domino-half word-half">
        ${tile.leftWord}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[9].title}</h2>
        <p>קִרְאוּ אֶת הַמִּלָּה שֶׁבִּקְצֵה שַׁרְשֶׁרֶת הַדּוֹמִינוֹ, וְלַחֲצוּ עַל קֻבִּיַּת הַדּוֹמִינוֹ שֶׁיֵּשׁ בָּהּ אֶת <strong>הַצִּיּוּר הַמַּתְאִים</strong>!</p>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <span class="stage-progress-pill">קֻבִּיּוֹת בַּשַּׁרְשֶׁרֶת: ${state.dominoPlacedCount} / ${ACT10_DOMINO_CHAIN.length}</span>
        <button class="btn-secondary-large" onclick="resetDominoGame()">🔄 מֵחָדָשׁ</button>
      </div>
    </div>

    <div style="margin-bottom:12px; font-size:1.35rem; font-weight:800; color:#0D47A1;">
      ${currentLastTile.nextMatchImg
        ? `🎯 חַפְּשׂוּ קֻבִּיָּה עִם צִיּוּר שֶׁל: <span style="background:#FFF8E1; padding:4px 16px; border-radius:12px; border:2px solid #FFB300; color:#BF360C;">${currentLastTile.leftWord}</span>`
        : '🎉 הִשְׁלַמְתֶּם אֶת כָּל שַׁרְשֶׁרֶת הַדּוֹמִינוֹ!'}
    </div>

    <div class="domino-board-track">
      ${boardHtml}
    </div>

    ${remainingTiles.length > 0 ? `
      <h3 style="margin-bottom:10px; color:#37474F;">מַחְסַן קֻבִּיּוֹת הַדּוֹמִינוֹ (לַחֲצוּ עַל הַקֻּבִּיָּה הַמַּתְאִימָה):</h3>
      <div class="domino-bank">
        ${bankHtml}
      </div>
    ` : ''}
  `;
}

function handleDominoPick(tileId) {
  const expectedTile = ACT10_DOMINO_CHAIN[state.dominoPlacedCount];
  if (!expectedTile) return;

  if (tileId === expectedTile.id) {
    state.dominoPlacedCount++;
    recordSuccess(`act10_${tileId}`);
    showFeedback(true, `יוֹפִי! חִבַּרְתֶּם נָכוֹן אֶת קֻבִּיַּת הַדּוֹמִינוֹ "${expectedTile.rightLabel}"! 🁣`);
    renderActivity10(document.getElementById('stage-viewport'));

    if (state.dominoPlacedCount === ACT10_DOMINO_CHAIN.length) {
      setTimeout(() => awardStageTrophy(10), 600);
    }
  } else {
    const el = document.getElementById(`dom_bank_${tileId}`);
    if (el) {
      el.classList.add('wrong-shake');
      setTimeout(() => el.classList.remove('wrong-shake'), 500);
    }
    const currentLast = ACT10_DOMINO_CHAIN[state.dominoPlacedCount - 1];
    showFeedback(false, `חַפְּשׂוּ קֻבִּיָּה שֶׁמַּתְחִילָה בְּצִיּוּר שֶׁל "${currentLast.leftWord}"! 💡`);
  }
}

function resetDominoGame() {
  state.dominoPlacedCount = 1;
  initDominoBank();
  renderActivity10(document.getElementById('stage-viewport'));
}

// ==========================================
// פעילות 11: משחק זיכרון מילים וציורים בתנועת חיריק (14 קלפים = 7 זוגות)
// ==========================================
function initMemoryGameData() {
  const cards = [];
  ACT11_MEMORY_PAIRS.forEach(pair => {
    cards.push({
      uid: `${pair.pairId}_word`,
      pairId: pair.pairId,
      type: 'word',
      word: pair.word,
      img: pair.img
    });
    cards.push({
      uid: `${pair.pairId}_pic`,
      pairId: pair.pairId,
      type: 'pic',
      word: pair.word,
      img: pair.img
    });
  });

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  state.memoryDeck = cards;
  state.memoryFlipped = [];
  state.memoryMatchedPairs = new Set();
  state.memoryLocked = false;
}

function renderActivity11(container) {
  const matchedCount = state.memoryMatchedPairs.size;
  const totalPairs = ACT11_MEMORY_PAIRS.length;

  const gridHtml = state.memoryDeck.map((card, idx) => {
    const isFlipped = state.memoryFlipped.includes(idx);
    const isMatched = state.memoryMatchedPairs.has(card.pairId);
    return `
      <div class="mem-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}"
           onclick="handleMemoryFlip(${idx})">
        <div class="mem-card-inner">
          <div class="mem-face mem-front">⭐</div>
          <div class="mem-face mem-back">
            ${card.type === 'word'
              ? `<span class="mem-word-text">${card.word}</span>`
              : `<div class="mem-svg-wrap">${ILLUSTRATIONS[card.img] || ''}</div>`}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[10].title}</h2>
        <p>${STAGES_META[10].desc}</p>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <span class="stage-progress-pill">זוּגוֹת שֶׁנִּמְצְאוּ: ${matchedCount} / ${totalPairs}</span>
        <button class="btn-secondary-large" onclick="restartMemoryGame()">🔄 עַרְבֵּב מֵחָדָשׁ</button>
      </div>
    </div>

    <div class="memory-grid-14">
      ${gridHtml}
    </div>
  `;
}

function handleMemoryFlip(cardIdx) {
  if (state.memoryLocked) return;
  const card = state.memoryDeck[cardIdx];
  if (!card) return;
  if (state.memoryFlipped.includes(cardIdx) || state.memoryMatchedPairs.has(card.pairId)) return;

  state.memoryFlipped.push(cardIdx);
  renderActivity11(document.getElementById('stage-viewport'));

  if (state.memoryFlipped.length === 2) {
    state.memoryLocked = true;
    const [firstIdx, secondIdx] = state.memoryFlipped;
    const firstCard = state.memoryDeck[firstIdx];
    const secondCard = state.memoryDeck[secondIdx];

    if (firstCard.pairId === secondCard.pairId) {
      state.memoryMatchedPairs.add(firstCard.pairId);
      state.memoryFlipped = [];
      state.memoryLocked = false;
      recordSuccess(`act11_${firstCard.pairId}`);
      showFeedback(true, `מְצָאתֶם זוּג תּוֹאֵם: "${firstCard.word}"! 🌟`);
      renderActivity11(document.getElementById('stage-viewport'));

      if (state.memoryMatchedPairs.size === ACT11_MEMORY_PAIRS.length) {
        setTimeout(() => awardStageTrophy(11), 600);
      }
    } else {
      audioEngine.playGentleRetry();
      setTimeout(() => {
        state.memoryFlipped = [];
        state.memoryLocked = false;
        renderActivity11(document.getElementById('stage-viewport'));
      }, 1100);
    }
  }
}

function restartMemoryGame() {
  initMemoryGameData();
  renderActivity11(document.getElementById('stage-viewport'));
}

// ==========================================
// פעילות 12: 7 תפזורות נפרדות וקלות מאוד + כתיבת מספר המופעים
// ==========================================
function renderActivity12(container) {
  const ws = ACT12_WORDSEARCHES[state.wsCurrentIndex];
  if (!state.wsMarkedCells[ws.id]) {
    state.wsMarkedCells[ws.id] = new Set();
  }
  const markedSet = state.wsMarkedCells[ws.id];
  const isCurrentSolved = state.wsSolved.has(ws.id);

  const tabsHtml = ACT12_WORDSEARCHES.map((item, idx) => {
    const active = idx === state.wsCurrentIndex;
    const solved = state.wsSolved.has(item.id);
    return `
      <button class="ws-sub-btn ${active ? 'active' : ''} ${solved ? 'solved' : ''}"
              onclick="selectWordSearch(${idx})">
        ${idx + 1}. ${item.word} ${solved ? '✅' : ''}
      </button>
    `;
  }).join('');

  let cellsHtml = '';
  for (let r = 0; r < ws.grid.length; r++) {
    for (let c = 0; c < ws.grid[r].length; c++) {
      const key = `${r},${c}`;
      const isMarked = markedSet.has(key);
      cellsHtml += `
        <div class="ws-cell ${isMarked ? 'marked' : ''}"
             onclick="toggleWsCell('${ws.id}', ${r}, ${c})">
          ${ws.grid[r][c]}
        </div>
      `;
    }
  }

  container.innerHTML = `
    <div class="stage-header">
      <div class="stage-title-box">
        <h2>${STAGES_META[11].title}</h2>
        <p>לְכָל מִלָּה תִּפְזוֹרֶת קַלָּה נִפְרֶדֶת! לַחֲצוּ עַל אוֹתִיּוֹת הַמִּלָּה בַּלּוּחַ כְּדֵי לְסַמֵּן אוֹתָן, וְכִתְבוּ כַּמָּה פְּעָמִים מְצָאתֶם אֶת הַמִּלָּה!</p>
      </div>
      <span class="stage-progress-pill">תִּפְזוֹרוֹת שֶׁנִּפְתְּרוּ: ${state.wsSolved.size} / ${ACT12_WORDSEARCHES.length}</span>
    </div>

    <div class="ws-tabs-row">
      ${tabsHtml}
    </div>

    <div class="ws-workspace">
      <div class="ws-board">
        ${cellsHtml}
      </div>

      <div class="ws-question-panel">
        <div style="width:110px; height:110px;">${ILLUSTRATIONS[ws.img] || ''}</div>
        <h3 style="font-size:1.55rem; color:#0D47A1;">הַמִּלָּה לְחִפּוּשׂ: <span style="color:#C62828; font-size:2rem;">${ws.word}</span></h3>
        <p style="font-size:1.15rem; font-weight:700; color:#37474F;">
          כַּמָּה פְּעָמִים מוֹפִיעָה הַמִּלָּה "${ws.word}" בַּתִּפְזוֹרֶת?
        </p>

        <!-- אפשרות לבחור בלחיצה או להקליד בתיבה -->
        <div class="ws-count-buttons">
          ${[1, 2, 3, 4, 5].map(num => `
            <button class="count-num-btn ${isCurrentSolved && num === ws.correctCount ? 'correct' : ''}"
                    onclick="checkWsCount('${ws.id}', ${num})">
              ${num}
            </button>
          `).join('')}
        </div>

        <div class="count-input-row">
          <label for="ws-custom-input" style="font-weight:700;">אוֹ כִּתְבוּ מִסְפָּר:</label>
          <input id="ws-custom-input" type="number" min="1" max="9" class="ws-number-input"
                 value="${isCurrentSolved ? ws.correctCount : ''}"
                 placeholder="?">
          <button class="hub-start-btn" style="width:auto; padding:10px 18px;"
                  onclick="submitWsInput('${ws.id}')">
            בְּדִיקָה ✔️
          </button>
        </div>
      </div>
    </div>
  `;
}

function selectWordSearch(idx) {
  state.wsCurrentIndex = idx;
  renderActivity12(document.getElementById('stage-viewport'));
}

function toggleWsCell(wsId, r, c) {
  const ws = ACT12_WORDSEARCHES.find(x => x.id === wsId);
  if (!ws) return;
  if (!state.wsMarkedCells[wsId]) state.wsMarkedCells[wsId] = new Set();

  // אם התלמיד לחץ על אות ששייכת להופעה של המילה, נסמן את כל המילה לנוחות כיתה א'!
  const matchingOccurrence = ws.occurrences.find(occ =>
    occ.some(([or, oc]) => or === r && oc === c)
  );

  if (matchingOccurrence) {
    const firstKey = `${matchingOccurrence[0][0]},${matchingOccurrence[0][1]}`;
    const alreadyMarked = state.wsMarkedCells[wsId].has(firstKey);
    matchingOccurrence.forEach(([or, oc]) => {
      const k = `${or},${oc}`;
      if (alreadyMarked) {
        state.wsMarkedCells[wsId].delete(k);
      } else {
        state.wsMarkedCells[wsId].add(k);
      }
    });
    if (!alreadyMarked) {
      audioEngine.playTone(660, 'sine', 0.12, 0, 0.08);
    }
  } else {
    const key = `${r},${c}`;
    if (state.wsMarkedCells[wsId].has(key)) {
      state.wsMarkedCells[wsId].delete(key);
    } else {
      state.wsMarkedCells[wsId].add(key);
    }
  }

  renderActivity12(document.getElementById('stage-viewport'));
}

function submitWsInput(wsId) {
  const input = document.getElementById('ws-custom-input');
  if (!input) return;
  const val = parseInt(input.value, 10);
  if (isNaN(val)) {
    showFeedback(false, 'כִּתְבוּ מִסְפָּר בַּתֵּבָה אוֹ לַחֲצוּ עַל אֶחָד הַמִּסְפָּרִים! 💡');
    return;
  }
  checkWsCount(wsId, val);
}

function checkWsCount(wsId, chosenNum) {
  const ws = ACT12_WORDSEARCHES.find(x => x.id === wsId);
  if (!ws) return;

  if (chosenNum === ws.correctCount) {
    // סימון אוטומטי של כל הופעות המילה על הלוח
    if (!state.wsMarkedCells[wsId]) state.wsMarkedCells[wsId] = new Set();
    ws.occurrences.forEach(occ => {
      occ.forEach(([r, c]) => state.wsMarkedCells[wsId].add(`${r},${c}`));
    });

    state.wsSolved.add(wsId);
    recordSuccess(`act12_${wsId}`);
    saveProgress();
    showFeedback(true, `כָּל הַכָּבוֹד! הַמִּלָּה "${ws.word}" בֶּאֱמֶת מוֹפִיעָה ${ws.correctCount} פְּעָמִים בַּתִּפְזוֹרֶת! 🌟`);
    renderActivity12(document.getElementById('stage-viewport'));

    if (state.wsSolved.size === ACT12_WORDSEARCHES.length) {
      setTimeout(() => awardStageTrophy(12), 800);
    } else {
      setTimeout(() => {
        const nextUnsolved = ACT12_WORDSEARCHES.findIndex(x => !state.wsSolved.has(x.id));
        if (nextUnsolved !== -1) {
          state.wsCurrentIndex = nextUnsolved;
          renderActivity12(document.getElementById('stage-viewport'));
        }
      }, 1300);
    }
  } else {
    showFeedback(false, `סִפְרוּ שׁוּב בְּשִׂים לֵב כַּמָּה פְּעָמִים מוֹפִיעָה הַמִּלָּה "${ws.word}" בַּתִּפְזוֹרֶת! 💡`);
  }
}

// ==========================================
// מנוע קונפטי חגיגי
// ==========================================
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
let confettiPieces = [];
let confettiFrameId = null;

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfettiCanvas);
resizeConfettiCanvas();

function fireConfetti(amount = 60) {
  if (!confettiCanvas || !confettiCtx) return;
  const palette = ['#FF5252', '#FFD740', '#40C4FF', '#69F0AE', '#FF4081', '#E040FB', '#FFAB40'];
  for (let i = 0; i < amount; i++) {
    confettiPieces.push({
      x: confettiCanvas.width * (0.2 + Math.random() * 0.6),
      y: confettiCanvas.height * 0.25,
      vx: (Math.random() - 0.5) * 11,
      vy: Math.random() * -9 - 3,
      size: Math.random() * 9 + 6,
      color: palette[Math.floor(Math.random() * palette.length)],
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.26,
      opacity: 1
    });
  }
  if (!confettiFrameId) {
    animateConfettiLoop();
  }
}

function animateConfettiLoop() {
  if (!confettiCtx || !confettiCanvas) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const p = confettiPieces[i];
    p.x += p.vx;
    p.vy += p.gravity;
    p.y += p.vy;
    p.rot += p.rotSpeed;
    p.opacity -= 0.008;

    if (p.y > confettiCanvas.height + 30 || p.opacity <= 0) {
      confettiPieces.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.globalAlpha = Math.max(0, p.opacity);
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rot * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
    confettiCtx.restore();
  }

  if (confettiPieces.length > 0) {
    confettiFrameId = requestAnimationFrame(animateConfettiLoop);
  } else {
    confettiFrameId = null;
  }
}

// הפעלה בטעינת הדף
document.addEventListener('DOMContentLoaded', initApp);
