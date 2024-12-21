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
        grey: "#DAD7CD",
        green1: "#A3B18A",
        green2: "#588157",
        green3: "#3A5A40",
        green4: "#344E41",
      },
      backgroundImage: {
        render1: "url('/render1.jpg')",
        render1_mobile: "url('/render1_mobile.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
