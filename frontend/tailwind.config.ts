import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0a162f",
        },
        brand: {
          blue: "#2563eb",
          green: "#22c55e",
          orange: "#f97316",
          purple: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      boxShadow: {
        glow: "0 10px 30px -15px rgba(37, 99, 235, 0.45)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(37, 99, 235, 0.4), transparent 55%)",
        "card-gradient": "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
