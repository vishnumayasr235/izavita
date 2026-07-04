"use client";

import React, { useState } from "react";
import { CheckSquare, Square, Sliders, Database, ShieldAlert, Cpu } from "lucide-react";

// Icons used in dashboard

export default function BimShowcase() {
  const [explodeHeight, setExplodeHeight] = useState(0.4);
  const [layers, setLayers] = useState({
    architecture: true,
    structure: true,
    mep: true,
    coordination: true,
    documentation: true,
  });

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="bim"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 relative select-none"
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section HUD Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              BIM Innovation Showcase
            </h2>
          </div>
          
            
        </div>

        {/* Board Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Controls Dashboard */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-dark p-8 rounded border border-white/5">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-primary font-bold mb-6 uppercase pb-3 border-b border-white/5">
                <Sliders className="w-4 h-4" />
                <span>Explode Parameters</span>
              </div>

              {/* Slider Controller */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-white/60">LOD spacing (Explode factor)</span>
                  <span className="text-primary">{Math.round(explodeHeight * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={explodeHeight}
                  onChange={(e) => setExplodeHeight(parseFloat(e.target.value))}
                  className="w-full h-[3px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between font-mono text-[8px] text-white/30 mt-1">
                  <span>CONSOLIDATED (0.0)</span>
                  <span>ISOLATED_EXPLODED (1.0)</span>
                </div>
              </div>

              {/* Layer Selection Checklist */}
              <div className="space-y-3 mb-8">
                <div className="text-[10px] font-mono tracking-widest text-white/40 mb-3 uppercase">
                  Toggle Layer Visibility:
                </div>

                {/* Architecture Layer Toggle */}
                <button
                  onClick={() => toggleLayer("architecture")}
                  className="w-full flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200 text-left text-xs cursor-pointer"
                >
                  <span className="flex items-center space-x-2.5">
                    {layers.architecture ? (
                      <CheckSquare className="w-4 h-4 text-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-white/30" />
                    )}
                    <span className="font-semibold">Architectural Envelope</span>
                  </span>
                  <span className="font-mono text-[8.5px] text-white/40">L_ARCH</span>
                </button>

                {/* Structure Layer Toggle */}
                <button
                  onClick={() => toggleLayer("structure")}
                  className="w-full flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200 text-left text-xs cursor-pointer"
                >
                  <span className="flex items-center space-x-2.5">
                    {layers.structure ? (
                      <CheckSquare className="w-4 h-4 text-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-white/30" />
                    )}
                    <span className="font-semibold">Structural Columns &amp; Frame</span>
                  </span>
                  <span className="font-mono text-[8.5px] text-white/40">L_STRUCT</span>
                </button>

                {/* MEP Layer Toggle */}
                <button
                  onClick={() => toggleLayer("mep")}
                  className="w-full flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200 text-left text-xs cursor-pointer"
                >
                  <span className="flex items-center space-x-2.5">
                    {layers.mep ? (
                      <CheckSquare className="w-4 h-4 text-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-white/30" />
                    )}
                    <span className="font-semibold">Mechanical, Electrical, Plumbing</span>
                  </span>
                  <span className="font-mono text-[8.5px] text-white/40">L_MEP</span>
                </button>

                {/* Coordination Layer Toggle */}
                <button
                  onClick={() => toggleLayer("coordination")}
                  className="w-full flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200 text-left text-xs cursor-pointer"
                >
                  <span className="flex items-center space-x-2.5">
                    {layers.coordination ? (
                      <CheckSquare className="w-4 h-4 text-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-white/30" />
                    )}
                    <span className="font-semibold">Clash Coordination Matrix</span>
                  </span>
                </button>

                {/* Documentation Toggle */}
                <button
                  onClick={() => toggleLayer("documentation")}
                  className="w-full flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200 text-left text-xs cursor-pointer"
                >
                  <span className="flex items-center space-x-2.5">
                    {layers.documentation ? (
                      <CheckSquare className="w-4 h-4 text-primary" />
                    ) : (
                      <Square className="w-4 h-4 text-white/30" />
                    )}
                    <span className="font-semibold">Live Tag Documentation Overlay</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom mini analytics board */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-3 gap-2">
              <div className="bg-white/5 border border-white/5 rounded p-3 text-center">
                <Database className="w-3.5 h-3.5 text-primary mx-auto mb-1.5" />
                <div className="font-mono text-xs font-bold">LOD 400</div>
                <div className="text-[7.5px] text-white/40 tracking-wider uppercase mt-0.5">LOD standard</div>
              </div>
              <div className="bg-white/5 border border-white/5 rounded p-3 text-center">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500 mx-auto mb-1.5 animate-pulse" />
                <div className="font-mono text-xs font-bold">0 Clashes</div>
                <div className="text-[7.5px] text-white/40 tracking-wider uppercase mt-0.5">Consolidated</div>
              </div>
              <div className="bg-white/5 border border-white/5 rounded p-3 text-center">
                <Cpu className="w-3.5 h-3.5 text-primary mx-auto mb-1.5" />
                <div className="font-mono text-xs font-bold">14,204</div>
                <div className="text-[7.5px] text-white/40 tracking-wider uppercase mt-0.5">Objects</div>
              </div>
            </div>
          </div>

          {/* Right: Static BIM Viewport */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto rounded border border-white/10 relative overflow-hidden flex flex-col justify-between bg-cover bg-center min-h-[400px]" style={{ backgroundImage: "url('/images/secondimg.png')" }}>
            {/* Faint blueprint grid overlay */}
            <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent opacity-80" />
            
            {/* Visual badge representing active systems */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2 bg-black/60 border border-white/15 px-3 py-1.5 rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] tracking-wider text-white/90">
                BIM Coordinated Model (LOD 400)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
