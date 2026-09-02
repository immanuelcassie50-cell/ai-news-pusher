// slide-97.js - Chapter 14 Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 97,
  title: 'AI时代'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative accent bar on left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Chapter number - large and prominent
  slide.addText("第十四章", {
    x: 0.6, y: 1.5, w: 8.8, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Main title - AI时代
  slide.addText("AI时代", {
    x: 0.6, y: 2.2, w: 8.8, h: 1.2,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("职业不会消失，会重新分层", {
    x: 0.6, y: 3.5, w: 8.8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Decorative line under subtitle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-97-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
