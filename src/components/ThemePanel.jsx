import { useState } from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';
import GlassBreak from './GlassBreak';

export default function ThemePanel() {
  const { themeKey, setThemeKey, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [breaking, setBreaking] = useState(false);
  const [pendingTheme, setPendingTheme] = useState(null);

  const handleThemeClick = (key) => {
    if (key === themeKey) return;
    setPendingTheme(key);
    setBreaking(true);
    setOpen(false);
  };

  const handleBreakDone = () => {
    if (pendingTheme) setThemeKey(pendingTheme);
    setBreaking(false);
    setPendingTheme(null);
  };

  return (
    <>
      {/* Glass break overlay */}
      {breaking && <GlassBreak onDone={handleBreakDone} />}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 group"
        style={{ color: theme.accent }}
        title="Theme Settings"
      >
        <div
          className="w-10 h-10 border flex items-center justify-center transition-all hover:scale-110"
          style={{
            borderColor: `${theme.accent}50`,
            background: `${theme.accent}10`,
            boxShadow: open ? `0 0 20px ${theme.accent}40` : 'none',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </div>
        {/* Spinning ring */}
        <div
          className="absolute inset-0 rounded-full border animate-spin-slow opacity-30"
          style={{ borderColor: theme.accent, borderTopColor: 'transparent' }}
        />
      </button>

      {/* Panel */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{
          background: `${theme.bg2}F0`,
          backdropFilter: 'blur(20px)',
          borderLeft: `1px solid ${theme.accent}20`,
          borderTop: `1px solid ${theme.accent}10`,
          borderBottom: `1px solid ${theme.accent}10`,
        }}
      >
        <div className="p-6 w-56">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-px" style={{ background: theme.accent }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: theme.accent }}>
              THEME
            </span>
          </div>

          {/* Theme options */}
          <div className="space-y-2">
            {Object.entries(THEMES).map(([key, t]) => (
              <button
                key={key}
                onClick={() => handleThemeClick(key)}
                className="w-full flex items-center gap-3 p-3 border transition-all group text-left"
                style={{
                  borderColor: key === themeKey ? `${t.accent}60` : `${theme.text}10`,
                  background: key === themeKey ? `${t.accent}10` : 'transparent',
                }}
              >
                {/* Color swatch */}
                <div
                  className="w-5 h-5 shrink-0 border"
                  style={{
                    background: t.accent,
                    borderColor: `${t.accent}40`,
                    boxShadow: key === themeKey ? `0 0 8px ${t.accent}80` : 'none',
                  }}
                />
                <span
                  className="font-mono text-xs tracking-wider"
                  style={{ color: key === themeKey ? t.accent : theme.muted }}
                >
                  {t.name}
                </span>
                {key === themeKey && (
                  <span className="ml-auto font-mono text-xs" style={{ color: t.accent }}>✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Warning hint */}
          <div className="mt-6 pt-4 border-t" style={{ borderColor: `${theme.text}10` }}>
            <p className="font-mono text-[9px] leading-relaxed" style={{ color: theme.muted }}>
              ⚡ SWITCHING THEMES WILL SHATTER THE SCREEN
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
