import React from "react";
import Image from "next/image";

import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

interface TrainingProgram {
  name: string;
  focus: string;
  tools: string;
  logo: string;
}

const trainingPrograms: TrainingProgram[] = [
  {
    name: "AutoCAD 2D Drafting",
    focus: "Construction drawings and technical documentation.",
    tools: "Autodesk AutoCAD",
    logo: "/course-logos/autocad.png",
  },
  {
    name: "SketchUp 3D Modeling",
    focus: "Architectural modeling and concept visualization.",
    tools: "SketchUp",
    logo: "/course-logos/sketchup.png",
  },
  {
    name: "Autodesk Revit BIM",
    focus: "BIM modeling for Architecture, Structure and MEP.",
    tools: "Revit",
    logo: "/course-logos/revit.png",
  },
  {
    name: "Navisworks Manage",
    focus: "Clash detection, model coordination and review.",
    tools: "Navisworks",
    logo: "/course-logos/navisworks.png",
  },
  {
    name: "Primavera P6",
    focus: "Planning, scheduling and project controls.",
    tools: "Oracle Primavera",
    logo: "/course-logos/primavera.png",
  },
  {
    name: "3ds Max",
    focus: "Advanced visualization, renders and walkthroughs.",
    tools: "3ds Max, Lumion",
    logo: "/course-logos/3dsmax.png",
  },
];

const highlights = [
  "Industry-oriented curriculum",
  "Hands-on live projects",
  "Expert mentors",
  "Placement assistance",
];

const highlightIcons = [CheckCircle2, CheckCircle2, Award, BriefcaseBusiness];

export default function EdTechPathway() {
  return (
    <section
      id="edtech"
      className="relative border-t border-white/5 bg-[#06121E] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            Professional Training Programs
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Industry-Oriented Courses
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Develop practical skills in BIM, CAD, construction planning and architectural visualization through focused,
            project-based training.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrograms.map((program) => (
            <article
              key={program.name}
              className="group rounded border border-white/10 bg-white/[0.035] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.055]"
            >
              <div className="mb-4 flex items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-white/10 bg-white p-2">
                  <Image
                    src={program.logo}
                    alt={`${program.name} logo`}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-white">{program.name}</h3>
              <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/70">{program.focus}</p>

              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/55">
                <span className="font-semibold text-white/80">Tools:</span> {program.tools}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 rounded border border-white/10 bg-white/[0.025] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const HighlightIcon = highlightIcons[index];

            return (
              <div key={highlight} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#00C6FF]/25 bg-[#00C6FF]/10 text-[#00C6FF]">
                  <HighlightIcon className="h-4 w-4" />
                </span>
                <span>{highlight}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
