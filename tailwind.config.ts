import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#856AB4",
        "primary-2": "#BC9EEC",
        "secondary-1": "#261132",
        "orange-1": "#BA5C12",
        "yellow-1": "#E0CA3C",
        "light-1": "#fff",
        "light-2": "#FCF7FF",
        "light-3": "#ECF0FA",
        "grey-1": "#B0A8BA",
        "dark-1": "#4A4453",
      },
      height: {
        "navbar-height": "70px",
      },
    },
  },
  plugins: [],
};
export default config;
