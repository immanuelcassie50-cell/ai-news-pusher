// slide-85.js - Change Fatigue Prevention
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 85,
  title: '变革疲劳预防与应对'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革疲劳预防与应对", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Warning signs
  slide.addText("变革疲劳预警信号：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const warnings = [
    "员工对变革话题不再感兴趣，回避讨论",
    "抱怨增多，但建设性反馈减少",
    "执行力下降，对新政策消极应对",
    "私下调侃变革项目，缺乏认同感"
  ];

  warnings.forEach((w, i) => {
    slide.addText("⚠ " + w, {
      x: 0.5, y: 1.4 + i * 0.45, w: 9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Prevention strategies
  slide.addText("预防与应对策略：", {
    x: 0.5, y: 3.3, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const strategies = [
    "控制变革节奏，避免同时进行多项变革",
    "设置"变革休息期"，让员工有时间消化",
    "及时认可小胜利，保持变革动力",
    "高层领导亲自关心一线员工的感受"
  ];

  strategies.forEach((s, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: 3.7 + i * 0.45, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(s, {
      x: 0.75, y: 3.7 + i * 0.45, w: 8.5, h: 0.35,
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
  pres.writeFile({ fileName: "slide-85-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
