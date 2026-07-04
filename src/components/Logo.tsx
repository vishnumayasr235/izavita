"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center group ${className}`}>
      {/* Visual Image Logo (New cropped SVG) */}
      <img
        src="/images/IZAVETA%20LOGO%20crt.svg"
        alt="IzaVita Infratech Logo"
        className="h-16 w-auto select-none pointer-events-none object-contain transition-transform duration-500 group-hover:scale-105 sm:h-20 md:h-24 lg:h-28"
      />
    </div>
  );
}
