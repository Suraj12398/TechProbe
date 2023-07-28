/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    purge: [],
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      midnight: "#121063",
      sky: "#0284c7",
      lightsky: "#0ea5e9",
      darksky: "#0369a1",
      lightblue: "#93c5fd",
      slategray: "#cbd5e1",
      lightgray: "#e2e8f0",
      darkgray: "#64748b",
    },
    fontFamily: {
      sans: ["Source Sans 3", "sans-serif"],
    },
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
