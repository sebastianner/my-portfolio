import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "auxiliary-gray": "#c0c0c0",
        "secondary-green": "#00BF89",
        "slytherin-primary": "#011400",
        "slytherin-secondary": "#011e00",
      },
      fontSize: {
        paragraph: "1.3rem",
        subtitle: "1.2rem",
        title: "2.5rem",
      },
      height: {
        mobile: "120vh",
      },
    },
  },
};
export default config;
