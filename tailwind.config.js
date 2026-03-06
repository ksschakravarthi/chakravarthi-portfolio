/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: '#C8FF00',
        'acid-dim': '#9BBF00',
        carbon: '#0A0A0A',
        'carbon-2': '#111111',
        'carbon-3': '#1A1A1A',
        'carbon-4': '#222222',
        ghost: '#F0F0F0',
        muted: '#666666',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,255,0,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(200,255,0,0.8)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
}
