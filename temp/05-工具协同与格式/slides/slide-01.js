// slide-01.js - Cover Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '第五章：工具协同'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Large decorative circle (top right)
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -1.5, w: 4, h: 4,
    fill: { color: theme.primary, transparency: 10 }
  });

  // Smaller circle
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 3.5, w: 2, h: 2,
    fill: { color: theme.secondary, transparency: 15 }
  });

  // Main title
  slide.addText("第五章", {
    x: 0.8, y: 1.2, w: 6, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  slide.addText("工具协同与格式", {
    x: 0.8, y: 1.8, w: 8, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("一个任务，多个工具如何顺畅流转", {
    x: 0.8, y: 3.2, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.8, w: 3, h: 0.05,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };