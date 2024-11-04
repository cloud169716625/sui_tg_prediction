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
        mainBg: "#260D23",
        bluePrimary: "#732669",
        grayPrimary: "#09EAB5",
        greenPrimary: "#08C498",
        pinkBorder: "#9A328C",
        buttonBg: "#C858B9",
      },
      backgroundImage: {
        homebackground: "url(/public/images/main-back.svg)",
      },
    },
  },
  plugins: [],
};
