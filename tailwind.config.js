module.exports = {
  purge: {
    node: 'layers',
    content: ["./src/**/*.{html,js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
  plugins: [
    require('flowbite/plugin')
]
}