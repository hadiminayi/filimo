/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  
  theme: {
    fontFamily:{
      body:['Iran','sans-serif'],
      display:['Iran','sans-serif']
    },
    extend: {
      keyframes:{
        fadein:{
          "0%":{opacity:0},
          "100%":{opacity:100},
        },
      },
      animation:{
        fadein:"fadeIn 0.2s ease-in-out forwards",
      }
    },
  },
  plugins: [],
}

