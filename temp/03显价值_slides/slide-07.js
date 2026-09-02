// slide-07.js - Section: 02 为什么支持部门说不清楚自己的价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 7,
  title: '为什么支持部门说不清楚自己的价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Section number
  slide.addText("02", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", transparency: 30
  });

  // Section title
  slide.addText("为什么支持部门", {
    x: 0.5, y: 2.1, w: 9, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("说不清楚自己的价值", {
    x: 0.5, y: 2.9, w: 9, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.7, w: 2, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };