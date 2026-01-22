import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Briefcase } from "lucide-react";

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
    <div id="experience" className="flex flex-col gap-6">
      <div className="flex items-center gap-2 mb-2">
        <Briefcase className="text-primary" size={24} />
        <h2 className="text-foreground text-2xl font-bold tracking-tight">
          {t('experience.title')}
        </h2>
      </div>

      <div className="relative space-y-2">
        {/* Timeline Line */}
        <div className="absolute left-5 top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary via-border to-transparent"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-14 pb-10 group"
          >
            {/* Dot Indicator */}
            <div className={`absolute left-[13px] top-1.5 size-4 rounded-full border-4 border-background z-10 transition-all duration-300 ${index === 0 ? 'bg-primary ring-4 ring-primary/20 scale-125' : 'bg-border group-hover:bg-primary'}`}></div>

            {/* Experience Card */}
            <div className="bg-card border border-border p-5 rounded-xl hover:border-primary/50 transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-foreground text-lg font-bold">{exp.role}</h3>
                  <p className="text-primary font-semibold text-sm">{exp.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${index === 0 ? 'bg-primary/10 text-primary' : 'bg-border/30 text-muted-foreground'}`}>
                  {exp.date}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
