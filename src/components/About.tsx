import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { User, Code2, Sparkles, Rocket } from "lucide-react";

export default function About() {
    const { t } = useApp();

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
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
                                    <h4 className="font-bold text-foreground">Clean Code</h4>
                                    <p className="text-sm text-muted-foreground">Writing maintainable, efficient, and robust architecture.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                                <Rocket className="text-primary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-foreground">Fast Delivery</h4>
                                    <p className="text-sm text-muted-foreground">Optimized workflows for scalable production apps.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-border aspect-square bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center group">
                            <Sparkles className="size-48 text-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />

                            {/* Inner Glass Card */}
                            <div className="absolute inset-8 rounded-[2rem] bg-background/60 backdrop-blur-xl border border-white/5 flex items-center justify-center p-8 text-center">
                                <div className="space-y-2">
                                    <span className="text-5xl font-black text-primary">Senior</span>
                                    <p className="text-lg font-bold text-foreground tracking-widest uppercase">Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -z-10 inset-0 border-2 border-primary/10 rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -z-10 inset-0 border-2 border-dashed border-primary/5 rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
