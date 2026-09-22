import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v3.4 — kept on v3 deliberately:
 * the original single-file site was built against the v3 CDN engine,
 * so class names (shadow, bg-gradient-to-*, etc.) render 1:1.
 *
 * darkMode: "media" = Tailwind's DEFAULT dark mode strategy (no class toggling).
 * The brand is dark by design; colors all come from the default Tailwind palette.
 */
const config: Config = {
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#06b6d4",
          600: "#0284c7",
          700: "#0369a1",
          900: "#0c4a6e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
