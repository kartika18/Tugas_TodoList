/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
      },
      colors: {
        brown: "#4f3824",
        redish: "#f06543",
        yellow: "#d0e37f",
        grayish: "#e0dfd5",
      },
    },
  },
  plugins: [],
};
