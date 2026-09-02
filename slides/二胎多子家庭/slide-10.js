// slide-10.js - Module 1 Cover (Section Divider)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 10,
  title: '理解公平感的本质'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Section number
  slide.addText("01", {
    x: 0.5, y: 1.5, w: 2, h: 1.2,
    fontSize: 72, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "left", valign: "middle",
    transparency: 30
  });

  // Main title
  slide.addText("理解公平感的本质", {
    x: 0.5, y: 2.5, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("看见感受，看见需求", {
    x: 0.5, y: 3.6, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, align: "left", valign: "top",
    transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 3, h: 0.04,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Right decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 0.5, w: 2.5, h: 2.5,
    fill: { color: "FFFFFF", transparency: 90 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 2.5, w: 1.5, h: 1.5,
    fill: { color: "FFFFFF", transparency: 85 }
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
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
