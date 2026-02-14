'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const pointer = { x: 0, y: 0, active: false };
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const baseCount = Math.floor(area / 9000);
      const count = Math.max(70, Math.min(220, baseCount));
      nodes.length = 0;
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: 1.1 + Math.random() * 1.9,
        });
      }
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0b2d46');
      gradient.addColorStop(0.55, '#0b3b59');
      gradient.addColorStop(1, '#0a2a43');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const dotSize = 6;
      const dotSpacing = 22;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
        for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const haze = ctx.createRadialGradient(width * 0.2, height * 0.15, 0, width * 0.2, height * 0.15, width * 0.7);
      haze.addColorStop(0, 'rgba(120, 150, 180, 0.18)');
      haze.addColorStop(1, 'rgba(120, 150, 180, 0)');
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(width * 0.7, height * 0.12, 0, width * 0.7, height * 0.12, width * 0.55);
      glow.addColorStop(0, 'rgba(190, 220, 245, 0.2)');
      glow.addColorStop(1, 'rgba(190, 220, 245, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawBokeh = () => {
      const spots = 6;
      for (let i = 0; i < spots; i += 1) {
        const x = (width * (i + 1)) / (spots + 1);
        const y = height * (0.2 + (i % 3) * 0.22);
        const r = width * (0.12 + (i % 2) * 0.06);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, 'rgba(200, 220, 240, 0.18)');
        g.addColorStop(1, 'rgba(200, 220, 240, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      drawBackground();
      drawBokeh();

      const maxDist = 170;
      const maxDistSq = maxDist * maxDist;

      for (const node of nodes) {
        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 180 * 180) {
            const dist = Math.sqrt(distSq) || 1;
            const force = (1 - dist / 180) * 0.6;
            node.vx += (dx / dist) * force * 0.02;
            node.vy += (dy / dist) * force * 0.02;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const alpha = 1 - distSq / maxDistSq;
            ctx.lineWidth = 1;

            ctx.strokeStyle = `rgba(20, 60, 90, ${alpha * 0.35})`;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(a.x + 1.2, a.y + 1.6);
            ctx.lineTo(b.x + 1.2, b.y + 1.6);
            ctx.stroke();

            ctx.strokeStyle = `rgba(210, 235, 255, ${alpha * 0.75})`;
            ctx.shadowColor = 'rgba(140, 200, 240, 0.75)';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.shadowBlur = 18;
        ctx.fillStyle = 'rgba(252, 254, 255, 0.98)';
        ctx.shadowColor = 'rgba(150, 210, 245, 0.9)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationId = window.requestAnimationFrame(tick);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    tick();

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden mt-[72px]">
      {/* Animated Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full"></canvas>
      {/* Contrast Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            <span
              className={`inline-block transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Transforming
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-1000 bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent drop-shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Ideas Into Reality
            </span>
          </h1>

          {/* Subtitle with Fade Animation */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-white mb-4 transition-all duration-1000 drop-shadow-xl ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Pioneering next-generation technology solutions that empower
            businesses to thrive in the digital era
          </p>

          {/* Animated Features */}
          <div
            className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base font-medium">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#0077b6] rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <span className="text-sm sm:text-base font-medium">Cloud Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 text-white drop-shadow-lg">
              <div className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
              <span className="text-sm sm:text-base font-medium">Cybersecurity Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00b4d8]/50">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0077b6] hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Floating Stats */}
          <div
            className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  500+
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  98%
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-xl">
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
                  24/7
                </span>
              </div>
              <p className="text-white text-sm sm:text-base drop-shadow-lg">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
