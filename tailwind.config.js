const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/{pages,components}/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-light": "#678349",
        "primary-dark": "#1E2F24",
        "base-light": "#F9F9F8",
        "base-dim": "#E4E4E4",
      },
      fontFamily: {
        sans: ["redhatdisplay", ...theme.fontFamily.sans],
        serif: ["secularone", ...theme.fontFamily.serif],
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
