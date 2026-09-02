// slide-17.js - Section: 04 演示案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 17,
  title: '演示案例：研发团队的价值损失翻译'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Section number
  slide.addText("04", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", transparency: 30
  });

  // Section title
  slide.addText("演示案例", {
    x: 0.5, y: 2.3, w: 9, h: 1,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Subtitle
  slide.addText("研发团队怎么翻译它的价值损失", {
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