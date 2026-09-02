/**
 * Slide 95 - Module 7 Section Divider: 每日保养计划
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Full-width primary color block on left
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 3.8, h: 5.625,
    fill: { color: theme.primary }
  });

  // Section number
  slide.addText("07", {
    x: 0.4, y: 1.5, w: 3, h: 1.2,
    fontSize: 72, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Decorative line under number
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 2.7, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Module label
  slide.addText("MODULE 7", {
    x: 0.4, y: 2.9, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle",
    charSpacing: 4
  });

  // Main title on right
  slide.addText("每日保养计划", {
    x: 4.2, y: 1.8, w: 5.5, h: 1,
    fontSize: 42, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 4.2, y: 2.8, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("制定适合你的可持续方案", {
    x: 4.2, y: 3.1, w: 5.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("95", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "section-divider",
  module: "Module 7",
  title: "每日保养计划",
  pageNumber: 95
};

module.exports = { createSlide, slideConfig };
