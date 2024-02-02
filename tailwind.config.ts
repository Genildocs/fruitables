import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        openSans: ['var(--font-open-sans)'],
      },
      colors: {
        'primary-color': '#81c408 ',
        'secondary-color': '#ffb524',
        'gray-light': '#f4f6f8',
        'bg-footer': '#45595b',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
