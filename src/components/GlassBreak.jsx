import { useEffect, useRef, useState, useCallback } from 'react';

// Words that fly from the left and crash
const CRASH_WORDS = [
  'REACT', 'JAVASCRIPT', 'NODE.JS', 'TAILWIND', 'POSTGRES',
  'TYPESCRIPT', 'DOCKER', 'REST API', 'MONGODB', 'GIT',
  'EXPRESS', 'VITE', 'HTML5', 'CSS3', 'AGILE',
  'UI/UX', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'CODE',
];

function generateShards(cx, cy, count = 28) {
  const shards = [];
  const angles = [];
  for (let i = 0; i < count; i++) {
    angles.push((Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5);
  }
  angles.sort(() => Math.random() - 0.5);

  for (let i = 0; i < angles.length; i++) {
    const a1 = angles[i];
    const a2 = angles[(i + 1) % angles.length];
    const r1 = 60 + Math.random() * 220;
    const r2 = 60 + Math.random() * 220;
    const r3 = 20 + Math.random() * 80;

    shards.push({
      points: [
        [cx, cy],
        [cx + Math.cos(a1) * r1, cy + Math.sin(a1) * r1],
        [cx + Math.cos((a1 + a2) / 2) * r3, cy + Math.sin((a1 + a2) / 2) * r3],
        [cx + Math.cos(a2) * r2, cy + Math.sin(a2) * r2],
      ],
      vx: (Math.cos((a1 + a2) / 2) * (2 + Math.random() * 6)),
      vy: (Math.sin((a1 + a2) / 2) * (2 + Math.random() * 6)),
      gravity: 0.18 + Math.random() * 0.25,
      spin: (Math.random() - 0.5) * 0.18,
      angle: 0,
      opacity: 0.85 + Math.random() * 0.15,
      x: 0,
      y: 0,
      life: 1,
      decay: 0.008 + Math.random() * 0.012,
      hue: Math.random() > 0.7 ? '#C8FF00' : 'rgba(240,240,240,0.3)',
    });
  }
  return shards;
}

function generateCracks(cx, cy) {
  const cracks = [];
  const numCracks = 12 + Math.floor(Math.random() * 6);
  for (let i = 0; i < numCracks; i++) {
    const angle = (Math.PI * 2 * i) / numCracks + (Math.random() - 0.5) * 0.4;
    const len = 80 + Math.random() * 180;
    const segments = 4 + Math.floor(Math.random() * 4);
    const pts = [[cx, cy]];
    let x = cx, y = cy;
    for (let s = 0; s < segments; s++) {
      const segLen = len / segments;
      const jitter = (Math.random() - 0.5) * 30;
      x += Math.cos(angle) * segLen + Math.cos(angle + Math.PI / 2) * jitter;
      y += Math.sin(angle) * segLen + Math.sin(angle + Math.PI / 2) * jitter;
      pts.push([x, y]);
    }
    cracks.push({ pts, opacity: 1, width: 0.5 + Math.random() * 1.5 });
  }
  return cracks;
}

function generateFallingWords(count = 14) {
  return Array.from({ length: count }, (_, i) => {
    const word = CRASH_WORDS[Math.floor(Math.random() * CRASH_WORDS.length)];
    return {
      text: word,
      x: -60 - Math.random() * 200,          // start off-left
      y: 80 + Math.random() * (window.innerHeight * 0.6),
      vx: 14 + Math.random() * 10,            // fly from left
      vy: -4 + Math.random() * 3,
      gravity: 0.4 + Math.random() * 0.3,
      spin: (Math.random() - 0.5) * 0.12,
      angle: -0.3 + Math.random() * 0.6,
      size: 18 + Math.floor(Math.random() * 32),
      opacity: 1,
      decay: 0.004 + Math.random() * 0.006,
      color: Math.random() > 0.4 ? '#C8FF00' : '#F0F0F0',
      delay: i * 35,
      born: 0,
    };
  });
}

export default function GlassBreak({ onDone }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    shards: [],
    cracks: [],
    words: [],
    crackProgress: 0,
    phase: 'crack', // crack → shatter → done
    frame: 0,
    cx: 0,
    cy: 0,
  });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const cx = window.innerWidth * 0.4;
    const cy = window.innerHeight * 0.4;
    const s = stateRef.current;
    s.cracks = generateCracks(cx, cy);
    s.shards = generateShards(cx, cy, 32);
    s.words = generateFallingWords(16);
    s.cx = cx;
    s.cy = cy;
    s.phase = 'crack';
    s.frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      s.frame++;

      // ── Phase 1: draw cracks ──────────────────────
      if (s.phase === 'crack') {
        s.crackProgress = Math.min(1, s.crackProgress + 0.07);

        // Dark overlay with crack vignette
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Impact glow
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 250);
        grd.addColorStop(0, 'rgba(200,255,0,0.25)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw cracks
        s.cracks.forEach((crack) => {
          const total = crack.pts.length - 1;
          const drawTo = Math.floor(total * s.crackProgress);
          ctx.beginPath();
          ctx.moveTo(crack.pts[0][0], crack.pts[0][1]);
          for (let i = 1; i <= drawTo; i++) {
            ctx.lineTo(crack.pts[i][0], crack.pts[i][1]);
          }
          ctx.strokeStyle = `rgba(200,255,0,${crack.opacity * 0.9})`;
          ctx.lineWidth = crack.width;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#C8FF00';
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // Impact center burst
        ctx.beginPath();
        ctx.arc(cx, cy, 8 * s.crackProgress, 0, Math.PI * 2);
        ctx.fillStyle = '#C8FF00';
        ctx.fill();

        if (s.crackProgress >= 1 && s.frame > 25) {
          s.phase = 'shatter';
        }
      }

      // ── Phase 2: shatter + words fall ────────────
      if (s.phase === 'shatter') {
        // Dim overlay
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let allDead = true;

        // Draw + update shards
        s.shards.forEach((sh) => {
          if (sh.life <= 0) return;
          allDead = false;
          sh.x += sh.vx;
          sh.y += sh.vy;
          sh.vy += sh.gravity;
          sh.angle += sh.spin;
          sh.life -= sh.decay;
          sh.vx *= 0.985;

          ctx.save();
          ctx.translate(sh.x, sh.y);
          ctx.rotate(sh.angle);
          ctx.globalAlpha = Math.max(0, sh.life * sh.opacity);
          ctx.beginPath();
          const pts = sh.points;
          ctx.moveTo(pts[0][0] - sh.x, pts[0][1] - sh.y);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i][0] - sh.x, pts[i][1] - sh.y);
          }
          ctx.closePath();

          // Glassmorphism shard fill
          ctx.fillStyle = 'rgba(200,240,255,0.07)';
          ctx.fill();
          ctx.strokeStyle = sh.hue === '#C8FF00' ? 'rgba(200,255,0,0.8)' : 'rgba(255,255,255,0.35)';
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Reflection glint
          ctx.fillStyle = 'rgba(255,255,255,0.12)';
          ctx.fill();
          ctx.restore();
        });

        // Draw + update falling words
        s.words.forEach((w) => {
          w.born++;
          if (w.born < w.delay / 16) return;

          allDead = false;
          w.x += w.vx;
          w.vy += w.gravity;
          w.y += w.vy;
          w.angle += w.spin;
          w.vx *= 0.97;
          w.opacity -= w.decay;

          if (w.x > canvas.width + 100 || w.y > canvas.height + 80 || w.opacity <= 0) return;

          ctx.save();
          ctx.translate(w.x, w.y);
          ctx.rotate(w.angle);
          ctx.globalAlpha = Math.max(0, w.opacity);
          ctx.font = `900 ${w.size}px "Bebas Neue", cursive`;
          ctx.fillStyle = w.color;
          ctx.shadowBlur = w.color === '#C8FF00' ? 12 : 0;
          ctx.shadowColor = '#C8FF00';
          ctx.fillText(w.text, 0, 0);
          ctx.strokeStyle = 'rgba(0,0,0,0.5)';
          ctx.lineWidth = 0.5;
          ctx.strokeText(w.text, 0, 0);
          ctx.restore();
        });

        const allWordsDead = s.words.every(
          (w) => w.born >= w.delay / 16 && (w.x > canvas.width + 100 || w.y > canvas.height + 80 || w.opacity <= 0)
        );
        const allShardsDead = s.shards.every((sh) => sh.life <= 0);

        if (allWordsDead && allShardsDead) {
          cancelAnimationFrame(animRef.current);
          setTimeout(() => onDone && onDone(), 200);
          return;
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [onDone]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9000] pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
