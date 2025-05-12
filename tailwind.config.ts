import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
      },
      colors: {
        placeholder: {
          black: '#000',
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '375px',
        lg: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
