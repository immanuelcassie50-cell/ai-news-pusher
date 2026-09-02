// slide-86.js - Chapter 12 Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 86,
  title: '替人做决定的风险'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Left accent bar - deep red
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Chapter number - large
  slide.addText("第十二章", {
    x: 0.6, y: 1.5, w: 4, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    charSpacing: 6
  });

  // Main title
  slide.addText("替人做决定的风险", {
    x: 0.6, y: 2.3, w: 8, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Decorative line under title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.5, w: 2.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtle decorative shape - right side
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 3.5, w: 2.5, h: 2.5,
    fill: { color: theme.primary, transparency: 90 }
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("86", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
