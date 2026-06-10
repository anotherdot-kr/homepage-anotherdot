import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANOTHER DOT",
  description: "발표 전략 설계와 코칭으로 결과가 나는 발표를 만드는 어나더닷"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-[#1A1A1A] font-sans antialiased">{children}</body>
    </html>
  );
}
