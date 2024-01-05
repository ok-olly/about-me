/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ibm: "IBM Plex Sans KR, sans-serif",
        gowun: "Gowun Dodum, sans-serif",
      },
      colors: {
        primary: "#6B8F36",
        secondary: "#415723",
        black: "#261F22",
        // darkPrimary: "#C2FF16",
        darkPrimary: "#92C10E",
        // darkSecondary: "#60FF17",
        darkSecondary: "#4EC717",
      },
      screens: {
        pointerhover: {
          raw: "(hover: hover) and (pointer: fine)",
        },
      },
    },
  },
  plugins: [],
};
