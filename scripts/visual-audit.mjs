import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

const files = {
  styles: read('src/book-styles.js'),
  app: read('src/spanish-book.jsx'),
  homeDashboard: read('src/home-dashboard.jsx'),
  lessonStatus: read('src/lesson-status.js'),
  syncPanel: read('src/sync-panel.jsx'),
  teacherPanel: read('src/teacher-panel.jsx'),
  installBanner: read('src/install-banner.jsx'),
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
  ['phone scroll is controlled by the mobile shell', files.styles.includes('@media (max-width: 1100px)') && files.styles.includes('overflow-y: auto !important')],
  ['Galaxy-width layout has dedicated compact rules', files.styles.includes('@media (max-width: 700px)')],
  ['Boox mode removes visual noise', files.styles.includes('.book-root.boox-mode') && files.styles.includes('color-scheme: light') && files.styles.includes('--shadow: none')],
  ['Boox verb tables use grouped tense rows', files.styles.includes('.book-root.boox-mode .verb-table-block .tense-stack') && files.styles.includes('.book-root.boox-mode .verb-table-block .tense-reader-table {\n  display: none !important;') && files.styles.includes('tense-group-count-3')],
  ['tablet verb tables do not squeeze all tenses into one row', files.styles.includes('.verb-table-block .tense-reader-table {\n    display: none !important;') && files.app.includes('tense-group-count-${tenses.length}')],
  ['verb conjugation endings are kept attached', files.styles.includes('.render-form .form-part + .ending') && files.styles.includes('margin-left: 0')],
  ['install prompt support is wired', files.app.includes('beforeinstallprompt') && files.manifest.includes('"display"') && files.manifest.includes('"icons"')],
  ['PWA update notification is wired', files.pwa.includes('learn-spanish-update-ready') && files.serviceWorker.includes('SKIP_WAITING')],
  ['Google sync panel is split and lazy loaded', files.app.includes("React.lazy(() => import('./sync-panel.jsx'))") && files.syncPanel.includes('Realtime sync keeps Memoria')],
  ['large lesson packs are dynamically imported', files.app.includes("import('./tiempos-verbales.js')") && files.app.includes("import('./spanish-expressions-library.js')")],
  ['teacher recommendations are modular', files.app.includes('buildTeacherInsights') && files.teacherPanel.includes('Teacher notes')],
  ['daily teacher mode is split and visible', files.app.includes("import HomeDashboardView from './home-dashboard.jsx'") && files.homeDashboard.includes('Daily Teacher Mode') && files.styles.includes('.daily-teacher-panel')],
  ['lesson mastery states are shared across modules', files.lessonStatus.includes('mastered') && files.app.includes('lesson-mastery-panel') && files.styles.includes('.lesson-mastery-actions')],
  ['Memoria 2.0 focus filters are present', files.app.includes('memoria-focus-board') && files.styles.includes('.memoria-focus-board')],
  ['practice engine is split for quizzes', files.practiceEngine.includes('buildLessonQuiz') && files.app.includes("from './practice-engine.js'")],
  ['lesson mastery quiz is modular', files.lessonMastery.includes('LessonMasteryQuiz') && files.app.includes('<LessonMasteryQuiz')],
  ['reading phrase saver is modular', files.readingTools.includes('ReadingPhraseSaver') && files.app.includes('<ReadingPhraseSaver')],
  ['device visual system is modular', files.deviceProfile.includes('getDeviceProfile') && files.styles.includes('.device-phone') && files.styles.includes('.device-reader-tablet')],
  ['version reliability is visible', files.versionInfo.includes('APP_VERSION') && files.pwa.includes('learn-spanish-update-ready') && !files.pwa.includes("worker?.postMessage?.({ type: 'SKIP_WAITING' })")],
  ['install banner is modular', files.app.includes('<InstallBanner') && files.installBanner.includes('Install Lexiora')],
  ['offline rendering has performance containment', files.styles.includes('content-visibility: auto')],
];

for (const [name, passed] of checks) {
  assert.equal(Boolean(passed), true, name);
  console.log(`ok - ${name}`);
}
