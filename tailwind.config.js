/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{html,js}",
    "./src/page/*.{html,js}"
  ],
  prefix : "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
}
