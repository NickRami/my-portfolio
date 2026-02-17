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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 lg:pb-32 overflow-hidden bg-background"
    >
      {/* ── BACKGROUND ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(13,185,242,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(13,185,242,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 80% at 0% 0%, #000 70%, transparent 100%)'
          }}
        />
        {/* Ambient Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container-responsive w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN: CONTENT ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left space-y-8"
          >
            {/* Status Badge */}
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

            {/* Typography */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-sm md:text-base font-mono text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              >
                {t('hero.role')}
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05]"
              >
                {t('hero.title.start')} <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-primary via-blue-400 to-indigo-400 bg-clip-text text-transparent block mt-1 pb-2">
                  {t('hero.title.highlight')}
                </span>
                {t('hero.title.end')}
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-xl font-normal"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Actions & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col w-full sm:w-auto gap-8 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="group relative px-8 py-3.5 rounded-lg bg-foreground text-background font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Terminal size={18} />
                  {t('hero.cta.work')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={language === "es" ? "/curriculum" : "/resume"}
                  className="group px-8 py-3.5 rounded-lg border border-border hover:border-foreground/20 bg-transparent text-foreground font-medium text-base transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-foreground/5"
                >
                  <FileUser size={18} />
                  {t('hero.cta.resume')}
                </a>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-border"></div>
                <div className="flex gap-5">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 duration-200"
                    >
                      <link.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: VISUAL ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              {/* Main Gradient Orb */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />

              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-dashed border-primary/20 rounded-full opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] border border-primary/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200px] h-[200px] border-2 border-primary/5 rounded-full border-t-primary/30"
              />

              {/* Central Tech Feature */}
              <div className="relative z-10 w-32 h-32 bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/10">
                <Terminal size={48} className="text-primary opacity-80" />
              </div>

              {/* Orbiting Decor */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-10 left-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(13,185,242,0.8)]" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
