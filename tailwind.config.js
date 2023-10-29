const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'grey-50': '#FAFAFA',
      'grey-100': '#F5F5F5',
      'grey-200': '#E5E5E5',
      'grey-300': '#D4D4D4',
      'grey-400': '#A3A3A3',
      'grey-500': '#737373',
      'grey-600': '#525252',
      'grey-700': '#404040',
      'grey-800': '#262626',
      'grey-900': '#171717',
      'blue-50': '#B3E0FF',
      'blue-100': '#E7F8FE',
      'blue-200': '#77C9FF',
      'blue-300': '#4AB7FF',
      'blue-400': '#0E9EFF',
      'blue-500': '#0071BC',
      'blue-600': '#0060A0',
      'blue-700': '#005288',
      'blue-800': '#004574',
      'blue-900': '#003B62',
      'red-50': '#FCD0CD',
      'red-100': '#FBC0BC',
      'red-200': '#F9ABA6',
      'red-300': '#F78F88',
      'red-400': '#F46A60',
      'red-500': '#F1392B',
      'red-600': '#E21D0F',
      'red-700': '#C1190D',
      'red-800': '#A4150B',
      'red-900': '#8B1209',
      'slate-50': '#f8fafc',
      'slate-100': '#f1f5f9',
      'slate-200': '#e2e8f0',
      'slate-300': '#cbd5e1',
      'slate-400': '#94a3b8',
      'slate-500': '#64748b',
      'slate-600': '#475569',
      'slate-700': '#334155',
      'slate-800': '#1e293b',
      'slate-900': '#0F172A',
      'green-50': '#F0FDF4',
      'green-700': '#15803D',
      'orange-700': '#EA580C',
      'sky-100': '#E7F5FE',
      'sky-200': '#F7FDFF',
      'sky-300': '#F5FCFF',
      'sky-400': '#F2FBFE',
      'sky-500': '#E7F8FE',
      'sky-600': '#A1E3FB',
      'sky-700': '#66D1F9',
      'sky-800': '#33C2F7',
      'sky-900': '#0AB5F3',
      black: '#161819',
      white: '#ffffff',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        afek: ['Afek', ...defaultTheme.fontFamily.sans],
        // raanan: ['Raanan', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + 24px))' },
          to: { transform: 'translateX(0))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        'slide-in': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
    
    plugin(function ({ addUtilities, addVariant }) {
      addVariant('child', '& > *')
      addVariant('react-pdf-page-canvas', '&>canvas.react-pdf__Page__canvas')
      addUtilities(
        {
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },

          '.scrollbar-default': {
            /* IE and Edge */
            '-ms-overflow-style': 'auto',

            /* Firefox */
            'scrollbar-width': 'auto',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive']
      )
    }),
  ],
}
