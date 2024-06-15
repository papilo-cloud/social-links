/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'Sans-Serif']
      },
      colors: {
        grey: {
          normal: '#333333',
          dark: '#1f1f1f'
        },
        green: {
          light: '#c5f82a'
        },
        black: {
          off: '#141414'
        }
      }
    },
  },
  plugins: [],
}

