/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark Background Colors - Much Darker Shades
        'canvas-navy': '#0A0612',        // Very dark purple-black
        'elevated-card': '#140A1F',      // Dark purple-gray
        'secondary-bg': '#1F1229',       // Medium dark purple
        
        // Text Colors
        'primary-text': '#FFFFFF',
        'body-text': '#B8A9C9',
        'secondary-text': '#8B7A9B',
        
        // Purple Theme Colors (Much Darker versions)
        'primary-purple': '#6B46C1',     // Much darker version of #B794F6
        'medium-purple': '#5B21B6',      // Much darker version of #9F7AEA
        'dark-purple': '#2D1B3D',        // Much darker version of #553C9A
        'light-purple': '#7C3AED',       // Slightly darker purple
        
        // Pink/Magenta Colors (Much Darker versions)
        'primary-magenta': '#9D174D',    // Much darker version of #ED64A6
        'light-magenta': '#BE185D',      // Much darker version of #FBB6CE
        'dark-magenta': '#701A75',       // Very dark magenta
        
        // Interactive Colors
        'cyan-interactive': '#6B46C1',
        'amber-cta': '#FFC400',
        'amber-500': '#FCD34D',
        'cyan-400': '#22D3EE',
        
        // Neutral Colors
        'neutral-stroke': '#2D1B3D',
        'light-gray': '#F7FAFC',
        'medium-gray': '#B8A9C9',
        'dark-gray': '#140A1F',
        'charcoal': '#0A0612',
        
        // Status Colors
        'success-green': '#059669',
        'warning-red': '#DC2626',
        
        // Legacy colors for backward compatibility
        'deep-navy': '#0A0612',
        'royal-lavender': '#6B46C1',
        'royal-lavender-dark': '#2D1B3D',
        'neon-yellow': '#6B46C1',
        'cloud-white': '#FFFFFF',
        'smoke-gray': '#B8A9C9'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'ai-glow-gradient': 'linear-gradient(135deg, #6B46C1 0%, #9D174D 100%)',
        'royal-gradient': 'linear-gradient(135deg, #6B46C1 0%, #2D1B3D 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6B46C1 0%, #5B21B6 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #9D174D 0%, #701A75 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0612 0%, #140A1F 100%)',
        'circuit-pattern': 'radial-gradient(circle at 25% 25%, rgba(107, 70, 193, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(157, 23, 77, 0.1) 0%, transparent 50%)'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-purple': 'pulsePurple 2s ease-in-out infinite',
        'pulse-magenta': 'pulseMagenta 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(107, 70, 193, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(107, 70, 193, 0.5)' }
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
        },
        pulsePurple: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 70, 193, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(107, 70, 193, 0.6)' }
        },
        pulseMagenta: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(157, 23, 77, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(157, 23, 77, 0.6)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      dropShadow: {
        'ai-glow': '0 0 20px rgba(107, 70, 193, 0.2)',
        'magenta-glow': '0 0 20px rgba(157, 23, 77, 0.2)',
      }
    },
  },
  plugins: [],
};