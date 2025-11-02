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
        albion: {
          dark: '#0a0e17',
          gray: '#1a1f2e',
          gold: '#d4af37',
          silver: '#c0c0c0',
        },
      },
    },
  },
  plugins: [],
}
