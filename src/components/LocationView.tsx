import Image from "next/image";
import { Fragment } from "react";
import ArrivalSteps from "@/components/ArrivalSteps";
import CopyAddressButton from "@/components/CopyAddressButton";
import PageHero from "@/components/PageHero";
import PageTabs from "@/components/PageTabs";
import { Container, SectionLabel } from "@/components/ui";
import { directions, parking, site } from "@/content/site";

const fullAddress = `${site.address.street} (${site.address.lot})`;
const mapSearch = encodeURIComponent(site.mapSearchKo);
// Each link opens that service's place search for the complex name.
const mapLinks = [
  { label: "Naver地图", href: `https://map.naver.com/p/search/${mapSearch}` },
  { label: "Kakao地图", href: `https://map.kakao.com/link/search/${mapSearch}` },
  { label: "谷歌地图", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapGoogleKo)}` },
];

// Parking route steps, in order. `route` draws the direction arrow on each photo (percent coordinates).
const arrival = [
  { src: "/images/parking-204-entrance.jpg", width: 657, height: 438, route: "M 30 95 Q 50 93 51 62", alt: "204栋停车场入口", caption: "01 · 204栋侧门入口及停车场" },
  { src: "/images/parking-02-turn-right-204-207.jpg", width: 2000, height: 1500, route: "M 40 99 L 40 93 Q 40 87 47 87 L 79 87", alt: "地下停车场指示牌：右转前往204–207栋", caption: "02 · 向右转，前往204–207栋" },
  { src: "/images/parking-03-straight-205-207.jpg", width: 1500, height: 2000, route: "M 62 87 L 62 55", alt: "停车场指示牌：直行前往205–207栋", caption: "03 · 继续直行，前往205–207栋" },
  { src: "/images/parking-04-right-205-entrances-3-6.jpg", width: 1500, height: 2000, route: "M 38 87 L 38 77 Q 38 71 45 71 L 74 71", alt: "停车场指示牌：右转前往205栋3–6号入口", caption: "04 · 向右转，前往205栋3–6号入口" },
  { src: "/images/parking-05-205-entrances-3-4.jpg", width: 2000, height: 1500, focus: [70, 50] as [number, number], route: "M 38 93 Q 41 60 51 46", alt: "地下停车场内的205栋3号、4号入口", caption: "05 · 205栋 — 3号、4号入口" },
];

// Walking route from the main road, in order, laid out like the PGC arrival guide: a place tag on each photo,
// boxes on the landmarks to look for, and the route arrow. Coordinates are percent of each photo.
const walking = [
  {
    src: "/images/walk-01-main-road.webp", width: 1561, height: 1008,
    tag: "主干道", route: "M 8.4 92.4 Q 31.6 74.3 54.8 56.2", arrowScale: 0.85, boxes: [{ x: 20.8, y: 26.8, w: 52.7, h: 40.4, label: "TH212" }],
    alt: "主干道，左侧为TH212园区",
    caption: "01 · 沿主干道前行，直到左侧出现TH212园区",
  },
  {
    src: "/images/walk-02-building-201-gate.webp", width: 1549, height: 1015,
    tag: "正门", route: "M 10.8 83.8 Q 30 57.2 49.3 30.5", arrowScale: 0.85, boxes: [{ x: 0.9, y: 34.3, w: 33.3, h: 24.3, label: "201" }],
    alt: "TH212 201栋正门",
    caption: "02 · 经过201栋正门后继续直行",
  },
  {
    src: "/images/walk-03-building-204-left.webp", width: 1524, height: 1032,
    tag: "后门", route: "M 5 79.5 Q 42 79.5 48 58", arrowScale: 0.8, boxes: [{ x: 53.4, y: 43.5, w: 12.7, h: 18.4, label: "205栋" }, { x: 76.2, y: 43.5, w: 21.8, h: 18.4, label: "CU" }],
    alt: "204栋后门，右侧为CU便利店",
    caption: "03 · 在204栋后门（CU便利店对面），沿人行道走到205栋",
  },
  {
    src: "/images/walk-04-building-205-entrance.webp", width: 1524, height: 1032,
    tag: "PGC 入口", route: "M 18 98.2 Q 34 84 44 68", arrowScale: 1.1, boxes: [{ x: 54, y: 54.4, w: 19.5, h: 30.5 }],
    alt: "板桥TH212 205栋入口",
    caption: "04 · 205栋入口：先输入403，再输入密码，然后走楼梯上楼",
  },
  {
    src: "/images/walk-05-entrance-panel.webp", width: 1559, height: 1009,
    tag: "入口", route: "M 85 98 Q 82.5 70 76.2 65.3", arrowScale: 0.9, boxes: [{ x: 63.4, y: 48, w: 14, h: 25.2, label: "3–4号入口" }],
    alt: "通往205栋3–4号入口的步道及门禁面板",
    caption: "05 · 在3–4号入口的门禁面板上，输入403室及密码",
  },
];

export default function LocationView() {
  return (
    <>
      <PageHero
        tall
        label="周边信息"
        title="位置"
        subtitle={`位置与交通 · 板桥环球园区 · ${site.address.rooms} · 板桥大庄洞`}
        image="/images/campus-aerial.jpg"
        alt="板桥TH212园区鸟瞰图"
        position="50% 60%"
      />

      <PageTabs
        label="周边信息"
        items={[
          { label: "位置", href: "/information/location", active: true },
          { label: "周边", href: "/information/neighborhood", active: false },
        ]}
      />

      {/* Address first (mobile priority), then map */}
      <section className="bg-warm-white py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <SectionLabel>地址</SectionLabel>
            <address className="mt-6 not-italic">
              <p className="font-serif text-[30px] font-light leading-tight md:text-[36px]">板桥环球园区（TH<span className="font-bold">212</span>）</p>
              <p className="mt-4 text-[16px] font-medium">{site.address.rooms}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-charcoal/70">
                {fullAddress}
                <br />
                {site.address.country}
              </p>
            </address>
            <CopyAddressButton address={`板桥环球园区（TH212），${fullAddress}`} />
            <div className="mt-8 flex flex-wrap gap-2">
              {mapLinks.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-charcoal/25 px-4 py-2.5 text-[13px] transition-colors hover:bg-charcoal hover:text-white"
                >
                  {m.label} ↗
                </a>
              ))}
            </div>

            <h3 className="mt-14 text-[12px] font-semibold uppercase tracking-[0.24em]">交通方式</h3>
            <dl className="mt-4 divide-y divide-charcoal/15 border-y border-charcoal/15">
              {directions.map((d) => (
                <div key={d.from} className="flex items-baseline justify-between gap-4 py-4 text-[14px]">
                  <dt>{d.from}</dt>
                  <dd className="shrink-0 text-right text-warm-gray">
                    {d.distance} · {d.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[12px] leading-relaxed text-warm-gray">※ 所需时间可能因交通状况而有所不同。</p>
          </div>
          <div className="reveal relative aspect-square overflow-hidden bg-beige md:col-span-7 md:aspect-auto md:min-h-[560px]">
            {/* An empty iwloc keeps the place card closed: the map shows the red pin and Google's
                compact "open in Maps" button only. www.google.com is the current host; maps.google.com only redirects there. */}
            <iframe
              title="板桥环球园区（TH212）地图"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapGoogleKo)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 size-full grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* Parking */}
      <section className="bg-ivory py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <SectionLabel>停车指南</SectionLabel>
            <h2 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">{parking.title}</h2>
            <p className="mt-8 text-[16px] font-medium">{parking.note}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
              到访前，请向接待方提供以下信息：
            </p>
            <ul className="mt-5 space-y-2 border-l border-charcoal/20 pl-5 text-[15px]">
              {parking.required.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] leading-relaxed text-charcoal/70">{parking.entrance}</p>
          </div>
          <figure className="reveal md:col-span-7">
            <div className="relative aspect-[1496/1051] overflow-hidden border border-line bg-white">
              <Image
                src="/images/site-map-en.webp"
                alt="TH212园区平面图，标示204栋旁的次入口及205栋位置"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-[13px] text-warm-gray">
              园区平面图 — ② 为204栋旁的次入口 · 205栋位于左上方。
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Arrival route photos */}
      <section className="bg-warm-white py-24 md:py-32">
        <Container>
          <div className="reveal">
            <SectionLabel>抵达指南</SectionLabel>
            <h2 className="mt-5 font-serif text-[40px] font-light md:text-[56px]">从停车场到 <span className="font-bold">205</span> 栋</h2>
          </div>
          <ArrivalSteps steps={arrival} />

          <div className="reveal mt-24 md:mt-32">
            <SectionLabel>抵达指南</SectionLabel>
            <h2 className="mt-5 font-serif text-[40px] font-light md:text-[56px]">步行前往 <span className="font-bold">205</span> 栋</h2>
          </div>
          <ArrivalSteps
            steps={walking}
            frame="landscape"
            layout="grid"
            extra={
              <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#5b8fd6] px-6 py-10 text-center text-white">
                <svg viewBox="0 0 48 48" className="size-14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10 30 L13 19 Q14 16 17 16 L31 16 Q34 16 35 19 L38 30" />
                  <rect x="7" y="30" width="34" height="9" rx="2" />
                  <path d="M12 39 v3 M36 39 v3 M19 12 h10 v4 h-10z M13 34.5 h3 M32 34.5 h3" />
                </svg>
                <p className="text-[0.9rem] uppercase tracking-[0.18em] text-white/85">乘坐出租车</p>
                <p className="font-serif text-[30px] leading-tight">仁川机场 → PGC</p>
                {/* Address to show the taxi driver, in English and Korean. */}
                <div className="max-w-[21rem] space-y-1.5 border-y border-white/30 py-3 text-[0.8125rem] leading-snug text-balance text-white/90">
                  {/* Lines break only between address parts, never inside names like "Pangyodaejang-ro". */}
                  <p>
                    {["韩国", "京畿道", "城南市", "盆唐区", "板桥大庄路7街25号", "TH212", "205栋"].map((part, i) => (
                      <Fragment key={part}>
                        {i > 0 && " "}
                        <span className="whitespace-nowrap">{part}</span>
                      </Fragment>
                    ))}
                  </p>
                  <p lang="ko">경기도 성남시 분당구 판교대장로7길 25 TH212 205동</p>
                </div>
                <p className="text-[1rem] font-medium">约 80 km · 1 小时 30 分钟</p>
              </div>
            }
          />
        </Container>
      </section>

    </>
  );
}
