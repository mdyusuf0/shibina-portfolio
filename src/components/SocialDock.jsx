import React from 'react';
import { socialLinks, personalInfo } from '../data/portfolioData';

const SocialDock = () => {
  return (
    <>
      {/* Desktop Floating Dock */}
      <div 
        className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-40 glass-panel p-3.5 rounded-full shadow-lg items-center gemini-edge-glow"
      >
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 text-slate-700 hover:text-purple-600 transition-all transform hover:scale-125"
          aria-label="LinkedIn"
          title="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        <a 
          href={`mailto:${socialLinks.email}`}
          className="p-2 text-slate-700 hover:text-pink-600 transition-all transform hover:scale-125"
          aria-label="Email"
          title="Send Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        <a 
          href={`tel:${socialLinks.phone}`}
          className="p-2 text-slate-700 hover:text-blue-600 transition-all transform hover:scale-125"
          aria-label="Phone"
          title="Call Phone"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        <a 
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-700 hover:text-emerald-600 transition-all transform hover:scale-125"
          aria-label="Resume"
          title="View Resume PDF"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default SocialDock;
