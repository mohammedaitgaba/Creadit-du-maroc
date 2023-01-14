/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    // primary and secondary are the dominant colors
    primary: "#BD3944", // red (dark)
    secondary: "#042E27", // green (dark)
    tertiary: "#364966", // blue (dark)
    main:"#0a72d1",
    // the rest follow text color when dark mode is enabled you can change the colors to match your theme
    quaternary: "#111111", // black (dark) -> for text
    quinary: "white", // white -> for text
    senary: "#232122", // bg color (dark)
    gray: "#F4F4F4"
  },
  plugins: [],
}