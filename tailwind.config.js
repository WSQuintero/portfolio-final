/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bghome: '#000B0C',
        bghometwo: '#001314',
        parraf: '#A3A3A3',
        title: '#C6C6C6',
        titlecolor: '#A4D9E9',
        titlecolordark: 'rgb(21, 179, 179)',
        bghomelight: '#F0F4F5', // Fondo principal
        bghometwolight: '#F5F5F5', // Fondo secundario
        parraflight: '#666666', // Texto de párrafo
        titlelight: '#999999', // Texto de título
        titlecolorlight: '#80CCE6', // Color de título
        titlecolordarklight: '#0088B3' // Color de título oscuro
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
        bevan: ['Bevan', 'serif'],
        'open-san': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle, #37969c 0%, #000000 35%, #001213 100%)'
      }
    }
  },
  plugins: []
}
