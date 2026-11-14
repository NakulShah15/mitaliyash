/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#5c0a1e',
          dark: '#3a0512',
          light: '#7a1228',
        },
        royal: {
          DEFAULT: '#9b111e',
          light: '#c41e3a',
          dark: '#6e0c15',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#eacd6b',
          dark: '#8c6f16',
          soft: '#f3dfa0',
        },
        ivory: '#fdf6ec',
        cream: '#f8ecd4',
      },
      fontFamily: {
        gujarati: ['"Noto Sans Gujarati"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'petal-fall': {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(var(--drift, 40px)) rotate(360deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.4)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,162,39,0.55)' },
          '50%': { boxShadow: '0 0 0 10px rgba(201,162,39,0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.9s ease-out forwards',
        'petal-fall': 'petal-fall linear forwards',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 30s linear infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'bounce-slow': 'bounce-slow 1.8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.2s ease-out infinite',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(234,205,107,0.6), transparent)',
      },
    },
  },
  plugins: [],
};
