/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        complimetary2: '#C3E7FA',
        complimetary3: '#298EA6',
        complimetary4: '#EFEFED',
        primary1: '#063248',
        complimetary1: '#4C606E',
        shad: '#66666659',
        primary2: '#E3F1F4',
        primary3: '#F8F8F7',
        customColor: 'rgba(76, 96, 110, 0.5)',
        // primdark: 'hsla(200, 85%, 15%, 1)',
        // primback: 'hsla(191, 44%, 92%, 1)',
        // primlight: 'hsla(60, 7%, 97%, 1)',
        // secdark: 'hsla(205, 18%, 36%, 1)',
        // seclight: 'hsla(201, 85%, 87%, 1)',
        // secwhite: 'hsla(0, 0%, 100%, 1)',
        // sechover: 'hsla(192, 60%, 41%, 1)',
        // sechoverbg: 'hsla(60, 6%, 93%, 1)',
      },
    },
  },
  plugins: [],
};
