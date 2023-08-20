/* eslint-disable semi */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      gold: {
        50: 'rgba(214, 176, 100, 0.05)',
        100: 'rgba(214, 176, 100, 0.1)',
        200: '#D6B064',
      },
      primary: {
        100: '#261900',
        200: '#402D00',
        300: '#5C4200',
        400: '#7A5900',
        500: '#997000',
        600: '#B8890F',
        700: '#D6A32E',
        800: '#F4BE48',
        900: '#FFDEA2',
        950: '#F6E0BB',
        1000: '#FFFAF2',
      },
      secondary: {
        100: '#251A04',
        200: '#3B2F15',
        300: '#53452A',
        400: '#6C5C3F',
        500: '#867556',
        600: '#A18E6E',
        700: '#BCA987',
        800: '#D9C4A0',
        900: '#F6E0BB',
        950: '#FFEFD6',
      },
      error: {
        100: '#410002',
        200: '#3B2F15',
        300: '#53452A',
        400: '#6C5C3F',
        500: '#867556',
        600: '#A18E6E',
        700: '#BCA987',
        800: '#D9C4A0',
        900: '#F6E0BB',
        950: '#FFEFD6',
      },
      neutral: {
        100: '#1E1B18',
        200: '#34302A',
        300: '#4A4640',
        400: '#635E57',
        500: '#7C766F',
        600: '#969088',
        700: '#B1AAA2',
        800: '#CDC5BD',
        900: '#E9E1D9',
        950: '#F8EFE7',
      },
      blue: {
        50: '#EAF5FF',
        100: '#D6EBFF',
        200: '#ACD7FF',
        300: '#83C2FF',
        400: '#59AEFF',
        500: '#309AFF',
        600: '#267BCC',
        700: '#1D5C99',
        800: '#133E66',
        900: '#0A1F33',
      },
      purple: {
        50: '#F6EEFE',
        100: '#EDDEFE',
        200: '#DBBCFD',
        300: '#CA9BFB',
        400: '#B879FA',
        500: '#A658F9',
        600: '#8546C7',
        700: '#643595',
        800: '#422364',
        900: '#211232',
      },
      pink: {
        50: '#FBECF3',
        100: '#F7D9E7',
        200: '#EFB4CF',
        250: '#EAB1B1',
        300: '#E88EB8',
        400: '#E069A0',
        500: '#D84388',
        600: '#AD366D',
        700: '#822852',
        800: '#561B36',
        900: '#2B0D1B',
      },
      orange: {
        50: '#FFF4EB',
        100: '#FFE8D7',
        200: '#FED2B0',
        300: '#FEBB88',
        400: '#FDA561',
        500: '#FD8E39',
        600: '#CA722E',
        700: '#985522',
        800: '#653917',
        900: '#331C0B',
      },
      yellow: {
        50: '#FEF7EE',
        100: '#FDEFDD',
        200: '#FCDFBB',
        300: '#FAD099',
        400: '#F9C077',
        500: '#F7B055',
        600: '#C68D44',
        700: '#946A33',
        800: '#634622',
        900: '#312311',
      },
      green: {
        50: '#EDFCF9',
        100: '#DCF9F3',
        200: '#B9F3E7',
        300: '#96EEDA',
        400: '#73E8CE',
        500: '#50E3C2',
        600: '#40B59B',
        700: '#308874',
        800: '#205A4E',
        900: '#102D27',
      },
      red: {
        50: '#FCEDEA',
        100: '#F9DBD6',
        200: '#F4B7AC',
        300: '#EE9283',
        400: '#E96E59',
        500: '#E34A30',
        600: '#B63B26',
        700: '#882C1D',
        800: '#5B1E13',
        900: '#2D0F0A',
      },
      grey: {
        50: '#F2F2F2',
        100: '#E5E5E5',
        200: '#CCCCCC',
        300: '#B2B2B2',
        400: '#999999',
        500: '#808080',
        600: '#666666',
        700: '#4C4C4C',
        800: '#333333',
        850: '#202020',
        900: '#191919',
      },

      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#0D0D0D',
        600: '#5D5D5D',
        900: '#18191A',
      },
    },
  },
  plugins: [],
};
