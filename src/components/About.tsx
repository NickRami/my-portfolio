import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

export default function About() {
    const { t } = useApp();

    return (
        <section id="about" className="py-20 bg-secondary">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >

                    <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-foreground">{t('about.title')}</h3>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
