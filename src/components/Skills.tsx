import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Cpu, Layout, Terminal, Database, ShieldCheck, Cloud } from "lucide-react";

export default function Skills() {
  const { t } = useApp();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 mb-2">
        <Cpu className="text-primary" size={24} />
        <h2 className="text-foreground text-2xl font-bold tracking-tight">
          {t('skills.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card border border-border p-6 rounded-2xl flex flex-col justify-start hover:bg-card/80 transition-colors relative overflow-hidden group h-full"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Terminal size={64} className="text-foreground" />
          </div>
          <div className="mb-auto">
            <Terminal className="text-primary mb-3" size={24} />
            <h3 className="text-foreground text-lg font-bold mb-1">{t('skills.languages')}</h3>
            <p className="text-muted-foreground text-sm mb-4">{t('skills.languages_desc')}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['TypeScript', 'JavaScript', 'Node.js', 'SQL'].map((lang) => (
              <span key={lang} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem & BaaS Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-background border border-border p-6 rounded-2xl flex flex-col hover:border-primary/40 transition-all relative h-full"
        >
          <Cloud className="text-primary mb-3" size={24} />
          <h3 className="text-foreground text-lg font-bold mb-1">{t('skills.infrastructure')}</h3>
          <p className="text-muted-foreground text-sm mb-6">{t('skills.infrastructure_desc')}</p>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="bg-background/50 p-3 rounded-lg border border-border flex-1">
              <p className="text-primary text-[10px] font-bold mb-2 uppercase tracking-widest">BaaS Ecosystem</p>
              <p className="text-muted-foreground text-sm">Supabase, Firebase, Appwrite</p>
            </div>
            <div className="bg-background/50 p-3 rounded-lg border border-border flex-1">
              <p className="text-primary text-[10px] font-bold mb-2 uppercase tracking-widest">Headless CMS</p>
              <p className="text-muted-foreground text-sm">Strapi, Contentful, Sanity</p>
            </div>
            <div className="bg-background/50 p-3 rounded-lg border border-border flex-1">
              <p className="text-primary text-[10px] font-bold mb-2 uppercase tracking-widest">Cloud Providers</p>
              <p className="text-muted-foreground text-sm">AWS, Google Cloud, Docker, Vercel</p>
            </div>
          </div>
        </motion.div>

        {/* Engineering Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-card border border-border p-6 rounded-2xl flex flex-col hover:bg-card/80 transition-colors group h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground text-lg font-bold">{t('skills.engineering')}</h3>
            <Layout className="text-primary group-hover:rotate-12 transition-transform" size={24} />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-auto">
            {['Next.js / React', 'Express.js', 'React Router', 'Zustand', 'Zod', 'Tailwind / SASS'].map((fw) => (
              <div key={fw} className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="size-2 bg-primary rounded-full"></span> {fw}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Databases Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1 bg-card border border-border p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-card/80 transition-colors h-full"
        >
          <Database className="text-primary mb-2" size={32} />
          <h4 className="text-foreground text-sm font-bold">{t('skills.data_strategy')}</h4>
          <p className="text-muted-foreground text-[10px] mt-1 font-medium">{t('skills.data_strategy_desc')}</p>
        </motion.div>

        {/* Quality Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-1 bg-card border border-border p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-card/80 transition-colors h-full"
        >
          <ShieldCheck className="text-primary mb-2" size={32} />
          <h4 className="text-foreground text-sm font-bold">{t('skills.quality')}</h4>
          <p className="text-muted-foreground text-[10px] mt-1 font-medium">{t('skills.quality_desc')}</p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 lg:col-span-4 bg-primary text-primary-foreground p-6 rounded-2xl flex flex-wrap items-center justify-between relative overflow-hidden h-full min-h-[120px]"
        >
          <div className="z-10">
            <h3 className="text-3xl font-black leading-none">{t('skills.years')}</h3>
            <p className="font-bold text-sm opacity-80 uppercase tracking-tighter">{t('skills.years_label')}</p>
          </div>
          <div className="flex gap-4 z-10 mt-4 sm:mt-0">
            <div className="flex flex-col items-center">
              <span className="text-xl font-black">{t('skills.projects_count')}</span>
              <span className="text-[10px] font-bold uppercase">{t('skills.projects_label')}</span>
            </div>
            <div className="w-[1px] bg-primary-foreground/20 h-8"></div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-black">{t('skills.commits_count')}</span>
              <span className="text-[10px] font-bold uppercase">{t('skills.commits_label')}</span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
