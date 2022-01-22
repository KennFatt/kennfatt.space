const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/{pages,components}/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#678349",
        "primary-dark": "#1E2F24",
        "base-light": "#F9F9F8",
        "base-light-dim": "#E4E4E4",
        "base-dark": "#20201f",
        "base-dark-dim": "#2f2f2f",
        "base-text-dark": "#c8d2bd",
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
  plugins: [],
};
