import GuidelineIcon from "@/components/GuidelineIcon";
import PageHero from "@/components/PageHero";
import PageTabs from "@/components/PageTabs";
import { ArrowLink, Container, SectionLabel } from "@/components/ui";
import { faq, guidelines, stayGuide } from "@/content/guide";

export default function GuideView() {
  return (
    <>
      <PageHero
        tall
        label="客房"
        title="入住指南"
        subtitle="轻松入住，一切从简。入住前请先阅读本指南。"
        image="/images/building-205-entrance.webp"
        alt="205栋入口"
        position="50% 40%"
      />

      <PageTabs
        label="客房"
        items={[
          { label: "商务套房", href: "/business-room", active: false },
          { label: "宾客套房", href: "/guest-room", active: false },
          { label: "入住指南", href: "/guide", active: true },
        ]}
      />

      {/* Reservation + stay flow — one continuous guide */}
      <section id="stay" className="scroll-mt-20 bg-warm-white py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <div className="md:sticky md:top-28">
              <SectionLabel>您的入住</SectionLabel>
              <h2 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">
                从抵达
                <br />
                到退房
              </h2>
              <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-charcoal/70">
                楼栋出入方式与 Wi-Fi 信息将在抵达前单独告知已确认预订的宾客。
              </p>
            </div>
          </div>
          <ol className="md:col-span-8">
            {stayGuide.map((s, i) => (
              <li
                key={s.title}
                id={`step-${i + 1}`}
                className="reveal grid scroll-mt-24 grid-cols-[48px_1fr] gap-4 border-t border-charcoal/15 py-9 last:border-b md:grid-cols-[96px_1fr] md:py-11"
                style={{ "--delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
              >
                <span className="font-serif text-[30px] font-light leading-none text-warm-gray md:text-[44px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold uppercase tracking-[0.22em]">{s.title}</h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.85] text-charcoal/80">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="scroll-mt-20 bg-charcoal py-24 text-white md:py-32">
        <Container>
          <div className="reveal">
            <SectionLabel light>宾客守则</SectionLabel>
            <h2 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">
              共同营造
              <br />
              高品质的入住体验
            </h2>
          </div>
          <ul className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((g, i) => (
              <li key={g.title} className="reveal" style={{ "--delay": `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <GuidelineIcon name={g.icon} className="size-9 text-white/85" />
                <h3 className="mt-5 text-[17px] font-medium">{g.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-white/65">{g.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-warm-white py-24 md:py-32">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <SectionLabel>常见问题</SectionLabel>
            <h2 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">
              常见
              <br />
              问题
            </h2>
          </div>
          <div className="reveal md:col-span-8">
            {faq.map((f) => (
              <details key={f.q} className="group border-t border-charcoal/15 last:border-b">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium md:text-[18px]">
                  {f.q}
                  <span className="faq-icon relative size-4 shrink-0 transition-transform duration-300" aria-hidden>
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-charcoal" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-charcoal" />
                  </span>
                </summary>
                <div className="pb-8 pr-10 text-[15px] leading-[1.85] text-charcoal/75">
                  {f.a.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                  {f.list && (
                    <ul className="mt-4 space-y-1.5">
                      {f.list.map((l) => (
                        <li key={l}>— {l}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
            <div className="mt-12">
              <ArrowLink href="/contact">提出问题</ArrowLink>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
