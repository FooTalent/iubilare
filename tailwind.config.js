import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 50s infinite linear ",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        slate: {
          500: "#439373",
        },
        "button-green": "#439373",
        "button-hover-green": "#2db27d",
        "active-green": "#29ca8a",
        "background-green": "#A4BEB3",
        "background-grey": "#f5f5f5",
        "background-violet": "#747dd6",
        "background-violet-light": "#DADEFF",
        "747DD6": "#747DD6",
        indigo: {
          400: "#667EEA", // Add your color value here if it's not already defined by Tailwind CSS by default
        },
      },
      borderRadius: {
        sm: "3.23px",
      },
      accioneserror: "var(--accioneserror)",
      accionessuccess: "var(--accionessuccess)",
      accioneswarning: "var(--accioneswarning)",
      azulesblue: "var(--azulesblue)",
      black: "var(--black)",
      inactivo: "var(--inactivo)",
      "variable-collection-white": "var(--variable-collection-white)",
      verdesgreen: "var(--verdesgreen)",
      "verdesgreen-active": "var(--verdesgreen-active)",
      white: "var(--white)",
      "x1-secundario": "var(--x1-secundario)",
    },
    fontFamily: {
      "nav-bar": "var(--nav-bar-font-family)",
      "p-rrafo": "var(--p-rrafo-font-family)",
      "parrafos-p-rrafo": "var(--parrafos-p-rrafo-font-family)",
      raleway: ["Raleway", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      "avatar-shadow": "var(--avatar-shadow)",
      "button-shadow": "var(--button-shadow)",
      "card-shadow": "var(--card-shadow)",
      "light-top-heavy-bottom-light-sides":
        "0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25)",
    },
    fontSize: {
      // Extending fontSize for the custom sizes you need
      "64px": ["64px", "1.25em"], // The second value is the line-height, which you can adjust
      "31px": ["31px", "1.25em"],
      // ... existing fontSize extensions
    },
    backgroundImage: {
      hero: "url('/quehacemos/background.png')",
    },
    typography: {
      DEFAULT: {
        css: {
          "text-black": {
            color: "var(--black)",
          },
        },
      },
    },
  },
  plugins: [],
};
