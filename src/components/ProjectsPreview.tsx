import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
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
    <section id="projects" className="section-padding section-blueprint">
      <div className="container-responsive">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <FolderGit2 className="text-primary" size={32} />
            <h2 className="text-foreground text-fluid-h2 font-black tracking-tight">
              {t('projects.title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
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
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`}
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {techs && techs.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-foreground text-xl font-bold mb-3">{t(project.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                      {t(project.descKey)}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        className="btn-primary group/btn flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95"
                      >
                        {t('project.actions.visit')}
                        <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
