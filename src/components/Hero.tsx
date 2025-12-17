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
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20 max-w-screen-2xl mx-auto relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-30 pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-5xl mx-auto space-y-10"
      >
        <div className="space-y-6">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                {t('hero.role')}
              </span> <br />
              <span className="text-yellow-400 drop-shadow-sm text-4xl md:text-5xl lg:text-6xl block mt-2">
                {t('hero.subtitle')}
              </span>
            </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto text-balance">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a href="#contact" className="group bg-yellow-400 text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/20 text-lg">
            {t('hero.cta.contact')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/NickRami" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full font-medium border border-muted text-foreground hover:bg-muted/50 transition-colors flex items-center justify-center gap-2 text-lg">
             <Github size={22} /> {t('hero.cta.github')}
          </a>
        </div>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        className="mt-20 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {techStack.map((tech, index) => (
                <motion.div 
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="p-6 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm hover:bg-muted/30 transition-colors text-center group"
                >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-yellow-400/10 text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                        <tech.icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tech.category}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{tech.items}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>

    </section>
  )
}
