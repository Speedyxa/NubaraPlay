module.exports = {
  theme: {
    extend: {
      colors: {
        'nubara-dark': '#0a0a0a',
        'nubara-darker': '#050505',
        'nubara-card': '#1a1a1a',
        'nubara-accent': '#e50914', // Rojo Netflix-like
        'nubara-gold': '#f5c518',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
}
