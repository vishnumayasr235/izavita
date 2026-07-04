"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Compass, BarChart3, Settings } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const end = value;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentCount = Math.round(end * (1 - (1 - progress) * (1 - progress)));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [hasStarted, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl tracking-tight text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyIzaVeta() {
  const points = [
    {
      icon: GraduationCap,
      label: "Specialized Academy",
      statValue: 1200,
      statSuffix: "+",
      subText: "Professionals graduated & placed in BIM & project controls roles globally.",
    },
    {
      icon: Award,
      label: "Project-Based Learning",
      statValue: 100,
      statSuffix: "%",
      subText: "Curriculum centered on Revit, AutoCAD, SketchUp, MEP, Primavera and QS.",
    },
    {
      icon: Settings,
      label: "Expert Instructors",
      statValue: 15,
      statSuffix: "+ Yrs",
      subText: "Instruction driven by senior BIM managers, MEP coordinators and planning engineers.",
    },
    {
      icon: Compass,
      label: "Advanced Standards",
      statValue: 500,
      statSuffix: " LOD",
      subText: "Model verification matching ISO 19650 coordination and clash detection codes.",
    },
    {
      icon: BarChart3,
      label: "Placement Success",
      statValue: 98,
      statSuffix: "%",
      subText: "Employment success rate supported by project portfolio audits and mock interviews.",
    },
  ];

  return (
    <section
      id="why-izaveta"
      className="py-24 bg-white text-primary border-t border-primary/5 select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header HUD layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-mono text-secondary font-bold mb-3 uppercase block">
              [ THE CORE ADVANTAGES ]
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-primary">
              Why Partner with IzaVeta
            </h2>
          </div>
        </div>

        {/* Dynamic Metric Grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-surface p-6 rounded border border-primary/5 shadow-sm hover:border-secondary/35 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Blueprint lines on cards */}
                <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

                <div>
                  {/* Floating Icon details */}
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-primary/10 text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-4">
                    {item.label}
                  </h3>
                </div>

                <div>
                  <div className="mb-2">
                    <Counter value={item.statValue} suffix={item.statSuffix} />
                  </div>

                  <p className="text-[11px] text-primary/70 font-light leading-relaxed">
                    {item.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
