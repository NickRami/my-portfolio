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
      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/20 h-[var(--header-height)] transition-all duration-300">
        <div className="container-responsive h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="size-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 group-hover:rotate-3">
              <Terminal size={20} className="text-white" />
            </div>

            {/* Animated Brand Identity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-baseline gap-2 text-foreground font-bold leading-tight tracking-tight hidden sm:flex"
            >
              <span className="text-xl tracking-tighter">Ramiro</span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-primary/60 font-medium text-xl"
              >
                /
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-xs font-mono text-muted-foreground uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
              >
                Senior Full Stack
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-6 items-center h-full">
            <nav className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full z-10 ${activeSection === link.id
                      ? "text-primary hover:text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10 border border-primary/20 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 pl-4 border-l border-white/10">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-white/5 transition-all text-muted-foreground hover:text-primary active:scale-95"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={handleLanguageToggle}
                className="text-xs font-bold p-2.5 rounded-xl hover:bg-white/5 transition-all text-muted-foreground hover:text-primary w-11 active:scale-95 border border-transparent hover:border-white/5"
              >
                {language.toUpperCase()}
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
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
            style={{ scaleX, transformOrigin: "0%" }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[var(--header-height)] bg-background/80 backdrop-blur-xl border-b border-white/10 z-40 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-lg font-bold py-4 px-4 rounded-xl border border-transparent transition-all ${activeSection === link.id
                    ? "bg-primary/5 text-primary border-primary/10"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
