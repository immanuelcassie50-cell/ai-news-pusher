// slide-13.js - Section Divider: 模块三
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 13,
  title: '模块三：个人AI产出库'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large number
  slide.addText("03", {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    transparency: 30
  });

  // Section title
  slide.addText("个人AI产出库", {
    x: 0.5, y: 2.5, w: 8, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("让每次积累都有地方放", {
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