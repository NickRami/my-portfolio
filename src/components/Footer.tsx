import { Github, Linkedin, Mail, Terminal, ArrowUp, MessageCircle } from "lucide-react";
import { useApp } from "../context/AppContext";


export default function Footer() {
    const { t } = useApp();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-white/5 bg-background pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                <Terminal size={20} className="text-primary" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-foreground">Ramiro Silva</span>
                        </div>
                        <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/NickRami" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ramiro-silva-333918231" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ramisilva8@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                                <Mail size={20} />
                            </a>
                            <a href="https://wa.me/542604631531" target="_blank" className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-muted-foreground hover:text-green-400 hover:border-green-400/30 transition-all">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{t('footer.nav')}</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.projects')}</a>
                            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.expertise')}</a>
                            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</a>
                            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
                        </nav>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{t('footer.location')}</h4>
                        <div className="space-y-3 text-muted-foreground">
                            <p>{t('footer.location.text')}</p>
                            <p className="text-sm">ramisilva8@gmail.com</p>
                            <p className="text-sm">+54 2604 631531</p>
                            <div className="pt-2">
                                <button
                                    onClick={scrollToTop}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                >
                                    {t('footer.back_to_top')} <ArrowUp size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>© {new Date().getFullYear()}</span>
                        <span className="w-1 h-1 bg-white/10 rounded-full" />
                        <span>{t('footer.built')}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
