/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        my_violet: '#9F53FF',
        my_green: '#15FAA7',
        my_blue: '#7A8ADA',
      },
    },
    dark: {
      100: '#333333',
      200: '#444444',
    },
  },
  plugins: [require('daisyui')],
};