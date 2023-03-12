/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'default': "url('/img/bg.svg')"
      },
      colors: {
        dilaw: {
          100: "#FFF7E7",
          200: "#FFF3D9",
          300: "#FAD173",
          400: "#FABC2F",
          500: "#83631C"
        }
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0px)', backgroundColor: "red" },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        fadeIn: {
          '0%': { opacity: "0%" },
          '100%': { opacity: "100%" }
        },
        fadeOut: {
          '0%': { opacity: "100%" },
          '100%': { opacity: "0%" }
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        fadeOut: 'fadeOut 1s ease-out',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '475px'}
    },
  },
  plugins: []
};
