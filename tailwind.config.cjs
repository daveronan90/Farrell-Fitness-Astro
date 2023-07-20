import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: { ...colors.orange, DEFAULT: colors.orange[600] },
				secondary: { ...colors.gray, DEFAULT: colors.gray[100] }
			},
			fontSize: { xxs: '.5rem', xxxs: '.3rem' },
			textShadow: {
				DEFAULT: '0 0 10px theme("colors.primary.500"), 0 0 40px theme("colors.primary.800")'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			)
		})
	]
}
