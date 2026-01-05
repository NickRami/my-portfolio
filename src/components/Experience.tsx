import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { GitCommit, GitPullRequest, Calendar } from "lucide-react";

export default function Experience() {
  const { t } = useApp();

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

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-t border-white/5">

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="p-2 rounded bg-yellow-500/10 text-yellow-500">
            <GitCommit size={20} />
          </span>
          <h2 className="text-2xl md:text-3xl font-medium">
            {t('experience.title')}
          </h2>
        </div>

        {/* Timeline "Git Log" Style */}
        <div className="relative space-y-12">
          {/* Vertical Line Gradient */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-yellow-500/50 via-white/10 to-transparent md:left-[11px]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 md:pl-12 group"
            >
              {/* Node/Dot */}
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center group-hover:border-yellow-500/50 group-hover:scale-110 transition-all duration-300 z-10">
                <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-yellow-500 transition-colors" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-muted-foreground font-normal">@ {exp.company}</span>
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                  <Calendar size={12} className="opacity-70" />
                  {exp.date}
                </div>
              </div>

              <div className="space-y-3">
                {exp.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed hover:text-foreground transition-colors">
                    <GitPullRequest size={16} className="shrink-0 mt-0.5 opacity-30 group-hover:opacity-100 group-hover:text-yellow-500 transition-opacity" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
