import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { User, Code2, Sparkles, Rocket } from "lucide-react";

export default function About() {
    const { t } = useApp();

    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-20">
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

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
                            {t('about.title')}
                        </h2>

                        <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                            <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} className="relative" />
                            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                                <Code2 className="text-primary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-foreground">{t('about.clean_code')}</h4>
                                    <p className="text-sm text-muted-foreground">{t('about.clean_code_desc')}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
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
                                y: [0, -15, 0],
                                rotateZ: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 group cursor-default"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden border border-border aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/10 flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:border-primary/40">

                                {/* Animated Shimmer / Reflection */}
                                <motion.div
                                    animate={{
                                        x: ['-100%', '200%'],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 1
                                    }}
                                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0 pointer-events-none"
                                />

                                {/* Background Sparkles with floating animation */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.1, 0.2, 0.1]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <Sparkles className="size-48 text-primary group-hover:text-primary/40 group-hover:scale-125 transition-all duration-700 blur-[3px] group-hover:blur-sm" />
                                </motion.div>

                                {/* Inner Glass Card with parallax effect on hover */}
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="absolute inset-8 rounded-[2rem] bg-background/30 backdrop-blur-3xl border border-white/10 flex items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(13,185,242,0.15)] group-hover:shadow-[0_0_80px_rgba(13,185,242,0.3)] transition-all duration-500 z-10 overflow-hidden"
                                >
                                    <div className="space-y-3 relative z-10">
                                        <span className="text-7xl font-black text-primary drop-shadow-[0_0_20px_rgba(13,185,242,0.6)]">{t('about.senior')}</span>
                                        <div className="flex flex-col items-center">
                                            <p className="text-xl font-bold text-foreground tracking-[0.4em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">{t('about.developer')}</p>
                                            <div className="h-1 w-12 bg-primary/40 rounded-full mt-2 group-hover:w-24 transition-all duration-500" />
                                        </div>
                                    </div>

                                    {/* Subtle internal glow that follows (pseudo) */}
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </motion.div>

                                {/* Corner Accents with "scanning" animation */}
                                <div className="absolute top-8 left-8 size-6 border-t-2 border-l-2 border-primary/50 rounded-tl-xl group-hover:border-primary transition-all duration-500" />
                                <div className="absolute bottom-8 right-8 size-6 border-b-2 border-r-2 border-primary/50 rounded-br-xl group-hover:border-primary transition-all duration-500" />
                            </div>

                            {/* Floating Stats or Tags around the card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-1/4 z-20 px-4 py-2 bg-card/90 backdrop-blur-md border border-primary/30 rounded-full shadow-xl"
                            >
                                <span className="text-xs font-black text-primary uppercase tracking-tighter">{t('about.fullstack')}</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-4 bottom-1/4 z-20 px-4 py-2 bg-card/90 backdrop-blur-md border border-secondary/30 rounded-full shadow-xl"
                            >
                                <span className="text-xs font-black text-secondary uppercase tracking-tighter">{t('about.typescript')}</span>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Background Rings - Enhanced Color and Speed */}
                        <div className="absolute -z-10 inset-0 border-2 border-primary/20 rounded-full scale-[1.15] animate-[spin_25s_linear_infinite]" />
                        <div className="absolute -z-10 inset-0 border-2 border-dashed border-secondary/20 rounded-full scale-[1.3] animate-[spin_35s_linear_infinite_reverse]" />
                        <div className="absolute -z-10 inset-0 bg-primary/10 blur-[120px] rounded-full scale-125" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
