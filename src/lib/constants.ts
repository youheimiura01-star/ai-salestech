import type { NavLink, Service, Stat, PricingPlan, FaqItem } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "#services", label: "サービス" },
  { href: "#results", label: "導入実績" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export const SERVICES: Service[] = [
  {
    id: "ai-phone",
    title: "AI電話営業",
    description:
      "AIが自動で電話発信し、アポイントを獲得。人間のオペレーター品質のトークスクリプトをAIが24時間365日実行します。",
    features: [
      "自然な日本語での会話対応",
      "24時間365日の自動架電",
      "アポイント自動スケジュール",
      "トークスクリプトの自動最適化",
      "リアルタイムダッシュボード",
    ],
    icon: "Phone",
  },
  {
    id: "form-attack",
    title: "フォーム自動アタック",
    description:
      "ターゲット企業のお問い合わせフォームにAIが最適化された営業メッセージを自動送信。大量のリード獲得を実現します。",
    features: [
      "月間10,000件以上の自動送信",
      "企業ごとにカスタマイズされた文面",
      "フォーム自動検出・入力",
      "送信結果のリアルタイム追跡",
      "ABテストによる文面最適化",
    ],
    icon: "Send",
  },
  {
    id: "auto-targeting",
    title: "自動ターゲティング",
    description:
      "AIが膨大なデータベースから最適な営業ターゲットを自動選定。受注確度の高い企業リストを生成します。",
    features: [
      "500万社以上のデータベース",
      "AIスコアリングによる優先順位付け",
      "業界・規模・地域の自動フィルタ",
      "類似企業の自動レコメンド",
      "CRM連携による自動更新",
    ],
    icon: "Target",
  },
];

export const STATS: Stat[] = [
  {
    id: "apo-rate",
    value: "300%",
    label: "アポ率向上",
    description: "従来の営業手法と比較",
  },
  {
    id: "cost-reduction",
    value: "1/5",
    label: "営業コスト削減",
    description: "人件費対比でのコスト",
  },
  {
    id: "companies",
    value: "2,500+",
    label: "導入企業数",
    description: "累計導入実績",
  },
  {
    id: "calls",
    value: "100万+",
    label: "月間AI架電数",
    description: "プラットフォーム全体",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "スターター",
    price: "¥98,000",
    priceNote: "月額（税別）",
    description: "AI営業を始めたい企業様に",
    features: [
      "アプローチ先DB利用",
      "AIコールスタッフ3名構築",
      "AIコールスタッフ効果検証機能",
      "専任カスタマーサクセス",
    ],
    isPopular: false,
    ctaText: "無料トライアル",
  },
  {
    id: "standard",
    name: "スタンダード",
    price: "¥248,000",
    priceNote: "月額（税別）",
    description: "本格的にAI営業を活用したい企業様に",
    features: [
      "アプローチ先DB利用",
      "AIコールスタッフ3名構築",
      "AIコールスタッフ効果検証機能",
      "専任カスタマーサクセス",
    ],
    isPopular: true,
    ctaText: "お問い合わせ",
  },
  {
    id: "enterprise",
    name: "エンタープライズ",
    price: "お問い合わせ",
    priceNote: "カスタムプラン",
    description: "大規模導入をご検討の企業様に",
    features: [
      "アプローチ先DB利用",
      "AIコールスタッフ3名構築",
      "AIコールスタッフ効果検証機能",
      "専任カスタマーサクセス",
    ],
    isPopular: false,
    ctaText: "ご相談はこちら",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "AIの電話営業は本当に自然な会話ができますか？",
    answer:
      "最新の大規模言語モデル（LLM）技術を活用しており、自然な日本語での会話が可能です。相手の反応に応じてリアルタイムで会話を調整し、人間のオペレーターと遜色のない品質を実現しています。",
  },
  {
    id: "faq-2",
    question: "導入にはどのくらいの期間がかかりますか？",
    answer:
      "スタータープランであれば最短3営業日で稼働開始が可能です。エンタープライズプランの場合は、カスタマイズ内容により2〜4週間程度のセットアップ期間をいただいております。",
  },
  {
    id: "faq-3",
    question: "フォーム自動送信は法的に問題ありませんか？",
    answer:
      "特定電子メール法に準拠した運用を行っております。送信内容の事前審査、オプトアウト対応など、コンプライアンスを重視した設計となっています。",
  },
  {
    id: "faq-4",
    question: "最低契約期間はありますか？",
    answer:
      "最低契約期間は3ヶ月からとなっております。まずは無料トライアルで効果をお確かめいただき、ご納得の上でご契約いただけます。",
  },
  {
    id: "faq-5",
    question: "セキュリティ対策はどのようになっていますか？",
    answer:
      "ISO 27001認証を取得しており、すべてのデータは暗号化して管理しています。また、定期的な第三者セキュリティ監査を実施しております。",
  },
];

export const CLIENT_LOGOS = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
  "Company G",
  "Company H",
];
