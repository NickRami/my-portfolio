import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative">
        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -right-24 size-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="bg-card/40 backdrop-blur-sm border border-border rounded-[3rem] p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden group">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="z-10 space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider backdrop-blur-md px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('contact.status')}
            </div>

            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-tight text-balance">
              {t('contact.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#57d4ff]">
                {t('contact.subtitle')}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
              {t('contact.desc')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <a
                href="mailto:ramisilva8@gmail.com?subject=Job Opportunity"
                className="group flex items-center justify-center gap-3 bg-primary text-background px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 w-full sm:w-auto"
              >
                {t('contact.cta')} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>

              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/ramiro-silva-333918231" target="_blank" className="p-5 rounded-2xl bg-secondary border border-border hover:border-primary/50 text-foreground transition-all hover:scale-110 hover:text-primary" title="LinkedIn">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/NickRami" target="_blank" className="p-5 rounded-2xl bg-secondary border border-border hover:border-primary/50 text-foreground transition-all hover:scale-110 hover:text-white" title="GitHub">
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Large Background Icon */}
          <Mail className="absolute -bottom-12 -right-12 size-64 text-primary opacity-[0.03] rotate-12 group-hover:opacity-[0.08] transition-opacity duration-700" />
        </div>
      </div>
    </section>
  );
}
