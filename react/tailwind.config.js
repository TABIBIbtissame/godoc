/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'#0f172a',
        'orange':'#ea580c',
      },
      backgroundImage:{
        'doctor': "url('../public/images/background-index.jpeg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

