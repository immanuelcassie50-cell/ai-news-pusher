// slide-23.js - Section: 05 练习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 23,
  title: '练习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Section number
  slide.addText("05", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", transparency: 30
  });

  // Section title
  slide.addText("练习", {
    x: 0.5, y: 2.3, w: 9, h: 1,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Subtitle
  slide.addText("价值损失描述表", {
    x: 0.5, y: 3.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center",
    transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 4.2, w: 2, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };