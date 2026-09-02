// slide-22.js - Content: 看完案例，回答这两个问题
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '看完案例，回答这两个问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("看完案例，回答这两个问题", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Question 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 1.35, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.7, y: 1.35, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("这段汇报和「我们流程有问题」相比，差异在哪里？", {
    x: 1.4, y: 1.4, w: 7.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.4, y: 2.0, w: 7.8, h: 0.85,
    fill: { color: theme.light }
  });
  slide.addText("你的想法：", {
    x: 1.6, y: 2.1, w: 7.4, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Question 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.35, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 0.7, y: 3.35, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("你的浪费清单里，哪一条最适合用以上三个公式之一换算？", {
    x: 1.4, y: 3.4, w: 7.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.4, y: 4.0, w: 7.8, h: 0.85,
    fill: { color: theme.light }
  });
  slide.addText("你的想法：", {
    x: 1.6, y: 4.1, w: 7.4, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };