module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    boxShadow:{
      'custom-light': "0 0 10px #313131",
      'custom-dark': "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        pink: {
          DEFAULT: '#ffc0cb',
          },
          dark: {
            DEFAULT:"#010101",
            100:"#0a0b1e",
            200:"#16181d",
            300:"#16181d",
            500:"#0f1115",
            DEFAULT:"#202125",
          }
      }
    },
  },
  variants: {
    extend: {
      boxShadow:[' dark']
    },
  },
  plugins: [],
}
