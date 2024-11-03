/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish_aeca05', 'Mulish_Fallback_aeca05', 'sans-serif'],
      },
    },
  },
  plugins: [],
}