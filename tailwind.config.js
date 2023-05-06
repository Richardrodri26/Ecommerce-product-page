/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Colors */
        'Orange': 'hsl(26, 100%, 55%)',
        'PaleOrange': 'hsl(25, 100%, 94%)',

        /* Secondary Colors */
        'VeryDarkBlue': 'hsl(220, 13%, 13%)',
        'DarkGrayishBlue': 'hsl(219, 9%, 45%)',
        'GrayishBlue': 'hsl(220, 14%, 75%)',
        'LightGrayishBlue': 'hsl(223, 64%, 98%)',


      },
      fontFamily: {
        'Barlow': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

