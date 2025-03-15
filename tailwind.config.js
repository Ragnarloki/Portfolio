/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary' : 'rgb(255, 0, 0)',
        'secondary' : 'rgb(95, 158, 160)',
      }
    },
    fontFamily : {
      'hero-font':'Roboto'
    }
  },
  plugins: [],
}

