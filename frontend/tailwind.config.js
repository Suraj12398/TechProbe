/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#121063',
      'sky': '#0284c7',
      'lightsky': '#0ea5e9',
      'darksky': '#0369a1',
      'lightblue': '#93c5fd',
      'slategray': '#cbd5e1',
      'lightgray': '#e2e8f0',
      'darkgray': '#64748b'
    },
    fontFamily : {
      sans: ['Source Sans 3', 'sans-serif']
    }
  },
  plugins: [],
}

