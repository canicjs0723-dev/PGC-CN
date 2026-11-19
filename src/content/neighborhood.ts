// Neighborhood tab (Information → Neighborhood). DRAFT CONTENT: names, distances, times and hours below were
// read from the design mock-up and must be checked against Naver Map before publishing. Edit here only.
// `query` is the Naver Map search used by the Map button (Korean name where known).
// To add a photo, put the file in public/images/neighborhood/ and set `photo` on that place.

export type CategoryKey = "dining" | "visit" | "essentials";

export type Icon = "dining" | "coffee" | "bakery" | "store" | "cart" | "pharmacy" | "clinic" | "laundry" | "park" | "shopping" | "culture" | "nature";

export type Place = {
  name: string;
  kind: string;
  icon: Icon;
  /** e.g. "2 min walk" or "~8 min by car". Leave out to hide the time line. */
  time?: string;
  distance?: string;
  hours?: string;
  note?: string;
  /** Labelled rows shown as a small table on the card, e.g. { label: "Hours", lines: ["Mon 11:00–20:00"] }. */
  details?: { label: string; lines: string[] }[];
  query: string;
  /** Card photo in public/images/neighborhood/, e.g. "/images/neighborhood/visit-01.jpg". Leave out to show the icon tile. */
  photo?: string;
  /** Exact Naver Map place page; when set, the Map button opens it instead of a search for `query`. */
  mapUrl?: string;
};

export type Category = {
  key: CategoryKey;
  label: string;
  /** Cover photo on the category card; leave out to show the icon tile. */
  cover?: string;
  /** object-position for the cover crop, e.g. "70% 50%". */
  coverPosition?: string;
  sub: string;
  icon: Icon;
  eyebrow: string;
  title: string;
  intro: string;
  footnote: string;
  places: Place[];
};

const near = (q: string) => `${q} 판교 대장동`;

export const categories: Category[] = [
  {
    key: "essentials",
    label: "生活必需",
    sub: "便利店、药店、超市等 · 步行可达",
    cover: "/images/neighborhood/cover-essentials-v2.webp",
    icon: "store",
    eyebrow: "生活必需",
    title: "步行可达",
    intro: "从205栋步行20分钟内可达的8处日常场所——从清晨咖啡到夜间买药，一应俱全。",
    footnote: "示意地图，未按比例绘制。步行时间和距离均为约数，营业时间可能变动。",
    places: [
      { name: "CU便利店 大庄店", kind: "便利店", icon: "store", time: "步行3分钟", distance: "180 m", hours: "24小时营业", query: near("CU"), photo: "/images/neighborhood/ess-01-cu.webp", mapUrl: "https://map.naver.com/p/search/CU%20%ED%8C%90%EA%B5%90SK%EB%B7%B0%ED%85%8C%EB%9D%BC%EC%8A%A4%EC%A0%90?c=20.00,0,0,0,dh" },
      { name: "Pascucci 板桥大庄店", kind: "咖啡馆", icon: "coffee", time: "步行8分钟", distance: "450 m", hours: "每天 07:00–22:00", query: near("파스쿠찌"), photo: "/images/neighborhood/ess-02-pascucci.webp", mapUrl: "https://map.naver.com/p/search/%ED%8C%8C%EC%8A%A4%EC%BF%A0%EC%B0%8C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1205108662?c=15.00,0,0,0,dh" },
      { name: "多乐之日 板桥大庄店", kind: "面包店", icon: "bakery", time: "步行5分钟", distance: "500 m", hours: "每天 07:00–22:00", query: near("뚜레쥬르"), photo: "/images/neighborhood/ess-03-tous-les-jours.webp", mapUrl: "https://map.naver.com/p/search/%EB%9A%9C%EB%A0%88%EC%A5%AC%EB%A5%B4%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1538874465?c=15.00,0,0,0,dh" },
      { name: "GS THE FRESH 板桥大庄店", kind: "超市", icon: "cart", time: "步行15分钟", distance: "950 m", hours: "每天 09:00–22:00", query: near("GS더프레시"), photo: "/images/neighborhood/ess-04-gs-the-fresh.webp", mapUrl: "https://map.naver.com/p/search/GS%EB%8D%94%ED%94%84%EB%A0%88%EC%8B%9C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1768996245?c=15.00,0,0,0,dh" },
      { name: "Chamyaksa 大庄药店", kind: "药店 · 참약사 대장약국", icon: "pharmacy", time: "步行15分钟", distance: "900 m", hours: "周一至周五 09:00–21:00 · 周六 09:00–18:00 · 周日休息", query: "참약사 대장약국", photo: "/images/neighborhood/ess-05-pharmacy.webp", mapUrl: "https://map.naver.com/p/search/%EC%B0%B8%EC%95%BD%EC%82%AC%EB%8C%80%EC%9E%A5%EC%95%BD%EA%B5%AD/place/1153781860?c=15.00,0,0,0,dh" },
      { name: "板桥Barun内科", kind: "诊所 · 内科 · 판교바른내과", icon: "clinic", time: "步行14分钟", distance: "910 m", hours: "周一至周五 08:30–18:30 · 周六 08:30–13:00 · 周日及节假日休息", note: "午休 13:00–14:00", query: "판교바른내과", photo: "/images/neighborhood/ess-06-pangyo-barun.webp", mapUrl: "https://map.naver.com/p/search/%ED%8C%90%EA%B5%90%EB%B0%94%EB%A5%B8%EB%82%B4%EA%B3%BC%EC%9D%98%EC%9B%90/place/1046278098?c=15.00,0,0,0,dh" },
      { name: "CleanTopia 洗衣店", kind: "洗衣店", icon: "laundry", time: "步行6分钟", distance: "420 m", hours: "周一至周五 08:00–21:00 · 周六至周日 09:00–20:00", query: near("크린토피아"), photo: "/images/neighborhood/ess-07-cleantopia.webp", mapUrl: "https://map.naver.com/p/search/%ED%81%AC%EB%A6%B0%ED%86%A0%ED%94%BC%EC%95%84%20%EC%BD%94%EC%9D%B8%EC%9B%8C%EC%8B%9C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%ED%9E%90%EC%8A%A4%EC%A0%90/place/1669719513?c=15.00,0,0,0,dh" },
      { name: "大庄近邻公园", kind: "公园 · 대장근린공원", icon: "park", time: "步行20分钟", distance: "1.4 km", hours: "全天开放", query: "대장근린공원", photo: "/images/neighborhood/ess-08-park.webp", mapUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9E%A5%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/2140000890?c=15.00,0,0,0,dh" },
    ],
  },
  {
    key: "dining",
    label: "本地美食",
    cover: "/images/neighborhood/cover-dining.webp",
    sub: "餐厅与咖啡馆 · 驾车前往",
    icon: "dining",
    eyebrow: "本地美食",
    title: "周边人气美食",
    intro: "大庄洞周边12家人气餐厅——从紫菜包饭、拉面到韩式烤肉和铁板烧。",
    footnote: "营业时间可能变动，请在前往前确认。",
    places: [
      { name: "Barda金先生", kind: "紫菜包饭 · 바르다김선생", icon: "dining", details: [
        { label: "营业时间", lines: ["周一 · 周三 · 周四 11:00–20:00", "周五至周日 10:00–20:00"] },
        { label: "休息时间", lines: ["15:00–17:00"] },
        { label: "休息日", lines: ["每周二"] },
      ], query: near("바르다김선생"), photo: "/images/neighborhood/dining-01-barda-kim.webp", mapUrl: "https://map.naver.com/p/search/%EB%B0%94%EB%A5%B4%EB%8B%A4%EA%B9%80%EC%84%A0%EC%83%9D%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1828654732?c=15.00,0,0,0,dh" },
      { name: "Seolle猪蹄", kind: "酱猪蹄 · 설레족발", icon: "dining", details: [
        { label: "营业时间", lines: ["周二至周日 17:00–24:00"] },
        { label: "休息日", lines: ["每周一"] },
      ], query: near("설레족발"), photo: "/images/neighborhood/dining-02-seolle-jokbal.webp", mapUrl: "https://map.naver.com/p/search/%EC%84%A4%EB%A0%88%EC%A1%B1%EB%B0%9C%20%EB%8C%80%EC%9E%A5%EB%8F%99%EC%A0%90?c=15.00,0,0,0,dh" },
      { name: "Mom's Touch 妈妈手", kind: "汉堡 · 맘스터치", icon: "dining", details: [
        { label: "营业时间", lines: ["周一至周五 10:50–21:30", "周六 · 周日 10:30–21:30"] },
      ], query: near("맘스터치"), photo: "/images/neighborhood/dining-03-moms-touch.webp", mapUrl: "https://map.naver.com/p/search/%EB%A7%98%EC%8A%A4%ED%84%B0%EC%B9%98%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1806014800?c=15.00,0,0,0,dh" },
      { name: "BBQ炸鸡", kind: "炸鸡 · BBQ", icon: "dining", details: [
        { label: "营业时间", lines: ["每天 11:00–23:00"] },
      ], query: near("BBQ"), photo: "/images/neighborhood/dining-04-bbq.webp", mapUrl: "https://map.naver.com/p/search/BBQ%EC%B9%98%ED%82%A8%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A7%80%EA%B5%AC%EC%A0%90/place/1975696630?c=15.00,0,0,0,dh" },
      { name: "大庄鸡爪", kind: "辣炖鸡 · 대장닭발 닭도리탕", icon: "dining", details: [
        { label: "营业时间", lines: ["周三至周日 17:00–22:00"] },
        { label: "休息日", lines: ["每周一及周二"] },
      ], query: near("대장닭발 닭도리탕"), photo: "/images/neighborhood/dining-05-daejang-dakbal.webp", mapUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9E%A5%EB%8B%AD%EB%B0%9C%26%EB%8B%AD%EB%8F%84%EB%A6%AC%ED%83%95%20%EB%B3%B8%EC%A0%90?c=15.00,0,0,0,dh" },
      { name: "Teppan House 铁板烧", kind: "铁板烧与海鲜 · 테판하우스", icon: "dining", details: [
        { label: "营业时间", lines: ["每天 10:00–22:00"] },
        { label: "休息时间", lines: ["15:00–16:30"] },
      ], query: near("테판하우스"), photo: "/images/neighborhood/dining-06-teppan-house.webp", mapUrl: "https://map.naver.com/p/search/%ED%85%8C%ED%8C%90%ED%95%98%EC%9A%B0%EC%8A%A4?c=15.00,0,0,0,dh" },
      { name: "Uri韩牛牛骨汤", kind: "牛骨汤 · 우리한우 곰탕", icon: "dining", details: [
        { label: "营业时间", lines: ["周一至周六 11:00–21:00"] },
        { label: "休息时间", lines: ["15:00–17:00"] },
        { label: "休息日", lines: ["每周日"] },
      ], query: near("우리한우 곰탕"), photo: "/images/neighborhood/dining-07-uri-hanwoo-gomtang.webp", mapUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%ED%95%9C%EC%9A%B0%EA%B3%B0%ED%83%95/place/1098691608?c=15.00,0,0,0,dh" },
      { name: "Plantimore", kind: "意大利面 · 플랜티모어", icon: "dining", details: [
        { label: "营业时间", lines: ["周一至周五 09:00–20:00", "周六 09:00–16:00"] },
        { label: "休息日", lines: ["每周日"] },
      ], query: near("플랜티모어"), photo: "/images/neighborhood/dining-08-prantimore.webp", mapUrl: "https://map.naver.com/p/search/%ED%94%8C%EB%9E%9C%ED%8B%B0%EB%AA%A8%EC%96%B4/place/1522423823?c=15.00,0,0,0,dh" },
      { name: "Sikkeop", kind: "烤五花肉 · 식껍", icon: "dining", details: [
        { label: "营业时间", lines: ["周一 · 周二 17:00–22:30", "周四至周六 17:00–22:30", "周日 17:00–21:30"] },
        { label: "休息日", lines: ["每周三"] },
      ], query: near("식껍"), photo: "/images/neighborhood/dining-09-sikkeop.webp", mapUrl: "https://map.naver.com/p/search/%EC%8B%9D%EA%BB%8D%20%EB%8C%80%EC%9E%A5%EC%A0%90/place/1749624502?c=15.00,0,0,0,dh" },
      { name: "Oroji拉面", kind: "拉面 · 오로지라멘", icon: "dining", details: [
        { label: "营业时间", lines: ["周二至周五 11:00–20:30", "周六 12:00–20:00", "周一营业时间不定"] },
        { label: "休息时间", lines: ["周二至周五 15:00–17:00"] },
        { label: "休息日", lines: ["每周日"] },
      ], query: near("오로지라멘"), photo: "/images/neighborhood/dining-10-oroji-ramen.webp", mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%A1%9C%EC%A7%80%EB%9D%BC%EB%A9%98%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1851346244?c=15.00,0,0,0,dh" },
      { name: "Pizza School 披萨", kind: "披萨 · 피자스쿨", icon: "dining", details: [
        { label: "营业时间", lines: ["周一至周六 11:00–21:00", "周日 16:30–20:00"] },
      ], query: near("피자스쿨"), photo: "/images/neighborhood/dining-12-pizza-school.webp", mapUrl: "https://map.naver.com/p/search/%ED%94%BC%EC%9E%90%EC%8A%A4%EC%BF%A8%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1381590885?c=15.00,0,0,0,dh" },
      { name: "韩松便当", kind: "便当 · 한솥도시락", icon: "dining", details: [
        { label: "营业时间", lines: ["周一至周五 10:00–20:00", "周六 · 周日 09:00–14:00"] },
      ], query: near("한솥도시락"), photo: "/images/neighborhood/dining-13-hansot.webp", mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1045030790?c=15.00,0,0,0,dh" },
    ],
  },
  {
    key: "visit",
    label: "游览胜地",
    sub: "文化、购物与自然 · 驾车前往",
    cover: "/images/neighborhood/visit-05-gyeongbokgung.webp",
    coverPosition: "30% 50%",
    icon: "culture",
    eyebrow: "游览胜地",
    title: "稍远去处",
    intro: "无论是会议间隙的闲暇午后，还是首尔及周边的周末时光——这里有8处车程约45分钟内可达的好去处。",
    footnote: "行车时间为约数，视交通状况而定。营业时间可能变动，请在前往前确认。",
    places: [
      { name: "乐天世界", kind: "主题乐园", icon: "culture", time: "车程约31分钟", distance: "24 km", note: "位于蚕室、紧邻乐天世界塔的室内外主题乐园。", query: "롯데월드", photo: "/images/neighborhood/visit-lotte-world.webp", mapUrl: "https://map.naver.com/p/entry/place/11583235?c=12.00,0,0,0,dh" },
      { name: "江南COEX", kind: "购物", icon: "shopping", time: "车程约31分钟", distance: "21 km", note: "江南的会展中心与地下购物中心，星空图书馆就在这里。", query: "코엑스", photo: "/images/neighborhood/visit-coex.webp", mapUrl: "https://map.naver.com/p/search/%EC%BD%94%EC%97%91%EC%8A%A4/place/11576171?c=15.00,0,0,0,dh" },
      { name: "现代百货 板桥店", kind: "购物", icon: "shopping", time: "车程约12分钟", distance: "7.4 km", note: "购物、餐饮与文化，一站尽享。", query: "현대백화점 판교점", photo: "/images/neighborhood/visit-02-the-hyundai-pangyo.webp", mapUrl: "https://map.naver.com/p/search/%ED%98%84%EB%8C%80%EB%B0%B1%ED%99%94%EC%A0%90%20%ED%8C%90%EA%B5%90%EC%A0%90/place/31564929?c=15.00,0,0,0,dh" },
      { name: "龙仁古基里溪谷", kind: "自然", icon: "nature", time: "车程约10分钟", distance: "4.1 km", note: "沿林间溪谷而设的餐厅与咖啡馆，悠闲惬意。", query: "용인 고기리계곡", photo: "/images/neighborhood/visit-03-gogi-valley.webp", mapUrl: "https://map.naver.com/p/search/%EC%9A%A9%EC%9D%B8%20%EA%B3%A0%EA%B8%B0%EB%A6%AC%EA%B3%84%EA%B3%A1/place/13491741?c=15.00,0,0,0,dh" },
      { name: "星空购物中心 水原店", kind: "购物", icon: "shopping", time: "车程约25分钟", distance: "17 km", note: "集购物、餐饮与影院于一体的大型综合体。", query: "스타필드 수원", photo: "/images/neighborhood/visit-04-starfield-suwon.webp", mapUrl: "https://map.naver.com/p/search/%EC%8A%A4%ED%83%80%ED%95%84%EB%93%9C%20%EC%88%98%EC%9B%90/place/1045275610?c=15.00,0,0,0,dh" },
      { name: "光化门与景福宫", kind: "文化", icon: "culture", time: "车程约45分钟", distance: "29 km", note: "首尔最主要的王宫，位于城市的历史中心。", query: "경복궁", photo: "/images/neighborhood/visit-05-gyeongbokgung.webp", mapUrl: "https://map.naver.com/p/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?c=15.00,0,0,0,dh" },
      { name: "龙仁韩国民俗村", kind: "文化", icon: "culture", time: "车程约30分钟", distance: "19 km", note: "传统民居、亲身体验项目与四季庆典。", query: "한국민속촌", photo: "/images/neighborhood/visit-06-korean-folk-village.webp", mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B5%AD%EB%AF%BC%EC%86%8D%EC%B4%8C/place/11620801?c=15.00,0,0,0,dh" },
      { name: "明洞", kind: "购物", icon: "shopping", time: "车程约40分钟", distance: "26 km", note: "首尔最知名的购物街，美妆品牌与街头小吃云集。", query: "명동", photo: "/images/neighborhood/visit-07-myeongdong.webp", mapUrl: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%208%EB%B2%88%EC%B6%9C%EA%B5%AC/place/21405078?c=15.00,0,0,0,dh" },
    ],
  },
];

export const naverMap = (query: string) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
