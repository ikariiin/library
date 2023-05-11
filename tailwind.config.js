import { fontFamily as defaultFontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-layout": "1fr 2fr",
        "list-item-layout": "2fr 3fr",
      },
    },
    fontFamily: {
      serif: ["VollkornVariable", "Vollkorn", ...defaultFontFamily.serif],
    },
  },
  plugins: [],
};
