/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'inter': ['Inter', 'sans'],
        'roboto': ['Roboto', 'sans'],
      },
      colors: {
        'primary-color': '#FFE512',
        'typo-color': '#5C5C5C'
      }
    },
  },
  plugins: [],
}
