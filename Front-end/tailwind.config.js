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
      },
    },
  },
  plugins: [],
};
