import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useApp } from "../context/AppContext";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme, language, setLanguage, t } = useApp();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { id: "projects", name: t('nav.projects'), href: isHome ? "#projects" : "/#projects" },
    { id: "skills", name: t('nav.expertise'), href: isHome ? "#skills" : "/#skills" },
    { id: "about", name: t('nav.about'), href: isHome ? "#about" : "/#about" },
    { id: "contact", name: t('nav.contact'), href: isHome ? "#contact" : "/#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-72px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        /* 
           Engineering adjustment: 'start' aligns the title to the top (respecting scroll-padding),
           ensuring the user enters the section from the beginning.
        */
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md h-[var(--header-height)]">
        <div className="container-responsive h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <Terminal size={18} className="text-background" />
            </div>

            {/* Animated Brand Identity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-baseline gap-2 text-foreground font-bold leading-tight tracking-tight hidden sm:flex"
            >
              <span className="text-xl">Ramiro</span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-primary/60 font-medium text-xl"
              >
                |
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-sm font-mono text-muted-foreground uppercase tracking-widest"
              >
                Engineer
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center h-full">
            <nav className="flex items-center gap-8 h-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative text-sm font-medium transition-all px-1 py-2 group ${activeSection === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-l border-border pl-8">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={handleLanguageToggle}
                className="text-xs font-bold p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary w-10"
              >
                {language.toUpperCase()}
              </button>

              <button className="flex min-w-[120px] items-center justify-center rounded-lg h-9 px-5 bg-foreground text-background text-xs font-bold transition-all hover:scale-105 active:scale-95">
                {t('nav.resume')}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={handleLanguageToggle}
              className="text-xs font-bold p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {language.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className="text-muted-foreground">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── SCROLL PROGRESS BAR ──────────────────────────── */}
        <div className="scroll-progress-container">
          <motion.div className="scroll-progress-bar" style={{ scaleX }} />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] bg-background border-b border-border z-40 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2 border-b border-border last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-primary text-background font-bold py-4 rounded-xl mt-4">
              {t('nav.resume')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
