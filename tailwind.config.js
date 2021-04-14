module.exports = {
  purge: {
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx',
    ],
    options: {
      keyframes: true,
    },
  },
  corePlugins: {
    float: false,
    clear: false,
    skew: false,
  },
  darkMode: 'media',
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content',
      },
      screens: {
        'print': {'raw': 'print'}
      }
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    borderWidth: ['responsive', 'hover', 'focus', 'last'],
    extend: {},
  },
  plugins: [],
};
