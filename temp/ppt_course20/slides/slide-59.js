const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.light } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 2.0, w: 10, h: 2.2,
    fill: { color: theme.primary, transparency: 15 }
  });
  slide.addText("MODULE 5", {
    x: 0.5, y: 1.5, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", charSpacing: 8
  });
  slide.addText("实战案例工作坊", {
    x: 0.5, y: 2.3, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  slide.addText("用真实案例演练决策框架", {
    x: 0.5, y: 3.5, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.primary }
  });
  slide.addText("59", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
