/** @type {import('tailwindcss').Config} */

content: [
  "./src/**/*.{html,ts}",
  "./index.html"
],

module.exports = {
  content: ["./src/**/*.{html,ts}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        zoomIn: "zoomIn 0.6s ease-out forwards"
      }
    }
  },
  plugins: []
}