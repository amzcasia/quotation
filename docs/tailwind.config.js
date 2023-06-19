/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js,jsx}","./src/entries/*.jsx","index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#999999',
          light: '#DDDDDD',
          dark: '#555555'
        }
      }
    },
  },
  plugins: [],
}

