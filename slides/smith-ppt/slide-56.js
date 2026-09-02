// slide-56.js - Section Divider: 回到斯密
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 56,
  title: '回到斯密',
  section: 4
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number "04"
  slide.addText("04", {
    x: 0.5, y: 1.2, w: 9, h: 1.8,
    fontSize: 120, fontFace: "Georgia",
    color: theme.bg, bold: true,
    align: "center", valign: "middle"
  });

  // Section title
  slide.addText("回到斯密", {
    x: 0.5, y: 2.8, w: 9, h: 1,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true,
    align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.9, w: 3, h: 0.06,
    fill: { color: theme.light }
  });

  // Subtitle
  slide.addText("重新理解古典经济学的现代价值", {
    x: 0.5, y: 4.1, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("56", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
