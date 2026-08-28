import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FBFBFD] pt-[46px]">
      
      {/* Background Poster Fallback */}
      {personalInfo.videoPoster && (
        <div 
          className="absolute top-[46px] left-0 w-full h-[calc(100vh-46px)] bg-cover bg-center z-0 transition-opacity duration-1000 opacity-90"
          style={{ 
            backgroundImage: `url(${personalInfo.videoPoster})`,
            backgroundPosition: 'center 20%'
          }}
        />
      )}

      {/* Hero Background Video */}
      {personalInfo.videoUrl && (
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          autoPlay
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          className={`absolute top-[46px] left-0 w-full h-[calc(100vh-46px)] object-cover z-0 transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center 20%' }}
        >
          <source src={personalInfo.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Subtle overlay gradient to ensure high readability */}
      <div className="absolute top-[46px] left-0 w-full h-[calc(100vh-46px)] bg-gradient-to-r from-[#FBFBFD]/90 via-[#FBFBFD]/60 to-transparent z-10 pointer-events-none" />

      {/* Floating Status Pill (Top Right) */}
      <div className="absolute top-[60px] right-4 md:right-8 z-30" data-aos="fade-down" data-aos-delay="400">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 glass-panel rounded-full hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 gemini-edge-glow">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[#111827] text-[11px] font-bold tracking-wide">
            Available for Roles in Dubai, UAE & Remote
          </span>
        </div>
      </div>

      {/* Floating Stats Badges (Matching Reference Composition) */}
      <div className="hidden lg:block absolute top-[160px] right-[18%] z-30 animate-float-slow" data-aos="zoom-in" data-aos-delay="500">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-slate-900 leading-tight">3+ Years</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Tech Experience</p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-[280px] right-[10%] z-30 animate-float-slow" style={{ animationDelay: '2s' }} data-aos="zoom-in" data-aos-delay="600">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-purple-600 leading-tight">3 Live UAE</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Web Platforms</p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-[440px] right-[22%] z-30 animate-float-slow" style={{ animationDelay: '4s' }} data-aos="zoom-in" data-aos-delay="700">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-pink-600 leading-tight">8+ Verified</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Certifications</p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-[580px] right-[32%] z-30 animate-float-slow" style={{ animationDelay: '1s' }} data-aos="zoom-in" data-aos-delay="800">
        <div className="glass-card px-4 py-2.5 rounded-2xl text-center shadow-lg gemini-edge-glow">
          <p className="text-base font-black text-emerald-600 leading-tight">100% Score</p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Steyp Assessments</p>
        </div>
      </div>

      {/* Content Container (Matching Reference Layout Exactly) */}
      <div className="absolute top-[46px] left-0 bottom-0 z-20 pl-6 md:pl-12 lg:pl-20 pr-6 pb-8 md:pb-[4%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full max-w-full">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-start text-left w-full max-w-lg lg:max-w-xl">
          
          {/* Greeting */}
          <h2 
            data-aos="fade-up"
            className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight leading-none mb-1"
          >
            Hi, I'm
          </h2>

          {/* Cursive Name */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="150"
            className="font-cursive text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-3 drop-shadow-sm"
          >
            Shibina S
          </h1>

          {/* Subtitle Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-sm md:text-base font-medium text-slate-700 leading-relaxed mb-4"
          >
            {heroContent.subtitle}
          </p>

          {/* Live Websites Pill Bar */}
          <div data-aos="fade-up" data-aos-delay="350" className="flex flex-wrap gap-2 mb-6">
            <a
              href="https://mizco.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white/90 border border-purple-200 text-slate-900 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all shadow-xs flex items-center gap-1 gemini-edge-glow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              mizco.ae ↗
            </a>
            <a
              href="https://mizhome.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-slate-900 text-xs font-bold hover:bg-pink-600 hover:text-white transition-all shadow-xs flex items-center gap-1 gemini-edge-glow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              mizhome.ae ↗
            </a>
            <a
              href="https://mizperfectsupplies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white/90 border border-blue-200 text-slate-900 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xs flex items-center gap-1 gemini-edge-glow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              mizperfectsupplies.com ↗
            </a>
          </div>

          {/* Action Buttons Row (Placed neatly at bottom left) */}
          <div 
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-row flex-wrap items-center gap-2.5 w-full"
          >
            <a 
              href="#projects"
              className="px-5 py-2.5 text-xs font-bold glass-dark-btn gemini-edge-glow"
            >
              Explore Projects
            </a>
            
            <a 
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold glass-light-btn gemini-edge-glow"
            >
              Work With Me
            </a>

            <a 
              href={heroContent.ctaResume.href}
              download="shibina-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold glass-light-btn flex items-center gap-1.5 gemini-edge-glow"
            >
              <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

        </div>

        {/* Right Side: Play Video & Mute Audio Buttons (Matching Reference) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-6 md:mt-0 mr-4 md:mr-8 flex flex-row md:flex-col items-center gap-3 cursor-pointer group self-start md:self-auto z-30"
        >
          {/* Play/Pause Button */}
          <div 
            onClick={toggleVideo}
            className="flex flex-col items-center gap-1 group/play"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-panel flex justify-center items-center group-hover/play:scale-110 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.08)] gemini-edge-glow">
              {!isPlaying ? (
                <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-slate-800 text-[10px] md:text-xs font-bold tracking-wider uppercase opacity-80 group-hover/play:opacity-100 transition-opacity">
              {!isPlaying ? "Play Video" : "Pause Video"}
            </span>
          </div>

          {/* Mute/Unmute Audio Toggle Button */}
          {isPlaying && (
            <button 
              onClick={toggleAudio}
              className="px-3 py-1.5 glass-panel rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1.5 hover:bg-white transition-all shadow-md mt-1 gemini-edge-glow"
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Unmute Audio</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>Audio Enabled</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Scroll Down Arrow Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-slate-700 drop-shadow-sm" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Hero;
