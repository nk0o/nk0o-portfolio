import colors from 'tailwindcss/colors';
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#1a74e5",
      },
    },
  },
  plugins: [],
};