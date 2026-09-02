// slide-01.js - Cover Page
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '破题力 成果展示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative accent bar at top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  // Course name label
  slide.addText("行动学习项目成果", {
    x: 0.5, y: 1.5, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Main title
  slide.addText("《破题力》", {
    x: 0.5, y: 2.2, w: 9, h: 1.2,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Subtitle
  slide.addText("行动学习者的四维问题定义训练营", {
    x: 0.5, y: 3.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // Bottom info
  slide.addText("学员成果 Demo 展示", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.2, w: 3, h: 0.03,
    fill: { color: theme.accent }
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
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
