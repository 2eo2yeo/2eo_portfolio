/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ['animate-fadeDown'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular'],
      },
    },
  },
  plugins: [],
};
