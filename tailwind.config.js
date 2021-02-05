const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: 'Barlow, sans-serif',
      heading: 'Fraunces, serif',
    },
    colors: {
      'dark-cyan': '#0E8784',
      'dark-grey-blue': '#333D4B',
      'light-cream': '#FEFCF7',
      grey: '#83888F',
      'pale-orange': '#FDD6BA',
      black: colors.black,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-small': "url('assets/home/mobile/image-hero-coffeepress.jpg')",
        'hero-med': "url('assets/home/tablet/image-hero-coffeepress.jpg')",
        'hero-lg': "url('assets/home/desktop/image-hero-coffeepress.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
