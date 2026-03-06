import { useState } from 'react';
import { PROJECTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function ProjectCard({ project, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group relative border cursor-pointer transition-all duration-500 overflow-hidden ${
        isActive ? 'border-acid/60 bg-carbon-3' : 'border-white/5 bg-carbon-2 hover:border-white/20'
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted">{project.id}</span>
          <span
            className="font-mono text-xs px-2 py-0.5 border"
            style={{ borderColor: `${project.color}40`, color: project.color }}
          >
            {project.tag}
          </span>
        </div>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-3xl md:text-4xl text-ghost mb-1 leading-none group-hover:text-acid transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted mb-4">{project.subtitle}</p>
        <p className="font-body text-sm text-ghost/60 leading-relaxed">{project.description}</p>

        {/* Animated expand */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isActive ? 'max-h-[600px] mt-8 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 border border-white/5 bg-carbon">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-display text-3xl" style={{ color: project.color }}>{m.value}</div>
                <div className="font-mono text-xs text-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <p className="font-mono text-xs text-muted tracking-widest mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 font-body text-sm text-ghost/70">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.color }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-mono text-xs text-muted tracking-widest mb-3">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs border px-3 py-1"
                  style={{ borderColor: `${project.color}40`, color: project.color }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle indicator */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
          <span className="font-mono text-xs" style={{ color: project.color }}>
            {isActive ? 'COLLAPSE' : 'VIEW DETAILS'}
          </span>
          <span
            className={`transition-transform duration-300 text-sm ${isActive ? 'rotate-180' : ''}`}
            style={{ color: project.color }}
          >
            ↓
          </span>
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div
          className="absolute left-0 top-0 w-1 h-full"
          style={{ background: project.color }}
        />
      )}
    </div>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState('01');
  const ref = useReveal();

  return (
    <section id="projects" className="py-32 bg-carbon-2 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(200,255,0,0.4), transparent 70%)',
        }}
      />
      <div className="absolute bottom-0 left-0 font-display text-[18vw] text-white/[0.02] leading-none select-none pointer-events-none">
        WORK
      </div>

      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-acid" />
              <span className="font-mono text-xs text-acid tracking-widest">SELECTED PROJECTS</span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-none">
              THE
              <br />
              <span className="text-stroke">WORK</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted">{PROJECTS.length} Projects</span>
            <div className="w-px h-4 bg-white/10" />
            <span className="font-mono text-xs text-muted">Click to expand</span>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              onClick={() => setActiveId(activeId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
