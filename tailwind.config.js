/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C41230',
          dark: '#8B0A1E',
          light: '#D4384E',
        },
        secondary: {
          DEFAULT: '#1A56DB',
          dark: '#1E3A8A',
          light: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}
