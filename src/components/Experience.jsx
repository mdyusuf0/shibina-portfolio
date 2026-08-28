import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 px-3.5 py-1 bg-purple-50 border border-purple-200/60 rounded-full inline-block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            3+ years of technical experience in UAE web engineering, computer science university lectureship, and enterprise SAP software consulting.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8" data-aos="fade-up">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl gemini-edge-glow border border-white/90 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/60">
                <div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold inline-block mb-2">
                    {item.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-bold text-purple-600">
                    {item.company} <span className="text-slate-400 font-normal">({item.location})</span>
                  </h4>
                </div>

                <div className="px-4 py-2 rounded-full glass-panel border border-slate-200 text-slate-700 text-xs font-extrabold text-center self-start lg:self-auto">
                  {item.period}
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="space-y-3 mb-6">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/40">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-xl bg-white/90 border border-slate-200/80 text-slate-800 text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
