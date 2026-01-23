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
    // Hero
    'hero.role': 'Senior Full Stack Engineer',
    'hero.subtitle': 'Scaling Digital Products',
    'hero.desc': 'Senior Engineer specialized in React, Node.js, and Cloud Architecture. I build fast, scalable, and SEO-optimized web applications designed for business growth and high performance.',
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
    'hero.title.end': ' Web Architecture.',
    'hero.cta.work': 'My Work',
    'hero.cta.resume': 'Download CV',

    'home.journey.title': 'Full Stack Career Roadmap',
    'home.journey.subtitle': 'A structured analysis of my professional milestones, technical expertise, and contribution to enterprise-grade software products.',

    // About
    'about.title': 'Professional Profile',
    'about.p1': 'Senior-focused Full Stack Developer with expert-level proficiency in the JavaScript ecosystem. I specialize in building **observable, maintainable, and highly available systems** that solve real-world business challenges through engineered precision.',
    'about.p2': 'My approach integrates deep technical knowledge with product-led thinking, ensuring that every architectural decision translates into measurable user impact and system reliability.',
    'about.clean_code': 'Clean Code',
    'about.clean_code_desc': 'Writing maintainable, efficient, and robust architecture.',
    'about.fast_delivery': 'Fast Delivery',
    'about.fast_delivery_desc': 'Optimized workflows for scalable production apps.',
    'about.senior': 'Senior',
    'about.developer': 'Developer',
    'about.fullstack': 'Full Stack',
    'about.typescript': 'TypeScript',

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
    'experience.constructora.role': 'Full Stack Engineer',
    'experience.constructora.date': '2025 - Present',
    'experience.constructora.bullets': [
      'Architected internal administrative systems resulting in a 35% increase in operational throughput.',
      'Developed end-to-end features using Next.js and Node.js, prioritizing modularity and system observability.',
      'Containerized legacy modules for consistent deployment across staging and production environments.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Engineered scalable marketing platforms handling high-traffic concurrent user sessions with optimized load times.',
      'Designed and documented RESTful APIs that served as the backbone for multiple cross-platform client applications.',
      'Implemented automated testing suites reducing production deployment regressions by 50%.'
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
    'contact.title': 'Strategic',
    'contact.subtitle': 'Partnership?',
    'contact.desc': 'I am open to discussions regarding senior engineering roles or consultant projects. Let’s build something impactful.',
    'contact.status': 'Available for Opportunities',
    'resume.summary': 'Full Stack Developer specialized in Enterprise React/Node.js ecosystems.',
    'resume.download': 'Download Profile',
    'contact.cta': 'Initiate Contact',
    'about.badge': 'Engineering Profile',
    'footer.rights': 'Ramiro Silva — Full Stack Engineer',
    'footer.built': 'Built with React, TypeScript & Tailwind.',
    'footer.desc': 'Software Engineer passionate about building scalable, high-performance applications with clean code and modern tech stacks.',
    'footer.nav': 'Navigation',
    'footer.location': 'Location',
    'footer.location.text': 'San Rafael Mendoza, Argentina',
    'footer.back_to_top': 'Back to Top'
  },
  es: {
    // Navbar
    'nav.about': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.expertise': 'Experticia',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',
    'nav.back': 'Volver',
    'nav.talk': 'Hablemos',

    // Hero
    'hero.role': 'Senior Full Stack Engineer',
    'hero.subtitle': 'Escalando Productos Digitales',
    'hero.desc': 'Ingeniero Senior especializado en React, Node.js y Arquitectura Cloud. Construyo aplicaciones web rápidas, escalables y optimizadas para SEO y crecimiento de negocio.',
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
    'hero.title.highlight': 'Arquitectura Web',
    'hero.title.end': ' de Alto Rendimiento.',
    'hero.cta.work': 'Ver Portafolio',
    'hero.cta.resume': 'Descargar CV',

    'home.journey.title': 'Hoja de Ruta Profesional',
    'home.journey.subtitle': 'Un análisis estructurado de mis hitos profesionales, dominio técnico y contribución al desarrollo de software empresarial.',

    // About
    'about.title': 'Perfil Profesional',
    'about.p1': 'Desarrollador Full Stack con enfoque Senior y dominio experto del ecosistema JavaScript. Me especializo en construir **sistemas observables, mantenibles y de alta disponibilidad** que resuelven desafíos de negocio mediante ingeniería de precisión.',
    'about.p2': 'Mi enfoque integra un profundo conocimiento técnico con visión de producto, asegurando que cada decisión arquitectónica se traduzca en un impacto medible para el usuario y confiabilidad del sistema.',
    'about.clean_code': 'Código Limpio',
    'about.clean_code_desc': 'Arquitectura robusta, eficiente y mantenible.',
    'about.fast_delivery': 'Entrega Rápida',
    'about.fast_delivery_desc': 'Workflows optimizados para producción.',
    'about.senior': 'Senior',
    'about.developer': 'Desarrollador',
    'about.fullstack': 'Full Stack',
    'about.typescript': 'TypeScript',

    // Projects
    'projects.label': 'Showcase Técnico',
    'projects.title': 'Sistemas en Producción',
    'projects.subtitle': 'Análisis arquitectónico y soluciones de ingeniería en desarrollo web moderno.',
    'project.actions.visit': 'Ver en Vivo',
    'project.preview.unavailable': 'Generando vista previa del sistema...',

    'project.1.title': 'Cine Scope ERP',
    'project.1.desc': 'Aplicación de alto rendimiento en React 19 que utiliza capas de caching avanzadas y actualizaciones optimistas para la gestión de datos en tiempo real. Optimizado para latencia mínima.',
    'project.1.tech': ["React 19", "TanStack Query", "Arquitectura Enterprise"],

    'project.2.title': 'Motor de Lógica Distribuida',
    'project.2.desc': 'Motor basado en estados construido con TypeScript puro. Implementa event loops personalizados y capas de datos segregadas para garantizar 100% de cobertura de tests.',
    'project.2.tech': ["TypeScript", "Patrones de Estado", "Arquitectura"],

    'project.3.title': 'Cursor Schedule Core',
    'project.3.desc': 'Sistema de agendamiento avanzado con interacciones complejas de drag-and-drop. Incluye librerías propias de manipulación de fechas y patrones de accesibilidad.',
    'project.3.tech': ["React DnD", "Arquitectura Flux", "Lógica de Fechas"],

    // Experience
    'experience.title': 'Trayectoria de Ingeniería',
    'experience.subtitle': 'Ciclo de vida profesional y contribución al crecimiento tecnológico.',
    'experience.constructora.company': 'Constructora Tech',
    'experience.constructora.role': 'Ingeniero Full Stack',
    'experience.constructora.date': '2025 - Presente',
    'experience.constructora.bullets': [
      'Arquitectura de sistemas administrativos internos resultando en un incremento del 35% en la eficiencia operativa.',
      'Desarrollo integral de funcionalidades con Next.js y Node.js, priorizando la modularidad y la observabilidad del sistema.',
      'Containerización de módulos legacy para despliegues consistentes en entornos de staging y producción.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Desarrollador Full Stack',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Ingeniería de plataformas escalables manejando sesiones de usuario concurrentes con tiempos de carga optimizados.',
      'Diseño y documentación de APIs RESTful que sirven de base para múltiples aplicaciones cliente multiplataforma.',
      'Implementación de suites de tests automatizados reduciendo los fallos en despliegues a producción en un 50%.'
    ],

    'experience.quorum.company': 'Quorum Systems',
    'experience.quorum.role': 'Desarrollador de Software',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Modernización de módulos críticos a React/Node.js, mejorando los ciclos de mantenimiento y el onboarding de nuevos desarrolladores.',
      'Refactorización de capas de acceso a datos para optimizar consultas SQL y reducir la carga del servidor.',
      'Colaboración en sprints ágiles para entregar funcionalidades listas para producción bajo estándares empresariales.'
    ],

    // Skills
    'skills.title': 'Competencias Core',
    'skills.subtitle': 'Stack Tecnológico',
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
    'skills.years_label': 'Experiencia en Desarrollo Profesional',
    'skills.projects_count': '+20',
    'skills.projects_label': 'Proyectos',
    'skills.commits_count': '+5k',
    'skills.commits_label': 'Commits',

    // Contact
    'contact.title': '¿Alianza',
    'contact.subtitle': 'Estratégica?',
    'contact.desc': 'Estoy abierto a propuestas para roles de ingeniería Senior o consultoría de proyectos. Construyamos algo impactante.',
    'contact.status': 'Disponible para Oportunidades',
    'resume.download': 'Descargar Perfil',
    'contact.cta': 'Iniciar Contacto',
    'about.badge': 'Perfil de Ingeniería',
    'footer.rights': 'Ramiro Silva — Ingeniero Full Stack',
    'footer.built': 'Construido con React, TypeScript & Tailwind.',
    'footer.desc': 'Ingeniero de Software apasionado por construir aplicaciones escalables y de alto rendimiento con código limpio y stacks modernos.',
    'footer.nav': 'Navegación',
    'footer.location': 'Ubicación',
    'footer.location.text': 'San Rafael Mendoza, Argentina',
    'footer.back_to_top': 'Volver Arriba'
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved === 'es' || saved === 'en') ? saved : 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'dark';
  });

  const [devMode, setDevMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
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
