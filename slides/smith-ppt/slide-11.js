const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText("02", {
    x: 0.6, y: 1.2, w: 3, h: 2,
    fontSize: 120, fontFace: "Georgia",
    color: theme.bg, bold: true,
    transparency: 20
  });

  // Section title
  slide.addText("从斯密到奥地利学派", {
    x: 0.6, y: 2.4, w: 8.5, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true
  });

  // Subtitle line
  slide.addText("The Austrian School", {
    x: 0.6, y: 3.5, w: 5, h: 0.5,
    fontSize: 20, fontFace: "Georgia",
    color: theme.light, italic: true
  });

  // Decorative accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
