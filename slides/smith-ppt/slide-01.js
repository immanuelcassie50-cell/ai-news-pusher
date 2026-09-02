// slide-01.js - Cover Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '斯密思想的现代回响'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Decorative top bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.primary }
  });

  // Left accent block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.15, w: 0.4, h: 5.475,
    fill: { color: theme.secondary }
  });

  // Main title
  slide.addText("斯密思想的现代回响", {
    x: 0.8, y: 1.6, w: 8.5, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("从他到哈耶克、弗里德曼", {
    x: 0.8, y: 2.8, w: 8.5, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Horizontal divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 3.6, w: 4, h: 0.04,
    fill: { color: theme.accent }
  });

  // Course info
  slide.addText("课程编号 24", {
    x: 0.8, y: 3.9, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.425, w: 10, h: 0.2,
    fill: { color: theme.primary }
  });

  // Decorative circle
  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 1.2, w: 1.2, h: 1.2,
    fill: { color: theme.light, transparency: 30 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 8.6, y: 1.6, w: 0.8, h: 0.8,
    fill: { color: theme.accent, transparency: 40 }
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
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
