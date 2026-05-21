/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: { primary: "#e85d2a", accent: "#d44e20" },
  }},
  plugins: [],
};
