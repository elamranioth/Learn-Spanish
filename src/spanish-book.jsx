import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Menu, X, ChevronLeft, ChevronRight, ChevronDown, Bookmark, Languages, Quote, Lightbulb, NotebookPen, Sparkles, RotateCcw, Check, Clock, Zap, BookText, Library, ListTree, MessageSquare, GraduationCap, Compass, Search, Star, AlertTriangle, BarChart3, Headphones, Download } from 'lucide-react';
import { AppMessages } from './app-messages.jsx';
import { getDeviceProfile } from './device-profile.js';
import HomeDashboardView from './home-dashboard.jsx';
import InstallBanner from './install-banner.jsx';
import {
  AudioSettings,
  ExamplePair,
  InlineDictionaryText,
  KaraokeText,
  SpeakBtn,
  setAudioSettings,
  speak,
  stopAllAudio,
  warmupAudio,
} from './audio-text.jsx';
import { styles } from './book-styles.js';
import {
  findGoogleSyncFile,
  GOOGLE_CLIENT_ID_KEY,
  mergeSyncPayloads,
  readGoogleSyncPayload,
  requestGoogleDriveToken,
  writeGoogleSyncPayload,
} from './google-drive-sync.js';
import {
  getFirebasePersistenceStatus,
  hasFirebaseConfig,
  listUserLessonProgress,
  loadFirebaseAppState,
  loadPublicFirebaseConfig,
  mergeFirebasePayloads,
  observeFirebaseAuthState,
  parseFirebaseConfigJson,
  recordQuizAttempt,
  resolveFirebaseConfig,
  saveFirebaseAppState,
  saveFirebaseConfigToStorage,
  signInFirebaseAnonymously,
  signInFirebaseWithGoogle,
  signOutFirebase,
  upsertLesson,
  upsertQuestion,
  upsertQuiz,
  upsertUserLessonProgress,
  upsertUserRecordFromAuth,
  watchFirebaseAppState,
} from './firebase-sync.js';
import {
  LEARNER_PROFILE_KEY,
  buildEnhancedSearchResults,
  buildLearnerProfile,
  buildTeacherInsights,
  buildUnifiedReviewQueue,
  scheduleReview,
} from './learning.js';
import {
  LESSON_DATA_LOADERS,
  SECTIONS,
  collectLazyKeysForChapter,
  hydrateSectionsWithLazyData,
} from './lesson-data.js';
import {
  getLessonStatusLabel,
  isLessonReadStatus,
  isLessonUnderstoodStatus,
} from './lesson-status.js';
import { enrichSavedWordEntry, getMemoriaSummary } from './memoria-utils.js';
import { PALABRAS_PROGRESS_KEY, loadPalabrasGroups } from './palabras-lab.jsx';
import {
  buildRecommendedLessonCards,
  buildSectionProgress,
  buildVisibleFlatChapters,
  summarizeStudyProgress,
} from './progress.js';
import { SearchHighlightedText } from './search-highlight.jsx';
import { buildSectionLessonCards, getNestedLessonKey } from './section-lessons.js';
import { SectionOverviewView } from './section-overview.jsx';
import { translateWord as translateWordSmart } from './spanish-dictionary.js';
import { STUDY_TIME_KEY, normalizeStudyTimeState } from './study-time.js';
import { APP_VERSION, buildSyncMeta, getBuildId, getVersionLabel } from './version-info.js';

const ChapterContent = React.lazy(() => import('./chapter-content.jsx'));
const DictionaryPopup = React.lazy(() => import('./dictionary-popup.jsx').then((module) => ({ default: module.DictionaryPopup })));
const MemoriaView = React.lazy(() => import('./memoria-view.jsx').then((module) => ({ default: module.MemoriaView })));
const SyncPanel = React.lazy(() => import('./sync-panel.jsx'));

/* =============================================================
   SPANISH — A Personal Reading Book
   Designed as a quiet, editorial reading space.
   Two ink colors echo the original sketch: forest green + sienna.
   ============================================================= */

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const LESSON_STATUS_KEY = 'lesson-status-v1';
const AUDIO_SETTINGS_KEY = 'audio-settings-v1';
const WRITING_PRACTICE_KEY = 'writing-practice-v1';
const TRANSLATION_MODE_KEY = 'translation-mode-v1';
const BOOX_MODE_KEY = 'boox-mode-v1';
const INSTALL_DISMISSED_KEY = 'lexiora-install-dismissed-v1';

// Icon for each section — used in sidebar nav and chapter headers
const SECTION_ICONS = {
  tiempos: Clock,           // five tenses — time
  verbos: Zap,              // top 10 verbs — energy / action
  verbos2: Zap,             // top 10 part 2
  gramatica: ListTree,      // grammar rules — structure
  lectura: Library,         // reading — library
  vocabulario: BookText,    // word lists
  palabras: GraduationCap,  // 5000-word memorization lab
  frases: MessageSquare,    // useful phrases — speech bubble
  tips: Lightbulb,          // strategy tips
  practicar: Sparkles,      // centralized drills
};

function SectionIcon({ id, size = 18, className = '' }) {
  const Ico = SECTION_ICONS[id] || BookOpen;
  return <Ico size={size} className={className} />;
}

// =============================================================
// FORM PARSER — turns "[hub]e" into [{text:'hub',irreg:true},{text:'e',irreg:false}]
// =============================================================
// =============================================================
// EXAMPLE PAIR — Spanish + translation
// Only renders inline ("Spanish. (Translation.)") when BOTH sides
// are short enough to fit on a single line of a 6-inch e-ink screen.
// On a 6-inch screen at 18-20px, a line holds ~35-40 chars.
// Combined "Spanish (Translation)" must fit comfortably under that.
// =============================================================
// =============================================================
// VERB PRACTICE — quiz mode for conjugations
// Picks N random forms across all tenses, hides them, asks the user to type each one
// Strips accents for forgiving matching, shows correct answer on miss
// =============================================================
// =============================================================
// SPEAK BUTTON — uses browser's built-in speechSynthesis
// Free, offline, no API. Picks the best Spanish voice available.
// =============================================================
// Audio, speech, dictionary-token text, and example-pair components live in audio-text.jsx.

// =============================================================
// CHAPTER RENDERER - book-style content blocks
// =============================================================
// =============================================================
// MAIN APP
// =============================================================
// =============================================================
// DICTIONARY POPUP — tap/select any Spanish word to translate
// API: MyMemory (free, no key) + SpanishDict deep link
// =============================================================
// =============================================================
// =============================================================
// MEMORIA VIEW — saved words flashcard panel
// =============================================================
// Memoria helpers live in memoria-utils.js.

// Google Drive sync helpers live in google-drive-sync.js; study-time helpers live in study-time.js.

function todayStartMs() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}

function isLikelyBooxDevice() {
  if (typeof navigator === 'undefined') return false;
  const brands = (navigator.userAgentData?.brands || []).map((brand) => brand.brand).join(' ');
  const ua = `${navigator.userAgent || ''} ${brands}`;
  return /boox|onyx|e-?ink/i.test(ua);
}

export default function SpanishBook() {
  const [deviceProfile, setDeviceProfile] = useState(() => getDeviceProfile());
  const [activeSectionId, setActiveSectionId] = useState('tiempos');
  const [activeChapterId, setActiveChapterId] = useState('tiempos');
  const [sectionLandingId, setSectionLandingId] = useState(null);
  const [activeNestedTarget, setActiveNestedTarget] = useState(null);
  const [levelFilter, setLevelFilter] = useState('ALL');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [showMemoria, setShowMemoria] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [globalSearch, setGlobalSearch] = useState('');
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [audioSettings, setAudioSettingsState] = useState({ rate: 0.85, voiceURI: '' });
  const [translationMode, setTranslationMode] = useState('both');
  const [booxMode, setBooxMode] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [writingEntries, setWritingEntries] = useState([]);
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [syncOpen, setSyncOpen] = useState(false);
  const [firebaseConfigText, setFirebaseConfigText] = useState(() => {
    const config = resolveFirebaseConfig();
    return config ? JSON.stringify(config) : '';
  });
  const [firebaseReady, setFirebaseReady] = useState(() => hasFirebaseConfig());
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [firebaseBusy, setFirebaseBusy] = useState(false);
  const [firebaseLastSyncedAt, setFirebaseLastSyncedAt] = useState('');
  const [firebaseMessage, setFirebaseMessage] = useState('');
  const [firebasePersistenceNote, setFirebasePersistenceNote] = useState('');
  const [googleClientId, setGoogleClientId] = useState(import.meta.env.VITE_GOOGLE_CLIENT_ID || '');
  const [googleAccessToken, setGoogleAccessToken] = useState('');
  const [googleLastSyncedAt, setGoogleLastSyncedAt] = useState('');
  const [googleBusy, setGoogleBusy] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [syncAdvancedOpen, setSyncAdvancedOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installDismissed, setInstallDismissed] = useState(false);
  const [installMessage, setInstallMessage] = useState('');
  const [isInstalledApp, setIsInstalledApp] = useState(false);
  const [studyTime, setStudyTime] = useState(() => normalizeStudyTimeState());
  const [lazyLessonData, setLazyLessonData] = useState({});
  const syncDirtyRef = React.useRef(false);
  const syncHydratingRef = React.useRef(false);
  const lastAutoSyncAtRef = React.useRef(0);
  const lazyLessonLoadingRef = React.useRef(new Set());
  const firebaseAuthUnsubRef = React.useRef(null);
  const firebaseRealtimeUnsubRef = React.useRef(null);
  const firebaseApplyingRemoteRef = React.useRef(false);
  const lastFirebaseAutoSyncAtRef = React.useRef(0);
  const recordedPracticeAttemptsRef = React.useRef(new Set());
  const bookRootRef = React.useRef(null);
  const mobileBarRef = React.useRef(null);
  const globalSearchInputRef = React.useRef(null);

  // --- Font size: persists across sessions, applied to body via CSS variable ---
  const [fontScale, setFontScale] = useState(1.0); // multiplier: 0.85 → 1.3
  const [resumeOffer, setResumeOffer] = useState(null); // {sectionId, chapterId, title}

  // --- Memoria: saved words, persisted via window.storage ---
  const [savedWords, setSavedWords] = useState([]);
  const [visitedChapters, setVisitedChapters] = useState([]);
  const [palabrasProgress, setPalabrasProgress] = useState({});
  const [lessonStatuses, setLessonStatuses] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const updateProfile = () => setDeviceProfile(getDeviceProfile());
    updateProfile();
    window.addEventListener('resize', updateProfile);
    window.addEventListener('orientationchange', updateProfile);
    return () => {
      window.removeEventListener('resize', updateProfile);
      window.removeEventListener('orientationchange', updateProfile);
    };
  }, []);

  useEffect(() => {
    // Load saved words, font scale, and last-read position on mount
    (async () => {
      try {
        const stored = await window.storage.get('memoria-words');
        if (stored?.value) setSavedWords(JSON.parse(stored.value));
      } catch (_) {}
      try {
        const fs = await window.storage.get('font-scale');
        if (fs?.value) {
          const v = parseFloat(fs.value);
          if (v >= 0.85 && v <= 1.3) setFontScale(v);
        }
      } catch (_) {}
      try {
        const last = await window.storage.get('last-read');
        if (last?.value) {
          const parsed = JSON.parse(last.value);
          // Only offer resume if it's NOT the default opening chapter
          if (parsed?.chapterId && parsed.chapterId !== 'tiempos') {
            setResumeOffer({
              ...parsed,
              sectionId: parsed.sectionId === 'resumen' ? 'tips' : parsed.sectionId,
            });
          }
        }
      } catch (_) {}
      try {
        const visited = await window.storage.get('visited-chapters');
        if (visited?.value) setVisitedChapters(JSON.parse(visited.value));
      } catch (_) {}
      try {
        const progress = await window.storage.get(PALABRAS_PROGRESS_KEY);
        if (progress?.value) setPalabrasProgress(JSON.parse(progress.value));
      } catch (_) {}
      try {
        const statuses = await window.storage.get(LESSON_STATUS_KEY);
        if (statuses?.value) setLessonStatuses(JSON.parse(statuses.value));
      } catch (_) {}
      try {
        const audio = await window.storage.get(AUDIO_SETTINGS_KEY);
        if (audio?.value) {
          const parsed = JSON.parse(audio.value);
          setAudioSettingsState(parsed);
          setAudioSettings(parsed);
        }
      } catch (_) {}
      try {
        const mode = await window.storage.get(TRANSLATION_MODE_KEY);
        if (mode?.value === 'spanish' || mode?.value === 'both') setTranslationMode(mode.value);
      } catch (_) {}
      try {
        const boox = await window.storage.get(BOOX_MODE_KEY);
        if (boox?.value === 'true') setBooxMode(true);
        else if (!boox?.value && (isLikelyBooxDevice() || getDeviceProfile().isReaderTablet)) setBooxMode(true);
      } catch (_) {}
      try {
        const dismissed = await window.storage.get(INSTALL_DISMISSED_KEY);
        if (dismissed?.value === 'true') setInstallDismissed(true);
      } catch (_) {}
      try {
        const client = await window.storage.get(GOOGLE_CLIENT_ID_KEY);
        if (client?.value && !import.meta.env.VITE_GOOGLE_CLIENT_ID) setGoogleClientId(client.value);
      } catch (_) {}
      try {
        const writing = await window.storage.get(WRITING_PRACTICE_KEY);
        if (writing?.value) setWritingEntries(JSON.parse(writing.value) || []);
      } catch (_) {}
      try {
        const time = await window.storage.get(STUDY_TIME_KEY);
        if (time?.value) setStudyTime(normalizeStudyTimeState(JSON.parse(time.value)));
      } catch (_) {}
    })();
  }, []);

  useEffect(() => {
    let alive = true;
    loadPublicFirebaseConfig().then((config) => {
      if (!alive || !config) return;
      setFirebaseReady(true);
      setFirebaseConfigText(JSON.stringify(config));
    });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    function handleUpdateReady(event) {
      setWaitingWorker(event.detail?.worker || null);
    }
    window.addEventListener('learn-spanish-update-ready', handleUpdateReady);
    return () => window.removeEventListener('learn-spanish-update-ready', handleUpdateReady);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const detectInstalled = () => {
      const standalone = window.matchMedia?.('(display-mode: standalone)')?.matches;
      const iosStandalone = Boolean(window.navigator?.standalone);
      setIsInstalledApp(Boolean(standalone || iosStandalone));
    };

    function handleBeforeInstallPrompt(event) {
      event.preventDefault();
      setInstallPrompt(event);
      setInstallMessage('');
    }

    function handleAppInstalled() {
      setIsInstalledApp(true);
      setInstallPrompt(null);
      setInstallDismissed(true);
      setInstallMessage('Lexiora is installed on this device.');
    }

    detectInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    const media = window.matchMedia?.('(display-mode: standalone)');
    media?.addEventListener?.('change', detectInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      media?.removeEventListener?.('change', detectInstalled);
    };
  }, []);

  useEffect(() => {
    const root = bookRootRef.current;
    const bar = mobileBarRef.current;
    if (!root || !bar || typeof window === 'undefined') return undefined;

    const updateMobileBarSpace = () => {
      const height = Math.ceil(bar.getBoundingClientRect().height || 0);
      if (height > 0) root.style.setProperty('--mobile-bar-space', `${height}px`);
    };

    updateMobileBarSpace();
    window.addEventListener('resize', updateMobileBarSpace);
    let observer = null;
    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(updateMobileBarSpace);
      observer.observe(bar);
    }
    return () => {
      window.removeEventListener('resize', updateMobileBarSpace);
      observer?.disconnect();
    };
  }, [toolsOpen, focusMode, waitingWorker, syncOpen, globalSearch]);

  function activateAppUpdate() {
    waitingWorker?.postMessage?.({ type: 'SKIP_WAITING' });
  }

  // Apply fontScale to the document via CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale));
    markSyncDirty();
    try { window.storage.set('font-scale', String(fontScale)); } catch (_) {}
  }, [fontScale]);

  function bumpFont(delta) {
    setFontScale(prev => {
      const next = Math.max(0.85, Math.min(1.3, +(prev + delta).toFixed(2)));
      return next;
    });
  }

  function markSyncDirty() {
    if (!syncHydratingRef.current) syncDirtyRef.current = true;
  }

  async function persistWords(words) {
    markSyncDirty();
    try { await window.storage.set('memoria-words', JSON.stringify(words)); } catch (_) {}
  }

  async function persistPalabrasProgress(progress) {
    markSyncDirty();
    try { await window.storage.set(PALABRAS_PROGRESS_KEY, JSON.stringify(progress)); } catch (_) {}
  }

  async function persistLessonStatuses(statuses) {
    markSyncDirty();
    try { await window.storage.set(LESSON_STATUS_KEY, JSON.stringify(statuses)); } catch (_) {}
  }

  function handlePalabrasProgressChange(next) {
    setPalabrasProgress(next);
    persistPalabrasProgress(next);
  }

  function handleLessonStatusChange(chapterId, status) {
    setLessonStatuses(prev => {
      const next = { ...prev };
      if (status) {
        next[chapterId] = status;
      } else {
        delete next[chapterId];
      }
      persistLessonStatuses(next);
      return next;
    });
    if (firebaseUser?.uid) {
      upsertUserLessonProgress(firebaseUser.uid, chapterId, { status }).catch(() => {});
    }
  }

  function handleAudioSettingsChange(next) {
    setAudioSettingsState(next);
    setAudioSettings(next);
    markSyncDirty();
    try { window.storage.set(AUDIO_SETTINGS_KEY, JSON.stringify(next)); } catch (_) {}
  }

  function toggleTranslationMode() {
    setTranslationMode((current) => {
      const next = current === 'spanish' ? 'both' : 'spanish';
      markSyncDirty();
      try { window.storage.set(TRANSLATION_MODE_KEY, next); } catch (_) {}
      return next;
    });
  }

  function toggleBooxMode() {
    setBooxMode((current) => {
      const next = !current;
      markSyncDirty();
      try { window.storage.set(BOOX_MODE_KEY, String(next)); } catch (_) {}
      return next;
    });
  }

  function getInstallHelpMessage() {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    if (isIOS) {
      return 'On iPhone or iPad: tap Share, then Add to Home Screen. iOS does not show the same install prompt as Android.';
    }
    return 'If no install window opens, use the browser menu and choose Install app or Add to Home screen. Refresh once if the option is still missing.';
  }

  async function installLexiora() {
    setInstallDismissed(false);
    if (isInstalledApp) {
      setInstallMessage('Lexiora is already installed on this device.');
      return;
    }
    if (!installPrompt) {
      setInstallMessage(getInstallHelpMessage());
      return;
    }

    try {
      const prompt = installPrompt;
      setInstallMessage('Opening the install prompt...');
      await prompt.prompt();
      const choice = await prompt.userChoice;
      setInstallPrompt(null);
      if (choice?.outcome === 'accepted') {
        setInstallMessage('Great. Lexiora is installing on this device.');
        setInstallDismissed(true);
      } else {
        setInstallMessage('Install was dismissed. You can try again after refreshing the page.');
      }
    } catch (_) {
      setInstallMessage(getInstallHelpMessage());
    }
  }

  function dismissInstallBanner() {
    setInstallDismissed(true);
    try { window.storage.set(INSTALL_DISMISSED_KEY, 'true'); } catch (_) {}
  }

  // Background-translate a word and update the saved entry with the result.
  // Marks `pending: true` while in flight so the UI can show a spinner.
  async function backgroundTranslate(word) {
    setSavedWords(prev => {
      const next = prev.map(w => w.word === word ? { ...w, pending: true } : w);
      persistWords(next);
      return next;
    });
    const result = await translateWordSmart(word);
    setSavedWords(prev => {
      const next = prev.map(w => {
        if (w.word !== word) return w;
        if (result) {
          return {
            ...w,
            translation: result.main,
            pos: result.pos || w.pos || '',
            extras: result.extras || [],
            pending: false,
            translatedAt: Date.now(),
          };
        }
        return { ...w, pending: false };
      });
      persistWords(next);
      return next;
    });
  }

  function handleSaveWord(entry) {
    const enrichedEntry = enrichSavedWordEntry(entry);
    setSavedWords(prev => {
      if (prev.some(w => w.word === enrichedEntry.word)) {
        const next = prev.map((word) => word.word === enrichedEntry.word ? enrichSavedWordEntry({
          ...word,
          ...enrichedEntry,
          review: word.review || enrichedEntry.review,
          tags: Array.from(new Set([...(word.tags || []), ...(enrichedEntry.tags || [])])),
          extras: Array.from(new Set([...(word.extras || []), ...(enrichedEntry.extras || [])])),
          contexts: Array.from(new Set([...(word.contexts || []), word.context, ...(enrichedEntry.contexts || []), enrichedEntry.context].filter(Boolean))).slice(0, 8),
          context: enrichedEntry.context || word.context || '',
          savedAt: word.savedAt || enrichedEntry.savedAt || Date.now(),
        }) : word);
        persistWords(next);
        return next;
      }
      const next = [enrichedEntry, ...prev];
      persistWords(next);
      return next;
    });
    // If saved without a translation, fetch it in the background
    if (!enrichedEntry.translation) {
      backgroundTranslate(enrichedEntry.word);
    }
  }

  function handleRemoveWord(word) {
    setSavedWords(prev => {
      const next = prev.filter(w => w.word !== word);
      persistWords(next);
      return next;
    });
  }

  function handleUpdateWord(word, patch) {
    setSavedWords(prev => {
      const next = prev.map(w => w.word === word ? { ...w, ...patch } : w);
      persistWords(next);
      return next;
    });
  }

  function handleClearWords() {
    setSavedWords([]);
    persistWords([]);
  }

  // On mount, retry translation for any saved word that's missing one
  useEffect(() => {
    if (savedWords.length === 0) return;
    const untranslated = savedWords.filter(w => !w.translation && !w.pending);
    if (untranslated.length === 0) return;
    // Stagger the retries to avoid hammering APIs
    untranslated.slice(0, 5).forEach((w, i) => {
      setTimeout(() => backgroundTranslate(w.word), i * 800);
    });
  }, [savedWords.length]);
  const activeSections = useMemo(() => {
    const hydrated = hydrateSectionsWithLazyData(SECTIONS, lazyLessonData);
    const curated = hydrated.map((section) => {
      if (section.id !== 'lectura') return section;
      return {
        ...section,
        chapters: (section.chapters || []).filter((chapter) => chapter.id !== 'stories'),
      };
    });

    const firstTopTen = curated.find((section) => section.id === 'verbos');
    const secondTopTen = curated.find((section) => section.id === 'verbos2');
    if (!firstTopTen || !secondTopTen) {
      return curated.filter((section) => section.id !== 'verbos2');
    }

    const mergedVerbos = {
      ...firstTopTen,
      sublabel: 'Top 20',
      chapters: [
        ...(firstTopTen.chapters || []),
        ...(secondTopTen.chapters || []),
      ],
    };

    return curated
      .map((section) => (section.id === 'verbos' ? mergedVerbos : section))
      .filter((section) => section.id !== 'verbos2');
  }, [lazyLessonData]);
  const visibleFlatChapters = useMemo(() => {
    return buildVisibleFlatChapters(activeSections, levelFilter);
  }, [activeSections, levelFilter]);
  const allFlatChapters = useMemo(() => {
    return buildVisibleFlatChapters(activeSections, 'ALL');
  }, [activeSections]);
  const chapterIndexById = useMemo(() => {
    const byId = {};
    for (const chapter of allFlatChapters) byId[chapter.id] = chapter;
    return byId;
  }, [allFlatChapters]);

  // If the active chapter is filtered out, jump to the first visible one.
  useEffect(() => {
    if (!visibleFlatChapters.find((c) => c.id === activeChapterId)) {
      if (visibleFlatChapters.length) {
        setActiveChapterId(visibleFlatChapters[0].id);
        setActiveSectionId(visibleFlatChapters[0].sectionId);
        setActiveNestedTarget(null);
      }
    }
  }, [visibleFlatChapters, activeChapterId]);

  const activeChapter = useMemo(
    () => visibleFlatChapters.find((c) => c.id === activeChapterId),
    [visibleFlatChapters, activeChapterId]
  );

  function loadLazyLessonData(key) {
    if (!key || Object.prototype.hasOwnProperty.call(lazyLessonData, key) || lazyLessonLoadingRef.current.has(key)) return;
    const loader = LESSON_DATA_LOADERS[key];
    if (!loader) return;
    lazyLessonLoadingRef.current.add(key);
    loader()
      .then((value) => {
        setLazyLessonData((current) => ({ ...current, [key]: value }));
      })
      .catch((error) => {
        console.warn('Could not load lesson pack', key, error);
        setLazyLessonData((current) => ({ ...current, [key]: null }));
      })
      .finally(() => {
        lazyLessonLoadingRef.current.delete(key);
      });
  }

  const activeSection = useMemo(
    () => activeSections.find((section) => section.id === activeSectionId),
    [activeSections, activeSectionId]
  );
  const sectionLanding = useMemo(
    () => activeSections.find((section) => section.id === sectionLandingId),
    [activeSections, sectionLandingId]
  );
  const sectionLandingChapters = useMemo(
    () => visibleFlatChapters.filter((chapter) => chapter.sectionId === sectionLandingId),
    [visibleFlatChapters, sectionLandingId]
  );
  const sectionLandingLessons = useMemo(
    () => buildSectionLessonCards(sectionLanding, sectionLandingChapters),
    [sectionLanding, sectionLandingChapters]
  );

  useEffect(() => {
    const keys = new Set();
    collectLazyKeysForChapter(activeChapter).forEach((key) => keys.add(key));
    if (sectionLandingId) {
      sectionLandingChapters.forEach((chapter) => collectLazyKeysForChapter(chapter).forEach((key) => keys.add(key)));
    }
    if (!showHome && activeSectionId) {
      visibleFlatChapters
        .filter((chapter) => chapter.sectionId === activeSectionId)
        .forEach((chapter) => collectLazyKeysForChapter(chapter).forEach((key) => keys.add(key)));
    }
    keys.forEach((key) => loadLazyLessonData(key));
  }, [activeChapter, sectionLandingId, sectionLandingChapters, showHome, activeSectionId, visibleFlatChapters, lazyLessonData]);

  const currentIndex = visibleFlatChapters.findIndex((c) => c.id === activeChapterId);
  const prevChapter = currentIndex > 0 ? visibleFlatChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < visibleFlatChapters.length - 1 ? visibleFlatChapters[currentIndex + 1] : null;
  const visitedSet = useMemo(() => new Set(visitedChapters), [visitedChapters]);
  const studyProgress = useMemo(
    () => summarizeStudyProgress(activeSections, visibleFlatChapters, visitedChapters, lessonStatuses),
    [activeSections, visibleFlatChapters, visitedChapters, lessonStatuses]
  );
  const visibleStudyLessons = studyProgress.lessons;
  const visibleVisitedCount = studyProgress.completed;
  const recommendedChapters = useMemo(
    () => buildRecommendedLessonCards(visibleStudyLessons, visitedChapters, lessonStatuses, 4),
    [visibleStudyLessons, visitedChapters, lessonStatuses]
  );
  const searchResults = useMemo(
    () => buildEnhancedSearchResults(globalSearch, visibleFlatChapters, savedWords, []),
    [globalSearch, visibleFlatChapters, savedWords]
  );
  const lessonSummary = useMemo(() => {
    return {
      read: studyProgress.read,
      understood: studyProgress.understood,
    };
  }, [studyProgress]);
  const memoriaSummary = useMemo(() => getMemoriaSummary(savedWords), [savedWords]);
  const learnerProfile = useMemo(() => buildLearnerProfile({
    chapters: visibleFlatChapters,
    visitedChapters,
    lessonStatuses,
    palabrasProgress,
    savedWords,
    writingEntries: [],
  }), [visibleFlatChapters, visitedChapters, lessonStatuses, palabrasProgress, savedWords]);
  const reviewQueue = useMemo(() => buildUnifiedReviewQueue({
    chapters: visibleFlatChapters,
    lessonStatuses,
    palabrasProgress,
    savedWords,
    writingEntries: [],
  }), [visibleFlatChapters, lessonStatuses, palabrasProgress, savedWords]);
  const startChapter = recommendedChapters[0] || visibleFlatChapters[0];
  const palabrasSummary = useMemo(() => {
    const values = Object.values(palabrasProgress || {});
    const now = Date.now();
    return {
      seen: values.filter((v) => v?.seen).length,
      due: values.filter((v) => v?.seen && (v.dueAt || 0) <= now).length,
      mastered: values.filter((v) => v?.mastered).length,
    };
  }, [palabrasProgress]);
  const sectionProgress = useMemo(() => {
    return buildSectionProgress(activeSections, visibleFlatChapters, visitedChapters, lessonStatuses);
  }, [activeSections, visibleFlatChapters, visitedChapters, lessonStatuses]);
  const palabrasChapter = visibleFlatChapters.find((c) => c.id === 'palabras-5000');
  const grammarChapter = visibleFlatChapters.find((c) => c.sectionId === 'gramatica');
  const verbChapter = visibleFlatChapters.find((c) => c.sectionId === 'verbos') || visibleFlatChapters.find((c) => c.sectionId === 'verbos2');
  const readingChapter = visibleFlatChapters.find((c) => c.sectionId === 'lectura');
  const practiceSection = activeSections.find((section) => section.id === 'practicar');
  const practiceChapters = visibleFlatChapters.filter((chapter) => chapter.sectionId === 'practicar');
  const practiceLessons = buildSectionLessonCards(practiceSection, practiceChapters);
  const dailyStats = useMemo(() => {
    const start = todayStartMs();
    const reviewedToday = Object.values(palabrasProgress || {}).filter((state) => (state?.reviewedAt || 0) >= start).length;
    const savedToday = savedWords.filter((entry) => (entry.savedAt || 0) >= start).length;
    const chapterDone = (chapter) => {
      if (!chapter) return false;
      return visitedSet.has(chapter.id) || isLessonReadStatus(lessonStatuses[chapter.id]);
    };
    return {
      reviewedToday,
      savedToday,
      grammarDone: chapterDone(grammarChapter),
      readingDone: chapterDone(readingChapter),
      verbDone: chapterDone(verbChapter),
    };
  }, [palabrasProgress, savedWords, visitedSet, lessonStatuses, grammarChapter, readingChapter, verbChapter]);
  const dailyPlan = useMemo(() => ([
    {
      key: 'palabras',
      index: '01',
      title: '10 palabras',
      detail: `${Math.min(dailyStats.reviewedToday, 10)} / 10 reviewed today`,
      complete: dailyStats.reviewedToday >= 10,
    },
    {
      key: 'grammar',
      index: '02',
      title: 'Grammar point',
      detail: dailyStats.grammarDone ? 'lesson opened' : (grammarChapter?.title || 'open grammar'),
      complete: dailyStats.grammarDone,
    },
    {
      key: 'reading',
      index: '03',
      title: 'Read + listen',
      detail: dailyStats.readingDone ? 'reading opened' : (readingChapter?.title || 'open reading'),
      complete: dailyStats.readingDone,
    },
    {
      key: 'verb',
      index: '04',
      title: 'One verb',
      detail: dailyStats.verbDone ? 'verb opened' : (verbChapter?.title || 'open verb'),
      complete: dailyStats.verbDone,
    },
    {
      key: 'memoria',
      index: '05',
      title: 'Memoria',
      detail: dailyStats.savedToday ? `${dailyStats.savedToday} saved today` : `${savedWords.length} saved total`,
      complete: dailyStats.savedToday > 0 || savedWords.length >= 10,
    },
  ]), [dailyStats, grammarChapter, readingChapter, verbChapter, savedWords.length]);
  const dailyProgress = useMemo(() => ({
    completed: dailyPlan.filter((item) => item.complete).length,
    total: dailyPlan.length,
  }), [dailyPlan]);
  const teacherInsights = useMemo(() => buildTeacherInsights({
    learnerProfile,
    reviewQueue,
    dailyStats,
    savedWords,
    recommendations: recommendedChapters,
  }), [learnerProfile, reviewQueue, dailyStats, savedWords, recommendedChapters]);

  useEffect(() => {
    try { window.storage.set(LEARNER_PROFILE_KEY, JSON.stringify(learnerProfile)); } catch (_) {}
  }, [learnerProfile]);

  function selectChapter(c) {
    const nextChapterId = c.parentChapterId || c.id;
    const nextSectionId = c.sectionId || activeSections.find((section) => section.chapters.some((chapter) => chapter.id === nextChapterId))?.id || activeSectionId;
    setActiveChapterId(nextChapterId);
    setActiveSectionId(nextSectionId);
    setSectionLandingId(null);
    setActiveNestedTarget(c.nestedTarget || null);
    setShowMemoria(false);
    setShowHome(false);
    setSidebarOpen(false);
    setResumeOffer(null);
    setVisitedChapters(prev => {
      const ids = [nextChapterId, c.id].filter(Boolean);
      const next = Array.from(new Set([...prev, ...ids]));
      if (next.length === prev.length) return prev;
      try { window.storage.set('visited-chapters', JSON.stringify(next)); } catch (_) {}
      return next;
    });
    // Persist last-read position
    try {
      window.storage.set('last-read', JSON.stringify({
        sectionId: nextSectionId,
        chapterId: nextChapterId,
        cardId: c.id,
        nestedTarget: c.nestedTarget || null,
        title: c.nestedTarget?.title || c.title,
        savedAt: Date.now(),
      }));
    } catch (_) {}
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const main = document.querySelector('.book-main');
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function openSection(section) {
    setActiveSectionId(section.id);
    setSectionLandingId(section.id);
    setActiveNestedTarget(null);
    setShowHome(false);
    setShowMemoria(false);
    setSidebarOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const main = document.querySelector('.book-main');
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function openMemoriaView() {
    setSectionLandingId(null);
    setActiveNestedTarget(null);
    setShowHome(false);
    setShowMemoria(true);
    setSidebarOpen(false);
  }

  function handleDailyStep(key) {
    if (key === 'palabras' && palabrasChapter) return selectChapter(palabrasChapter);
    if (key === 'grammar' && grammarChapter) return selectChapter(grammarChapter);
    if (key === 'reading' && readingChapter) return selectChapter(readingChapter);
    if (key === 'verb' && verbChapter) return selectChapter(verbChapter);
    if (key === 'memoria') return openMemoriaView();
    if (startChapter) return selectChapter(startChapter);
    return undefined;
  }

  function handleTeacherAction(action) {
    if (action === 'memoria') return openMemoriaView();
    if (action === 'reading' && readingChapter) return selectChapter(readingChapter);
    if (action === 'verb' && verbChapter) return selectChapter(verbChapter);
    return startDailyLesson();
  }

  function startDailyLesson() {
    const nextStep = dailyPlan.find((item) => !item.complete) || dailyPlan[0];
    return handleDailyStep(nextStep?.key || 'palabras');
  }

  function jumpToResume() {
    if (!resumeOffer) return;
    const sec = activeSections.find(s => s.id === resumeOffer.sectionId);
    const chap = sec?.chapters.find(c => c.id === resumeOffer.chapterId);
    if (chap) {
      selectChapter({
        ...chap,
        id: resumeOffer.cardId || chap.id,
        parentChapterId: chap.id,
        sectionId: sec.id,
        nestedTarget: resumeOffer.nestedTarget || null,
      });
    }
    setResumeOffer(null);
  }
  function dismissResume() {
    setResumeOffer(null);
  }

  function buildSyncPayload() {
    return {
      app: 'Lexiora',
      version: Number(APP_VERSION),
      buildId: getBuildId(),
      syncMeta: buildSyncMeta(),
      exportedAt: new Date().toISOString(),
      savedWords,
      visitedChapters,
      palabrasProgress,
      lessonStatuses,
      writingEntries,
      audioSettings,
      fontScale,
      translationMode,
      booxMode,
      studyTime,
    };
  }

  async function applySyncPayload(payload) {
    syncHydratingRef.current = true;
    try {
    const nextWords = Array.isArray(payload.savedWords) ? payload.savedWords : [];
    const nextVisited = Array.isArray(payload.visitedChapters) ? payload.visitedChapters : [];
    const nextPalabras = payload.palabrasProgress && typeof payload.palabrasProgress === 'object' ? payload.palabrasProgress : {};
    const nextStatuses = payload.lessonStatuses && typeof payload.lessonStatuses === 'object' ? payload.lessonStatuses : {};
    const nextWriting = Array.isArray(payload.writingEntries) ? payload.writingEntries : [];
    const nextAudio = payload.audioSettings && typeof payload.audioSettings === 'object' ? payload.audioSettings : audioSettings;
    const nextFont = Number(payload.fontScale);
    const nextMode = payload.translationMode === 'spanish' ? 'spanish' : 'both';
    const nextBooxMode = Boolean(payload.booxMode);
    const nextStudyTime = normalizeStudyTimeState(payload.studyTime || studyTime);

    setSavedWords(nextWords);
    setVisitedChapters(nextVisited);
    setPalabrasProgress(nextPalabras);
    setLessonStatuses(nextStatuses);
    setWritingEntries(nextWriting);
    setAudioSettingsState(nextAudio);
    setAudioSettings(nextAudio);
    setTranslationMode(nextMode);
    setBooxMode(nextBooxMode);
    setStudyTime(nextStudyTime);
    if (nextFont >= 0.85 && nextFont <= 1.3) setFontScale(nextFont);

    await persistWords(nextWords);
    await persistPalabrasProgress(nextPalabras);
    await persistLessonStatuses(nextStatuses);
    await window.storage.set('visited-chapters', JSON.stringify(nextVisited));
    await window.storage.set(WRITING_PRACTICE_KEY, JSON.stringify(nextWriting));
    await window.storage.set(AUDIO_SETTINGS_KEY, JSON.stringify(nextAudio));
    await window.storage.set(TRANSLATION_MODE_KEY, nextMode);
    await window.storage.set(BOOX_MODE_KEY, String(nextBooxMode));
    await window.storage.set(STUDY_TIME_KEY, JSON.stringify(nextStudyTime));
    if (nextFont >= 0.85 && nextFont <= 1.3) await window.storage.set('font-scale', String(nextFont));
    syncDirtyRef.current = false;
    } finally {
      syncHydratingRef.current = false;
    }
  }

  async function saveFirebaseConfigText() {
    const parsed = parseFirebaseConfigJson(firebaseConfigText);
    if (!parsed) {
      setFirebaseMessage('Firebase config JSON is invalid. Paste the full web config object.');
      return;
    }
    const saved = saveFirebaseConfigToStorage(parsed);
    if (!saved) {
      setFirebaseMessage('Could not save Firebase config on this device.');
      return;
    }
    setFirebaseReady(true);
    setFirebaseMessage('Firebase config saved. You can sign in now.');
  }

  async function syncWithFirebase(options = {}) {
    if (!firebaseUser?.uid) {
      setFirebaseMessage('Sign in to Firebase first.');
      return;
    }
    setFirebaseBusy(true);
    if (!options.silent) setFirebaseMessage('Syncing with Firebase...');
    try {
      const localPayload = buildSyncPayload();
      const remotePayload = await loadFirebaseAppState(firebaseUser.uid);
      const mergedPayload = mergeFirebasePayloads(localPayload, remotePayload);
      firebaseApplyingRemoteRef.current = true;
      await applySyncPayload(mergedPayload);
      await saveFirebaseAppState(firebaseUser.uid, mergedPayload);
      setFirebaseLastSyncedAt(new Date().toLocaleString());
      syncDirtyRef.current = false;
      const persistence = getFirebasePersistenceStatus();
      setFirebasePersistenceNote(persistence.enabled ? 'enabled' : persistence.note);
      if (!options.silent) {
        setFirebaseMessage(`Firebase synced: ${mergedPayload.savedWords.length} words, ${Object.keys(mergedPayload.lessonStatuses || {}).length} lesson marks.`);
      }
    } catch (error) {
      if (!options.silent) setFirebaseMessage(error?.message || 'Firebase sync did not finish.');
    } finally {
      firebaseApplyingRemoteRef.current = false;
      setFirebaseBusy(false);
    }
  }

  async function signInFirebaseAnonymous() {
    if (!firebaseReady) {
      setFirebaseMessage('Add Firebase config first.');
      return;
    }
    setFirebaseBusy(true);
    setFirebaseMessage('Signing in anonymously...');
    try {
      await signInFirebaseAnonymously();
      setFirebaseMessage('Anonymous sign-in complete.');
    } catch (error) {
      setFirebaseMessage(error?.message || 'Anonymous sign-in failed.');
    } finally {
      setFirebaseBusy(false);
    }
  }

  async function signInFirebaseGoogle() {
    if (!firebaseReady) {
      setFirebaseMessage('Add Firebase config first.');
      return;
    }
    setFirebaseBusy(true);
    setFirebaseMessage('Opening Google sign-in...');
    try {
      await signInFirebaseWithGoogle();
      setFirebaseMessage('Google sign-in complete.');
    } catch (error) {
      setFirebaseMessage(error?.message || 'Google sign-in failed.');
    } finally {
      setFirebaseBusy(false);
    }
  }

  async function signOutFirebaseSession() {
    setFirebaseBusy(true);
    try {
      await signOutFirebase();
      setFirebaseMessage('Signed out from Firebase.');
    } catch (error) {
      setFirebaseMessage(error?.message || 'Sign out failed.');
    } finally {
      setFirebaseBusy(false);
    }
  }

  function buildQuizIdFromAttempt(attempt) {
    const sourceId = String(attempt?.sourceId || 'practice');
    const mode = String(attempt?.mode || 'quiz');
    const level = String(attempt?.level || 'A1');
    return `${mode}-${level}-${sourceId}`.replace(/[^a-zA-Z0-9_-]+/g, '-').toLowerCase();
  }

  async function handlePracticeAttempt(attempt) {
    if (!firebaseUser?.uid || !attempt) return;
    const dedupeKey = `${attempt.mode}:${attempt.level}:${attempt.sourceId}:${attempt.total}:${attempt.score}`;
    if (recordedPracticeAttemptsRef.current.has(dedupeKey)) return;
    recordedPracticeAttemptsRef.current.add(dedupeKey);
    try {
      const quizId = buildQuizIdFromAttempt(attempt);
      if (attempt.lessonId && chapterIndexById[attempt.lessonId]) {
        const lesson = chapterIndexById[attempt.lessonId];
        await upsertLesson(lesson.id, {
          title: lesson.title,
          lessonNumber: Number(lesson.rank || 0),
          content: lesson.intro || lesson.subtitle || lesson.title,
          description: lesson.subtitle || lesson.sectionLabel || '',
        }, firebaseUser.uid);
      }
      await upsertQuiz(quizId, {
        title: attempt.title || 'Practice quiz',
        description: `Mode: ${attempt.mode} | Level: ${attempt.level}`,
        lessonId: attempt.lessonId || null,
      }, firebaseUser.uid);
      const questionList = Array.isArray(attempt.questions) ? attempt.questions.slice(0, 24) : [];
      await Promise.all(questionList.map((question, index) => upsertQuestion(
        quizId,
        `q-${index + 1}`,
        {
          text: question.prompt || '',
          type: attempt.mode || 'multiple-choice',
          correctAnswer: question.answer || '',
          options: Array.isArray(question.choices) ? question.choices : [],
        },
        firebaseUser.uid,
      )));
      await recordQuizAttempt(firebaseUser.uid, {
        score: attempt.score,
        total: attempt.total,
        percent: attempt.percent,
        mode: attempt.mode,
        level: attempt.level,
        quizId,
        quizTitle: attempt.title || 'Practice quiz',
      });
    } catch (_) {
      // Keep quiz flow uninterrupted even if cloud write fails.
    }
  }

  useEffect(() => {
    setFirebaseReady(hasFirebaseConfig());
  }, [firebaseConfigText]);

  useEffect(() => {
    if (!firebaseReady) return undefined;
    let cancelled = false;
    let authUnsub = null;

    (async () => {
      try {
        authUnsub = await observeFirebaseAuthState(async (user) => {
          if (cancelled) return;
          setFirebaseUser(user || null);
          const persistence = getFirebasePersistenceStatus();
          setFirebasePersistenceNote(persistence.enabled ? 'enabled' : persistence.note);

          if (firebaseRealtimeUnsubRef.current) {
            firebaseRealtimeUnsubRef.current();
            firebaseRealtimeUnsubRef.current = null;
          }

          if (!user?.uid) return;
          await upsertUserRecordFromAuth(user);

          // Optional hydration from per-lesson progress collection.
          const remoteProgressRows = await listUserLessonProgress(user.uid).catch(() => []);
          if (remoteProgressRows.length) {
            setLessonStatuses((prev) => {
              const next = { ...prev };
              for (const row of remoteProgressRows) {
                if (!row?.lessonId) continue;
                if (next[row.lessonId]) continue;
                if (row.localStatus) next[row.lessonId] = row.localStatus;
              }
              return next;
            });
          }

          const localPayload = buildSyncPayload();
          const remotePayload = await loadFirebaseAppState(user.uid);
          const merged = mergeFirebasePayloads(localPayload, remotePayload);
          firebaseApplyingRemoteRef.current = true;
          await applySyncPayload(merged);
          await saveFirebaseAppState(user.uid, merged);
          firebaseApplyingRemoteRef.current = false;
          syncDirtyRef.current = false;
          setFirebaseLastSyncedAt(new Date().toLocaleString());
          setFirebaseMessage('Firebase realtime sync connected.');

          firebaseRealtimeUnsubRef.current = await watchFirebaseAppState(
            user.uid,
            async (remoteNext, metadata) => {
              if (!remoteNext || firebaseApplyingRemoteRef.current) return;
              const mergedNext = mergeFirebasePayloads(buildSyncPayload(), remoteNext);
              firebaseApplyingRemoteRef.current = true;
              await applySyncPayload(mergedNext);
              firebaseApplyingRemoteRef.current = false;
              syncDirtyRef.current = false;
              if (!metadata?.hasPendingWrites) {
                setFirebaseLastSyncedAt(new Date().toLocaleString());
              }
            },
            (error) => setFirebaseMessage(error?.message || 'Firebase listener stopped.'),
          );
        }, (error) => {
          setFirebaseMessage(error?.message || 'Firebase auth listener error.');
        });

        if (!cancelled) {
          firebaseAuthUnsubRef.current = authUnsub;
          await signInFirebaseAnonymously();
        }
      } catch (error) {
        if (!cancelled) {
          setFirebaseMessage(error?.message || 'Firebase setup did not finish.');
        }
      }
    })();

    return () => {
      cancelled = true;
      authUnsub?.();
      if (firebaseRealtimeUnsubRef.current) {
        firebaseRealtimeUnsubRef.current();
        firebaseRealtimeUnsubRef.current = null;
      }
      firebaseAuthUnsubRef.current = null;
    };
  }, [firebaseReady]);

  async function saveGoogleClientId() {
    const clean = googleClientId.trim();
    if (!clean) {
      setSyncMessage('Paste your Google OAuth Client ID first.');
      return;
    }
    try {
      await window.storage.set(GOOGLE_CLIENT_ID_KEY, clean);
      setGoogleClientId(clean);
      setSyncMessage('Google Client ID saved on this device.');
    } catch (_) {
      setSyncMessage('Could not save the Client ID in this browser.');
    }
  }

  async function signInGoogleDrive() {
    const clientId = googleClientId.trim();
    if (!clientId) {
      setSyncMessage('Paste and save your Google OAuth Client ID first.');
      return;
    }
    setGoogleBusy(true);
    setSyncMessage('Opening Google sign-in...');
    try {
      await window.storage.set(GOOGLE_CLIENT_ID_KEY, clientId);
      const token = await requestGoogleDriveToken(clientId, 'consent');
      setGoogleAccessToken(token);
      setSyncMessage('Signed in. Syncing your study data now...');
      await syncWithGoogleDrive(token);
    } catch (error) {
      setSyncMessage(error?.message || 'Google sign-in did not finish.');
    } finally {
      setGoogleBusy(false);
    }
  }

  async function syncWithGoogleDrive(existingToken = googleAccessToken, options = {}) {
    const clientId = googleClientId.trim();
    if (!clientId) {
      setSyncMessage('Paste and save your Google OAuth Client ID first.');
      return;
    }
    setGoogleBusy(true);
    if (!options.silent) setSyncMessage(existingToken ? 'Syncing with Google Drive...' : 'Opening Google sign-in...');
    try {
      await window.storage.set(GOOGLE_CLIENT_ID_KEY, clientId);
      const token = existingToken || await requestGoogleDriveToken(clientId, googleAccessToken ? '' : 'consent');
      setGoogleAccessToken(token);
      if (!options.silent) setSyncMessage('Checking Google Drive...');
      const file = await findGoogleSyncFile(token);
      const remotePayload = await readGoogleSyncPayload(token, file?.id);
      const mergedPayload = mergeSyncPayloads(buildSyncPayload(), remotePayload);
      await applySyncPayload(mergedPayload);
      await writeGoogleSyncPayload(token, mergedPayload, file?.id);
      setGoogleLastSyncedAt(new Date().toLocaleString());
      syncDirtyRef.current = false;
      if (!options.silent) setSyncMessage(`Google Drive synced across devices: ${mergedPayload.savedWords.length} words and ${Object.keys(mergedPayload.lessonStatuses || {}).length} lesson marks.`);
    } catch (error) {
      if (/401|invalid|expired/i.test(error?.message || '')) setGoogleAccessToken('');
      if (!options.silent) setSyncMessage(error?.message || 'Google Drive sync did not finish.');
    } finally {
      setGoogleBusy(false);
    }
  }

  useEffect(() => {
    if (!firebaseUser?.uid || firebaseBusy || !syncDirtyRef.current) return undefined;
    const now = Date.now();
    if (now - lastFirebaseAutoSyncAtRef.current < 20_000) return undefined;
    const timer = window.setTimeout(() => {
      if (!syncDirtyRef.current || firebaseBusy || !firebaseUser?.uid) return;
      lastFirebaseAutoSyncAtRef.current = Date.now();
      syncWithFirebase({ silent: true });
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [
    firebaseUser?.uid,
    firebaseBusy,
    savedWords,
    palabrasProgress,
    lessonStatuses,
    writingEntries,
    audioSettings,
    fontScale,
    translationMode,
    booxMode,
  ]);

  useEffect(() => {
    if (!googleAccessToken || googleBusy || !syncDirtyRef.current) return undefined;
    const now = Date.now();
    if (now - lastAutoSyncAtRef.current < 20_000) return undefined;
    const timer = window.setTimeout(() => {
      if (!syncDirtyRef.current || googleBusy) return;
      lastAutoSyncAtRef.current = Date.now();
      syncWithGoogleDrive(googleAccessToken, { silent: true });
    }, 3500);
    return () => window.clearTimeout(timer);
  }, [
    googleAccessToken,
    googleBusy,
    savedWords,
    palabrasProgress,
    lessonStatuses,
    writingEntries,
    audioSettings,
    fontScale,
    translationMode,
    booxMode,
  ]);

  function renderGlobalSearch(extraClass = '') {
    return (
      <div className={`global-search ${extraClass} ${globalSearchOpen ? 'open' : ''} ${globalSearch.trim() ? 'has-query' : ''}`}>
        {!globalSearchOpen ? (
          <button
            type="button"
            className="global-search-toggle"
            onClick={() => setGlobalSearchOpen(true)}
            aria-label="Open search"
            title="Search"
          >
            <Search size={18} />
          </button>
        ) : (
          <div className="global-search-panel">
            <Search size={15} />
            <input
              ref={globalSearchInputRef}
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search everything..."
            />
            <button
              type="button"
              className="global-search-close"
              onClick={closeGlobalSearch}
              aria-label="Close search"
            >
              <X size={15} />
            </button>
          </div>
        )}
        {globalSearch.trim().length >= 2 && (
          <div className="global-search-results">
            {searchResults.length ? searchResults.map((result, index) => (
              <button
                key={`${result.type}-${result.title}-${index}`}
                onClick={() => {
                  if (result.type === 'memoria') {
                    setSectionLandingId(null);
                    setActiveNestedTarget(null);
                    setShowHome(false);
                    setShowMemoria(true);
                  } else {
                    selectChapter(result.chapter);
                  }
                  setGlobalSearch('');
                  setGlobalSearchOpen(false);
                  setSidebarOpen(false);
                }}
              >
                <span><SearchHighlightedText text={result.title} query={globalSearch} /></span>
                <em><SearchHighlightedText text={result.meta} query={globalSearch} /></em>
                {result.context && (
                  <small><SearchHighlightedText text={result.context} query={globalSearch} /></small>
                )}
              </button>
            )) : (
              <div className="global-search-empty">No matches</div>
            )}
          </div>
        )}
      </div>
    );
  }

  const showInstallBanner = !isInstalledApp && !installDismissed;
  const installReady = Boolean(installPrompt);
  const hasBundledGoogleClient = Boolean(import.meta.env.VITE_GOOGLE_CLIENT_ID);
  const versionLabel = getVersionLabel();
  const syncStats = useMemo(() => ([
    { label: 'Memoria words', value: savedWords.length },
    { label: 'Palabras reviews', value: Object.keys(palabrasProgress || {}).length },
    { label: 'lesson marks', value: Object.keys(lessonStatuses || {}).length },
    { label: 'reader profile', value: booxMode ? 'Boox' : 'Normal' },
    { label: 'version', value: versionLabel },
  ]), [savedWords.length, palabrasProgress, lessonStatuses, booxMode, versionLabel]);

  useEffect(() => {
    if (globalSearchOpen) {
      window.requestAnimationFrame(() => globalSearchInputRef.current?.focus());
    }
  }, [globalSearchOpen]);

  function closeGlobalSearch() {
    setGlobalSearch('');
    setGlobalSearchOpen(false);
  }

  return (
    <div ref={bookRootRef} className={`book-root translation-mode-${translationMode} ${deviceProfile.classes} ${booxMode ? 'boox-mode' : ''} ${focusMode ? 'focus-mode' : ''}`}>
      <React.Suspense fallback={null}>
        <DictionaryPopup
          savedWords={savedWords}
          onSave={handleSaveWord}
          onRemove={handleRemoveWord}
          loadPalabrasGroups={loadPalabrasGroups}
        />
      </React.Suspense>
      <AppMessages />
      <style>{styles}</style>

      {/* Mobile top bar */}
      <div ref={mobileBarRef} className="mobile-bar">
        <button className="mobile-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="mobile-title">
          <span className="mobile-brand-script">Lexiora</span>
        </div>
        {renderGlobalSearch('header-search')}
        <button
          className={`mobile-tools-toggle ${toolsOpen ? 'active' : ''}`}
          onClick={() => setToolsOpen((open) => !open)}
          aria-label={toolsOpen ? 'Close study tools' : 'Open study tools'}
        >
          <Sparkles size={15} />
          Tools
        </button>
        <div className={`top-tools ${toolsOpen ? 'open' : ''}`}>
          {!isInstalledApp && (
            <button
              className={`top-tool-btn install-toggle ${installReady ? 'ready' : ''}`}
              onClick={installLexiora}
              aria-label="Install Lexiora on this device"
              title={installReady ? 'Install Lexiora' : 'Install help'}
            >
              <Download size={15} />
              <span>Install</span>
            </button>
          )}
          <button
            className={`top-tool-btn ${translationMode === 'spanish' ? 'active' : ''}`}
            onClick={toggleTranslationMode}
            aria-label={translationMode === 'spanish' ? 'Show English translations' : 'Hide English translations'}
            title={translationMode === 'spanish' ? 'Mostrar ingles' : 'Solo espanol'}
          >
            <Languages size={15} />
            <span>{translationMode === 'spanish' ? 'ES' : 'EN'}</span>
          </button>
          <button
            className="top-tool-btn audio-stop"
            onClick={stopAllAudio}
            aria-label="Stop all audio"
            title="Detener audio"
          >
            <Headphones size={15} />
          </button>
          <button
            className={`top-tool-btn boox-toggle ${booxMode ? 'active' : ''}`}
            onClick={toggleBooxMode}
            aria-label={booxMode ? 'Turn off Boox e-ink mode' : 'Turn on Boox e-ink mode'}
            title={booxMode ? 'Boox mode on' : 'Boox / e-ink mode'}
          >
            <BookText size={15} />
            <span>Ink</span>
          </button>
          <button
            className={`top-tool-btn focus-toggle ${focusMode ? 'active' : ''}`}
            onClick={() => setFocusMode((current) => !current)}
            aria-label={focusMode ? 'Exit focus reading mode' : 'Enter focus reading mode'}
            title={focusMode ? 'Salir de lectura' : 'Modo lectura'}
          >
            <BookOpen size={15} />
            <span>{focusMode ? 'Exit' : 'Read'}</span>
          </button>
          <div className="font-controls">
            <button className="font-btn" onClick={() => bumpFont(-0.05)} aria-label="Smaller text" disabled={fontScale <= 0.85}>
              <span className="font-btn-small">A</span>
            </button>
            <button className="font-btn" onClick={() => bumpFont(0.05)} aria-label="Larger text" disabled={fontScale >= 1.3}>
              <span className="font-btn-large">A</span>
            </button>
          </div>
        </div>
      </div>

      {syncOpen && (
        <React.Suspense fallback={<div className="sync-modal-overlay" aria-label="Loading sync"><div className="sync-modal">Loading sync...</div></div>}>
          <SyncPanel
            open={syncOpen}
            onClose={() => setSyncOpen(false)}
            firebaseReady={firebaseReady}
            firebaseConnected={Boolean(firebaseUser?.uid)}
            firebaseAuthLabel={firebaseUser ? (firebaseUser.isAnonymous ? `anonymous (${firebaseUser.uid.slice(0, 8)}...)` : `google (${firebaseUser.uid.slice(0, 8)}...)`) : 'signed out'}
            firebaseBusy={firebaseBusy}
            firebasePersistenceNote={firebasePersistenceNote}
            firebaseConfigText={firebaseConfigText}
            setFirebaseConfigText={setFirebaseConfigText}
            saveFirebaseConfigText={saveFirebaseConfigText}
            signInFirebaseAnonymous={signInFirebaseAnonymous}
            signInFirebaseGoogle={signInFirebaseGoogle}
            signOutFirebase={signOutFirebaseSession}
            syncWithFirebase={syncWithFirebase}
            firebaseLastSyncedAt={firebaseLastSyncedAt}
            firebaseMessage={firebaseMessage}
            googleAccessToken={googleAccessToken}
            googleLastSyncedAt={googleLastSyncedAt}
            googleBusy={googleBusy}
            googleClientId={googleClientId}
            setGoogleClientId={setGoogleClientId}
            syncAdvancedOpen={syncAdvancedOpen}
            setSyncAdvancedOpen={setSyncAdvancedOpen}
            hasBundledGoogleClient={hasBundledGoogleClient}
            syncStats={syncStats}
            saveGoogleClientId={saveGoogleClientId}
            signInGoogleDrive={signInGoogleDrive}
            syncWithGoogleDrive={syncWithGoogleDrive}
            syncMessage={syncMessage}
          />
        </React.Suspense>
      )}

      <div className="book-shell">
        {/* SIDEBAR */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
            <div className="brand">
              <div className="brand-mark">
                <BookOpen size={18} />
              </div>
              <div className="brand-text">
                <div className="brand-eyebrow">Aprende español</div>
                <div className="brand-title">Lexiora</div>
              </div>
              <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            </div>

            <nav className="section-nav">
              <div className={`section-group home-nav-item ${showHome ? 'active' : ''}`}>
                <button
                  className="section-btn home-section-btn"
                  onClick={() => { setSectionLandingId(null); setActiveNestedTarget(null); setShowHome(true); setShowMemoria(false); setSidebarOpen(false); }}
                >
                  <div className="section-icon-wrap home-icon-wrap">
                    <Compass size={18} className="section-icon" />
                  </div>
                  <div className="section-text">
                    <div className="section-label">Inicio</div>
                    <div className="section-sublabel">Plan diario</div>
                  </div>
                  <div className="section-meta">
                    <div className="section-count">{visibleVisitedCount}</div>
                  </div>
                </button>
              </div>

              {activeSections.filter((section) => section.id !== 'practicar').map((s) => {
                const visibleChapters = visibleFlatChapters.filter((chapter) => chapter.sectionId === s.id);
                const sectionLessons = buildSectionLessonCards(s, visibleChapters);
                const isActive = s.id === activeSectionId && !showMemoria && !showHome;
                return (
                  <div key={s.id} className={`section-group ${isActive ? 'active' : ''}`}>
                    <button
                      className="section-btn"
                      onClick={() => openSection(s)}
                    >
                      <div className="section-icon-wrap">
                        <SectionIcon id={s.id} size={18} className="section-icon" />
                      </div>
                      <div className="section-text">
                        <div className="section-label">{s.label}</div>
                        <div className="section-sublabel">{s.sublabel}</div>
                      </div>
                      <div className="section-meta">
                        <div className="section-count">{sectionLessons.length}</div>
                        <ChevronRight size={16} className="section-chevron" />
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Memoria — special nav item */}
              <div className={`section-group memoria-nav-item ${showMemoria ? 'active' : ''}`}>
                <button
                  className="section-btn memoria-section-btn"
                  onClick={() => { setSectionLandingId(null); setActiveNestedTarget(null); setShowHome(false); setShowMemoria(true); setSidebarOpen(false); }}
                >
                  <div className="section-icon-wrap memoria-icon-wrap">
                    <Bookmark size={18} className="section-icon" />
                  </div>
                  <div className="section-text">
                    <div className="section-label">Memoria</div>
                    <div className="section-sublabel">Mis palabras guardadas</div>
                  </div>
                  <div className="section-meta">
                    <div className="section-count memoria-count">{savedWords.length}</div>
                  </div>
                </button>
              </div>

              {practiceSection && (
                <div className={`section-group practice-nav-item ${activeSectionId === 'practicar' && !showMemoria && !showHome ? 'active' : ''}`}>
                  <button
                    className="section-btn practice-section-btn"
                    onClick={() => openSection(practiceSection)}
                  >
                    <div className="section-icon-wrap practice-icon-wrap">
                      <SectionIcon id="practicar" size={18} className="section-icon" />
                    </div>
                    <div className="section-text">
                      <div className="section-label">{practiceSection.label}</div>
                      <div className="section-sublabel">{practiceSection.sublabel}</div>
                    </div>
                    <div className="section-meta">
                      <div className="section-count practice-count">{practiceLessons.length}</div>
                      <ChevronRight size={16} className="section-chevron" />
                    </div>
                  </button>
                </div>
              )}
            </nav>

            <div className="sidebar-footer">
              <button
                type="button"
                className="sidebar-sync-btn"
                onClick={() => { setSyncOpen(true); setSyncMessage(''); }}
              >
                Sync
              </button>
              <div className="sig">— para Othman</div>
            </div>
          </div>
          {sidebarOpen && <div className="scrim" onClick={() => setSidebarOpen(false)} />}
        </aside>

        {/* MAIN */}
        <main className="book-main">
          {/* Resume / update notices live inside the mobile scroll panel so they never cover lesson text. */}
          {showInstallBanner && (
            <InstallBanner
              installReady={installReady}
              installMessage={installMessage}
              onInstall={installLexiora}
              onDismiss={dismissInstallBanner}
            />
          )}
          {resumeOffer && (
            <div className="resume-banner">
              <div className="resume-banner-text">
                <span className="resume-banner-label">Continuar leyendo</span>
                <span className="resume-banner-title">{resumeOffer.title}</span>
              </div>
              <div className="resume-banner-actions">
                <button className="resume-btn-primary" onClick={jumpToResume}>
                  Continuar
                  <ChevronRight size={14} />
                </button>
                <button className="resume-btn-dismiss" onClick={dismissResume} aria-label="Dismiss">
                  <X size={14} />
                </button>
              </div>
            </div>
          )}

          {waitingWorker && (
            <div className="update-banner">
              <div>
                <span className="resume-banner-label">New version ready</span>
                <span className="resume-banner-title">Refresh to use the latest study tools. Current: {versionLabel}</span>
              </div>
              <button className="resume-btn-primary" onClick={activateAppUpdate}>
                Update
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          <div className={`book-page ${showHome ? 'home-page' : ''}`}>
            {showHome ? (
              <HomeDashboardView
                totalLessons={studyProgress.total}
                visitedCount={visibleVisitedCount}
                savedWordsCount={savedWords.length}
                levelFilter={levelFilter}
                palabrasSummary={palabrasSummary}
                lessonSummary={lessonSummary}
                memoriaSummary={memoriaSummary}
                learnerProfile={learnerProfile}
                reviewQueue={reviewQueue}
                dailyPlan={dailyPlan}
                dailyProgress={dailyProgress}
                teacherInsights={teacherInsights}
                sectionProgress={sectionProgress}
                recommendations={recommendedChapters}
                onStart={() => startChapter && selectChapter(startChapter)}
                onStartDaily={startDailyLesson}
                onDailyStep={handleDailyStep}
                onOpenMemoria={openMemoriaView}
                onOpenPalabras={() => palabrasChapter && selectChapter(palabrasChapter)}
                onOpenVerb={() => verbChapter && selectChapter(verbChapter)}
                onOpenReading={() => readingChapter && selectChapter(readingChapter)}
                onSelectChapter={selectChapter}
                onTeacherAction={handleTeacherAction}
              />
            ) : showMemoria ? (
              <React.Suspense fallback={<div className="empty"><Sparkles size={28} /><p>Loading Memoria...</p></div>}>
                <MemoriaView
                  savedWords={savedWords}
                  onRemove={handleRemoveWord}
                  onClear={handleClearWords}
                  onUpdateWord={handleUpdateWord}
                />
              </React.Suspense>
            ) : sectionLandingId ? (
              <SectionOverviewView
                section={sectionLanding}
                lessons={sectionLandingLessons}
                visitedSet={visitedSet}
                lessonStatuses={lessonStatuses}
                onSelectChapter={selectChapter}
                SectionIconComponent={SectionIcon}
              />
            ) : activeChapter ? (
              <React.Suspense fallback={<div className="empty"><Sparkles size={28} /><p>Loading lesson...</p></div>}>
                <ChapterContent
                  chapter={activeChapter}
                  sectionId={activeSectionId}
                  section={activeSection}
                  activeNestedTarget={activeNestedTarget}
                  onOpenSection={openSection}
                  onSaveWord={handleSaveWord}
                  savedWords={savedWords}
                  onUpdateSavedWord={handleUpdateWord}
                  palabrasProgress={palabrasProgress}
                  onPalabrasProgressChange={handlePalabrasProgressChange}
                  lessonStatuses={lessonStatuses}
                  onLessonStatusChange={handleLessonStatusChange}
                  practiceChapters={allFlatChapters}
                  onPracticeAttempt={handlePracticeAttempt}
                  SectionIconComponent={SectionIcon}
                />
              </React.Suspense>
            ) : (
              <div className="empty">
                <Sparkles size={28} />
                <p>No hay lecciones en este nivel.</p>
              </div>
            )}

            {/* Chapter navigation (prev / next) */}
            {!showHome && !showMemoria && !sectionLandingId && (
            <nav className="chapter-nav">
              {prevChapter ? (
                <button className="nav-btn prev" onClick={() => selectChapter(prevChapter)}>
                  <ChevronLeft size={16} />
                  <div>
                    <div className="nav-eyebrow">Anterior</div>
                    <div className="nav-title">{prevChapter.title}</div>
                  </div>
                </button>
              ) : <div />}
              {nextChapter ? (
                <button className="nav-btn next" onClick={() => selectChapter(nextChapter)}>
                  <div style={{ textAlign: 'right' }}>
                    <div className="nav-eyebrow">Siguiente</div>
                    <div className="nav-title">{nextChapter.title}</div>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ) : <div />}
            </nav>
            )}
          </div>

          {/* CEFR LEVEL FILTER (the bottom of your sketch) */}
          <footer className="level-bar">
            <div className="level-bar-inner">
              <div className="level-bar-label"><Bookmark size={14} /> Nivel</div>
              <div className="level-pills">
                <button
                  className={`level-pill ${levelFilter === 'ALL' ? 'active' : ''}`}
                  onClick={() => setLevelFilter('ALL')}
                >Todos</button>
                {LEVELS.map((lv) => (
                  <button
                    key={lv}
                    className={`level-pill ${levelFilter === lv ? 'active' : ''}`}
                    onClick={() => setLevelFilter(lv)}
                  >{lv}</button>
                ))}
              </div>
              <AudioSettings settings={audioSettings} onChange={handleAudioSettingsChange} />
              <div className="level-bar-counter">
                {showHome
                  ? `${visibleVisitedCount} / ${studyProgress.total}`
                  : sectionLandingId ? `${sectionLandingLessons.length} lecciones`
                  : currentIndex >= 0 ? `${currentIndex + 1} / ${visibleFlatChapters.length}` : '—'}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// Styles live in book-styles.js.
