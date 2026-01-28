/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        arabic: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
