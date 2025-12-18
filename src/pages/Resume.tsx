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

  const experiences = [
    {
      company: t('experience.constructora.company'),
      role: t('experience.constructora.role'),
      date: t('experience.constructora.date'),
      bullets: [
        t('experience.constructora.b1'),
        t('experience.constructora.b2'),
        t('experience.constructora.b3')
      ]
    },
    {
      company: t('experience.labitec.company'),
      role: t('experience.labitec.role'),
      date: t('experience.labitec.date'),
      bullets: [
        t('experience.labitec.b1'),
        t('experience.labitec.b2'),
        t('experience.labitec.b3')
      ]
    },
    {
      company: t('experience.quorum.company'),
      role: t('experience.quorum.role'),
      date: t('experience.quorum.date'),
      bullets: [
        t('experience.quorum.b1'),
        t('experience.quorum.b2'),
        t('experience.quorum.b3')
      ]
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
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-yellow-400/20 selection:text-yellow-400 overflow-x-hidden relative print:overflow-visible">
        {/* Mouse Follower Gradient */}
       <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 print:hidden"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.05), transparent 40%)`
          }}
       />

       <Navbar />

       <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 relative z-10 print:max-w-full print:px-0 print:py-0">
          
          <div className="mb-8 no-print">
             <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-yellow-400 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">{t('nav.back')}</span>
             </Link>
          </div>

          <div className="flex justify-between items-start mb-10 print:mb-6">
             <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-pretty">Ramiro Silva</h1>
                <h2 className="text-xl md:text-2xl text-yellow-500 font-semibold mb-6 print:mb-4">{t('hero.role')}</h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed text-lg print:text-base">
                    {t('resume.summary')}
                </p>
             </div>
             <div className="flex items-center gap-4 no-print ml-4">
                <button 
                  onClick={handlePrint}
                  className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-sm hover:shadow-yellow-400/20"
                  title={t('resume.download')}
                >
                    <Download size={22} />
                </button>
                <div className="h-8 w-px bg-muted mx-1" />
                <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-yellow-400 hover:text-black transition-all social-icon-btn"><Github size={22} /></a>
                <a href="https://www.linkedin.com/in/ramiro-silva-333918231" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-yellow-400 hover:text-black transition-all social-icon-btn"><Linkedin size={22} /></a>
                <a href="mailto:ramisilva8@gmail.com" className="p-3 bg-muted/50 text-foreground rounded-full hover:bg-yellow-400 hover:text-black transition-all social-icon-btn"><Mail size={22} /></a>
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

          <div className="border-t border-muted my-12 no-print" />

          {/* Experience */}
          <section className="mb-16 print:mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10 flex items-center gap-3 print:mb-6">
                 <span className="w-4 h-4 rounded-full border-2 border-yellow-400 block print:border-amber-600"></span>
                 {t('experience.title')}
              </h3>
              <div className="space-y-12 border-l-2 border-muted ml-2 pl-8 print:space-y-6 print:pl-6 print:border-gray-200">
                  {experiences.map((exp, i) => (
                      <div key={i} className="relative break-inside-avoid">
                          {/* Dot alignment: top-1.5 matches heading height for top alignment */}
                          <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-muted border-2 border-background group-hover:bg-yellow-400 transition-colors print:bg-amber-600 print:border-white print:-left-[29px]"></span>
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                              <h4 className="text-xl font-bold text-foreground print:text-lg">{exp.company}</h4>
                              <span className="text-sm font-mono text-muted-foreground font-semibold print:text-gray-500">{exp.date}</span>
                          </div>
                          <p className="text-yellow-500 font-medium text-sm mb-3 uppercase tracking-wide print:text-amber-700 print:mb-2">{exp.role}</p>
                          <ul className="space-y-2 text-muted-foreground/90 leading-relaxed print:space-y-1">
                              {exp.bullets.map((b, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-base print:text-sm">
                                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0 print:bg-gray-400 print:mt-1.5"></span>
                                      {b}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>

          {/* Projects */}
          <section className="mb-16 print:mb-10 break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10 flex items-center gap-3 print:mb-6">
              <span className="w-4 h-4 rounded-full border-2 border-yellow-400 block print:border-amber-600"></span>
              {t('projects.label')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 print:gap-4 print:grid-cols-2">
              {projects.map((proj, i) => (
                <a 
                  key={i} 
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden bg-muted/20 border border-muted/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/5 print:bg-white print:border-gray-200 print:shadow-none print:hover:border-gray-200"
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
                  <div className="p-6 flex-1 flex flex-col print:p-0">
                    <div className="flex justify-between items-start mb-3 print:mb-1.5">
                      <h4 className="text-lg font-bold group-hover:text-yellow-400 transition-colors print:text-base print:group-hover:text-black">{proj.title}</h4>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-yellow-400 transition-colors no-print" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors print:mb-3 print:line-clamp-none print:text-gray-700">
                      {proj.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {proj.tech.map((techItem: string, idx: number) => (
                        <span key={idx} className="text-[10px] px-2 py-1 rounded-md bg-muted/50 border border-muted-foreground/10 text-muted-foreground font-mono transition-colors group-hover:bg-yellow-400/10 group-hover:text-yellow-500 print:bg-gray-100 print:text-gray-700 print:border-gray-200 print:px-2 print:py-0.5">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10 flex items-center gap-3 print:mb-6">
                 <span className="w-4 h-4 rounded-full border-2 border-yellow-400 block print:border-amber-600"></span>
                 {t('skills.subtitle')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 print:gap-6 print:grid-cols-4">
                  {skills.map((grp, i) => (
                      <div key={i}>
                          <h4 className="text-base font-bold text-foreground mb-4 border-b border-muted/50 pb-2 print:mb-2 print:pb-1.5 print:text-sm print:border-gray-200">{grp.category}</h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 print:flex-col print:gap-1">
                              {grp.items.map((item: string, idx: number) => (
                                  <span key={idx} className="text-sm text-muted-foreground print:text-xs print:text-gray-700">
                                      {item}
                                  </span>
                              ))}
                          </div>
                      </div>
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
  )
}
