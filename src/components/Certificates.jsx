import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'Web & UI', 'Backend', 'DevOps & Cloud', 'Professional & IEEE', 'Degree', 'Achievements'];

  const filteredCerts = activeCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600 px-3.5 py-1 bg-pink-50 border border-pink-200/60 rounded-full inline-block mb-3">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Certifications & Qualifications
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            Click on any credential card to view the official high-resolution certificate document, evaluation scorecards, and credential metadata.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'glass-dark-btn text-white gemini-edge-glow shadow-md scale-105'
                  : 'glass-light-btn text-slate-700 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card p-5 rounded-2xl gemini-edge-glow flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div>
                {/* Certificate Image Thumbnail */}
                <div className="w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-200/80 bg-white relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-600 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[11px]">
                  {cert.score}
                </span>
                <span className="text-[11px] font-bold text-slate-500 group-hover:text-purple-600 flex items-center gap-1">
                  <span>View Doc</span>
                  <span>↗</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / High-Res Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[99999] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-panel p-6 max-w-4xl w-full shadow-2xl rounded-3xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* High-Res Certificate Preview */}
              <div className="lg:col-span-7 bg-white p-3 rounded-2xl border border-slate-200 shadow-inner flex justify-center items-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>

              {/* Certificate Details */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold inline-block mb-3">
                    {selectedCert.category}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {selectedCert.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Issuer:</span>
                      <span className="font-bold text-slate-900">{selectedCert.issuer}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Issued Date:</span>
                      <span className="font-bold text-slate-900">{selectedCert.date}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Credential ID:</span>
                      <span className="font-mono text-xs text-purple-600 font-bold">{selectedCert.credentialId}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Score / Status:</span>
                      <span className="font-bold text-emerald-600">{selectedCert.score}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs font-medium leading-relaxed mb-6">
                    {selectedCert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Evaluated Subjects & Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full glass-dark-btn text-white text-xs font-bold gemini-edge-glow"
                  >
                    Open Full Image ↗
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-full glass-light-btn text-slate-700 text-xs font-bold"
                  >
                    Close
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
