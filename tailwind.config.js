/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aircraft-blue': '#1e3a5f',
        'aircraft-orange': '#ff6b35',
        'aircraft-gray': '#4a5568',
      },
    },
  },
  plugins: [],
}
