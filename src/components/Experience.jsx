import { EXPERIENCE } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-32 bg-carbon relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-acid/20 to-transparent" />
      <div className="absolute bottom-0 left-0 font-display text-[16vw] text-white/[0.02] leading-none select-none pointer-events-none">
        EXP
      </div>

      <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-acid" />
          <span className="font-mono text-xs text-acid tracking-widest">EXPERIENCE</span>
        </div>
        <h2 className="font-display text-6xl md:text-8xl leading-none mb-20">
          WHERE I'VE<br />
          <span className="text-stroke">WORKED</span>
        </h2>

        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="relative border border-white/5 bg-carbon-2 p-8 md:p-12 overflow-hidden group hover:border-acid/20 transition-all"
          >
            <div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/2 transition-all" />
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-acid/40" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-acid/40" />

            <div className="grid md:grid-cols-[1fr,2fr] gap-12">
              <div>
                <span className="font-mono text-xs text-acid border border-acid/40 px-3 py-1 inline-block mb-6">
                  {exp.type}
                </span>
                <h3 className="font-display text-4xl text-ghost mb-2">{exp.role}</h3>
                <p className="font-body font-semibold text-acid mb-1">{exp.company}</p>
                <p className="font-mono text-xs text-muted">{exp.period}</p>
                <p className="font-mono text-xs text-muted mt-1">{exp.location}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted tracking-widest mb-6">KEY CONTRIBUTIONS</p>
                <ul className="space-y-4">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-acid mt-0.5 shrink-0">
                        {String(ri + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-ghost/70 text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { degree: 'B.E — ECE', school: 'Sathyabama University', year: '2023', grade: 'CGPA 7.4' },
            { degree: 'Intermediate', school: 'Narayana Junior College', year: '2019', grade: 'CGPA 6.4' },
            { degree: 'SSC (10th)', school: 'CAMP School', year: '2017', grade: 'CGPA 9.3' },
          ].map((edu) => (
            <div key={edu.degree} className="border border-white/5 bg-carbon-2 p-6 hover:border-acid/20 transition-all">
              <div className="font-mono text-xs text-acid mb-3">{edu.year}</div>
              <div className="font-display text-2xl text-ghost mb-1">{edu.degree}</div>
              <div className="font-body text-sm text-muted mb-3">{edu.school}</div>
              <div className="font-mono text-xs text-acid/70">{edu.grade}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
