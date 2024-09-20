/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#790997",
        light:"#FEDCFE",
        dark:"#701F58",
      }
    },
  },
  plugins: [],
}