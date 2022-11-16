/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.js',
    './views/*.ejs',

  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'amit': '#A0DB8E',
        'amit2': '#D9D9D9',
        'sky-bg': '#9AE5FF',
        'sky-bg2': '#D4FFFE',
        'sky-bg3': '#2B92EB'
      },
      fontFamily: {
        lora: " 'Lora', serif",

      },
    },
  },
  plugins: [],
}
