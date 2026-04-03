/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', 
          black: '#09090b',
          grey: '#f8fafc',
          gray: '#64748b',
          white: '#ffffff',
          primary: '#4f46e5',
          primaryHover: '#4338ca',
          primaryLight: '#818cf8',
          accent: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
