/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      colors: {
        'white': '#f5f5f5',
        'black': '#000',
        'black-500': '#111112',
        'gray-500': '#7C7C8A',
        'blue-cyan': '#61DAFB',
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
