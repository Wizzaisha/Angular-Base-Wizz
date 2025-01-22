/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    extend: {
      fontSize: {
        h1: "24px",
        h2: "18px",
        h3: "15px",
        h4: "12px",
        body: "13px",
        overline: "12px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        background: {
          DEFAULT: "var(--color-background)",
        },
        text: {
          DEFAULT: "var(--color-text)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
