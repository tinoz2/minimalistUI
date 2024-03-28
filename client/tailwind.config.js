const withMT = require("@material-tailwind/react/utils/withMT");
import keepPreset from "keep-react/preset";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        navbar: "#1B1A55",
        main: "#181818",
        secondary: "#111"
      }
    },
  },
  plugins: [],
  darkmode: "class",
  screens: {
    'sm': {'max': '576px'},
  }
});