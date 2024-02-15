/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        nav:"#00458B",
        page:"#9DAAF2",
        card:"#00458B",
        "card-hover":"#3FD2C7",
        "default-text":"#f1f3f5",
        "blue-accent":"#3FD2C7",
        "blue-accent-hover":"#3FD1C8",
      }
    },
  },
  plugins: [],
};
