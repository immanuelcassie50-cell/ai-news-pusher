const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section number badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("03", {
    x: 0.4, y: 0.35, w: 0.9, h: 0.5,
    fontSize: 20, fontFace: "Georgia", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  // Main title
  slide.addText("斯密遗产在当代", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei", color: theme.primary,
    bold: true, align: "center"
  });

  // Subtitle
  slide.addText("制度经济学 · 行为经济学 · 信息经济学", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary,
    align: "center"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.85, w: 3, h: 0.06,
    fill: { color: theme.accent }
  });

  // Module indicator
  slide.addText("模块三", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.light,
    align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
