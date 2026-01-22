import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, FileUser, Layout, Terminal, Cpu, Cloud, Database, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t, language } = useApp();
  const containerRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Code2,
      label: 'hero.features.clean',
      sub: 'hero.features.clean.sub',
      color: 'text-blue-400',
      glow: 'shadow-blue-500/20'
    },
    {
      icon: Zap,
      label: 'hero.features.perf',
      sub: 'hero.features.perf.sub',
      color: 'text-primary',
      glow: 'shadow-primary/20'
    },
    {
      icon: Server,
      label: 'hero.features.scale',
      sub: 'hero.features.scale.sub',
      color: 'text-purple-400',
      glow: 'shadow-purple-500/20'
    },
    {
      icon: ShieldCheck,
      label: 'hero.features.security',
      sub: 'hero.features.security.sub',
      color: 'text-emerald-400',
      glow: 'shadow-emerald-500/20'
    }
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-x-clip min-h-screen flex items-center pt-20"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10 opacity-30 pointer-events-none" />

      <div className="container-responsive w-full py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 mb-16 lg:mb-24">

          {/* LEFT CONTENT: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl text-center lg:text-left z-10"
          >
            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t('contact.status')}
              </motion.div>

              <h1 className="font-display text-fluid-h1 font-black tracking-tight text-balance text-foreground">
                {t('hero.title.start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#57d4ff] to-primary bg-[length:200%_auto] animate-gradient-flow">{t('hero.title.highlight')}</span> {t('hero.title.end')}
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0 text-balance opacity-90">
                {t('hero.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
              <a href="#projects" className="px-10 py-5 rounded-2xl bg-primary text-background font-black text-lg hover:brightness-110 transition-all shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-3 group w-full sm:w-auto hover:scale-105 active:scale-95">
                {t('hero.cta.work')} <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href={language === 'es' ? "/curriculum" : "/resume"} className="px-10 py-5 rounded-2xl border border-border bg-background/40 hover:bg-white/5 hover:border-primary/50 transition-all flex items-center justify-center gap-3 backdrop-blur-md w-full sm:w-auto text-foreground font-bold text-lg hover:scale-105 active:scale-95">
                <FileUser size={22} /> {t('hero.cta.resume')}
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: System Architecture Blueprint */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex-1 w-full relative flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Holographic Architecture Container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden shadow-2xl group">

              {/* Header Bar */}
              <div className="h-10 border-b border-border/50 flex items-center justify-between px-4 bg-background/50">
                <div className="flex gap-1.5">
                  <div className="size-1.5 rounded-full bg-red-500/50" />
                  <div className="size-1.5 rounded-full bg-yellow-500/50" />
                  <div className="size-1.5 rounded-full bg-green-500/50" />
                </div>
                <div className="font-mono text-[9px] text-primary/70 tracking-widest uppercase">
                  SYSTEM_ARCH.V2
                </div>
              </div>

              {/* Scanner Effect */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0 pointer-events-none"
              />

              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(13,185,242,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,185,242,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

              {/* Architecture Content */}
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(13, 185, 242, 0)" />
                      <stop offset="50%" stopColor="rgba(13, 185, 242, 0.8)" />
                      <stop offset="100%" stopColor="rgba(13, 185, 242, 0)" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M140 160 L240 160 L240 240"
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30"
                  />
                  <motion.path
                    d="M360 160 L260 160 L260 240"
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30"
                  />
                  <motion.path
                    d="M250 340 L250 260"
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30"
                  />

                  {/* Data Flow Animations */}
                  <motion.path
                    d="M140 160 L240 160 L240 240"
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0], pathOffset: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                  <motion.path
                    d="M360 160 L260 160 L260 240"
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0], pathOffset: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  />
                  <motion.path
                    d="M250 260 L250 340"
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0], pathOffset: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  />
                </svg>

                <motion.div className="absolute top-[15%] left-[5%] z-10">
                  <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1 border-b border-border/30 pb-1">
                      <Layout size={12} className="text-blue-500" />
                      <span className="text-[9px] font-mono text-muted-foreground uppercase font-bold">{t('hero.layer.client')}</span>
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground/80 leading-tight">
                      <span className="text-purple-500">View</span>.render()
                    </div>
                  </div>
                </motion.div>

                <motion.div className="absolute top-[15%] right-[5%] z-10">
                  <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1 border-b border-border/30 pb-1">
                      <Terminal size={12} className="text-purple-500" />
                      <span className="text-[9px] font-mono text-muted-foreground uppercase font-bold">{t('hero.layer.api')}</span>
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground/80 leading-tight">
                      <span className="text-green-500">200 OK</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="z-20 relative">
                  <div className="size-32 rounded-full bg-card border border-border/30 flex items-center justify-center relative shadow-[0_0_50px_rgba(13,185,242,0.1)]">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                    <motion.div
                      className="absolute w-[120%] h-[120%] rounded-full border border-primary/20 border-dashed"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <Cpu size={32} className="text-primary" />
                    </div>
                    <div className="absolute -bottom-8 px-3 py-1 rounded-full bg-card border border-primary/30 z-30">
                      <span className="text-[9px] font-mono text-primary font-black uppercase tracking-widest">{t('hero.layer.core')}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-2xl w-48 shadow-lg flex justify-between items-center gap-4">
                    <div className="text-center">
                      <span className="text-[9px] text-muted-foreground block uppercase">{t('hero.stats.uptime')}</span>
                      <span className="text-xs font-mono font-bold text-green-400">99.9%</span>
                    </div>
                    <div className="h-6 w-px bg-border/40" />
                    <div className="text-center">
                      <span className="text-[9px] text-muted-foreground block uppercase">{t('hero.stats.latency')}</span>
                      <span className="text-xs font-mono font-bold text-primary">~35ms</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative pt-16 mt-8 border-t border-white/5"
        >
          {/* subtle glow behind the banner */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-3xl bg-card/10 border border-white/5 backdrop-blur-md hover:bg-card/20 hover:border-white/10 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(13,185,242,0.15),transparent_70%)]" />

                <div className="relative z-10 flex flex-col items-center lg:items-start gap-4">
                  <div className={`p-4 rounded-2xl bg-background border border-border group-hover:border-primary/30 transition-all duration-300 shadow-lg ${feature.glow}`}>
                    <feature.icon size={32} className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display text-xl font-black text-foreground tracking-tight">{t(feature.label)}</h3>
                    <p className="text-[11px] text-primary/60 font-black uppercase tracking-[0.2em] mt-1.5">{t(feature.sub)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  );
}
