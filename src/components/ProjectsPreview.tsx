import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { useApp } from "../context/AppContext";

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  techKey: string;
  url: string;
  repoUrl?: string; // Prepared for future Use
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
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="max-w-full">

        {/* Header simple y directo */}
        <div className="mb-16 border-b border-border/30 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
              <FolderGit2 size={20} />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Grid Limpio - Escaneable por Recruiters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const techs = t(project.techKey) as string[];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group shadow-lg"
              >
                {/* 1. Preview Visual (Clear & Large) */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video w-full bg-muted/20 relative overflow-hidden block"
                >
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280`}
                    alt="Preview"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay info on hover only if needed, keeps it clean */}
                </a>

                {/* 2. Content Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {t(project.descKey)}
                  </p>

                  {/* 3. Footer: Tech Stack & Actions */}
                  <div className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {techs && techs.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-1 rounded-md bg-muted/50 border border-border/50 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
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
