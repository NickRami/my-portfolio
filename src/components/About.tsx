import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { User, Code2, Sparkles, Rocket } from "lucide-react";

export default function About() {
    const { t } = useApp();

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-responsive">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                            <User size={16} />
                            {t('about.badge') || "About Me"}
                        </div>

                        <h2 className="text-fluid-h2 font-black tracking-tight text-foreground leading-tight">
                            {t('about.title')}
                        </h2>

                        <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} className="relative" />
                            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border">
                                <Code2 className="text-primary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-foreground">{t('about.clean_code')}</h4>
                                    <p className="text-sm text-muted-foreground">{t('about.clean_code_desc')}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border">
                                <Rocket className="text-primary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-foreground">{t('about.fast_delivery')}</h4>
                                    <p className="text-sm text-muted-foreground">{t('about.fast_delivery_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:ml-12"
                    >
                        {/* Continuous Floating Motion */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 group cursor-default"
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card aspect-[4/5] md:aspect-square flex flex-col shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_60px_rgba(13,185,242,0.1)]">

                                {/* Header / Status Bar */}
                                <div className="h-12 border-b border-border/50 flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-red-500/50" />
                                        <div className="size-2 rounded-full bg-yellow-500/50" />
                                        <div className="size-2 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                                        SYS.ID: 0x882
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 relative flex flex-col items-center justify-center p-8 overflow-hidden">
                                    {/* Background Grid */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,185,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,185,242,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                                    {/* Scanner Line */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(13,185,242,0.5)] z-0"
                                    />

                                    {/* Central Typography */}
                                    <div className="relative z-10 text-center space-y-2 mix-blend-screen">
                                        <h3 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary/80 to-transparent tracking-tighter leading-[0.8]">
                                            SR
                                        </h3>
                                        <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                                            DEV
                                        </h3>
                                    </div>

                                    {/* Floating Code Snippet Effect */}
                                    <div className="mt-8 font-mono text-[10px] text-primary/60 bg-primary/5 p-4 rounded-xl border border-primary/10 w-full max-w-[200px] backdrop-blur-sm">
                                        <div className="flex justify-between border-b border-primary/10 pb-1 mb-2">
                                            <span>CLASS</span>
                                            <span>EXTENDS</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span className="text-foreground">{t('about.senior')}</span>
                                                <span className="text-green-400">TRUE</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-foreground">Stack</span>
                                                <span>Full</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer / Badges */}
                                <div className="p-4 bg-background/50 backdrop-blur-sm border-t border-border/50 flex gap-2 justify-center">
                                    <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase">{t('about.fullstack')}</span>
                                    <span className="px-3 py-1 rounded-md bg-secondary border border-secondary/20 text-[10px] font-bold text-secondary-foreground uppercase">{t('about.typescript')}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Background Rings */}
                        <div className="absolute -z-10 inset-0 border-2 border-primary/20 rounded-full scale-[1.15] animate-[spin_60s_linear_infinite]" />
                        <div className="absolute -z-10 inset-0 border-2 border-dashed border-secondary/20 rounded-full scale-[1.3] animate-[spin_40s_linear_infinite_reverse]" />
                        <div className="absolute -z-10 inset-0 bg-primary/10 blur-[120px] rounded-full scale-125" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
