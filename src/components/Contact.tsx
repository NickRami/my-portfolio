import { Mail, Github, Linkedin } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="section-padding section-blueprint overflow-hidden relative">
      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-mono font-medium text-primary tracking-wide uppercase">
              {t('contact.status')}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-fluid-h2 font-black tracking-tight leading-[1] text-balance">
              {t('contact.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-400 to-primary/50">
                {t('contact.subtitle')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
              {t('contact.desc')}
            </p>
          </div>

          {/* Action Card */}
          <div className="w-full bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Email Action */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ramisilva8@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="p-4 bg-[#EA4335]/10 rounded-xl text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-white transition-colors">
                  <Mail size={32} />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-lg text-foreground">Gmail</span>
                </div>
              </a>

              {/* LinkedIn Action */}
              <a
                href="https://www.linkedin.com/in/ramiro-silva-333918231"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="p-4 bg-[#0A66C2]/10 rounded-xl text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin size={32} />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-lg text-foreground">LinkedIn</span>
                </div>
              </a>

              {/* GitHub Action */}
              <a
                href="https://github.com/NickRami"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="p-4 bg-white/10 rounded-xl text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Github size={32} />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-lg text-foreground">GitHub</span>
                </div>
              </a>

            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
