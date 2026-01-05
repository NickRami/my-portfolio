import { useState, useEffect } from "react";
import { Download, Mail, Github, Globe, ArrowLeft, Linkedin, ExternalLink, ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Resume() {
  const { t, theme, setTheme } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const getPreviewUrl = (url: string) => {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=5000&viewport.width=1440&viewport.height=900`;
  };

  // Helper to safely get bullets
  const getBullets = (key: string) => {
    const items = t(key);
    return Array.isArray(items) ? items : [];
  };

  const experiences = [
    {
      company: t('experience.constructora.company'),
      role: t('experience.constructora.role'),
      date: t('experience.constructora.date'),
      bullets: getBullets('experience.constructora.bullets')
    },
    {
      company: t('experience.labitec.company'),
      role: t('experience.labitec.role'),
      date: t('experience.labitec.date'),
      bullets: getBullets('experience.labitec.bullets')
    },
    {
      company: t('experience.quorum.company'),
      role: t('experience.quorum.role'),
      date: t('experience.quorum.date'),
      bullets: getBullets('experience.quorum.bullets')
    }
  ];

  const projects = [
    {
      id: 1,
      title: t('project.1.title'),
      description: t('project.1.desc'),
      tech: t('project.1.tech'),
      url: 'https://cine-scope-cyan.vercel.app/'
    },
    {
      id: 2,
      title: t('project.2.title'),
      description: t('project.2.desc'),
      tech: t('project.2.tech'),
      url: 'https://poke-juego.vercel.app/'
    },
    {
      id: 3,
      title: t('project.3.title'),
      description: t('project.3.desc'),
      tech: t('project.3.tech'),
      url: 'https://cursor-calendary.vercel.app/'
    }
  ];

  const skills = [
    { category: t('skills.frontend'), items: t('skills.frontend.items') },
    { category: t('skills.backend'), items: t('skills.backend.items') },
    { category: t('skills.data'), items: t('skills.data.items') },
    { category: t('skills.practices'), items: t('skills.practices.items') }
  ];

  const handlePrint = () => {
    const originalTheme = theme;

    // Switch to light theme for printing
    if (theme === 'dark') {
      setTheme('light');
    }

    // Wait for theme to apply, then print
    setTimeout(() => {
      window.print();

      // Restore original theme after print dialog
      setTimeout(() => {
        if (originalTheme === 'dark') {
          setTheme('dark');
        }
      }, 100);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden relative print:overflow-visible">
      {/* Mouse Follower Gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 print:hidden"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--color-primary-rgb), 0.05), transparent 40%)` // Adjusted for potential CSS variable usage or keep hardcoded if variable not exported as RGB
        }}
      >
        {/* Alternative using Tailwind opacity if CSS var not raw RGB */}
        <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(600px_circle_at_var(--x)_var(--y),black,transparent)]" style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` } as any} />
      </div>

      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10 print:max-w-full print:px-0 print:py-0">

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 no-print">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">{t('nav.back')}</span>
            </Link>
          </div>

          <div className="flex justify-between items-start mb-12 print:mb-6">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-pretty leading-tight">Ramiro Silva</h1>
              <h2 className="text-2xl md:text-3xl text-primary/90 font-medium mb-6 print:mb-4 tracking-tight">{t('hero.role')}</h2>
              <p className="text-muted-foreground/80 max-w-2xl leading-relaxed text-lg md:text-xl font-light print:text-base">
                {t('resume.summary')}
              </p>
            </div>
            <div className="flex items-center gap-4 no-print ml-4 pt-2">
              <button
                onClick={handlePrint}
                className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-primary/20"
                title={t('resume.download')}
              >
                <Download size={22} />
              </button>
              <div className="h-8 w-px bg-muted mx-1" />
              <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all social-icon-btn"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/ramiro-silva-333918231" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all social-icon-btn"><Linkedin size={22} /></a>
              <a href="mailto:ramisilva8@gmail.com" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all social-icon-btn"><Mail size={22} /></a>
            </div>
          </div>

          {/* Print only visible Modern Contact Header - Refined & Aligned */}
          <div className="hidden print:flex w-full items-center justify-center gap-8 border-y border-gray-200 py-3 mb-8 text-[11px] font-medium tracking-tight">
            <div className="flex items-center gap-1.5 grayscale">
              <Mail size={12} className="text-gray-600" />
              <span className="text-gray-800">ramisilva8@gmail.com</span>
            </div>
            <div className="w-px h-3 bg-gray-300" />
            <div className="flex items-center gap-1.5 grayscale">
              <Globe size={12} className="text-gray-600" />
              <span className="text-gray-800">my-portfolio-coral-nine-ssq2pgvs8x.vercel.app</span>
            </div>
            <div className="w-px h-3 bg-gray-300" />
            <div className="flex items-center gap-1.5 grayscale">
              <Linkedin size={12} className="text-gray-600" />
              <span className="text-gray-800">linkedin.com/in/ramiro-silva-333918231</span>
            </div>
          </div>

          <div className="border-t border-border my-12 no-print" />

          {/* Skills / Tech Stack */}
          <section className="mb-16 print:mb-8 break-inside-avoid">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8 flex items-center gap-3 print:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block print:bg-gray-600"></span>
              {t('skills.subtitle')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 print:gap-4 print:grid-cols-4">
              {skills.map((grp, i) => (
                <div key={i} className="break-inside-avoid">
                  <h4 className="text-lg font-bold text-foreground mb-3 border-b border-border/50 pb-2 print:mb-1.5 print:pb-1 print:text-sm print:border-gray-300">{grp.category}</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 print:flex-col print:gap-0.5">
                    {grp.items.map((item: string, idx: number) => (
                      <span key={idx} className="text-sm md:text-base text-muted-foreground print:text-xs print:text-gray-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16 print:mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10 flex items-center gap-3 print:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block print:bg-gray-600"></span>
              {t('experience.title')}
            </h3>
            <div className="space-y-12 border-l border-border ml-1 pl-8 print:space-y-6 print:pl-6 print:border-gray-200">
              {experiences.map((exp, i) => (
                <div key={i} className="relative break-inside-avoid group">
                  {/* Dot alignment */}
                  <div className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300 print:bg-gray-600 print:ring-0 print:-left-[29px]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                    <h4 className="text-xl md:text-2xl font-bold text-foreground print:text-lg">{exp.company}</h4>
                    <span className="text-sm font-mono text-muted-foreground font-semibold print:text-gray-500 bg-muted/50 px-2 py-0.5 rounded print:bg-transparent print:p-0">{exp.date}</span>
                  </div>
                  <p className="text-primary/90 font-medium text-sm mb-4 uppercase tracking-wide print:text-gray-700 print:mb-2">{exp.role}</p>
                  <ul className="space-y-2 text-muted-foreground/90 leading-relaxed print:space-y-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base md:text-lg print:text-sm">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 print:bg-gray-400 print:mt-1.5"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-16 print:mb-10 break-inside-avoid page-2-content">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-10 flex items-center gap-3 print:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block print:bg-gray-600"></span>
              {t('projects.label')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 print:gap-4 print:grid-cols-2">
              {projects.map((proj, i) => (
                <a
                  key={i}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 print:bg-white print:border-gray-200 print:shadow-none print:hover:border-gray-200"
                >
                  {/* Image Preview - Screen Only */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted no-print">
                    {imageErrors[proj.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted flex flex-col items-center justify-center p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
                        <span className="text-3xl mb-2 opacity-50">✨</span>
                        <h4 className="font-semibold text-muted-foreground text-xs">{proj.title}</h4>
                      </div>
                    ) : (
                      <img
                        src={getPreviewUrl(proj.url)}
                        alt={proj.title}
                        onError={() => setImageErrors(prev => ({ ...prev, [proj.id]: true }))}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                    )}
                    {/* Overlay - Unified with Home */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                      <div className="flex items-center gap-2 text-white text-xs font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        <span>{t('project.actions.visit')}</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col print:p-4">
                    <div className="flex justify-between items-start mb-3 print:mb-1.5">
                      <h4 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors print:text-base print:group-hover:text-black">{proj.title}</h4>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors no-print" />
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2 text-base group-hover:text-foreground/80 transition-colors print:mb-3 print:line-clamp-none print:text-gray-700">
                      {proj.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {proj.tech.map((techItem: string, idx: number) => (
                        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary print:bg-gray-100 print:text-gray-700 print:border-gray-200 print:px-2 print:py-0.5">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <footer className="mt-20 pt-12 border-t border-muted text-center text-muted-foreground text-sm flex flex-col items-center gap-4 no-print">
            <p>{t('contact.title')} {t('contact.subtitle')}</p>
            <a href="mailto:ramisilva8@gmail.com" className="text-foreground hover:text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 transition-colors">
              {t('contact.cta')}
            </a>
          </footer>
        </div>

      </div>
    </div>
  )
}
