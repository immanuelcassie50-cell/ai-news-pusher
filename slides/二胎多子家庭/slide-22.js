// slide-22.js - 模块二封面 (Section Divider)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 22,
  title: '看见差异的价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large section number
  slide.addText("02", {
    x: 0.5, y: 1.0, w: 3, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Vertical accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.3, y: 1.2, w: 0.04, h: 2.2,
    fill: { color: theme.accent }
  });

  // Section title
  slide.addText("看见差异的价值", {
    x: 3.6, y: 1.3, w: 6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("每个孩子都是独特的星辰", {
    x: 3.6, y: 2.1, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 3.5, w: 2.2, h: 2.2,
    fill: { color: theme.primary, transparency: 90 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 3.8, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 75 }
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.0, w: 10, h: 0.625,
    fill: { color: theme.secondary }
  });

  slide.addText("第 2 模块", {
    x: 0.5, y: 5.15, w: 2, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
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
  pres.writeFile({ fileName: "slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
