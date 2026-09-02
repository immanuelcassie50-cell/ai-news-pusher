// slide-33.js - 结尾页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'ending',
  index: 33,
  title: '第四章完'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.secondary }
  });

  slide.addText("第四章", {
    x: 0.5, y: 1.8, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  slide.addText("多轮对话", {
    x: 0.5, y: 2.5, w: 9, h: 1.2,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.85, w: 3, h: 0.05,
    fill: { color: "FFFFFF" }
  });

  slide.addText("让AI按你的想法推进", {
    x: 0.5, y: 4.1, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "CCCCCC",
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };