import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';

// Map official tech brand logos & custom badge themes for authentic presentation
const getSkillBrand = (name) => {
  const n = name.toLowerCase();

  if (n.includes('html') || n.includes('css')) {
    return {
      bgGradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      borderColor: 'group-hover:border-orange-500/40',
      badgeBg: 'bg-orange-50 text-orange-600 border-orange-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm15.748 6.262H6.942l.27 3.023h9.764l-.535 6.002-4.471 1.246-4.471-1.246-.304-3.411H4.137l.557 6.273 7.276 2.023 7.276-2.023 1.01-11.887H17.248z"/>
        </svg>
      )
    };
  }

  if (n.includes('wordpress') || n.includes('woocommerce')) {
    return {
      bgGradient: 'from-sky-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-sky-500/40',
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#21759B" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.8A10.8 10.8 0 0 1 1.2 12c0-1.892.49-3.67 1.35-5.22L8.2 19.98a10.74 10.74 0 0 1-5.65-7.98z"/>
          <path fill="#FFF" d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/>
        </svg>
      )
    };
  }

  if (n.includes('javascript') || n.includes('react')) {
    return {
      bgGradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      badgeBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <g fill="none" stroke="#61DAFB" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="10" ry="4.2"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
            <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          </g>
        </svg>
      )
    };
  }

  if (n.includes('elementor') || n.includes('blocksy')) {
    return {
      bgGradient: 'from-pink-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-pink-500/40',
      badgeBg: 'bg-pink-50 text-pink-600 border-pink-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="6" fill="#92003B"/>
          <path fill="#FFF" d="M6 6h3v12H6zm6 0h6v3h-6zm0 4.5h6v3h-6zm0 4.5h6v3h-6z"/>
        </svg>
      )
    };
  }

  if (n.includes('php')) {
    return {
      bgGradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-indigo-500/40',
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="6" fill="#777BB4"/>
          <text x="12" y="15.5" fill="#FFF" fontSize="9" fontStyle="italic" fontWeight="900" textAnchor="middle">PHP</text>
        </svg>
      )
    };
  }

  if (n.includes('tailwind') || n.includes('bootstrap')) {
    return {
      bgGradient: 'from-teal-500/10 via-cyan-500/5 to-transparent',
      borderColor: 'group-hover:border-teal-500/40',
      badgeBg: 'bg-teal-50 text-teal-600 border-teal-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#38BDF8" d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.6 1 .4 1.8 1.2 2.6 2.1 1.3 1.4 2.8 3 6.5 3 3.3 0 5.5-1.6 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.6-1-.4-1.8-1.2-2.6-2.1C17.2 7.6 15.7 6 12 6zm-6.6 8.5c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.6 1 .4 1.8 1.2 2.6 2.1 1.3 1.4 2.8 3 6.5 3 3.3 0 5.5-1.6 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.6-1-.4-1.8-1.2-2.6-2.1C10.6 16.1 9.1 14.5 5.4 14.5z"/>
        </svg>
      )
    };
  }

  if (n.includes('shopify')) {
    return {
      bgGradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#96BF48" d="M19.5 6.5l-2-1.5-3.5 1-2.5-3-3.5 1L6 1.5 0.5 4.5l-1 15 11 3 9.5-2.5 1-13.5z"/>
          <path fill="#FFF" d="M12 7.5v10m-3.5-5h7"/>
        </svg>
      )
    };
  }

  if (n.includes('api') || n.includes('json')) {
    return {
      bgGradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-violet-500/40',
      badgeBg: 'bg-violet-50 text-violet-600 border-violet-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#8B5CF6" strokeWidth="2">
          <circle cx="6" cy="12" r="3" fill="#8B5CF6"/>
          <circle cx="18" cy="6" r="3" fill="#8B5CF6"/>
          <circle cx="18" cy="18" r="3" fill="#8B5CF6"/>
          <path d="M9 12h6M12 12V6m0 6v6" stroke="#8B5CF6"/>
        </svg>
      )
    };
  }

  if (n.includes('python')) {
    return {
      bgGradient: 'from-blue-500/10 via-amber-500/5 to-transparent',
      borderColor: 'group-hover:border-blue-500/40',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#3776AB" d="M11.87 0c-3.5 0-3.26 1.52-3.26 1.52v1.57h3.33v.48H7.27S4 3.24 4 6.78c0 3.54 2.85 3.41 2.85 3.41h1.71V8.65s-.09-1.86 1.83-1.86h3.15V3.34S13.82 0 11.87 0z"/>
          <path fill="#FFD43B" d="M12.13 24c3.5 0 3.26-1.52 3.26-1.52v-1.57h-3.33v-.48h4.67s3.27.33 3.27-3.21c0-3.54-2.85-3.41-2.85-3.41h-1.71v1.54s.09 1.86-1.83 1.86h-3.15v3.45S10.18 24 12.13 24z"/>
        </svg>
      )
    };
  }

  if (n.includes('django')) {
    return {
      bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="6" fill="#0C4B33"/>
          <text x="12" y="16" fill="#FFF" fontSize="8" fontWeight="900" textAnchor="middle">django</text>
        </svg>
      )
    };
  }

  if (n.includes('sap')) {
    return {
      bgGradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
      borderColor: 'group-hover:border-sky-500/40',
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="6" fill="#008FD5"/>
          <text x="12" y="16" fill="#FFF" fontSize="10" fontWeight="900" textAnchor="middle">SAP</text>
        </svg>
      )
    };
  }

  if (n.includes('arduino')) {
    return {
      bgGradient: 'from-teal-500/10 via-cyan-500/5 to-transparent',
      borderColor: 'group-hover:border-teal-500/40',
      badgeBg: 'bg-teal-50 text-teal-600 border-teal-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" fill="#00979D"/>
          <text x="12" y="16" fill="#FFF" fontSize="11" fontWeight="900" textAnchor="middle">∞</text>
        </svg>
      )
    };
  }

  if (n.includes('git')) {
    return {
      bgGradient: 'from-orange-500/10 via-red-500/5 to-transparent',
      borderColor: 'group-hover:border-orange-500/40',
      badgeBg: 'bg-orange-50 text-orange-600 border-orange-200',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.07 1.887.437.5.502.645 1.23.437 1.873l2.66 2.66c.644-.216 1.38-.07 1.887.437.7.702.7 1.838 0 2.54-.7.703-1.838.703-2.54 0-.535-.535-.668-1.325-.4-1.993l-2.483-2.483v6.33c.2.115.38.272.525.437.7.702.7 1.838 0 2.54-.7.703-1.838.703-2.54 0-.7-.702-.7-1.838 0-2.54.165-.165.34-.31.545-.42v-6.38c-.2-.11-.38-.255-.545-.42-.53-.53-.668-1.31-.403-1.977L7.697 4.795.454 12.038c-.603.604-.603 1.582 0 2.188l10.48 10.48c.603.603 1.58.603 2.186 0l10.426-10.425c.604-.604.604-1.582 0-2.188z"/>
        </svg>
      )
    };
  }

  // Fallback for general skills
  return {
    bgGradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    borderColor: 'group-hover:border-purple-500/40',
    badgeBg: 'bg-purple-50 text-purple-600 border-purple-200',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#A855F7" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  };
};

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 px-3.5 py-1 bg-blue-50 border border-blue-200/60 rounded-full inline-block mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            A comprehensive overview of my technical capabilities spanning web development, full-stack frameworks, enterprise SAP systems, server administration, and emerging technologies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" data-aos="fade-up">
          {technicalSkills.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCategory === idx
                  ? 'glass-dark-btn gemini-edge-glow text-white shadow-lg scale-105'
                  : 'glass-light-btn text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {technicalSkills.categories[activeCategory].skills.map((skill, idx) => {
            const brand = getSkillBrand(skill.name);
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl gemini-edge-glow relative overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group border ${brand.borderColor}`}
              >
                {/* Tech Specific Ambient Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Subtle Code Grid Tech Background Watermark */}
                <div className="absolute -top-4 -right-4 w-20 h-20 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none text-slate-900 font-mono text-[9px] leading-tight select-none">
                  {`</>\n{...}\n[UI]\n0101`}
                </div>

                <div className="relative z-10">
                  {/* Official Tech Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-white/90 border border-slate-200/80 flex items-center justify-center shadow-xs mb-4 group-hover:scale-110 transition-transform duration-300">
                    {brand.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {skill.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {skill.desc}
                  </p>
                </div>

                {/* Card Footer Competency Badge */}
                <div className="relative z-10 mt-5 pt-3 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-slate-500">Verified Competency</span>
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-extrabold ${brand.badgeBg}`}>
                    100%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Skills Constellation Grid */}
        <div className="mt-16 p-8 glass-panel rounded-3xl border border-white/90 shadow-xl" data-aos="fade-up">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
            Complete Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {technicalSkills.categories.flatMap(c => c.skills).map((skill, idx) => {
              const brand = getSkillBrand(skill.name);
              return (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-800 text-xs font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-200 gemini-edge-glow flex items-center gap-2"
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    {brand.icon}
                  </span>
                  <span>{skill.name}</span>
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
