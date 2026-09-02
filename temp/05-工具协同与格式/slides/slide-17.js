// slide-17.js - Content: 积累的价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: '积累的价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("积累的价值", {
    x: 0.5, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Comparison visual
  // Without library
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.2, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("没有产出库", {
    x: 0.7, y: 1.1, w: 3.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("30分钟 × 100次", {
    x: 0.7, y: 1.7, w: 3.8, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: theme.secondary, bold: true
  });

  slide.addText("= 50小时", {
    x: 0.7, y: 2.4, w: 3.8, h: 0.5,
    fontSize: 32, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  slide.addText("每次都从头摸索", {
    x: 0.7, y: 3.0, w: 3.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // VS
  slide.addText("VS", {
    x: 4.5, y: 2.2, w: 1, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // With library
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.0, w: 4.2, h: 3.0,
    fill: { color: theme.primary }
  });

  slide.addText("有产出库", {
    x: 5.5, y: 1.1, w: 3.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("5分钟 × 100次", {
    x: 5.5, y: 1.7, w: 3.8, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  slide.addText("= 8小时", {
    x: 5.5, y: 2.4, w: 3.8, h: 0.5,
    fontSize: 32, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  slide.addText("保存后每次直接用", {
    x: 5.5, y: 3.0, w: 3.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", transparency: 30
  });

  // Savings highlight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9.0, h: 1.2,
    fill: { color: "E8F5E9" }
  });

  slide.addText("节省42小时", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true,
    align: "center"
  });

  slide.addText("这就是有没有产出库的差距", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "2E7D32",
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };