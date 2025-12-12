/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fluxie-orange': '#f77f00',
        'fluxie-blue': '#003049',
        'fluxie-cream': '#fff8f0',
      },
      fontFamily: {
        'caprasimo': ['Caprasimo', 'cursive'],
      },
    },
  },
  plugins: [],
}
