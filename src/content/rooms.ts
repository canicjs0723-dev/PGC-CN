// Room facts: guests / beds / bathrooms / amenities come from the Notion room sheets (403_.jpg, 404_.jpg).
// Facility details are checked against the PGC overview and room guides; use copy emphasizes verified room uses.

export type Room = {
  slug: "business-room" | "guest-room";
  number: "403" | "404";
  name: string;
  tagline: string;
  // Overview column: either a list of uses, or a two-line headline with a supporting line.
  purpose?: string[];
  overview?: { headline: string[]; sub: string };
  description: string[];
  experience: string;
  keywords: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  amenities: string[];
  signature: string[];
  hero: { src: string; alt: string; position?: string };
  // "Inside the Room" gallery, in display order (living first, then spaces). To use a higher-resolution
  // photo, add it under public/images/ and point src here; position adjusts the 4:3 crop (e.g. "50% 60%").
  living: { src: string; alt: string; position?: string };
  spaces: { name: string; src: string; alt: string; position?: string }[];
};

export const businessRoom: Room = {
  slug: "business-room",
  number: "403",
  name: "商务套房",
  tagline: "会面、相聚、留宿——设有5张床，可供过夜。",
  overview: {
    headline: ["会面与留宿", "尽在此处。"],
    sub: "企业研讨会 · 会议 · 住宿",
  },
  description: [
    "商务套房是一处活动与商务空间，适合举办研讨会、与合作伙伴私密会谈以及团队外出活动。套房内设有5张床，可供过夜，会议与住宿皆可兼顾。",
    "餐饮休息区、投影仪和音响设备一应俱全，轻松兼顾专注工作、共同用餐与舒适住宿。",
  ],
  experience: "商务套房既有会议空间，又设有5张床，在同一私密空间内即可完成会议、用餐与过夜。",
  keywords: [
    { title: "企业研讨会", body: "投影仪、音响设备、餐饮休息区和5张床，满足小型研讨会与过夜住宿的需求。" },
    { title: "合作伙伴会议", body: "与客户及全球合作伙伴会谈的私密空间，演示设备触手可及。" },
    { title: "团队外出活动", body: "在同一空间内完成专注研讨、用餐、交流与住宿。" },
  ],
  facts: [
    { label: "可住人数", value: "5" },
    { label: "床位", value: "5" },
    { label: "卫生间", value: "2" },
  ],
  amenities: [
    "电视",
    "投影仪",
    "音响设备",
    "红酒柜",
    "衣物护理机",
    "洗衣机",
    "冷暖空调",
    "扫地机器人",
    "洗碗机",
    "电磁炉",
    "多功能电饭煲",
    "空气净化器",
    "吹风机",
  ],
  signature: ["投影仪", "音响设备", "红酒柜"],
  hero: { src: "/images/403-hero.png", alt: "商务套房客厅休息区，配有枝形吊灯和开放式厨房", position: "50% 55%" },
  living: { src: "/images/403-living.png", alt: "商务套房休息区沙发，面向露台落地窗" },
  spaces: [
    { name: "餐饮休息区", src: "/images/403-dining-lounge.png", alt: "商务套房厨房岛台餐饮休息区" },
    { name: "潘普洛纳", src: "/images/403-pamplona.png", alt: "商务套房潘普洛纳卧室" },
    { name: "阁楼", src: "/images/403-attic-study.png", alt: "商务套房阁楼，配有矮桌" },
    { name: "阁楼", src: "/images/403-attic-rest.png", alt: "商务套房阁楼休息区，配有两张床" },
  ],
};

export const guestRoom: Room = {
  slug: "guest-room",
  number: "404",
  name: "宾客套房",
  tagline: "住得舒适，歇得私密。",
  purpose: ["安心入住之所", "放松身心之地"],
  description: [
    "宾客套房专为来访的高管、员工和宾客设计，设有9张床和2间卫生间，可供9人入住。",
    "无论短期还是长期来访，这里都能让您在行程间隙舒适休憩、恢复活力。",
  ],
  experience: "宁静的宾客居所，适合高管与团队入住，可供9人就寝，各项设施让来访更加舒适。",
  keywords: [
    { title: "高管入住", body: "为来访板桥的国内外高管提供舒适的落脚之处。" },
    { title: "宾客住宿", body: "9张床和2间卫生间，可供最多9人的团体入住。" },
    { title: "长期来访", body: "短期或长期来访期间，安静休憩、恢复活力的好去处。" },
  ],
  facts: [
    { label: "可住人数", value: "9" },
    { label: "床位", value: "9" },
    { label: "卫生间", value: "2" },
  ],
  amenities: [
    "电视",
    "按摩椅",
    "衣物护理机",
    "洗衣机",
    "干衣机",
    "冷暖空调",
    "扫地机器人",
    "洗碗机",
    "电磁炉",
    "微波炉",
    "多功能电饭煲",
    "空气净化器",
    "吹风机",
  ],
  signature: ["按摩椅", "干衣机", "微波炉"],
  hero: { src: "/images/404-hero.png", alt: "宾客套房客厅，配有皮质沙发和木格栅墙", position: "50% 60%" },
  living: { src: "/images/404-living.png", alt: "宾客套房客厅，配有两组沙发" },
  spaces: [
    { name: "餐饮休息区", src: "/images/404-dining-lounge.png", alt: "宾客套房餐桌与厨房岛台" },
    { name: "圣地亚哥", src: "/images/404-santiago.png", alt: "宾客套房圣地亚哥卧室", position: "50% 60%" },
    { name: "布尔戈斯 / 莱昂", src: "/images/404-burgos-leon.png", alt: "宾客套房布尔戈斯 / 莱昂卧室" },
    { name: "阁楼", src: "/images/404-attic.png", alt: "宾客套房阁楼，配有书桌和床" },
  ],
};

export const rooms = [businessRoom, guestRoom];
