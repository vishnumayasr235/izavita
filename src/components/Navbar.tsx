"use client";

import React, { useState, useEffect } from "react";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Training", href: "#edtech" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Technologies", href: "#technologies" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        
        
        
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          scrolled
            ? "py-2 sm:py-3 lg:py-4 bg-[#06121E]/85 backdrop-blur-md border-b border-white/5"
            : "py-3 sm:py-4 lg:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          {/* Logo Brand Symbol */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
            className="cursor-pointer"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-m tracking-widest text-white/70 hover:text-white uppercase font-medium transition-colors duration-300 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Call to Action button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="relative overflow-hidden group px-5 py-2.5 rounded border border-primary text-primary hover:text-white transition-all duration-300 flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase"
            >
              {/* Sliding background hover */}
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      
        {mobileMenuOpen && (
          <div
            
            
            
            
            className="fixed inset-0 bg-[#06121E] z-40 flex flex-col justify-center px-8 md:hidden"
          >
            {/* Architectural Grid background */}
            <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />

            <div className="flex flex-col space-y-6 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  
                  
                  
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-3xl font-bold font-display tracking-widest text-white hover:text-primary uppercase flex items-center justify-between border-b border-white/5 pb-2"
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 text-primary/50" />
                </a>
              ))}

              <a
                href="#contact"
                
                
                
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="mt-6 w-full text-center py-4 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center space-x-2"
              >
                <span>Connect with Academy</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      
    </>
  );
}
