/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/*.{html,js,jsx,tsx}",
    "./src/components/ParentContainer.jsx",
    "./src/components/Header.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#023020",
        lightGrey: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
