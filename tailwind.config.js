/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bg-primary': '#121212',
          'bg-secondary': '#1e1e1e',
          'text-primary': '#e0e0e0',
          'text-secondary': '#b3b3b3',
          'accent-color': '#007bff',
          'accent-color-hover': '#0056b3',
          'border-color': '#2c2c2c',
        }
      },
    },
    plugins: [],
  }