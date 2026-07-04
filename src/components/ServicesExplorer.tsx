"use client";

import React, { useState } from "react";

import { Layers, HelpCircle, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface ServiceItem {
  name: string;
  code: string;
  deliverables: string[];
  stage: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  tabName: string;
  fileName: string;
  description: string;
  items: ServiceItem[];
}

const serviceData: ServiceCategory[] = [
  {
    id: "bim",
    tabName: "BIM & Modeling",
    fileName: "BIM_MODEL.DWG",
    description: "Advanced 3D modeling and information management solutions.",
    items: [
      {
        name: "BIM Design and Coordination",
        code: "BIM-LIFECYCLE",
        description: "Comprehensive BIM solutions for planning, design development, multidisciplinary coordination, clash detection and construction documentation.",
        deliverables: ["Architectural, Structural & MEP BIM Modeling", "Clash Detection and Coordination", "LOD 200–400 Models","Construction Documentation","Shop Drawings"],
        stage: "Planning & Management",
      },
      {
        name: "BIM Visualization & Project Delivery",
        code: "BIM-REVIT-MOD",
        description: "Advanced visualization and project support services that enhance decision-making, construction planning and project execution.",
        deliverables: ["3D Rendering & Visualization", "Walkthrough Animations", "Quantity Take-Off (QTO)","As-Built BIM Models"],
        stage: "Visualization & Delivery",
      },
    ],
  },
  {
    id: "mep",
    tabName: "MEP & Coordination",
    fileName: "MEP_COORD.DWG",
    description: "Systems engineering and federated clearance coordination.",
    items: [
      {
        name: "MEP Engineering Services",
        code: "MEP-ENG-DESIGN",
        description: "Mechanical, Electrical and Plumbing design solutions that improve building performance, sustainability and operational efficiency.",
        deliverables: ["HVAC Duct Coordination", "Electrical Cable Tray Routing", "Water & Fire Protection Sheets"],
        stage: "Systems Detailing",
      },
    ],
  },
  {
    id: "controls",
    tabName: "Construction Planning & Implementation",
    fileName: "PROJ_CONTROLS.DWG",
    description: "Time scheduling, material takeoffs and BOQ cost audits.",
    items: [
      {
        name: "Project Planning & Scheduling",
        code: "PLAN-SCHED-PRIM",
        description: "Professional project management services using Primavera for resource planning, scheduling, monitoring and execution.",
        deliverables: ["Work Breakdown Structure (WBS)", "Project Baseline Schedule", "Resource Planning & Allocation","Critical Path Method (CPM) Analysis","Progress Monitoring & Reporting"],
        stage: "Project Controls",
      },
      {
        name: "Quality Assurance & Quantity Surveying",
        code: "QS-QA-ESTIM",
        description: "Comprehensive quality control and quantity surveying services to ensure compliance, cost efficiency, and successful project delivery",
        deliverables: ["Quantity Take-Off (QTO)", "Bill of Quantities (BOQ) Preparation","Cost Estimation & Budgeting","Quality Inspection & Compliance", "Material Quantity Verification"],
        stage: "Cost Control & Compliance",
      },
    ],
  },
];

export default function ServicesExplorer() {
  const [activeTab, setActiveTab] = useState("bim");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    serviceData[0].items[0]
  );

  const activeCategory = serviceData.find((cat) => cat.id === activeTab) || serviceData[0];

  return (
    <section
      id="services"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 select-none relative"
    >
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              Engineering Services
            </h2>
          </div>
        </div>

        {/* CAD Tab Layout Panels */}
        <div className="flex border-b border-white/10 overflow-x-auto no-scrollbar mb-12">
          {serviceData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id);
                setSelectedService(category.items[0]);
              }}
              className={`flex items-center space-x-2.5 px-6 py-4 border-t border-x rounded-t-md text-xs tracking-wider uppercase font-semibold transition-all duration-300 mr-2 shrink-0 cursor-pointer ${activeTab === category.id
                ? "bg-white/5 border-white/10 text-primary border-t-2 border-t-primary shadow-sm"
                : "bg-white/[0.02] border-transparent text-white/60 hover:bg-white/5"
                }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{category.tabName}</span>
            </button>
          ))}
        </div>

        {/* Core Content Grid Split Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Interactive list board */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] tracking-widest font-mono text-white/40 mb-2 uppercase">
              Select Service Layer:
            </div>

            <div
              key={activeTab}




              className="space-y-4"
            >
              {activeCategory.items.map((service) => {
                const isSelected = selectedService?.code === service.code;
                return (
                  <button
                    key={service.code}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-6 rounded border transition-all duration-300 relative group overflow-hidden cursor-pointer ${isSelected
                      ? "bg-white/5 border-primary shadow-md"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                  >
                    {/* Blueprint Grid background on non-selected, fades on hover */}
                    <div className="absolute inset-0 blueprint-grid opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

                    {/* Selected side bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[4px] transition-transform duration-300 ${isSelected ? "bg-primary scale-y-100" : "bg-transparent scale-y-0"
                        }`}
                    />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono text-primary tracking-wider">
                        {service.code}
                      </span>
                      <span className="text-[9px] font-mono text-white/40">
                        {service.stage}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-display text-white flex items-center justify-between">
                      <span>{service.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-primary transition-transform duration-300 ${isSelected ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                          }`}
                      />
                    </h3>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right: Detailed expander CAD Board */}
          <div className="lg:col-span-7 bg-white/[0.02] rounded border border-white/10 p-8 relative shadow-sm overflow-hidden flex flex-col justify-between min-h-[420px]">

            {/* Blueprint Grid decorative layer */}
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />


            {selectedService ? (
              <div
                key={selectedService.code}




                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Header line detail */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6 font-mono text-[9px] text-white/45">
                    {/* <span>LAYER: {selectedService.code}</span> */}
                    {/* <span>SYSTEM READY</span>~ */}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                    {selectedService.name}
                  </h3>

                  <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                    {selectedService.description}
                  </p>

                  {/* Specifications grid splits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {/* Deliverables Column */}
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-primary font-bold mb-3 uppercase">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Core Deliverables</span>
                      </div>
                      <ul className="space-y-2">
                        {selectedService.deliverables.map((del, i) => (
                          <li key={i} className="text-xs text-white/80 font-medium flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Tools Column */}
                    
                  </div>
                </div>

                {/* Stage flow path footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50 mt-auto">
                  <span>Stage: {selectedService.stage}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-white/30 py-12">
                <HelpCircle className="w-8 h-8 mb-2" />
                <span className="text-xs font-mono">Select a service to view details</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
