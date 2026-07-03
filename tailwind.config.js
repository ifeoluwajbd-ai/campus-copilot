/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind scans these files and creates only the CSS classes we use.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14201D",
        cream: "#F7F5EF",
        sage: {
          50: "#F1F7F2",
          100: "#E1EEE3",
          200: "#C4DEC9",
          400: "#70A67C",
          500: "#4D855B",
          600: "#3D6D49",
          700: "#31573B"
        },
        coral: "#F28C6B",
        gold: "#F0C765"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(29, 54, 46, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
