import { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  acid: {
    name: 'ACID GREEN',
    accent: '#C8FF00',
    accentDim: '#9BBF00',
    bg: '#0A0A0A',
    bg2: '#111111',
    bg3: '#1A1A1A',
    text: '#F0F0F0',
    muted: '#666666',
    preview: 'from-[#C8FF00] to-[#9BBF00]',
  },
  crimson: {
    name: 'CRIMSON',
    accent: '#FF2D55',
    accentDim: '#CC0033',
    bg: '#080508',
    bg2: '#120810',
    bg3: '#1A0D16',
    text: '#F5EEF0',
    muted: '#664450',
    preview: 'from-[#FF2D55] to-[#CC0033]',
  },
  cyan: {
    name: 'CYBER CYAN',
    accent: '#00F5FF',
    accentDim: '#00C0CC',
    bg: '#050A0A',
    bg2: '#091212',
    bg3: '#0D1A1A',
    text: '#EEF8F8',
    muted: '#3A6060',
    preview: 'from-[#00F5FF] to-[#00C0CC]',
  },
  amber: {
    name: 'AMBER',
    accent: '#FF9500',
    accentDim: '#CC7700',
    bg: '#090700',
    bg2: '#120E00',
    bg3: '#1A1400',
    text: '#F8F3EE',
    muted: '#60500A',
    preview: 'from-[#FF9500] to-[#CC7700]',
  },
  violet: {
    name: 'NEON VIOLET',
    accent: '#BF5FFF',
    accentDim: '#9933DD',
    bg: '#080508',
    bg2: '#100810',
    bg3: '#180D1A',
    text: '#F2EEF8',
    muted: '#5A3366',
    preview: 'from-[#BF5FFF] to-[#9933DD]',
  },
  ghost: {
    name: 'GHOST WHITE',
    accent: '#1A1A1A',
    accentDim: '#333333',
    bg: '#F5F5F0',
    bg2: '#EBEBEB',
    bg3: '#E0E0DA',
    text: '#111111',
    muted: '#888888',
    preview: 'from-[#1A1A1A] to-[#555555]',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('acid');
  const theme = THEMES[themeKey];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-dim', theme.accentDim);
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--bg2', theme.bg2);
    root.style.setProperty('--bg3', theme.bg3);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--muted', theme.muted);
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
  }, [themeKey, theme]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, theme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
