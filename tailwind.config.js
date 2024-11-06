/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        righteous: ["var(--font-righteous)"],
        goodtimes: ["var(--font-goodtimes)", "serif"],
      },
      colors: {
        cutie: {
          violet: "#9097D9",
          magenta: "#FF00C0",
          "blue-100": "#5682B1",
          "blue-200": "#123F7C",
          "blue-300": "#021334",
          green: "#DAF6AA",
          yellow: "#FFF2A1",
          tan: "#FFCAA7",
          gray: "#DADADA",
          "purple-100": "#7A84E2",
          "purple-200": "#43487C",
        },
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "bounce-1s": "bounce 1s infinite",
        "jiggle-3s": "jiggle 3s ease-in-out infinite",
        "jiggle-4s": "jiggle 4s ease-in-out infinite",
        "jiggle-5s": "jiggle 5s ease-in-out infinite",
        "jiggle-5.5s": "jiggle 5.5s ease-in-out infinite",
        "jiggle-12s": "jiggle 12s ease-in-out infinite",
        "spin-10s": "spin 120s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        crawl: "crawl 3s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%": {
            transform: "translate(0px,-7px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translate(0px, 0px)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translate(0px,-7px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        jiggle: {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(0px, 15px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        crawl: {
          "0%": { transform: "translateZ(0) rotateX(20deg)", opacity: 0 },
          "100%": { transform: "translateZ(300px) rotateX(20deg)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        "custom-white": "0px 4px 4px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
