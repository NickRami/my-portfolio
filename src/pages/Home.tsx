import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-24">
        {/* Unified Journey Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Unified Career & Tech Journey
            </h1>
            <p className="text-muted-foreground text-lg font-normal max-w-2xl">
              A deep dive into my professional milestones and technical proficiency mapped through a timeline of continuous growth.
            </p>
          </motion.div>
        </div>

        {/* Experience & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <Experience />
          </div>
          <div className="lg:col-span-7">
            <Skills />
          </div>
        </div>

        <About />
        <ProjectsPreview />
        <Contact />
      </div>
    </main>
  );
}
