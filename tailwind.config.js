/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc2',
          950: '#1e2a6b',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        'gold-light': '#fbbf24',
        'gold-dark': '#b45309',
        'navy-deep': '#0f172a',
        'navy-light': '#1e3a5f',
        'navy-mid': '#1e2a6b',
        'cream-white': '#faf8f5',
        'soft-gray': '#f1f5f9',
        'text-secondary': '#64748b',
      },
      fontFamily: {
        serif: [
          'Playfair Display',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/patterns/hero-bg.svg')",
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #b45309 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e2a6b 50%, #1e3a5f 100%)',
        'navy-gold-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e2a6b 50%, #364fc2 100%)',
        'gold-text-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(251, 191, 36, 0.3)',
        'navy': '0 4px 20px rgba(15, 23, 42, 0.2)',
        'gold-lg': '0 8px 30px rgba(251, 191, 36, 0.25)',
        'navy-lg': '0 8px 30px rgba(15, 23, 42, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
