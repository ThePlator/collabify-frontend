// tailwind.config.ts
export default {
  darkMode: 'class', // important: use 'class', not 'media'
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
