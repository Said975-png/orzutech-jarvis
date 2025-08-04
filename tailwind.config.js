/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-arc': 'neonArc 6s ease-in-out infinite',
        'scroll': 'scroll 8s linear infinite',
        'scroll-fast': 'scroll 15s linear infinite',
        'scroll-mobile': 'scrollMobile 20s linear infinite',
      },
      keyframes: {
        neonArc: {
          '0%, 100%': {
            transform: 'translateY(100px) scale(0.8)',
            opacity: '0.3'
          },
          '50%': {
            transform: 'translateY(-50px) scale(1.2)',
            opacity: '0.8'
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          },
        },

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
