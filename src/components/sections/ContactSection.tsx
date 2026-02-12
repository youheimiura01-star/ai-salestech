"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。（デモ版のため送信されません）");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="お問い合わせ"
            subtitle="サービスに関するご質問やお見積もりなど、お気軽にご連絡ください"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                まずはお気軽にご相談ください
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                AIセールステックの導入についてのご質問、デモのご依頼、お見積もりのご相談など、
                何でもお気軽にお問い合わせください。専任スタッフが丁寧にご対応いたします。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">メール</div>
                    <div className="text-sm text-text-secondary">
                      info@ai-salestech.example.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">電話</div>
                    <div className="text-sm text-text-secondary">
                      03-XXXX-XXXX（平日 9:00〜18:00）
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">
                      所在地
                    </div>
                    <div className="text-sm text-text-secondary">
                      東京都品川区
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                    placeholder="株式会社サンプル"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                    placeholder="example@company.co.jp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    電話番号
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                    placeholder="03-1234-5678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm resize-none"
                    placeholder="ご質問やご要望をご記入ください"
                  />
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  送信する
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
