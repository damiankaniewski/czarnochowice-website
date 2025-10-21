import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: "rgba(12, 54, 47, 1)",
        green1: "#83856eff",
        green2: "#4a4d3bff",
        green3: "#3e412fff",
        green4: "rgba(20, 92, 80, 1)",
        signature: "#1b1b1bff",
        signature_text: "#e6e6e6ff",
      },
      backgroundImage: {
        render1: "url('/czarnochowice-przod-1.jpg')",
        render1_mobile: "url('/czarnochowice-mobile.jpg')",
      },
      width: {
        "3/10": "30%",
        "160": "40rem",
      },
      height: {
        "80vh": "80vh",
        "112": "28rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
