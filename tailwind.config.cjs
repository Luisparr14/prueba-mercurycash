/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#673ae5",
          light: "#7e4df2",
        },
      },
    },
  },
  mode: "jit",
  plugins: [],
}