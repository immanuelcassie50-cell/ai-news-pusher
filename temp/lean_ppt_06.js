const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "精益管理培训";
pres.title = "当场确认与改善深化";

// ========== 配色定义 - 红灰配色浅底 ==========
const COLORS = {
  primary: "C41E3A",      // 中国红
  secondary: "4A4A4A",    // 深灰
  accent: "D4A574",       // 金棕色点缀
  lightBg: "FDF8F5",      // 浅底
  white: "FFFFFF",
  darkBg: "2D2D2D",
  lightGray: "F5F5F5",
  mediumGray: "E0E0E0",
  darkText: "333333",
  grayText: "666666"
};

// ========== 辅助函数 ==========
function addSlideNumber(slide) {
  // 不添加页码
}

// 创建阴影配置的工厂函数
const makeShadow = () => ({
  type: "outer", color: "000000",
  blur: 8, offset: 3, angle: 135, opacity: 0.12
});

// ========== 封面页 ==========
let slide1 = pres.addSlide();
slide1.background = { color: COLORS.lightBg };

// 顶部红色装饰条
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: COLORS.primary }
});

// 左侧红色竖条
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.08, h: 5.625,
  fill: { color: COLORS.primary }
});

// 主标题
slide1.addText("当场确认与改善深化", {
  x: 0.8, y: 1.8, w: 8.5, h: 1.2,
  fontSize: 48, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

// 副标题
slide1.addText("精益管理实战训练营 · 第六部分", {
  x: 0.8, y: 3.0, w: 8.5, h: 0.6,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.grayText
});

// 底部装饰线
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 3.8, w: 3, h: 0.05,
  fill: { color: COLORS.primary }
});

// ========== 学习地图页 ==========
let slide2 = pres.addSlide();
slide2.background = { color: COLORS.white };

// 顶部标题栏
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide2.addText("今日学习地图", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 表格数据
let tableData = [
  [
    { text: "时段", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "你会做什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "你会带走什么", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "上午", options: { fill: { color: COLORS.lightGray }, bold: true, align: "center" } },
    { text: "确认准备", options: { fill: { color: COLORS.white } } },
    { text: "整理两天产出的核心成果", options: { fill: { color: COLORS.white } } },
    { text: "确认用汇报材料", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "上午", options: { fill: { color: COLORS.lightGray }, bold: true, align: "center" } },
    { text: "翻译技巧", options: { fill: { color: COLORS.white } } },
    { text: "学习把专业诊断翻译成业务语言", options: { fill: { color: COLORS.white } } },
    { text: "翻译话术清单", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "下午", options: { fill: { color: COLORS.lightGray }, bold: true, align: "center" } },
    { text: "当场确认", options: { fill: { color: COLORS.white } } },
    { text: "逐模块业务方确认，四类结论归类", options: { fill: { color: COLORS.white } } },
    { text: "确认记录表", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "下午", options: { fill: { color: COLORS.lightGray }, bold: true, align: "center" } },
    { text: "改善深化", options: { fill: { color: COLORS.white } } },
    { text: "把确认OK的方案推进到可执行深度", options: { fill: { color: COLORS.white } } },
    { text: "可执行改善方案", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "下午", options: { fill: { color: COLORS.lightGray }, bold: true, align: "center" } },
    { text: "成果展示", options: { fill: { color: COLORS.white } } },
    { text: "5分钟成果汇报", options: { fill: { color: COLORS.white } } },
    { text: "完整改善方案包", options: { fill: { color: COLORS.white } } }
  ]
];

slide2.addTable(tableData, {
  x: 0.5, y: 1.3, w: 9, h: 3.2,
  colW: [1.2, 1.8, 3.0, 3.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12
});

// 学习目标卡片
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 4.6, w: 9, h: 0.85,
  fill: { color: COLORS.lightBg },
  rectRadius: 0.05
});

slide2.addText("本章节学习完，你会带走：一套确认用汇报材料 / 一个翻译话术清单 / 一份确认记录表 / 一个可执行改善方案 / 一个完整改善方案包", {
  x: 0.7, y: 4.7, w: 8.6, h: 0.65,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.grayText, valign: "middle"
});

// ========== 开场页 ==========
let slide3 = pres.addSlide();
slide3.background = { color: COLORS.white };

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide3.addText("开场：确认环节的本质", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 核心观点卡片
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.3, w: 9, h: 1.4,
  fill: { color: COLORS.primary },
  rectRadius: 0.1,
  shadow: makeShadow()
});

slide3.addText("确认环节的本质是共创，不是汇报", {
  x: 0.8, y: 1.5, w: 8.4, h: 1.0,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center", valign: "middle"
});

// 两列布局
// 左列：你的角色
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 2.9, w: 4.3, h: 2.2,
  fill: { color: COLORS.lightBg },
  rectRadius: 0.08
});

slide3.addText("你的角色：翻译者", {
  x: 0.7, y: 3.05, w: 3.9, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide3.addText("把精益工具分析出来的结果，翻译成业务语言，让业务方能够理解和判断。", {
  x: 0.7, y: 3.55, w: 3.9, h: 1.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

// 右列：业务方角色
slide3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.2, y: 2.9, w: 4.3, h: 2.2,
  fill: { color: COLORS.lightBg },
  rectRadius: 0.08
});

slide3.addText("业务方角色：决策者", {
  x: 5.4, y: 3.05, w: 3.9, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide3.addText("判断这个方向是否符合业务实际，这个方案在现有条件下是否可行。", {
  x: 5.4, y: 3.55, w: 3.9, h: 1.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.darkText
});

// ========== 模块一标题页 ==========
let slide4 = pres.addSlide();
slide4.background = { color: COLORS.primary };

slide4.addText("模块一", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 24, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

slide4.addText("确认的底层逻辑", {
  x: 0.5, y: 2.3, w: 9, h: 1.2,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide4.addText("三类业务问题", {
  x: 0.5, y: 3.5, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 4.2, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide4.addText("预估时长：90分钟", {
  x: 0.5, y: 4.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

// ========== 1.1 确认的本质 ==========
let slide5 = pres.addSlide();
slide5.background = { color: COLORS.white };

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide5.addText("1.1 确认的本质：三类核心问题", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 三个问题卡片
const questions = [
  { num: "01", title: "浪费真实性", desc: "这个浪费的描述，符合产线的真实情况吗？", example: "业务方判断：真的存在等待吗？15%这个数字准确吗？" },
  { num: "02", title: "优先级判断", desc: "这个改善的优先级判断，和你的实际观察吻合吗？", example: "业务方知道：OEE提升需要设备改造，预算申请要半年" },
  { num: "03", title: "方案可行性", desc: "这个改善方案，在你们现有的条件下做得到吗？", example: "业务方知道：设备太老，没有SMED改造空间" }
];

questions.forEach((q, i) => {
  const y = 1.2 + i * 1.45;

  // 编号圆圈
  slide5.addShape(pres.shapes.OVAL, {
    x: 0.5, y: y + 0.15, w: 0.6, h: 0.6,
    fill: { color: COLORS.primary }
  });

  slide5.addText(q.num, {
    x: 0.5, y: y + 0.15, w: 0.6, h: 0.6,
    fontSize: 16, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  // 标题
  slide5.addText(q.title, {
    x: 1.3, y: y, w: 3, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  // 描述
  slide5.addText(q.desc, {
    x: 1.3, y: y + 0.45, w: 8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });

  // 示例框
  slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.3, y: y + 0.9, w: 8, h: 0.45,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.05
  });

  slide5.addText(q.example, {
    x: 1.5, y: y + 0.9, w: 7.6, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.grayText, valign: "middle"
  });
});

// 关键认知
slide5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 5.0, w: 9, h: 0.5,
  fill: { color: COLORS.accent },
  rectRadius: 0.05
});

slide5.addText("关键认知：确认环节最重要的不是你准备了多少内容，而是你有没有能力\"听\"", {
  x: 0.7, y: 5.0, w: 8.6, h: 0.5,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, valign: "middle"
});

// ========== 1.2 翻译技巧 ==========
let slide6 = pres.addSlide();
slide6.background = { color: COLORS.white };

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide6.addText("1.2 翻译技巧：把专业术语变成业务语言", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 诊断结果 ≠ 业务语言
slide6.addText("诊断结果 ≠ 业务语言", {
  x: 0.5, y: 1.15, w: 9, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

// 翻译对照表
let transTable = [
  [
    { text: "精益术语", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "业务语言", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [{ text: "OEE提升", options: { fill: { color: COLORS.lightGray } } }, { text: "产能能不能再多出来一点", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "六大损失", options: { fill: { color: COLORS.white } } }, { text: "时间都去哪儿了", options: { fill: { color: COLORS.white } } }],
  [{ text: "拉动生产", options: { fill: { color: COLORS.lightGray } } }, { text: "什么时候生产、生产多少，由谁说了算", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "SMED", options: { fill: { color: COLORS.white } } }, { text: "换一次线要多久，能不能快一点", options: { fill: { color: COLORS.white } } }],
  [{ text: "自主保全", options: { fill: { color: COLORS.lightGray } } }, { text: "操作工要不要管设备保养", options: { fill: { color: COLORS.lightBg } } }],
  [{ text: "方针管理", options: { fill: { color: COLORS.white } } }, { text: "公司目标怎么落到每天的行动", options: { fill: { color: COLORS.white } } }]
];

slide6.addTable(transTable, {
  x: 0.5, y: 1.65, w: 9, h: 2.8,
  colW: [2.5, 6.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 13
});

// 翻译三原则
slide6.addText("翻译的三原则", {
  x: 0.5, y: 4.55, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const principles = [
  { num: "1", text: "说结果，不说过程" },
  { num: "2", text: "说具体，不说抽象" },
  { num: "3", text: "说人话，不说术语" }
];

principles.forEach((p, i) => {
  const x = 0.5 + i * 3.1;

  slide6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x, y: 4.95, w: 2.9, h: 0.55,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.05
  });

  slide6.addText(p.num + ". " + p.text, {
    x: x + 0.15, y: 4.95, w: 2.6, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

// ========== 1.3 翻译话术参考 ==========
let slide7 = pres.addSlide();
slide7.background = { color: COLORS.white };

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide7.addText("1.3 常见翻译话术参考", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

const scenarios = [
  {
    title: "场景一：解释OEE分析结果",
    lean: "OEE只有58%，主要损失来自设备故障（18%）和换产停机（22%）",
    biz: "您这条产线，真正在干活的时间只有一半多一点点。有一大半的时间被设备坏、换线这两件事吃掉了。如果这两个问题能解决，产能能提升约40%。"
  },
  {
    title: "场景二：解释SMED建议",
    lean: "建议实施SMED，把内部作业转化为外部作业",
    biz: "现在换一次线要90分钟。这90分钟里，真正需要停机做的只有30分钟，另外60分钟是在\"等工具、等人、等材料\"。如果我们把\"等\"的这些事提前做好，换线能压到30分钟以内。"
  },
  {
    title: "场景三：解释自主保全",
    lean: "建议导入自主保全七步法",
    biz: "操作工每天花10分钟做基础清洁和点检，能提前发现80%的设备隐患。这样不用等设备坏了再修，而是设备快出问题就能发现。"
  }
];

scenarios.forEach((s, i) => {
  const y = 1.15 + i * 1.45;

  // 场景标题
  slide7.addText(s.title, {
    x: 0.5, y: y, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  // 精益语言
  slide7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y + 0.35, w: 9, h: 0.4,
    fill: { color: COLORS.mediumGray },
    rectRadius: 0.03
  });

  slide7.addText("精益语言：" + s.lean, {
    x: 0.65, y: y + 0.35, w: 8.7, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.grayText, valign: "middle"
  });

  // 业务语言
  slide7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y + 0.8, w: 9, h: 0.55,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.03
  });

  slide7.addText("业务语言：" + s.biz, {
    x: 0.65, y: y + 0.8, w: 8.7, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

// ========== 模块二标题页 ==========
let slide8 = pres.addSlide();
slide8.background = { color: COLORS.primary };

slide8.addText("模块二", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 24, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

slide8.addText("逐模块确认", {
  x: 0.5, y: 2.3, w: 9, h: 1.2,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide8.addText("四步走", {
  x: 0.5, y: 3.5, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 4.2, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide8.addText("预估时长：90分钟", {
  x: 0.5, y: 4.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

// ========== 2.1 确认的四模块清单 ==========
let slide9 = pres.addSlide();
slide9.background = { color: COLORS.white };

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide9.addText("2.1 确认的四模块清单", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let moduleTable = [
  [
    { text: "模块", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "确认内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "业务方要回答的问题", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "浪费诊断全景图", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "七大浪费识别是否完整、准确", options: { fill: { color: COLORS.white } } },
    { text: "这些浪费的描述，符合产线真实情况吗？", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "改善优先级清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "综合评分最高的改善点是否合理", options: { fill: { color: COLORS.lightBg } } },
    { text: "这几个优先方向，你认同吗？", options: { fill: { color: COLORS.lightBg } } }
  ],
  [
    { text: "精益工具应用方案", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "每个工具方案是否适用、可行", options: { fill: { color: COLORS.white } } },
    { text: "这个方案在现有条件下能做吗？", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "方针管理落地建议", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "目标分解是否合理，责任是否清晰", options: { fill: { color: COLORS.lightBg } } },
    { text: "这个方向和你们今年的重点一致吗？", options: { fill: { color: COLORS.lightBg } } }
  ]
];

slide9.addTable(moduleTable, {
  x: 0.5, y: 1.3, w: 9, h: 3.5,
  colW: [2.5, 3.0, 3.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 13
});

// ========== 2.2 确认话术参考 ==========
let slide10 = pres.addSlide();
slide10.background = { color: COLORS.white };

slide10.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide10.addText("2.2 确认话术参考：四步确认法", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

const steps = [
  { step: "第一步", title: "陈述诊断结果", time: "1-2分钟", desc: "用业务语言陈述你的发现，不要超过2分钟，说重点", example: "\"经过两天的诊断，我们发现这条产线最大的三个损失来源是……\"" },
  { step: "第二步", title: "询问业务方意见", time: "3-5分钟", desc: "问具体的问题，不问\"您觉得怎么样\"", example: "\"这个描述符合产线的真实情况吗？\" / \"你最认同哪一个？\"" },
  { step: "第三步", title: "记录业务方反馈", time: "当场记录", desc: "不是记\"同不同意\"，是记\"具体说了什么\"", example: "认同点 / 顾虑/问题 / 建议修改" },
  { step: "第四步", title: "给出确认结论", time: "当场给出", desc: "四选一，没有\"再看看\"这个选项", example: "确认OK / 需修改 / 非优先级 / 不适合" }
];

steps.forEach((s, i) => {
  const y = 1.15 + i * 1.1;

  // 步骤标签
  slide10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 1.2, h: 0.4,
    fill: { color: COLORS.primary },
    rectRadius: 0.05
  });

  slide10.addText(s.step, {
    x: 0.5, y: y, w: 1.2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  // 标题
  slide10.addText(s.title, {
    x: 1.85, y: y, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true, valign: "middle"
  });

  // 时间
  slide10.addText(s.time, {
    x: 4.3, y: y, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.grayText, valign: "middle"
  });

  // 描述
  slide10.addText(s.desc, {
    x: 0.5, y: y + 0.4, w: 5.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });

  // 示例框
  slide10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: y, w: 4, h: 0.7,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.03
  });

  slide10.addText(s.example, {
    x: 5.65, y: y, w: 3.7, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.grayText, valign: "middle"
  });
});

// ========== 2.3 四类结论 ==========
let slide11 = pres.addSlide();
slide11.background = { color: COLORS.white };

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide11.addText("2.3 四类结论的具体含义", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let conclusionTable = [
  [
    { text: "结论", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "含义", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "后续动作", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "确认OK", options: { fill: { color: "E8F5E9" }, color: "2E7D32", bold: true, align: "center" } },
    { text: "业务方认为方向正确、条件具备，可以推进", options: { fill: { color: "E8F5E9" } } },
    { text: "进入改善深化环节", options: { fill: { color: "E8F5E9" } } }
  ],
  [
    { text: "需修改", options: { fill: { color: "FFF3E0" }, color: "E65100", bold: true, align: "center" } },
    { text: "大方向对，但具体方案需要调整", options: { fill: { color: "FFF3E0" } } },
    { text: "问清楚\"改成什么\"", options: { fill: { color: "FFF3E0" } } }
  ],
  [
    { text: "非优先级", options: { fill: { color: "E3F2FD" }, color: "1565C0", bold: true, align: "center" } },
    { text: "方向正确，但目前时机不对或不是最紧急的", options: { fill: { color: "E3F2FD" } } },
    { text: "记录原因，暂不推进", options: { fill: { color: "E3F2FD" } } }
  ],
  [
    { text: "不适合", options: { fill: { color: "FFEBEE" }, color: "C62828", bold: true, align: "center" } },
    { text: "业务方认为这个方向不适合现有条件", options: { fill: { color: "FFEBEE" } } },
    { text: "停止这个方向，勿纠缠", options: { fill: { color: "FFEBEE" } } }
  ]
];

slide11.addTable(conclusionTable, {
  x: 0.5, y: 1.3, w: 9, h: 2.8,
  colW: [2.0, 4.0, 3.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 13
});

// ========== 场景演示页 ==========
let slide12 = pres.addSlide();
slide12.background = { color: COLORS.darkBg };

slide12.addText("场景演示", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent
});

slide12.addText("确认环节的完整示范", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

// 场景背景
slide12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.4, w: 9, h: 0.6,
  fill: { color: "3D3D3D" },
  rectRadius: 0.05
});

slide12.addText("场景背景：某工厂精益诊断团队，完成了注塑车间的诊断。今天下午，业务方代表（车间主任、品质主管、生产主管）到场确认。", {
  x: 0.7, y: 1.4, w: 8.6, h: 0.6,
  fontSize: 12, fontFace: "Microsoft YaHei",
  color: COLORS.mediumGray, valign: "middle"
});

// 对话框
const dialogues = [
  { speaker: "诊断团队", text: "我们识别了七个主要的浪费点。最严重的是换产等待——每次换线平均90分钟，其中真正需要停机的只有30分钟，另外一小时是等工具、等材料、等辅助人员。", color: COLORS.primary, isLeft: true },
  { speaker: "车间主任", text: "对，换线确实慢。但我想说一下原因：我们这条是老设备，换模的方式和你们描述的不太一样，要先排空料桶再换，不是直接换。", color: COLORS.accent, isLeft: false },
  { speaker: "诊断团队", text: "记录：需要修改——换产时间基准应包含排空料桶时间。", color: COLORS.primary, isLeft: true },
  { speaker: "车间主任", text: "设备故障16小时这个数字差不多。但补充一下，这16小时里有8小时是月初那次大故障，和日常故障不太一样。", color: COLORS.accent, isLeft: false }
];

dialogues.forEach((d, i) => {
  const y = 2.1 + i * 0.85;
  const x = d.isLeft ? 0.5 : 3.5;
  const w = 6;

  slide12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: w, h: 0.75,
    fill: { color: d.isLeft ? "3D3D3D" : "4A3D2D" },
    rectRadius: 0.05
  });

  slide12.addText(d.speaker + "：", {
    x: x + 0.15, y: y + 0.05, w: 1.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: d.color, bold: true
  });

  slide12.addText(d.text, {
    x: x + 0.15, y: y + 0.28, w: w - 0.3, h: 0.45,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.white
  });
});

// ========== 场景演示-续 ==========
let slide13 = pres.addSlide();
slide13.background = { color: COLORS.darkBg };

slide13.addText("场景演示（续）", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.accent
});

slide13.addText("确认记录表示例", {
  x: 0.5, y: 0.7, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true
});

let recordTable = [
  [
    { text: "模块", options: { fill: { color: "4A4A4A" }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "确认内容", options: { fill: { color: "4A4A4A" }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "业务方反馈", options: { fill: { color: "4A4A4A" }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "结论", options: { fill: { color: "4A4A4A" }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } }
  ],
  [
    { text: "浪费诊断-换产等待", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "换产90分钟，其中60分钟是等待", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "基本准确，但基准应包含排空料桶时间", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "需修改", options: { fill: { color: "FFF3E0" }, color: "E65100", bold: true, fontSize: 9, align: "center" } }
  ],
  [
    { text: "浪费诊断-设备故障", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "月均故障停机16小时", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "日常故障约8小时，大故障另计", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "需修改", options: { fill: { color: "FFF3E0" }, color: "E65100", bold: true, fontSize: 9, align: "center" } }
  ],
  [
    { text: "改善优先级-1", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "换产时间压缩", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "同意，这是目前最紧急的", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "确认OK", options: { fill: { color: "E8F5E9" }, color: "2E7D32", bold: true, fontSize: 9, align: "center" } }
  ],
  [
    { text: "改善优先级-2", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "OEE提升", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "同意方向，但需设备改造，周期长", options: { fill: { color: "4A4A4A" }, color: COLORS.white, fontSize: 9 } },
    { text: "非优先级", options: { fill: { color: "E3F2FD" }, color: "1565C0", bold: true, fontSize: 9, align: "center" } }
  ],
  [
    { text: "精益工具-自主保全", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "建议导入七步法", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "七步法可以简化一下，能落地才行", options: { fill: { color: "3D3D3D" }, color: COLORS.white, fontSize: 9 } },
    { text: "需修改", options: { fill: { color: "FFF3E0" }, color: "E65100", bold: true, fontSize: 9, align: "center" } }
  ]
];

slide13.addTable(recordTable, {
  x: 0.3, y: 1.4, w: 9.4, h: 2.8,
  colW: [2.2, 2.2, 3.2, 1.8],
  border: { pt: 0.5, color: "5D5D5D" },
  fontFace: "Microsoft YaHei",
  fontSize: 11
});

// ========== 模块三标题页 ==========
let slide14 = pres.addSlide();
slide14.background = { color: COLORS.primary };

slide14.addText("模块三", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 24, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

slide14.addText("改善深化", {
  x: 0.5, y: 2.3, w: 9, h: 1.2,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide14.addText("把概念变成可执行方案", {
  x: 0.5, y: 3.5, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide14.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 4.2, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide14.addText("预估时长：60分钟", {
  x: 0.5, y: 4.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

// ========== 3.1 改善深化的目标 ==========
let slide15 = pres.addSlide();
slide15.background = { color: COLORS.white };

slide15.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide15.addText("3.1 改善深化的目标：谁在什么节点做什么", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 四个问题
const fourQuestions = [
  { q: "谁", desc: "责任人是谁？具体到人名，不是\"设备部\"" },
  { q: "什么节点", desc: "什么时候开始？什么时候有阶段性成果？" },
  { q: "做什么", desc: "具体的第一个动作是什么？" },
  { q: "怎么验证", desc: "怎么知道做得好不好？成功标志是什么？" }
];

fourQuestions.forEach((item, i) => {
  const x = 0.5 + (i % 2) * 4.7;
  const y = 1.2 + Math.floor(i / 2) * 1.5;

  slide15.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.4, h: 1.3,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.08,
    shadow: makeShadow()
  });

  slide15.addShape(pres.shapes.OVAL, {
    x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
    fill: { color: COLORS.primary }
  });

  slide15.addText(item.q, {
    x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide15.addText(item.desc, {
    x: x + 1, y: y + 0.35, w: 3.2, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

// 常见错误
slide15.addText("改善深化容易犯的错误", {
  x: 0.5, y: 4.3, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const errors = [
  "方案太宏观（如\"导入自主保全\"没说清谁来推、推哪些设备）",
  "时间节点模糊（如\"尽快推进\"没有具体时间）",
  "责任人不明确（如\"生产部配合\"没有指定谁配合）"
];

errors.forEach((e, i) => {
  slide15.addText("✗ " + e, {
    x: 0.5, y: 4.7 + i * 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.grayText
  });
});

// ========== 3.2 改善方案的四个层次 ==========
let slide16 = pres.addSlide();
slide16.background = { color: COLORS.white };

slide16.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide16.addText("3.2 改善方案的四个层次", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

const levels = [
  { num: "1", title: "行动节点", desc: "谁在什么时间做什么具体动作", icon: "📋" },
  { num: "2", title: "资源配合", desc: "需要什么资源（人、钱、物），由谁提供", icon: "🔧" },
  { num: "3", title: "试点验证", desc: "在哪里试点，怎么验证效果", icon: "✅" },
  { num: "4", title: "成功指标", desc: "用什么指标衡量成功，目标值是多少", icon: "📊" }
];

levels.forEach((l, i) => {
  const y = 1.2 + i * 1.05;

  slide16.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.9,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.08
  });

  slide16.addShape(pres.shapes.OVAL, {
    x: 0.7, y: y + 0.15, w: 0.6, h: 0.6,
    fill: { color: COLORS.primary }
  });

  slide16.addText(l.num, {
    x: 0.7, y: y + 0.15, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide16.addText(l.title, {
    x: 1.5, y: y + 0.1, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  slide16.addText(l.desc, {
    x: 1.5, y: y + 0.5, w: 7.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

// ========== 练习页 ==========
let slide17 = pres.addSlide();
slide17.background = { color: COLORS.lightBg };

slide17.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.accent }
});

slide17.addText("配套练习", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

slide17.addText("改善方案深化", {
  x: 0.5, y: 1.2, w: 9, h: 0.5,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

// 练习信息
slide17.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.8, w: 9, h: 1.2,
  fill: { color: COLORS.white },
  rectRadius: 0.08,
  shadow: makeShadow()
});

slide17.addText([
  { text: "练习形态：", options: { bold: true } },
  { text: "改善方案深化", options: { breakLine: true } },
  { text: "预估耗时：", options: { bold: true } },
  { text: "25分钟", options: { breakLine: true } },
  { text: "练习目的：", options: { bold: true } },
  { text: "把确认OK的改善方向，深化成包含四个层次的可执行方案" }
], {
  x: 0.7, y: 1.9, w: 8.6, h: 1.0,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.darkText, paraSpaceAfter: 4
});

// 填写表格
let practiceTable = [
  [
    { text: "层次", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "填写内容", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "行动节点", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "责任人：__________ 开始时间：__________ 第一个动作：__________", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "资源配合", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "需要什么：__________ 由谁提供：__________", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "试点验证", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "试点产线/设备：__________ 验证周期：__________ 如何验证：__________", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "成功指标", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "指标名称：__________ 现状值：__________ 目标值：__________", options: { fill: { color: COLORS.white } } }
  ]
];

slide17.addTable(practiceTable, {
  x: 0.5, y: 3.1, w: 9, h: 2.3,
  colW: [2.0, 7.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12
});

// ========== 模块四标题页 ==========
let slide18 = pres.addSlide();
slide18.background = { color: COLORS.primary };

slide18.addText("模块四", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 24, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

slide18.addText("成果展示", {
  x: 0.5, y: 2.3, w: 9, h: 1.2,
  fontSize: 44, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide18.addText("把两天做的事说清楚", {
  x: 0.5, y: 3.5, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide18.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 4.2, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide18.addText("预估时长：60分钟", {
  x: 0.5, y: 4.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

// ========== 4.1 成果展示的三个核心信息 ==========
let slide19 = pres.addSlide();
slide19.background = { color: COLORS.white };

slide19.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide19.addText("4.1 成果展示的三个核心信息", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

slide19.addText("5分钟说三件事", {
  x: 0.5, y: 1.15, w: 9, h: 0.4,
  fontSize: 18, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

const threeThings = [
  { num: "1", title: "确认了哪三个最重要的改善方向", desc: "不是说做了多少分析、用了多少工具，是说\"我们确认了哪三个改善方向是值得做的\"。", example: "\"我们确认了哪三个改善方向是值得做的\"" },
  { num: "2", title: "哪个方案拿到了业务方的确认", desc: "说清楚哪个确认了、确认的结论是什么、还没确认的是什么。", example: "\"换产时间压缩和OEE通报机制，业务方当场表示认同，可以马上启动。\"" },
  { num: "3", title: "下一步行动和责任人", desc: "给每个确认OK的方案，明确\"谁在什么时候做什么\"。", example: "\"换产时间压缩，由IE工程师张工牵头，目标是两周内完成第一轮SMED改善。\"" }
];

threeThings.forEach((t, i) => {
  const y = 1.6 + i * 1.3;

  slide19.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 1.15,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.08
  });

  slide19.addShape(pres.shapes.OVAL, {
    x: 0.7, y: y + 0.25, w: 0.65, h: 0.65,
    fill: { color: COLORS.primary }
  });

  slide19.addText(t.num, {
    x: 0.7, y: y + 0.25, w: 0.65, h: 0.65,
    fontSize: 20, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide19.addText(t.title, {
    x: 1.55, y: y + 0.1, w: 7.8, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  slide19.addText(t.desc, {
    x: 1.55, y: y + 0.5, w: 7.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });

  slide19.addText("参考话术：" + t.example, {
    x: 1.55, y: y + 0.8, w: 7.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.grayText
  });
});

// ========== 4.2 成果展示的准备清单 ==========
let slide20 = pres.addSlide();
slide20.background = { color: COLORS.white };

slide20.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide20.addText("4.2 成果展示的准备清单", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let prepTable = [
  [
    { text: "准备项", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "内容", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "改善方向清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "哪3-5个方向经过确认", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "确认记录表", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "每个方向的确认结论和业务方意见", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "可执行方案", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "每个\"确认OK\"方向的具体行动计划", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "待跟进事项", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "需要后续继续工作的方向，责任人和时间", options: { fill: { color: COLORS.white } } }
  ]
];

slide20.addTable(prepTable, {
  x: 0.5, y: 1.3, w: 9, h: 2.5,
  colW: [3.0, 6.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 14
});

// ========== 模块五标题页 ==========
let slide21 = pres.addSlide();
slide21.background = { color: COLORS.primary };

slide21.addText("模块五", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 24, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

slide21.addText("两天课程的完整产出包", {
  x: 0.5, y: 2.3, w: 9, h: 1.2,
  fontSize: 40, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide21.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 4.2, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide21.addText("预估时长：30分钟", {
  x: 0.5, y: 4.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

// ========== 5.1 产出清单检查 ==========
let slide22 = pres.addSlide();
slide22.background = { color: COLORS.white };

slide22.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide22.addText("5.1 产出清单检查", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let outputTable = [
  [
    { text: "产出", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "说明", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "检查", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "业务画卷", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "四步骤结构化表单，覆盖产线梳理所需的全部核心信息", options: { fill: { color: COLORS.white } } },
    { text: "□", options: { fill: { color: COLORS.white }, align: "center" } }
  ],
  [
    { text: "企业浪费诊断全景图", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "含七大浪费标注、严重程度评分", options: { fill: { color: COLORS.lightBg } } },
    { text: "□", options: { fill: { color: COLORS.lightBg }, align: "center" } }
  ],
  [
    { text: "改善优先级清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "综合评分最高的改善点，含业务方确认结论", options: { fill: { color: COLORS.white } } },
    { text: "□", options: { fill: { color: COLORS.white }, align: "center" } }
  ],
  [
    { text: "精益工具应用方案", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "至少包含一个工具（准时化/自主保全/SMED/质量管理）的完整方案", options: { fill: { color: COLORS.lightBg } } },
    { text: "□", options: { fill: { color: COLORS.lightBg }, align: "center" } }
  ],
  [
    { text: "确认记录与行动清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "四类结论归类的完整记录 + 可执行行动计划", options: { fill: { color: COLORS.white } } },
    { text: "□", options: { fill: { color: COLORS.white }, align: "center" } }
  ]
];

slide22.addTable(outputTable, {
  x: 0.5, y: 1.2, w: 9, h: 3.2,
  colW: [2.8, 5.2, 1.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12
});

// ========== 5.2 产出归档建议 ==========
let slide23 = pres.addSlide();
slide23.background = { color: COLORS.white };

slide23.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide23.addText("5.2 产出归档建议", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let archiveTable = [
  [
    { text: "产出", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "归档位置", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "用途", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "业务画卷", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "精益推进办公室存档", options: { fill: { color: COLORS.white } } },
    { text: "下次诊断的基准参考", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "浪费诊断全景图", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "上报管理层", options: { fill: { color: COLORS.lightBg } } },
    { text: "作为改善投入依据，争取资源支持", options: { fill: { color: COLORS.lightBg } } }
  ],
  [
    { text: "改善优先级清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "纳入年度精益工作计划", options: { fill: { color: COLORS.white } } },
    { text: "跟踪改善进度", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "精益工具方案", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "精益推进团队存档", options: { fill: { color: COLORS.lightBg } } },
    { text: "方法积累和复用", options: { fill: { color: COLORS.lightBg } } }
  ],
  [
    { text: "确认记录与行动清单", options: { fill: { color: COLORS.lightGray }, bold: true } },
    { text: "责任人和推进团队各执一份", options: { fill: { color: COLORS.white } } },
    { text: "日常跟踪执行", options: { fill: { color: COLORS.white } } }
  ]
];

slide23.addTable(archiveTable, {
  x: 0.5, y: 1.2, w: 9, h: 3.2,
  colW: [2.5, 3.2, 3.3],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12
});

// ========== 课后任务 ==========
let slide24 = pres.addSlide();
slide24.background = { color: COLORS.white };

slide24.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide24.addText("课后任务（延续到课后）", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

slide24.addText("两天的课堂结束了，但改善才刚刚开始。", {
  x: 0.5, y: 1.15, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.secondary, bold: true
});

// 第一周任务
slide24.addText("第一周任务", {
  x: 0.5, y: 1.6, w: 9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

let week1Table = [
  [
    { text: "任务", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "截止时间", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "产出", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } }
  ],
  [
    { text: "完成SMED第一轮改善", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "下周五", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "换产时间压缩记录", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ],
  [
    { text: "启动自主保全简化版", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "下周五", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "点检基准和执行记录", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ],
  [
    { text: "建立OEE每日通报", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "明天", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "第一周OEE数据", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ],
  [
    { text: "和业务方对接待跟进事项", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "下周五", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "确认记录更新", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ]
];

slide24.addTable(week1Table, {
  x: 0.5, y: 1.95, w: 9, h: 1.6,
  colW: [4.5, 2.0, 2.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei"
});

// 第一个月任务
slide24.addText("第一个月任务", {
  x: 0.5, y: 3.7, w: 9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

let month1Table = [
  [
    { text: "任务", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "截止时间", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } },
    { text: "产出", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center", fontSize: 10 } }
  ],
  [
    { text: "SMED第二轮", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "第一个月", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "换产时间压到目标值", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ],
  [
    { text: "自主保全第一轮循环", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "第一个月", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "七步法完成情况报告", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ],
  [
    { text: "OEE改善验证", options: { fill: { color: COLORS.lightGray }, fontSize: 10 } },
    { text: "第一个月", options: { fill: { color: COLORS.white }, align: "center", fontSize: 10 } },
    { text: "OEE提升数据对比", options: { fill: { color: COLORS.white }, fontSize: 10 } }
  ]
];

slide24.addTable(month1Table, {
  x: 0.5, y: 4.05, w: 9, h: 1.3,
  colW: [4.5, 2.0, 2.5],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei"
});

// ========== 附录A ==========
let slide25 = pres.addSlide();
slide25.background = { color: COLORS.white };

slide25.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.secondary }
});

slide25.addText("附录A：当场确认记录模板", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let appendixATable = [
  [
    { text: "组别", options: { fill: { color: COLORS.lightGray }, align: "center" } },
    { text: "成员", options: { fill: { color: COLORS.lightGray }, align: "center" } },
    { text: "诊断产线", options: { fill: { color: COLORS.lightGray }, align: "center" } },
    { text: "确认日期", options: { fill: { color: COLORS.lightGray }, align: "center" } }
  ],
  [
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } }
  ]
];

slide25.addTable(appendixATable, {
  x: 0.5, y: 1.2, w: 9, h: 1.0,
  colW: [2.25, 2.25, 2.25, 2.25],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 12
});

let appendixA2Table = [
  [
    { text: "模块", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "确认内容", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "业务方反馈", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "结论", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "需修改内容/后续跟进", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } }
  ]
];

slide25.addTable(appendixA2Table, {
  x: 0.5, y: 2.4, w: 9, h: 1.5,
  colW: [1.8, 1.8, 2.0, 1.2, 2.2],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 11
});

// ========== 附录B ==========
let slide26 = pres.addSlide();
slide26.background = { color: COLORS.white };

slide26.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.secondary }
});

slide26.addText("附录B：改善方案深化模板", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

let appendixBTable = [
  [
    { text: "改善方向", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "责任人", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "启动时间", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "目标达成时间", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "成功指标", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "现状值", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "目标值", options: { fill: { color: COLORS.secondary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } },
    { text: "", options: { fill: { color: COLORS.white } } }
  ],
  [
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } },
    { text: "", options: { fill: { color: COLORS.lightGray } } }
  ]
];

slide26.addTable(appendixBTable, {
  x: 0.3, y: 1.3, w: 9.4, h: 1.5,
  colW: [1.8, 1.2, 1.2, 1.4, 1.4, 1.0, 1.0],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 11
});

// ========== 附录C ==========
let slide27 = pres.addSlide();
slide27.background = { color: COLORS.white };

slide27.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.secondary }
});

slide27.addText("附录C：成果展示5分钟话术模板", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

const scriptSections = [
  { title: "开场：30秒", content: "\"经过两天诊断和确认，我们选定的产线是____，最核心的发现是____。\"" },
  { title: "第一部分：确认的改善方向（2分钟）", content: "\"我们认为这条产线最值得做的三件事是：\n第一，____，这个方向业务方确认OK，理由是____；\n第二，____，这个方向业务方确认OK，理由是____；\n第三，____，这个方向需要____修改后才能推进。\"" },
  { title: "第二部分：执行计划（2分钟）", content: "\"其中，优先级最高的____方案，计划：\n- 责任人：____\n- 第一个动作：____\n- 目标：在____前达成____指标从____提升到____\"" },
  { title: "第三部分：待跟进事项（1分钟）", content: "\"还有____方向需要后续跟进。____负责，____前完成。\n感谢业务方的参与，欢迎大家后续继续支持。\"" }
];

scriptSections.forEach((s, i) => {
  const y = 1.15 + i * 1.1;

  slide27.addText(s.title, {
    x: 0.5, y: y, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  slide27.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y + 0.35, w: 9, h: 0.7,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.05
  });

  slide27.addText(s.content, {
    x: 0.65, y: y + 0.35, w: 8.7, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

// ========== 知识框架总结 ==========
let slide28 = pres.addSlide();
slide28.background = { color: COLORS.white };

slide28.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide28.addText("课程知识框架总结", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

slide28.addText("精益诊断与改善方案 · 完整链路", {
  x: 0.5, y: 1.1, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

// Day 1
slide28.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.5, w: 4.3, h: 2.4,
  fill: { color: COLORS.lightBg },
  rectRadius: 0.08
});

slide28.addText("Day 1 诊断与工具练习", {
  x: 0.7, y: 1.6, w: 3.9, h: 0.4,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide28.addText([
  { text: "精益基础：价值观、六大心法", options: { bullet: true, breakLine: true } },
  { text: "浪费识别：业务画卷、七大浪费", options: { bullet: true, breakLine: true } },
  { text: "精益工具实操：准时化、自主保全七步法、质量管理三不原则", options: { bullet: true, breakLine: true } },
  { text: "Day 1产出：浪费诊断初步清单", options: { bullet: true } }
], {
  x: 0.7, y: 2.0, w: 3.9, h: 1.8,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: COLORS.darkText, paraSpaceAfter: 6
});

// Day 2
slide28.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.2, y: 1.5, w: 4.3, h: 2.4,
  fill: { color: COLORS.lightBg },
  rectRadius: 0.08
});

slide28.addText("Day 2 专题深化与当场确认", {
  x: 5.4, y: 1.6, w: 3.9, h: 0.4,
  fontSize: 13, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide28.addText([
  { text: "专业保全：OEE、MTBF/MTTR、SMED深化", options: { bullet: true, breakLine: true } },
  { text: "产线效率分析：六大损失、产线平衡", options: { bullet: true, breakLine: true } },
  { text: "方针管理：战略→方针→日常行动", options: { bullet: true, breakLine: true } },
  { text: "当场确认：翻译话术→逐模块确认→四类结论→改善深化", options: { bullet: true } }
], {
  x: 5.4, y: 2.0, w: 3.9, h: 1.8,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: COLORS.darkText, paraSpaceAfter: 6
});

// 五样东西
slide28.addText("两天能带走的五样东西", {
  x: 0.5, y: 4.0, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

const fiveThings = [
  "业务画卷（可复用模板）",
  "企业浪费诊断全景图 + 改善优先级清单",
  "精益改善方案（经业务方确认方向）",
  "精益工具实践清单",
  "确认记录与行动清单"
];

fiveThings.forEach((t, i) => {
  const x = 0.5 + (i % 3) * 3.1;
  const y = 4.4 + Math.floor(i / 3) * 0.5;

  slide28.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.9, h: 0.4,
    fill: { color: i % 2 === 0 ? COLORS.lightGray : COLORS.lightBg },
    rectRadius: 0.03
  });

  slide28.addText((i + 1) + ". " + t, {
    x: x + 0.1, y: y, w: 2.7, h: 0.4,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: COLORS.darkText, valign: "middle"
  });
});

// ========== 最后的提醒 ==========
let slide29 = pres.addSlide();
slide29.background = { color: COLORS.white };

slide29.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide29.addText("最后的提醒", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

slide29.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.7,
  fill: { color: COLORS.primary },
  rectRadius: 0.08
});

slide29.addText("精益诊断不是终点，是起点。", {
  x: 0.7, y: 1.2, w: 8.6, h: 0.7,
  fontSize: 22, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center", valign: "middle"
});

const reminders = [
  { num: "1", title: "先试点再推广", desc: "不要一开始就全铺开。先选一条产线、一个班组，做出效果来，再推广。" },
  { num: "2", title: "争取管理层的支持", desc: "精益改善需要资源，需要时间，需要管理层认可你做的事情是有价值的。" },
  { num: "3", title: "坚持数据说话", desc: "用OEE数据、不良品数据、换产时间数据来证明改善效果，不要靠感觉。" },
  { num: "4", title: "把改善当成习惯，不是项目", desc: "Kaizen不是一次性的运动，是每天进步一点点的持续过程。" }
];

reminders.forEach((r, i) => {
  const y = 2.0 + i * 0.9;

  slide29.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.8,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.06
  });

  slide29.addShape(pres.shapes.OVAL, {
    x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
    fill: { color: COLORS.primary }
  });

  slide29.addText(r.num, {
    x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: COLORS.white, bold: true, align: "center", valign: "middle"
  });

  slide29.addText(r.title, {
    x: 1.4, y: y + 0.08, w: 7.9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  slide29.addText(r.desc, {
    x: 1.4, y: y + 0.42, w: 7.9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

// ========== 难住你的情况怎么处理 ==========
let slide30 = pres.addSlide();
slide30.background = { color: COLORS.white };

slide30.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.secondary }
});

slide30.addText("难住你的情况怎么处理", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

const difficulties = [
  {
    problem: "业务方代表说\"这个不对，但我也说不清楚哪里不对\"",
    solution: "不要继续追问\"哪里不对\"——换成：「你能想到最近一次让你印象深刻的客户反馈吗？好的或者差的都行。」"
  },
  {
    problem: "业务方代表对所有方案都说\"做不到\"",
    solution: "先把\"方向对不对\"和\"现在能不能做\"分开。先问：「如果资源完全不受限，你觉得这个方向能解决问题吗？」"
  },
  {
    problem: "业务方代表认为你的优先级排序完全不对",
    solution: "先具体化分歧：「你认为这个改善点应该更高优先，是因为它的发生频率，还是因为它的严重程度？」"
  },
  {
    problem: "确认快结束了，还有几个内容没有结论",
    solution: "当场说清楚：「这几个部分我们今天没有时间完整处理，我记录为待跟进。我需要你在[具体日期]前告诉我处理方向。」"
  }
];

difficulties.forEach((d, i) => {
  const y = 1.15 + i * 1.1;

  slide30.addText("情况 " + (i + 1), {
    x: 0.5, y: y, w: 1.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: COLORS.primary, bold: true
  });

  slide30.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y + 0.3, w: 9, h: 0.75,
    fill: { color: COLORS.lightBg },
    rectRadius: 0.05
  });

  slide30.addText(d.problem, {
    x: 0.65, y: y + 0.32, w: 8.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.secondary, bold: true
  });

  slide30.addText("应对：" + d.solution, {
    x: 0.65, y: y + 0.6, w: 8.7, h: 0.42,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

// ========== 今日行动清单 ==========
let slide31 = pres.addSlide();
slide31.background = { color: COLORS.white };

slide31.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: COLORS.primary }
});

slide31.addText("今日行动清单与个人反思", {
  x: 0.5, y: 0.2, w: 9, h: 0.6,
  fontSize: 26, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, margin: 0
});

// 行动清单
slide31.addText("【今天的行动清单】", {
  x: 0.5, y: 1.1, w: 9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide31.addText("确认环节结束后，在离开之前把所有待推进事项记录清楚。", {
  x: 0.5, y: 1.4, w: 9, h: 0.3,
  fontSize: 11, fontFace: "Microsoft YaHei",
  color: COLORS.grayText
});

let actionTable = [
  [
    { text: "序号", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "行动描述", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "负责人", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } },
    { text: "截止时间", options: { fill: { color: COLORS.primary }, color: COLORS.white, bold: true, align: "center" } }
  ],
  [{ text: "1", options: { fill: { color: COLORS.white }, align: "center" } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "2", options: { fill: { color: COLORS.lightGray }, align: "center" } }, { text: "", options: { fill: { color: COLORS.lightGray } } }, { text: "", options: { fill: { color: COLORS.lightGray } } }, { text: "", options: { fill: { color: COLORS.lightGray } } }],
  [{ text: "3", options: { fill: { color: COLORS.white }, align: "center" } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }],
  [{ text: "4", options: { fill: { color: COLORS.lightGray }, align: "center" } }, { text: "", options: { fill: { color: COLORS.lightGray } } }, { text: "", options: { fill: { color: COLORS.lightGray } } }, { text: "", options: { fill: { color: COLORS.lightGray } } }],
  [{ text: "5", options: { fill: { color: COLORS.white }, align: "center" } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }, { text: "", options: { fill: { color: COLORS.white } } }]
];

slide31.addTable(actionTable, {
  x: 0.5, y: 1.7, w: 9, h: 1.8,
  colW: [0.8, 4.5, 1.8, 1.9],
  border: { pt: 0.5, color: COLORS.mediumGray },
  fontFace: "Microsoft YaHei",
  fontSize: 11
});

// 个人反思
slide31.addText("【今天的个人反思】", {
  x: 0.5, y: 3.6, w: 9, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei",
  color: COLORS.primary, bold: true
});

slide31.addText("花五分钟独立填写，不需要分享。", {
  x: 0.5, y: 3.9, w: 9, h: 0.25,
  fontSize: 10, fontFace: "Microsoft YaHei",
  color: COLORS.grayText
});

const reflections = [
  "今天关于这个诊断项目，最意外的一个发现：",
  "确认研讨里，你觉得自己引导得比较好的部分：",
  "下次做这个流程，你想做得更好的一件事：",
  "今天这份诊断结果，下一步最关键的行动是什么，谁来推，什么时候出结果："
];

reflections.forEach((r, i) => {
  const y = 4.15 + i * 0.35;

  slide31.addText((i + 1) + ". " + r, {
    x: 0.5, y: y, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: COLORS.darkText
  });
});

// ========== 结束页 ==========
let slide32 = pres.addSlide();
slide32.background = { color: COLORS.primary };

slide32.addText("祝你把两天的学习", {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: COLORS.white, align: "center"
});

slide32.addText("变成真实的改善成果", {
  x: 0.5, y: 2.6, w: 9, h: 0.8,
  fontSize: 32, fontFace: "Microsoft YaHei",
  color: COLORS.white, bold: true, align: "center"
});

slide32.addShape(pres.shapes.RECTANGLE, {
  x: 4, y: 3.6, w: 2, h: 0.04,
  fill: { color: COLORS.accent }
});

slide32.addText("精益管理实战训练营", {
  x: 0.5, y: 4.0, w: 9, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei",
  color: COLORS.accent, align: "center"
});

// 保存文件
pres.writeFile({ fileName: "C:/Users/Administrator/Desktop/精益管理/授课PPT/06_当场确认与改善深化.pptx" })
  .then(() => console.log("PPT created successfully: 32 pages"))
  .catch(err => console.error("Error:", err));
