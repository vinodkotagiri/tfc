/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryDarkBlue:'#000B4C',
        primaryCrimson:'#DC143C',
        primaryOrange:'#FF6600'
      },
      fontFamily:{
       nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}