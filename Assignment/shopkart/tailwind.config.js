/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    
    backgroundImage:{
    'pattern': "url('/src/assets/footer.png')"
    },
    fontFamily:{
      sy:["Syne"],
      pop:["Poppins"],
      work:["Work Sans"]

    }
  },
  plugins: [],
}

