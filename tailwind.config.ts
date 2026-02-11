import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #0066ff 0%, rgba(0, 102, 255, 0.8) 50%, rgba(255, 215, 0, 0.3) 100%)',
        'gradient-spider-blue-yellow': 'linear-gradient(135deg, #0066ff 0%, #ffd700 100%)',
        'gradient-black-blue': 'linear-gradient(135deg, #0a0a0a 0%, #0066ff 100%)',
        'gradient-blue-accent': 'linear-gradient(135deg, #0066ff 0%, #ffd700 100%)',
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
