/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#0F0F0F',
				grey: '#222222',
				darkgrey: '#272727'
			},
			width: {},
			height: {}
		}
	},
	plugins: []
};
