import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { t } = useApp();

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-t border-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-6 max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                    {t('contact.title')} <br /> <span className="text-yellow-400">{t('contact.subtitle')}</span>
                 </h2>
                 <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                    {t('contact.desc')}
                 </p>
                 
                 <div className="flex flex-col gap-4 pt-4">
                    <a href="mailto:ramiro@example.com?subject=Job Opportunity - Full Stack Developer" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-yellow-400 transition-colors w-fit group">
                        {t('contact.cta')} <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                    <div className="flex items-center gap-2 text-sm text-green-500/90 font-medium bg-green-500/5 px-3 py-1.5 rounded-full w-fit">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {t('contact.status')}
                    </div>
                 </div>
            </div>
            
            <div className="flex flex-col gap-6 md:items-end">
               <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground hidden md:block">{t('contact.socials')}</span>
               <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-muted/30 hover:bg-muted text-foreground transition-all hover:scale-110 hover:text-[#0A66C2]" title="LinkedIn">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-muted/30 hover:bg-muted text-foreground transition-all hover:scale-110 hover:text-white" title="GitHub">
                    <Github size={28} />
                  </a>
                  <a href="mailto:ramiro@example.com?subject=Job Opportunity - Full Stack Developer" className="p-4 rounded-full bg-muted/30 hover:bg-muted text-foreground transition-all hover:scale-110 hover:text-yellow-400" title="Email">
                    <Mail size={28} />
                  </a>
               </div>
            </div>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t border-muted/20 pt-8">
            <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
    </footer>
  )
}
