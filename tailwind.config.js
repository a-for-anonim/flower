/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#92003A",
          primary: "#F62477",
          soft: "#FFADEE",
          gold: "#FFE185",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(146, 0, 58, 0.2), 0 0 15px rgba(255, 225, 133, 0.4)',
        'card-hover': '0 20px 40px -10px rgba(146, 0, 58, 0.35), 0 0 25px rgba(246, 36, 119, 0.5)',
        'glow': '0 0 25px rgba(255, 225, 133, 0.8)',
      },
    },
  },
  plugins: [],
};
