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
}

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
    'about.p1': 'I specialize in building scalable applications using React, TypeScript, and Node.js, focusing on high-performance architectures and clean code. I leverage modern AI tools to accelerate development cycles and ensure technical excellence across the full stack.',
    'about.p2': 'I design robust systems with a focus on complex state management, SSR with Next.js, and scalable API design. I combine this technical depth with a collaborative mindset, always prioritizing teamwork and maintainable solutions.',

    // Projects
    'projects.label': 'Selected Work',
    'projects.title': 'Technical Solutions',
    'project.1.title': 'Movie Explorer App',
    'project.1.desc': 'Frontend application for exploring movies. Solved the challenge of efficiently consuming external APIs and managing large datasets by implementing a reusable component architecture, ensuring a clean UI and fluid navigation.',
    'project.2.title': 'Pokémon Battle Game',
    'project.2.desc': 'Interactive web game logic entirely on the frontend. Focused on decoupling game state from UI rendering to ensure easy testability and clean separation of concerns.',
    'project.3.title': 'Cursor Calendar',
    'project.3.desc': 'Modern calendar application with drag-and-drop functionality. Built to demonstrate advanced state management and complex interactions in a React environment.',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.labitec.role': 'Full Stack Developer',
    'experience.labitec.company': 'Labitec Marketing',
    'experience.labitec.date': '2023 - 2024',
    'experience.labitec.b1': 'Development and maintenance of business-oriented web applications',
    'experience.labitec.b2': 'Implementation of interfaces using React and REST API integration',
    'experience.labitec.b3': 'Focus on component structure, reusability, and maintainability',
    'experience.constructora.role': 'Full Stack Developer',
    'experience.constructora.company': 'Constructora',
    'experience.constructora.date': '2025',
    'experience.constructora.b1': 'Development of internal systems and administrative dashboards',
    'experience.constructora.b2': 'Design of solutions focused on scalability and operational clarity',
    'experience.constructora.b3': 'Improvement of internal processes through web tools',
    'experience.quorum.role': 'Full Stack Developer',
    'experience.quorum.company': 'Quorum',
    'experience.quorum.date': '2023',
    'experience.quorum.b1': 'Development of frontend and backend features on existing systems',
    'experience.quorum.b2': 'Refactoring and code quality improvement',
    'experience.quorum.b3': 'Focus on consistency, maintainability, and system stability',
    
    // Skills
    'skills.title': 'Expertise',
    'skills.subtitle': 'Technology Stack',
    'skills.frontend': 'Frontend Architecture',
    'skills.backend': 'Backend Systems',
    'skills.data': 'Data & Infrastructure',
    'skills.practices': 'Development Practices',
    'skills.frontend.items': ["React Internals", "Advanced TypeScript", "State Management Patterns", "Performance Optimization", "Next.js / SSR"],
    'skills.backend.items': ["Node.js Runtime", "Scalable API Design", "Microservices", "Serverless Functions", "WebSockets"],
    'skills.data.items': ["PostgreSQL / SQL", "Redis & Caching", "Docker / Containers", "AWS Basics", "CI/CD Pipelines"],
    'skills.practices.items': ["Testing (Jest/Cypress)", "Clean Architecture", "Git Flow", "Code Reviews", "System Design"],

    // Project Tech
    'project.1.tech': ["React", "Rest API", "Component Architecture", "CSS"],
    'project.2.tech': ["JavaScript", "Game Logic", "DOM Manipulation", "State Management"],
    'project.3.tech': ["React", "Date Logic", "Drag & Drop", "Tailwind CSS"],
    'projects.subtitle': 'Explore these live projects. Hover for details and click to visit.',
    'project.actions.visit': 'Visit Website',
    'project.preview.unavailable': 'Preview not available',

    // Contact
    'contact.title': 'Looking for a',
    'contact.subtitle': 'Full Stack Developer?',
    'contact.desc': 'I help build scalable, high-performance web applications using modern JavaScript stacks.',
    'contact.status': 'Currently open to full-time and freelance opportunities',
    'resume.summary': 'Full Stack Developer specializing in React, TypeScript, and scalable Node.js architectures. Expert in building high-performance systems enhanced by AI-driven development. Committed to technical excellence, clean code, and collaborative teamwork.',
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
    'about.p1': 'Me especializo en construir aplicaciones escalables utilizando React, TypeScript y Node.js, enfocándome en arquitecturas de alto rendimiento y código limpio. Potencio el desarrollo mediante herramientas de IA para acelerar ciclos y asegurar la excelencia técnica en todo el stack.',
    'about.p2': 'Diseño sistemas robustos con foco en el manejo de estado complejo, SSR con Next.js y diseño de APIs escalables. Combino esta profundidad técnica con una mentalidad colaborativa, priorizando siempre el trabajo en equipo y las soluciones mantenibles.',

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
    'project.1.tech': ["React", "Rest API", "Arquitectura de Componentes", "CSS"],
    'project.2.tech': ["JavaScript", "Lógica de Juego", "Manipulación del DOM", "Manejo de Estado"],
    'project.3.tech': ["React", "Lógica de Fechas", "Drag & Drop", "Tailwind CSS"],

    // Contact
    'contact.title': '¿Buscas un',
    'contact.subtitle': 'Desarrollador Full Stack?',
    'contact.desc': 'Ayudo a construir aplicaciones web escalables y de alto rendimiento utilizando stacks modernos de JavaScript.',
    'contact.status': 'Actualmente abierto a oportunidades freelance y full-time',
    'resume.summary': 'Desarrollador Full Stack especialista en React, TypeScript y arquitecturas escalables en Node.js. Experto en crear sistemas de alto rendimiento potenciados por desarrollo asistido por IA. Comprometido con la excelencia técnica, el código limpio y el trabajo colaborativo en equipo.',
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

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t }}>
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
