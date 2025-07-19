/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',
        'secondary': '#141414',
        'card': '#1f1f1f',
        'hover': '#262626',
        'text-primary': '#f0f0f0',
        'text-secondary': '#a8a8a8',
        'text-tertiary': '#6b6b6b',
        'accent-primary': '#4F46E5',
        'accent-secondary': '#7C3AED',
        'accent-success': '#10B981',
        'accent-error': '#EF4444',
        'border-color': '#2a2a2a',
        'border-hover': '#3a3a3a',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [],
}