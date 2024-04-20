import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#372B50",
        "primary-2": "#856AB4",
        "secondary-1": "#261132",
        "light-1": "#fff",
      }
    },
  },
  plugins: [],
};
export default config;
