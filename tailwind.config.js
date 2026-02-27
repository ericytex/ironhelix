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
        'iron-blue-dark': '#0f1d2f',
        'iron-blue-light': '#2563eb',
        'iron-teal': '#14b8a6',
        'iron-light-blue': '#e0f2fe',
        'iron-light-green': '#d1fae5',
        'iron-light-gray': '#f3f4f6',
        'iron-dark-gray': '#374151',
        'iron-accent': '#3b82f6',
        'iron-accent-dark': '#1d4ed8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'iron': '0 1px 3px rgba(0,0,0,0.04)',
        'iron-lg': '0 4px 12px rgba(0,0,0,0.05)',
        'iron-xl': '0 20px 40px -12px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

