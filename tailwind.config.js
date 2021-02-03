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
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-small': "url('assets/home/mobile/image-hero-coffeepress.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};