/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pulse: {
          50: '#eef4ff',
          100: '#dce8ff',
          200: '#bed4ff',
          300: '#94b8ff',
          400: '#6e95fa',
          500: '#4b72f5',
          600: '#3558eb',
          700: '#2d47d8',
          800: '#2c3caf',
          900: '#293889',
          950: '#1a2454',
        },
        luxury: {
          gold: '#c9a962',
          'gold-light': '#e8d5a3',
          ink: '#0a0f1a',
          slate: '#131b2e',
          mist: '#f7f8fc',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 8px 48px -8px rgba(15, 23, 42, 0.06)',
        'luxury-lg': '0 8px 40px -8px rgba(15, 23, 42, 0.12), 0 16px 64px -16px rgba(53, 88, 235, 0.08)',
        glow: '0 0 40px -8px rgba(53, 88, 235, 0.35)',
        sidebar: '4px 0 24px -4px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-vertical': 'marqueeVertical 25s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotateX(8deg) rotateY(-12deg)' },
          '50%': { transform: 'translateY(-12px) rotateX(10deg) rotateY(-8deg)' },
        },
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 40% 20%, rgba(53, 88, 235, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201, 169, 98, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(53, 88, 235, 0.05) 0px, transparent 50%)',
        'btn-gradient': 'linear-gradient(135deg, #3558eb 0%, #2d47d8 50%, #293889 100%)',
        'sidebar-gradient': 'linear-gradient(180deg, #0f1629 0%, #0a0f1a 100%)',
      },
    },
  },
  plugins: [],
};
