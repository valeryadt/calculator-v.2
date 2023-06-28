/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  './public/index.html'
],
  theme: {
    extend: {
      colors: {
        'metal': '#1e1f1f',
        'number': '#333333',
        'operation': '#f1a43c',
        'symbol': '#a5a5a5',
        'number-press': '#737373',
        'operation-press': '#f3c995',
        'symbol-press': '#d9d9d9'
      },
      height: {
        '128': '30rem',
      },
      borderRadius: {
        'xxl': '5rem',
      },
    },
  },
  plugins: [],
}

