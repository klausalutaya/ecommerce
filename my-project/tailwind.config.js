/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald-light': ['Oswald-Light'],
        'oswald-medium': ['Oswald-Medium'],
        'oswald-demibold': ['Oswald-DemiBold'],
        'oswald-heavy': ['Oswald-Heavy'],
        'eurostile-regular': ['Eurostile-Regular'],
        'eurostile-extendedregular': ['Eurostile-ExtendedRegular'],
        'eurostile-black': ['Eurostile-Black'],
        'eurostile-extendedblack': ['Eurostile-ExtendedBlack'],
        'open-sans': ['Open Sans-Regular'],
      },
      screens: {
        'xl': { 'min': '1025px', 'max': '1280px' }, // For screens between 1025px and 1280px
        'lg': { 'min': '801px', 'max': '1024px' },  // For screens between 801px and 1024px
        'md': { 'min': '501px', 'max': '800px' },   // For screens between 501px and 800px
        'sm': { 'max': '500px' },                   // For screens up to 500px
      },
      
    },
  },
  plugins: [],
}
