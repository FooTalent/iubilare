/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-green': '#439373',
        'background-green': '#A4BEB3',
        'active-green': '#29ca8a'
      },
    },
  },
  plugins: [],
}