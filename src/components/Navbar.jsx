import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/constants';
import { useTheme } from '../context/ThemeContext';
import ResumeDownloadBtn from './ResumeDownloadBtn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-carbon/90 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-widest text-acid">
          CHAKRA<span className="text-ghost">VARTHI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wider text-muted hover:text-acid transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - desktop only compact download */}
        <div className="hidden md:block">
          <ResumeDownloadBtn className="!py-2.5 !px-5 !text-xs" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
        >
          <span className={`block w-6 h-0.5 bg-ghost transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ghost transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ghost transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-carbon-2 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl tracking-widest text-ghost hover:text-acid transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
