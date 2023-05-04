/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      // => @media (min-width: 640px) { ... }

      md: "550px",
      // => @media (min-width: 500px) { ... }

      lg: "744px",
      // => @media (min-width: 744px) { ... }

      xl: "950px",
      // => @media (min-width: 950px) { ... }

      "2xl": "1128px",
      // => @media (min-width: 1128px) { ... }

      "3xl": "1639px",
      // => @media (min-width: 1639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
