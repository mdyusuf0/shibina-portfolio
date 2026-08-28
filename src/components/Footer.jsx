import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#FBFBFD] border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></span>
            <span className="text-slate-900 font-extrabold text-lg tracking-tight">
              {personalInfo.brandName}
            </span>
          </div>
          <p className="text-slate-500 text-xs font-medium">
            Web Developer & Software Engineer | Dubai, UAE
          </p>
          <p className="text-slate-400 text-[11px] mt-2">
            © {new Date().getFullYear()} Shibina S. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-slate-600">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-purple-600 transition-colors">Certificates</a>
          <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LinkedIn ↗</a>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full glass-panel hover:bg-white text-slate-800 transition-all shadow-md gemini-edge-glow cursor-pointer"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
};

export default Footer;
