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

// ... (translations object remains unchanged)
// We will just update the logic below, assuming translations are already there. 
// However, since we are replacing a large chunk, I'll keep the translations object in the 'TargetContent' reference if possible, 
// or I will just target the Provider and Hook part if I can. 
// Actually, let's just replace the Provider implementation to be safe and clean.

const translations = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.expertise': 'Experience',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.back': 'Back',
    'nav.talk': "Let's Talk",

    // Hero
    'hero.role': 'Product Architect & Engineer',
    'hero.subtitle': 'Architecting Scalable Digital Systems',
    'hero.desc': 'I bridge the gap between complex backend logic and pixel-perfect frontend experiences. Specialized in building maintainable, high-performance web applications that drive business value.',
    'hero.cta.contact': "Contact Me",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Frontend Architecture',
    'hero.tech.backend': 'System Design',
    'hero.tech.database': 'Data Strategy',
    'hero.tech.devops': 'DevOps & CI/CD',
    // Hero Features - Refined
    'hero.features.clean': 'Clean Architecture',
    'hero.features.perf': 'High Performance',
    'hero.features.scale': 'Scalability',

    // Hero Layers - Refined
    'hero.layer.client': 'Client Layer',
    'hero.layer.api': 'API Layer',
    'hero.layer.core': 'Core Engine',
    'hero.stats.uptime': 'Uptime',
    'hero.stats.latency': 'Latency',
    'hero.title.start': 'Building ',
    'hero.title.highlight': 'Digital Products',
    'hero.title.end': ' that Scale.',
    'hero.cta.work': 'View Work',
    'hero.cta.resume': 'View Resume',

    // About
    'about.title': 'About Me',
    'about.p1': 'I am a Full Stack Developer obsessed with code quality and system architecture. I do not just write code; I design solutions that stand the test of time, focusing on scalability, readability, and performance.',
    'about.p2': 'My background encompasses the entire development lifecycle, from database design to reactive frontend interfaces. I excel in collaborative environments, leveraging AI tools and modern methodologies to accelerate delivery without compromising engineering standards.',

    // Projects (Short & Impactful)
    'projects.label': 'Selected Work',
    'projects.title': 'Engineering Showcase',
    'projects.subtitle': 'A selection of projects demonstrating technical depth, architectural decisions, and product thinking.',
    'project.actions.visit': 'Live Demo',
    'project.preview.unavailable': 'Preview generating...',

    'project.1.title': 'Cine Scope',
    'project.1.desc': 'High-performance React application handling complex data visualization. Implemented component-based architecture for optimal rendering perfromance and API integration.',
    'project.1.tech': ["React 19", "TanStack Query", "Tailwind Architecture"],

    'project.2.title': 'Pokemon Battle Engine',
    'project.2.desc': 'Decoupled game logic engine in pure JavaScript. Segregated state management from UI rendering to ensure extensive testability and separation of concerns.',
    'project.2.tech': ["Vanilla JS", "State Patterns", "Game Loop Logic"],

    'project.3.title': 'Cursor Calendar',
    'project.3.desc': 'Complex state-managed calendar utilizing React DnD. Features advanced event handling, date manipulation logic, and accessible interactive patterns.',
    'project.3.tech': ["React DnD", "Complete State Mgmt", "Date-fns"],

    // Experience (Arrays for "Career Changelog")
    'experience.title': 'Career History',
    'experience.constructora.company': 'Constructora',
    'experience.constructora.role': 'Lead Full Stack Dev',
    'experience.constructora.date': '2025 - Present',
    'experience.constructora.bullets': [
      'Leading the development of internal administrative dashboards to optimize operational workflows.',
      'Designing scalable system architectures focusing on long-term maintainability.',
      'Automating internal processes through custom web tools, reducing manual data entry by 40%.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.date': '2023 - 2024',
    'experience.labitec.bullets': [
      'Architected and maintained business-critical web applications for digital transformation.',
      'Developed scalable RESTful APIs and responsive React interfaces ensuring 99.9% uptime.',
      'Standardized component libraries to boost development speed and ensure consistency.'
    ],

    'experience.quorum.company': 'Quorum',
    'experience.quorum.role': 'Software Developer',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      ' delivered full-stack features for legacy system modernization projects.',
      'Refactored critical codebases to improve performance and readability.',
      'Ensured system stability through rigorous testing practices.'
    ],

    // Skills - Senior/Product Profile
    'skills.title': 'Tech Stack',
    'skills.subtitle': 'Technical Mastery',
    'skills.frontend': 'Modern Frontend & UI',
    'skills.backend': 'Backend & Architecture',
    'skills.data': 'Cloud & Infrastructure',
    'skills.practices': 'Engineering Quality',

    'skills.frontend.items': ["React / Next.js", "Advanced TypeScript", "Tailwind + Motion", "State Management"],
    'skills.backend.items': ["Node.js / NestJS", "API Design (REST/GraphQL)", "SQL/NoSQL Databases", "Auth & Security"],
    'skills.data.items': ["Docker & Containers", "CI/CD Pipelines", "AWS Services", "Performance Optimization"],
    'skills.practices.items': ["Clean Architecture", "Code Review & Git Flow", "Testing (Unit/E2E)", "Agile Methodologies"],

    // Contact
    'contact.title': 'Ready to',
    'contact.subtitle': 'Collaborate?',
    'contact.desc': 'I am currently available for new opportunities. Let’s discuss how I can like help you build your next product.',
    'contact.status': 'Open to Work',
    'resume.summary': 'Full Stack Developer specialized in React/Node.js ecosystem.',
    'resume.download': 'Download Resume',
    'contact.cta': 'Send Message',
    'footer.rights': 'Ramiro Silva — Product Architect',
    'footer.built': 'Engineered with React & Tailwind.'
  },
  es: {
    // Navbar
    'nav.about': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.expertise': 'Trayectoria',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',
    'nav.back': 'Volver',
    'nav.talk': 'Hablemos',

    // Hero
    'hero.role': 'Arquitecto de Producto & Desarrollador',
    'hero.subtitle': 'Diseñando Sistemas Digitales Escalables',
    'hero.desc': 'Unifico lógica backend compleja con experiencias frontend impecables. Especializado en construir aplicaciones web mantenibles y de alto rendimiento que generan valor real.',
    'hero.cta.contact': "Contactar",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Arquitectura Frontend',
    'hero.tech.backend': 'Diseño de Sistemas',
    'hero.tech.database': 'Estrategia de Datos',
    'hero.tech.devops': 'DevOps & CI/CD',
    'hero.title.start': 'Creando ',
    'hero.title.highlight': 'Productos Digitales',
    'hero.title.end': ' Escalables.',
    'hero.cta.work': 'Ver Proyectos',
    'hero.cta.resume': 'Ver CV',
    'hero.layer.client': 'Capa Cliente',
    'hero.layer.api': 'Capa API',
    'hero.layer.core': 'Núcleo del Sistema', // More formal than just "Núcleo"
    'hero.stats.uptime': 'Uptime',
    'hero.stats.latency': 'Latencia',
    'hero.features.clean': 'Arquitectura Limpia', // Matches "Clean Architecture"
    'hero.features.perf': 'Alto Rendimiento',
    'hero.features.scale': 'Escalabilidad', // Noun matching "Scalability"

    // About
    'about.title': 'Sobre Mí',
    'about.p1': 'Soy un Desarrollador Full Stack obsesionado con la calidad del código y la arquitectura de software. No solo escribo código; diseño soluciones que perduran, enfocándome en escalabilidad, legibilidad y rendimiento.',
    'about.p2': 'Mi experiencia abarca todo el ciclo de vida del desarrollo, desde el diseño de bases de datos hasta interfaces reactivas. Me destaco en entornos colaborativos, aprovechando herramientas modernas para acelerar la entrega sin comprometer los estándares de ingeniería.',

    // Projects
    'projects.label': 'Portafolio Selecto',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Selección de proyectos que demuestran profundidad técnica, decisiones de arquitectura y visión de producto.',
    'project.actions.visit': 'Ver Demo',
    'project.preview.unavailable': 'Generando vista previa...',

    'project.1.title': 'Cine Scope',
    'project.1.desc': 'Aplicación de alto rendimiento para visualización de datos complejos. Arquitectura basada en componentes optimizada para renderizado eficiente e integración fluida de APIs.',
    'project.1.tech': ["React 19", "Manejo de Cache", "CSS Architecture"],

    'project.2.title': 'Motor de Batalla Pokémon',
    'project.2.desc': 'Motor de lógica de juego desacoplado en JavaScript puro. Segregación estricta entre gestión de estado y UI para garantizar testabilidad y código limpio.',
    'project.2.tech': ["Vanilla JS", "Patrones de Diseño", "Game Loop"],

    'project.3.title': 'Cursor Calendar',
    'project.3.desc': 'Calendario complejo con gestión de estado avanzada y React DnD. Implementa lógica de fechas robusta y patrones de interacción accesibles.',
    'project.3.tech': ["React DnD", "State Management", "Date Logic"],

    // Experience (Arrays)
    'experience.title': 'Historial Profesional',
    'experience.constructora.company': 'Constructora',
    'experience.constructora.role': 'Líder Técnico Full Stack',
    'experience.constructora.date': '2025 - Presente',
    'experience.constructora.bullets': [
      'Lidero el desarrollo de dashboards administrativos internos para optimizar flujos operativos.',
      'Diseño arquitecturas de sistemas escalables enfocadas en mantenibilidad a largo plazo.',
      'Automatizo procesos internos mediante herramientas web personalizadas, reduciendo carga manual.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Desarrollador Full Stack',
    'experience.labitec.date': '2023 - 2024',
    'experience.labitec.bullets': [
      'Arquitectura y mantenimiento de aplicaciones web críticas para la transformación digital del negocio.',
      'Desarrollo de APIs RESTful escalables e interfaces React responsivas con 99.9% de uptime.',
      'Estandarización de librerías de componentes para acelerar el desarrollo y asegurar consistencia.'
    ],

    'experience.quorum.company': 'Quorum',
    'experience.quorum.role': 'Desarrollador de Software',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Desarrollo funcionalidades full-stack para proyectos de modernización de sistemas legacy.',
      'Refactorización de código crítico para mejorar rendimiento, legibilidad y reducir deuda técnica.',
      'Aseguramiento la estabilidad del sistema mediante prácticas rigurosas de testing.'
    ],

    // Skills - Refinado para perfil Senior/Product
    'skills.title': 'Stack Tecnológico',
    'skills.subtitle': 'Dominio Técnico',
    'skills.frontend': 'Frontend & UI Moderno',
    'skills.backend': 'Backend & Arquitectura',
    'skills.data': 'Infraestructura & Cloud',
    'skills.practices': 'Calidad de Ingeniería',

    // Items - Mezcla balanceada de Inglés técnico (estándar) y español funcional
    'skills.frontend.items': ["React / Next.js", "TypeScript Avanzado", "Tailwind + Motion", "Gestión de Estado"],
    'skills.backend.items': ["Node.js / NestJS", "Diseño de APIs (REST/GraphQL)", "Base de Datos SQL/NoSQL", "Auth & Seguridad"],
    'skills.data.items': ["Docker & Contenedores", "CI/CD Pipelines", "Servicios AWS", "Optimización de Rendimiento"],
    'skills.practices.items': ["Clean Architecture", "Code Review & Git Flow", "Testing (Unit/E2E)", "Metodologías Ágiles"],

    // Contact
    'contact.title': '¿Listo para',
    'contact.subtitle': 'Colaborar?',
    'contact.desc': 'Actualmente disponible para nuevas oportunidades. Hablemos sobre cómo puedo aportar valor a tu próximo producto.',
    'contact.status': 'Abierto a Propuestas',
    'resume.summary': 'Desarrollador Full Stack especializado en el ecosistema React/Node.js.',
    'resume.download': 'Descargar CV',
    'contact.cta': 'Enviar Mensaje',
    'footer.rights': 'Ramiro Silva — Product Architect',
    'footer.built': 'Ingeniería con React & Tailwind.'
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
