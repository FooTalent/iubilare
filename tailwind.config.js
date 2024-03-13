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
        'button-hover-green': '#2db27d',
        'active-green': '#29ca8a',
        'background-green': '#A4BEB3',
        '747DD6': '#747DD6',
      },
    },
  },
  plugins: [],
}