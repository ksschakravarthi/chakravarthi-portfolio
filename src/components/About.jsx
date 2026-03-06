import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-32 bg-carbon-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 font-display text-[20vw] text-white/[0.02] leading-none select-none pointer-events-none">
        ABOUT
      </div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-acid/40 to-transparent" />
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-acid" />
            <span className="font-mono text-xs text-acid tracking-widest uppercase">About Me</span>
          </div>

          <h2 className="font-display text-6xl md:text-7xl leading-none mb-8">
            BUILDING
            <br />
            <span className="text-stroke">IMPACT</span>
            <br />
            THROUGH CODE
          </h2>
          <p className="font-body text-ghost/60 leading-relaxed mb-6">
            I'm <span className="text-ghost font-semibold">Kudupudi Satya Seshagiri Chakravarthi</span> — a
            Software Engineer specializing in React.js and enterprise web applications. My work lives at the
            intersection of structured data and human clarity.
          </p>
          <p className="font-body text-ghost/60 leading-relaxed mb-10">
            At RailTel Corporation, I've built healthcare platforms that serve thousands of users — translating
            complex SQL data into dashboards that people actually understand and love using.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:chakravarthikudupudi@gmail.com"
              className="font-mono text-sm text-acid border border-acid/40 px-5 py-3 hover:bg-acid hover:text-carbon transition-all"
            >
              chakravarthikudupudi@gmail.com
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative border border-white/10 bg-carbon-3 p-8 overflow-hidden group">
            <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-acid/5 to-transparent animate-scan pointer-events-none" />
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 bg-acid/10 border border-acid/30 flex items-center justify-center shrink-0">
                <span className="font-display text-2xl text-acid">KC</span>
              </div>
              <div>
                <h3 className="font-body font-semibold text-ghost text-lg">Chakravarthi Kudupudi</h3>
                <p className="font-mono text-xs text-acid tracking-wider mt-1">Software Engineer (Frontend)</p>
                <p className="font-mono text-xs text-muted mt-0.5">RailTel Corporation · Hyderabad</p>
              </div>
            </div>
            {[
              { label: 'Degree', value: 'B.E — ECE, Sathyabama University' },
              { label: 'Graduated', value: '2023 · CGPA 7.4' },
              { label: 'GitHub', value: 'github.com/chakrirailtelit' },
              { label: 'Phone', value: '+91 9490919750' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="font-mono text-xs text-muted tracking-wider">{item.label}</span>
                <span className="font-body text-sm text-ghost/80">{item.value}</span>
              </div>
            ))}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-acid/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-acid/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
