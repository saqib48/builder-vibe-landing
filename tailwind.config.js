/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-space-grotesk)'],
        'body': ['var(--font-inter)'],
        'accent': ['var(--font-poppins)'],
      },
      colors: {
        // Light theme
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-accent': 'var(--bg-accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-glow': 'var(--accent-glow)',
        'border-color': 'var(--border-color)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeInUp 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fadeInUp': {
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slideInLeft': {
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slideInRight': {
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px var(--accent-glow)',
        'card': '0 4px 20px var(--shadow-color)',
        'card-hover': '0 8px 40px var(--shadow-color)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}