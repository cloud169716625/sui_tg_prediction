// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        darkGrot: ["Darker Grotesque"],
        inter: ["Inter"],
      },
      colors: {
        bluePrimary: "#732669",
        grayPrimary: "#09EAB5",
      },
      backgroundImage: {
        homebackground: "url(/public/images/main-back.svg)",
      },
    },
  },
  plugins: [],
};
