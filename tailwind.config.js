/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'inter': ['Inter', 'sans'],
        'roboto': ['Roboto', 'sans'],
        'calligraft': ['Calligraffitti', 'cursive'],
        'lato': ['Lato', 'sans'],
        'source-sans' : ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        'primary-color': '#FFE512',
        'typo-color': '#5C5C5C',
        'text-board-color': '#3A3A3A',
        'dropdown-hover': '#4E5356'
      },
      backgroundImage: {
        'bg-content': 'url(\'../../brand-central/src/assets/images/bg-dark.png\')',
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },           
    },
  },
  plugins: [],
}
