import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "AIセールステック <onboarding@resend.dev>",
      to: "r_yoshida@aidma-hd.jp",
      subject: `【AIセールステック】お問い合わせ: ${company} ${name}様`,
      html: `
        <h2>AIセールステック お問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;width:140px;">お名前</td>
            <td style="padding:12px;">${name}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">会社名</td>
            <td style="padding:12px;">${company}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">メールアドレス</td>
            <td style="padding:12px;">${email}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">電話番号</td>
            <td style="padding:12px;">${phone || "未入力"}</td>
          </tr>
          <tr>
            <td style="padding:12px;font-weight:bold;vertical-align:top;">お問い合わせ内容</td>
            <td style="padding:12px;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
