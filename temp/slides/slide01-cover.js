const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section indicator bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Section number
  slide.addText("04", {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: false
  });

  // Main title
  slide.addText("聚焦与排序", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("为什么'什么都想做'会让你什么都做不好", {
    x: 0.5, y: 3.2, w: 9, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Bottom accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 2, h: 0.04,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide };
