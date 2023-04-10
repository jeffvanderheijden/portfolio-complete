/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/helpers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}

