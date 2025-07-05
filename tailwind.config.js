/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translatey(100%)' },
          '100%': { transform: 'translatey(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 3s ease-in-out',
        slideLeft: 'slideLeft 3s ease-in-out',
        slideUp: 'slideUp 1.5s ease-in-out',
      },
    },
  },
  
  plugins: [],
}