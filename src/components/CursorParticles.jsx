import React, { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, active: false });
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const maxParticles = 65;

    class Particle {
      constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.vx = dx * 0.15 + (Math.random() - 0.5) * 0.6;
        this.vy = dy * 0.15 + (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2.5 + 0.8;
        this.alpha = 0.7;
        this.decay = Math.random() * 0.015 + 0.01;
        
        // Multi-hued ambient particles (purple, cyan, amber, white)
        const colors = [
          '168, 85, 247',
          '236, 72, 153',
          '59, 130, 246',
          '6, 182, 212',
          '255, 255, 255'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.blur = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        this.vx *= 0.96;
        this.vy *= 0.96;
        if (this.size > 0.1) this.size -= 0.015;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowBlur = this.blur;
        ctx.shadowColor = `rgba(${this.color}, 0.5)`;
        ctx.fill();
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.active = true;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      const count = Math.min(Math.floor(speed / 6) + 1, 4);
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length < maxParticles) {
          particlesRef.current.push(
            new Particle(
              mouse.x + (Math.random() - 0.5) * 6,
              mouse.y + (Math.random() - 0.5) * 6,
              dx,
              dy
            )
          );
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      if (mouse.active) {
        ctx.save();
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          90
        );
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CursorParticles;
