/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F0',
        sand: '#F3EFE2',
        ink: '#2C3A45',
        muted: '#6B7A82',
        brand: {
          DEFAULT: '#5A8FB5',
          light: '#8FB8D8',
          dark: '#3F6E90',
          soft: '#E4EEF5',
        },
        sage: {
          DEFAULT: '#8CAE98',
          soft: '#E7EFE8',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'ui-serif', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(44, 58, 69, 0.18)',
        card: '0 4px 20px -8px rgba(44, 58, 69, 0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
