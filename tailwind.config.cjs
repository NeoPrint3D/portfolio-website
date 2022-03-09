module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,tsx}'],
  darkMode: "class",
  theme: {
    fontFamily: {
      "logo": ["'Righteous', cursive"],
    },
    extend: {
      colors: {
        "primary-gray": "#2b2d42",
        "primary-white": "#edf2f4",
        "primary-red": "#ef233c",

      }

    },
  },
  plugins: [require('daisyui')],
}
