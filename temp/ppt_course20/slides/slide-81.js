const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.secondary }
  });

  // Decorative shapes
  slide.addShape(pres.ShapeType.ellipse, {
    x: -1.5, y: 3.5, w: 4, h: 4,
    fill: { color: theme.primary, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8, y: -1, w: 3, h: 3,
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addText("MODULE 7", {
    x: 0.5, y: 1.5, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center", charSpacing: 8
  });

  slide.addText("总结与行动计划", {
    x: 0.5, y: 2.2, w: 9, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 3.6, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("从知道到做到，从学习到应用", {
    x: 0.5, y: 3.9, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("81", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
