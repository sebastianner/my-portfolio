import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slytherin-green": "#0e1d15",
        "secondary-color": "#143925",
        "third-color": "#031713",
        "auxiliary-gray": "#c0c0c0",
        "slytherin-primary": "#011400",
        "slytherin-secondary": "#011e00",
        "secondary-green": "#00BF89",
      },
      fontSize: {
        title: "2.5rem",
        subtitle: "1.2rem",
        paragraph: "1.3rem",
      },
      height: {
        mobile: "120vh",
      },
    },
  },
  plugins: [],
};
export default config;
