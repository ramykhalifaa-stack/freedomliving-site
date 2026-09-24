/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
        'brand-blue-light': 'hsl(var(--brand-blue-light))',
        'brand-blue-default': 'hsl(var(--brand-blue-default))',
        'brand-blue-dark': 'hsl(var(--brand-blue-dark))',
        'brand-royal-blue': 'hsl(var(--brand-royal-blue))',
        'brand-nav-link': 'hsl(var(--brand-nav-link))',
        'brand-nav-link-hover': 'hsl(var(--brand-nav-link-hover))',
        'brand-black': 'hsl(var(--brand-black))',
        'brand-text': 'hsl(var(--brand-text))',
        'brand-text-dark': 'hsl(var(--brand-text-dark))',
        'brand-green': 'hsl(var(--brand-green))',
        'brand-whatsapp-green': 'hsl(var(--brand-whatsapp-green))',
        'celestial-pearl': 'hsl(var(--celestial-pearl))', 
        'aegean-mist': 'hsl(var(--aegean-mist))', 
        'sea-glass-aqua': 'hsl(var(--sea-glass-aqua))', 
        'coral-sand': 'hsl(var(--coral-sand))', 
        'midnight-abyss': 'hsl(var(--midnight-abyss))',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
        serif: ['Playfair Display', 'Amiri', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}