module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bound: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(15.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        bound: 'bound 0.5s infinite',
      },
    },
  },
  plugins: [],
}
