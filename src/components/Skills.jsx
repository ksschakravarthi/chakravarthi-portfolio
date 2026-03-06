import { useState } from 'react';
import { SKILLS, SKILL_TAGS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

const CATEGORIES = [
  { key: 'programming', label: 'Programming' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
  { key: 'extra', label: 'Exploring' },
];

function SkillBar({ skill, index }) {
  return (
    <div
      className="group"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-body text-sm text-ghost/80">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-acid">{skill.level}%</span>
      </div>
      <div className="h-px bg-white/5 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-acid transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            boxShadow: '0 0 8px rgba(200,255,0,0.5)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useReveal();

  return (
    <section id="skills" className="py-32 bg-carbon relative overflow-hidden">
      {/* BG decorative */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(200,255,0,1) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-acid/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      {/* Big decorative word */}
      <div className="absolute bottom-0 right-0 font-display text-[20vw] text-white/[0.02] leading-none select-none pointer-events-none">
        SKILLS
      </div>

      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-acid" />
              <span className="font-mono text-xs text-acid tracking-widest">TECHNICAL SKILLS</span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-none">
              MY<br />
              <span className="text-stroke">STACK</span>
            </h2>
          </div>
          <p className="font-body text-ghost/50 max-w-xs leading-relaxed">
            A continuously evolving toolkit built through real enterprise projects and hands-on experimentation.
          </p>
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2 mb-16">
          {SKILL_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs border border-white/10 px-3 py-1.5 text-muted hover:border-acid hover:text-acid transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-mono text-xs px-5 py-2.5 tracking-wider transition-all border ${
                activeCategory === cat.key
                  ? 'bg-acid text-carbon border-acid'
                  : 'border-white/10 text-muted hover:border-acid/40 hover:text-ghost'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {(SKILLS[activeCategory] || []).map((skill, i) => (
            <div
              key={skill.name}
              className="border border-white/5 bg-carbon-2 p-6 hover:border-acid/30 transition-all group"
            >
              <SkillBar skill={skill} index={i} />
            </div>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/5">
          {[
            { range: '90–100%', label: 'Expert', color: 'bg-acid' },
            { range: '70–89%', label: 'Proficient', color: 'bg-acid/60' },
            { range: '50–69%', label: 'Learning', color: 'bg-acid/30' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-3">
              <div className={`w-8 h-0.5 ${l.color}`} />
              <span className="font-mono text-xs text-muted">{l.range} — {l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
