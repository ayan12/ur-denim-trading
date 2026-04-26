import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Core brand palette — dark luxury denim */
        ink: {
          900: "#0A0E18", // deepest navy-black
          800: "#0E131F", // panel base
          700: "#141927", // card base
          600: "#1B2030", // hover
          500: "#242A3B",
          400: "#2F3648",
        },
        indigo: {
          DEFAULT: "#1E2A4A",
          deep: "#111830",
        },
        denim: {
          50: "#E8EEF7",
          100: "#C7D3E8",
          200: "#8FA4C6",
          300: "#5B77A6",
          400: "#3A537F",
          500: "#253A5F",
          600: "#172946",
          700: "#0F1E35",
          800: "#0A1528",
          900: "#060D1A",
        },
        accent: {
          DEFAULT: "#E6C77A", // subtle gold rivet accent
          soft: "#C8A85A",
        },
        bone: "#EFEDE7", // off-white for text
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "denim-grain":
          "radial-gradient(circle at 20% 10%, rgba(60,90,150,0.10), transparent 50%), radial-gradient(circle at 80% 70%, rgba(30,50,90,0.15), transparent 55%), linear-gradient(180deg, #0A0E18 0%, #0E131F 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #E6C77A 50%, transparent)",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(230,199,122,0.25), 0 20px 50px -20px rgba(230,199,122,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        shimmer: "shimmer 2.2s linear infinite",
        "border-sweep": "border-sweep 2s ease-in-out infinite",
      },
      letterSpacing: {
        "ultra-wide": "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
