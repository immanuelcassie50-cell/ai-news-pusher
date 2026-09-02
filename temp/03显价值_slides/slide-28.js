// slide-28.js - Content: 练习3-B反馈记录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '练习3-B反馈记录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("练习 3-B：反馈记录", {
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

  // Question 1
  slide.addText("他们的反应：", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });

  // Question 2
  slide.addText("你的回应（如果他们问到你没想到的地方，把它记下来）：", {
    x: 0.5, y: 2.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.9, w: 9, h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });

  // Question 3
  slide.addText("根据这个反馈，你需要补充的信息是：", {
    x: 0.5, y: 3.9, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };