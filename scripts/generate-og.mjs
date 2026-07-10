import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const PREVIEW_URL = process.env.OG_PREVIEW_URL ?? 'http://localhost:4321/';
const OUTPUT_PATH = 'public/og.png';
const WIDTH = 1200;
const HEIGHT = 630;
const SCALE = 2;

async function waitForServer(url, attempts = 30) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server still starting
    }
    await sleep(500);
  }

  throw new Error(`Preview server not reachable at ${url}`);
}

const preview = spawn('npm', ['run', 'preview', '--', '--port', '4321'], {
  stdio: 'ignore',
  shell: true,
});

try {
  await waitForServer(PREVIEW_URL);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: SCALE,
  });

  await page.goto(PREVIEW_URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.documentElement.classList.remove('custom-cursor-active');
    document.getElementById('custom-cursor')?.setAttribute('hidden', '');
  });
  await page.screenshot({ path: OUTPUT_PATH, type: 'png' });
  await browser.close();

  console.log(`Generated ${OUTPUT_PATH} (${WIDTH * SCALE}x${HEIGHT * SCALE})`);
} finally {
  preview.kill('SIGTERM');
}
