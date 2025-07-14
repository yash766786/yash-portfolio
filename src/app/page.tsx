import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About />
      <Skills />
    </main>
  );
}