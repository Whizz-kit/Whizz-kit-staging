/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6157E5', // Brand #1
          hover: '#4F44E0',
          light: '#8077FF',   // Brand #1ALT
          pale: '#A59FEA',    // Brand #2
          ultralight: '#EEEEFF' // New for block backgrounds
        },
        secondary: {
          DEFAULT: '#FF4362', // Brand #3
          hover: '#E63250',
          light: '#FF7D90',   // Brand #4
        },
        dark: {
          DEFAULT: '#171640', // Brand #5
          alt: '#000000',     // Brand #5ALT
          blue: '#181E54',    // Brand #6
        },
        neutral: {
          text: '#404040',    // Darker for better readability
          light: '#E5E5E5',   // Darker border for better definition
          lighter: '#F4F4F5', // Brand #9
          white: '#FFFFFF',   // Brand #10
          surface: '#F9FAFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Figtree', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px rgba(23, 22, 64, 0.1)',
      }
    },
  },
  plugins: [],
}