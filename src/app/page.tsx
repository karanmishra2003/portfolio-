"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Skills from "@/app/components/Skills"
import Experience from "@/app/components/Experience"
import Projects from "@/app/components/Projects"
import Education from "@/app/components/Education"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import AnimatedBackground from "@/components/AnimatedBackground"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="relative">
          {/* Animated loader */}
          <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 border-4 border-cyan-500/30 border-b-cyan-500 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
          <div className="absolute inset-2 w-16 h-16 border-4 border-pink-500/30 border-l-pink-500 rounded-full animate-spin" style={{ animationDuration: "2s" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden cursor-none">
      {/* Custom cursor - hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      {/* Animated particle background */}
      <AnimatedBackground />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      <main className="relative z-10">
        <Navbar/>
        <section id="hero">
          <Hero/>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
