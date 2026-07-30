/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B2A4A',
          dark: '#6B1E38',
          light: '#b03a5e',
        },
        slate: {
          brand: '#3D4F6B',
          'brand-dark': '#2c3a52',
        },
        gold: {
          DEFAULT: '#F5A623',
          light: '#ffc04f',
        },
        dark: {
          DEFAULT: '#0A0D1A',
          card: '#111827',
          border: 'rgba(255,255,255,0.08)',
        },
        navy: '#0A0D1A',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        floatSlow: 'floatAnim 3.5s ease-in-out infinite',
        pulseBg: 'pulseBg 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatAnim: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseBg: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        maroon: '0 0 24px rgba(139,42,74,0.35)',
        'maroon-lg': '0 0 40px rgba(139,42,74,0.5)',
        card: '0 4px 24px rgba(10,13,26,0.08)',
        'card-lg': '0 16px 48px rgba(10,13,26,0.12)',
      },
      backgroundImage: {
        'gradient-maroon': 'linear-gradient(135deg, #8B2A4A, #c0445e)',
        'gradient-dark': 'linear-gradient(135deg, #0A0D1A, #1a0d1a)',
        'gradient-brand': 'linear-gradient(135deg, #8B2A4A, #3D4F6B)',
      },
    },
  },
  plugins: [],
}
