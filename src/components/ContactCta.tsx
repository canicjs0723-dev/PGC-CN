import Image from "next/image";
import { ArrowLink, SectionLabel } from "./ui";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image
        src="/images/building-205-dusk.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_40%] opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-40">
        <div className="reveal">
          <SectionLabel light>联系我们</SectionLabel>
          <h2 className="mt-6 font-serif text-[44px] font-light leading-[1] md:text-[80px]">
            欢迎来到
            <br />
            板桥环球园区
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/80 md:text-[17px]">
            商务住宿、宾客安排及参观咨询，欢迎随时联系。
          </p>
          <div className="mt-12">
            <ArrowLink href="/contact" light>
              联系我们
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
