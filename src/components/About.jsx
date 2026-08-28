import React from 'react';
import { aboutContent, processContent } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 px-3.5 py-1 bg-purple-50 border border-purple-200/60 rounded-full inline-block mb-3">
            {aboutContent.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {aboutContent.heading}
          </h2>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Bio Text */}
          <div className="lg:col-span-7 space-y-5" data-aos="fade-right">
            {aboutContent.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                {para}
              </p>
            ))}
          </div>

          {/* Right: Highlights Card */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="glass-panel p-8 rounded-3xl shadow-xl border border-white/90 gemini-edge-glow">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                Core Professional Pillars
              </h3>
              
              <ul className="space-y-4">
                {aboutContent.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-semibold">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Engineering Process Steps */}
        <div className="mt-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-600 px-3.5 py-1 bg-pink-50 border border-pink-200/60 rounded-full inline-block mb-3">
              {processContent.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {processContent.heading}
            </h3>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2">
              {processContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processContent.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between gemini-edge-glow group hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-3">
                    {card.number}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
