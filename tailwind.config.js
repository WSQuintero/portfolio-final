/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bghome: '#000B0C',
        bghometwo: '#001314',
        parraf: '#C6C6C6',
        title: '#A3A3A3',
        titlecolor: '#A4D9E9',
        titlecolordark: 'rgb(21, 179, 179)'
      }
    }
  },
  plugins: []
}
