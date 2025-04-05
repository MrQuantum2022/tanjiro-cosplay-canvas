
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Demon Slayer Theme Colors
				tanjiro: {
					primary: '#1EAEDB', // water breathing blue
					secondary: '#33C3F0', // lighter blue
					haori: {
						teal: '#5DD9C1', // teal green from haori
						dark: '#173F35', // dark green from haori
					},
					accent: '#ea384c', // red from scar and blade
					dark: '#000000e6', // near black
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'water-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.8',
					},
					'50%': { 
						transform: 'scale(1.05)', 
						opacity: '1',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'flow': {
					'0%': { transform: 'translateX(-5%) translateY(0)' },
					'50%': { transform: 'translateX(5%) translateY(-5px)' },
					'100%': { transform: 'translateX(-5%) translateY(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'water-pulse': 'water-pulse 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'flow': 'flow 8s ease-in-out infinite',
			},
			backgroundImage: {
				'wave-pattern': "url('/public/lovable-uploads/948ed1c0-3093-4c79-8376-51f8fec5d448.png')",
				'grid-pattern': "url('/public/lovable-uploads/55587d8b-9942-42a7-ab58-90e32125b4dc.png')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
