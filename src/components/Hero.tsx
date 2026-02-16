import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileUser, Github, Linkedin, Mail } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t, language } = useApp();
  const containerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ramiro-silva-333918231", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/NickRami", label: "GitHub" },
    { icon: Mail, href: "mailto:ramisilva8@gmail.com?subject=Contact from Portfolio", label: "Email" },
  ];

  // Generate floating orbs
  const orbs = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 250 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* ── ANIMATED BACKGROUND ─────────────────────────── */}
      {/* Base gradient matching theme */}
      <div className="absolute inset-0 bg-background -z-20" />

      {/* Floating Orbs Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              background: orb.id % 3 === 0
                ? "radial-gradient(circle, rgba(13,185,242,0.15) 0%, transparent 70%)"
                : orb.id % 3 === 1
                  ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 -z-10 pointer-events-none" />

      <div className="container-responsive w-full relative z-10 py-12 lg:py-0">
        <div className="max-w-5xl mx-auto">

          {/* ── MAIN CONTENT ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >

            {/* Status Badge - matching other sections */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t('contact.status')}
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base font-mono text-primary tracking-[0.25em] uppercase font-semibold"
            >
              {t('hero.role')}
            </motion.p>

            {/* Main Heading - using fluid typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-display text-fluid-h1 font-black tracking-tight text-foreground leading-[1.1] px-4"
            >
              {t('hero.title.start')}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#57d4ff] to-primary bg-[length:200%_auto] animate-gradient-flow">
                {t('hero.title.highlight')}
              </span>
              <br className="hidden sm:block" />
              {t('hero.title.end')}
            </motion.h1>

            {/* Description - using theme colors */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4"
            >
              {t('hero.desc')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg hover:shadow-primary/30 w-full sm:w-auto hover:scale-105"
              >
                {t('hero.cta.work')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={language === "es" ? "/curriculum" : "/resume"}
                className="px-8 py-4 rounded-xl border border-border bg-card hover:bg-card/80 hover:border-primary/50 transition-all text-foreground font-bold text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105"
              >
                <FileUser size={20} />
                {t('hero.cta.resume')}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-4 pt-6"
            >
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <link.icon size={22} />
                </a>
              ))}
            </motion.div>

            {/* Decorative Stats - matching Skills section style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 px-4"
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="text-3xl md:text-4xl font-black text-foreground">{t('skills.years')}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  {t('skills.years_label').split(' ')[0]}
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="text-3xl md:text-4xl font-black text-foreground">{t('skills.projects_count')}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  {t('skills.projects_label')}
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="text-3xl md:text-4xl font-black text-foreground">{t('skills.commits_count')}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  {t('skills.commits_label')}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
