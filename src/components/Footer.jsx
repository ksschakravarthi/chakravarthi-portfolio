export default function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-acid">
          CHAKRA<span className="text-ghost">VARTHI</span>
        </span>
        <span className="font-mono text-xs text-muted">
          © 2025 · Software Engineer · Hyderabad, India
        </span>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs text-acid">Available</span>
        </div>
      </div>
    </footer>
  );
}
