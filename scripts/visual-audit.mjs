import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

const styleFiles = [
  'src/styles/core.css',
  'src/styles/tables.css',
  'src/styles/practice.css',
  'src/styles/mobile.css',
  'src/styles/boox.css',
];

const files = {
  styles: styleFiles.map(read).join('\n'),
  styleCombiner: read('src/book-styles.js'),
  app: read('src/spanish-book.jsx'),
  chapterContent: read('src/chapter-content.jsx'),
  readingBlocks: read('src/reading-blocks.jsx'),
  palabrasLab: read('src/palabras-lab.jsx'),
  verbTables: read('src/verb-tables.jsx'),
  lessonData: read('src/lesson-data.js'),
  homeDashboard: read('src/home-dashboard.jsx'),
  lessonStatus: read('src/lesson-status.js'),
  syncPanel: read('src/sync-panel.jsx'),
  firebaseSync: read('src/firebase-sync.js'),
  teacherPanel: read('src/teacher-panel.jsx'),
  installBanner: read('src/install-banner.jsx'),
  memoriaView: read('src/memoria-view.jsx'),
  index: read('index.html'),
  manifest: read('public/manifest.webmanifest'),
  serviceWorker: read('public/sw.js'),
  pwa: read('src/pwa.js'),
  practiceEngine: read('src/practice-engine.js'),
  lessonMastery: read('src/lesson-mastery.jsx'),
  readingTools: read('src/reading-tools.jsx'),
  deviceProfile: read('src/device-profile.js'),
  versionInfo: read('src/version-info.js'),
};

const checks = [
  ['CSS is split into focused raw layers', styleFiles.every((file) => files.styleCombiner.includes(file.replace('src/', './'))) && files.styleCombiner.includes('?raw')],
  ['Chapter renderer is lazy loaded from its own module', files.app.includes("React.lazy(() => import('./chapter-content.jsx'))") && files.chapterContent.includes('export function ChapterContent')],
  ['reading foldables are separated from the app shell', files.readingBlocks.includes('export function FoldableStoriesBlock') && !files.app.includes('function FoldableStoriesBlock')],
  ['Palabras lab and loader are separated from the app shell', files.palabrasLab.includes('export function PalabrasLab') && files.palabrasLab.includes('export function loadPalabrasGroups') && files.app.includes('loadPalabrasGroups')],
  ['verb and conjugation tables are separated', files.verbTables.includes('export function VerbTableBlock') && !files.app.includes('function VerbTableBlock')],
  ['phone scroll is controlled by the mobile shell', files.styles.includes('@media (max-width: 1100px)') && files.styles.includes('overflow-y: auto !important')],
  ['Galaxy-width layout has dedicated compact rules', files.styles.includes('@media (max-width: 700px)')],
  ['Boox mode removes visual noise', files.styles.includes('.book-root.boox-mode') && files.styles.includes('color-scheme: light') && files.styles.includes('--shadow: none')],
  ['Boox verb tables use grouped tense rows', files.styles.includes('.book-root.boox-mode .verb-table-block .tense-stack') && files.styles.includes('.book-root.boox-mode .verb-table-block .tense-reader-table {\n  display: none !important;') && files.styles.includes('tense-group-count-3')],
  ['tablet verb tables do not squeeze all tenses into one row', files.styles.includes('.verb-table-block .tense-reader-table {\n    display: none !important;') && files.verbTables.includes('tense-group-count-${tenses.length}')],
  ['verb conjugation endings are kept attached', files.styles.includes('.render-form .form-part + .ending') && files.styles.includes('margin-left: 0')],
  ['install prompt support is wired', files.app.includes('beforeinstallprompt') && files.manifest.includes('"display"') && files.manifest.includes('"icons"')],
  ['PWA update notification is wired', files.pwa.includes('learn-spanish-update-ready') && files.serviceWorker.includes('SKIP_WAITING')],
  ['Firebase public config no longer triggers the Vite script warning', !files.index.includes('firebase-config.js') && files.firebaseSync.includes('loadPublicFirebaseConfig')],
  ['Google sync panel is split and lazy loaded', files.app.includes("React.lazy(() => import('./sync-panel.jsx'))") && files.syncPanel.includes('Realtime sync keeps Memoria')],
  ['large lesson packs are dynamically imported', files.lessonData.includes("import('./tiempos-verbales.js')") && files.lessonData.includes("import('./spanish-expressions-library.js')")],
  ['teacher recommendations are modular', files.app.includes('buildTeacherInsights') && files.teacherPanel.includes('Teacher notes')],
  ['daily teacher mode is split and visible', files.app.includes("import HomeDashboardView from './home-dashboard.jsx'") && files.homeDashboard.includes('Daily Teacher Mode') && files.styles.includes('.daily-teacher-panel')],
  ['lesson mastery states are shared across modules', files.lessonStatus.includes('mastered') && files.chapterContent.includes('LessonMasteryQuiz') && files.styles.includes('.lesson-mastery-actions')],
  ['Memoria 2.0 focus filters are present', files.memoriaView.includes('memoria-focus-board') && files.styles.includes('.memoria-focus-board')],
  ['practice engine is split for quizzes', files.practiceEngine.includes('buildLessonQuiz') && files.chapterContent.includes("import('./practice-hub.jsx')")],
  ['lesson mastery quiz is modular', files.lessonMastery.includes('LessonMasteryQuiz') && files.chapterContent.includes('<LessonMasteryQuiz')],
  ['reading phrase saver is modular', files.readingTools.includes('ReadingPhraseSaver') && files.readingBlocks.includes('<ReadingPhraseSaver')],
  ['device visual system is modular', files.deviceProfile.includes('getDeviceProfile') && files.styles.includes('.device-phone') && files.styles.includes('.device-reader-tablet')],
  ['version reliability is visible', files.versionInfo.includes('APP_VERSION') && files.pwa.includes('learn-spanish-update-ready') && !files.pwa.includes("worker?.postMessage?.({ type: 'SKIP_WAITING' })")],
  ['install banner is modular', files.app.includes('<InstallBanner') && files.installBanner.includes('Install Lexiora')],
  ['offline rendering has performance containment', files.styles.includes('content-visibility: auto')],
];

for (const [name, passed] of checks) {
  assert.equal(Boolean(passed), true, name);
  console.log(`ok - ${name}`);
}
