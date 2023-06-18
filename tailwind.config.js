/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      textcolor: "#540b0e",
      cardbackground: "#F6EFE1"
    },
    fontFamily: {
      'banner-heading': ['Courgette', 'cursive'],
      heading: ['Tangerine', 'cursive'],
      body: ['Itim', 'cursive'],
    },
  },
  plugins: [],
}

