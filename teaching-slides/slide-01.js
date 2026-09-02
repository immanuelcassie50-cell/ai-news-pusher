const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Left red decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: "100%",
    fill: { color: theme.accent }
  });

  // Top right geometric decoration - large circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.5, y: -1.5, w: 4, h: 4,
    fill: { color: theme.light }
  });

  // Top right geometric decoration - small circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.8, y: 0.8, w: 1.2, h: 1.2,
    fill: { color: theme.accent }
  });

  // Bottom right geometric decoration
  slide.addShape(pres.ShapeType.rect, {
    x: 8.5, y: 4.5, w: 2, h: 0.08,
    fill: { color: theme.secondary }
  });

  // Main title
  slide.addText("行动学习催化师认证", {
    x: 0.8, y: 1.8, w: 8, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle with accent underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 3.1, w: 3.5, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("燎原催化导师认证营", {
    x: 0.8, y: 3.3, w: 6, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom text
  slide.addText("四天深度工作坊", {
    x: 0.8, y: 4.8, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
