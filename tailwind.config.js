/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Canvas & Surface
        'canvas-navy': '#0C0F1F',
        'elevated-card': '#121728',
        
        // Text
        'primary-text': '#FFFFFF',
        'body-text': '#C9D1E3',
        
        // Accents
        'amber-cta': '#FFC400',
        'cyan-interactive': '#19E6FF',
        
        // Neutral
        'neutral-stroke': '#21273A',
        
        // Status Colors
        'success-green': '#3DD68C',
        'warning-red': '#FF6B6B',
        
        // Legacy colors for backward compatibility
        'deep-navy': '#0C0F1F',
        'royal-lavender': '#9B7CFF',
        'royal-lavender-dark': '#5B4BFF',
        'neon-yellow': '#FFC400',
        'cloud-white': '#FFFFFF',
        'smoke-gray': '#C9D1E3'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'ai-glow-gradient': 'linear-gradient(135deg, #9B7CFF 0%, #5B4BFF 100%)',
        'royal-gradient': 'linear-gradient(135deg, #9B7CFF 0%, #5B4BFF 100%)',
        'circuit-pattern': 'radial-gradient(circle at 25% 25%, rgba(155, 124, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(91, 75, 255, 0.1) 0%, transparent 50%)'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 196, 0, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 196, 0, 0.5)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      dropShadow: {
        'ai-glow': '0 0 20px rgba(155, 124, 255, 0.2)',
      }
    },
  },
  plugins: [],
};