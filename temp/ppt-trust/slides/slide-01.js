function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("信任账本", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Subtitle
  slide.addText("高曝光时代的个人信任经营", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Decorative line under subtitle
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 3.8, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Bottom info bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.8, w: 10, h: 0.825,
    fill: { color: theme.primary }
  });

  // Bottom info text
  slide.addText("案例数5+  |  信任层级5层  |  塌陷机制4类  |  可用工具4件", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  return slide;
}
module.exports = { createSlide };
