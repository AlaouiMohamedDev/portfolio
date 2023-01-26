/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Pblack:"#0b0b13",
        Pgreen:"#2fbf71",
        PDark:"#10101A"
      },
      fontFamily:{
        'josefin':['Josefin Sans', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        Pwide: '.5em',
        PSemiwide :'.1em'
      },
      zIndex: {
       '75': 75,
       '90':90,
       '100': 100,

      }
    },
  },
  plugins: [],
}
