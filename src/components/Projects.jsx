import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 px-3.5 py-1 bg-purple-50 border border-purple-200/60 rounded-full inline-block mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Selected Projects & Live Work
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-3">
            Highlighting live UAE enterprise e-commerce platforms, machine learning systems, embedded hardware prototypes, and SAP enterprise solutions.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-8 rounded-3xl gemini-edge-glow flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold">
                    {project.badge}
                  </span>
                  <span className="text-xl font-black text-slate-300 group-hover:text-purple-600 transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs font-medium leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200/80 text-[11px] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Live Link or View Case Study */}
              <div className="pt-4 border-t border-slate-200/60 flex justify-between items-center text-xs font-bold">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-full glass-dark-btn text-white text-xs font-bold flex items-center gap-1.5 gemini-edge-glow"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-purple-600 font-bold flex items-center gap-1">
                    <span>View Case Details</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 rounded-full glass-light-btn text-slate-700 text-xs font-bold"
                >
                  Overview
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[99999] bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel p-8 max-w-2xl w-full shadow-2xl rounded-3xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold inline-block mb-3">
              {selectedProject.badge}
            </span>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              {selectedProject.title}
            </h3>
            
            <p className="text-slate-600 text-sm font-medium mb-6">
              {selectedProject.overview}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Architecture & Technical Implementation
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Achievements & Impact
                </h4>
                <ul className="space-y-2">
                  {selectedProject.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full glass-dark-btn text-white text-xs font-bold gemini-edge-glow flex items-center gap-2"
                >
                  <span>Launch Website ({selectedProject.liveUrl.replace('https://', '')})</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="text-xs font-bold text-slate-400">Factual Documented Engineering Project</span>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full glass-light-btn text-slate-700 text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
