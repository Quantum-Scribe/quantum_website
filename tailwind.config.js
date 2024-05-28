/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Color Overrides
        'black': '#0F0F20',
        'white': '#F0F0F0',
        // Brand Colors
        'midnight-blue': '#0B0B1A',
        'navy-blue': '#000080',
        'rich-indigo': '#2F195F',
        'vibrant-purple': '#7353BA',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
