import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f4fa",
          100: "#dbe6f2",
          200: "#b9cce5",
          300: "#8ba9d1",
          400: "#5a83bb",
          500: "#3a64a3",
          600: "#2a4d87",
          700: "#1f3c6c",
          800: "#16294b",
          900: "#0e1b33",
          950: "#070f1f",
        },
        steel: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae3",
          300: "#b0b9c9",
          400: "#8492a8",
          500: "#65748d",
          600: "#505d74",
          700: "#414b5e",
          800: "#384050",
          900: "#323845",
        },
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#b45309",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(14, 27, 51, 0.08)",
        industrial:
          "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(14,27,51,0.15)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(14,27,51,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,27,51,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
