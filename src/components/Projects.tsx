import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Projects() {
  const { t } = useApp();

  const projects = [
    {
      title: t('project.1.title'),
      description: t('project.1.desc'),
      tech: t('project.1.tech'),
      links: { demo: "#", code: "#" }
    },
    {
      title: t('project.2.title'),
      description: t('project.2.desc'),
      tech: t('project.2.tech'),
      links: { demo: "#", code: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4">
          {t('projects.label')}
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight">{t('projects.title')}</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card border border-muted/50 rounded-xl p-8 hover:border-yellow-400/50 transition-colors flex flex-col h-full cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Live Demo" className="p-3 bg-muted/50 rounded-lg text-yellow-400 group-hover:bg-yellow-400/10 transition-colors z-10 hover:scale-110 duration-200">
                <ArrowUpRight size={24} />
              </a>
              <div className="flex gap-3">
                <a href={project.links.code} target="_blank" rel="noopener noreferrer" title="GitHub Repository" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full z-10">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{project.title}</h4>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="border-t border-muted/50 pt-6 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, i: number) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
