"use client";

import React, { useState } from "react";

import { ArrowUpRight, CheckCircle } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  heading: string;
  focus: string;
  description: string;
  outcomes: string[];
}

const milestones: Milestone[] = [
  {
    id: "learn",
    title: "01 / LEARN",
    heading: "Acquire BIM & MEP Modeling",
    focus: "AutoCAD precision drafting & Revit parametric modeling",
    description: "Begin with 2D drafting in AutoCAD and 3D massing in SketchUp. Progress to modeling structural, architectural and mechanical-electrical-plumbing (MEP) families in Revit.",
    outcomes: ["Revit & CAD Modeling", "LOD Standard Definitions", "MEP Systems Design Basics"],
  },
  {
    id: "lead",
    title: "02 / LEAD",
    heading: "Project Controls & Estimating",
    focus: "Primavera P6 schedules & Quantity Surveying",
    description: "Establish critical path scheduling and resource leveling in Primavera P6. Audit structural takeoffs, carry out rate analysis and generate Bills of Quantities (BOQ).",
    outcomes: ["Primavera Gantt Planning", "Quantity Takeoffs & Cost Control", "Scheduling & BOQ Management"],
  },
  {
    id: "innovate",
    title: "03 / INNOVATE",
    heading: "BIM Management & Protocols",
    focus: "ISO 19650 compliance & Common Data Environment",
    description: "Advance into BIM Execution Plans (BEP), information management standards, quality assurance scripts and configuring Common Data Environments (CDE).",
    outcomes: ["BIM Standards ISO 19650", "BEP Design Protocols", "Model QA Check Pipelines"],
  },
];

export default function CareersSection() {
  const [activeId, setActiveId] = useState("learn");
  const activeMilestone = milestones.find((m) => m.id === activeId) || milestones[0];

  return (
    <section
      id="careers"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header HUD Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              Build Infrastructure. Build Your Career.
            </h2>
          </div>


        </div>

        {/* Board Main Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: Milestones Timeline selection */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-[10px] tracking-widest font-mono text-white/40 mb-2 uppercase">
                Career Roadmap Milestones:
              </div>
              {milestones.map((m) => {
                const isActive = activeId === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveId(m.id)}
                    className={`w-full text-left p-4 rounded border transition-all duration-300 relative overflow-hidden cursor-pointer ${isActive
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:border-white/20"
                      }`}
                  >
                    <span className="font-mono text-[9px] block text-[#00C6FF] mb-1">{m.title}</span>
                    <span className="font-bold font-display text-sm block">{m.heading}</span>
                  </button>
                );
              })}
            </div>

            {/* Resume mailto trigger */}
            <div className="pt-6 border-t border-white/5">
              <a
                href="mailto:careers@izavitainfratech.com?subject=Application for Career Opportunity - IzaVita Infratech"
                className="w-full text-center py-4 bg-primary text-white font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center space-x-2 shadow hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <span>Submit Portfolio &amp; CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="block text-center text-[9px] font-mono text-white/40 mt-2">
                Accepted: PDF format, Max size 10MB
              </span>
            </div>
          </div>

          {/* Right: Milestone Details Board */}
          <div className="lg:col-span-8 bg-white/[0.02] rounded border border-white/10 p-8 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />


            <div
              key={activeMilestone.id}




              className="relative z-10 flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-6 text-xs text-white/50">
                  <span>Milestone: {activeMilestone.id.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {activeMilestone.heading}
                </h3>

                <span className="text-xs text-primary font-medium tracking-wide block mb-6">
                  {activeMilestone.focus}
                </span>

                <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                  {activeMilestone.description}
                </p>

                {/* Open Positions/Skills Checklist */}
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase mb-3">
                    Target Learning Outcomes:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeMilestone.outcomes.map((out, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-xs text-white font-medium">
                        <CheckCircle className="w-4 h-4 text-[#00C6FF] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
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
