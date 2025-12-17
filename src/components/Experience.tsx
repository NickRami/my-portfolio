import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useApp();

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

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="mb-20 flex items-center gap-3">
         <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400">
            <Briefcase size={24} />
         </div>
         <h3 className="text-3xl md:text-4xl font-medium">{t('experience.title')}</h3>
      </div>
      
      <div className="relative border-l border-muted ml-3 md:ml-4 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-yellow-400 ring-4 ring-background group-hover:ring-yellow-400/20 transition-all duration-300" />
            
            <div className="flex flex-col mb-4">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-xl md:text-2xl font-bold text-foreground mb-1">{exp.company}</span>
                    <span className="text-xs md:text-sm font-medium text-yellow-500/90 bg-yellow-400/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.date}
                    </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{exp.role}</span>
            </div>
            
            <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground/90 text-base md:text-lg flex items-start leading-relaxed">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400/60 shrink-0" />
                        {bullet}
                    </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
