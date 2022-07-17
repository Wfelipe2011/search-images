const palettes = require('./palettes');

module.exports = {
  content: [
    './components/**/*.{vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],

  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    fontSize: {
      'display-2xl': ['4.5rem', 1],
      'display-xl': ['3.75rem', 1],
      'display-lg': ['3rem', 1],
      'display-md': ['2.25rem', '2.5rem'],
      'display-sm': ['1.875rem', '2.25rem'],
      'display-xs': ['1.5rem', '2rem'],
      'xl': ['1.25rem', '1.875rem'],
      'lg': ['1.125rem', '1.75rem'],
      'md': ['1rem', '1.5rem'],
      'sm': ['0.875rem', '1.25rem'],
      'xs': [' 0.75rem', '1.125rem'],
    },
    extend: {
      colors: {
        ...palettes,
      },
    },
  },
  plugins: [],
};
