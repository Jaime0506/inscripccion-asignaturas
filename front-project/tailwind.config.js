const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|image|input|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#c42e2e"
      },
      fontFamily: {
        roboto: "Roboto",
        open: "Open Sans"
      }
    },
  },
  plugins: [nextui()],
}