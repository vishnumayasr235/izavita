"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

// Hero background images
const BG_IMAGES = [
  "/images/building.png",
  "/images/commercial.png",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[#06121E] py-20 sm:py-28">

      {/* ---- LAYER 1: Scrollable Background Images ---- */}
      <div className="absolute inset-0 z-0">
        <div
          key={bgIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: `url('${BG_IMAGES[bgIndex]}')` }}
        />

        {/* Dark overlay so text remains highly legible */}
        <div className="absolute inset-0 bg-[#06121E]/65" />

        {/* Faint blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
      </div>

      {/* ---- LAYER 3: Image nav dots ---- */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            aria-label={`Background image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === bgIndex
              ? "w-5 h-1.5 bg-primary"
              : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center mt-10 sm:mt-12">
        {/* Visual Badge */}
        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/5 border border-white/10 px-4 sm:px-5 py-2 rounded-full mb-7 sm:mb-10">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] font-mono text-white/85 uppercase">
            INNOVATE • DESIGN • BUILD
          </span>
        </div>

        {/* Main Header Title with letter reveal */}
        <h1 className="text-[2.65rem] sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-[1.08] sm:leading-tight mb-7 sm:mb-8 max-w-4xl mx-auto overflow-hidden">
          <span className="block text-white break-words">
            BUILD SMARTER WITH BIM
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-sky-200 break-words">
            ENGINEERING SOLUTIONS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-9 sm:mb-12 lg:mb-14">
          Providing End-to-End BIM engineering project services, complemented by industry-aligned professional training across leading AEC technologies.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
          <button
            onClick={() => handleScrollTo("#services")}
            className="w-full sm:w-auto relative group px-6 sm:px-10 py-4 sm:py-5 bg-primary text-white font-semibold text-xs sm:text-sm tracking-widest uppercase rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2 sm:space-x-3 cursor-pointer shadow-lg shadow-primary/20"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => handleScrollTo("#edtech")}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white/5 border border-white/10 hover:border-primary/40 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase rounded transition-colors duration-300 flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-white/10 cursor-pointer"
          >
            <span>Explore Training Programs</span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
          </button>
        </div>
      </div>

      {/* Down Chevron Scrolling Prompt */}
      <button
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40 hover:text-white transition-colors duration-300 z-20 cursor-pointer"
      >
        <span className="text-[9px] tracking-[0.25em] font-mono uppercase">Scroll To Begin</span>
        <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
      </button>
    </section>
  );
}
