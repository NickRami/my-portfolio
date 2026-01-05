import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Database, FileUser, Layout, Terminal, Cpu, Cloud } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t, language, devMode } = useApp();
  const containerRef = useRef<HTMLElement>(null);






  return (
    <section
      id="hero"
      ref={containerRef}
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-screen-2xl mx-auto relative overflow-hidden ${devMode ? 'pt-40' : ''}`}
    >

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10 opacity-30 pointer-events-none" />

      {/* LEFT CONTENT: Text & CTA */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 max-w-2xl text-center lg:text-left z-10"
      >
        <div className="space-y-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-yellow-500 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            {t('contact.status')}
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[1] text-balance">
            {t('hero.title.start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{t('hero.title.highlight')}</span> {t('hero.title.end')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0 text-balance">
            {t('hero.desc')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#projects" className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-lg hover:shadow-yellow-400/20 flex items-center justify-center gap-2 group">
            {t('hero.cta.work')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={language === 'es' ? "/curriculum" : "/resume"} className="px-8 py-4 rounded-full border border-muted-foreground/20 hover:bg-muted/10 hover:border-foreground/50 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
            <FileUser size={20} /> {t('hero.cta.resume')}
          </a>
        </div>

        {/* Social Proof / Mini Stats */}
        <div className="mt-12 pt-8 border-t border-muted/50 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code2 size={20} className="text-yellow-500" />
            <span className="text-sm font-medium">{t('hero.features.clean')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={20} className="text-yellow-500" />
            <span className="text-sm font-medium">{t('hero.features.perf')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Server size={20} className="text-yellow-500" />
            <span className="text-sm font-medium">{t('hero.features.scale')}</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT CONTENT: System Architecture Blueprint */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="flex-1 w-full h-[400px] lg:h-[600px] relative flex items-center justify-center mt-12 lg:mt-0"
      >
        {/* Central Architecture Node */}
        <div className="relative w-full max-w-[350px] md:max-w-[500px] aspect-square flex items-center justify-center">

          {/* Blueprint Grid Background (Subtle) */}
          <div className="absolute inset-0 bg-grid-foreground/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] pointer-events-none" />

          {/* SVG Systematic Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Precise gradient for data flow */}
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(250, 204, 21, 0)" />
                <stop offset="50%" stopColor="rgba(250, 204, 21, 0.8)" />
                <stop offset="100%" stopColor="rgba(250, 204, 21, 0)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection Paths: Clear Angled Lines (Circuit-like) */}
            <motion.path
              d="M140 160 L240 160 L240 240"
              stroke="currentColor" strokeWidth="1" fill="none" className="text-muted-foreground/30"
            />
            <motion.path
              d="M360 160 L260 160 L260 240"
              stroke="currentColor" strokeWidth="1" fill="none" className="text-muted-foreground/30"
            />
            <motion.path
              d="M250 340 L250 260"
              stroke="currentColor" strokeWidth="1" fill="none" className="text-muted-foreground/30"
            />

            {/* Data Flow Animations (Pulses) */}
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

          {/* --- Node 1: CLIENT (Architecture) --- */}
          <motion.div
            className="absolute top-[10%] left-[-5%] md:left-[0%] z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-lg w-40 md:w-48 shadow-lg hover:border-yellow-500/30 transition-colors group cursor-default">
              <div className="flex items-center justify-between mb-3 border-b border-border/30 pb-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{t('hero.layer.client')}</span>
                <Layout size={12} className="text-blue-500" />
              </div>
              {/* Real Code Snippet Representation */}
              <div className="space-y-1.5 font-mono text-[9px] md:text-[10px] text-muted-foreground/80 leading-tight">
                <div className="flex gap-2">
                  <span className="text-purple-500">const</span>
                  <span className="text-foreground">App</span> = () <span className="text-purple-500">{`=>`}</span> {`{`}
                </div>
                <div className="pl-3 flex gap-2">
                  <span className="text-blue-500">useQuery</span>(<span className="text-green-500">'data'</span>)
                </div>
                <div className="pl-3 text-muted-foreground/60">...</div>
                <div>{`}`}</div>
              </div>
              <div className="mt-3 flex gap-2 justify-end">
                <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[9px] font-mono border border-blue-500/20">Next.js 15</span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-500 text-[9px] font-mono border border-cyan-500/20">React 19</span>
              </div>
            </div>
          </motion.div>

          {/* --- Node 2: SERVER (Logic) --- */}
          <motion.div
            className="absolute top-[10%] right-[-5%] md:right-[0%] z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-lg w-40 md:w-48 shadow-lg hover:border-yellow-500/30 transition-colors group cursor-default">
              <div className="flex items-center justify-between mb-3 border-b border-border/30 pb-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{t('hero.layer.api')}</span>
                <Terminal size={12} className="text-purple-500" />
              </div>
              <div className="space-y-1.5 font-mono text-[9px] md:text-[10px] text-muted-foreground/80 leading-tight">
                <div>
                  <span className="text-yellow-500">@Controller</span>(<span className="text-green-500">'/v1'</span>)
                </div>
                <div>
                  <span className="text-purple-500">class</span> <span className="text-foreground">Gateway</span> {`{`}
                </div>
                <div className="pl-3">
                  <span className="text-blue-500">async</span> <span className="text-foreground">handle</span>() {`{`}
                </div>
                <div className="pl-5 text-muted-foreground/60">await service.exec()</div>
                <div className="pl-3">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </motion.div>

          {/* --- CENTER CORE: PRODUCT ENGINE --- */}
          <motion.div
            className="z-20 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border border-border/30 flex items-center justify-center relative shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] group cursor-pointer hover:border-yellow-500/50 transition-colors duration-500">
              {/* Inner glow pulse */}
              <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl animate-pulse" />

              {/* Spinning ring - slower, technical */}
              <motion.div
                className="absolute w-[110%] h-[110%] rounded-full border border-border/20 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[130%] h-[130%] rounded-full border border-border/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <Cpu size={32} className="text-foreground md:w-[40px] md:h-[40px] relative z-10" />

              <div className="absolute -bottom-10 whitespace-nowrap px-2 py-1 rounded bg-card/80 border border-border/30 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-500 tracking-widest uppercase">{t('hero.layer.core')}</span>
              </div>
            </div>
          </motion.div>


          {/* --- Node 3: INFRASTRUCTURE (Status) --- */}
          <motion.div
            className="absolute bottom-[0%] left-1/2 -translate-x-1/2 z-10 translate-y-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-card/90 backdrop-blur-md border border-border/50 p-3 rounded-lg w-48 md:w-56 shadow-lg hover:border-green-500/30 transition-colors group cursor-default">
              <div className="flex items-center gap-3 justify-center mb-2">
                <Database size={14} className="text-emerald-500/70" />
                <div className="h-3 w-px bg-border/20"></div>
                <Cloud size={14} className="text-cyan-500/70" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-muted/50 rounded p-1.5 border border-border/20">
                  <div className="text-[9px] text-muted-foreground font-mono mb-0.5">{t('hero.stats.uptime')}</div>
                  <div className="text-[10px] text-green-600 dark:text-green-400 font-mono font-bold">99.99%</div>
                </div>
                <div className="bg-muted/50 rounded p-1.5 border border-border/20">
                  <div className="text-[9px] text-muted-foreground font-mono mb-0.5">{t('hero.stats.latency')}</div>
                  <div className="text-[10px] text-yellow-600 dark:text-yellow-400 font-mono font-bold">24ms</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>


    </section>
  )
}
