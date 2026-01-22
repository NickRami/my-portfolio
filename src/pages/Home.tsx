import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useApp } from "../context/AppContext";

export default function Home() {
  const { t } = useApp();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden relative transition-colors duration-300">
      {/* Mouse Follower Gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mouse-follower"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 185, 242, 0.05), transparent 40%)`
        }}
      />

      <Navbar />
      <Hero />

      {/* Unified Journey Section */}
      <section id="skills" className="section-padding relative overflow-hidden">
        {/* Subtle Background Glow for this section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container-responsive">
          <div className="mb-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-xs uppercase tracking-[0.3em]">
                <span className="w-8 h-px bg-primary/30"></span>
                Professional Roadmap
              </div>
              <h2 className="text-foreground text-fluid-h2 font-black leading-[1.1] tracking-tight">
                {t('home.journey.title')}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-normal max-w-3xl leading-relaxed mx-auto md:mx-0">
                {t('home.journey.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-12 xl:col-span-5 order-2 xl:order-1">
              <Experience />
            </div>
            <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
              <Skills />
            </div>
          </div>
        </div>
      </section>

      <About />
      <ProjectsPreview />
      <Contact />

      <Footer />
    </main>
  );
}
