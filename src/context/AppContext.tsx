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
    'experience.constructora.role': 'Full Stack Developer',
    'experience.constructora.date': '2025 - Present',
    'experience.constructora.bullets': [
      'Building and maintaining administrative dashboards that streamline internal operational workflows.',
      'Designing and implementing end-to-end features, from database modeling to client-side state management.',
      'Automating manual processes through custom web tools, increasing overall team efficiency.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Developed robust full-stack web applications, integrating responsive UIs with scalable RESTful APIs.',
      'Implemented reusable component libraries and optimized database queries for better performance.',
      'Collaborated with cross-functional teams to translate business requirements into technical solutions.'
    ],

    'experience.quorum.company': 'Quorum',
    'experience.quorum.role': 'Junior Software Developer',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Collaborated on the modernization of legacy systems, implementing specific frontend and backend features.',
      'Assisted in refactoring code modules to improve readability and reduce technical debt under guidance.',
      'Participated in testing processes to identify and resolve bugs, contributing to system stability.'
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

    // About / Profile - ATS Friendly & Impactful
    'about.title': 'Sobre Mí',
    'about.p1': 'Desarrollador Full Stack especializado en la construcción de aplicaciones web escalables y de alto rendimiento. Combino experiencia técnica en el ecosistema JavaScript (React, Node.js) con un fuerte enfoque en arquitectura de software y experiencia de usuario.',
    'about.p2': 'Mi objetivo es transformar requerimientos de negocio complejos en soluciones técnicas robustas, priorizando la mantenibilidad del código, la estabilidad del sistema y la entrega continua de valor.',
    'resume.summary': 'Desarrollador Full Stack | React, Node.js, TypeScript | Especialista en Arquitectura Web & UX',

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
    'experience.constructora.role': 'Desarrollador Full Stack',
    'experience.constructora.date': '2025 - Presente',
    'experience.constructora.bullets': [
      'Desarrollo integral de dashboards administrativos para la visualización de datos en tiempo real, optimizando la toma de decisiones.',
      'Implementación de arquitecturas frontend modulares con TypeScript y React, mejorando la mantenibilidad y escalabilidad del código.',
      'Automatización de flujos de trabajo operativos mediante herramientas web a medida, logrando una reducción del 40% en carga manual.'
    ],

    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.role': 'Desarrollador Full Stack',
    'experience.labitec.date': '2024',
    'experience.labitec.bullets': [
      'Ingeniería de software end-to-end para aplicaciones web comerciales, asegurando alta disponibilidad y rendimiento óptimo.',
      'Diseño y desarrollo de APIs RESTful escalables, integradas eficientemente con interfaces de usuario modernas y responsivas.',
      'Creación de librerías de componentes UI reutilizables para estandarizar el diseño y acelerar los ciclos de desarrollo.'
    ],

    'experience.quorum.company': 'Quorum',
    'experience.quorum.role': 'Desarrollador Junior',
    'experience.quorum.date': '2023',
    'experience.quorum.bullets': [
      'Colaboración en la modernización de sistemas legacy, migrando módulos críticos a tecnologías web actuales (React/Node).',
      'Participación activa en code reviews y debugging, asegurando la calidad del código y la estabilidad del sistema.',
      'Implementación de funcionalidades full-stack bajo metodologías ágiles, cumpliendo consistentemente con los plazos de entrega.'
    ],

    // Skills - Refinado para perfil Senior/Product
    // Skills - Optimized for Scanning
    'skills.title': 'Stack Tecnológico',
    'skills.subtitle': 'Dominio Técnico',
    'skills.frontend': 'Frontend Core',
    'skills.backend': 'Backend & Data',
    'skills.data': 'DevOps & Tools',
    'skills.practices': 'Metodologías',

    'skills.frontend.items': ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    'skills.backend.items': ["Node.js", "Express/NestJS", "SQL (PostgreSQL)", "REST APIs"],
    'skills.data.items': ["Git/GitHub", "Docker", "CI/CD Basics", "AWS Services"],
    'skills.practices.items': ["Clean Code", "Scrum/Agile", "Testing", "System Design"],

    // Contact
    'contact.title': '¿Listo para',
    'contact.subtitle': 'Colaborar?',
    'contact.desc': 'Actualmente disponible para nuevas oportunidades. Hablemos sobre cómo puedo aportar valor a tu próximo producto.',
    'contact.status': 'Abierto a Propuestas',
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
