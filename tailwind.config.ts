import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
              backgroundColor: '#dbeafe',
              padding: '0.2rem',
              borderRadius: '0.2rem',
              color: 'rgb(31, 41, 55)',
            },
            pre: {
              padding: '0'
            }
          }
        }
      })
    }
  }
}
export default config
