"use client";

import React, { useEffect, useState, useRef } from "react";

import { GraduationCap, Users, Briefcase, Compass, Cpu, Settings, Award, BarChart3, Shield } from "lucide-react";

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
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [

    {
      icon: Briefcase,
      label: "Project Delivery",
      statValue: 100,
      statSuffix: "%",
      subText: "Deliveryiing practical engineering and construction solutions.",
    },
    {
      icon: Award,
      label: "Industy Expertise",
      statValue: 2,
      statSuffix: "+ Yrs",
      subText: "Skilled professionals delivering engineering excellence",
    },
    {
      icon: Shield,
      label: "BIM Compliance",
      statValue: 500,
      statSuffix: " LOD",
      subText: "Modeling validation standards checked.",
    },
    {
      icon: BarChart3,
      label: "ISO Certification",
      statValue: 19650,
      statSuffix: "",
      subText: "Adhering to international BIM standards for project delivery.",
    },
  ];

  const reasons = [
    {
      icon: GraduationCap,
      title: "Engineering Excellence",
      desc: "Experienced professionals delivering accurate, efficient and scalable engineering solutions.",
    },
    {
      icon: Users,
      title: "End-to-End Project Delivery",
      desc: "From design and BIM modeling to coordination, documentation and construction support.",
    },
    {
      icon: Briefcase,
      title: "BIM and Digital Engineering Services",
      desc: "Advanced BIM solutions for planning, clash detection, visualization and asset management.",
    },
    {
      icon: Compass,
      title: "Quality and Compliance Assurance",
      desc: "Deliverables aligned with international BIM standards and project requirements.",
    },
    {
      icon: Cpu,
      title: "Technology Driven Solutions",
      desc: "Using Revit, Navisworks, AutoCAD, SketchUp, Lumion, Primavera and 3ds Max for efficient project execution.",
    },
    {
      icon: Settings,
      title: "Client Centric Approach",
      desc: "Transparent communication, timely delivery and solutions tailored to every client's needs.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header HUD layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              Why Choose IzaVita Infratech
            </h2>
          </div>


        </div>

        {/* Dynamic Metric Grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass p-6 rounded border border-white/5 shadow-sm hover:border-primary/45 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

                <div>
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">
                    {item.label}
                  </h3>
                </div>

                <div>
                  <div className="mb-2">
                    <Counter value={item.statValue} suffix={item.statSuffix} />
                  </div>

                  <p className="text-[11px] text-white/60 font-light leading-relaxed">
                    {item.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}




                className="glass p-8 rounded border border-white/5 hover:border-primary/30 -all duration-300 group relative"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 rounded-l" />
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-display text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
