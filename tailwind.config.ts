import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core color palette
        primary: {
          DEFAULT: "#FF7F50", // Coral
          50: "#FFF7F0",
          100: "#FFEFE0",
          200: "#FFDFC1",
          300: "#FFCF9E",
          400: "#FF7F50",
          500: "#E67048",
          600: "#CC6140",
          700: "#B35238",
          800: "#993330",
          900: "#803428"
        },
        secondary: {
          DEFAULT: "#E6FFC9", // Parrot Green
          50: "#F5FFF0",
          100: "#E6FFC9",
          200: "#C8F5A0",
          300: "#A9EB77",
          400: "#8BE14E",
          500: "#6CD725",
          600: "#56AD1D"
        },
        accent: {
          DEFAULT: "#FFD7B4", // Peach
          50: "#FFF9F5",
          100: "#FFD7B4",
          200: "#FFBF8A",
          300: "#FFA760",
          400: "#FF8F36",
          500: "#FF7700"
        },
        purple: {
          DEFAULT: "#370034", // Deep Purple
          50: "#F9F0F9",
          100: "#E6CCE6",
          200: "#D4A8D4",
          300: "#C184C1",
          400: "#AF60AF",
          500: "#370034"
        },
        pink: {
          DEFAULT: "#FFE4E8", // Light Pink
          50: "#FFF9FA",
          100: "#FFE4E8",
          200: "#FFC0CB",
          300: "#FF9CAE",
          400: "#FF7891"
        },

        // Functional colors
        background: "#FFF9F5",
        foreground: "#370034",
        border: "#FFE4E8",
        input: "#FFE4E8",
        ring: "#FF7F50",
        destructive: "#E53E3E",
        muted: "#FFE4E8"
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px"
      },
      animation: {
        "luxury-float": "luxuryFloat 6s ease-in-out infinite",
        "luxury-glow": "luxuryGlow 3s ease-in-out infinite alternate",
        "luxury-shimmer": "luxuryShimmer 8s ease infinite"
      },
      keyframes: {
        luxuryFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" }
        },
        luxuryGlow: {
          "0%": { boxShadow: "0 0 15px rgba(255, 127, 80, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(255, 127, 80, 0.6)" }
        },
        luxuryShimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        }
      },
      backgroundImage: {
        "luxury-primary": "linear-gradient(45deg, #370034, #FF7F50)",
        "luxury-secondary": "linear-gradient(45deg, #FFE4E8, #e6ffc9)",
        "luxury-accent": "linear-gradient(45deg, #FFD7B4, #FF7F50)"
      },
      boxShadow: {
        "luxury-sm": "0 4px 20px rgba(255, 127, 80, 0.15)",
        "luxury-md": "0 8px 30px rgba(255, 127, 80, 0.2)",
        "luxury-lg": "0 12px 40px rgba(255, 127, 80, 0.25)"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".corner-accent": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,228,232,0.4) 0%, rgba(255,228,232,0) 70%)",
            top: "-50px",
            right: "-50px",
            zIndex: "-1"
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(230,255,201,0.3) 0%, rgba(230,255,201,0) 70%)",
            bottom: "-50px",
            left: "-50px",
            zIndex: "-1"
          }
        },
        ".luxury-card": {
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 249, 245, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 228, 232, 0.2)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(255, 127, 80, 0.2)"
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            background: "radial-gradient(circle at center, rgba(255,127,80,0.1) 0%, transparent 70%)",
            opacity: "0",
            transition: "opacity 0.4s ease"
          },
          "&:hover::before": {
            opacity: "1"
          }
        }
      };
      addUtilities(newUtilities);
    }
  ]
};

export default config;
