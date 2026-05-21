import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

const files = {
  styles: read('src/book-styles.js'),
  app: read('src/spanish-book.jsx'),
  syncPanel: read('src/sync-panel.jsx'),
  teacherPanel: read('src/teacher-panel.jsx'),
  installBanner: read('src/install-banner.jsx'),
  manifest: read('public/manifest.webmanifest'),
  serviceWorker: read('public/sw.js'),
  pwa: read('src/pwa.js'),
};

const checks = [
  ['phone scroll is controlled by the mobile shell', files.styles.includes('@media (max-width: 1100px)') && files.styles.includes('overflow-y: auto !important')],
  ['Galaxy-width layout has dedicated compact rules', files.styles.includes('@media (max-width: 700px)')],
  ['Boox mode removes visual noise', files.styles.includes('.book-root.boox-mode') && files.styles.includes('color-scheme: light') && files.styles.includes('--shadow: none')],
  ['Boox verb tables stay as real tables', files.styles.includes('.book-root.boox-mode .verb-table-block .tense-reader-table') && files.styles.includes('display: table !important')],
  ['verb conjugation endings are kept attached', files.styles.includes('.render-form .form-part + .ending') && files.styles.includes('margin-left: 0')],
  ['install prompt support is wired', files.app.includes('beforeinstallprompt') && files.manifest.includes('"display"') && files.manifest.includes('"icons"')],
  ['PWA update notification is wired', files.pwa.includes('learn-spanish-update-ready') && files.serviceWorker.includes('SKIP_WAITING')],
  ['Google sync panel is split and lazy loaded', files.app.includes("React.lazy(() => import('./sync-panel.jsx'))") && files.syncPanel.includes('Google Drive stores one private study file')],
  ['large lesson packs are dynamically imported', files.app.includes("import('./tiempos-verbales.js')") && files.app.includes("import('./spanish-expressions-library.js')")],
  ['teacher recommendations are modular', files.app.includes('buildTeacherInsights') && files.teacherPanel.includes('Teacher notes')],
  ['install banner is modular', files.app.includes('<InstallBanner') && files.installBanner.includes('Install Lexiora')],
  ['offline rendering has performance containment', files.styles.includes('content-visibility: auto')],
];

for (const [name, passed] of checks) {
  assert.equal(Boolean(passed), true, name);
  console.log(`ok - ${name}`);
}
