const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "精益管理培训";
pres.title = "方针管理与持续改善";

// ========== 配色定义 - 红灰配色浅底 ==========
const COLORS = {
  primary: "C41E3A",
  secondary: "4A4A4A",
  accent: "D4A574",
  lightBg: "FDF8F5",
  white: "FFFFFF",
  darkBg: "2D2D2D",
  lightGray: "F5F5F5",
  mediumGray: "E0E0E0",
  darkText: "333333",
  lightText: "666666"
};

// ========== 工具函数 ==========
function addHeaderBar(slide, title) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: COLORS.primary }
  });
  slide.addText(title, {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, margin: 0
  });
}

function addFooter(slide, pageNum) {
  slide.addText(String(pageNum), {
    x: 9.3, y: 5.3, w: 0.5, h: 0.3,
    fontSize: 10, color: COLORS.lightText, align: "right"
  });
}

function createSectionCover(pres, moduleNum, title, subtitle) {
  let slide = pres.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.2, w: 1.5, h: 0.06,
    fill: { color: COLORS.white }
  });

  slide.addText(moduleNum, {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: COLORS.white, bold: true
  });

  slide.addText(title, {
    x: 0.5, y: 2.5, w: 9, h: 1,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true
  });

  slide.addText(subtitle, {
    x: 0.5, y: 3.6, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: COLORS.white
  });

  return slide;
}

// ========== 第1页：封面 ==========
let slide1 = pres.addSlide();
slide1.background = { color: COLORS.lightBg };

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.15, h: 5.625,
  fill: { color: COLORS.primary }
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.08,
  fill: { color: COLORS.primary }
});

slide1.addText("精益管理", {
  x: 0.8, y: 1.5, w: 8.5, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

slide1.addText("方针管理与持续改善", {
  x: 0.8, y: 2.1, w: 8.5, h: 1.2,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 3.4, w: 2, h: 0.05,
  fill: { color: COLORS.secondary }
});

slide1.addText("Policy Management & Continuous Improvement", {
  x: 0.8, y: 3.6, w: 8.5, h: 0.5,
  fontSize: 16, fontFace: "Arial",
  color: COLORS.lightText
});

slide1.addText("第五部分", {
  x: 0.8, y: 4.5, w: 3, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.lightText
});

// ========== 第2页：学习地图 ==========
let slide2 = pres.addSlide();
slide2.background = { color: COLORS.lightBg };
addHeaderBar(slide2, "今日学习地图");

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 3.5,
  fill: { color: COLORS.white }
});

const learningMapData = [
  { text: "时段", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
  { text: "内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
  { text: "你会做什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
  { text: "你会带走什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
];

slide2.addTable([
  [
    { text: "时段", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "你会做什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "你会带走什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [
    { text: "上午", options: { fill: { color: COLORS.lightBg } } },
    { text: "方针管理三步曲", options: { fill: { color: COLORS.lightBg } } },
    { text: "理解战略→方针→行动的分解逻辑", options: { fill: { color: COLORS.lightBg } } },
    { text: "一份方针展开图", options: { fill: { color: COLORS.lightBg } } }
  ],
  [
    { text: "上午", options: { fill: { color: COLORS.white } } },
    { text: "日常管理三要素", options: { fill: { color: COLORS.white } } },
    { text: "掌握课题设定、活动展开、结果确认", options: { fill: { color: COLORS.white } } },
    { text: "日常管理运行方案", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "下午", options: { fill: { color: COLORS.lightBg } } },
    { text: "方针监查", options: { fill: { color: COLORS.lightBg } } },
    { text: "学会检查进度、发现偏差、帮助解决", options: { fill: { color: COLORS.lightBg } } },
    { text: "方针监查记录模板", options: { fill: { color: COLORS.lightBg } } }
  ],
  [
    { text: "下午", options: { fill: { color: COLORS.white } } },
    { text: "持续改善文化", options: { fill: { color: COLORS.white } } },
    { text: "理解Kaizen思维，建立改善提案机制", options: { fill: { color: COLORS.white } } },
    { text: "改善提案制度设计", options: { fill: { color: COLORS.white } } }
  ]
], {
  x: 0.5, y: 1.2, w: 9, h: 3.5,
  colW: [1.2, 2, 3.3, 2.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 14,
  color: COLORS.darkText,
  valign: "middle",
  align: "center"
});

// ========== 第3页：开场问题 ==========
let slide3 = pres.addSlide();
slide3.background = { color: COLORS.lightBg };
addHeaderBar(slide3, "开场导入");

slide3.addText("为什么很多公司的目标，", {
  x: 0.5, y: 1.3, w: 9, h: 0.7,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

slide3.addText("最后都变成了完成指标？", {
  x: 0.5, y: 1.9, w: 9, h: 0.7,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 2.8, w: 9, h: 1.4,
  fill: { color: COLORS.lightGray },
  line: { color: COLORS.mediumGray, width: 1 }
});

slide3.addText("年初目标「降低成本200万」。结果通过推迟设备维护、减少培训、压缩研发投入，把数字完成了。但到了第二年，设备故障率飙升，员工抱怨增加，新产品研发停滞。", {
  x: 0.7, y: 2.95, w: 8.6, h: 1.1,
  fontSize: 15, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.4, w: 0.1, h: 0.8,
  fill: { color: COLORS.primary }
});

slide3.addText("目标完成了，体质却恶化了。", {
  x: 0.8, y: 4.4, w: 8.5, h: 0.4,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide3.addText("问题出在「方针管理」没有做透——只分解了数字，没有分解实现数字的路径和动作。", {
  x: 0.8, y: 4.85, w: 8.5, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.lightText
});

addFooter(slide3, 3);

// ========== 第4页：模块一封面 ==========
createSectionCover(pres, "模块一", "方针管理三步曲", "把战略变成每个人每天做的事");

// ========== 第5页：方针管理的三层结构 ==========
let slide5 = pres.addSlide();
slide5.background = { color: COLORS.lightBg };
addHeaderBar(slide5, "1.1 方针管理的底层逻辑");

slide5.addText("方针管理三层结构", {
  x: 0.5, y: 1.15, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const levels = [
  { label: "战略目标（3-5年）", y: 1.8, color: COLORS.primary },
  { label: "年度方针（当年重点）", y: 2.6, color: "D45A5A" },
  { label: "季度/月度目标（具体数字）", y: 3.4, color: "E07A7A" },
  { label: "日常行动（每天做什么）", y: 4.2, color: "ECA0A0" }
];

levels.forEach((level, i) => {
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: level.y, w: 5, h: 0.6,
    fill: { color: level.color }
  });
  slide5.addText(level.label, {
    x: 1.5, y: level.y, w: 5, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 7, y: 1.8, w: 2.5, h: 3,
  fill: { color: COLORS.lightGray }
});

slide5.addText("关键认知", {
  x: 7.1, y: 1.95, w: 2.3, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide5.addText("方针管理的核心问题是「上下不对应」——\n\n上面定的目标，下面不知道怎么干；\n\n下面干的事，上面不知道在为什么目标服务。", {
  x: 7.1, y: 2.4, w: 2.3, h: 2.2,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

addFooter(slide5, 5);

// ========== 第6页：方针分解的两种逻辑 ==========
let slide6 = pres.addSlide();
slide6.background = { color: COLORS.lightBg };
addHeaderBar(slide6, "1.1 方针分解的两种逻辑");

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 0.5,
  fill: { color: COLORS.secondary }
});
slide6.addText("逻辑一：纵向分解", {
  x: 0.5, y: 1.2, w: 4.3, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center", valign: "middle"
});

slide6.addText("公司目标 → 部门目标 → 科室目标 → 班组目标 → 个人目标", {
  x: 0.5, y: 1.8, w: 4.3, h: 0.5,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.lightText
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 2.4, w: 4.3, h: 1.2,
  fill: { color: "FFF0F0" },
  line: { color: COLORS.primary, width: 1, dashType: "dash" }
});

slide6.addText("问题：每一层分解都可能「打折」\n公司定了100，到部门变成80，到班组变成60", {
  x: 0.7, y: 2.55, w: 3.9, h: 0.9,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.primary
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 0.5,
  fill: { color: COLORS.primary }
});
slide6.addText("逻辑二：横向展开（推荐）", {
  x: 5.2, y: 1.2, w: 4.3, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center", valign: "middle"
});

slide6.addText("以「OEE提升10%」为例：", {
  x: 5.2, y: 1.8, w: 4.3, h: 0.4,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.lightText
});

slide6.addTable([
  [
    { text: "部门", options: { fill: { color: "D45A5A" }, color: COLORS.white, bold: true } },
    { text: "负责内容", options: { fill: { color: "D45A5A" }, color: COLORS.white, bold: true } }
  ],
  [{ text: "生产部", options: { fill: { color: COLORS.white } } }, { text: "减少换产时间、提高设备运行效率", options: { fill: { color: COLORS.white } } }],
  [{ text: "设备部", options: { fill: { color: COLORS.lightBg } } }, { text: "减少设备故障、缩短维修时间", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "质量部", options: { fill: { color: COLORS.white } } }, { text: "减少不良品、减少启动废品", options: { fill: { color: COLORS.white } } }],
  [{ text: "采购部", options: { fill: { color: COLORS.lightBg } } }, { text: "确保来料质量稳定", options: { fill: { color: COLORS.lightBg } } }]
], {
  x: 5.2, y: 2.2, w: 4.3, h: 1.8,
  colW: [1.2, 3.1],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 11,
  color: COLORS.darkText,
  valign: "middle"
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.3, w: 9, h: 0.9,
  fill: { color: COLORS.lightGray }
});
slide6.addText("好处：每个部门知道自己在为什么目标服务，不同部门之间有协同比单打独斗更有效。", {
  x: 0.7, y: 4.5, w: 8.6, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

addFooter(slide6, 6);

// ========== 第7页：好的方针分解四个条件 ==========
let slide7 = pres.addSlide();
slide7.background = { color: COLORS.lightBg };
addHeaderBar(slide7, "1.1 好的方针分解四个条件");

const conditions = [
  { num: "01", title: "定性描述+定量指标", desc: "不能只有数字，要说清楚做什么" },
  { num: "02", title: "有时间节点", desc: "什么时候达成，必须明确" },
  { num: "03", title: "有责任人", desc: "不是「我们部门」，是「张三个人对这件事负责」" },
  { num: "04", title: "有检查频率", desc: "每周检查、每月检查，还是每天检查" }
];

conditions.forEach((cond, i) => {
  const x = 0.5 + (i % 2) * 4.7;
  const y = 1.2 + Math.floor(i / 2) * 2.1;

  slide7.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.8,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide7.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 0.8, h: 1.8,
    fill: { color: COLORS.primary }
  });

  slide7.addText(cond.num, {
    x: x, y: y + 0.6, w: 0.8, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide7.addText(cond.title, {
    x: x + 1, y: y + 0.3, w: 3.1, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide7.addText(cond.desc, {
    x: x + 1, y: y + 0.9, w: 3.1, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

addFooter(slide7, 7);

// ========== 第8页：场景演示 ==========
let slide8 = pres.addSlide();
slide8.background = { color: COLORS.darkBg };

slide8.addText("场景演示", {
  x: 0.5, y: 0.3, w: 2, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide8.addText("某工厂如何把「成本降低」变成每个班组的具体行动", {
  x: 0.5, y: 0.7, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.4, w: 4.3, h: 2.5,
  fill: { color: "3D3D3D" },
  line: { color: COLORS.accent, width: 1 }
});

slide8.addText("成本高的原因分析", {
  x: 0.7, y: 1.5, w: 3.9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide8.addText("设备故障停机：35%\n换产频繁：25%\n不良品/返工：20%\n等待/搬运：15%\n其他：5%", {
  x: 0.7, y: 2.0, w: 3.9, h: 1.8,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.4, w: 4.3, h: 2.5,
  fill: { color: "3D3D3D" },
  line: { color: COLORS.accent, width: 1 }
});

slide8.addText("转化为改善课题", {
  x: 5.4, y: 1.5, w: 3.9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide8.addText("OEE提升专项 → 设备部+生产部\n\nSMED专项 → IE+生产部\n\n质量管理专项 → 质量部+生产部\n\n布局优化专项 → IE+物流部", {
  x: 5.4, y: 2.0, w: 3.9, h: 1.8,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.1, w: 9, h: 1.2,
  fill: { color: "C41E3A" }
});

slide8.addText("结果对比", {
  x: 0.7, y: 4.2, w: 1.5, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

slide8.addText("OEE提升：10%→12%  |  成本降低：10%→11%  |  设备故障率：降低30%→35%  |  不良品率：降低20%→22%", {
  x: 0.7, y: 4.6, w: 8.6, h: 0.5,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

// ========== 第9页：模块一练习 ==========
let slide9 = pres.addSlide();
slide9.background = { color: COLORS.lightBg };
addHeaderBar(slide9, "模块一 配套练习");

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fill: { color: COLORS.accent }
});

slide9.addText("练习形态：方针分解练习  |  难度：第三级（创造）  |  耗时：25分钟", {
  x: 0.7, y: 1.3, w: 8.6, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

slide9.addText("练习目的：把一个公司/部门/车间的目标，分解成可执行的日常行动", {
  x: 0.5, y: 1.95, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

const steps = [
  { step: "第一步", title: "核心课题识别", desc: "先不要分解数字，先分析「达成这个目标，核心要解决的问题是什么」" },
  { step: "第二步", title: "方针展开", desc: "从战略/年度目标 → 季度目标 → 月度目标" },
  { step: "第三步", title: "日常行动转化", desc: "每个目标必须对应到「谁、什么时候、做什么」的具体动作" }
];

steps.forEach((s, i) => {
  const y = 2.5 + i * 1.0;

  slide9.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 1.2, h: 0.8,
    fill: { color: COLORS.primary }
  });

  slide9.addText(s.step, {
    x: 0.5, y: y, w: 1.2, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide9.addText(s.title, {
    x: 1.9, y: y + 0.1, w: 7.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide9.addText(s.desc, {
    x: 1.9, y: y + 0.45, w: 7.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

addFooter(slide9, 9);

// ========== 第10页：模块二封面 ==========
createSectionCover(pres, "模块二", "日常管理三要素", "让目标变成每天的习惯");

// ========== 第11页：日常管理的本质 ==========
let slide11 = pres.addSlide();
slide11.background = { color: COLORS.lightBg };
addHeaderBar(slide11, "2.1 日常管理的本质");

slide11.addText("把例外变成例行", {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.9, w: 4.3, h: 1.6,
  fill: { color: "FFF0F0" },
  line: { color: COLORS.primary, width: 1 }
});

slide11.addText("问题：靠「英雄」管理", {
  x: 0.7, y: 2.0, w: 3.9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide11.addText("有个厉害的主管，这个车间就运转良好；主管一调动，车间就出问题。\n\n本质：把管理建立在个人能力上，而不是系统上。", {
  x: 0.7, y: 2.45, w: 3.9, h: 0.95,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.9, w: 4.3, h: 1.6,
  fill: { color: "F0FFF0" },
  line: { color: "4CAF50", width: 1 }
});

slide11.addText("目标：靠系统管理", {
  x: 5.4, y: 2.0, w: 3.9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "4CAF50", bold: true
});

slide11.addText("让普通人在系统的支撑下，也能做出不普通的结果。", {
  x: 5.4, y: 2.45, w: 3.9, h: 0.95,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

slide11.addText("日常管理三要素", {
  x: 0.5, y: 3.7, w: 9, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const threeElements = [
  { title: "课题设定", question: "我们当前最大的问题是什么？", result: "眉毛胡子一把抓，抓不住重点" },
  { title: "活动展开", question: "针对这个问题，我们每周/每天做什么？", result: "有目标没行动，或者行动和目标脱节" },
  { title: "结果确认", question: "我们怎么知道在进步？", result: "做了半天不知道有没有效果" }
];

threeElements.forEach((el, i) => {
  const x = 0.5 + i * 3.1;

  slide11.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 4.25, w: 2.9, h: 1.2,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide11.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 4.25, w: 2.9, h: 0.4,
    fill: { color: COLORS.primary }
  });

  slide11.addText(el.title, {
    x: x, y: 4.25, w: 2.9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide11.addText(el.question + "\n\n答不了会：" + el.result, {
    x: x + 0.1, y: 4.7, w: 2.7, h: 0.7,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

addFooter(slide11, 11);

// ========== 第12页：课题设定 ==========
let slide12 = pres.addSlide();
slide12.background = { color: COLORS.lightBg };
addHeaderBar(slide12, "2.2 课题设定：找到真正的障碍");

slide12.addText("课题不是「目标」，课题是「阻碍目标达成的问题」。", {
  x: 0.5, y: 1.15, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

slide12.addText("课题设定常见的错误", {
  x: 0.5, y: 1.7, w: 9, h: 0.4,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const errors = [
  { num: "1", title: "课题太抽象", example: "「提升OEE」不是课题，是愿望" },
  { num: "2", title: "课题太多", example: "什么都想解决，结果什么都解决不了" },
  { num: "3", title: "课题来源不对", example: "上级安排、惯例如此、自己拍脑袋" }
];

errors.forEach((err, i) => {
  const y = 2.2 + i * 0.7;

  slide12.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary }
  });

  slide12.addText(err.num, {
    x: 0.5, y: y, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide12.addText(err.title, {
    x: 1.2, y: y + 0.05, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide12.addText(err.example, {
    x: 3.2, y: y + 0.05, w: 6.3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

slide12.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.4, w: 9, h: 1,
  fill: { color: COLORS.lightGray }
});

slide12.addText("课题设定的正确姿势", {
  x: 0.7, y: 4.5, w: 8.6, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide12.addText("1.看数据  2.下现场  3.问一线  4.找差距", {
  x: 0.7, y: 4.9, w: 8.6, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

addFooter(slide12, 12);

// ========== 第13页：活动展开 ==========
let slide13 = pres.addSlide();
slide13.background = { color: COLORS.lightBg };
addHeaderBar(slide13, "2.3 活动展开：让大目标变成小动作");

slide13.addText("好的活动展开标准", {
  x: 0.5, y: 1.15, w: 9, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const standards = [
  { title: "具体", wrong: "「加强设备维护」", right: "「每天开机前检查主轴温度并记录」" },
  { title: "可衡量", wrong: "「提升员工意识」", right: "「员工提出改善提案每月不少于2条」" },
  { title: "有时间节点", wrong: "「尽快改进」", right: "「张负责在本周五前完成」" },
  { title: "可执行", wrong: "「提高设备精度」", right: "「联系设备部工程师评估精度现状」" }
];

standards.forEach((std, i) => {
  const y = 1.75 + i * 0.9;

  slide13.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 1.3, h: 0.7,
    fill: { color: COLORS.primary }
  });

  slide13.addText(std.title, {
    x: 0.5, y: y, w: 1.3, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide13.addShape(pres.shapes.RECTANGLE, {
    x: 2, y: y, w: 3.5, h: 0.7,
    fill: { color: "FFF0F0" }
  });

  slide13.addText("X " + std.wrong, {
    x: 2.1, y: y, w: 3.3, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.primary, valign: "middle"
  });

  slide13.addShape(pres.shapes.RECTANGLE, {
    x: 5.7, y: y, w: 3.8, h: 0.7,
    fill: { color: "F0FFF0" }
  });

  slide13.addText("V " + std.right, {
    x: 5.8, y: y, w: 3.6, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "4CAF50", valign: "middle"
  });
});

addFooter(slide13, 13);

// ========== 第14页：结果确认 ==========
let slide14 = pres.addSlide();
slide14.background = { color: COLORS.lightBg };
addHeaderBar(slide14, "2.4 结果确认：每天都知道自己在进步");

slide14.addTable([
  [
    { text: "要素", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "说明", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [{ text: "指标明确", options: { fill: { color: COLORS.white } } }, { text: "用什么指标衡量进步", options: { fill: { color: COLORS.white } } }],
  [{ text: "目标透明", options: { fill: { color: COLORS.lightBg } } }, { text: "目标数字是多少，现状是多少", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "频率合适", options: { fill: { color: COLORS.white } } }, { text: "多久确认一次（每天/每周/每月）", options: { fill: { color: COLORS.white } } }],
  [{ text: "偏差分析", options: { fill: { color: COLORS.lightBg } } }, { text: "如果落后于计划，分析原因", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "对策响应", options: { fill: { color: COLORS.white } } }, { text: "偏差出现后，制定对策并跟踪", options: { fill: { color: COLORS.white } } }]
], {
  x: 0.5, y: 1.2, w: 4.5, h: 2.4,
  colW: [1.5, 3],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12,
  color: COLORS.darkText,
  valign: "middle"
});

slide14.addText("日常管理三化", {
  x: 5.3, y: 1.2, w: 4.2, h: 0.4,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const sanhua = [
  { title: "数据化", desc: "用数字说话，不是用感觉说话" },
  { title: "目视化", desc: "把数据和进度放在所有人都能看到的地方" },
  { title: "标准化", desc: "把有效的做法固化下来，形成标准" }
];

sanhua.forEach((s, i) => {
  const y = 1.75 + i * 0.95;

  slide14.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: y, w: 4.2, h: 0.8,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide14.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: y, w: 0.08, h: 0.8,
    fill: { color: COLORS.primary }
  });

  slide14.addText(s.title, {
    x: 5.5, y: y + 0.1, w: 3.8, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide14.addText(s.desc, {
    x: 5.5, y: y + 0.45, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

addFooter(slide14, 14);

// ========== 第15页：场景演示 ==========
let slide15 = pres.addSlide();
slide15.background = { color: COLORS.darkBg };

slide15.addText("场景演示", {
  x: 0.5, y: 0.3, w: 2, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide15.addText("某车间如何用晨会体制把方针落地", {
  x: 0.5, y: 0.65, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

const steps15 = [
  { step: "第一步", title: "课题上墙", content: "把当前核心课题写成大字报，贴在车间最显眼的位置" },
  { step: "第二步", title: "指标目视化", content: "车间看板上每天更新OEE数据，用红黄绿三色标识" },
  { step: "第三步", title: "晨会三件事", content: "通报（昨天OEE）+ 发现（异常原因）+ 行动（今天重点）" },
  { step: "第四步", title: "每周课题分析会", content: "上周OEE分析 + 差距原因 + 本周对策确认" }
];

steps15.forEach((s, i) => {
  const x = 0.5 + (i % 2) * 4.7;
  const y = 1.3 + Math.floor(i / 2) * 1.5;

  slide15.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.3,
    fill: { color: "3D3D3D" },
    line: { color: COLORS.accent, width: 1 }
  });

  slide15.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 1.2, h: 0.4,
    fill: { color: COLORS.primary }
  });

  slide15.addText(s.step, {
    x: x, y: y, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide15.addText(s.title, {
    x: x + 0.15, y: y + 0.45, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.accent, bold: true
  });

  slide15.addText(s.content, {
    x: x + 0.15, y: y + 0.8, w: 4, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.white
  });
});

slide15.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.4, w: 9, h: 0.9,
  fill: { color: "C41E3A" }
});

slide15.addText("结果：6个月后，OEE稳定在67%以上，最高达71%。车间主任说「现在每天都知道产线状态怎么样，不用等出了大问题才知道。」", {
  x: 0.7, y: 4.55, w: 8.6, h: 0.6,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

// ========== 第16页：模块二练习 ==========
let slide16 = pres.addSlide();
slide16.background = { color: COLORS.lightBg };
addHeaderBar(slide16, "模块二 配套练习");

slide16.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fill: { color: COLORS.accent }
});

slide16.addText("练习形态：日常管理体系设计  |  难度：第三级（创造）  |  耗时：20分钟", {
  x: 0.7, y: 1.3, w: 8.6, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

const designElements = [
  { title: "核心课题", placeholder: "当前最大的问题是什么？" },
  { title: "衡量指标", placeholder: "用什么指标追踪？" },
  { title: "目标值", placeholder: "现状是多少，目标是多少？" },
  { title: "目视化方式", placeholder: "数据放在哪里展示？" },
  { title: "晨会机制", placeholder: "每天什么时间开，多久，谁参加，说什么？" },
  { title: "周会机制", placeholder: "每周什么时间开，谁参加，分析什么？" }
];

designElements.forEach((el, i) => {
  const x = 0.5 + (i % 2) * 4.7;
  const y = 2.0 + Math.floor(i / 2) * 1.1;

  slide16.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 0.9,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide16.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 1.5, h: 0.9,
    fill: { color: COLORS.primary }
  });

  slide16.addText(el.title, {
    x: x, y: y, w: 1.5, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide16.addText(el.placeholder, {
    x: x + 1.6, y: y, w: 2.5, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.lightText, valign: "middle"
  });
});

addFooter(slide16, 16);

// ========== 第17页：模块三封面 ==========
createSectionCover(pres, "模块三", "方针监查", "确保方针有效执行");

// ========== 第18页：方针监查的目的 ==========
let slide18 = pres.addSlide();
slide18.background = { color: COLORS.lightBg };
addHeaderBar(slide18, "3.1 方针监查的目的");

slide18.addText("帮助解决，不是追责", {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide18.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.9, w: 9, h: 0.7,
  fill: { color: COLORS.lightGray }
});

slide18.addText("方针监查的核心定位：帮助被监查者达成目标，不是秋后算账。", {
  x: 0.7, y: 2.0, w: 8.6, h: 0.5,
  fontSize: 15, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

slide18.addText("方针监查三步法", {
  x: 0.5, y: 2.8, w: 9, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const monitorSteps = [
  { step: "1", title: "检查进度", desc: "看目标达成情况，分析数据", output: "进度报告" },
  { step: "2", title: "发现偏差", desc: "找出落后于计划的环节，分析原因", output: "偏差分析表" },
  { step: "3", title: "根源分析", desc: "不是追责，是找到真正的原因并帮助解决", output: "改善对策" }
];

monitorSteps.forEach((s, i) => {
  const x = 0.5 + i * 3.1;

  slide18.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.4, w: 2.9, h: 1.8,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide18.addShape(pres.shapes.OVAL, {
    x: x + 1.1, y: 3.5, w: 0.6, h: 0.6,
    fill: { color: COLORS.primary }
  });

  slide18.addText(s.step, {
    x: x + 1.1, y: 3.5, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide18.addText(s.title, {
    x: x + 0.15, y: 4.15, w: 2.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true, align: "center"
  });

  slide18.addText(s.desc, {
    x: x + 0.15, y: 4.5, w: 2.6, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, align: "center"
  });

  slide18.addText("-> " + s.output, {
    x: x + 0.15, y: 4.85, w: 2.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.primary, align: "center"
  });
});

addFooter(slide18, 18);

// ========== 第19页：监查频率 ==========
let slide19 = pres.addSlide();
slide19.background = { color: COLORS.lightBg };
addHeaderBar(slide19, "3.2 方针监查的频率和层级");

slide19.addTable([
  [
    { text: "目标类型", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "检查频率", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "监查人", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [{ text: "战略目标（年度）", options: { fill: { color: COLORS.white } } }, { text: "每月一次", options: { fill: { color: COLORS.white } } }, { text: "总经理/副总", options: { fill: { color: COLORS.white } } }],
  [{ text: "方针目标（季度）", options: { fill: { color: COLORS.lightBg } } }, { text: "每周一次", options: { fill: { color: COLORS.lightBg } } }, { text: "部门负责人", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "日常目标（月/周）", options: { fill: { color: COLORS.white } } }, { text: "每日/每周", options: { fill: { color: COLORS.white } } }, { text: "班长/组长", options: { fill: { color: COLORS.white } } }]
], {
  x: 1.5, y: 1.4, w: 7, h: 2,
  colW: [2.5, 2.2, 2.3],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 14,
  color: COLORS.darkText,
  valign: "middle",
  align: "center"
});

slide19.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 3.8, w: 7, h: 1.2,
  fill: { color: "FFF5F5" },
  line: { color: COLORS.primary, width: 2 }
});

slide19.addText("关键原则", {
  x: 1.7, y: 3.95, w: 6.6, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide19.addText("目标越重要，检查越频繁。不是所有目标都一样的检查频率。", {
  x: 1.7, y: 4.4, w: 6.6, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

addFooter(slide19, 19);

// ========== 第20页：偏差分析 ==========
let slide20 = pres.addSlide();
slide20.background = { color: COLORS.lightBg };
addHeaderBar(slide20, "3.3 偏差分析的正确方法");

slide20.addText("常见的错误归因", {
  x: 0.5, y: 1.15, w: 9, h: 0.4,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const biasErrors = [
  { title: "归因于「态度问题」", desc: "「执行力不够」「没有责任心」——没有意义，找不到可以改善的行动" },
  { title: "归因于「外部因素」", desc: "「供应商不及时」「市场环境不好」——确实存在，但改善不了" },
  { title: "归因太浅", desc: "「OEE低是因为设备故障多」——这是症状，不是根因" }
];

biasErrors.forEach((err, i) => {
  const y = 1.6 + i * 0.65;

  slide20.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.4, h: 0.5,
    fill: { color: COLORS.primary }
  });

  slide20.addText("X", {
    x: 0.5, y: y, w: 0.4, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide20.addText(err.title, {
    x: 1.1, y: y + 0.05, w: 3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide20.addText(err.desc, {
    x: 4.1, y: y + 0.05, w: 5.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

slide20.addText("正确的偏差分析：五层追问法", {
  x: 0.5, y: 3.6, w: 9, h: 0.4,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const fiveWhys = [
  { level: "表现层", q: "偏差的表现是什么？" },
  { level: "直接原因层", q: "造成这个表现的原因是什么？" },
  { level: "深层原因层", q: "为什么这个原因会发生？" },
  { level: "更深层原因", q: "为什么深层原因存在？" },
  { level: "根因层", q: "根本原因是什么？" }
];

fiveWhys.forEach((w, i) => {
  const x = 0.5 + i * 1.85;

  slide20.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 4.1, w: 1.7, h: 1.3,
    fill: { color: i === 4 ? COLORS.primary : COLORS.white },
    line: { color: i === 4 ? COLORS.primary : COLORS.mediumGray, width: 1 }
  });

  slide20.addText(w.level, {
    x: x, y: 4.15, w: 1.7, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: i === 4 ? COLORS.white : COLORS.primary, bold: true, align: "center"
  });

  slide20.addText(w.q, {
    x: x + 0.05, y: 4.55, w: 1.6, h: 0.8,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: i === 4 ? COLORS.white : COLORS.darkText, align: "center"
  });
});

addFooter(slide20, 20);

// ========== 第21页：场景演示 ==========
let slide21 = pres.addSlide();
slide21.background = { color: COLORS.darkBg };

slide21.addText("场景演示", {
  x: 0.5, y: 0.3, w: 2, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide21.addText("某工厂的方针监查如何帮车间解决实际问题", {
  x: 0.5, y: 0.65, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: "3D3D3D" },
  line: { color: COLORS.accent, width: 1 }
});

slide21.addText("问题发现", {
  x: 0.7, y: 1.3, w: 3.9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide21.addText("Q1 OEE提升目标达成率只有60%\n换产时间只压缩了10%（目标30%）\n换产时间是最大拖累", {
  x: 0.7, y: 1.7, w: 3.9, h: 1.2,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 1.8,
  fill: { color: "3D3D3D" },
  line: { color: COLORS.accent, width: 1 }
});

slide21.addText("五层追问找到根因", {
  x: 5.4, y: 1.3, w: 3.9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide21.addText("表现：换产时间只压缩10%\n直接：换产次数增加\n深层：没有SMED快速换产基准\n更深层：IE工程师人手不足\n根因：SMED没有作为核心课题", {
  x: 5.4, y: 1.7, w: 3.9, h: 1.2,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.15, w: 9, h: 1.3,
  fill: { color: "3D3D3D" },
  line: { color: COLORS.accent, width: 1 }
});

slide21.addText("对策", {
  x: 0.7, y: 3.25, w: 8.6, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent, bold: true
});

slide21.addText("1. 借调1名IE工程师支持SMED（两周内到位）\n2. 确定两个重点产线，优先做SMED（4月底完成）\n3. 建立换产时间每日记录机制（3月起执行）", {
  x: 0.7, y: 3.6, w: 8.6, h: 0.8,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.white
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.6, w: 9, h: 0.8,
  fill: { color: "C41E3A" }
});

slide21.addText("Q2结果：换产时间压缩35%（超额完成）| OEE达到64%（达标）", {
  x: 0.7, y: 4.75, w: 8.6, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

// ========== 第22页：模块三练习 ==========
let slide22 = pres.addSlide();
slide22.background = { color: COLORS.lightBg };
addHeaderBar(slide22, "模块三 配套练习");

slide22.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fill: { color: COLORS.accent }
});

slide22.addText("练习形态：偏差分析练习  |  难度：第二级（模仿）  |  耗时：15分钟", {
  x: 0.7, y: 1.3, w: 8.6, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

slide22.addText("练习目的：练习用「五层追问法」分析偏差根因", {
  x: 0.5, y: 1.95, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

slide22.addTable([
  [
    { text: "追问层级", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "问题", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "回答", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [{ text: "表现层", options: { fill: { color: COLORS.white } } }, { text: "偏差的具体表现是什么？", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "直接原因层", options: { fill: { color: COLORS.lightBg } } }, { text: "造成这个表现的原因是什么？", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "深层原因层", options: { fill: { color: COLORS.white } } }, { text: "为什么这个原因会发生？", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "更深层原因", options: { fill: { color: COLORS.lightBg } } }, { text: "为什么深层原因存在？", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "根因层", options: { fill: { color: COLORS.white } } }, { text: "根本原因是什么？", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }]
], {
  x: 0.5, y: 2.4, w: 9, h: 2.4,
  colW: [2, 4.5, 2.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12,
  color: COLORS.darkText,
  valign: "middle"
});

addFooter(slide22, 22);

// ========== 第23页：模块四封面 ==========
createSectionCover(pres, "模块四", "持续改善文化", "让改善成为每个人的习惯");

// ========== 第24页：Kaizen思维 ==========
let slide24 = pres.addSlide();
slide24.background = { color: COLORS.lightBg };
addHeaderBar(slide24, "4.1 Kaizen思维");

slide24.addText("Kaizen = 持续不断的小步改善", {
  x: 0.5, y: 1.15, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide24.addText("Kaizen的思维模式", {
  x: 0.5, y: 1.75, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const mindsets = [
  "问题不是坏事：每个问题都是改善的机会",
  "改善不需要大动作：很多大的效果，来自很多小的改进积累",
  "一线最懂现场：改善的灵感往往来自实际操作者",
  "标准化是改善的基础：没有标准化，改善的成果就无法保持"
];

mindsets.forEach((m, i) => {
  const y = 2.2 + i * 0.55;

  slide24.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.25, h: 0.45,
    fill: { color: COLORS.primary }
  });

  slide24.addText(m, {
    x: 0.9, y: y, w: 8.5, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

slide24.addText("改善（Kaizen）vs 改革（Kakushin）", {
  x: 0.5, y: 4.4, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

slide24.addTable([
  [
    { text: "", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "改善 Kaizen", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "改革 Kakushin", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [{ text: "频率", options: { fill: { color: COLORS.white } } }, { text: "持续、经常", options: { fill: { color: COLORS.white } } }, { text: "偶尔、一次性", options: { fill: { color: COLORS.white } } }],
  [{ text: "幅度", options: { fill: { color: COLORS.lightBg } } }, { text: "小步改进", options: { fill: { color: COLORS.lightBg } } }, { text: "大幅变动", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "执行者", options: { fill: { color: COLORS.white } } }, { text: "全体员工", options: { fill: { color: COLORS.white } } }, { text: "高层主导", options: { fill: { color: COLORS.white } } }],
  [{ text: "风险", options: { fill: { color: COLORS.lightBg } } }, { text: "低", options: { fill: { color: COLORS.lightBg } } }, { text: "高", options: { fill: { color: COLORS.lightBg } } }]
], {
  x: 0.5, y: 4.85, w: 9, h: 0.7,
  colW: [1.5, 3.75, 3.75],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 10,
  color: COLORS.darkText,
  valign: "middle",
  align: "center"
});

addFooter(slide24, 24);

// ========== 第25页：改善提案制度 ==========
let slide25 = pres.addSlide();
slide25.background = { color: COLORS.lightBg };
addHeaderBar(slide25, "4.2 改善提案制度");

slide25.addText("让一线的声音被听见", {
  x: 0.5, y: 1.15, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide25.addText("很多企业的改善是「自上而下」的——高层定方向，基层执行。但实际上，最了解现场问题的是一线员工。", {
  x: 0.5, y: 1.7, w: 9, h: 0.5,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.lightText
});

const proposalElements = [
  { title: "提案渠道畅通", desc: "提案方式简单，不复杂，任何人都能提" },
  { title: "反馈及时", desc: "提案提上去后，一周内必须有回应" },
  { title: "采纳有激励", desc: "被采纳的提案要有物质和精神激励" },
  { title: "实施有跟踪", desc: "被采纳的提案要跟踪实施效果" },
  { title: "不采纳也有回应", desc: "没被采纳的要说明原因，感谢提出者" }
];

proposalElements.forEach((el, i) => {
  const x = 0.5 + (i % 3) * 3.1;
  const y = 2.35 + Math.floor(i / 3) * 1.3;

  slide25.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 1.1,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide25.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 0.4,
    fill: { color: COLORS.primary }
  });

  slide25.addText(el.title, {
    x: x, y: y, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide25.addText(el.desc, {
    x: x + 0.1, y: y + 0.5, w: 2.7, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

slide25.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.9, w: 9, h: 0.5,
  fill: { color: COLORS.lightGray }
});

slide25.addText("提案质量比提案数量重要。提案制度的目的是激发改善意识，不是制造文案工作。", {
  x: 0.7, y: 4.95, w: 8.6, h: 0.4,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

addFooter(slide25, 25);

// ========== 第26页：改善七工具 ==========
let slide26 = pres.addSlide();
slide26.background = { color: COLORS.lightBg };
addHeaderBar(slide26, "4.3 改善的七个工具");

const tools = [
  { name: "5Why分析", use: "找到问题的根本原因", scene: "问题分析" },
  { name: "鱼骨图", use: "系统梳理所有可能原因", scene: "问题分析" },
  { name: "PDCA循环", use: "把改善行动系统化", scene: "改善推进" },
  { name: "ECRS分析", use: "取消、合并、重排、简化", scene: "作业改善" },
  { name: "5W1H", use: "描述问题/改善点", scene: "信息整理" },
  { name: "对比分析", use: "和竞争对手/标杆对比", scene: "目标设定" },
  { name: "甘特图", use: "跟踪改善进度", scene: "项目管理" }
];

tools.forEach((tool, i) => {
  const x = 0.5 + (i % 4) * 2.35;
  const y = 1.2 + Math.floor(i / 4) * 1.5;

  slide26.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.2, h: 1.3,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide26.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.2, h: 0.45,
    fill: { color: COLORS.primary }
  });

  slide26.addText(tool.name, {
    x: x, y: y, w: 2.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide26.addText(tool.use, {
    x: x + 0.1, y: y + 0.5, w: 2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });

  slide26.addText("适用：" + tool.scene, {
    x: x + 0.1, y: y + 0.9, w: 2, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

slide26.addText("ECRS分析尤其适用于作业改善：", {
  x: 0.5, y: 4.2, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const ecrs = [
  { letter: "E", name: "取消", desc: "这个动作能不能取消？" },
  { letter: "C", name: "合并", desc: "两个动作能不能合并？" },
  { letter: "R", name: "重排", desc: "顺序能不能调整？" },
  { letter: "S", name: "简化", desc: "能不能用更简单的方式做？" }
];

ecrs.forEach((e, i) => {
  const x = 0.5 + i * 2.35;

  slide26.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 4.65, w: 2.2, h: 0.85,
    fill: { color: i === 0 ? COLORS.primary : COLORS.lightGray }
  });

  slide26.addText(e.letter, {
    x: x, y: 4.65, w: 0.6, h: 0.85,
    fontSize: 24, fontFace: "Arial",
    color: i === 0 ? COLORS.white : COLORS.primary, bold: true, align: "center", valign: "middle"
  });

  slide26.addText(e.name + "：" + e.desc, {
    x: x + 0.55, y: 4.65, w: 1.55, h: 0.85,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: i === 0 ? COLORS.white : COLORS.darkText, valign: "middle"
  });
});

addFooter(slide26, 26);

// ========== 第27页：知识框架总结 ==========
let slide27 = pres.addSlide();
slide27.background = { color: COLORS.lightBg };
addHeaderBar(slide27, "今日知识框架总结");

const framework = [
  { title: "方针管理三步曲", items: ["战略目标 -> 年度方针 -> 季度/月度目标 -> 日常行动", "纵向分解 vs 横向展开", "好的方针分解：定性+定量+时间+责任人"] },
  { title: "日常管理三要素", items: ["课题设定：找到真正的障碍（数据+现场+一线）", "活动展开：大目标分解成小动作", "结果确认：每天知道在进步（数据化+目视化+标准化）"] },
  { title: "方针监查", items: ["定位：帮助解决，不是追责", "三步法：检查进度->发现偏差->根源分析", "五层追问法找到根因"] },
  { title: "持续改善文化", items: ["Kaizen vs Kakushin", "改善提案制度", "改善七工具（5Why、鱼骨图、PDCA、ECRS等）"] }
];

framework.forEach((fw, i) => {
  const x = 0.5 + (i % 2) * 4.7;
  const y = 1.15 + Math.floor(i / 2) * 2.15;

  slide27.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 2,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide27.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 0.5,
    fill: { color: COLORS.primary }
  });

  slide27.addText(fw.title, {
    x: x, y: y, w: 4.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide27.addText(fw.items.map((item, idx) => "* " + item).join("\n"), {
    x: x + 0.15, y: y + 0.6, w: 4, h: 1.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

addFooter(slide27, 27);

// ========== 第28页：课后作业 ==========
let slide28 = pres.addSlide();
slide28.background = { color: COLORS.lightBg };
addHeaderBar(slide28, "课后作业");

const homework = [
  { num: "1", title: "方针展开图", desc: "选择你负责的一个目标，完成从战略到日常行动的完整分解" },
  { num: "2", title: "日常管理方案", desc: "为你管辖的班组/产线设计日常管理运行机制（晨会、指标、目视化）" },
  { num: "3", title: "偏差分析练习", desc: "找一个你经历过的偏差，用五层追问法找到根因和对策" }
];

homework.forEach((hw, i) => {
  const y = 1.2 + i * 1.2;

  slide28.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.7, h: 1,
    fill: { color: COLORS.primary }
  });

  slide28.addText(hw.num, {
    x: 0.5, y: y, w: 0.7, h: 1,
    fontSize: 28, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide28.addShape(pres.shapes.RECTANGLE, {
    x: 1.4, y: y, w: 8.1, h: 1,
    fill: { color: COLORS.white },
    line: { color: COLORS.mediumGray, width: 1 }
  });

  slide28.addText(hw.title, {
    x: 1.6, y: y + 0.15, w: 7.7, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide28.addText(hw.desc, {
    x: 1.6, y: y + 0.55, w: 7.7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.lightText
  });
});

slide28.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.7, w: 9, h: 0.7,
  fill: { color: COLORS.lightGray }
});

slide28.addText("明日预告：明天上午我们将进入「当场确认与改善深化」环节——今天产出的方针展开图、日常管理方案都将接受业务方代表的评审。", {
  x: 0.7, y: 4.8, w: 8.6, h: 0.5,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.secondary
});

addFooter(slide28, 28);

// ========== 第29页：结束页 ==========
let slide29 = pres.addSlide();
slide29.background = { color: COLORS.primary };

slide29.addText("感谢学习", {
  x: 0.5, y: 2, w: 9, h: 1,
  fontSize: 48, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide29.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 3.2, w: 2, h: 0.06,
  fill: { color: COLORS.white }
});

slide29.addText("方针管理与持续改善", {
  x: 0.5, y: 3.5, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide29.addText("精益管理  第五部分", {
  x: 0.5, y: 4.2, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: "ECA0A0", align: "center"
});

// ========== 第30页：附录A ==========
let slide30 = pres.addSlide();
slide30.background = { color: COLORS.lightBg };
addHeaderBar(slide30, "附录A：方针展开图模板");

slide30.addTable([
  [
    { text: "层级", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "时间节点", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "责任人", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "衡量指标", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } },
    { text: "目标值", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true } }
  ],
  [{ text: "战略目标", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "年度方针", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "季度-Q1", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "季度-Q2", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "月度（Q1首月）", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "周/日行动", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }, { text: "", options: { fill: { color: COLORS.lightBg } } }]
], {
  x: 0.3, y: 1.2, w: 9.4, h: 3.5,
  colW: [1.5, 2, 1.2, 1.2, 1.5, 1.2],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 11,
  color: COLORS.darkText,
  valign: "middle"
});

addFooter(slide30, 30);

// ========== 保存文件 ==========
pres.writeFile({ fileName: "C:/Users/Administrator/Desktop/精益管理/授课PPT/05_方针管理与持续改善.pptx" })
  .then(() => console.log("PPT created successfully! Total slides: 30"))
  .catch(err => console.error("Error:", err));
