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
    tagline: 'Java · Spring Boot · APIs · Software empresarial',
    location: 'Ourense, Galicia',
    email: 'rodrigofernandez.dev@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/rodrigofernandezdev',
    linkedinLabel: 'linkedin.com/in/rodrigofernandezdev',
    portfolioUrl: 'https://rodrigofernandez.dev',
    portfolioLabel: 'rodrigofernandez.dev',
  },
  availability: 'Disponible para incorporación a partir de septiembre de 2026',
  about: [
    'Actualmente curso DAM Dual mientras realizo mis prácticas en Viewnext, participando en un proyecto para CaixaBank. Al mismo tiempo estudio Ingeniería Informática porque disfruto entendiendo cómo construir software sólido más allá del desarrollo diario.',
    'Fuera del trabajo sigo programando por iniciativa propia. Desarrollo proyectos completos, desde el diseño hasta la implementación, con especial interés por el backend, la arquitectura de aplicaciones y la creación de productos útiles. Me motiva aprender, asumir nuevos retos y mejorar continuamente la calidad del software que desarrollo.',
    'Busco incorporarme a un equipo donde pueda seguir creciendo como desarrollador, aportar una actitud proactiva y convertir esa curiosidad por aprender en soluciones que generen valor desde el primer día.',
  ],
  experience: [
    {
      role: 'Desarrollador Backend (FP Dual)',
      company: 'Viewnext',
      period: '2025 — Septiembre 2026',
      highlights: [
        'Desarrollo y mantenimiento evolutivo de aplicaciones empresariales en equipo, en entorno bancario para CaixaBank.',
        'Implementación de lógica de negocio, APIs y consultas SQL/Oracle con Java y Spring MVC/Spring Boot.',
        'Resolución de incidencias y evolutivos con Git, revisión de código y estándares de calidad corporativos.',
        'Colaboración diaria con el equipo técnico: legibilidad, pruebas y coordinación en flujo de desarrollo profesional.',
      ],
    },
  ],
  projects: [
    {
      name: 'ERP — TFC de DAM',
      emphasize: true,
      description:
        'TFC de DAM. Software en uso real que centraliza clientes, presupuestos, pedidos y facturación en un taller de tapicería. Spring Boot y PostgreSQL en backend; React y Electron en escritorio. Sustituye Excel y procesos manuales por trazabilidad en la operativa diaria.',
    },
    {
      name: 'FOMO',
      emphasize: true,
      description:
        'App móvil social desarrollada de forma autónoma con React Native. Definición de flujos, arquitectura móvil, gestión de estado y UX pensada para uso en grupo — producto completo, no solo funcionalidad aislada.',
    },
    {
      name: 'Plataforma de investigación cuantitativa',
      emphasize: true,
      description:
        'Plataforma propia para backtesting, procesamiento de datos, métricas de rendimiento y comparación de estrategias. Arquitectura orientada a evidencia y análisis estadístico para decisiones basadas en datos.',
    },
    {
      name: 'Porto-Muiños · InnovatechFP',
      emphasize: true,
      description:
        'Proyecto en equipo para cliente real (Porto-Muiños) en InnovatechFP: análisis del problema, definición de producto, prototipado y presentación ante jurado profesional.',
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
      period: 'Septiembre de 2026',
      periodLabel: 'Finalización prevista:',
    },
  ],
  technologies: [
    { category: 'Lenguajes', items: ['Java', 'TypeScript', 'SQL'] },
    {
      category: 'Frameworks / Librerías',
      items: [
        'Spring Boot',
        'Spring MVC',
        'REST',
        'JPA/Hibernate',
        'React',
        'React Native',
        'Electron',
      ],
    },
    { category: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Oracle', 'Firebase'] },
    { category: 'Herramientas de desarrollo', items: ['Azure', 'Docker', 'Git'] },
    {
      category: 'Diseño y producto',
      items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'],
    },
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
