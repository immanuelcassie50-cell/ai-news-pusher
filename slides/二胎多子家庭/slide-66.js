// slide-66.js - 模块五封面
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 66,
  title: '语言重塑系统'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative geometric shapes
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 0.5, w: 2.5, h: 2.5,
    fill: { color: "FFFFFF", transparency: 90 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 3.5, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 70 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: -0.5, y: 4, w: 2, h: 2,
    fill: { color: "FFFFFF", transparency: 85 }
  });

  // Section number
  slide.addText("05", {
    x: 0.5, y: 1.2, w: 2, h: 1.2,
    fontSize: 72, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 1.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("语言重塑系统", {
    x: 0.5, y: 2.8, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("改变语言，改变关系", {
    x: 0.5, y: 3.9, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
