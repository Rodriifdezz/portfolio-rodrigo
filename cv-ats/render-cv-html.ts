import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CvData } from './cv-data.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const HIGHLIGHT_TERMS = [
  'Microsoft Azure Fundamentals (AZ-900)',
  'Plataforma de investigación cuantitativa',
  'ERP de Gestión para Tapicería — TFC de DAM Dual',
  'Porto-Muiños · InnovatechFP',
  'CaixaBank',
  'Spring Boot',
  'PostgreSQL',
  'React Native',
  'InnovatechFP',
  'Porto-Muiños',
  'AZ-900',
] as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function protectPhrases(text: string): string {
  return text
    .replace(/DAM Dual/g, '<span class="cv-nowrap">DAM Dual</span>')
    .replace(/FP Dual/g, '<span class="cv-nowrap">FP Dual</span>');
}

function renderRichText(text: string): string {
  let html = escapeHtml(text);

  for (const term of [...HIGHLIGHT_TERMS].sort((a, b) => b.length - a.length)) {
    const escapedTerm = escapeHtml(term);
    html = html.replace(
      new RegExp(escapeRegExp(escapedTerm), 'g'),
      `<strong class="cv-hl">${escapedTerm}</strong>`,
    );
  }

  return protectPhrases(html);
}

function renderAbout(paragraphs: string[]): string {
  return paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join('');
}

function renderList(items: string[]): string {
  if (items.length === 0) return '';
  return `<ul class="cv-list">${items.map((item) => `<li>${renderRichText(item)}</li>`).join('')}</ul>`;
}

function renderExperience(data: CvData): string {
  return data.experience
    .map(
      (entry) => `
      <article class="cv-entry">
        <div class="cv-entry-line">
          <p class="cv-entry-title"><strong>${protectPhrases(entry.role)}</strong> <span class="cv-sep">—</span> <strong>${escapeHtml(entry.company)}</strong></p>
          <p class="cv-entry-period">${escapeHtml(entry.period)}</p>
        </div>
        ${renderList(entry.highlights)}
      </article>`,
    )
    .join('');
}

function renderProjects(data: CvData): string {
  return data.projects
    .map((project) => {
      const titleClass = project.emphasize ? 'cv-entry-title cv-entry-title--key' : 'cv-entry-title';
      return `
      <article class="cv-entry">
        <p class="${titleClass}"><strong>${escapeHtml(project.name)}</strong></p>
        <p class="cv-entry-desc">${renderRichText(project.description)}</p>
      </article>`;
    })
    .join('');
}

function renderEducation(data: CvData): string {
  return data.education
    .map((entry) => {
      const periodHtml = entry.periodLabel
        ? `<span class="cv-edu-period-label">${escapeHtml(entry.periodLabel)}</span> ${escapeHtml(entry.period)}`
        : escapeHtml(entry.period);

      return `
      <article class="cv-edu-block">
        <p class="cv-edu-degree">${protectPhrases(entry.degree)}</p>
        <p class="cv-edu-institution">${escapeHtml(entry.institution)}</p>
        <p class="cv-edu-period">${periodHtml}</p>
      </article>`;
    })
    .join('');
}

function renderTechnologies(data: CvData): string {
  return `<div class="cv-tech-list">${data.technologies
    .map(
      (group) => `
      <p class="cv-tech-line">
        <span class="cv-tech-label">${escapeHtml(group.category)}</span>
        <span class="cv-tech-items">${escapeHtml(group.items.join(' · '))}</span>
      </p>`,
    )
    .join('')}</div>`;
}

function renderCertifications(data: CvData): string {
  return data.certifications
    .map((cert) => {
      const text = cert.issuer ? `${cert.name} — ${cert.issuer}` : cert.name;
      const content = cert.emphasize ? renderRichText(text) : escapeHtml(text);
      return `<p class="cv-inline-line${cert.emphasize ? ' cv-inline-line--key' : ''}">${content}</p>`;
    })
    .join('');
}

function renderLanguages(data: CvData): string {
  return data.languages
    .map((lang) => `<p class="cv-inline-line">${escapeHtml(lang.name)} — ${escapeHtml(lang.level)}</p>`)
    .join('');
}

function renderContact(data: CvData): string {
  const parts: string[] = [
    `<span>${escapeHtml(data.contact.location)}</span>`,
    `<span><a href="mailto:${escapeHtml(data.contact.email)}">${escapeHtml(data.contact.email)}</a></span>`,
    `<span><a href="${escapeHtml(data.contact.linkedinUrl)}">${escapeHtml(data.contact.linkedinLabel)}</a></span>`,
    `<span><a href="${escapeHtml(data.contact.portfolioUrl)}">${escapeHtml(data.contact.portfolioLabel)}</a></span>`,
  ];

  if (data.contact.githubUrl && data.contact.githubLabel) {
    parts.push(
      `<span><a href="${escapeHtml(data.contact.githubUrl)}">${escapeHtml(data.contact.githubLabel)}</a></span>`,
    );
  }

  if (data.contact.phone) {
    parts.push(`<span>${escapeHtml(data.contact.phone)}</span>`);
  }

  return parts.join('');
}

function renderPortfolioNote(data: CvData): string {
  const { text, url, urlLabel } = data.portfolioNote;
  return `<p class="cv-portfolio-note">${escapeHtml(text)} <a href="${escapeHtml(url)}">${escapeHtml(urlLabel)}</a></p>`;
}

export function renderCvHtml(data: CvData): string {
  const css = readFileSync(join(__dirname, 'cv-print.css'), 'utf8');

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV — ${escapeHtml(data.contact.name)}</title>
    <style>${css}</style>
  </head>
  <body>
    <article class="cv">
      <header class="cv-header">
        <h1 class="cv-name">${escapeHtml(data.contact.name)}</h1>
        <p class="cv-headline">${escapeHtml(data.contact.headline)}</p>
        <p class="cv-tagline">${escapeHtml(data.contact.tagline)}</p>
        <p class="cv-contact">${renderContact(data)}</p>
        <p class="cv-availability">${escapeHtml(data.availability)}</p>
      </header>

      <section class="cv-section">
        <h2>Sobre mí</h2>
        ${renderAbout(data.about)}
      </section>

      <section class="cv-section">
        <h2>Experiencia profesional</h2>
        ${renderExperience(data)}
      </section>

      <section class="cv-section">
        <h2>Proyectos destacados</h2>
        ${renderProjects(data)}
      </section>

      <section class="cv-section">
        <h2>Formación</h2>
        ${renderEducation(data)}
      </section>

      <section class="cv-section">
        <h2>Tecnologías</h2>
        ${renderTechnologies(data)}
      </section>

      <div class="cv-dual-section">
        <section class="cv-section cv-section--compact">
          <h2>Certificaciones</h2>
          ${renderCertifications(data)}
        </section>

        <section class="cv-section cv-section--compact">
          <h2>Idiomas</h2>
          ${renderLanguages(data)}
        </section>
      </div>

      ${renderPortfolioNote(data)}
    </article>
  </body>
</html>`;
}
