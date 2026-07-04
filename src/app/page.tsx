"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ServicesExplorer from "@/components/ServicesExplorer";
import EdTechPathway from "@/components/EdTechPathway";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const BuildingAssembly = dynamic(() => import("@/components/BuildingAssembly"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(false);

  // Structured Data schemas for SEO
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IzaVita Infratech",
    "url": "https://izavitainfratech.com",
    "logo": "https://izavitainfratech.com/images/LOGO ICON.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80899 15277",
      "contactType": "Customer Relations"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IzaVita Infratech",
    "image": "https://izavitainfratech.com/images/commercial.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "IzaVita Infratech LLP, 2nd floor, K C Arcade, Thuthiyoor Rd, CSEZ P O",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682037",
      "addressCountry": "IN"
    },
    "telephone": "+91-80899 15277",
    "url": "https://izavitainfratech.com"
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "BIM Professional Program",
          "description": "Master Building Information Modeling workflows, project coordination and collaborative engineering practices.",
          "provider": {
            "@type": "Organization",
            "name": "IzaVita Infratech",
            "sameAs": "https://izavitainfratech.com"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Autodesk Revit Certification Program",
          "description": "Develop expertise in Architectural, Structural and MEP Revit modeling with real-world project implementation.",
          "provider": {
            "@type": "Organization",
            "name": "IzaVita Infratech",
            "sameAs": "https://izavitainfratech.com"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "Primavera Project Management",
          "description": "Gain practical knowledge in project planning, scheduling, monitoring, budgeting and resource management.",
          "provider": {
            "@type": "Organization",
            "name": "IzaVita Infratech",
            "sameAs": "https://izavitainfratech.com"
          }
        }
      }
    ]
  };

  return (
    <>
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Main App Container */}
      <div className="flex flex-col min-h-screen bg-[#06121E] text-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AboutUs />
          <ServicesExplorer />
          <EdTechPathway />
          <BuildingAssembly />
          <WhyChooseUs />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
