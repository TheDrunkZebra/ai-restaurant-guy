/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',  // Updated to match Manus site
        surface: '#0E131B',
        primary: '#00E0FF',  // Neon cyan/light blue
        secondary: '#39FF14',  // Neon green (bright lime)
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
