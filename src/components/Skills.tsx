import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Cpu, Layout, Terminal, Database, ShieldCheck, Box, Cloud, Code2 } from "lucide-react";

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <div className="mb-16 border-b border-border pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
              <Cpu size={20} />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">
              {t('skills.title')}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Bento Grid Layout - Refined 3-row grid for 7 cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Card 1: React/Frontend - Large Feature (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40"
          >
            <div className="absolute -right-12 -top-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
              <Layout size={280} className="text-primary rotate-12" />
            </div>
            <div className="z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Layout className="text-primary" size={32} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">{t('skills.frontend')}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground uppercase tracking-wider">Expert</span>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xs group-hover:text-foreground transition-colors">
                {t('skills.bento.frontend.desc')}
              </p>
            </div>
            <div className="z-10 mt-8 flex flex-wrap gap-2">
              {['React 19', 'Next.js 15', 'Tailwind CSS', 'TypeScript'].map(item => (
                <span key={item} className="px-3 py-1 bg-secondary border border-border rounded-full text-xs font-medium text-muted-label">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Node.js/Backend - Wide (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40"
          >
            <div className="absolute right-4 top-4 opacity-[0.05] group-hover:opacity-20 transition-opacity">
              <Terminal size={80} className="text-primary" />
            </div>
            <div className="flex justify-between items-start">
              <div className="z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{t('skills.backend')}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Advanced</span>
                </div>
                <p className="text-muted-foreground text-sm leading-normal max-w-sm group-hover:text-foreground transition-colors">
                  {t('skills.bento.backend.desc')}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2 z-10">
              {['Node.js', 'Express', 'NestJS', 'RESTful'].map(item => (
                <span key={item} className="px-3 py-1 bg-secondary border border-border rounded-full text-xs font-medium text-muted-label">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: TypeScript - Standard (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/40"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                <ShieldCheck className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold">TypeScript</h3>
              <p className="text-muted-foreground text-xs leading-normal group-hover:text-foreground transition-colors">
                {t('skills.bento.typescript.desc')}
              </p>
            </div>
            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mt-4">Static Types</span>
          </motion.div>

          {/* Card 4: PostgreSQL - Standard (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/40"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Database className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold">PostgreSQL</h3>
              <p className="text-muted-foreground text-xs leading-normal group-hover:text-foreground transition-colors">
                {t('skills.bento.database.desc')}
              </p>
            </div>
            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mt-4">SQL & Data</span>
          </motion.div>

          {/* Card 5: Architecture - Wide (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-primary/40"
          >
            <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <Code2 className="text-primary" size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <h3 className="text-xl font-bold">{t('skills.practices')}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Core</span>
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                {t('skills.bento.architecture.desc')}
              </p>
            </div>
          </motion.div>

          {/* Card 6: Docker - Standard (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/40"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Box className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold">Containers</h3>
              <p className="text-muted-foreground text-xs leading-normal group-hover:text-foreground transition-colors">
                {t('skills.bento.devops.desc')}
              </p>
            </div>
            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mt-4">Docker & CI</span>
          </motion.div>

          {/* Card 7: AWS/Cloud - Standard (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bento-card bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/40"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Cloud className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold">Infrastructure</h3>
              <p className="text-muted-foreground text-xs leading-normal group-hover:text-foreground transition-colors">
                {t('skills.bento.cloud.desc')}
              </p>
            </div>
            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mt-4">Cloud Services</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
