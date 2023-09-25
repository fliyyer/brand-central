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
        'dark': 'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(\'../../assets/images/bg-dark.png\'), lightgray 50% / cover no-repeat',
      },      
      blur: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
