/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"generic-red": "#fa6f5a",
				"generic-orange": "#faa55a",
				"generic-yellow": "#fadd5a",
				"generic-green": "#9dfa5a",
				"generic-blue": "#5a95fa",
				"generic-purple": "#ba5afa",
				"generic-rose": "#fa5a87",

				"brand-colour": "#28cbd4",

				"brand-background": "#16181c",
				"brand-background-secondary": "#262a31",
				"brand-background-blue": "#041d30",
				"brand-background-transparent": "#262a3180",
				"brand-scrollbar": "#041d30",
				"brand-border": "#21292c",
				"brand-border-alt": "#d7c8ff",
				"brand-text": "#ffffff",
				"brand-text-secondary": "#e1e1e1",
			},
		},
	},
	plugins: [],
};
