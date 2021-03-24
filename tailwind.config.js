const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      fucshia: colors.fuchsia,
      rose : colors.rose,
      violet : colors.violet,
      lightblue: colors.lightBlue,
      lime: colors.lime
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
