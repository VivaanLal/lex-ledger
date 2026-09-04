import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        paper: "#FFFFFF",
        "warm-gray": "#F2EFEB",
        slate: "#6B7280",
        charcoal: "#374151",
        ink: "#1A1F2E",
        "deep-navy": "#0F1729",
        copper: "#B87333",
        "copper-light": "#D4956B",
        "copper-dark": "#9A5F2A",
        border: "#E5E1DC",
        "border-dark": "#D1CCC5",
      },
      fontFamily: {
        serif: [
          '"Newsreader"',
          '"Instrument Serif"',
          "Charter",
          "Georgia",
          "serif",
        ],
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "4rem", letterSpacing: "-0.02em" }],
        "display-sm": [
          "2.25rem",
          { lineHeight: "2.625rem", letterSpacing: "-0.01em" },
        ],
        h1: ["2.75rem", { lineHeight: "3.25rem", letterSpacing: "-0.02em" }],
        "h1-sm": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.01em" },
        ],
        h2: ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.01em" }],
        "h2-sm": ["1.5rem", { lineHeight: "1.875rem" }],
        h3: ["1.375rem", { lineHeight: "1.875rem" }],
        "h3-sm": ["1.125rem", { lineHeight: "1.625rem" }],
        body: ["1.0625rem", { lineHeight: "1.75rem" }],
        "body-sm": ["1rem", { lineHeight: "1.625rem" }],
        caption: ["0.875rem", { lineHeight: "1.25rem" }],
        ui: ["0.9375rem", { lineHeight: "1.25rem" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
      spacing: {
        section: "6rem",
        "section-sm": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
