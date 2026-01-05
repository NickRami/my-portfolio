import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../context/AppContext";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t, } = useApp();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: isHome ? "#about" : "/#about", isHash: true },
    { name: t('nav.projects'), href: isHome ? "#projects" : "/#projects", isHash: true },
    { name: t('nav.expertise'), href: isHome ? "#skills" : "/#skills", isHash: true },
    { name: t('nav.resume'), href: language === 'es' ? "/curriculum" : "/resume", isHash: false },
    { name: t('nav.contact'), href: isHome ? "#contact" : "/#contact", isHash: true },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "top-4" : "top-0 py-6 bg-transparent"}`}>
        <div className={`relative mx-auto flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border border-white/5 shadow-lg rounded-full px-6 py-3 max-w-5xl" : "max-w-screen-2xl px-6 md:px-12 lg:px-24"}`}>
          <Link to="/" className="text-xl font-display font-bold tracking-tight hover:text-yellow-400 transition-colors">
            Ramiro Silva
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              link.isHash ? (
                <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors">
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.href} className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors">
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6 min-w-fit flex-nowrap">


            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-yellow-400">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={handleLanguageToggle} className="p-2 rounded-full hover:bg-muted transition-colors text-lg leading-none" title="Switch Language">
              {language === 'en' ? '🇺🇸' : '🇦🇷'}
            </button>

            <a href={isHome ? "#contact" : "/#contact"} className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              {t('nav.talk')}
            </a>
          </div>

          {/* Mobile Toggle & Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={handleLanguageToggle} className="p-1 rounded-full hover:bg-muted transition-colors text-xl leading-none">
              {language === 'en' ? '🇺🇸' : '🇦🇷'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground z-50">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map(link => (
                link.isHash ? (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-bold text-foreground hover:text-yellow-400 transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-bold text-foreground hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                )
              ))}

              <div className="mt-8">
                <a href={isHome ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)} className="px-8 py-4 text-lg font-medium bg-foreground text-background rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                  {t('nav.talk')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
