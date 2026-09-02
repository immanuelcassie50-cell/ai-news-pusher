// slide-13.js - Section: 韩红案例
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Section number
  slide.addText("CASE 02", {
    x: 0.6, y: 1.5, w: 3, h: 0.5,
    fontSize: 14,
    fontFace: "Arial",
    color: theme.secondary,
    bold: false,
    charSpacing: 4
  });

  // Main title
  slide.addText("韩红 · 走个面儿", {
    x: 0.6, y: 2.0, w: 8, h: 1.2,
    fontSize: 48,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Subtitle
  slide.addText("位置错配与边界侵越", {
    x: 0.6, y: 3.2, w: 8, h: 0.6,
    fontSize: 22,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: false
  });

  // Bottom decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.2, w: 2.5, h: 0.04,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = { createSlide };
