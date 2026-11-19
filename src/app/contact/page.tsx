import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import InquiryOffice from "@/components/InquiryOffice";
import { Container, SectionLabel } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "联系我们",
  description: "板桥环球园区商务住宿、宾客安排及参观咨询。",
};

export default function ContactPage() {
  return (
    <>
    <section className="bg-warm-white">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden bg-charcoal lg:block">
          <div className="sticky top-0 h-svh">
            <div className="relative h-full">
              <Image
                src="/images/404-hero.png"
                alt="宾客套房客厅"
                fill
                priority
                sizes="50vw"
                className="object-cover object-[40%_60%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
            </div>
          </div>
        </div>

        <div className="relative h-[48svh] min-h-[340px] bg-charcoal text-white lg:hidden">
          <Image
            src="/images/404-hero.png"
            alt="宾客套房客厅"
            fill
            priority
            sizes="(min-width: 1024px) 0px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/25" />
        </div>

        <Container className="py-16 lg:px-16 lg:py-40">
          <SectionLabel>联系我们</SectionLabel>
          <h1 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">咨询</h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
            商务住宿、宾客安排及参观咨询，均可在此提交。停车登记也可在此申请。
          </p>
          <div className="mt-14">
            <ContactForm />
          </div>
          <address className="mt-16 border-t border-line pt-8 text-[13px] not-italic leading-relaxed text-charcoal/65">
            板桥环球园区（TH212）· {site.address.rooms}
            <br />
            {site.address.street} ({site.address.lot})
            <br />
            <a href={`tel:${site.inquiryPhoneTel}`} className="mt-2 inline-block underline underline-offset-4">
              {site.inquiryPhone}
            </a>
          </address>
        </Container>
      </div>
    </section>
    <InquiryOffice />
    </>
  );
}
