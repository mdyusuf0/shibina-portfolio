import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) {
        handleVideoLoad();
      }
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay blocked, playing muted fallback:", err);
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FBFBFD] pt-24 md:pt-28 pb-8 px-6 md:px-12 lg:px-20">
      
      {/* 100% Crisp Background Poster (NO fade overlay) */}
      {personalInfo.videoPoster && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000 opacity-100"
          style={{ 
            backgroundImage: `url(${personalInfo.videoPoster})`,
            backgroundPosition: 'center 20%'
          }}
        />
      )}

      {/* 100% Crisp Background Video (NO white layer, 100% opacity) */}
      {personalInfo.videoUrl && (
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          autoPlay
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center 20%' }}
        >
          <source src={personalInfo.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Top Bar: Floating Status Pill */}
      <div className="w-full z-20 flex justify-end mb-4">
        <div data-aos="fade-down" className="inline-flex items-center gap-2.5 px-4 py-2 glass-panel rounded-full shadow-md gemini-edge-glow">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[#111827] text-xs font-bold tracking-wide">
            Available for Roles in Dubai, UAE & Remote
          </span>
        </div>
      </div>

      {/* Floating Stat Badges (Positioned around video subject on Desktop) */}
      <div className="hidden xl:block absolute top-[22%] right-[16%] z-20 animate-float-slow" data-aos="zoom-in" data-aos-delay="400">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-slate-900 leading-tight">3+ Years</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Tech Experience</p>
        </div>
      </div>

      <div className="hidden xl:block absolute top-[36%] right-[8%] z-20 animate-float-slow" style={{ animationDelay: '2s' }} data-aos="zoom-in" data-aos-delay="500">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-purple-600 leading-tight">3 Live UAE</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Web Platforms</p>
        </div>
      </div>

      <div className="hidden xl:block absolute top-[54%] right-[18%] z-20 animate-float-slow" style={{ animationDelay: '4s' }} data-aos="zoom-in" data-aos-delay="600">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-pink-600 leading-tight">8+ Verified</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Certifications</p>
        </div>
      </div>

      <div className="hidden xl:block absolute top-[70%] right-[28%] z-20 animate-float-slow" style={{ animationDelay: '1s' }} data-aos="zoom-in" data-aos-delay="700">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-emerald-600 leading-tight">100% Score</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Steyp Assessments</p>
        </div>
      </div>

      {/* Main Content Area (Left aligned, responsive, professional layout) */}
      <div className="w-full z-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left max-w-xl">
          
          <h2 
            data-aos="fade-up"
            className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 drop-shadow-sm"
          >
            Hi, I'm
          </h2>

          <h1 
            data-aos="fade-up"
            data-aos-delay="150"
            className="font-cursive text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-3 drop-shadow-sm"
          >
            Shibina S
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-sm md:text-base font-medium text-slate-800 leading-relaxed mb-4 glass-panel p-4 rounded-2xl border border-white/80 shadow-xs"
          >
            {heroContent.subtitle}
          </p>

          {/* Live Websites Pill Bar */}
          <div data-aos="fade-up" data-aos-delay="350" className="flex flex-wrap gap-2 mb-6">
            <a
              href="https://mizco.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-purple-200 text-slate-900 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all shadow-xs flex items-center gap-1.5 gemini-edge-glow"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              mizco.ae ↗
            </a>
            <a
              href="https://mizhome.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-pink-200 text-slate-900 text-xs font-bold hover:bg-pink-600 hover:text-white transition-all shadow-xs flex items-center gap-1.5 gemini-edge-glow"
            >
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              mizhome.ae ↗
            </a>
            <a
              href="https://mizperfectsupplies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/90 border border-blue-200 text-slate-900 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xs flex items-center gap-1.5 gemini-edge-glow"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              mizperfectsupplies.com ↗
            </a>
          </div>

          {/* Action Buttons Row */}
          <div 
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a 
              href="#projects"
              className="px-6 py-3 text-xs md:text-sm font-bold glass-dark-btn gemini-edge-glow"
            >
              Explore Projects
            </a>
            
            <a 
              href="#contact"
              className="px-6 py-3 text-xs md:text-sm font-bold glass-light-btn gemini-edge-glow"
            >
              Work With Me
            </a>

            <a 
              href={heroContent.ctaResume.href}
              download="shibina-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs md:text-sm font-bold glass-light-btn flex items-center gap-2 gemini-edge-glow"
            >
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

        </div>

        {/* Right Side Video Reel Controller */}
        <div className="lg:col-span-5 flex justify-end items-end">
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-col items-center gap-2 cursor-pointer group z-20"
          >
            <div 
              onClick={toggleVideo}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full glass-panel flex justify-center items-center group-hover:scale-110 transition-all duration-300 shadow-xl gemini-edge-glow"
            >
              {!isPlaying ? (
                <svg className="w-6 h-6 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-slate-800 text-[11px] font-extrabold tracking-wider uppercase bg-white/80 px-2.5 py-0.5 rounded-full shadow-xs">
              {!isPlaying ? "Play Video" : "Pause Video"}
            </span>

            {isPlaying && (
              <button 
                onClick={toggleAudio}
                className="px-3 py-1 glass-panel rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1 hover:bg-white transition-all shadow-sm mt-1 gemini-edge-glow"
              >
                {isMuted ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span>Audio On</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Scroll Down Arrow Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="w-full z-20 flex justify-center mt-4"
      >
        <a href="#about" className="animate-bounce p-1.5 rounded-full glass-panel text-slate-700 hover:text-purple-600 transition-colors">
          <svg 
            className="w-5 h-5 drop-shadow-xs" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Hero;
