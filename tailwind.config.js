/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "thema-color": "#2D347F",
        "inputBorder-color": "#90929E",
        "vaild-color": "#E7322D",
      },
      minHeight: {
        "min-height": "800px",
      },
    },
  },
  plugins: [],
};
