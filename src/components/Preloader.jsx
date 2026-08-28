import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBFBFD] transition-opacity duration-700">
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Glow Ring */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-xl animate-pulse" />
          <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center shadow-2xl border border-slate-700/50">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              S
            </span>
          </div>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
          {personalInfo.brandName}
        </h1>
        <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-8">
          Web Developer & Software Engineer
        </p>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-bold text-slate-400 tracking-widest">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
