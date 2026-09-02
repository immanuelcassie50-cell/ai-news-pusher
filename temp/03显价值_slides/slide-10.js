// slide-10.js - Content: 成本中心不是命运
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '成本中心不是命运'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("成本中心不是命运", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Main quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 1.6, w: 7, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
  });

  slide.addText("「成本中心」不是命运，", {
    x: 1.7, y: 1.9, w: 6.6, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("是你还没有用对语言的结果。", {
    x: 1.7, y: 2.5, w: 6.6, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Sub text
  slide.addText("你把问题描述成数字，它就从成本变成了可以被处理的价值。", {
    x: 0.5, y: 4.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };