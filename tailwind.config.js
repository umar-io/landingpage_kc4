/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'navTextColor': '#333333'
    },
    extend: {},
  },
  fontFamily: {
    DM: ["Roboto", "sans-serif"],
  },
  plugins: [],
};
