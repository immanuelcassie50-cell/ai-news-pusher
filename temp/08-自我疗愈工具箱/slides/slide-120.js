/**
 * Slide 120 - 结束页/感谢页
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Large decorative circle (top right)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.5, y: -1.5, w: 4, h: 4,
    fill: { color: theme.primary, transparency: 15 }
  });

  // Course name
  slide.addText("自我疗愈工具箱", {
    x: 0.8, y: 1.2, w: 8, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Main title
  slide.addText("感谢学习", {
    x: 0.8, y: 1.9, w: 8, h: 1.2,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Gold accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 3.1, w: 2.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Inspirational message
  slide.addText("愿这些工具帮助你", {
    x: 0.8, y: 3.35, w: 8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });
  slide.addText("在生活的每一个时刻，", {
    x: 0.8, y: 3.8, w: 8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });
  slide.addText("找到内心的平静与力量。", {
    x: 0.8, y: 4.2, w: 8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.2, w: 10, h: 0.425,
    fill: { color: theme.primary }
  });

  // Gold accent on bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 5.2, w: 1.5, h: 0.425,
    fill: { color: theme.accent }
  });

  // Page number
  slide.addText("120", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", align: "center"
  });
}

const slideConfig = {
  type: "closing",
  module: "Closing",
  title: "感谢学习",
  pageNumber: 120
};

module.exports = { createSlide, slideConfig };
