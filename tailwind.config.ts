import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#496F7D",
        secondary: "#549794",
        dark: "#29484D",
        whiteBg: "#FFFFFF",
        sectionBg: "#F7F8F8",
        textBase: "#1A1A1A"
      },
      borderRadius: {
        card: "16px"
      },
      maxWidth: {
        "8xl": "1280px"
      },
      fontFamily: {
        sans: ["Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
