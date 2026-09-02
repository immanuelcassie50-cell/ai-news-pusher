/**
 * Slide 03 - Module 1 Section Divider: 认知基础
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Left accent block
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Section number - large
  slide.addText("01", {
    x: 0.6, y: 1.2, w: 3, h: 1.5,
    fontSize: 120, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // Title
  slide.addText("认知基础", {
    x: 0.6, y: 2.7, w: 8, h: 1,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("为什么日常心理保养很重要", {
    x: 0.6, y: 3.7, w: 8, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.5, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Page number
  slide.addText("03", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", align: "center"
  });
}

const slideConfig = {
  type: "section-divider",
  module: "Module 1",
  title: "认知基础",
  pageNumber: 3
};

module.exports = { createSlide, slideConfig };
