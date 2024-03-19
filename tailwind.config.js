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
        'background-grey': '#f5f5f5',
        'background-violet': '#747dd6',
        'background-violet-light': '#DADEFF',
        '747DD6': '#747DD6',
      },
      borderRadius: {
        'sm': '3.23px',
      },
        accioneserror: "var(--accioneserror)",
        accionessuccess: "var(--accionessuccess)",
        accioneswarning: "var(--accioneswarning)",
        "azulesblue": "var(--azulesblue)",
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
      },
      boxShadow: {
        "avatar-shadow": "var(--avatar-shadow)",
        "button-shadow": "var(--button-shadow)",
        "card-shadow": "var(--card-shadow)",
        'light-top-heavy-bottom-light-sides': '0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25)',
        },
        backgroundImage: {
          'hero': "url(./quehacemos/background.png)",
        },
        typography: {
          DEFAULT: {
            css: {
              'text-black': {
                color: 'var(--black)',
              },
            }
          }
        }
    },
  plugins: [],
}