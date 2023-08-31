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
      },
      fontSize: {
        title: "3.438rem",
        subtitle: "1.5rem",
        paragraph: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
