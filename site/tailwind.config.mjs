import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36abf7',
          500: '#0c8fe9',
          600: '#0271c7',
          700: '#035aa1',
          800: '#074c85',
          900: '#0c406e',
          950: '#082949',
        },
        accent: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        dark: {
          bg: '#0a0d14',
          card: '#111726',
          border: '#1e293b',
          muted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#334155',
            lineHeight: '1.75',
            a: {
              color: '#0271c7',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#074c85',
                textDecoration: 'underline'
              }
            },
            h1: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2em',
              marginBottom: '0.8em',
            },
            h3: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            code: {
              color: '#e02424',
              backgroundColor: '#f1f5f9',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }
          }
        },
        invert: {
          css: {
            color: '#cbd5e1',
            a: {
              color: '#36abf7',
              '&:hover': {
                color: '#7cc7fb'
              }
            },
            h1: { color: '#f8fafc' },
            h2: { color: '#f1f5f9' },
            h3: { color: '#e2e8f0' },
            strong: { color: '#f8fafc' },
            code: {
              color: '#38bdf8',
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
            },
            pre: {
              backgroundColor: '#0b1120',
              border: '1px solid #1e293b'
            }
          }
        }
      })
    },
  },
  plugins: [
    typography,
  ],
}
