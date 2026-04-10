import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'es' | 'en';
type Theme = 'dark' | 'light';


interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (key: string) => any;
  devMode: boolean;
  toggleDevMode: () => void;
}

const translations = {
  en: {
    // Navbar
    'nav.about': 'Profile',
    'nav.projects': 'Projects',
    'nav.expertise': 'Expertise',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.back': 'Back',
    'nav.talk': "Let's Talk",

    // Hero
    'hero.role': 'Full Stack Developer',
    'hero.subtitle': 'Scaling Digital Products',
    'hero.desc': 'Full Stack Developer specialized in JavaScript, TypeScript, and the React/Next.js ecosystem. I build fast, scalable, and SEO-optimized web applications designed for business growth and high performance.',
    'hero.cta.contact': "Let's Talk",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Frontend Architecture',
    'hero.tech.backend': 'System Design',
    'hero.tech.database': 'Data Strategy',
    'hero.tech.devops': 'DevOps & CI/CD',
    'hero.features.clean': 'Clean Architecture',
    'hero.features.clean.sub': 'Maintainable Code',
    'hero.features.perf': 'Core Performance',
    'hero.features.perf.sub': 'Web Vitals Optimized',
    'hero.features.scale': 'Scalability',
    'hero.features.scale.sub': 'Elastic Growth',
    'hero.features.security': 'Best Practices',
    'hero.features.security.sub': 'Secure by Design',
    'hero.layer.client': 'Client Layer',
    'hero.layer.api': 'API Gateway',
    'hero.layer.core': 'Core Engine',
    'hero.stats.uptime': 'Uptime',
    'hero.stats.latency': 'Latency',
    'hero.title.start': 'Building ',
    'hero.title.highlight': 'High-Performance',
    'hero.title.end': ' Software.',
    'hero.cta.work': 'View Projects',
    'hero.cta.resume': 'Download CV',

    'home.journey.title': 'Full Stack Career Roadmap',
    'home.journey.subtitle': 'A structured analysis of my professional milestones, technical expertise, and contribution to enterprise-grade software products.',

    // About
    'about.title': 'Professional Profile',
    'about.p1': 'Full Stack Developer with expert-level proficiency in the JavaScript/TypeScript ecosystem. I specialize in building **observable, maintainable, and highly available systems** that solve real-world business challenges through engineered precision.',
    'about.p2': 'My approach integrates deep technical knowledge with product-led thinking, ensuring that every architectural decision translates into measurable user impact and system reliability.',
    'about.clean_code': 'Clean Code',
    'about.clean_code_desc': 'Writing maintainable, efficient, and robust architecture.',
    'about.fast_delivery': 'Fast Delivery',
    'about.fast_delivery_desc': 'Optimized workflows for scalable production apps.',
    'about.senior': 'Senior',
    'about.developer': 'Developer',
    'about.fullstack': 'Full Stack',
    'about.typescript': 'TypeScript',
    'about.badge': 'System Profile',

    // Projects
    'projects.label': 'Technical Showcase',
    'projects.title': 'Production Systems',
    'projects.subtitle': 'Architectural deep-dives and engineered solutions in modern web development.',
    'project.actions.visit': 'View Live',
    'project.preview.unavailable': 'System preview generating...',

    'project.1.title': 'Cine Scope ERP',
    'project.1.desc': 'High-performance React 19 application utilizing advanced caching layers and optimistic UI updates for real-time data management. Optimized for sub-second interaction latency.',
    'project.1.tech': ["React 19", "TanStack Query", "Enterprise Architects"],

    'project.2.title': 'Distributed Logic Engine',
    'project.2.desc': 'Decoupled state-driven engine built with pure TypeScript. Implements custom event loops and segregated data layers to ensure 100% test coverage and linear scalability.',
    'project.2.tech': ["TypeScript", "State Patterns", "Architecture"],

    'project.3.title': 'Cursor Schedule Core',
    'project.3.desc': 'Advanced scheduling system with complex drag-and-drop interactions. Features custom date-manipulation libraries and accessible interactive patterns for power users.',
    'project.3.tech': ["React DnD", "Flux Architecture", "Date Logic"],

    // Experience
    'experience.title': 'Engineering Roadmap',
    'experience.subtitle': 'Professional lifecycle and contribution to technological growth.',
    'experience.constructora.company': 'Constructora Tech',
    'experience.constructora.role': 'Full Stack Developer',
    'experience.constructora.date': '2025 - Present',
    'experience.constructora.bullets': [
      'Designed and implemented a RESTful API architecture with Node.js and Express, establishing scalable endpoints for the management of construction projects, budgets, and task tracking.',
      'Engineered a relational database (PostgreSQL) optimizing queries with Prisma ORM, reducing data load times by 40% through strategic indexing and normalized schema design.',
      'Automated internal processes such as report generation, inventory tracking, and notifications via cron jobs and serverless functions, eliminating 15+ hours of weekly manual work.',
      'Developed a responsive Next.js (App Router) admin panel with Zustand and Shadcn UI for internal teams, improving operational throughput by 35%.'
    ],

    'experience.labitec.company': 'Labict Marketing',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Architected a headless CMS integration with Strapi to manage dynamic marketing content, decoupling the frontend layer and enabling non-technical teams to publish campaigns autonomously.',
      'Built and documented RESTful APIs serving as the backbone for multiple client-facing applications, implementing authentication flows with Clerk and input validation with Zod.',
      'Optimized Core Web Vitals (LCP, FID, CLS) achieving a 95+ Lighthouse performance score through image lazy loading, code splitting, and static generation strategies in Next.js.',
      'Designed a scalable PostgreSQL database schema for lead tracking and analytics, enabling real-time marketing performance dashboards with Supabase real-time subscriptions.'
    ],

    'experience.quorum.company': 'Quorum Systems',
    'experience.quorum.role': 'Software Developer',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Modernized critical legacy modules to React/Node.js stack, improving maintenance cycles and developer onboarding.',
      'Refactored data access layers to optimize SQL query performance and reduce database server load.',
      'Collaborated in Agile sprints to deliver production-ready features within tight enterprise constraints.'
    ],

    // Skills
    'skills.title': 'Core Competencies',
    'skills.subtitle': 'Technical Stack',
    'skills.frontend': 'Frontend',
    'skills.frontend_desc': 'Modern UI architecture & component systems',
    'skills.backend': 'Backend',
    'skills.backend_desc': 'Server architectures & cloud services',
    'skills.databases': 'Databases',
    'skills.databases_desc': 'Data modeling & persistence layer',
    'skills.other': 'Other',
    'skills.other_desc': 'Developer tools & quality assurance',
    'skills.languages': 'Languages',
    'skills.languages_desc': 'Core development foundations',
    'skills.infrastructure': 'Infrastructure & BaaS',
    'skills.infrastructure_desc': 'Cloud services & Content management',
    'skills.engineering': 'Engineering Stack',
    'skills.engineering_desc': 'Production-ready framework logic',
    'skills.data_strategy': 'Data Strategy',
    'skills.data_strategy_desc': 'Database modeling & management',
    'skills.quality': 'Quality Control',
    'skills.quality_desc': 'Testing & CI/CD standards',
    'skills.years': '4+ Years',
    'skills.years_label': 'Professional Development Experience',
    'skills.projects_count': '20+',
    'skills.projects_label': 'Projects',
    'skills.commits_count': '5k+',
    'skills.commits_label': 'Commits',

    // Contact
    'contact.title': 'Let\'s Work',
    'contact.subtitle': 'Together',
    'contact.desc': 'Based in San Rafael, Mendoza. Available for remote or on-site positions. Let\'s build something impactful.',
    'contact.status': 'Available for Opportunities',
    'contact.location': 'San Rafael, Mendoza, Argentina',
    'contact.availability': 'Open to remote & on-site work',
    'contact.whatsapp_label': 'WhatsApp',
    'contact.whatsapp_text': 'Quick direct message',
    'contact.email_label': 'Email',
    'contact.email_text': 'For formal inquiries',
    'contact.linkedin_label': 'LinkedIn',
    'contact.linkedin_text': 'Professional profile',
    'contact.github_label': 'GitHub',
    'contact.github_text': 'Open source & code',
    'resume.summary': 'Full Stack Developer specialized in React/Node.js ecosystems.',
    'resume.download': 'Download Profile',
    'contact.cta': 'Initiate Contact',

    // Footer
    'footer.rights': 'Gustavo Ramiro Silva — Full Stack Developer',
    'footer.built': 'Built with React, TypeScript & Tailwind.',
    'footer.desc': 'Full Stack Developer passionate about building scalable, high-performance applications with clean code and modern tech stacks.',
    'footer.nav': 'Navigation',
    'footer.location': 'Location',
    'footer.location.text': 'San Rafael, Mendoza, Argentina',
    'footer.back_to_top': 'Back to Top'
  },
  es: {
    // Navbar
    'nav.about': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.expertise': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',
    'nav.back': 'Volver',
    'nav.talk': 'Hablemos',

    // Hero
    'hero.role': 'Full Stack Developer',
    'hero.subtitle': 'Escalando Productos Digitales',
    'hero.desc': 'Desarrollador Full Stack especializado en JavaScript, TypeScript y el ecosistema React/Next.js. Construyo aplicaciones web rápidas, escalables y optimizadas para SEO y crecimiento de negocio.',
    'hero.cta.contact': "Hablemos",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Arquitectura Frontend',
    'hero.tech.backend': 'Diseño de Sistemas',
    'hero.tech.database': 'Estrategia de Datos',
    'hero.tech.devops': 'DevOps & CI/CD',
    'hero.features.clean': 'Clean Architecture',
    'hero.features.clean.sub': 'Código Mantenible',
    'hero.features.perf': 'Performance Core',
    'hero.features.perf.sub': 'Web Vitals Optimizados',
    'hero.features.scale': 'Escalabilidad',
    'hero.features.scale.sub': 'Crecimiento Elástico',
    'hero.features.security': 'Mejores Prácticas',
    'hero.features.security.sub': 'Seguro por Diseño',
    'hero.layer.client': 'Cliente',
    'hero.layer.api': 'API Gateway',
    'hero.layer.core': 'Core',
    'hero.stats.uptime': 'Uptime',
    'hero.stats.latency': 'Latencia',
    'hero.title.start': 'Construyendo ',
    'hero.title.highlight': 'Software de',
    'hero.title.end': ' Alto Rendimiento.',
    'hero.cta.work': 'Ver Proyectos',
    'hero.cta.resume': 'Descargar CV',

    'home.journey.title': 'Hoja de Ruta Profesional',
    'home.journey.subtitle': 'Un análisis estructurado de mis hitos profesionales, dominio técnico y contribución al desarrollo de software empresarial.',

    // About
    'about.title': 'Perfil Profesional',
    'about.p1': 'Desarrollador Full Stack con dominio experto del ecosistema JavaScript/TypeScript. Me especializo en construir **sistemas observables, mantenibles y de alta disponibilidad** que resuelven desafíos de negocio reales.',
    'about.p2': 'Mi enfoque integra un profundo conocimiento técnico con visión de producto, asegurando que cada decisión arquitectónica se traduzca en impacto medible.',
    'about.clean_code': 'Código Limpio',
    'about.clean_code_desc': 'Arquitectura robusta, eficiente y mantenible.',
    'about.fast_delivery': 'Entrega Rápida',
    'about.fast_delivery_desc': 'Workflows optimizados para producción.',
    'about.senior': 'Senior',
    'about.developer': 'Desarrollador',
    'about.fullstack': 'Full Stack',
    'about.typescript': 'TypeScript',
    'about.badge': 'Perfil de Sistemas',

    // Projects
    'projects.label': 'Portafolio Técnico',
    'projects.title': 'Sistemas en Producción',
    'projects.subtitle': 'Análisis arquitectónico y soluciones de ingeniería en desarrollo web moderno.',
    'project.actions.visit': 'Ver en Vivo',
    'project.preview.unavailable': 'Generando vista previa del sistema...',

    'project.1.title': 'Cine Scope ERP',
    'project.1.desc': 'Aplicación de alto rendimiento en React 19 que utiliza capas de caching avanzadas y actualizaciones optimistas para gestión de datos en tiempo real.',
    'project.1.tech': ["React 19", "TanStack Query", "Enterprise Arch"],

    'project.2.title': 'Motor de Lógica Distribuida',
    'project.2.desc': 'Motor basado en estados construido con TypeScript puro. Implementa event loops personalizados y capas de datos segregadas.',
    'project.2.tech': ["TypeScript", "Patrones de Estado", "Architecture"],

    'project.3.title': 'Cursor Schedule Core',
    'project.3.desc': 'Sistema de agendamiento avanzado con interacciones complejas de drag-and-drop y lógica de fechas personalizada.',
    'project.3.tech': ["React DnD", "Arquitectura Flux", "Date Logic"],

    // Experience
    'experience.title': 'Trayectoria de Ingeniería',
    'experience.subtitle': 'Ciclo de vida profesional y contribución al crecimiento tecnológico.',
    'experience.constructora.company': 'Constructora Tech',
    'experience.constructora.role': 'Full Stack Developer',
    'experience.constructora.date': '2025 - Presente',
    'experience.constructora.bullets': [
      'Diseñé e implementé una arquitectura de API RESTful con Node.js y Express, estableciendo endpoints escalables para la gestión de proyectos de construcción, presupuestos y seguimiento de tareas.',
      'Ingeniería de base de datos relacional (PostgreSQL) optimizando consultas con Prisma ORM, reduciendo tiempos de carga en un 40% mediante indexación estratégica y diseño de esquema normalizado.',
      'Automatización de procesos internos como generación de reportes, control de inventario y notificaciones mediante cron jobs y funciones serverless, eliminando 15+ horas semanales de trabajo manual.',
      'Desarrollo de panel administrativo responsivo en Next.js (App Router) con Zustand y Shadcn UI para equipos internos, mejorando la eficiencia operativa en un 35%.'
    ],

    'experience.labitec.company': 'Labict Marketing',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Arquitectura de integración con CMS headless (Strapi) para gestionar contenido de marketing dinámico, desacoplando el frontend y permitiendo que equipos no técnicos publiquen campañas de forma autónoma.',
      'Construcción y documentación de APIs RESTful como backbone para múltiples aplicaciones cliente, implementando flujos de autenticación con Clerk y validación de datos con Zod.',
      'Optimización de Core Web Vitals (LCP, FID, CLS) alcanzando un score de 95+ en Lighthouse mediante lazy loading, code splitting y estrategias de generación estática en Next.js.',
      'Diseño de esquema escalable en PostgreSQL para tracking de leads y analytics, habilitando dashboards de rendimiento en tiempo real con suscripciones real-time de Supabase.'
    ],

    'experience.quorum.company': 'Quorum Systems',
    'experience.quorum.role': 'Desarrollador de Software',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Modernización de módulos críticos a React/Node.js, mejorando los ciclos de mantenimiento y el onboarding.',
      'Refactorización de capas de acceso a datos para optimizar consultas SQL y reducir la carga del servidor.',
      'Colaboración en sprints ágiles para entregar funcionalidades listas para producción bajo estándares empresariales.'
    ],

    // Skills
    'skills.title': 'Competencias Core',
    'skills.subtitle': 'Stack Tecnológico',
    'skills.frontend': 'Frontend',
    'skills.frontend_desc': 'Arquitectura UI moderna y sistemas de componentes',
    'skills.backend': 'Backend',
    'skills.backend_desc': 'Arquitecturas de servidor y servicios cloud',
    'skills.databases': 'Bases de Datos',
    'skills.databases_desc': 'Modelado de datos y capa de persistencia',
    'skills.other': 'Otros',
    'skills.other_desc': 'Herramientas de desarrollo y calidad',
    'skills.languages': 'Lenguajes',
    'skills.languages_desc': 'Fundamentos del desarrollo core',
    'skills.infrastructure': 'Infraestructura & BaaS',
    'skills.infrastructure_desc': 'Servicios cloud & CMS',
    'skills.engineering': 'Stack de Ingeniería',
    'skills.engineering_desc': 'Lógica de frameworks escalables',
    'skills.data_strategy': 'Estrategia de Datos',
    'skills.data_strategy_desc': 'Modelado y gestión de bases de datos',
    'skills.quality': 'Control de Calidad',
    'skills.quality_desc': 'Estándares de testing y CI/CD',
    'skills.years': '+4 Años',
    'skills.years_label': 'Experiencia en Desarrollo',
    'skills.projects_count': '+20',
    'skills.projects_label': 'Proyectos',
    'skills.commits_count': '+5k',
    'skills.commits_label': 'Commits',

    // Contact
    'contact.title': 'Trabajemos',
    'contact.subtitle': 'Juntos',
    'contact.desc': 'Basado en San Rafael, Mendoza. Disponible para posiciones remotas o presenciales. Construyamos algo impactante.',
    'contact.status': 'Disponible para Oportunidades',
    'contact.location': 'San Rafael, Mendoza, Argentina',
    'contact.availability': 'Abierto a trabajo remoto y presencial',
    'contact.whatsapp_label': 'WhatsApp',
    'contact.whatsapp_text': 'Mensaje directo rápido',
    'contact.email_label': 'Email',
    'contact.email_text': 'Para consultas formales',
    'contact.linkedin_label': 'LinkedIn',
    'contact.linkedin_text': 'Perfil profesional',
    'contact.github_label': 'GitHub',
    'contact.github_text': 'Código y open source',
    'resume.download': 'Descargar Perfil',
    'contact.cta': 'Iniciar Contacto',

    // Footer
    'footer.rights': 'Gustavo Ramiro Silva — Full Stack Developer',
    'footer.built': 'Construido con React, TypeScript & Tailwind.',
    'footer.desc': 'Desarrollador Full Stack apasionado por construir aplicaciones escalables y de alto rendimiento.',
    'footer.nav': 'Navegación',
    'footer.location': 'Ubicación',
    'footer.location.text': 'San Rafael, Mendoza, Argentina',
    'footer.back_to_top': 'Volver Arriba'
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang-prefs');
    // Default setting: English ('en')
    return (saved === 'en' || saved === 'es') ? saved : 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme-prefs');
    return (saved === 'dark' || saved === 'light') ? saved : 'dark';
  });

  const [devMode, setDevMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('portfolio-lang-prefs', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme-prefs', theme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Apply dev-mode class to body for global styling overrides if needed
  useEffect(() => {
    if (devMode) {
      document.body.classList.add('dev-mode');
    } else {
      document.body.classList.remove('dev-mode');
    }
  }, [devMode]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleDevMode = () => {
    setDevMode(prev => !prev);
  }

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t, devMode, toggleDevMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
