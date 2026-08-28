import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleVideoLoad = () => {
    setIsVideoReady(true);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FBFBFD] pt-24 pb-16 flex flex-col justify-center">
      
      {/* Background Poster & Video Layer */}
      {personalInfo.videoPoster && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-15 pointer-events-none transition-opacity duration-1000"
          style={{ backgroundImage: `url(${personalInfo.videoPoster})` }}
        />
      )}

      {personalInfo.videoUrl && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <source src={personalInfo.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Floating Status Pill */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full mb-4 z-10">
        <div data-aos="fade-down" className="inline-flex items-center gap-2.5 px-4 py-2 glass-panel rounded-full shadow-sm gemini-edge-glow">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[#111827] text-xs font-bold tracking-wide">
            Available for Opportunities in Dubai, UAE & Remote
          </span>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start" data-aos="fade-right">
          
          <span className="text-xs md:text-sm font-bold tracking-widest text-purple-600 uppercase mb-3 px-3 py-1 bg-purple-50 border border-purple-200/60 rounded-full">
            {heroContent.greeting}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-4">
            SHIBINA S
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-6">
            {personalInfo.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-8 max-w-2xl">
            {heroContent.subtitle}
          </p>

          {/* Live Websites Badge Bar */}
          <div className="w-full mb-8 p-4 glass-panel rounded-2xl border border-white/90 shadow-sm gemini-edge-glow">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Featured Live UAE Websites Developed & Maintained
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://mizco.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/90 border border-purple-200 text-slate-900 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                mizco.ae ↗
              </a>
              <a
                href="https://mizhome.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/90 border border-pink-200 text-slate-900 text-xs font-bold hover:bg-pink-600 hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                mizhome.ae ↗
              </a>
              <a
                href="https://mizperfectsupplies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/90 border border-blue-200 text-slate-900 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                mizperfectsupplies.com ↗
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3.5 rounded-full glass-dark-btn text-xs sm:text-sm font-bold text-white shadow-lg cursor-pointer gemini-edge-glow flex items-center gap-2"
            >
              <span>{heroContent.ctaPrimary.text}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href={heroContent.ctaResume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full glass-light-btn text-xs sm:text-sm font-bold text-slate-800 shadow-md cursor-pointer gemini-edge-glow flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{heroContent.ctaResume.text}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Glassmorphic Visual Card & Stats Grid */}
        <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
          
          {/* Main Visual Profile Card */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden shadow-xl border border-white/90 gemini-edge-glow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/20 via-pink-400/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-lg border border-slate-700">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Shibina S</h3>
                <p className="text-xs font-semibold text-purple-600">Full-Stack & Web Developer</p>
                <p className="text-xs text-slate-500">Deira, Dubai, UAE</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Email:</span>
                <a href={`mailto:${socialLinks.email}`} className="text-slate-900 hover:text-purple-600 transition-colors">
                  {socialLinks.email}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Phone:</span>
                <a href={`tel:${socialLinks.phone}`} className="text-slate-900 hover:text-purple-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">LinkedIn:</span>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold hover:underline">
                  shibina-s ↗
                </a>
              </div>
            </div>
          </div>

          {/* Hero Stats 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroContent.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl text-center gemini-edge-glow flex flex-col justify-center items-center"
              >
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
