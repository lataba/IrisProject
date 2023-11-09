/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        violeta: '#9F53FF',
        verde: '#15FAA7',
        azul: '#7A8ADA',
      },
    },
  },
  plugins: [require("daisyui")],
}

