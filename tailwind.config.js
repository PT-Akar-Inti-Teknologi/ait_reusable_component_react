/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          DEFAULT: '#7C5BFA',
          light: {
            1: '#F1EBFE',
            2: '#F8F5FF',
          },
          dark: {
            1: '#2D1D90',
            2: '#1D1177',
          },
          //v2 color base template
          25: '#F8F5FF',
          50: '#F1EBFE',
          100: '#E7DEFE',
          200: '#CFBDFE',
          300: '#B59CFD',
          400: '#9F83FB',
          500: '#7C5BFA',
          600: '#5E42D7',
          700: '#432DB3',
          800: '#2D1D90',
          900: '#1D1177',
          //end v2 color base template
        },
        secondary: {
          //v2 color base template
          25: '#F9FDF7',
          50: '#F3FCED',
          100: '#EDFCE4',
          200: '#D8FACA',
          300: '#B9F0AC',
          400: '#9AE191',
          500: '#6FCE6D',
          600: '#4FB156',
          700: '#369444',
          800: '#227736',
          900: '#14622D',
          //end v2 color base template
        },
        tertiary: {
          //v2 color base template
          25: '#f2fffb',
          50: '#e3fcf4',
          100: '#c9fcef',
          200: '#95f9e9',
          300: '#5fede2',
          400: '#37dcdc',
          500: '#00b5c6',
          600: '#008daa',
          700: '#006b8e',
          800: '#004c72',
          900: '#00375f',
          //end v2 color base template
        },
        danger: {
          DEFAULT: '#FF5454',
          light: {
            1: '#FFCCBA',
            2: '#FDEFE8',
          },
          dark: {
            1: '#B72A42',
            2: '#7A1034',
          },
          //v2 color base template
          25: '#FDEFE8',
          50: '#FEEFE7',
          100: '#FFE8DC',
          200: '#FFCCBA',
          300: '#FFAA98',
          400: '#FF897E',
          500: '#FF5454',
          600: '#DB3D4B',
          700: '#B72A42',
          800: '#931A3A',
          900: '#7A1034',
          //end v2 color base template
        },
        success: {
          DEFAULT: '#09c380',
          light: {
            1: '#5ee1b2',
            2: '#cff6e8',
          },
          dark: {
            1: '#069d66',
            2: '#098c5d',
          },
          //v2 color base template
          25: '#f8fff2',
          50: '#effce3',
          100: '#dff9cf',
          200: '#b9f3a2',
          300: '#84dc6d',
          400: '#53ba45',
          500: '#1b8c17',
          600: '#107816',
          700: '#369444',
          800: '#075117',
          900: '#044317',
          //end v2 color base template
        },
        warning: {
          DEFAULT: '#F2D12B',
          light: {
            1: '#FEFAD4',
            2: '#FCFAE8',
          },
          dark: {
            1: '#AE8F15',
            2: '#745A08',
          },
          //v2 color base template
          25: '#FCFAE8',
          50: '#FDFADE',
          100: '#FEFAD4',
          200: '#FDF4AA',
          300: '#FBEA7F',
          400: '#F7E05E',
          500: '#F2D12B',
          600: '#D0AF1F',
          700: '#AE8F15',
          800: '#8C700D',
          900: '#745A08',
          //end v2 color base template
        },
        info: {
          DEFAULT: '#009CF7',
          light: {
            1: '#CBF8FE',
            2: '#E3F9FC',
          },
          dark: {
            1: '#005AB1',
            2: '#002D76',
          },
          //v2 color base template
          25: '#E3F9FC',
          50: '#D9F8FD',
          100: '#CBF8FE',
          200: '#98EBFE',
          300: '#65D7FC',
          400: '#3EC0FA',
          500: '#009CF7',
          600: '#0079D4',
          700: '#005AB1',
          800: '#00408F',
          900: '#002D76',
          //end v2 color base template
        }
      },
      keyframes: {
        "modal-open": {
          "0%": { transform: "translateY(25%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 100 },
        },
        "modal-close": {
          "0%": { transform: "translateY(0)", opacity: 100 },
          "100%": { transform: "translateY(25%)", opacity: 0 },
        },
        "opacity-to-full": {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        "opacity-to-null": {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "modal-open": "modal-open 0.3s ease-out forwards",
        "modal-close": "modal-close 0.3s ease-out forwards",
        "opacity-to-full": "opacity-to-full 0.3s ease-out forwards",
        "opacity-to-null": "opacity-to-null 0.3s ease-out forwards",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
