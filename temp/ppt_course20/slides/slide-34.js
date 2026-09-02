const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 2.2, w: 10, h: 1.2,
    fill: { color: theme.secondary, transparency: 30 }
  });
  slide.addText("MODULE 3", {
    x: 0.5, y: 1.6, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center", charSpacing: 8
  });
  slide.addText("锚定你的决策框架", {
    x: 0.5, y: 2.35, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addText("建立你的育儿决策锚点系统", {
    x: 0.5, y: 3.6, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("34", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
