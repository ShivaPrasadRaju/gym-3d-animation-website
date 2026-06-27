import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        secondary: '#111111',
        accent: '#C1121F',
        primaryText: '#FFFFFF',
        secondaryText: 'rgba(255,255,255,0.65)',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
