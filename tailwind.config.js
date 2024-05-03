/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'Yellow':"hsl(47, 88%, 63%)",
        'Grey':"hsl(0, 0%, 50%)"
      },
      fontFamily:{
        'figtree':'figtree'
      }
    },
  },
  plugins: [],
}