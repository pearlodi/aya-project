/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {

			backgroundImage: {
				'light-gradient': `
			  linear-gradient(189.07deg, rgba(255, 255, 255, 0.1) 47.67%, rgba(232, 184, 246, 0.1) 70.14%, rgba(20, 60, 253, 0.1) 92.38%), 
			  url('/images/background-bottom.svg'),
			  url('/images/background-top.svg')
			`,
				'dark-gradient': `
			  linear-gradient(171.69deg, rgba(4, 8, 15, 0.2) 55.95%, rgba(232, 184, 246, 0.2) 72.53%, rgba(124, 121, 250, 0.2) 84.29%, rgba(20, 60, 253, 0.2) 94.32%), 
			  url('/images/background-bottom.svg'),
			  url('/images/background-top.svg')
			`,
				'tag-light': 'linear-gradient(135deg, #e8b8f629 0%, #143cfd80 100%)',
				'tag-dark': 'linear-gradient(135deg, rgba(232, 184, 246, 0.3) 0%, rgba(20, 60, 253, 0.3) 100%)',
				'glitter-gradient-dark': 'linear-gradient(135deg, rgba(232, 184, 246, 0.2) 0%, rgba(20, 60, 253, 0.2) 100%)',
				'glitter-gradient': 'linear-gradient(135deg, #E8B8F6 0%, #143CFD 100%)',
			},
			backgroundSize: {
				'custom-light': 'cover, contain, contain',
			},
			backgroundPosition: {
				'custom-light': 'top, top center, bottom center',
			},
			backgroundRepeat: {
				'custom-light': 'no-repeat, no-repeat, no-repeat',
			},
			colors: {
				gray: {
					100: '#1D2939',
					200: '#475467',
					300: '#667085',
					400: '#101828'
				},
				grayDark: {
					100: '#98A2B3',
					200: '#FCFCFD',
					300: '#344054',
					400: '#D0D5DD'
				}
			},
			borderImage: {
				'gradient-light': 'linear-gradient(135deg, #e8b8f633 0%, #143cfd80 100%)',
				'gradient-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)',
			},
			
			boxShadow: {
				card: '4px 4px 10px 0px rgba(20, 60, 253, 0.6)',
				cardDark: '4px 4px 16.8px 0px rgba(20, 60, 253, 0.6)',
				'gradient-border': '0 0 0 2px rgba(232, 184, 246, 0.5), 0 0 0 4px rgba(20, 60, 253, 0.5)',
			},

			fontFamily: {
				sans: ["Uncut Sans", "sans-serif"],
			},
		},
	},
	//   plugins: [require('@tailwindcss/forms')],

};
