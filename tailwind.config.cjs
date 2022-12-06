/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'],
        ubuntu: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        Nunito: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#3550DC',
        2: '#326FE2',
        secondery: '#27E9F7',
        grayCustom: '#999999',
      },
    },
  },
  plugins: [],
};
