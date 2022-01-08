module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme('colors'),
      navItem: '#1B3F73',
      lightGray: '#A6ACBE',
      textOrange: '#FA6441',
      darkGray: '#71717A',
      darkerGray: '#4E4E4E',
      blueColor: '#5756D8',
      whiteGray: '#F5F6FA',
      lightGray1: '#AAB2C8',
      gray: '#BDBDBD',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      navActive: '#2A35B8',
      lightGray: '#A6ACBE',
      gray: '#BDBDBD',
      dashboardCard: '#E1F5FE',
      buttonGreen: '#23D764',
      buttonGreenHover: '#1eb856',
      buttonOrange: '#FA6441',
      whiteGray: '#F5F6FA',
      lightGreen: '#E1F5FE',
      blueColor: '#5756D8',
      lightBlue2: '#3A6B0CF',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      blueColor: '#5756D8',
      gray: '#BDBDBD',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
