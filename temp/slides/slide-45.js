// slide-45.js - Chapter 6 Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'chapter-divider',
  index: 45,
  title: '第六章：AI能算的和算不出的，中间那条线在哪'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Deep red background for chapter divider
  slide.background = { color: theme.primary };

  // Top decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.1,
    fill: { color: theme.accent }
  });

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.accent }
  });

  // Large chapter number
  slide.addText("第六章", {
    x: 0.6, y: 1.0, w: 3, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Horizontal accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.85, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("AI能算的和算不出的", {
    x: 0.6, y: 2.1, w: 8.8, h: 1.2,
    fontSize: 42, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("中间那条线在哪", {
    x: 0.6, y: 3.3, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Core message box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 4.2, w: 8.8, h: 0.9,
    fill: { color: "FFFFFF", transparency: 85 },
    rectRadius: 0.1
  });
  slide.addText("AI能替你把冲稳保算得比谁都精确，它算不出的是那道题背后那道题——这个人到底是谁", {
    x: 0.8, y: 4.2, w: 8.4, h: 0.9,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    valign: "middle"
  });

  // Bottom right decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 5.3, w: 1.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: "FFFFFF" }
  });
  slide.addText("45", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-45-preview.pptx" })
    .then(() => console.log("Preview saved: slide-45-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
