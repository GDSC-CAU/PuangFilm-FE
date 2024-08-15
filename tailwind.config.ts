import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cafe24: ['var(--font-cafe24)'],
        sfpro: ['var(--font-sfpro)'],
      },
      fontSize: {
        '8xl': '6rem',
        '6xl': '3.75rem',
        '5xl': '3rem',
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        xl: '1.25rem',
      },
      colors: {
        background: '#9CCEE8',
        theme: {
          background: '#9CCEE8',
          font: '#251365',
        },
        primary: {
          darkblue: '#133365',
          gray: '#E5E5EA',
        },
      },
      width: {
        '360': '360px',
      },
      height: {
        '640': '640px',
      },
    },
  },
  plugins: [],
};
export default config;
