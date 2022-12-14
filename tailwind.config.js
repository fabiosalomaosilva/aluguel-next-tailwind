/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#94B6F4',
          100: '#88ADF3',
          200: '#7CA5F1',
          300: '#719DF0',
          400: '#6595EF',
          500: '#5A8DEE',
          600: '#447EEB',
          700: '#2F70E9',
          800: '#1A61E7',
          900: '#1658D3',
        },
        lightBlue: {
          50: '#EBF8FF',
          100: '#E3F8FF', 
          200: '#CFFAFF',
          300: '#B6F5FF',
          400: '#A7F0FF',
          500: '#8CEEFF',
          600: '#7AE0FF',
          700: '#6AD0FF',
          800: '#52C5FF',
          900: '#46C0FF',
        },
        primaryLigth: {
          50: '#94B6F4',
          100: '#88ADF3',
          200: '#7CA5F1',
          300: '#719DF0',
          400: '#6595EF',
          500: '#5A8DEE',
          600: '#447EEB',
          700: '#2F70E9',
          800: '#1A61E7',
          900: '#1658D3',
        },
        secondary: {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
        },
        teal: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        danger: {
          50: '#FBE9E7',
          100: '#FFCCBC',
          200: '#FFAB91',
          300: '#FF8A65',
          400: '#FF7043',
          500: '#FF5722',
          600: '#F4511E',
          700: '#E64A19',
          800: '#D84315',
          900: '#BF360C',
        },
        success: {
          50: '#e8f5e9  ',
          100: '#c8e6c9 ',
          200: '#a5d6a7 ',
          300: '#81c784 ',
          400: '#66bb6a ',
          500: '#4caf50 ',
          600: '#43a047 ',
          700: '#388e3c ',
          800: '#2e7d32 ',
          900: '#1b5e20 ',
        },
        warning: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        purple: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
        },
        deepPurple: {
          50: '#EDE7F6',
          100: '#D1C4E9',
          200: '#B39DDB',
          300: '#9575CD',
          400: '#7E57C2',
          500: '#673AB7',
          600: '#5E35B1',
          700: '#512DA8',
          800: '#4527A0',
          900: '#311B92',
        },
        info: '#00CFDD',
        grayDark: '#273444',
        dark: '#495563',
        grayLight: '#d3dce6',
        backgroundGray: '#2a3645',
        background: '#F3F4F4',
        textPrimary: '#516377',
        textLigth: '##bec5cc',
        inputBorder: '##D4D8DD',
        inputText: '#677788',
        light: '#fff',
      },
    },
  },
  plugins: [],
};
