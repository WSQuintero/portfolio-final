/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bghome: '#000B0C',
        bghometwo: '#001314',
        parraf: '#A3A3A3',
        title: '#C6C6C6',
        titlecolor: '#A4D9E9',
        titlecolordark: 'rgb(21, 179, 179)'
      },
      fontFamily: {
        cambria: [
          'Cambria',
          'Cochin',
          'Georgia',
          'Times',
          'Times New Roman',
          'serif'
        ],
        bevan: ['Bevan', 'serif']
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle, #37969c 0%, #000000 35%, #001213 100%)'
      }
    }
  },
  plugins: []
}
