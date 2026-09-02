// slide-08.js - Section Divider: 模块二
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 8,
  title: '模块二：格式处理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large number
  slide.addText("02", {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    transparency: 30
  });

  // Section title
  slide.addText("格式处理", {
    x: 0.5, y: 2.5, w: 8, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("工具之间的[翻译层]", {
    x: 0.5, y: 3.6, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", transparency: 20
  });

  // Bottom accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.8, w: 2, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };