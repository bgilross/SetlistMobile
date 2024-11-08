/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./global.css",
	],
	presets: [require("@nativewind/tailwind")],
	theme: {
		extend: {},
	},
	plugins: [],
}
