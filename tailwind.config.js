/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./*{.html,js,jsx}",
      "./components/*.{html,js,jsx}",
      "./pages/**/*.{html,js,jsx}",
      "./pages/home/sections/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2B1200',
            light: '#564D47'
          },
          accent: '#F7BA0A'
          
        }
      },
    },
    plugins: [],
  }
  
  