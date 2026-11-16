/**
 * מְנוֹעַ שֵׁמַע וְקָרְיָנוּת צֵרוּפִים (Web Audio API + Web Speech API)
 * כּוֹלֵל:
 * 1. מוּסִיקַת רֶקַע נְעִימָה וּמַרְגִּיעָה לִילָדִים בְּכִתָּה א' (עִם כַּפְתּוֹר הַפְעָלָה / כִּבּוּי)
 * 2. הַשְׁמָעַת הַצֵּרוּפִים בִּתְנוּעַת חִירִיק בִּלְחִיצָה עַל הַצֵּרוּף
 * 3. צְלִילֵי חִזּוּק חִיּוּבִי, עִדּוּד לְתִקּוּן, תְּרוּעַת גָּבִיעַ וּמְחִיאוֹת כַּפַּיִם
 */

class ClassroomAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMusicPlaying = false;
    this.musicTimer = null;
    this.melodyStep = 0;

    // מנגינת רקע רגועה, נעימה ומתוקה לילדי כיתה א' (תיבת נגינה / קסילופון עדין)
    this.lullabyNotes = [
      { f: 523.25, d: 0.45, p: 0.15 }, // C5
      { f: 659.25, d: 0.45, p: 0.15 }, // E5
      { f: 783.99, d: 0.45, p: 0.15 }, // G5
      { f: 659.25, d: 0.45, p: 0.20 }, // E5
      { f: 880.00, d: 0.50, p: 0.15 }, // A5
      { f: 783.99, d: 0.55, p: 0.25 }, // G5
      { f: 698.46, d: 0.45, p: 0.15 }, // F5
      { f: 659.25, d: 0.45, p: 0.15 }, // E5
      { f: 587.33, d: 0.45, p: 0.15 }, // D5
      { f: 523.25, d: 0.70, p: 0.45 }, // C5
      { f: 587.33, d: 0.45, p: 0.15 }, // D5
      { f: 659.25, d: 0.45, p: 0.15 }, // E5
      { f: 698.46, d: 0.45, p: 0.15 }, // F5
      { f: 783.99, d: 0.60, p: 0.25 }, // G5
      { f: 659.25, d: 0.45, p: 0.15 }, // E5
      { f: 587.33, d: 0.45, p: 0.15 }, // D5
      { f: 523.25, d: 0.80, p: 0.60 }  // C5
    ];
  }

  getContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playTone(freq, type = 'sine', duration = 0.25, startOffset = 0, volume = 0.12) {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime + startOffset;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume, now + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.02);
    } catch (e) {
      console.warn('Tone error:', e);
    }
  }

  // הפעלה או כיבוי של מוסיקת הרקע
  toggleBackgroundMusic() {
    this.getContext();
    if (this.isMusicPlaying) {
      this.stopBackgroundMusic();
    } else {
      this.startBackgroundMusic();
    }
    return this.isMusicPlaying;
  }

  startBackgroundMusic() {
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;
    this.melodyStep = 0;
    this.scheduleNextNote();
  }

  stopBackgroundMusic() {
    this.isMusicPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  scheduleNextNote() {
    if (!this.isMusicPlaying) return;
    const note = this.lullabyNotes[this.melodyStep];

    // צליל קסילופון רך ומרגיע בעוצמה עדינה שלא מפריעה ללמידה
    this.playTone(note.f, 'sine', note.d, 0, 0.035);
    if (this.melodyStep % 3 === 0) {
      this.playTone(note.f / 2, 'triangle', note.d * 1.3, 0, 0.02);
    }

    this.melodyStep = (this.melodyStep + 1) % this.lullabyNotes.length;
    this.musicTimer = setTimeout(() => {
      this.scheduleNextNote();
    }, (note.d + note.p) * 1000);
  }

  // צליל לחיצה נעים (ללא דיבוב)
  speakHebrew() {
    this.playTone(660, 'sine', 0.1, 0, 0.06);
  }

  // צליל הצלחה במשימה (חיזוק חיובי)
  playSuccessChime() {
    const chord = [523.25, 659.25, 783.99, 1046.50]; // C5 - E5 - G5 - C6
    chord.forEach((f, idx) => {
      this.playTone(f, 'triangle', 0.28, idx * 0.08, 0.16);
      this.playTone(f * 1.5, 'sine', 0.2, idx * 0.08, 0.06);
    });
  }

  // צליל עדין ומעודד במקרה של טעות ואפשרות לתיקון
  playGentleRetry() {
    this.playTone(392.00, 'sine', 0.2, 0, 0.11);
    this.playTone(349.23, 'sine', 0.28, 0.14, 0.10);
  }

  // תרועת ניצחון ומחיאות כפיים סוערות בסיום שלב!
  playStageCelebration() {
    // תרועת חצוצרות חגיגית
    const fanfare = [
      { f: 523.25, t: 0.00, d: 0.16 },
      { f: 523.25, t: 0.16, d: 0.16 },
      { f: 523.25, t: 0.32, d: 0.16 },
      { f: 659.25, t: 0.48, d: 0.26 },
      { f: 783.99, t: 0.72, d: 0.26 },
      { f: 1046.50, t: 0.98, d: 0.65 }
    ];
    fanfare.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, n.t, 0.20);
      this.playTone(n.f * 2, 'sine', n.d, n.t, 0.08);
    });

    // מחיאות כפיים של כיתה שלמה
    this.playApplause(2600);
  }

  playApplause(durationMs = 2400) {
    const ctx = this.getContext();
    if (!ctx) return;

    const clapsCount = 50;
    for (let i = 0; i < clapsCount; i++) {
      const delayMs = Math.random() * durationMs;
      setTimeout(() => {
        try {
          const bufferSize = Math.floor(ctx.sampleRate * 0.045);
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let j = 0; j < bufferSize; j++) {
            data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.4));
          }

          const noise = ctx.createBufferSource();
          noise.buffer = buffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.value = 1000 + Math.random() * 700;
          filter.Q.value = 2.2;

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.15 + Math.random() * 0.1, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

          noise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          noise.start();
        } catch (err) {
          // ignore
        }
      }, delayMs);
    }
  }
}

const audioEngine = new ClassroomAudioEngine();
