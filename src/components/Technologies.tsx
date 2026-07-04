"use client";

import React from "react";
import Image from "next/image";

import {
  Layers,
  SquarePen,
  Building,
  Box,
  Camera,
  Sparkles,
  CalendarRange,
  Cpu,
  Calculator,
} from "lucide-react";
interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  logo?: string;
  logoSize?: "default" | "large";
  desc: string;
  code: string;
}

export default function Technologies() {
  const techs: TechItem[] = [
    {
      name: "BIM",
      icon: Layers,
      logo: "/course-logos/bim.png",
      desc: "Building Information Modeling lifecycle standards & coordination.",
      code: "ISO_19650",
    },
    {
      name: "AutoCAD",
      icon: SquarePen,
      logo: "/course-logos/autocad.png",
      desc: "Precision 2D engineering drafting, layouts & shop detailing.",
      code: "CAD_2D",
    },
    {
      name: "Autodesk Revit",
      icon: Building,
      logo: "/course-logos/revit.png",
      desc: "Parametric architectural, structural & MEP modeling suite.",
      code: "LOD_400",
    },
    {
      name: "SketchUp",
      icon: Box,
      logo: "/course-logos/sketchup.png",
      desc: "Conceptual 3D design, rapid massing & spatial modeling.",
      code: "CONCEPT_3D",
    },
    {
      name: "Lumion",
      icon: Camera,
      logo: "/course-logos/lumion.png",
      desc: "Real-time cinematic rendering & presentation walkthroughs.",
      code: "RENDER_RT",
    },
    {
      name: "Autodesk 3ds Max",
      icon: Sparkles,
      logo: "/course-logos/3dsmax.png",
      desc: "High-fidelity rendering, advanced materials & animations.",
      code: "VIZ_HIGH",
    },

    {
      name: "Primavera",
      icon: CalendarRange,
      logo: "/course-logos/primavera.png",
      desc: "Critical path scheduling, budgeting & resource logistics.",
      code: "PRIM_P6",
    },
    {
      name: "MEP",
      icon: Cpu,
      logo: "/course-logos/mep.png",
      logoSize: "large",
      desc: "HVAC routing, electrical tray layouts & piping systems.",
      code: "MEP_ENG",
    },
    {
      name: "QA & QS",
      icon: Calculator,
      logo: "/course-logos/qaqs.png",
      logoSize: "large",
      desc: "Quality audits, quantity takeoff sheets & BOQ estimation.",
      code: "COST_QS",
    },
  ];

  return (
    <section
      id="technologies"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 relative overflow-hidden select-none"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              Core Technologies We Deploy
            </h2>
          </div>
          
            
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            const isLargeLogo = tech.logoSize === "large";
            
            return (
              <div
                key={idx}
                className="glass p-5 rounded border border-white/5 relative group hover:border-primary hover:shadow-[0_0_20px_rgba(0,123,255,0.25)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Glowing border glow animation details */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Faint card grid inside */}
                <div className="absolute inset-0 blueprint-grid opacity-[0.02]" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`${tech.logo ? `bg-white ${isLargeLogo ? "p-1.5" : "p-2"}` : "bg-white/5 text-primary group-hover:bg-primary group-hover:text-white"} ${isLargeLogo ? "w-12 h-12" : "w-10 h-10"} rounded border border-white/10 flex items-center justify-center mb-4 transition-all duration-300`}>
                    {tech.logo ? (
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={isLargeLogo ? 40 : 28}
                        height={isLargeLogo ? 40 : 28}
                        className={`${isLargeLogo ? "h-10 w-10" : "h-7 w-7"} object-contain transition-transform duration-300 group-hover:scale-110`}
                      />
                    ) : (
                      <Icon className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold font-display text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  
                  <p className="text-[11px] text-white/60 font-light leading-relaxed mb-4">
                    {tech.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-white/30">
                  <span>{tech.code}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-primary transition-opacity font-bold">LIVE_SYNC</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
