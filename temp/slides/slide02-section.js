const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.08, h: 5.63,
    fill: { color: theme.primary }
  });

  // Section label
  slide.addText("SECTION 04", {
    x: 0.5, y: 2.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: false,
    charSpacing: 4
  });

  // Section title
  slide.addText("聚焦与排序", {
    x: 0.5, y: 2.5, w: 9, h: 1.0,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative shape
  slide.addShape(pres.ShapeType.roundRect, {
    x: 8.5, y: 4.2, w: 1.2, h: 1.2,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.1
  });

  return slide;
}

module.exports = { createSlide };
