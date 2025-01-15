import { headers } from "next/headers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-color' : '#FF0037',
        'secondary-color' : '#FFB100',
        'filler-color' : '#161616',
        'secondary-filler-color' : '#F4F4F4',
      },
      container : {
        center : true,
        padding : '1rem'
      },
      fontSize : {
        header : '48px',
        secHeader : '32px',
        navbar  : '24px',
      }
    },
  },
  plugins: [],
};
export default config;
