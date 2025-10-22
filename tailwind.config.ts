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
        grey:   "#D8D3CE",
        green1: "#A28C80",
        green2: "#244d36ff",
        green3: "#0f3821ff",
        green4: "#0a311cff",
        signature: "#555",
        signature_text: "#aaa",
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
