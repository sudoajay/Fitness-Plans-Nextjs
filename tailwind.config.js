const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
 
    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",

        // single component styles
        // or you can use a glob pattern (multiple component styles)
  ],
  
  theme: {
    extend: {
      height: theme => ({
        '20': '9.8rem',
        '112': '28rem',
        '120': '30rem',
        '140': '33.5rem',
        '150': '33.5rem',
        '11.5':'2.90rem',

      }),
      minHeight: theme => ({
        '80': '24rem',
        '40': '12rem',
      }),
      
      colors: {
        palette: {
          lighter: '#dbf0ee',
          light: '#33aba0',
          primary: '#009688',
          dark: '#00695f',
          red : '#e60000',
          redDark : '#b30000',

        },
      },
      fontFamily: {
        primary: ['"Poppins"']
      },
      fontSize: {
        small: ['13px', '20px'],
     
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
