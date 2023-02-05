/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        "header": "80px",
        "page": "4%"
      },
    },
  },
  plugins: [],
}
