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
        "light-3": "#DDF1F9",
        "grey-1": "#988da5",
        "dark-1": "#4A4453",
      },
      height: {
        "navbar-height": "70px",
      },
      width: {
        "aside-header-width": "250px",
      },
      padding: {
        "navbar-padding-y": "20px",
        "aside-header-padding": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
