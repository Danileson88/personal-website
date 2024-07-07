/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue"],
      },
      screens: {
        xs: "376px",
        xxs: "360px",
      },
    },
  },
  plugins: [],
};
