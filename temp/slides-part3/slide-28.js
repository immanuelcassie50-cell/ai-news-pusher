// slide-28.js - Section Divider: 服务SOP的生成与优化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "section-divider",
  index: 28,
  title: "服务SOP的生成与优化"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  // Large chapter number
  slide.addText("11", {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle",
    transparency: 30
  });

  // Section title
  slide.addText("服务SOP的生成与优化", {
    x: 0.5, y: 2.2, w: 9, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("使用提示词生成SOP，人工验证和优化", {
    x: 0.5, y: 3.2, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", transparency: 40,
    align: "left", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.2, w: 10, h: 0.425,
    fill: { color: theme.accent }
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF", transparency: 30 }
  });
  slide.addText("28", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };