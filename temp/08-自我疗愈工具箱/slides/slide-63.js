/**
 * Slide 63 - Module 5 Section Divider: 情绪释放书写
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText("05", {
    x: 0.8, y: 1.5, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 3.3, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("情绪释放书写", {
    x: 0.8, y: 3.6, w: 8, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("用笔尖疗愈心灵", {
    x: 0.8, y: 4.5, w: 8, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  // Decorative element - right side vertical bar
  slide.addShape(pres.ShapeType.rect, {
    x: 9.5, y: 0, w: 0.5, h: 5.625,
    fill: { color: theme.accent, transparency: 30 }
  });

  // Small decorative squares
  slide.addShape(pres.ShapeType.rect, {
    x: 8.8, y: 1.2, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 8.3, y: 1.8, w: 0.3, h: 0.3,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Page number
  slide.addText("63", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", align: "center"
  });
}

const slideConfig = {
  type: "section-divider",
  module: "Module 5",
  title: "情绪释放书写",
  pageNumber: 63
};

module.exports = { createSlide, slideConfig };
