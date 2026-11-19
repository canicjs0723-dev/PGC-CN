import type { Metadata } from "next";
import { Container, SectionLabel } from "@/components/ui";
import { privacyConsent } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "隐私声明",
  robots: { index: false },
};

// TODO(operator): review with the operator before launch (retention period, contact for privacy requests).
export default function PrivacyPage() {
  return (
    <section className="bg-warm-white pb-28 pt-40 md:pt-48">
      <Container className="max-w-[820px]">
        <SectionLabel>隐私声明</SectionLabel>
        <h1 className="mt-5 font-serif text-[44px] font-light leading-none md:text-[60px]">您的个人信息</h1>
        <div className="mt-12 space-y-10 text-[15px] leading-[1.9] text-charcoal/80">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">收集项目</h2>
            <p className="mt-2">{privacyConsent.items}（通过咨询表单提交）。</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">使用目的</h2>
            <p className="mt-2">{privacyConsent.purpose}。</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">保存期限</h2>
            <p className="mt-2">{privacyConsent.retention}。</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">运营方</h2>
            <p className="mt-2">{`板桥环球园区由 ${site.operator} 运营。咨询表单会生成一封邮件，由您通过自己的邮件应用直接发送给 ${site.operator}，任何第三方表单服务均不会接收该邮件。`}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
