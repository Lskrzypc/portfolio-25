/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E0F19',
        accent: '#F9FAFB',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
};
