/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    extend: {
      fontSize: {
        h1: "40px",
        h2: "28px",
        h3: "23px",
        h4: "18px",
        body: "15px",
        overline: "13px",
      },
    },
  },
  plugins: [require("tailwindcss-primeui"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "theme-light": {
          primary: "#635FC7",
          "primary-content": "#ffffff",
          secondary: "#F4F7FD",
          "secondary-content": "#635FC7",
          accent: "#A8A4FF",
          "accent-content": "#ffffff",
          error: "#EA5555",
          "error-content": "#FFFFFF",
          "base-100": "#ffffff",
          "base-100-content": "#000112",
        },
        "theme-dark": {
          primary: "#635FC7",
          "primary-content": "#ffffff",
          secondary: "#F4F7FD",
          "secondary-content": "#635FC7",
          accent: "#A8A4FF",
          "accent-content": "#ffffff",
          error: "#EA5555",
          "error-content": "#FFFFFF",
          "base-100": "#2B2C37",
          "base-100-content": "#FFFFFF",
        },
      },
    ],
  },
};
