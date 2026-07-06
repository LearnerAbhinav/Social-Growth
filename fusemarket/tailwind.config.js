/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#141652",
        pink: "#E91467",
        gold: "#F5A623",
        "navy-light": "#1e2070",
        "pink-dark": "#c00f57",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out infinite 1.5s',
        'pulse-pink': 'pulsePink 2s ease-in-out infinite',
        'bar-grow': 'barGrow 1.5s ease-out forwards',
        'ring-fill': 'ringFill 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulsePink: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(233,20,103,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(233,20,103,0)' },
        },
        barGrow: {
          '0%': { height: '0%' },
          '100%': { height: 'var(--bar-height)' },
        },
        ringFill: {
          '0%': { strokeDashoffset: '283' },
          '100%': { strokeDashoffset: 'var(--ring-offset)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f8f0ff 0%, #ffe8f3 50%, #fff8f0 100%)',
        'navy-gradient': 'linear-gradient(135deg, #141652 0%, #1e2070 100%)',
        'pink-gradient': 'linear-gradient(135deg, #E91467 0%, #ff3385 100%)',
      }
    },
  },
  plugins: [],
}
