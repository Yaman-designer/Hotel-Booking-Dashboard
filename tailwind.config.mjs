/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{css}"],

  theme: {
    extend: {
     colors: {
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))", 
      },
      borderRadius: {
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        arabic: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};

