// slide-19.js - Resistors Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '抵触者：需要特别关注'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("抵触者：需要特别关注（15-20%）", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Left: Why resist
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.3, h: 2.8,
    fill: { color: theme.light }
  });

  slide.addText("为什么会抵触？", {
    x: 0.7, y: 1.25, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const reasons = [
    "过去的变革失败留下阴影",
    "担心能力跟不上被淘汰",
    "既得利益受损",
    "信息不对称，不理解为什么变"
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

  // Right: How to handle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.1, w: 4.5, h: 2.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  slide.addText("如何应对？", {
    x: 5.2, y: 1.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const handle = [
    "一对一沟通，了解真实担忧",
    "对症下药，解决核心顾虑",
    "用数据和案例回应质疑",
    "允许表达，不打压不贴标签"
  ];

  handle.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.75 + i * 0.55, w: 0.08, h: 0.3,
      fill: { color: theme.primary }
    });
    slide.addText(h, {
      x: 5.45, y: 1.75 + i * 0.55, w: 3.8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Warning box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 1.1,
    fill: { color: theme.secondary }
  });

  slide.addText("注意：抵触者 ≠ 反对者，大多数抵触源于合理的担忧", {
    x: 0.7, y: 4.25, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left"
  });

  slide.addText("策略：先理解，再引导；先共情，再说服", {
    x: 0.7, y: 4.65, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
