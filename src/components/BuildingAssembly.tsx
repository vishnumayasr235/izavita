"use client";

import React, { useState } from "react";

import {
  LayoutGrid,
  Hammer,
  Maximize,
  CheckCircle,
  ChevronRight,
  Activity,
} from "lucide-react";

const stages = [
  {
    num: "01",
    tag: "",
    title: "Drafting & 3D Modeling",
    subtitle: "Tools: AutoCAD | SketchUp",
    desc: "Create accurate 2D drawings and basic 3D models.",
    stat: { label: "Tools Used", value: "AutoCAD & SketchUp" },
    image: "/images/bim.png",
    icon: LayoutGrid,
    accent: "#00A5EC",
  },
  {
    num: "02",
    tag: "",
    title: "BIM Modeling",
    subtitle: "Tools: Revit",
    desc: "Develop architectural, structural and MEP & BIM models.",    stat: { label: "Standard Level", value: "LOD 350 / 400" },
    image: "/images/firstimg.png",
    icon: Hammer,
    accent: "#00C6FF",
  },
  {
    num: "03",
    tag: "",
    title: "Coordination & Planning",
    subtitle: "Tools: Navisworks | Primavera P6",
    desc: "Perform clash detection and construction planning.",
    stat: { label: "Design Type", value: "Revit MEP Coordinated" },
    image: "/images/secondimg.png",
    icon: Maximize,
    accent: "#10b981",
  },
  {
    num: "04",
    tag: "",
    title: "Quantity & Visualization",
    subtitle: "Tools: Revit | Lumion | 3ds Max",
    desc: "Generate BOQs, cost estimates, and realistic project visualizations.",
    stat: { label: "Project Controls", value: "Industry-standard professional terms" },
    image: "/images/building.png",
    icon: CheckCircle,
    accent: "#00A5EC",
  },
];

export default function BuildingAssembly() {
  const [activeStage, setActiveStage] = useState(0);

  const stage = stages[activeStage];
  const Icon = stage.icon;

  return (
    <section
      id="digital-twin-assembly"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header HUD layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              BIM Work Flow &amp; 3D Modeling
            </h2>
          </div>


        </div>

        {/* CAD Dashboard Layout Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Interactive pipeline tracker */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] tracking-widest font-mono text-white/40 mb-2 uppercase">
              Select Assembly Phase:
            </div>

            <div className="space-y-4">
              {stages.map((s, idx) => {
                const isSelected = idx === activeStage;
                const StageIcon = s.icon;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left p-5 rounded border transition-all duration-300 relative group overflow-hidden cursor-pointer ${isSelected
                        ? "bg-white/5 border-primary shadow-md"
                        : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                  >
                    {/* Selected border glow line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[4px] transition-transform duration-300 ${isSelected ? "bg-primary scale-y-100" : "bg-transparent scale-y-0"
                        }`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-bold text-white/35 group-hover:text-primary transition-colors">
                          {s.num}
                        </span>
                        <div>
                          <span className="text-[9px] font-mono text-white/40 block mb-0.5 tracking-wider">
                            {s.tag}
                          </span>
                          <h3 className="text-sm font-bold font-display text-white">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-primary transition-transform duration-300 ${isSelected ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                          }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Stage Detail Showcase Panel */}
          <div className="lg:col-span-7 bg-white/[0.02] rounded border border-white/10 p-8 relative shadow-sm overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Visual background image with blending */}
            <div className="absolute inset-0 z-0 bg-[#06121E]">

              <div
                key={activeStage}




                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${stage.image}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/80 to-[#06121E]/30" />
            </div>

            {/* Blueprint Grid decorative layer */}
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />


            <div
              key={activeStage}




              className="relative z-10 flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6 text-xs text-white/50">
                  <span>Stage 0{stage.num}</span>
                </div>

                {/* Icon and tag */}
                <div className="flex items-center space-x-2.5 mb-4">
                  <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] font-bold text-primary uppercase">
                    {stage.tag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs font-semibold text-[#00C6FF] font-mono mb-4 uppercase tracking-wide">
                  {stage.subtitle}
                </p>

                <p className="text-sm text-white/70 font-light leading-relaxed max-w-xl mb-8">
                  {stage.desc}
                </p>
              </div>

              {/* Footer specs pill */}
              <div className="pt-6 border-t border-white/5 mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <div className="bg-white/5 border border-white/10 rounded px-4 py-2 font-mono">
                  <div className="text-[8px] text-white/40 tracking-widest uppercase mb-0.5">
                    {stage.stat.label}
                  </div>
                  <div className="text-xs font-bold text-primary">
                    {stage.stat.value}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
