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
    'nav.expertise': 'Expertise',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.back': 'Back to Home',
    'nav.talk': "Let's Talk",

    // Hero
    'hero.role': 'Full Stack Developer',
    'hero.subtitle': 'Building Scalable & High-Performance Apps',
    'hero.desc': 'Specialized in robust architectures and clean code. I transform complex requirements into maintainable, production-ready systems.',
    'hero.cta.contact': "Let's Talk",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Frontend',
    'hero.tech.backend': 'Backend',
    'hero.tech.database': 'Database',
    'hero.tech.devops': 'DevOps',

    // About
    'about.title': 'About Me',
    'about.p1': 'I specialize in developing scalable web applications using React, TypeScript, and Node.js, focusing on high-performance architectures, clean code, and solid engineering practices.',
    'about.p2': 'I design robust systems oriented towards complex state management, SSR with Next.js, and scalable APIs. I integrate AI tools to optimize development cycles while maintaining a collaborative mindset and always prioritizing maintainable solutions and teamwork.',

    // Projects - Technical & Concise
    'projects.label': 'Selected Work',
    'projects.title': 'Technical Solutions',
    'project.1.title': 'Movie Explorer',
    'project.1.desc': 'Engineered a high-performance React application for large dataset visualization. Implemented component-based architecture and optimized API consumption logic for seamless UX.',
    'project.2.title': 'Pokémon Battle Engine',
    'project.2.desc': 'Developed a decoupled game logic engine in pure JavaScript. Segregated state management from UI rendering to ensure extensive testability and clear separation of concerns.',
    'project.3.title': 'Cursor Calendar',
    'project.3.desc': 'Built a complex state-managed calendar with React DnD. Demonstrated advanced skills in event handling, drag-and-drop mechanics, and date manipulation logic.',

    // Experience - Action & Impact
    'experience.title': 'Professional Experience',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.date': '2023 - 2024',
    'experience.labitec.b1': 'Architected and maintained business-critical web applications, driving digital transformation.',
    'experience.labitec.b2': 'Developed scalable RESTful APIs and responsive React interfaces, ensuring cross-browser compatibility.',
    'experience.labitec.b3': 'Standardized component libraries to boost development speed and code maintainability.',
    'experience.constructora.role': 'Full Stack Developer',
    'experience.constructora.company': 'Constructora',
    'experience.constructora.date': '2025 - Present',
    'experience.constructora.b1': 'Leading the development of internal administrative dashboards to optimize operational workflows.',
    'experience.constructora.b2': 'Designing scalable system architectures focusing on long-term maintainability and performance.',
    'experience.constructora.b3': 'Automating internal processes through custom web tools, reducing manual data entry.',
    'experience.quorum.role': 'Full Stack Developer',
    'experience.quorum.company': 'Quorum',
    'experience.quorum.date': '2023',
    'experience.quorum.b1': 'Delivered full-stack features for legacy system modernization projects.',
    'experience.quorum.b2': 'Refactored codebase to improve performance, readability, and reduce technical debt.',
    'experience.quorum.b3': 'Ensured system stability through rigorous testing and consistent coding standards.',

    // Skills
    'skills.title': 'Expertise',
    'skills.subtitle': 'Technical Stack',
    'skills.frontend': 'Frontend Core',
    'skills.backend': 'Backend & Cloud',
    'skills.data': 'Data & DevOps',
    'skills.practices': 'Engineering Practices',
    'skills.frontend.items': ["React", "TypeScript", "Next.js (SSR/ISR)", "State Management", "Tailwind CSS"],
    'skills.backend.items': ["Node.js", "Express / NestJS", "REST APIs", "Microservices", "Serverless"],
    'skills.data.items': ["PostgreSQL", "MongoDB", "Docker", "Redis", "CI/CD"],
    'skills.practices.items': ["Clean Architecture", "Code Review", "Git Workflow", "Unit Testing", "System Design"],

    // Project Tech
    'project.1.tech': ["React", "API Integration", "Architecture", "CSS Modules"],
    'project.2.tech': ["JavaScript ES6+", "Game Loop", "State Design", "OOP"],
    'project.3.tech': ["React", "DnD Kit", "Date-fns", "Tailwind"],
    'projects.subtitle': 'Explore these live projects. Hover for details and click to visit.',
    'project.actions.visit': 'Visit Website',
    'project.preview.unavailable': 'Preview not available',

    // Contact
    'contact.title': 'Looking for a',
    'contact.subtitle': 'Full Stack Developer?',
    'contact.desc': 'I help build scalable, high-performance web applications using modern JavaScript stacks.',
    'contact.status': 'Currently open to full-time and freelance opportunities',
    'resume.summary': 'Full Stack Developer specialized in React, TypeScript, and Node.js, with experience building scalable, high-performance web applications. Strong focus on clean code, solid architectures, and collaborative team environments.',
    'resume.download': 'Download PDF',
    'contact.cta': 'Let’s talk about your project',
    'contact.socials': 'Connect',
    'footer.rights': 'Ramiro Silva — Full Stack Developer',
    'footer.built': 'Built with React, Vite & Tailwind CSS.'
  },
  es: {
    // Navbar
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.expertise': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    'nav.back': 'Volver al Inicio',
    'nav.talk': 'Hablemos',

    // Hero
    'hero.role': 'Desarrollador Full Stack',
    'hero.subtitle': 'Creando Apps Escalables y Performantes',
    'hero.desc': 'Especializado en arquitecturas robustas y código limpio. Transformo requerimientos complejos en sistemas mantenibles y listos para producción.',
    'hero.cta.contact': "Hablemos",
    'hero.cta.github': 'GitHub',
    'hero.tech.frontend': 'Frontend',
    'hero.tech.backend': 'Backend',
    'hero.tech.database': 'Base de Datos',
    'hero.tech.devops': 'DevOps',

    // About
    'about.title': 'Sobre Mí',
    'about.p1': 'Me especializo en el desarrollo de aplicaciones web escalables utilizando React, TypeScript y Node.js, con foco en arquitecturas de alto rendimiento, código limpio y buenas prácticas de ingeniería.',
    'about.p2': 'Diseño sistemas robustos orientados al manejo de estado complejo, SSR con Next.js y APIs escalables. Integro herramientas de IA para optimizar los ciclos de desarrollo, manteniendo una mentalidad colaborativa y priorizando siempre soluciones mantenibles y trabajo en equipo.',

    // Projects
    'projects.label': 'Trabajos Seleccionados',
    'projects.title': 'Soluciones Técnicas',
    'projects.subtitle': 'Explora estos proyectos en vivo. Pasa el cursor para ver detalles y haz clic para visitar.',
    'project.actions.visit': 'Visitar Sitio',
    'project.preview.unavailable': 'Vista previa no disponible',
    'project.1.title': 'Movie Explorer App',
    'project.1.desc': 'Aplicación frontend para exploración de películas. Resolví el desafío de consumir APIs externas eficientemente mediante una arquitectura de componentes reutilizables.',
    'project.2.title': 'Juego Pokémon',
    'project.2.desc': 'Juego web interactivo con lógica en el frontend. Enfoque en desacoplar el estado del juego de la renderización UI para facilitar mantenibilidad y separación de responsabilidades.',
    'project.3.title': 'Cursor Calendar',
    'project.3.desc': 'Aplicación de calendario moderna con funcionalidad drag-and-drop. Construida para demostrar manejo avanzado de estado e interacciones complejas en React.',

    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.labitec.role': 'Desarrollador Full Stack',
    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.date': '2023 - 2024',
    'experience.labitec.b1': 'Desarrollo y mantenimiento de aplicaciones web orientadas a negocio',
    'experience.labitec.b2': 'Implementación de interfaces con React e integración con APIs REST',
    'experience.labitec.b3': 'Enfoque en estructura de componentes, reutilización y mantenibilidad',
    'experience.constructora.role': 'Desarrollador Full Stack',
    'experience.constructora.company': 'Constructora',
    'experience.constructora.date': '2025',
    'experience.constructora.b1': 'Desarrollo de sistemas internos y dashboards administrativos',
    'experience.constructora.b2': 'Diseño de soluciones enfocadas en escalabilidad y claridad operativa',
    'experience.constructora.b3': 'Mejora de procesos internos mediante herramientas web',
    'experience.quorum.role': 'Desarrollador Full Stack',
    'experience.quorum.company': 'Quorum',
    'experience.quorum.date': '2023',
    'experience.quorum.b1': 'Desarrollo de funcionalidades frontend y backend sobre sistemas existentes',
    'experience.quorum.b2': 'Refactorización y mejora de calidad de código',
    'experience.quorum.b3': 'Enfoque en consistencia, mantenibilidad y estabilidad del sistema',

    // Skills
    'skills.title': 'Experiencia',
    'skills.subtitle': 'Stack Tecnológico',
    'skills.frontend': 'Arquitectura Frontend',
    'skills.backend': 'Sistemas Backend',
    'skills.data': 'Data e Infraestructura',
    'skills.practices': 'Prácticas de Desarrollo',
    'skills.frontend.items': ["React Internals", "TypeScript Avanzado", "Patrones de Estado", "Optimización de Performance", "Next.js / SSR"],
    'skills.backend.items': ["Runtime Node.js", "Diseño de APIs Escalables", "Microservicios", "Serverless Functions", "WebSockets"],
    'skills.data.items': ["PostgreSQL / SQL", "Redis & Caching", "Docker / Containers", "AWS Básico", "CI/CD Pipelines"],
    'skills.practices.items': ["Testing (Jest/Cypress)", "Arquitectura Limpia", "Git Flow", "Revisiones de Código", "Diseño de Sistemas"],

    // Project Tech
    'project.1.tech': ["React", "Rest API", "Arquitectura de Componentes", "CSS Modules"],
    'project.2.tech': ["JavaScript", "Lógica de Juego", "Manipulación del DOM", "Manejo de Estado"],
    'project.3.tech': ["React", "Lógica de Fechas", "Drag & Drop", "Tailwind CSS"],

    // Contact
    'contact.title': '¿Buscas un',
    'contact.subtitle': 'Desarrollador Full Stack?',
    'contact.desc': 'Ayudo a construir aplicaciones web escalables y de alto rendimiento utilizando stacks modernos de JavaScript.',
    'contact.status': 'Actualmente abierto a oportunidades freelance y full-time',
    'resume.summary': 'Desarrollador Full Stack especialista en React, TypeScript y Node.js. Experto en crear arquitecturas de alto rendimiento y sistemas escalables optimizados por herramientas de IA. Enfocado en código limpio y trabajo en equipo.',
    'resume.download': 'Descargar PDF',
    'contact.cta': 'Hablemos de tu proyecto',
    'contact.socials': 'Conectar',
    'footer.rights': 'Ramiro Silva — Full Stack Developer',
    'footer.built': 'Creado con React, Vite & Tailwind CSS.'
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
