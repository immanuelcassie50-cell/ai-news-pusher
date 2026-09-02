// slide-85.js - Module 3 Section Divider: 职业心态
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 85,
  title: '职业心态'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Deep red background
  slide.background = { color: theme.primary };

  // Large "03" number - semi-transparent, positioned left
  slide.addText("03", {
    x: 0.6, y: 1.2, w: 4, h: 2.5,
    fontSize: 150, fontFace: "Arial",
    color: theme.secondary, bold: true,
    transparency: 70
  });

  // Section label
  slide.addText("模块三", {
    x: 0.6, y: 1.8, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    charSpacing: 4
  });

  // Main title
  slide.addText("职业心态", {
    x: 0.6, y: 2.4, w: 8, h: 1.2,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("替人做决定的风险与口碑", {
    x: 0.6, y: 3.6, w: 8, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Decorative accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.3, w: 1.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("85", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-85-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
