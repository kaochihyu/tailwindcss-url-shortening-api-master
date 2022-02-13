module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "shortly-cyan": "hsl(180, 66%, 49%)",
        "shortly-light-cyan": "hsl(179, 56%, 75%)",
        "shortly-dark-violet": "hsl(257, 27%, 26%)",
        "shortly-red": "hsl(0, 87%, 67%)",
        "shortly-gray": "hsl(0, 0%, 75%)",
        "shortly-grayish-violet": "hsl(257, 7%, 63%)",
        "shortly-very-dark-blue": "hsl(255, 11%, 22%)",
        "shortly-very-dark-violet": "hsl(260, 8%, 14%)",
        "shortly-light-gray": "hsl(225deg 33% 95%)",
        "shortly-red": "hsl(358, 71%, 65%)",
      },
      maxWidth: {
        '3/2': '150%',
      },
      backgroundImage: {
        'shorten-mobile': "url('/public/images/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('/public/images/bg-shorten-desktop.svg')",
        'boost-mobile': "url('/public/images/bg-boost-mobile.svg')",
        'boost-desktop': "url('/public/images/bg-boost-desktop.svg')",
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'], // fontFamily
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}
