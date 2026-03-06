import { useEffect, useRef } from 'react';
import ResumeDownloadBtn from './ResumeDownloadBtn';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(theme.accent)},${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${hexToRgb(theme.accent)},${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [theme.accent]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-carbon">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-acid/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 border border-acid/10 rounded-full animate-spin-slow" />
      <div className="absolute top-20 right-20 w-48 h-48 border border-acid/5 rounded-full" style={{ top: '5.5rem', right: '5.5rem' }} />
      <div className="absolute top-32 left-6 flex flex-col gap-1">
        <span className="font-mono text-xs text-acid/60 tracking-widest">PORTFOLIO 2025</span>
        <div className="w-8 h-px bg-acid/40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="inline-flex items-center gap-2 border border-acid/30 bg-acid/5 px-4 py-2 mb-10 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs text-acid tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-display text-[clamp(64px,14vw,200px)] leading-none tracking-tight animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both', opacity: 0 }}
          >
            CHAKRA
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-display text-[clamp(64px,14vw,200px)] leading-none tracking-tight text-stroke animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}
          >
            VARTHI
          </h1>
        </div>

        {/* Sub row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-end gap-8 mt-8 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both', opacity: 0 }}
        >
          <div className="flex-1">
            <p className="font-body text-lg text-ghost/60 max-w-md leading-relaxed">
              Software Engineer crafting data-driven interfaces for healthcare & enterprise platforms.{' '}
              <span className="text-acid">2+ years</span> turning complex SQL data into visual clarity.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="font-mono text-xs text-muted tracking-widest mb-1">BASED IN</div>
              <div className="font-body font-medium text-ghost">Hyderabad, IN</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-right">
              <div className="font-mono text-xs text-muted tracking-widest mb-1">EXPERIENCE</div>
              <div className="font-body font-medium text-ghost">2+ Years</div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center gap-4 mt-12 animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: 0 }}
        >
          <a
            href="#projects"
            className="group relative text-carbon font-body font-semibold px-8 py-4 tracking-wide overflow-hidden"
            style={{ background: theme.accent }}
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300" style={{ background: theme.text }} />
          </a>
          <ResumeDownloadBtn />
          <a
            href="#contact"
            className="border text-ghost font-body font-medium px-8 py-4 tracking-wide hover:border-acid hover:text-acid transition-all duration-300"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            GET IN TOUCH →
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/5 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'both', opacity: 0 }}
        >
          {[
            { num: '3+', label: 'Enterprise Projects' },
            { num: '20+', label: 'APIs Integrated' },
            { num: '2+', label: 'Years Experience' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl text-acid">{s.num}</div>
              <div className="font-mono text-xs text-muted tracking-widest mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
