/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': '2fr 1fr',

      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
