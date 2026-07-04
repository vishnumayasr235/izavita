"use client";

import React, { useState } from "react";

import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Facebook, Instagram } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "services_consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API pipeline delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "services_consultation", message: "" });
      }, 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#06121E] text-white border-t border-white/5 relative select-none"
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section HUD Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
              CONTACT US
            </h2>
          </div>


        </div>

        {/* Form and Canvas Layout splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Side: Contact Form glassmorphism card */}
          <div className="lg:col-span-5 glass-dark p-8 rounded border border-white/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />


            {!submitted ? (
              <form
                key="contact-form"
                onSubmit={handleSubmit}



                className="space-y-6 relative z-10"
              >
                <p className="text-xs text-white/60 leading-relaxed font-light mb-4">
                  Start your journey towards engineering excellence and digital transformation.
                </p>

                {/* Name Input */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-colors duration-200"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-colors duration-200"
                  />
                </div>

                {/* Subject Dropdown Select */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">
                    Services Required
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#06121E] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-colors duration-200 text-white [&>option]:bg-[#121212] [&>option]:text-white"
                  >
                    <option value="services_consultation">Engineering Services Consultation</option>
                    <option value="training_programs">Professional Training Programs</option>
                    <option value="bim_support">BIM Project Support</option>
                    <option value="career_guidance">Career Guidance</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase">
                    Enquiry details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your project scope, tool stack goals, or placement interests..."
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Action submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-blue-600 shadow cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div
                key="submitted"



                className="flex flex-col items-center justify-center py-20 text-center relative z-10"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-6 animate-bounce" />
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Submitted!
                </h3>
                <p className="text-xs text-white/60 max-w-xs leading-relaxed">
                  Our digital systems have compiled your data packet successfully. An engineer will sync with you within 24 hours.
                </p>
              </div>
            )}

          </div>

          {/* Center/Right Side: Three.js floating Orb viewport and contact cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

            {/* Static Image Map/Background Viewport */}
            <div className="h-[280px] lg:h-full rounded border border-white/10 relative overflow-hidden flex flex-col justify-between bg-cover bg-center min-h-[300px]" style={{ backgroundImage: "url('/images/commercial.png')" }}>

              {/* Faint blueprint grid overlay */}
              <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
              <div className="absolute inset-0 bg-[#06121E]/60 pointer-events-none" />

              {/* Coordinates overlay stats */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0 bg-[#06121E]/85 border border-white/10 p-4 rounded backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-[10px] font-mono leading-relaxed text-white/80">
                    <div className="font-bold">IZAVITA INFRATECH LLP</div>
                    <div>IzaVita Infratech LLP, 2nd floor, K C Arcade</div>
                    <div>Thuthiyoor Rd, CSEZ P O, Kerala - 682037</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 font-mono text-[9px] text-white/50 text-left sm:text-right">
                  <div className="flex items-center space-x-1.5 justify-start sm:justify-end">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>info@izavitainfratech.com</span>
                  </div>
                  <div className="flex items-center space-x-1.5 justify-start sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>+91-80899 15277</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles bar */}
            <div className="glass-dark border border-white/5 rounded p-4 flex items-center justify-between">
              <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">
                Secure Social Nodes
              </span>
              <div className="flex space-x-3">
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

          </div>

        </div>

      </div>
    </section>
  );
}
