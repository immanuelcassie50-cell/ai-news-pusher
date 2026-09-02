// slide-131.js - 感谢页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 131,
  title: '感谢聆听'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large background shape
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Decorative accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("感谢聆听", {
    x: 0.5, y: 1.5, w: 9, h: 1.0,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Subtitle
  slide.addText("循迹创新，与你同行", {
    x: 0.5, y: 2.5, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.3, w: 3, h: 0.03,
    fill: { color: theme.accent }
  });

  // Course review text
  slide.addText("从洞察到验证，从问题到方案", {
    x: 0.5, y: 3.6, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  slide.addText("循迹 → 重问 → 开局 → 试真", {
    x: 0.5, y: 4.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // Blessing
  slide.addText("祝你在创新之路上不断突破", {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("131", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
