module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik']
      },
      spacing: {
        136: '544px',
        172: '690px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
