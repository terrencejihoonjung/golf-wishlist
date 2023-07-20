/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zanah: {
          50: "#f6faf3",
          100: "#e9f4e4",
          200: "#d0e7c6",
          300: "#afd69f",
          400: "#84ba6e",
          500: "#629e49",
          600: "#4d8138",
          700: "#3e662f",
          800: "#345229",
          900: "#2c4423",
          950: "#14240f",
        },
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
      },
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
      },
    },
  },
  plugins: [],
};
