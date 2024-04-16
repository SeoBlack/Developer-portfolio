/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding, gap",
      },
    },
    colors: {
      ...colors,
      lighterDarkBlue: "#192248",
      darkBlue: "#101630",
      cyan: "#4BB2D0",
      purple: "#4521BA",
      lightPurple: "#6B47DD",
      white: "#FEFEFC",
      grey: "rgba(153, 153, 153, 0.80)",
      gradient: "linear-gradient(#4521BA, #4BB2D0);",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
