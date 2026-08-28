import React from 'react';
import { servicesData } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full inline-block mb-3">
            Services & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What I Bring To The Table
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl gemini-edge-glow flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-purple-600 transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-purple-600 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
