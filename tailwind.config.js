/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      timer: ['Rajdhani', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}