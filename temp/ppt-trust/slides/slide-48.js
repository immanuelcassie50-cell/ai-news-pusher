// slide-48.js - END
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("谢谢", {
    x: 0.5, y: 1.6, w: 9, h: 1.2,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 2.9, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("信任账本 · 高曝光时代的个人信任经营", {
    x: 0.5, y: 3.2, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Bottom info bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.8, w: 10, h: 0.825,
    fill: { color: theme.bg }
  });

  // Bottom info text
  slide.addText("案例数5+  |  信任层级5层  |  塌陷机制4类  |  可用工具4件", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  return slide;
}

module.exports = { createSlide };
