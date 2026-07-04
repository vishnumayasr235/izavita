"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUp, Facebook, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.5 0 4.7-.9 6.4-2.4l-1.4-1.4c-1.4 1.2-3.1 1.8-5 1.8-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8v1c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4c1.2 0 2.2-.6 2.8-1.5.6.9 1.7 1.5 2.8 1.5 2.2 0 4-1.8 4-4v-1c0-5.5-4.5-10-10-10zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <footer className="bg-[#06121E] text-white pt-20 pb-10 border-t border-white/5 relative select-none">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />

      {/* Blueprint outline frame line around footer */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-white/5 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">

          {/* Logo & description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}>
              <Logo />
            </a>

            <div className="font-mono text-[9px] text-[#00A5EC] font-bold tracking-widest">
              INNOVATE • DESIGN • BUILD
            </div>

            <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
              Premium Engineering and BIM coordination firm specializing in Building Information Modeling (BIM), Design Engineering solutions and Project Controls planning.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/izavita_infratech?igsh=bG1mODZraXBnNG1y"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-white/80 transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/14eJ2H8fWL1/?mibextid=wwXIfr"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-white/80 transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/izavita-infratech-llp"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-white/80 transition-colors duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest text-primary font-bold uppercase pb-2 border-b border-white/5">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-white transition-colors">
                  BIM Modeling Lifecycle
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-white transition-colors">
                  Autodesk Revit Modeling
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-white transition-colors">
                  MEP Engineering Design
                </a>
              </li>
            </ul>
          </div>

          {/* EdTech Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest text-primary font-bold uppercase pb-2 border-b border-white/5">
              Professional Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#edtech" onClick={(e) => handleLinkClick(e, "#edtech")} className="hover:text-white transition-colors">
                  BIM Professional Program
                </a>
              </li>
              <li>
                <a href="#edtech" onClick={(e) => handleLinkClick(e, "#edtech")} className="hover:text-white transition-colors">
                  Autodesk Revit Certification
                </a>
              </li>
              <li>
                <a href="#edtech" onClick={(e) => handleLinkClick(e, "#edtech")} className="hover:text-white transition-colors">
                  Primavera Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Location / Contacts */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest text-primary font-bold uppercase pb-2 border-b border-white/5">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs text-white/60">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light text-white/60">
                  <span className="font-bold text-white block">IZAVITA INFRATECH LLP</span>
                  2nd floor, K C Arcade, Thuthiyoor Rd, CSEZ P O, Kerala - 682037
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="font-light">info@izavitainfratech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="font-light">+91 80899 15277</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 font-mono text-[9px] text-white/40">
          <div>
            <span>© {new Date().getFullYear()} IZAVITA INFRATECH. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex space-x-6">
            <span></span>
            <span></span>
          </div>

          {/* Return to top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
