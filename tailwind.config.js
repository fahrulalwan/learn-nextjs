// const { readFileSync } = require('fs');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/typography'),
    // readFileSync(require.resolve('@tailwindcss/typography')),
  ],
};
