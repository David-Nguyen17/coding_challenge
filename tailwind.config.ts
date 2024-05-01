import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        script_ink: "#5F5F68",
        dark_eclipse: "#0A2742",
        blue_dolphin: "#BDC5CD",
        carbon: "#333",
        black_knight: "#000D19",
        guppies_green: "#02FF83",
        cynical_black: "#171717",
        aurora_green: "rgba(100, 213, 159, 0.20)",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
