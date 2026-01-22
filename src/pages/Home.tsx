import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsPreview from "../components/ProjectsPreview";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden relative transition-colors duration-300">
      {/* Mouse Follower Gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mouse-follower"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.05), transparent 40%)`
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <ProjectsPreview />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
