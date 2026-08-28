import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const HIRE_ME_MESSAGE = "Hello Shibina, I reviewed your web development portfolio and would like to connect regarding a Web Development / Software Engineering role.";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Certificates', 'Experience', 'Education', 'Contact'];

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleHireMe = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(HIRE_ME_MESSAGE);
      showToast('✅ Message copied! Opening LinkedIn…');
      setTimeout(() => {
        window.open(socialLinks.linkedin, '_blank', 'noopener,noreferrer');
      }, 700);
    } catch {
      setFallbackVisible(true);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-[99999] px-6 py-2 rounded-full bg-[#111827] text-white text-xs font-semibold shadow-2xl transition-all duration-500 pointer-events-none whitespace-nowrap ${
          toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        {toastMessage}
      </div>

      {/* Manual Copy Fallback Modal */}
      {fallbackVisible && (
        <div
          className="fixed inset-0 z-[99998] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFallbackVisible(false)}
        >
          <div
            className="glass-panel p-8 max-w-md w-full shadow-2xl rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-slate-900 text-xl font-bold mb-2">Connect on LinkedIn</h3>
            <p className="text-slate-600 text-sm mb-4 font-medium">
              Copy the message below to send directly to Shibina S:
            </p>
            <div className="bg-white/80 border border-slate-200 rounded-2xl p-4 mb-6 text-xs text-slate-800 leading-relaxed select-all">
              {HIRE_ME_MESSAGE}
            </div>
            <div className="flex gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setFallbackVisible(false)}
                className="flex-1 text-center px-5 py-3 rounded-full glass-dark-btn text-xs font-bold gemini-edge-glow"
              >
                Open LinkedIn
              </a>
              <button
                onClick={() => setFallbackVisible(false)}
                className="px-5 py-3 rounded-full glass-light-btn text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Navbar */}
      <nav
        className={`fixed top-1 md:top-1.5 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 ${
          isScrolled ? 'py-0' : 'py-1'
        }`}
      >
        <div className="max-w-6xl mx-auto glass-panel px-6 py-2 rounded-full flex justify-between items-center transition-all duration-300">

          {/* Left Side: Brand Logo */}
          <a href="#" className="text-slate-900 font-extrabold text-base md:text-lg tracking-tight flex items-center gap-1.5 group">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 inline-block group-hover:scale-150 transition-transform duration-300"></span>
            <span>{personalInfo.brandName}</span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-600 hover:text-slate-900 text-xs md:text-sm font-semibold transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side: Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleHireMe}
              className="px-4 py-1.5 text-xs font-bold glass-dark-btn cursor-pointer gemini-edge-glow"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto glass-panel p-5 rounded-3xl flex flex-col space-y-2.5 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-purple-600 text-sm font-semibold py-1.5 border-b border-slate-100/50"
              >
                {link}
              </a>
            ))}
            <button
              onClick={(e) => {
                setIsOpen(false);
                handleHireMe(e);
              }}
              className="mt-2 text-center py-2.5 text-xs font-bold glass-dark-btn gemini-edge-glow"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
