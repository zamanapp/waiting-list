const animate = require("tailwindcss-animate");
const typography = require("@tailwindcss/typography");
const defaultTheme = require("tailwindcss/defaultTheme");
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: {
    extract,
  },

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(var(--conic-position, from 45deg), var(--tw-gradient-stops))",
      },
      fontFamily: {
        logo: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
        logoArabic: ["'Cairo'", ...defaultTheme.fontFamily.sans],
        main: ["'Satoshi'", ...defaultTheme.fontFamily.sans],
        monoArabic: ["'Kawkab Mono'", ...defaultTheme.fontFamily.mono],
        scheherazade: ["'Scheherazade New'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
        risingstar: {
          from: {
            transform: "translateY(0px)",
          },
          to: {
            transform: "translateY(-3840px)",
          },
        },
        "skew-scroll": {
          "0%": {
            transform: "rotateX(20deg) rotateZ(-10deg) skewX(10deg)",
          },
          "100%": {
            transform:
              "rotateX(20deg) rotateZ(-10deg) skewX(10deg) translateY(-220%)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-rtl": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(100% + var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        risingstar: "risingstar 1000s linear infinite",
        "skew-scroll": "skew-scroll 17s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-rtl": "marquee-rtl var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [animate, typography, fluid],
};
