const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-light": "#678349",
        "primary-dark": "#1E2F24",
      },
      fontFamily: {
        sans: ["secularone", ...theme.fontFamily.sans],
        body: "redhatdisplay",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
