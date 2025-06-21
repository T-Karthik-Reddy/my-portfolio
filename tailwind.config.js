/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx", // Added App.tsx
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", // Added components
    "./constants.tsx", // Added constants.tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['monospace', 'monospace'],
      },
      colors: {
        // Plasma Fade Palette (as per PDF)
        background: '#1F1B24', // Dusty dark purple (almost black)
        textBase: '#E0E0E0',   // Soft white for general text
        primary: { // Lavender gray
          DEFAULT: '#8E9AAF',
          light: '#A7B4C8', // Lighter
          dark: '#758AA0',  // Darker
        },
        accent: { // Muted magenta
          DEFAULT: '#C792EA',
          light: '#DAB6F5',
          dark: '#B078D0',
        },
        neutral: { // Shades related to background and text
          light: '#3A3541',    // Lighter shade for cards or secondary backgrounds
          DEFAULT: '#2B2733',  // For card backgrounds, slightly lighter than main bg
          dark: '#1F1B24',    // Main background color (same as 'background')
          darker: '#15121A',  // Even darker for subtle borders or depths
        },
        systemError: { // For chatbot error messages
          bg: 'rgba(199, 146, 234, 0.1)', // accent/10
          text: '#DAB6F5' // accent-light
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'skill-icon-flow': 'skillIconFlow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'chat-bubble-pop': 'chatBubblePop 0.3s ease-out forwards',
        'binary-rain-fall': 'binaryRainFall linear infinite', // Duration set in style attribute
        'footer-fade-in': 'fadeInUp 1s ease-out forwards', // Specific for footer
        'nav-link-underline': 'navLinkUnderline 0.3s ease-out forwards',
        'mobile-menu-open': 'mobileMenuOpen 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        skillIconFlow: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.5) rotate(-15deg)' },
          '60%': { opacity: '1', transform: 'translateY(-10px) scale(1.1) rotate(5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotate(0deg)' },
        },
        chatBubblePop: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        binaryRainFall: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%, 80%': { opacity: '1' }, // Fade in and stay visible
          '100%': { transform: 'translateY(100%)', opacity: '0' }, // Fall off screen
        },
        navLinkUnderline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        mobileMenuOpen: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}