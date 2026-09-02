const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "Module 3 Section Divider - 正念微练习",
  type: "section-divider",
  pageNumber: 33
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Large left red accent block
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }
  });

  // Section number "03" - large display
  slide.addText("03", {
    x: 0.4, y: 1.5, w: 2.7, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Gold accent line under number
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 3.4, w: 1.9, h: 0.06,
    fill: { color: theme.accent }
  });

  // Module label
  slide.addText("MODULE 3", {
    x: 0.4, y: 3.6, w: 2.7, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle",
    charSpacing: 4
  });

  // Main title on right
  slide.addText("正念微练习", {
    x: 4, y: 1.8, w: 5.5, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 3.0, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("5分钟内可完成的注意力训练", {
    x: 4, y: 3.2, w: 5.5, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 5.35, w: 6.5, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("33", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
