const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'primary',
        'primary': {
          DEFAULT: '#8B5CF6',
          50: '#C2B3FB',
          100: '#BBA9FA',
          200: '#AE96F9',
          300: '#A183F8',
          400: '#966FF7',
          500: '#8B5CF6',
          600: '#6A27F3',
          700: '#520CD6',
          800: '#4109A1',
          900: '#2E066C',
          950: '#230451'
        },
        'secondary': {
          DEFAULT: '#D963B2',
          50: '#F0BFE2',
          100: '#EDB5DD',
          200: '#E8A1D3',
          300: '#E38CC8',
          400: '#DE78BD',
          500: '#D963B2',
          600: '#C93194',
          700: '#94246B',
          800: '#5E1744',
          900: '#290A1D',
          950: '#0E030A'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary[800]'),
            '--tw-prose-headings': theme('colors.primary[900]'),
            '--tw-prose-lead': theme('colors.primary[700]'),
            '--tw-prose-links': theme('colors.primary[900]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            '--tw-prose-counters': theme('colors.primary[600]'),
            '--tw-prose-bullets': theme('colors.primary[400]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.primary[900]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.primary[700]'),
            '--tw-prose-code': theme('colors.secondary[500]'),
            '--tw-prose-pre-code': theme('colors.secondary[300]'),
            '--tw-prose-pre-bg': theme('colors.secondary[900]'),
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.primary[200]'),
            '--tw-prose-invert-body': theme('colors.primary[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[200]'),
            '--tw-prose-invert-hr': theme('colors.primary[500]'),
            '--tw-prose-invert-quotes': theme('colors.primary[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.primary[700]'),
            '--tw-prose-invert-captions': theme('colors.primary[400]'),
            '--tw-prose-invert-code': theme('colors.secondary[400]'),
            '--tw-prose-invert-pre-code': theme('colors.secondary[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.secondary[900]'),
            '--tw-prose-invert-th-borders': theme('colors.primary[100]'),
            '--tw-prose-invert-td-borders': theme('colors.primary[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
