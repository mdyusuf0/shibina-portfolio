import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';

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
          {technicalSkills.categories[activeCategory].skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl gemini-edge-glow flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 flex items-center justify-center font-black text-sm mb-4">
                  {skill.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {skill.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/50 flex justify-between items-center text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                <span>Verified Competency</span>
                <span>100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Constellation Grid */}
        <div className="mt-16 p-8 glass-panel rounded-3xl border border-white/90 shadow-xl" data-aos="fade-up">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
            Complete Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {technicalSkills.categories.flatMap(c => c.skills).map((skill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/80 border border-slate-200/70 text-slate-800 text-xs font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-200 gemini-edge-glow"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
