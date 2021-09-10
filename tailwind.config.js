module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['"Urbanist"', 'cursive']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
