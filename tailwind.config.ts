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
        "primary-1": "#372B50",
        "primary-2": "#856AB4",
        "secondary-1": "#261132",
        "orange-1": "#BA5C12",
        "yellow-1": "#E0CA3C",
        "light-1": "#fff",
        "light-2": "#f2f2f2",
        "light-3": "#e5e5e5",
      }
    },
  },
  plugins: [],
};
export default config;
