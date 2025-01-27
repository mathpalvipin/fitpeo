/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')


module.exports = withMT({
  //purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/images/*.{js,jsx,ts,tsx}'],
  content: [
    './src/**/**/**/**/*.{html,js}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  // theme: tailwind.theme,
  theme: {
    extend: {
     
    },
  },
  plugins: [],
})