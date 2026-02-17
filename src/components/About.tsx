import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { Terminal, Cpu, Zap, ShieldCheck } from "lucide-react";

export default function About() {
    const { t } = useApp();

    const qualities = [
        {
            icon: Cpu,
            title: t('about.clean_code'),
            desc: t('about.clean_code_desc'),
            color: "text-blue-400"
        },
        {
            icon: Zap,
            title: t('about.fast_delivery'),
            desc: t('about.fast_delivery_desc'),
            color: "text-amber-400"
        },
        {
            icon: ShieldCheck,
            title: t('hero.features.security'),
            desc: t('hero.features.security.sub'),
            color: "text-emerald-400"
        }
    ];

    return (
        <section id="about" className="section-padding section-blueprint relative overflow-hidden bg-background">

            {/* ── TECHNICAL BACKGROUND ──────────────────────── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

                {/* Minimal Grid on the side */}
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container-responsive relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* ── LEFT: CONTENT ───────────────────────────── */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3 text-primary/80 font-mono text-sm uppercase tracking-widest">
                                <Terminal size={16} />
                                <span>{t('about.badge') || "System Profile"}</span>
                            </div>
                            <h2 className="text-fluid-h2 font-black text-foreground leading-none tracking-tight">
                                {t('about.title')}
                            </h2>
                        </motion.div>

                        {/* Description Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6"
                        >
                            <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} className="border-l-2 border-primary/20 pl-6" />
                            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                        </motion.div>

                        {/* Qualities Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                        >
                            {qualities.map((item, i) => (
                                <div key={i} className="group p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300">
                                    <item.icon className={`${item.color} mb-3`} size={24} />
                                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT: ENGINEERING VISUAL ───────────────── */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* The "Blueprint" Card */}
                            <div className="relative z-10 bg-[#0d1419] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

                                {/* Top Bar */}
                                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center justify-between px-3">
                                    <span className="text-[10px] font-mono text-primary/60 uppercase">Senior_Profile.json</span>
                                    <div className="flex gap-1.5">
                                        <div className="size-1.5 rounded-full bg-white/20" />
                                        <div className="size-1.5 rounded-full bg-white/20" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-blue-100/90">
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">1</span>
                                        <span><span className="text-blue-400">const</span> <span className="text-yellow-300">Ramiro</span> = <span className="text-white">{`{`}</span></span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">2</span>
                                        <span className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-green-300">"{t('about.senior') || 'Senior'} Full Stack"</span>,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">3</span>
                                        <span className="pl-4"><span className="text-cyan-300">location</span>: <span className="text-green-300">"Remote / Hybrid"</span>,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">4</span>
                                        <span className="pl-4"><span className="text-cyan-300">code_style</span>: <span className="text-green-300">"Clean & Scalable"</span>,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">5</span>
                                        <span className="pl-4"><span className="text-cyan-300">focus</span>: [</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">6</span>
                                        <span className="pl-8"><span className="text-green-300">"Performance"</span>,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">7</span>
                                        <span className="pl-8"><span className="text-green-300">"User Experience"</span>,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">8</span>
                                        <span className="pl-8"><span className="text-green-300">"System Design"</span></span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">9</span>
                                        <span className="pl-4">]</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-purple-400 select-none">10</span>
                                        <span><span className="text-white">{'}'}</span>;</span>
                                    </div>
                                </div>

                                {/* Status Footer */}
                                <div className="p-3 bg-primary/5 border-t border-primary/10 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider">
                                    <span className="text-primary">● Compiling...</span>
                                    <span className="text-muted-foreground">0 Errors</span>
                                </div>
                            </div>

                            {/* Decorative Elements behind card */}
                            <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border border-primary/20 rounded-xl" />
                            <div className="absolute -z-20 -right-8 -bottom-8 w-full h-full border border-primary/10 rounded-xl" />

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
