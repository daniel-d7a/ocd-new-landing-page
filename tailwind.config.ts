import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        "ocd-yellow": "#FFD900",
        "ocd-blue": "#0026FF",
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        neon: {
          "100%": {
            "text-shadow":
              "0 0 4px #fff,0 0 11px #fff,0 0 19px #fff,0 0 40px var(--neon-color),0 0 80px var(--neon-color),0 0 90px var(--neon-color);",
          },
          "0%": {
            "text-shadow":
              "0 0 4px #fff,0 0 10px #fff,0 0 18px #fff,0 0 38px var(--neon-color),0 0 73px var(--neon-color),0 0 80px var(--neon-color);",
          },
        },
        neonBorder: {
          "100%": {
            "box-shadow":
              " 0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem var(--neon-color), 0 0 0.8rem var(--neon-color), inset 0 0 1.3rem var(--neon-color);",
          },
          "0%": {
            "box-shadow":
              " 0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem var(--neon-color), 0 0 0.7rem var(--neon-color), inset 0 0 1.2rem var(--neon-color);",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        neon: "neon 0.2s ease-in-out infinite alternate",
        "neon-border":
          "neon 0.2s ease-in-out infinite alternate,neonBorder 0.15s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
