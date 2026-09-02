// slide-30.js - Content: 困境二：算出来的年损失超过100万
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '困境二：算出来的年损失超过100万'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("困境二：算出来的年损失超过100万", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Response card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 2.4,
    fill: { color: theme.accent }
  });

  slide.addText("不要因为数字大就自我压缩。", {
    x: 0.8, y: 1.25, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("更好的做法是：拆开来说，把大数字分解成几个可以核实的小数字，每个小数字都有具体来源。", {
    x: 0.8, y: 1.75, w: 8.5, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Key phrase
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.6, w: 8.5, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("「保守估算取一半，至少50万」也是一种站得住脚的说法，比主动缩小更有专业感。", {
    x: 1.0, y: 2.7, w: 8.1, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };