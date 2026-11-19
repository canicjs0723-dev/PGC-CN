// Public visitor guide. Access codes, Wi-Fi credentials and host contacts stay in the private guest guide.

export const guidelines = [
  {
    icon: "quiet",
    title: "保持安静",
    body: "为给每位住客营造专注、放松的环境，请保持安静，深夜和清晨时段尤其如此。",
  },
  {
    icon: "power",
    title: "离开前关闭电源",
    body: "为节约能源并确保安全，离开前请关闭所有灯具和电器，包括空调与暖气。",
  },
  {
    icon: "care",
    title: "爱护设施",
    body: "请爱护房内所有用品和设施。如有损坏或污损，请立即告知负责人。",
  },
  {
    icon: "waste",
    title: "垃圾分类",
    body: "请正确分类垃圾，并投放至指定的回收箱。",
  },
  {
    icon: "smoke",
    title: "仅限吸烟区吸烟",
    body: "园区内（包括所有房间和露台）严禁吸烟。请仅在指定的室外吸烟区吸烟。",
  },
  {
    icon: "lock",
    title: "随手锁门",
    body: "为保障您的安全与隐私，每次离开房间或会议空间时，请确认门已锁好。",
  },
] as const;

export type GuidelineIcon = (typeof guidelines)[number]["icon"];

export const faq = [
  {
    q: "如何办理停车登记？",
    a: [
      "请在来访前将以下信息告知接待人员。收到信息后，我们将提前为您办理停车登记。",
    ],
    list: [
      "来访人数及入住期间",
      "车牌号码及登记状态",
      "申请人姓名及联系方式",
    ],
  },
  {
    q: "可以点外卖或自带食物吗？",
    a: [
      "可以，允许点外卖和自带食物，外卖会送到门口。但请避免烹饪或食用气味浓烈的食物。",
    ],
  },
  {
    q: "板桥环球园区附近有可游览的景点吗？",
    a: [
      "有，从园区出发驾车20至50分钟即可到达多个热门景点。",
    ],
    list: [
      "首尔大公园 — 约17 km，车程约25分钟",
      "乐天名品奥特莱斯义王店 — 约20 km，车程约20分钟",
      "乐天世界 — 约22 km，车程约35分钟",
      "江南COEX — 约25 km，车程约35分钟",
      "明洞街 — 约27 km，车程约50分钟",
    ],
  },
  {
    q: "如何获取楼栋出入信息和Wi-Fi信息？",
    a: [
      "为保障住客安全，出入信息和Wi-Fi信息不在本网站公开，将在抵达前单独告知已确认的住客。",
    ],
  },
];

// "Your Stay" steps on the Information (Guide) page.
export const stayGuide: { title: string; body: string }[] = [
  {
    title: "抵达之前",
    body: "我们将根据您的入住日程提前分配房间，并在您抵达前告知房间详情。如需停车，请提供车辆信息以便预先登记。",
  },
  {
    title: "抵达与入住",
    body: "抵达TH212后，请从侧门进入并前往205栋。按照事先告知的入住说明进入为您分配的房间。",
  },
  {
    title: "入住期间",
    body: "Wi-Fi、照明、电器及其他设施的使用方法，请参阅房内指南。请遵守住宿须知，让每位住客都能舒适入住。",
  },
  {
    title: "退房",
    body: "离开前请检查随身物品，关闭灯具和电器，并保持房间整洁。离开时请告知接待人员。",
  },
];
