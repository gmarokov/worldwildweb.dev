const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    '!mb-0', // This is used by the h1 in index.mdx
    '!mt-0', // this is used by the p in index.mdx
    'my-20', // this is used in the grid in index.mdx
    'grid',
    'md:grid-cols-1fr-1fr', // this is used in index.mdx
    'gap-8',
    'gap-32',
    'text-base',
    'text-sm',
    'text-xs',
    // this is for the toc
    'text-violet-300',
    'text-violet-400',
    'text-violet-500',
    'rotate-90'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#18162c'
      },
      keyframes: {
        bar: {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        }
      },
      animation: {
        'scaling-bar': 'bar 60s linear infinite'
      },
      fontFamily: {
        sans: ['Inconsolata', 'ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'monospace']
      },
      maxWidth: {
        '8xl': '90rem'
      },
      gridTemplateColumns: {
        ['auto-auto']: 'auto auto',
        ['auto-1fr']: 'auto 1fr',
        ['1fr-auto']: '1fr auto',
        ['1fr-1fr']: '1fr 1fr'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // '--tw-prose-body': theme('colors.pink[800]'),
            // '--tw-prose-headings':  {
            //   color: theme('colors.pink[900]'),
            //   '&:hover': {
            //     color: theme('colors.black'),
            //     transition: 'all 0.2s ease'
            //   },
            // },

            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-links': theme('colors.pink[900]'),
            // '--tw-prose-bold': theme('colors.pink[900]'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            // '--tw-prose-quotes': theme('colors.pink[900]'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.pink[700]'),
            // '--tw-prose-code': theme('colors.pink[900]'),
            // '--tw-prose-pre-code': theme('colors.pink[100]'),
            // '--tw-prose-pre-bg': theme('colors.pink[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
            color: theme('colors.gray.600'),
            '*': {
              wordBreak: 'break-word'
            },
            h1: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h2: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h3: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h4: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h5: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h6: {
              color: theme('colors.gray.600'),
              fontWeight: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            strong: {
              color: theme('colors.gray.600')
            },
            a: {
              color: theme('colors.sky.500'),
              fontWeight: theme('font-bold'),
              '&:hover': {
                color: theme('colors.gray.600'),
                transition: 'all 0.2s ease'
              },
              '> p': {
                margin: 0
              }
            },
            pre: {
              background: theme('colors.surface')
            },
            code: {
              '& .prism-code': {
                background: theme('colors.transparent')
              },
              color: theme('colors.tertiary'),
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            },
            blockquote: {
              fontSize: '1rem!important',
              color: theme('colors.text')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.white'),
            '*': {
              wordBreak: 'break-word'
            },
            h1: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h2: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h3: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h4: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h5: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            h6: {
              color: theme('colors.sky.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.sky.500')
              }
            },
            strong: {
              color: theme('colors.gray-600')
            },
            a: {
              color: theme('colors.fuchsia.500'),
              fontWieght: theme('font-bold'),
              '&:hover': {
                color: theme('colors.white'),
                transition: 'all 0.2s ease'
              },
              '> p': {
                margin: 0
              }
            },
            pre: {
              background: theme('colors.grey.500')
            },
            code: {
              '& .prism-code': {
                background: theme('colors.transparent')
              },
              color: theme('colors.sky.500'),
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            },
            blockquote: {
              fontSize: '1rem!important',
              color: theme('colors.gray-600')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
