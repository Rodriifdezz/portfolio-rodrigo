import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from 'playwright';

import {
  CV_OUTPUT_FILENAME,
  getCvData,
  type CvVariantId,
} from './cv-data.js';
import { renderCvHtml } from './render-cv-html.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const VALID_VARIANTS: CvVariantId[] = ['default', 'backend', 'ia', 'mobile'];

function parseArgs(): { variant: CvVariantId; htmlOnly: boolean } {
  const args = process.argv.slice(2);
  const htmlOnly = args.includes('--html-only');
  const variantArg = args.find((arg) => !arg.startsWith('--')) ?? 'default';

  if (!VALID_VARIANTS.includes(variantArg as CvVariantId)) {
    console.error(`Variante no válida: ${variantArg}`);
    console.error(`Usa una de: ${VALID_VARIANTS.join(', ')}`);
    process.exit(1);
  }

  return { variant: variantArg as CvVariantId, htmlOnly };
}

async function main() {
  const { variant, htmlOnly } = parseArgs();
  const data = getCvData(variant);
  const html = renderCvHtml(data);

  const outputDir = join(__dirname, 'output');
  const previewPath = join(outputDir, `preview-${variant}.html`);
  const publicCvDir = join(ROOT, 'public', 'cv');
  const pdfPath = join(publicCvDir, CV_OUTPUT_FILENAME);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(previewPath, html, 'utf8');
  console.log(`HTML preview: ${previewPath}`);

  if (htmlOnly) {
    console.log('Modo --html-only: PDF no generado.');
    return;
  }

  mkdirSync(publicCvDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '10mm',
      right: '14mm',
      bottom: '10mm',
      left: '14mm',
    },
  });

  await browser.close();

  console.log(`PDF generado: ${pdfPath}`);
  console.log(`Variante: ${variant}`);
}

main().catch((error) => {
  console.error('Error generando CV:', error);
  process.exit(1);
});
