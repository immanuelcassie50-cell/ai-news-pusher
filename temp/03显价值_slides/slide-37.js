// slide-37.js - Section: 工具篇
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 37,
  title: '工具篇'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Section number
  slide.addText("工具篇", {
    x: 0.5, y: 2.0, w: 9, h: 1,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Subtitle
  slide.addText("让AI帮你做价值翻译", {
    x: 0.5, y: 3.2, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center",
    transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 4.0, w: 2, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };