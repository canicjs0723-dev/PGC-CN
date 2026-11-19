// Source of truth: "PGC Overview_EN.pdf" (RONDA KOREA) + Notion guest guides (403 / 404).
// PRIVATE — never add here: door/access codes, Wi-Fi credentials.
// Inquiry email, phones and WeChat QR below are published with the owner's approval (2026-10-11).

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "关于我们", href: "/about" },
  {
    label: "客房",
    href: "/business-room",
  },
  // Information opens on Location; the stay Guide is the last tab under Rooms (/guide).
  { label: "周边信息", href: "/information/location" },
  { label: "联系我们", href: "/contact" },
];

export const site = {
  name: "板桥环球园区",
  short: "PGC",
  tagline: "兼顾工作与休憩的雅致居所。",
  operator: "RONDA KOREA",
  complex: "板桥TH212",
  address: {
    rooms: "205栋 403、404室",
    street: "城南市盆唐区板桥大庄路2街25",
    lot: "大庄洞596",
    country: "韩国",
  },
  // Business inquiry line printed in the official brochure (not a personal number).
  inquiryPhone: "031-613-2360",
  inquiryPhoneTel: "+82316132360",
  inquiryEmail: "evan.kim@rondakorea.com",
  // Contact form mailer: the Web app URL of docs/contact-form-apps-script.gs deployed from the operator's Google
  // account (https://script.google.com/macros/s/…/exec). It emails each inquiry to inquiryEmail. Empty = not set up.
  contactFormUrl: "https://script.google.com/macros/s/AKfycbxpR-3_bFYw2pt8llZ-nQEhOFh-DuUPrCDB34EwNEDxFi8Mc27U6Vvwv1Uya234rxU/exec",
  // Web3Forms access key for the contact form (from web3forms.com, created for inquiryEmail). Web3Forms
  // designs this key to sit in public page code: it can only send to the inbox it was created for.
  // Empty = the form opens the visitor's email app instead.
  web3formsAccessKey: "",
  managementPhone: "031-711-7691",
  managementPhoneTel: "+82317117691",
  // Search term for the external map links and the embedded map: the complex's registered name.
  mapSearchKo: "판교TH212",
  // Google query (embedded map and Google Maps button): the complex name followed by its registered
  // road address (판교대장로7길 25, 17160), so Google lands on TH212 rather than another "TH212" match.
  mapGoogleKo: "판교TH212 경기도 성남시 분당구 판교대장로7길 25",
};

export const intro = {
  label: "关于PGC",
  headline: ["商务居住", "新标准"],
  lead: "让商务与舒适自然相融的地方。",
  body: [
    "板桥环球园区坐落于板桥大庄洞，是一处配有私家露台的高端住宅，将自然与四季户外生活融入日常。",
    "园区专为员工、全球合作伙伴及来访宾客打造，以雅致舒适的环境，将工作、休憩与有意义的交流融为一体。",
  ],
};

export const identity = [
  {
    key: "工作",
    line: "专注高效的工作环境。",
    detail: "让工作顺畅无阻、效率倍增的空间。",
    image: "/images/identity-work-2026.jpg",
    alt: "同事们一起查阅文件",
  },
  {
    key: "居住",
    line: "兼顾舒适与私密的高品质居住。",
    detail: "为舒适休憩与私密而设计的空间。",
    image: "/images/identity-stay-2026.jpg",
    alt: "阳光充足的卧室，床铺整洁，配有扶手椅",
  },
  {
    key: "交流",
    line: "轻松自如的交流，建立有意义的联系。",
    detail: "让员工与全球合作伙伴相聚的空间。",
    image: "/images/identity-connect-2026.jpg",
    alt: "合作伙伴在明亮的休息室中会面",
  },
];

export const directions = [
  { from: "总部", distance: "21 km", time: "车程30分钟" },
  { from: "金浦国际机场", distance: "50 km", time: "车程90分钟" },
  { from: "仁川国际机场", distance: "75 km", time: "车程90分钟" },
];

export const advantages = [
  {
    title: "交通便利",
    body: "经西板桥隧道、GTX-A城南站、西板桥站、新盆唐线与盆唐线以及西板桥IC，出行便捷。",
  },
  {
    title: "生活配套",
    body: "周边有板桥新城现代百货、首尔大学医院、Homeplus，以及板桥大庄地区的商铺和社区设施。",
  },
  {
    title: "周边景点",
    body: "乐天名品奥特莱斯义王店（20 km，20分钟）、乐天世界（22 km，35分钟）、首尔大公园（17 km，25分钟）、江南COEX（25 km，35分钟）以及明洞（27 km，50分钟）。",
  },
  {
    title: "自然与户外",
    body: "坐享丰富的自然环境，可便捷前往古基里溪谷、清溪山、光教山和巴拉山自然休养林。",
  },
];

export const parking = {
  title: "停车登记",
  note: "须完成预先登记后方可停车。",
  entrance: "为方便出入，请从204栋一侧的入口进入，再前往205栋。",
  required: [
    "来访人数及入住时长",
    "车牌号码及登记状态",
    "申请人姓名及联系方式",
  ],
};

export const roomUseCases = [
  {
    title: "高管入住",
    body: "为来访的国内外高管提供舒适的落脚之处，也适合长期入住。宾客套房最多可住9人，设有9张床和2间卫生间。",
    room: "宾客套房",
    href: "/guest-room",
  },
  {
    title: "企业研讨会",
    body: "在商务套房中同时安排小型研讨会与住宿，配有投影仪、音响设备、餐饮休息区和5张床。",
    room: "商务套房",
    href: "/business-room",
  },
  {
    title: "合作伙伴会议",
    body: "在商务套房与客户或全球合作伙伴进行私密会谈，配有演示设备和相邻的休息区。",
    room: "商务套房",
    href: "/business-room",
  },
  {
    title: "团队外出活动",
    body: "在商务套房中将专注研讨、共同用餐与团队交流融为一体，并可供最多5人留宿。",
    room: "商务套房",
    href: "/business-room",
  },
];
