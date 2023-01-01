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
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
  },
  plugins: []
};
