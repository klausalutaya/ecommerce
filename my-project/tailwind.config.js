/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Screens directly under theme to override defaults
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '800px'},
      'sm': {'max': '500px'},
    },
    // Extend for adding new utilities without overriding defaults
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
      }
    },
  },
  plugins: [],
}