/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          dark: "var(--color-text-dark)",
          muted: "var(--color-text-muted)",
          colored: "var(--color-text-colored)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          colored: "var(--color-colored)",
        },
      },
    },
  },
  plugins: [],
};
