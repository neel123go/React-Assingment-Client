/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00A0C6",
          "secondary": "#1246AF",
          "accent": "#f8f8f8",
          "neutral": "#333333",
          "base-100": "#e7e5e4",
          "success": "#12844F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}