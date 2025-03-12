// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {
      colors: {
        current: "currentColor",
        chestnut: {
          50: "#fcfbfa",
          100: "#faf0eb",
          200: "#f5d3d4",
          300: "#e8a8ac",
          400: "#e07980",
          500: "#a7575c",
          600: "#b43b40",
          700: "#8c2c2f",
          800: "#621e20",
          900: "#3b1312",
        },
        sepia: {
          50: "#fbfbf8",
          100: "#f7f1e5",
          200: "#eedac8",
          300: "#d8b499",
          400: "#bf886a",
          500: "#a26645",
          600: "#854b2f",
          700: "#643824",
          800: "#44261a",
          900: "#2a1711",
        },
        shadow: {
          50: "#fafaf8",
          100: "#f3f1ec",
          200: "#e4ddd5",
          300: "#c5b9ac",
          400: "#9e907f",
          500: "#7f6e58",
          600: "#66533f",
          700: "#4d3e30",
          800: "#342a22",
          900: "#201a16",
        },
        gray: {
          50: "#f7f9f8",
          100: "#ebf1f5",
          200: "#d2dfe8",
          300: "#a6becc",
          400: "#7397a8",
          500: "#587586",
          600: "#475b68",
          700: "#37444f",
          800: "#262e37",
          900: "#171c24",
        },
        steel: {
          50: "#f8f9f9",
          100: "#eaf1f8",
          200: "#d1ddf0",
          300: "#a7bbdb",
          400: "#7994bf",
          500: "#5e71a4",
          600: "#4c5688",
          700: "#3b4067",
          800: "#282b47",
          900: "#181a2c",
        },
        denim: {
          50: "#f7f9fa",
          100: "#e6f1fb",
          200: "#cadcf7",
          300: "#9fbaea",
          400: "#7492d9",
          500: "#5b6ec9",
          600: "#4a52b3",
          700: "#393e8f",
          800: "#272a64",
          900: "#16193e",
        },
        royalblue: {
          50: "#f8fafb",
          100: "#eaf1fb",
          200: "#d2daf7",
          300: "#acb6ec",
          400: "#888ddc",
          500: "#6e68cf",
          600: "#594cb9",
          700: "#433994",
          800: "#2e2768",
          900: "#1a183f",
        },
        orchid: {
          50: "#f9fafb",
          100: "#edf1fb",
          200: "#dad9f6",
          300: "#b7b4e9",
          400: "#998ad8",
          500: "#7e65c8",
          600: "#6749b1",
          700: "#4d368c",
          800: "#342561",
          900: "#1d1739",
        },
        cerise: {
          50: "#fbfbfb",
          100: "#f6f1f6",
          200: "#edd5ed",
          300: "#d8add6",
          400: "#c87fb9",
          500: "#b15b9e",
          600: "#943f7e",
          700: "#702f5d",
          800: "#4c203e",
          900: "#2c1423",
        },
        blush: {
          50: "#fcfbfa",
          100: "#f9f1f1",
          200: "#f2d4e2",
          300: "#e2aac2",
          400: "#d87c9c",
          500: "#c4577b",
          600: "#a73c5b",
          700: "#802d42",
          800: "#591f2c",
          900: "#341319",
        },
      },
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
    },
  },
  plugins: [],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
};
