import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-32 bg-carbon-2 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-acid/5 blur-[150px] rounded-full" />
      </div>

      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-px bg-acid" />
          <span className="font-mono text-xs text-acid tracking-widest">LET'S CONNECT</span>
          <div className="w-8 h-px bg-acid" />
        </div>

        <h2 className="font-display text-[clamp(56px,12vw,180px)] leading-none mb-6">
          LET'S BUILD
          <br />
          <span className="text-stroke">SOMETHING</span>
        </h2>

        <p className="font-body text-ghost/50 text-lg max-w-lg mx-auto mb-14 leading-relaxed">
          Open to exciting frontend roles, freelance projects, or just a good conversation about building things that matter.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Email', value: 'chakravarthikudupudi@gmail.com', icon: '✉', href: 'mailto:chakravarthikudupudi@gmail.com' },
            { label: 'Phone', value: '+91 9490919750', icon: '📞', href: 'tel:+919490919750' },
            { label: 'GitHub', value: 'github.com/chakrirailtelit', icon: '⚙', href: 'https://github.com/ksschakravarthi' },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group border border-white/5 bg-carbon p-6 hover:border-acid/50 transition-all text-left"
            >
              <div className="text-2xl mb-3">{c.icon}</div>
              <div className="font-mono text-xs text-muted mb-2">{c.label}</div>
              <div className="font-body text-sm text-ghost group-hover:text-acid transition-colors break-all">{c.value}</div>
            </a>
          ))}
        </div>

        <a
          href="mailto:chakravarthikudupudi@gmail.com"
          className="group relative inline-flex items-center gap-4 bg-acid text-carbon font-body font-semibold px-12 py-5 text-lg tracking-wide overflow-hidden animate-pulse-glow"
        >
          <span className="relative z-10">REACH OUT NOW</span>
          <span className="relative z-10 text-xl group-hover:translate-x-2 transition-transform">→</span>
          <div className="absolute inset-0 bg-ghost translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
