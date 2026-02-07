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
        'iron-blue': '#1e3a5f',
        'iron-teal': '#14b8a6',
        'iron-light-blue': '#e0f2fe',
        'iron-light-green': '#d1fae5',
        'iron-light-gray': '#f3f4f6',
        'iron-dark-gray': '#374151',
      },
    },
  },
  plugins: [],
}

