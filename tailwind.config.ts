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
        "card-green": "#162e21",
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
