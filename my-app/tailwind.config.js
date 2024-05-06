/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "350px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      rubik: "Rubik",
      beau: "Bebas Neue",
    },
    extend: {
      colors: {
        nav_bg: "#ffffff33",
        banner: "#000",
        "main-text": "#fbf6f4",
        "main-red": "#db0001",
        "text-header": "#c4470c",
        "second-red": "#d62828",
        secondary: "#dedcffb9",
        "banner-text": "#a1a1a1",
        "main-section": "#fafafb",
        "text-color": "#231f20",
        "": "linear-gradient(red, blue)",
      },
      padding: {
        "12-50": "12px 50px",
      },
      boxShadow: {
        3: "-1px 0px 5px -3px rgba(0, 0, 0, 0.3)",
      },
    },
    backgroundImage: {
      homeBanner: "url('./images/bg.jpg')",
      ticketBanner: "url('./images/auditorium.jpg')",
      aboutBanner: "url('./images/team.jpeg')",
    },
  },

  plugins: [],
};
