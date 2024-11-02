/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "splash-screen": "url('src/assets/splshScreen.svg')",
        "main-screen": "url('/src/components/mainScreen.jsx')",
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
        "fade-delay-1": "fadeIn 0.5s ease-in-out 1s",
        "fade-delay-1.5": "fadeIn 0.5s ease-in-out 1.5s",
        "fade-delay-5": "fadeIn 0.5s ease-in-out 5s",
        "fade-in-down": "fadeInDown 1s ease-in-out", //👈 panggil ini untuk animasi fade in down
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInDown: {
          // Menambahkan animasi fadeInDown
          from: {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
