/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(var(--angle)) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(var(--angle)) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
    container: {
      center: true,
      screens: {
        xs: "200px",
        sm: "480px",
        md: "1020px",
        lg: "1440px",
        xl: "188px",
        "2xl": "1920px",
      },
    },
    fontSize: {
      h1: "clamp(2rem, 5vw, 4rem)",
      h2: "clamp(1.75rem, 4vw, 3.5rem)",
      h3: "clamp(1.5rem, 3vw, 3rem)",
      h4: "clamp(1.25rem, 2.5vw, 2.5rem)",
      h5: "clamp(1rem, 2vw, 2rem)",
      h6: "clamp(0.875rem, 1.5vw, 1.5rem)",
      p: "clamp(0.8rem, 2vw, 1.25rem)",
      span: "clamp(0.875rem, 1.5vw, 1.125rem)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
