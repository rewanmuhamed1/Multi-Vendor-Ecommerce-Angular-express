/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: { 
      colors: {
      'medium-green': '#81c408',
    },
    fontFamily:{
      Lato: 'Lato, serif',
    }
  },
  },
  plugins: [],
}

