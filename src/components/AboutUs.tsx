"use client";

import React from "react";

import { Target, Compass, Award } from "lucide-react";

export default function AboutUs() {
  const highlights = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To transform the AEC industry by providing world-class BIM engineering, construction services, and practical training that drive quality, innovation and digital excellence.",
    },
    {
      icon: Compass,
      title: "Industry Aligned",
      desc: "Our services and training are built around the latest industry practices, international BIM standards, and modern construction workflows, preparing businesses and professionals for real-world project success.",
    },
    {
      icon: Award,
      title: "Global Standards",
      desc: "Our engineering services and training are aligned with global BIM standards and modern construction practices, ensuring consistency, quality and project excellence.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 relative overflow-hidden select-none"
    >
      {/* Decorative blueprint grids */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HUD Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              About IzaVita Infratech
            </h2>
          </div>


        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div




              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold font-display text-primary leading-snug">
                Transforming the Architecture, Engineering &amp; Construction (AEC) Ecosystem
              </h3>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                IzaVita Infratech is a technology-driven Engineering and BIM Solutions organization dedicated to transforming the construction and infrastructure industry through Building Information Modeling (BIM), digital engineering solutions and professional project coordination.
              </p>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                We streamline complex project lifecycles by providing high-quality digital design, Revit modeling, MEP coordination, Primavera P6 scheduling and Quantity Surveying validation services.
              </p>

              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                Our mission is to empower developers, consultants and contractors globally with clash-free building models and reliable project control systems.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 font-mono">
              <div className="p-4 bg-white/5 border border-white/5 rounded">
                <div className="text-lg md:text-2xl font-bold text-primary">LOD 500</div>
                <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1">Modeling Depth</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded">
                <div className="text-lg md:text-2xl font-bold text-primary">ISO 19650</div>
                <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1">BIM Compliance</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded">
                <div className="text-lg md:text-2xl font-bold text-primary">100%</div>
                <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1">Project Support</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}




                  className="glass p-6 rounded-lg border border-white/10 hover:border-primary/50 -all duration-300 relative group"
                >
                  {/* Decorative glowing border highlight */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 rounded-l-lg" />

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-white mb-2 uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/60 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Leadership Section */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <h4 className="text-[20px] font-mono tracking-widest text-[#00A5EC] font-bold uppercase mb-8">
            Leadership &amp; Governance
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 rounded-l" />
              <div className="font-mono text-[15px] text-[#00A5EC] font-bold tracking-widest mb-1 uppercase">
                Founder &amp; CEO
              </div>
              <h5 className="text-xl font-bold font-display text-white">
                Vishnumaya S R
              </h5>
            </div>
            <div className="glass p-6 rounded border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 rounded-l" />
              <div className="font-mono text-[15px] text-[#00A5EC] font-bold tracking-widest mb-1 uppercase">
                Chairman
              </div>
              <h5 className="text-xl font-bold font-display text-white">
                Rajeev Natarajan
              </h5>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
