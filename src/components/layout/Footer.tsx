import { Bot } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const serviceLinks = [
  { label: "AI電話営業", href: "#services" },
  { label: "フォーム自動アタック", href: "#services" },
  { label: "自動ターゲティング", href: "#services" },
];

const companyLinks = [
  { label: "会社概要", href: "#" },
  { label: "プライバシーポリシー", href: "#" },
  { label: "利用規約", href: "#" },
  { label: "特定商取引法に基づく表記", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-7 h-7 text-accent-400" />
              <span className="text-lg font-bold">AIセールステック</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              AI電話営業・フォーム自動アタック・自動ターゲティングで、
              貴社の営業活動を完全自動化するプラットフォームです。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              サービスに関するご質問やお見積もりなど、お気軽にお問い合わせください。
            </p>
            <a
              href="#contact"
              className="inline-block gradient-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              お問い合わせはこちら
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; 2026 株式会社アイドマ・ホールディングス All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
