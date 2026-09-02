// slide-20.js - Bystanders Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '观望者：等待信号'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("观望者：等待信号（10-15%）", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Left: Why wait
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.3, h: 2.6,
    fill: { color: theme.light }
  });

  slide.addText("为什么观望？", {
    x: 0.7, y: 1.25, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const reasons = [
    "信息不够充分，看不清方向",
    "不想第一个冲，怕成为靶子",
    "等大多数人动了再说",
    "评估风险，等待更安全时机"
  ];

  reasons.forEach((r, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 1.75 + i * 0.55, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(r, {
      x: 0.95, y: 1.75 + i * 0.55, w: 3.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Right: How to activate
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.1, w: 4.5, h: 2.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  slide.addText("如何激活？", {
    x: 5.2, y: 1.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const activate = [
    "树立看得见的标杆案例",
    "强调"不参与"的风险",
    "降低参与门槛，减少风险感知",
    "创造安全的表达环境"
  ];

  activate.forEach((a, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.75 + i * 0.55, w: 0.08, h: 0.3,
      fill: { color: theme.primary }
    });
    slide.addText(a, {
      x: 5.45, y: 1.75 + i * 0.55, w: 3.8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.9, w: 9, h: 1.3,
    fill: { color: theme.accent }
  });

  slide.addText("观望者是最容易被转化的群体", {
    x: 0.7, y: 4.1, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left"
  });

  slide.addText("策略：提供"从众"的合理依据，让他们看到参与是安全的、值得的", {
    x: 0.7, y: 4.55, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "left"
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
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
