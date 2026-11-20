/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        cardBg: "#1e1e1e",
        surfaceBg: "#181818",
        brandOrange: "#fd6f00",
        brandOrangeHover: "#e56300",
        subText: "#9e9e9e"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}