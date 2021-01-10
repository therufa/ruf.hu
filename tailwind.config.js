const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html'
  ],
  theme: {
    fontFamily: {
      title: ['Signika', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif']
    },
    extend: {
       colors: {
         ...colors,
         dark: {
           bg: '#000C10',
           subBg: '#001821',
           comment: '#005673',
           textDark: '#006182',
           blue: '#0085B3',
           textLight: '#2E9BC1',
           textLighter: '#5DB1CF',
           textLightest: '#74BCD6',
           textSecondary: '#B32E00',
           textSecLight: '#B38800',
           text: '#fff'
         },
         transparent: 'transparent',
         current: 'currentColor',
       }
    }
  },
  variants: {},
  plugins: []
}

