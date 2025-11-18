/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    screens: {
      slg: { max: '1224px' },
      smd: { max: '900px' },
      ssm: { max: '768px' },
      sms: { max: '576px' },
      smss: { max: '524px' },
    },
    extend: {
      fontSize: {
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
      },
      fontWeight: {
        600: '600',
        700: '700',
        800: '800',
      },
      lineHeight: {
        0.2: '0.2',
      },
      letterSpacing: {
        2: '2px',
        1: '1px',
      },
      backgroundColor: {
        'side-bg': '#fdf9ff',
      },
      textColor: {
        basic: 'rgba(0, 200, 150, 0.80)',
      },
      borderWidth: {
        1: '1px',
      },
  
      Colors: {
        400: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        40: '40px',
        250: '250px',
        280: '280px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
  
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
