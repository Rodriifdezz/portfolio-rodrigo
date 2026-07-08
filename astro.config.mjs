// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const vercelPreview = process.env.VERCEL_URL;
const netlifyUrl = process.env.URL;

function normalizeSiteUrl(value) {
  if (value == null || value.length === 0) return null;
  return value.startsWith('http') ? value : `https://${value}`;
}

/** @type {string} */
const site =
  normalizeSiteUrl(vercelProduction) ??
  normalizeSiteUrl(netlifyUrl) ??
  normalizeSiteUrl(vercelPreview) ??
  'https://rodrigofernandez.dev';

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
