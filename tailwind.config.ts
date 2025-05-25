import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Color Palette
        platinum: {
          DEFAULT: "#E5E4E2",
          50: "#F9F9F8",
          100: "#F3F2F1",
          200: "#E5E4E2",
          300: "#D7D6D3",
          400: "#C9C8C4"
        },
        pearl: {
          DEFAULT: "#F0EAE4",
          50: "#FDFCFB",
          100: "#FBF9F7",
          200: "#F0EAE4",
          300: "#E5DBD1",
          400: "#DACBBE"
        },
        taupe: {
          DEFAULT: "#483C32",
          50: "#A89E95",
          100: "#968B81",
          200: "#83796F",
          300: "#71665D",
          400: "#483C32",
          500: "#3A3028",
          600: "#2C241E",
          700: "#1E1814",
          800: "#100C0A"
        },
        mauve: {
          DEFAULT: "#9D8A96",
          50: "#E8E2E6",
          100: "#D6CBD2",
          200: "#C3B4BE",
          300: "#B09DAA",
          400: "#9D8A96",
          500: "#7E6F78",
          600: "#5F545A",
          700: "#3F393C",
          800: "#201E1F"
        },
        sage: {
          DEFAULT: "#fffaf5",
          50: "#F1F0E5",
          100: "#E8E6D3",
          200: "#DFDCC1",
          300: "#D6D2AF",
          400: "#BCB88A",
          500: "#A19D6F",
          600: "#868254",
          700: "#6B6639",
          800: "#504B1E"
        },
        bronze: {
          DEFAULT: "#B08D57",
          50: "#F0E7D9",
          100: "#E5D6BE",
          200: "#DAC5A3",
          300: "#CFB488",
          400: "#B08D57",
          500: "#957342",
          600: "#7A592D",
          700: "#5F3F18",
          800: "#442503"
        },

        // Functional colors mapped to CSS variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "#E53E3E",
          foreground: "#F0EAE4"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.875rem",
        sm: "0.75rem",
        xs: "0.5rem"
      },
      animation: {
        "luxury-fade": "luxuryFade 1s ease-out forwards",
        "luxury-float": "luxuryFloat 8s ease-in-out infinite",
        "luxury-float-delay": "luxuryFloat 8s ease-in-out infinite 2s",
        "luxury-pulse": "luxuryPulse 2s ease-in-out infinite",
        "luxury-glow": "luxuryGlow 3s ease-in-out infinite alternate",
        "text-shimmer": "textShimmer 2s ease-out infinite alternate",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards"
      },
      keyframes: {
        luxuryFade: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        luxuryFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-0.5deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.5deg)" }
        },
        luxuryPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        luxuryGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(var(--primary-button), 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(var(--primary-button), 0.5)" }
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" }
        },
        textShimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100% 50%" }
        }
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #9D8A96 0%, #483C32 100%)",
        "gradient-secondary": "linear-gradient(135deg, #BCB88A 0%, #B08D57 100%)",
        "gradient-accent": "linear-gradient(135deg, #B08D57 0%, #9D8A96 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(229, 228, 226, 0.95) 0%, rgba(240, 234, 228, 0.9) 100%)",
        "gradient-text": "linear-gradient(90deg, #483C32 0%, #9D8A96 50%, #B08D57 100%)"
      },
      boxShadow: {
        "luxury-sm": "0 4px 20px rgba(157, 138, 150, 0.15)",
        "luxury-md": "0 8px 30px rgba(157, 138, 150, 0.2)",
        "luxury-lg": "0 12px 40px rgba(157, 138, 150, 0.25)",
        "luxury-xl": "0 16px 50px rgba(157, 138, 150, 0.3)",
        "luxury-inner": "inset 0 2px 4px 0 rgba(157, 138, 150, 0.1)",
        "coral-glow": "0 0 15px rgba(255, 133, 47, 0.5)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".luxury-gradient-text": {
          color: "rgb(var(--text-dark))",
        },
        ".luxury-card": {
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.75rem",
          background: "rgb(var(--card))",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(var(--primary-button), 0.3)",
          boxShadow: "0 5px 15px rgba(var(--taupe), 0.05)",
          transition: "all 0.3s ease-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 20px rgba(var(--taupe), 0.08)"
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            background: "radial-gradient(circle at 70% 30%, rgba(var(--primary-button), 0.1) 0%, transparent 70%)",
            opacity: "0",
            transition: "opacity 0.4s ease"
          },
          "&:hover::before": {
            opacity: "1"
          }
        },
        ".luxury-button": {
          position: "relative",
          overflow: "hidden",
          borderRadius: "0.375rem",
          padding: "0.75rem 1.5rem",
          fontWeight: "600",
          color: "rgb(var(--primary-foreground))",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "rgb(var(--primary))",
          boxShadow: "0 3px 10px rgba(var(--primary), 0.3)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "rgba(var(--primary), 0.9)",
            transform: "translateY(-1px)",
            boxShadow: "0 5px 12px rgba(var(--primary), 0.4)"
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0",
            background: "radial-gradient(circle, rgba(var(--primary-foreground), 0.2) 0%, transparent 70%)",
            opacity: "0",
            transition: "opacity 0.4s ease"
          },
          "&:hover::after": {
            opacity: "1"
          }
        },
        ".luxury-btn-secondary": {
          borderRadius: "0.375rem",
          padding: "0.75rem 1.5rem",
          fontWeight: "600",
          backgroundColor: "transparent",
          border: "1px solid rgb(var(--taupe))",
          color: "rgb(var(--taupe))",
          transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s ease-out",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "rgb(var(--taupe))",
            color: "rgb(var(--background-base))",
            transform: "translateY(-1px)"
          }
        },
        ".luxury-icon-wrapper": {
          padding: "0.75rem",
          borderRadius: "9999px",
          background: "rgb(var(--primary))",
          color: "rgb(var(--primary-foreground))",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem"
        }
      }
      addUtilities(newUtilities)
    }
  ]
}

export default config
