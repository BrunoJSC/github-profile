/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header":  "url('/src/assets/hero-image-github-profile.png')"
      }
    },
  },
  plugins: [],
}