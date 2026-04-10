import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Cpu, Layout, Server, Database, Wrench } from "lucide-react";

interface SkillCategory {
  icon: typeof Layout;
  titleKey: string;
  descKey: string;
  technologies: string[];
  gradient: string;
  iconColor: string;
}

export default function Skills() {
  const { t } = useApp();

  const categories: SkillCategory[] = [
    {
      icon: Layout,
      titleKey: 'skills.frontend',
      descKey: 'skills.frontend_desc',
      technologies: ['React.js', 'Next.js (App Router)', 'Tailwind CSS', 'Shadcn UI', 'Zustand'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: Server,
      titleKey: 'skills.backend',
      descKey: 'skills.backend_desc',
      technologies: ['Node.js', 'Prisma ORM', 'Strapi', 'Supabase', 'Firebase'],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Database,
      titleKey: 'skills.databases',
      descKey: 'skills.databases_desc',
      technologies: ['PostgreSQL', 'SQL'],
      gradient: 'from-violet-500/10 to-purple-500/10',
      iconColor: 'text-violet-400',
    },
    {
      icon: Wrench,
      titleKey: 'skills.other',
      descKey: 'skills.other_desc',
      technologies: ['TypeScript', 'Git', 'Clerk Auth', 'Zod'],
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3 mb-2">
        <Cpu className="text-primary" size={24} />
        <h2 className="text-foreground text-2xl font-bold tracking-tight">
          {t('skills.title')}
        </h2>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <motion.div
            key={category.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 group relative overflow-hidden"
          >
            {/* Subtle gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={20} />
                </div>
                <div>
                  <h3 className="text-foreground text-base font-bold">{t(category.titleKey)}</h3>
                  <p className="text-muted-foreground text-xs">{t(category.descKey)}</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/5 text-foreground/80 border border-white/8 px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative bg-gradient-to-r from-primary to-blue-600 text-white p-6 rounded-2xl flex flex-wrap items-center justify-between overflow-hidden"
      >
        <div className="z-10">
          <h3 className="text-3xl font-black leading-none">{t('skills.years')}</h3>
          <p className="font-bold text-sm opacity-80 uppercase tracking-tighter">{t('skills.years_label')}</p>
        </div>
        <div className="flex gap-6 z-10 mt-4 sm:mt-0">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black">{t('skills.projects_count')}</span>
            <span className="text-[10px] font-bold uppercase opacity-80">{t('skills.projects_label')}</span>
          </div>
          <div className="w-px bg-white/20 h-10"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black">{t('skills.commits_count')}</span>
            <span className="text-[10px] font-bold uppercase opacity-80">{t('skills.commits_label')}</span>
          </div>
        </div>
        {/* Decorative blur */}
        <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -top-10 size-32 bg-white/5 rounded-full blur-2xl"></div>
      </motion.div>
    </div>
  );
}
