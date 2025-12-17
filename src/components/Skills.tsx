import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

export default function Skills() {
  const { t } = useApp();

  const skills = [
    {
      category: t('skills.frontend'),
      items: t('skills.frontend.items')
    },
    {
      category: t('skills.backend'),
      items: t('skills.backend.items')
    },
    {
      category: t('skills.data'),
      items: t('skills.data.items')
    },
    {
      category: t('skills.practices'),
      items: t('skills.practices.items')
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="mb-20">
         <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4">
            {t('skills.title')}
         </h2>
         <h3 className="text-4xl md:text-5xl font-medium tracking-tight">
            {t('skills.subtitle')}
         </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {skills.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-muted/10 border border-muted/20 hover:border-yellow-400/20 hover:bg-muted/20 transition-all duration-300 group"
            >
                <h3 className="text-2xl font-bold mb-8 text-foreground group-hover:text-yellow-400 transition-colors">
                    {group.category}
                </h3>
                <ul className="grid gap-3">
                    {group.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-base md:text-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
      </div>
    </section>
  )
}
