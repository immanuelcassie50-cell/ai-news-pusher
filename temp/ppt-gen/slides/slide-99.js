// slide-99.js - Interactive Session Preview
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 99,
  title: '互动环节：变革情景模拟'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("互动环节：变革情景模拟", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Simulation scenario
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 2.5,
    fill: { color: theme.light }
  });

  slide.addText("📋 情景模拟任务", {
    x: 0.7, y: 1.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("你是一家制造企业的运营总监，公司刚刚决定引入智能制造系统。\n\n这个系统将自动化50%的生产线工作，预计会影响到200名操作工人的岗位。\n\n中层管理团队担心新系统的复杂性，一线员工担心失业，工会已经表达了关切。\n\n你需要设计一个完整的变革管理计划。", {
    x: 0.7, y: 1.6, w: 8.6, h: 1.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Tasks
  slide.addText("任务要求：", {
    x: 0.5, y: 3.7, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const tasks = [
    "1. 诊断：识别关键利益相关方及其主要担忧",
    "2. 策略：设计建立共识和维护信任的具体措施",
    "3. 计划：制定分阶段的变革沟通和培训计划",
    "4. 风险：识别主要变革风险并准备应对方案"
  ];

  tasks.forEach((t, i) => {
    slide.addText(t, {
      x: 0.5, y: 4.1 + i * 0.38, w: 9, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-99-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
