import { motion } from "framer-motion";
import { ArrowRight, Github, Code2, Server, Database, Cloud } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t } = useApp();

  const techStack = [
    { 
      icon: Code2, 
      category: t('hero.tech.frontend'), 
      items: "React • Next.js • TypeScript • Tailwind"
    },
    { 
      icon: Server, 
      category: t('hero.tech.backend'), 
      items: "Node.js • NestJS • GraphQL • REST"
    },
    { 
      icon: Database, 
      category: t('hero.tech.database'), 
      items: "PostgreSQL • MongoDB • Redis • Prisma"
    },
    { 
      icon: Cloud, 
      category: t('hero.tech.devops'), 
      items: "AWS • Docker • CI/CD • Terraform"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-screen-2xl mx-auto relative overflow-hidden">
      
      {/* Background Decoration - More Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[140px] rounded-full -z-10 opacity-20 pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto space-y-8"
      >
        <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                {t('hero.role')}
              </span>
            </h1>
            <p className="text-yellow-400/90 text-2xl md:text-3xl font-medium tracking-tight">
                {t('hero.subtitle')}
            </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light max-w-2xl mx-auto text-balance">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <a href="#contact" className="px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            {t('hero.cta.contact')} <ArrowRight size={18} />
          </a>
          <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-muted-foreground/20 hover:bg-muted/10 transition-colors flex items-center gap-2">
             <Github size={20} /> {t('hero.cta.github')}
          </a>
        </div>
      </motion.div>

      {/* Tech Stack - Minimalist */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 w-full max-w-5xl"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {techStack.map((tech, index) => (
                <div 
                    key={index}
                    className="group p-4 rounded-xl hover:bg-muted/10 transition-colors text-center border border-transparent hover:border-muted/20"
                >
                    <div className="mb-3 inline-flex p-3 rounded-lg bg-muted/10 text-foreground/80 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-colors">
                        <tech.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-semibold mb-1 tracking-wide">{tech.category}</h3>
                    <p className="text-sm text-muted-foreground">{tech.items}</p>
                </div>
            ))}
        </div>
      </motion.div>

    </section>
  )
}
