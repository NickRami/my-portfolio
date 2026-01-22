import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const { t } = useApp();

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
    <section id="experience" className="py-24 px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-t border-border bg-background">
      <div className="max-w-full">
        {/* Unified Header */}
        <div className="mb-16 border-b border-border pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
              <Briefcase size={20} />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">
              {t('experience.title')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Unified Timeline / List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
            >
              {/* Date Column */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 text-muted-label font-mono text-sm uppercase tracking-wider bg-secondary w-fit px-3 py-1 rounded-md border border-border">
                  <Calendar size={14} />
                  {exp.date}
                </div>
              </div>

              {/* Work Details Column */}
              <div className="lg:col-span-9 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                </div>

                <div className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:border-primary/20 transition-all">
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed group/bullet">
                        <ChevronRight size={18} className="shrink-0 mt-1 text-primary/40 group-hover/bullet:text-primary transition-colors" />
                        <span className="group-hover/bullet:text-foreground transition-colors">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
