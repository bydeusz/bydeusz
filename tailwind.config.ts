import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bydeusz_dark_green: "#111A0B",
        bydeusz_green: "#52AF61",
        bydeusz_light_green: "#CCF1D3",
        bydeusz_blue: "#4C89F7",
        bydeusz_purple: "#6A58D2",
        bydeusz_yellow: "#CCCC49",
      },
      fontFamily: {
        gilmer: ["Gilmer", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
