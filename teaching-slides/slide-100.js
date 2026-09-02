const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("感谢学习，期待同行", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Thank you card - center
  slide.addShape(pres.ShapeType.rect, {
    x: 2.5, y: 1.15, w: 5.0, h: 1.4,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 12, offset: 3, angle: 135, opacity: 0.12 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 2.5, y: 1.15, w: 5.0, h: 0.1,
    fill: { color: theme.accent }
  });

  slide.addText("感谢四天的投入与参与", {
    x: 2.7, y: 1.4, w: 4.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });
  slide.addText("每一位学员都是潜在的催化力量", {
    x: 2.7, y: 1.9, w: 4.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // Call to action
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 2.75, w: 4.4, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("行动号召", {
    x: 0.6, y: 2.8, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });
  slide.addText("立即开始你的第一次催化实践", {
    x: 0.6, y: 3.1, w: 4.0, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff"
  });

  // Contact info
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.75, w: 4.4, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("联系方式", {
    x: 5.4, y: 2.8, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("邮箱：trainer@example.com", {
    x: 5.4, y: 3.1, w: 4.0, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addText("微信群：行动学习学员群", {
    x: 5.4, y: 3.35, w: 4.0, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Blessing section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 3.95, w: 9.2, h: 1.35,
    fill: { color: theme.primary }
  });

  slide.addText("祝福语", {
    x: 0.6, y: 4.0, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 40
  });

  slide.addText("祝各位催化之路越走越宽广", {
    x: 0.6, y: 4.35, w: 8.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  slide.addText("期待在未来的实践中，见证大家的成长与突破", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 20
  });

  // Decorative elements
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3, y: 1.2, w: 0.8, h: 0.8,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.9, y: 1.2, w: 0.6, h: 0.6,
    fill: { color: theme.secondary, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.2, y: 2.5, w: 0.5, h: 0.5,
    fill: { color: theme.primary, transparency: 80 }
  });

  return slide;
}

module.exports = { createSlide };
