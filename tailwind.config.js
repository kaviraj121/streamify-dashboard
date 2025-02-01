export default {
    darkMode: "class", // Enable class-based dark mode
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
          },
      },

    },
    plugins: [],
  };