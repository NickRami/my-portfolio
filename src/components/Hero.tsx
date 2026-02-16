import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileUser, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t, language } = useApp();
  const containerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ramiro-silva-333918231", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/NickRami", label: "GitHub" },
    { icon: Mail, href: "mailto:ramisilva8@gmail.com?subject=Contact from Portfolio", label: "Email" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* ── FUTURISTIC GRID BACKGROUND ──────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(13,185,242,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(13,185,242,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container-responsive w-full relative z-10 py-12 lg:py-0">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >

            {/* ── TOP BADGE ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono font-medium text-primary tracking-wide">
                {t('contact.status')}
              </span>
            </motion.div>

            {/* ── MAIN HEADING ─────────────────────────────── */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-mono text-primary/80 font-medium tracking-[0.2em] uppercase"
              >
                {t('hero.role')}
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-foreground leading-[0.95]"
              >
                {t('hero.title.start')} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">
                  {t('hero.title.highlight')}
                </span> <br />
                {t('hero.title.end')}
              </motion.h1>
            </div>

            {/* ── DESCRIPTION ──────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light"
            >
              {t('hero.desc')}
            </motion.p>

            {/* ── TECH PILLS (Minimalist) ──────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 py-2"
            >
              {[t('hero.tech.frontend'), t('hero.tech.backend'), t('hero.tech.database'), t('hero.tech.devops')].map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-md bg-card border border-white/10 text-xs font-mono text-primary/90 font-semibold shadow-sm">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* ── ACTIONS ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-lg bg-foreground text-background font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Terminal size={20} />
                {t('hero.cta.work')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={language === "es" ? "/curriculum" : "/resume"}
                className="group px-8 py-4 rounded-lg border border-border hover:border-foreground/20 bg-transparent text-foreground font-medium text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-foreground/5"
              >
                <FileUser size={20} />
                {t('hero.cta.resume')}
              </a>
            </motion.div>

            {/* ── SOCIALS (Floating Minimal) ───────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-12 flex justify-center gap-6"
            >
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
