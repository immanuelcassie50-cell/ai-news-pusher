// slide-64.js - Section Divider: Module 4 (第四模块)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 64,
  title: '合作维持机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText("04", {
    x: 0.5, y: 1.0, w: 3, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Vertical accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.3, y: 1.2, w: 0.04, h: 2.2,
    fill: { color: theme.accent }
  });

  // Section title
  slide.addText("合作维持机制设计", {
    x: 3.6, y: 1.3, w: 6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("三大方向与实践策略", {
    x: 3.6, y: 2.1, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 3.5, w: 2.2, h: 2.2,
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 3.8, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 80 }
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.0, w: 10, h: 0.625,
    fill: { color: theme.secondary }
  });

  slide.addText("第 4 模块", {
    x: 0.5, y: 5.15, w: 2, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
