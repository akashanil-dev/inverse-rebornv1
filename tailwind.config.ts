import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-navy-blue': 'linear-gradient(135deg, #001a4d 0%, #0066cc 100%)',
        'gradient-silver-white': 'linear-gradient(135deg, #c0c0c0 0%, #f5f5f5 100%)',
        'gradient-dark-navy': 'linear-gradient(135deg, #0f0f0f 0%, #001a4d 100%)',
        'gradient-blue-accent': 'linear-gradient(135deg, #0066cc 0%, #00ccff 100%)',
        'gradient-hero': 'linear-gradient(180deg, #001a4d 0%, rgba(0, 102, 204, 0.8) 50%, rgba(192, 192, 192, 0.6) 100%)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss/plugin')],
}

export default config
