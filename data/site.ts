export type Service = {
  slug: string;
  number: string;
  name: string;
  summary: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
};

export type Space = { src: string; label: string; title: string; alt: string };

export const services: Service[] = [
  { slug: "essential-bath", number: "01", name: "基础净护浴", summary: "把日常清洁，做成一次安静舒适的放松。", description: "从皮毛状态观察开始，使用适合宠物肤质的洗护用品，温柔完成日常清洁。", price: "¥88 起", duration: "约 60–90 分钟", includes: ["洁耳与剪甲", "脚底毛修整", "双重清洁", "吹干与梳毛"] },
  { slug: "coat-spa", number: "02", name: "皮毛深度护理", summary: "为干燥、打结和换毛期，恢复柔软与光泽。", description: "针对季节和皮毛状态定制护理方案，缓解干燥毛躁，并帮助去除浮毛。", price: "¥128 起", duration: "约 90–120 分钟", includes: ["皮毛状态评估", "深层清洁", "SPA 修护", "去浮毛梳理"] },
  { slug: "signature-grooming", number: "03", name: "造型精修", summary: "不追赶潮流，只寻找最适合它的轮廓。", description: "根据脸型、体态、毛量与生活习惯沟通造型，兼顾好看、舒适与日常打理。", price: "¥168 起", duration: "约 120–180 分钟", includes: ["基础净护全套", "造型沟通", "全身精修", "护理建议"] },
];

export const spaces: Space[] = [
  { src: "/images/store-reception.png", label: "RECEPTION & LOUNGE", title: "接待等候区", alt: "爪爪日记宠物洗护店接待与等候区" },
  { src: "/images/store-bathing.png", label: "BATHING & SPA", title: "独立洗护区", alt: "爪爪日记宠物洗护店独立洗护区" },
  { src: "/images/store-grooming.png", label: "GROOMING STUDIO", title: "造型护理区", alt: "爪爪日记宠物洗护店造型护理区" },
];

export const standards = [
  { number: "01", title: "一宠一消毒", text: "工具、毛巾与操作台每次使用后完整清洁。" },
  { number: "02", title: "全程可追踪", text: "关键节点拍照反馈，洗护状态及时同步。" },
  { number: "03", title: "拒绝暴力控宠", text: "耐心安抚、低敏吹护，不使用刺激方式。" },
  { number: "04", title: "用品安心可溯", text: "正规品牌洗护用品，按皮毛状况科学选择。" },
];
