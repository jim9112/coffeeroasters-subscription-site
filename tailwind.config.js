const colors = require('tailwindcss/colors');

module.exports = {
  purge: { enabled: true, content: ['*.html', 'js/*.js'] },
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
      'light-grey': '#F4F1EB',
    },
    screens: {
      tablet: '641px',
      comp: '1008px',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-small': "url('assets/home/mobile/image-hero-coffeepress.jpg')",
        'hero-med': "url('assets/home/tablet/image-hero-coffeepress.jpg')",
        'hero-lg': "url('assets/home/desktop/image-hero-coffeepress.jpg')",
        'about-hero-small':
          "url('assets/about/mobile/image-hero-whitecup.jpg')",
        'about-hero-med': "url('assets/about/tablet/image-hero-whitecup.jpg')",
        'about-hero-lg': "url('assets/about/desktop/image-hero-whitecup.jpg')",
        'about-quality-small': "url('assets/about/mobile/bg-quality.png')",
        'plan-hero-small': "url('assets/plan/mobile/image-hero-blackcup.jpg')",
        'plan-hero-med': "url('assets/plan/tablet/image-hero-blackcup.jpg')",
        'plan-hero-lg': "url('assets/plan/desktop/image-hero-blackcup.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  // plugins: [require('@tailwindcss/forms')],
};
