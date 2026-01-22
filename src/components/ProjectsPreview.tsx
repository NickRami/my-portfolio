import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from "../context/AppContext";

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  techKey: string;
  url: string;
  repoUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'project.1.title',
    descKey: 'project.1.desc',
    techKey: 'project.1.tech',
    url: 'https://cine-scope-cyan.vercel.app/',
  },
  {
    id: 2,
    titleKey: 'project.2.title',
    descKey: 'project.2.desc',
    techKey: 'project.2.tech',
    url: 'https://poke-juego.vercel.app/',
  },
  {
    id: 3,
    titleKey: 'project.3.title',
    descKey: 'project.3.desc',
    techKey: 'project.3.tech',
    url: 'https://cursor-calendary.vercel.app/',
  },
];

export default function ProjectsPreview() {
  const { t } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <FolderGit2 className="text-primary" size={32} />
            <h2 className="text-foreground text-3xl md:text-5xl font-black tracking-tight">
              {t('projects.title')}
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:bg-primary/5 transition-all active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:bg-primary/5 transition-all active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {projects.map((project, index) => {
            const techs = t(project.techKey) as string[];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[320px] md:min-w-[450px] snap-start group"
              >
                <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`}
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {techs && techs.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-foreground text-2xl font-bold mb-3">{t(project.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed flex-1">
                      {t(project.descKey)}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        className="flex-1 bg-primary text-background py-3 rounded-xl font-bold text-sm text-center transition-transform hover:scale-[1.02]"
                      >
                        View Live
                      </a>
                      <a
                        href={project.repoUrl || '#'}
                        target="_blank"
                        className="flex-1 bg-white/5 text-foreground border border-white/10 py-3 rounded-xl font-bold text-sm text-center hover:bg-white/10 transition-colors"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
