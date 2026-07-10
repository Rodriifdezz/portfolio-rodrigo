export const site = {
  name: 'Rodrigo Fernández',
  nameAscii: 'Rodrigo Fernandez',
  givenName: 'Rodrigo',
  familyName: 'Fernández',
  role: 'Desarrollador de Software · Backend y mobile',
  heroGreeting: 'Hola, soy',
  heroRole: 'Desarrollador Backend',
  heroBody:
    'Cursando DAM Dual con prácticas en Viewnext, a la vez que curso Ingeniería Informática. Me gusta aprender construyendo proyectos reales y seguir mejorando con cada uno de ellos.',
  description:
    'Rodrigo Fernández — desarrollador backend y mobile. Portfolio con proyectos reales en Java, Spring Boot, React Native y ERP en producción. Prácticas en Viewnext (CaixaBank).',
  homeTitle: 'Rodrigo Fernández | Desarrollador Backend y Mobile',
  homeDescription:
    'Rodrigo Fernández — portfolio oficial. Desarrollador backend y mobile con proyectos reales: Java, Spring Boot, React Native, ERP en producción y prácticas en Viewnext.',
  siteUrl: import.meta.env.SITE,
  linkedin: 'https://linkedin.com/in/rodrigofernandezdev',
  cvPath: '/cv/Rodrigo-Fernandez-CV.pdf',
  ogImage: '/og.png',
  ogImageWidth: 2400,
  ogImageHeight: 1260,
  profileImage: '/profile-share.png',
} as const;

export const about = {
  intro: {
    title: 'Sobre mí',
    paragraphs: [
      'Actualmente compagino DAM Dual con Ingeniería Informática mientras realizo mis prácticas en Viewnext, participando en un proyecto para CaixaBank.',
      'Lo que más me atrae del desarrollo de software es entender cómo se construyen buenos productos. No suelo conformarme con que una solución funcione; me gusta comprender por qué una decisión técnica es mejor que otra, qué implicaciones tiene y cómo influye en la calidad, el mantenimiento y la evolución de una aplicación.',
      'Fuera del trabajo y de la universidad sigo programando por iniciativa propia. Desarrollo proyectos completos, desde la idea hasta la implementación, con especial interés por el desarrollo backend, la arquitectura de software y la creación de aplicaciones útiles y mantenibles. Disfruto aprendiendo nuevas tecnologías cuando el problema lo requiere y mejorando continuamente mi forma de diseñar y desarrollar software.',
      'Busco incorporarme a un equipo donde pueda seguir creciendo como desarrollador, aprender de profesionales con experiencia y aportar compromiso, curiosidad y una forma de trabajar orientada a construir software de calidad.',
    ],
  },
  work: {
    title: 'Cómo trabajo',
    lead: 'En lugar de seguir una metodología rígida, suelo apoyarme en tres ideas que intento aplicar en cualquier proyecto:',
    principles: [
      {
        title: 'Entender antes de programar',
        text: 'Prefiero dedicar tiempo a comprender el problema antes de empezar a escribir código.',
      },
      {
        title: 'Buscar soluciones simples',
        text: 'Intento evitar la complejidad innecesaria y construir software que sea fácil de mantener y de entender.',
      },
      {
        title: 'Aprender en cada iteración',
        text: 'Me gusta revisar mi trabajo, aceptar feedback y utilizar cada proyecto para mejorar el siguiente.',
      },
    ],
  },
  now: {
    title: 'En este momento',
    items: [
      { label: 'Prácticas', value: 'Viewnext · DAM Dual' },
      { label: 'Proyecto', value: 'CaixaBank' },
      { label: 'Estudios', value: 'Ing. Informática' },
      { label: 'TFC', value: 'ERP para tapicería' },
    ],
  },
} as const;

export const projectsSection = {
  title: 'Proyectos que he construido',
  subtitle:
    'Tres contextos distintos: un producto móvil propio, un ERP para un negocio real y una solución diseñada para un cliente real.',
} as const;

export type ProjectEmphasis = 'primary' | 'backend' | 'product';

export const projects = [
  {
    id: 'fomo',
    title: 'FOMO',
    tagline: 'Proyecto personal · Mobile product',
    description:
      'FOMO es una aplicación móvil diseñada para hacer más divertida la experiencia de una noche de fiesta entre amigos. Más allá de la idea, este proyecto me permitió recorrer todo el ciclo de desarrollo de un producto: desde la definición de funcionalidades y la experiencia de usuario hasta la arquitectura, el desarrollo y la puesta en funcionamiento de la aplicación.',
    stack: ['React Native', 'Firebase', 'Zustand', 'Firestore'],
    metrics: { tipo: 'Proyecto personal', stack: 'React Native', rol: 'End-to-End' },
    caseStudy: '/projects/fomo',
    accentColor: '#FF2D9B',
    image: '/fomo/feature-graphic.png',
    imageAspect: '1024 / 500',
    imagePosition: 'center center',
    emphasis: 'primary' as ProjectEmphasis,
  },
  {
    id: 'erp',
    title: 'ERP',
    tagline: 'TFC · DAM · Negocio real',
    description:
      'Mi TFC de DAM: ERP a medida para un taller de tapicería con presupuestos, pedidos y operativa diaria. Spring Boot en backend, React y Electron en escritorio, con uso real en el negocio.',
    stack: ['Spring Boot', 'React', 'Electron', 'PostgreSQL'],
    metrics: { uso: 'Diario', enfoque: 'Backend', contexto: 'TFC' },
    caseStudy: '/projects/erp',
    accentColor: '#4F8CFF',
    image: '/erp/dashboard.png',
    imageAspect: '16 / 9',
    imagePosition: 'center center',
    emphasis: 'backend' as ProjectEmphasis,
  },
  {
    id: 'inno',
    title: 'Porto-Muiños',
    tagline: 'Innovatech FP · Cliente real',
    description:
      'Experiencia móvil para Porto-Muiños: acercar el consumo de algas al día a día con diseño de producto, escaneo QR e IA. Proyecto en equipo con cliente real.',
    stack: ['UI/UX', 'Figma', 'Prototipado', 'IA · AlgaeChef'],
    metrics: { cliente: 'Porto-Muiños', formato: 'Equipo', entrega: 'Prototipo' },
    caseStudy: '/projects/innovatech',
    accentColor: '#1FA98F',
    image: '/innovatech/concept.jpeg',
    imageAspect: '16 / 9',
    imagePosition: 'center center',
    emphasis: 'product' as ProjectEmphasis,
  },
] as const;

export const techSection = {
  title: 'Mi stack',
  titleAccent: 'tecnológico',
  subtitle: '',
} as const;

export const techStack = [
  {
    name: 'Java',
    description: 'Backend principal y lógica de negocio.',
    color: 'f89820',
    customSvg: true,
    path: 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639',
    projects: 'ERP · Viewnext',
  },
  {
    name: 'Spring Boot',
    description: 'APIs REST, arquitectura por capas y servicios.',
    iconKey: 'spring' as const,
    projects: 'ERP · Viewnext',
  },
  {
    name: 'React Native',
    description: 'Aplicaciones móviles multiplataforma.',
    iconKey: 'react' as const,
    projects: 'FOMO',
  },
  {
    name: 'PostgreSQL',
    description: 'Persistencia, modelado de datos y consultas.',
    iconKey: 'postgresql' as const,
    projects: 'ERP',
  },
  {
    name: 'MySQL',
    description: 'Bases de datos relacionales en entornos reales.',
    iconKey: 'mysql' as const,
    projects: 'Viewnext',
  },
  {
    name: 'React / Astro',
    description: 'Interfaces web modernas y portfolios/producto.',
    iconKey: 'react' as const,
    projects: 'Portfolio · Innovatech',
  },
  {
    name: 'TypeScript',
    description: 'Tipado estático en frontend y herramientas.',
    iconKey: 'typescript' as const,
    projects: 'FOMO · Portfolio',
  },
  {
    name: 'Docker',
    description: 'Entornos reproducibles y despliegue.',
    iconKey: 'docker' as const,
    projects: 'FOMO · ERP',
  },
  {
    name: 'Azure',
    description: 'Fundamentos cloud y servicios base.',
    color: '0078D4',
    customSvg: true,
    path: 'M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 16.677 3.617 10.6 13.23 2.7z',
    projects: 'Viewnext',
  },
  {
    name: 'Firebase',
    description: 'Auth, base de datos y backend serverless.',
    iconKey: 'firebase' as const,
    projects: 'FOMO',
  },
] as const;

export const designSection = {
  title: 'Diseño y producto',
  subtitle: 'Prototipado y comunicación visual como complemento al desarrollo.',
} as const;

export const designStack = [
  {
    name: 'Figma',
    description: 'Prototipado de interfaces y flujos de producto.',
    iconKey: 'figma' as const,
    projects: 'Innovatech · FOMO',
  },
  {
    name: 'Adobe Photoshop',
    description: 'Edición y preparación de material visual.',
    color: '31A8FF',
    customSvg: true,
    path: 'M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z',
    projects: 'Portfolio · producto',
  },
  {
    name: 'Adobe Illustrator',
    description: 'Recursos vectoriales y piezas gráficas.',
    color: 'FF9A00',
    customSvg: true,
    path: 'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z',
    projects: 'Portfolio · producto',
  },
  {
    name: 'Adobe After Effects',
    description: 'Motion básico para presentaciones y piezas visuales.',
    color: '9999FF',
    customSvg: true,
    path: 'M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z',
    projects: 'Portfolio · producto',
  },
] as const;

export const contact = {
  badge: 'Disponible para oportunidades junior backend, mobile o full-stack',
  title: '¿Hablamos?',
  text: 'Si buscas un desarrollador junior con experiencia construyendo proyectos reales, base backend sólida y muchas ganas de crecer en equipo, estaré encantado de hablar contigo por LinkedIn.',
} as const;
