/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5AC3BA',
        secondary: '#5E2028',
        'secondary-dark': '#342222',
        dark: '#010101',
        cgreen: '#DEEFD0',
        theme: {
          aqua: '#0EEFD0'
        },
        light: {
          100: '#DDDFE1',
          200: '#EFF0F6',
          300: '#eff0f6'
        }
      },
      fontFamily: {
        primary: ['Mulish', 'sans-serif'],
        secondary: ['KC Durham Boxcar', 'sans-serif']
      },

      spacing: {
        25: '100px'
      },

      backgroundImage: {
        'hero-header':
          'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(247, 247, 247, 0) 18.75%, rgba(117, 105, 105, 0.05) 34.15%, rgba(55, 130, 135, 0.05) 41.83%, rgba(55, 130, 135, 0.1) 60.26%, rgba(90, 195, 186, 0.2) 86.7%, rgba(90, 195, 186, 0.24) 100%)',
        'hero-bottom':
          ' linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(247, 247, 247, 0) 18.75%, rgba(117, 105, 105, 0.05) 34.15%, rgba(55, 130, 135, 0.05) 41.83%, rgba(55, 130, 135, 0.15) 69.62%, rgba(90, 195, 186, 0.12) 86.7%, rgba(90, 195, 186, 0.24) 100%)',
        'mint-btns':
          'linear-gradient(to bottom, rgba(32,36,39,.3), rgba(90,195,186,.3))',
        btn: 'linear-gradient(#121212 0%, #202427 100%)',
        join: 'linear-gradient(rgba(0,0,0,0.8) , rgba(0,0,0,0.8)), url(../public/images/Join_the_Cimmunity.png)',
        visit: 'linear-gradient(#5ac3ba 0%, #eff0f6 100%)',
        presalte: 'linear-gradient(#121212 0%, rgba(32,36,39,.28) 100%)',
        'presalte-flower':
          "url('../public/images/Desktop/Not Connected/wallet.png')",
        progress: 'linear-gradient(#202427 0%, #130608 100%)',
        'progress-fill': 'linear-gradient(#378287 0%, #1c4144 100%)',
        'btn-connect': 'linear-gradient(#121212 0%, #2D625D 100%)',
        pfp: 'linear-gradient(rgba(32,36,39,.4) 0%, rgba(239,240,246,.4) 100%)',
        pharoah: 'linear-gradient(#121212 0%, #173639 100%)'
      },
      fontSize: {
        '1.5xl': '22px',
        '10xl': '144px'
      },
      boxShadow: {
        'utility-card': '0px 3px 6px #5ac3ba',
        'whitelist-card': '0px 3px 6px rgba(0, 0, 0, 0.7)',
        presale: '0px 3px 6px rgba(90, 195, 186, 0.23)'
      },
      dropShadow: {
        popup: '0px 13px 36px #061a1c'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
