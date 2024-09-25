/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f0542",
        light:"#FEDCFE",
        dark:"#701F58",
        sec:"#feb640",
      }
     
    },
  },
  plugins: [],
}