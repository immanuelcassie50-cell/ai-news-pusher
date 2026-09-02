// slide-10.js - 开场收尾：金句
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 10, title: '开场金句' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative elements
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.4, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("OPENING QUOTE", {
    x: 0.4, y: 0.55, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 6
  });

  // Big quote
  slide.addText("\"", {
    x: 0.5, y: 0.9, w: 1, h: 1,
    fontSize: 80, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("谈判不是天生的能力，", {
    x: 0.7, y: 1.7, w: 8.7, h: 0.85,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("是学来的能力。", {
    x: 0.7, y: 2.45, w: 8.7, h: 0.85,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Subtitle
  slide.addText("从本能应对到框架思考  ·  From Instinct to Framework", {
    x: 0.7, y: 3.5, w: 8.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.0, w: 1.5, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Three principle lines
  const lines = [
    "不教\"变得强硬\"，也不教\"变得圆滑\"",
    "教\"识别 + 框架 + 工具\"——在每个具体场景知道该想什么、该问什么、该做什么",
    "这是终身的能力，不是技巧"
  ];
  lines.forEach((l, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 4.2 + i * 0.28, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(l, {
      x: 0.9, y: 4.15 + i * 0.28, w: 8.5, h: 0.28,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
