module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        'body': 'hsl(217, 54%, 11%)',
        'card': 'hsl(216, 50%, 16%)',
        'footer': 'hsl(215, 32%, 27%)',
        'fluo-blue': 'hsl(178, 100%, 50%)',
        'card-content': 'hsl(215, 51%, 70%)'
      }
    },
  },
  plugins: [],
}
