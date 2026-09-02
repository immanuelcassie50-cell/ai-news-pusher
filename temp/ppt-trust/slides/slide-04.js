function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("翻车烈度公式", {
    x: 0.6, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Main formula - large centered
  slide.addText("翻车烈度 = 触发行为 × 身份权力差 × 社会情绪 × 历史可追溯性", {
    x: 0.3, y: 1.5, w: 9.4, h: 1.2,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Decorative formula symbols
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.5, y: 2.8, w: 1, h: 1,
    fill: { color: theme.accent, transparency: 30 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 3.8, y: 2.9, w: 0.6, h: 0.6,
    fill: { color: theme.light, transparency: 40 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.5, y: 3.0, w: 0.7, h: 0.7,
    fill: { color: theme.secondary, transparency: 50 }
  });

  // Subtitle explanation
  slide.addText("这几个变量是相乘关系——只要有一项趋近于零，事情基本炸不起来", {
    x: 0.5, y: 3.5, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Bottom note bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.6, w: 10, h: 1.025,
    fill: { color: theme.light }
  });

  slide.addText("不是精确公式，是帮建立判断直觉的框架", {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", italic: true
  });

  return slide;
}
module.exports = { createSlide };
