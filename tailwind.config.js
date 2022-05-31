module.exports = {
  purge: {
    node: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-yellow': '#FDFFD4',
        'c-purple': '#E8D7FF',
        'c-pink': '#FFD3E8',
        'c-orange': '#F39C91',
        'c-green': '#A5C694'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}