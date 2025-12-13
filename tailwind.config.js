/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          glow: 'rgba(245, 158, 11, 0.5)',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}