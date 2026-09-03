export type CvVariantId = 'default' | 'backend' | 'ia' | 'mobile';

export interface CvContact {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
  portfolioUrl: string;
  portfolioLabel: string;
  githubUrl?: string;
  githubLabel?: string;
  phone?: string;
}

export interface CvExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface CvProject {
  name: string;
  description: string;
  emphasize?: boolean;
}

export interface CvEducation {
  degree: string;
  institution: string;
  period: string;
  periodLabel?: string;
}

export interface CvTechnologyGroup {
  category: string;
  items: string[];
}

export interface CvCertification {
  name: string;
  issuer?: string;
  emphasize?: boolean;
}

export interface CvLanguage {
  name: string;
  level: string;
}

export interface CvPortfolioNote {
  text: string;
  url: string;
  urlLabel: string;
}

export interface CvData {
  variant: CvVariantId;
  contact: CvContact;
  availability: string;
  about: string[];
  experience: CvExperience[];
  projects: CvProject[];
  education: CvEducation[];
  technologies: CvTechnologyGroup[];
  certifications: CvCertification[];
  languages: CvLanguage[];
  portfolioNote: CvPortfolioNote;
}

const cvDataBase: Omit<CvData, 'variant'> = {
  contact: {
    name: 'Rodrigo Fernández',
    headline: 'Desarrollador Backend Junior',
    tagline: 'Java · Spring Boot · APIs REST · Software empresarial',
    location: 'Ourense, Galicia',
    email: 'rodrigofernandez.dev@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/rodrigofernandezdev',
    linkedinLabel: 'linkedin.com/in/rodrigofernandezdev',
    portfolioUrl: 'https://rodrigofernandez.dev',
    portfolioLabel: 'rodrigofernandez.dev',
  },
  availability: 'Disponibilidad inmediata',
  about: [
    'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM Dual) y actualmente estudiante de Ingeniería Informática. Experiencia profesional en desarrollo backend dentro de un entorno enterprise, participando en un proyecto del sector bancario con Java y Spring.',
    'Desarrollo proyectos propios completos con especial interés por backend, arquitectura de aplicaciones y software empresarial. Busco seguir creciendo como desarrollador, trabajando sobre problemas reales y construyendo software mantenible.',
  ],
  experience: [
    {
      role: 'Desarrollador Backend — FP Dual',
      company: 'Viewnext',
      period: 'Abril 2025 – Julio 2026',
      highlights: [
        'Desarrollo y mantenimiento evolutivo de aplicaciones empresariales para CaixaBank.',
        'Implementación de lógica de negocio con Java y tecnologías del ecosistema Spring.',
        'Trabajo con bases de datos relacionales y SQL en aplicaciones internas de gestión empresarial.',
        'Resolución de incidencias y desarrollo de evolutivos sobre aplicaciones corporativas.',
        'Uso de Git y colaboración dentro de un equipo de desarrollo enterprise siguiendo estándares corporativos.',
      ],
    },
  ],
  projects: [
    {
      name: 'ERP de Gestión para Tapicería — TFC de DAM Dual',
      emphasize: true,
      description:
        'Aplicación de escritorio para digitalizar la gestión integral de un negocio de tapicería: clientes, trabajos, presupuestos, facturación electrónica, catálogos textiles e importación de tarifas. Spring Boot, JPA/Hibernate, PostgreSQL, Flyway, React, TypeScript y Electron. Aplicación instalable para Windows con backend, base de datos y runtime integrados.',
    },
    {
      name: 'Plataforma de investigación cuantitativa',
      emphasize: true,
      description:
        'Plataforma propia para backtesting, procesamiento de datos, métricas de rendimiento y comparación de estrategias con enfoque analítico.',
    },
    {
      name: 'FOMO',
      emphasize: true,
      description:
        'App móvil social desarrollada de forma autónoma con React Native, con foco en flujos, arquitectura y experiencia de uso en grupo.',
    },
    {
      name: 'Porto-Muiños · InnovatechFP',
      emphasize: true,
      description:
        'Proyecto en equipo para cliente real en InnovatechFP: definición de producto, prototipado y presentación ante jurado profesional.',
    },
  ],
  education: [
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad Internacional de La Rioja (UNIR)',
      period: 'Actualmente en curso',
    },
    {
      degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM Dual)',
      institution: 'CIFP A Carballeira',
      period: '2024 – 2026 · Finalizado',
    },
  ],
  technologies: [
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Batch', 'REST', 'JPA/Hibernate'],
    },
    {
      category: 'Bases de datos',
      items: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL'],
    },
    { category: 'Tools', items: ['Git', 'Docker', 'JUnit', 'Postman'] },
    { category: 'Frontend / Desktop', items: ['React', 'TypeScript', 'Electron'] },
    { category: 'Mobile', items: ['React Native'] },
    { category: 'Cloud', items: ['Azure'] },
  ],
  certifications: [
    { name: 'Microsoft Azure Fundamentals (AZ-900)', emphasize: true },
    { name: 'Python', issuer: 'UNIR' },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Gallego', level: 'Nativo' },
    { name: 'Inglés', level: 'Preparando certificación Cambridge B2' },
  ],
  portfolioNote: {
    text: 'Casos de estudio y proyectos:',
    url: 'https://rodrigofernandez.dev',
    urlLabel: 'rodrigofernandez.dev',
  },
};

const cvVariantOverrides: Partial<Record<CvVariantId, Partial<Omit<CvData, 'variant'>>>> = {
  backend: {},
  ia: {},
  mobile: {},
};

function mergeCvData(
  base: Omit<CvData, 'variant'>,
  overrides: Partial<Omit<CvData, 'variant'>> | undefined,
  variant: CvVariantId,
): CvData {
  if (!overrides) return { ...base, variant };

  return {
    variant,
    contact: { ...base.contact, ...overrides.contact },
    availability: overrides.availability ?? base.availability,
    about: overrides.about ?? base.about,
    experience: overrides.experience ?? base.experience,
    projects: overrides.projects ?? base.projects,
    education: overrides.education ?? base.education,
    technologies: overrides.technologies ?? base.technologies,
    certifications: overrides.certifications ?? base.certifications,
    languages: overrides.languages ?? base.languages,
    portfolioNote: overrides.portfolioNote ?? base.portfolioNote,
  };
}

export function getCvData(variant: CvVariantId = 'default'): CvData {
  return mergeCvData(cvDataBase, cvVariantOverrides[variant], variant);
}

export const CV_OUTPUT_FILENAME = 'Rodrigo-Fernandez-CV.pdf';
