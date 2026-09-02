// slide-01.js - Cover Page: 显价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '显价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Top accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("显价值", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 60, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Subtitle
  slide.addText("把你的工作从成本语言翻译成业务语言", {
    x: 0.5, y: 3.0, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Course info
  slide.addText("降本增效基层实战营", {
    x: 0.5, y: 4.2, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.9, w: 3, h: 0.05,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };