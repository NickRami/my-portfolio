import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useApp } from "../context/AppContext";

interface Project {
  id: number;
  title: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cine Scope',
    url: 'https://cine-scope-cyan.vercel.app/'
  },
  {
    id: 2,
    title: 'Pokemon Game',
    url: 'https://poke-juego.vercel.app/'
  },
  {
    id: 3,
    title: 'Cursor Calendar',
    url: 'https://cursor-calendary.vercel.app/'
  },
];

export const ProjectsPreview: React.FC = () => {
  const { t } = useApp();

  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});

  const getPreviewUrl = (url: string) => {
    // Increased wait time to 5s and viewport width to force a fresh render attempt
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=5000&viewport.width=1440&viewport.height=900`;
  };

  return (
    <section id="projects" className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4">
            {t('projects.label')}
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-4">
            {t('projects.title')}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-muted/50 bg-card"
            >
              {/* Image Preview */}
              <div className="w-full h-full overflow-hidden bg-muted flex items-center justify-center">
                {imageErrors[project.id] ? (
                  <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl mb-4 opacity-50">✨</span>
                    <h4 className="font-semibold text-muted-foreground">{project.title}</h4>
                    <span className="text-xs text-muted-foreground mt-2 opacity-70">{t('project.preview.unavailable')}</span>
                  </div>
                ) : (
                  <img
                    src={getPreviewUrl(project.url)}
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                    onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]">
                <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <span>{t('project.actions.visit')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Corner Icon */}
              <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
