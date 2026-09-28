import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const symbols = ['</>', '{}', 'div', '=>', '01', '$', 'leads', 'scale', '10x', 'roi'];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isSymbol: boolean;
      symbol: string;
      alpha: number;
    }

    let particles: Particle[] = [];

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = Math.max(rect.width || window.innerWidth, 320);
      height = canvas.height = Math.max(rect.height || 600, 400);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(canvas.parentElement);
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 50);
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || 600),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        isSymbol: Math.random() > 0.85,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint linking lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.save();
        if (p.isSymbol) {
          ctx.font = '11px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha * 0.85})`;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha})`;
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
    />
  );
};
