const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large decorative circle - top right
  slide.addShape(pres.ShapeType.ellipse, {
    x: 6.5, y: -2, w: 5, h: 5,
    fill: { color: theme.light }
  });

  // Medium decorative circle - bottom left
  slide.addShape(pres.ShapeType.ellipse, {
    x: -1.5, y: 3.5, w: 3.5, h: 3.5,
    fill: { color: theme.accent, transparency: 15 }
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: "100%",
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("行动学习催化师认证", {
    x: 0.8, y: 1.6, w: 8.5, h: 1.0,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 2.7, w: 3.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("感谢学习", {
    x: 0.8, y: 2.95, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Contact info area
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 4.0, w: 4.5, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("联系信息", {
    x: 1.0, y: 4.15, w: 4.1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("邮箱: info@action-learning.cn", {
    x: 1.0, y: 4.5, w: 4.1, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("电话: 400-XXX-XXXX", {
    x: 1.0, y: 4.75, w: 4.1, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // QR code placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8, y: 3.9, w: 1.5, h: 1.5,
    fill: { color: "ffffff" },
    line: { color: theme.secondary, width: 1 }
  });

  slide.addText("二维码", {
    x: 5.8, y: 4.4, w: 1.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Bottom decorative elements
  slide.addShape(pres.ShapeType.rect, {
    x: 8.0, y: 5.2, w: 2, h: 0.08,
    fill: { color: theme.secondary }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.6, y: 4.9, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
