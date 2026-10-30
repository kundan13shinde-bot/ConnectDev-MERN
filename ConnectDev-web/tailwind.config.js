/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        connectdev: {
          primary: "#60433D", // mocha
          "primary-content": "#E8D8CE",
          secondary: "#916B60", // dusty clay
          "secondary-content": "#FBF7F4",
          accent: "#C1A094", // warm taupe
          "accent-content": "#211B1A",
          neutral: "#382A28",
          "neutral-content": "#E8D8CE",
          "base-100": "#FBF7F4", // ivory
          "base-200": "#E8D8CE", // cream
          "base-300": "#F4ECE6", // card surface
          "base-content": "#211B1A", // espresso text
          info: "#916B60",
          success: "#6f8a5a",
          warning: "#C1A094",
          error: "#b24a3a",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.6rem",
        },
      },
    ],
  },
};
