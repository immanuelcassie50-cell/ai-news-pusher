const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Dark background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.primary }
  });

  // Top red accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.1,
    fill: { color: theme.accent }
  });

  // Large "01" number
  slide.addText("01", {
    x: 0.8, y: 1.2, w: 3, h: 1.8,
    fontSize: 120, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // Red decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 3.1, w: 2.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("认识催化官身份与边界", {
    x: 0.8, y: 3.4, w: 8, h: 0.9,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  // Subtitle
  slide.addText("第一天", {
    x: 0.8, y: 4.4, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right side geometric decoration
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.8, y: 1.5, w: 2.5, h: 2.5,
    fill: { color: theme.secondary, transparency: 70 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.5, y: 3.2, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 50 }
  });

  return slide;
}

module.exports = { createSlide };
