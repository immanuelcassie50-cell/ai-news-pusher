// slide-29.js - 模块五章节页（知识框架）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 29,
  title: '模块五：知识框架与作业'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.secondary }
  });

  slide.addText("05", {
    x: 0.5, y: 1.5, w: 2.5, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("知识框架与作业", {
    x: 3, y: 2, w: 6.5, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("总结与延伸", {
    x: 3, y: 3.1, w: 6.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "CCCCCC",
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };