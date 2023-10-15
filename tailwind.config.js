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
        surface: '#201d3b'
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
              background: theme('colors.gray.100')
            },
            code: {
              '& .prism-code': {
                color: theme('colors.gray.600'),
                'code .token-line': {
                  color: theme('colors.gray.600') + '!important'
                }
              },
              fontWeight: '100',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              background: theme('colors.gray.100'),
              color: theme('colors.gray.600') + '!important',
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            },
            blockquote: {
              fontSize: '1rem!important',
              color: theme('colors.gray.600')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.slate.100'),
            '*': {
              wordBreak: 'break-word'
            },
            h1: {
              color: theme('colors.slate.100'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            h2: {
              color: theme('colors.slate.100'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            h3: {
              color: theme('colors.slate.100'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            h4: {
              color: theme('colors.slate.100'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            h5: {
              color: theme('colors.slate.100'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            h6: {
              color: theme('colors.slate.500'),
              fontWieght: theme('font-bold'),
              a: {
                color: theme('colors.fuchsia.500')
              }
            },
            strong: {
              color: theme('colors.slate.100')
            },
            a: {
              color: theme('colors.fuchsia.500'),
              fontWieght: theme('font-bold'),
              '&:hover': {
                color: theme('colors.slate.100'),
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
                color: theme('colors.slate.100'),
                'code .token-line': {
                  color: theme('colors.slate.100') + '!important'
                }
              },
              fontWeight: '100',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              background: theme('colors.surface'),
              color: theme('colors.slate.100') + '!important',
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            },
            blockquote: {
              fontSize: '1rem!important',
              color: theme('colors.slate.100')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
