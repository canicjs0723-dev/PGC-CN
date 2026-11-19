import Image from "next/image";
import { ArrowLink } from "./ui";

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[620px] overflow-hidden bg-charcoal text-white">
      <Image
        src="/images/403-hero.png"
        alt="板桥环球园区商务套房休息区"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover object-[35%_50%] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up text-[11px] uppercase tracking-[0.4em] text-white/80" style={{ "--delay": "200ms" } as React.CSSProperties}>
          板桥环球园区
        </p>
        <h1
          className="fade-up mt-6 font-serif text-[64px] font-light leading-[0.95] tracking-[-0.01em] sm:text-[88px] lg:text-[128px]"
          style={{ "--delay": "350ms" } as React.CSSProperties}
        >
          <span className="block md:inline">工作。</span> <span className="block md:inline">居住。</span>{" "}
          <span className="block md:inline">交流。</span>
        </h1>
        <p
          className="fade-up mt-8 max-w-md text-[15px] leading-relaxed text-white/85 md:text-[17px]"
          style={{ "--delay": "550ms" } as React.CSSProperties}
        >
          商务与礼宾服务的完美交汇。
          <span className="hidden md:inline">
            <br />专为工作、休憩与深度交流打造的高端商务居所。
          </span>
        </p>
        <div className="fade-up mt-10" style={{ "--delay": "750ms" } as React.CSSProperties}>
          <ArrowLink href="/about" light>
            探索 PGC
          </ArrowLink>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 right-6 hidden flex-col items-center gap-4 md:flex"
        aria-label="向下滚动以探索"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">向下滚动</span>
        <span className="h-16 w-px bg-white/30">
          <span className="scroll-line block h-full w-px bg-white" />
        </span>
      </a>
    </section>
  );
}
