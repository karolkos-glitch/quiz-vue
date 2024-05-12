export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6F2FA",
          100: "#D1E8F5",
          200: "#9ECEEA",
          300: "#83ACDD",
          400: "#42A0D6",
          500: "#518DD3",
          600: "#206993",
          700: "#174E6D",
          800: "#0F3347",
          900: "#081B26",
          950: "#040C11",
        },
        typo: {
          50: "#ECEFF3",
          100: "#DCE2EA",
          200: "#B7C2D2",
          300: "#94A4BD",
          400: "#6E84A5",
          500: "#536786",
          600: "#42536B",
          700: "#333F52",
          800: "#212936",
          900: "#12161C",
          950: "#080A0D",
        },
      },
    },
  },
  plugins: [],
};
