/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // Tailwind scans these files and creates only the CSS classes we use.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        cream: "#F7F8FA",
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81"
        },
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
        soft: "0 18px 50px rgba(15, 23, 42, 0.07)",
        glow: "0 20px 80px rgba(99, 102, 241, 0.22)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
