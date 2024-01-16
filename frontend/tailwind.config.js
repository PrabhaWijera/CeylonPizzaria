/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  // add npm npm i tailwind-scrollbar

  plugins: [
    require('tailwind-scrollbar'),
  ],
}