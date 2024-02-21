/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#407fff",
        gray: "#f1f0f0",
      },
    },
  },
  plugins: [],
};
