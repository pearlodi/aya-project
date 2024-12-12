/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  gray: {
			100: '#1D2939',
			200: '#475467',
			300: '#667085', 
			400: '#101828'
		  },
		  grayDark:{
			100: '#98A2B3',
			200: '#FCFCFD',
			300: '#344054',
			400: '#D0D5DD'
		  }
		},
		fontFamily: {
			sans: ["Uncut Sans", "sans-serif"], // Add "Uncut Sans" to your font stack
		  },
	  },
	},
//   plugins: [require('@tailwindcss/forms')],
  };
  