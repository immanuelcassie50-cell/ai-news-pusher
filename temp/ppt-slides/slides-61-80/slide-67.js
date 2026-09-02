// slide-67.js - Chapter 7 Divider: 产出收敛
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'divider',
  index: 67,
  title: '产出收敛——从发散到聚焦'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  // Large chapter number
  slide.addText("07", {
    x: 0.6, y: 1.0, w: 2.5, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: theme.light, bold: true
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.5, w: 1.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Chapter title
  slide.addText("产出收敛", {
    x: 0.6, y: 2.7, w: 8, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("从发散到聚焦", {
    x: 0.6, y: 3.55, w: 8, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative elements on right
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 0.8, w: 2.5, h: 2.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 2.5, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 70 }
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.8, w: 10, h: 0.825,
    fill: { color: theme.primary }
  });

  // Page number
  slide.addText("67", {
    x: 9.2, y: 4.95, w: 0.6, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", align: "right"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };