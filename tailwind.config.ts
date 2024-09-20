import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        xs: '1.063rem', // fontsize : 17px
        '2xs': '0.875rem', // 14px
        '3xs': '0.75rem', // 12px
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
          lightblue: '#5F9FC0',
          darkgray: '#3A3A3C',
          middlegray: '#565656',
          comet: '#636366',
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
