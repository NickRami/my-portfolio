import { useState, useEffect } from "react";
import { Download, Mail, Github, Globe, ArrowLeft, Linkedin } from "lucide-react";
import { useApp } from "../context/AppContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Resume() {
  const { t } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

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
      title: t('project.1.title'),
      description: t('project.1.desc'),
      tech: t('project.1.tech')
    },
    {
      title: t('project.2.title'),
      description: t('project.2.desc'),
      tech: t('project.2.tech')
    },
    {
      title: t('project.3.title'),
      description: t('project.3.desc'),
      tech: t('project.3.tech')
    }
  ];

  const skills = [
    { category: t('skills.frontend'), items: t('skills.frontend.items') },
    { category: t('skills.backend'), items: t('skills.backend.items') },
    { category: t('skills.data'), items: t('skills.data.items') },
    { category: t('skills.practices'), items: t('skills.practices.items') }
  ];

  const handlePrint = () => {
    window.print();
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

       <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 relative z-10 print:py-0 print:px-0">
          
          <div className="mb-8 no-print">
             <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-yellow-400 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">{t('nav.back')}</span>
             </Link>
          </div>

          <div className="flex justify-between items-start mb-12 print:mb-8 print:items-center">
             <div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 print:text-4xl text-pretty">Ramiro Silva</h1>
                <h2 className="text-xl md:text-2xl text-yellow-500 font-semibold mb-6 print:text-lg print:text-black/70 print:mb-2">{t('hero.role')}</h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed text-lg print:text-sm print:leading-normal print:text-black">
                    {t('resume.summary')}
                </p>
             </div>
             <div className="flex flex-col gap-3 items-end no-print">
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-all shadow-lg hover:shadow-yellow-400/20"
                >
                    <Download size={18} />
                    {t('resume.download')}
                </button>
                <div className="flex gap-4 mt-2 text-muted-foreground">
                    <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors"><Globe size={20} /></a>
                    <a href="mailto:ramisilva8@gmail.com" className="hover:text-yellow-400 transition-colors"><Mail size={20} /></a>
                </div>
             </div>
          </div>

          {/* Print only visible Modern Contact Header */}
          <div className="hidden print:flex w-full items-center justify-between border-y border-black/10 py-4 mb-8">
              <div className="flex items-center gap-2 text-black/80">
                  <Mail size={16} /> 
                  <span className="text-sm font-medium">ramisilva8@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-black/80">
                  <Globe size={16} /> 
                  <span className="text-sm font-medium">my-portfolio-coral-nine-ssq2pgvs8x.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-black/80">
                  <Linkedin size={16} /> 
                  <span className="text-sm font-medium">linkedin.com/in/ramiro-silva-333918231</span>
              </div>
          </div>

          <div className="border-t border-muted my-12 print:my-6 print:border-black/20" />

          {/* Experience */}
          <section className="mb-16 print:mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-3 print:mb-4 print:text-black/60 print:text-xs">
                 <span className="w-4 h-4 rounded-full border border-yellow-400/50 block print:border-black/50"></span>
                 {t('experience.title')}
              </h3>
              <div className="space-y-12 border-l border-muted ml-2 pl-8 print:border-black/20 print:space-y-6 print:pl-6">
                  {experiences.map((exp, i) => (
                      <div key={i} className="relative break-inside-avoid">
                          <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-muted border-2 border-background group-hover:bg-yellow-400 transition-colors print:bg-black print:border-white print:-left-[29px]"></span>
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-1">
                              <h4 className="text-xl font-bold text-foreground print:text-black print:text-lg">{exp.company}</h4>
                              <span className="text-sm font-mono text-muted-foreground print:text-black/70 print:text-xs font-semibold">{exp.date}</span>
                          </div>
                          <p className="text-yellow-500 font-medium text-sm mb-3 uppercase tracking-wide print:text-black/80 print:mb-2 print:text-xs">{exp.role}</p>
                          <ul className="space-y-2 text-muted-foreground/90 leading-relaxed print:text-black print:space-y-1">
                              {exp.bullets.map((b, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-base print:text-xs">
                                      <span className="mt-2.5 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0 print:bg-black/80 print:mt-1.5"></span>
                                      {b}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>

          {/* Projects */}
          <section className="mb-16 print:mb-8 break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-3 print:mb-4 print:text-black/60 print:text-xs">
                 <span className="w-4 h-4 rounded-full border border-yellow-400/50 block print:border-black/50"></span>
                 {t('projects.label')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 print:gap-4">
                  {projects.map((proj, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-muted/20 border border-muted/30 print:border print:border-black/10 print:bg-transparent print:p-4">
                          <div className="flex justify-between items-start mb-3 print:mb-1">
                             <h4 className="text-lg font-bold print:text-base">{proj.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 print:text-black print:text-xs print:mb-2 print:line-clamp-none">
                              {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                              {proj.tech.map((t: string, idx: number) => (
                                  <span key={idx} className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground/80 font-mono print:border print:border-black/20 print:bg-transparent print:text-black/70 print:p-0.5 print:px-1">
                                      {t}
                                  </span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Skills */}
          <section className="break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-3 print:mb-4 print:text-black/60 print:text-xs">
                 <span className="w-4 h-4 rounded-full border border-yellow-400/50 block print:border-black/50"></span>
                 {t('skills.subtitle')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 print:gap-4 print:grid-cols-4">
                  {skills.map((grp, i) => (
                      <div key={i}>
                          <h4 className="text-base font-bold text-foreground mb-3 border-b border-muted/50 pb-2 print:text-sm print:text-black print:mb-1 print:pb-1 print:border-black/20">{grp.category}</h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 print:gap-x-2 print:gap-y-1">
                              {grp.items.map((item: string, idx: number) => (
                                  <span key={idx} className="text-sm text-muted-foreground print:text-black print:text-xs">
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
