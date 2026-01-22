import { useState } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../context/AppContext";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t } = useApp();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: t('nav.expertise'), href: isHome ? "#skills" : "/#skills" },
    { name: t('nav.projects'), href: isHome ? "#projects" : "/#projects" },
    { name: t('nav.about'), href: isHome ? "#about" : "/#about" },
    { name: t('nav.contact'), href: isHome ? "#contact" : "/#contact" },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container-responsive py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <Terminal size={18} className="text-background" />
            </div>
            <h2 className="text-foreground text-xl font-black leading-tight tracking-tight">
              Ramiro | Full Stack Developer
            </h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.name}
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
                className="text-xs font-bold p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              >
                {language.toUpperCase()}
              </button>

              <button className="flex min-w-[120px] items-center justify-center rounded-lg h-10 px-5 bg-primary text-background text-sm font-bold transition-transform hover:scale-105 active:scale-95">
                {t('nav.resume')}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className="text-muted-foreground">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
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
