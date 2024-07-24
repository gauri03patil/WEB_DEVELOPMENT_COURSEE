/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13: '13px'
      },
      fontSize: {
        '10xl': ['8rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}

