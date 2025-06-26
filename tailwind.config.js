/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        yellow: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        },
        gray: {
          700: '#374151',
          750: '#282A36',
          800: '#1F2937',
          850: '#161E2E',
          900: '#111827',
        }
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(245, 158, 11, 0.39)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};