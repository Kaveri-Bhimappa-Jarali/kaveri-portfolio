/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "23ch" }, // Adjust to text length
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(23) forwards", // match with width in ch
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
}
