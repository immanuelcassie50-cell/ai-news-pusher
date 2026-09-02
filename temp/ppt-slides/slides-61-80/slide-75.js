// slide-75.js - Chapter 8 Divider: 共识与跟进
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'divider',
  index: 75,
  title: '共识与跟进——从现场到落地'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Right accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.88, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Large chapter number on right
  slide.addText("08", {
    x: 6.5, y: 1.0, w: 3, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: theme.light, bold: true, align: "right"
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.9, y: 2.5, w: 1.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Chapter title
  slide.addText("共识与跟进", {
    x: 4.5, y: 2.7, w: 5, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "right"
  });

  // Subtitle
  slide.addText("从现场到落地", {
    x: 4.5, y: 3.55, w: 5, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "right"
  });

  // Decorative elements on left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 2.0, w: 2.0, h: 2.0,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 3.2, w: 1.2, h: 1.2,
    fill: { color: theme.primary, transparency: 80 }
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.8, w: 10, h: 0.825,
    fill: { color: theme.primary }
  });

  // Page number
  slide.addText("75", {
    x: 0.3, y: 4.95, w: 0.6, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };