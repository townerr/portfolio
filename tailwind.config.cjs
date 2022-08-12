/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'x-purple': '#5A189A',
				'x-orange': '#FF6D00',
			},
			animation: {
				'slow-ping': 'ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite',
				'slow-ping-2': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
			},
		},
	},
	plugins: [],
}
