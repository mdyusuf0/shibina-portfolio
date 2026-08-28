import React from 'react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 px-3.5 py-1 bg-blue-50 border border-blue-200/60 rounded-full inline-block mb-3">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Education & Foundation
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 md:p-10 rounded-3xl gemini-edge-glow border border-white/90 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-200/60">
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold inline-block mb-2">
                    APJ Abdul Kalam Technological University
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm font-bold text-slate-600 mt-1">
                    {edu.institution}
                  </h4>
                </div>

                <div className="text-right">
                  <div className="px-4 py-2 rounded-full glass-card border border-slate-200 text-purple-600 text-xs font-extrabold mb-1">
                    {edu.period}
                  </div>
                  <div className="text-emerald-600 font-black text-sm">
                    {edu.score}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200">
                  🎓 Computer Networks
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200">
                  💻 Software Engineering
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200">
                  📊 Database Management Systems
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200">
                  🌐 Web Engineering
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200">
                  🤖 Machine Learning
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
