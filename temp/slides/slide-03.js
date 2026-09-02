// slide-03.js - Section Divider: Part 1
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'section',
  index: 3,
  title: '问题定义篇'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Large number
  slide.addText("01", {
    x: 0.8, y: 1.5, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    transparency: 20
  });

  // Section title
  slide.addText("问题定义篇", {
    x: 0.8, y: 2.2, w: 8, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("三层定义 / 描述性定义 / 隐藏考题诊断", {
    x: 0.8, y: 3.3, w: 8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", transparency: 30
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.0, w: 2, h: 0.05,
    fill: { color: "FFFFFF" }
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF", transparency: 50 }
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
