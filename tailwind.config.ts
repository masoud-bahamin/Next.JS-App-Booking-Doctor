import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container : {
        center : true,
      },
      colors: {
        "prim": "#0e82fd",
        "second": "#15558d",
        "third": "#15558d",
        "paragraf" : "#6B7280"
      },
      fontFamily : {
        "Barlow" : "Barlow",
        "Work_Sans":"Work_Sans"
      }
    },
  },
  plugins: [],
  darkMode:"class"
}
export default config
