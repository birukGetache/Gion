/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background variable
        foreground: "var(--foreground)", // Custom foreground variable
      },
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive', 'sans-serif'], // Add a cursive font
      },
      keyframes: {
        aboutanime: {
          from: { transform: "translateY(300px)" },
          to: { transform: "translateX(0px)" },
        },
        serviceanime: {
          from: { transform: "translateY(100px)" },
          to: { transform: "translateX(0px)" },
        },
        'gradient-motion': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        aboutanime: "aboutanime 1s ease-out", // Animation for about section
        serviceanime: "serviceanime 1s ease-out", // Animation for service section
        'gradient-motion': "gradient-motion 3s ease infinite", // Gradient motion animation
      },
      backgroundSize: {
        '200%': '200%', // Extended background size for gradient motion
      },
    },
  },
  plugins: [],
};
