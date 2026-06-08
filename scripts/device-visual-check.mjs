import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch (_) {
  console.log('skip - Playwright is not installed. Run `npm install -D playwright` to enable device screenshots.');
  process.exit(0);
}

const root = process.cwd();
const outputDir = join(root, 'test-results', 'visual');
mkdirSync(outputDir, { recursive: true });

const targetUrl = process.env.LEXIORA_VISUAL_URL || 'http://127.0.0.1:5173/Learn-Spanish/';
const devices = [
  { name: 'galaxy-s24', width: 412, height: 915, boox: false },
  { name: 'boox-eight-inch', width: 600, height: 800, boox: true },
  { name: 'boox-tab-ultra-c-pro', width: 820, height: 1180, boox: true },
];

const browser = await chromium.launch();
try {
  for (const device of devices) {
    const page = await browser.newPage({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: 1,
      isMobile: device.width < 700,
      hasTouch: true,
    });

    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.evaluate((forceBoox) => {
      if (forceBoox) {
        window.localStorage?.setItem?.('boox-mode-v1', 'true');
        document.querySelector('.book-root')?.classList.add('boox-mode', 'device-reader-tablet');
      }
    }, device.boox);
    await page.waitForSelector('.book-root', { timeout: 10000 });

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const main = document.querySelector('.book-main');
      const pageEl = document.querySelector('.book-page');
      return {
        docScrollWidth: doc.scrollWidth,
        docClientWidth: doc.clientWidth,
        bodyScrollWidth: body.scrollWidth,
        mainScrollWidth: main?.scrollWidth || 0,
        mainClientWidth: main?.clientWidth || 0,
        pageScrollWidth: pageEl?.scrollWidth || 0,
        pageClientWidth: pageEl?.clientWidth || 0,
        canScroll: (main?.scrollHeight || doc.scrollHeight) > (main?.clientHeight || doc.clientHeight),
        hasRoot: Boolean(document.querySelector('.book-root')),
        hasBrand: document.body.textContent.includes('Lexiora'),
      };
    });

    assert.equal(metrics.hasRoot, true, `${device.name}: app root rendered`);
    assert.equal(metrics.hasBrand, true, `${device.name}: Lexiora brand rendered`);
    assert.equal(metrics.canScroll, true, `${device.name}: lesson shell is scrollable`);
    assert.ok(metrics.docScrollWidth <= metrics.docClientWidth + 2, `${device.name}: document has horizontal overflow`);
    if (metrics.mainClientWidth) {
      assert.ok(metrics.mainScrollWidth <= metrics.mainClientWidth + 2, `${device.name}: main panel has horizontal overflow`);
    }
    if (metrics.pageClientWidth) {
      assert.ok(metrics.pageScrollWidth <= metrics.pageClientWidth + 2, `${device.name}: page content has horizontal overflow`);
    }

    await page.screenshot({ path: join(outputDir, `${device.name}.png`), fullPage: true });
    await page.close();
    console.log(`ok - ${device.name} visual width`);
  }
} finally {
  await browser.close();
}
