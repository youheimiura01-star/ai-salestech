import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "AIセールステック | AI営業自動化プラットフォーム - アイドマ・ホールディングス",
  description:
    "AI電話営業、フォーム自動アタック、自動ターゲティングで営業を完全自動化。アポ率300%向上、営業コスト1/5を実現するAI営業プラットフォーム。",
  keywords:
    "AI営業, 営業自動化, AI電話, フォーム営業, ターゲティング, BtoB, SaaS",
  openGraph: {
    title: "AIセールステック | AI営業自動化プラットフォーム",
    description: "AIが営業を完全自動化。アポ率300%向上を実現。",
    siteName: "AIセールステック",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
