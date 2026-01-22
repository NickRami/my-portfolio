import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {projects.map((project, index) => {
            const techs = t(project.techKey) as string[];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
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
                    <div className="mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        className="block w-full bg-primary text-background py-4 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20"
                      >
                        View Live
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
