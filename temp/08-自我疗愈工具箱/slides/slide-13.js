const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "Module 2 Section Divider",
  type: "section",
  pageNumber: 13
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Large section number - centered
  slide.addText("02", {
    x: 0, y: 1.5, w: 10, h: 1.5,
    fontSize: 120, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Gold accent line under number
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 3.0, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Section title
  slide.addText("身体放松技巧", {
    x: 0, y: 3.2, w: 10, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("5分钟内可完成的身体调节方法", {
    x: 0, y: 4.2, w: 10, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
