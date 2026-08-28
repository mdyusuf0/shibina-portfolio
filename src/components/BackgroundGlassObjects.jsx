import React from 'react';

const BackgroundGlassObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Gradient Sphere */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 60%, rgba(255,255,255,0) 100%)'
        }}
      />

      {/* Top Right Cyan Glow */}
      <div 
        className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.2) 60%, rgba(255,255,255,0) 100%)'
        }}
      />

      {/* Mid Left Amber Subtle Glow */}
      <div 
        className="absolute top-2/3 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(236, 72, 153, 0.15) 60%, rgba(255,255,255,0) 100%)'
        }}
      />

      {/* Bottom Floating Subtle Orb */}
      <div 
        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 60%, rgba(255,255,255,0) 100%)'
        }}
      />
    </div>
  );
};

export default BackgroundGlassObjects;
