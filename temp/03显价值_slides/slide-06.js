// slide-06.js - Content: 两种语言的区别
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '两种语言的区别'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("两种语言的本质差别", {
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

  // Card 1 - 感受语言
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.25, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.25, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("感受语言", {
    x: 0.5, y: 1.1, w: 4.25, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("「我们有问题，需要优化」\n停留在感受层面。", {
    x: 0.7, y: 1.65, w: 3.85, h: 0.85,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Card 2 - 业务语言
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 1.1, w: 4.25, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 1.1, w: 4.25, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("业务语言", {
    x: 5.25, y: 1.1, w: 4.25, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("「这个问题值多少钱，改了能赚回多少」\n变成可处理的信息。", {
    x: 5.45, y: 1.65, w: 3.85, h: 0.85,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.9, w: 9, h: 1.8,
    fill: { color: theme.primary }
  });

  slide.addText("管理层做决策靠数字。", {
    x: 0.7, y: 3.1, w: 8.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("你把问题描述成感受，它就停留在感受层面；\n你把问题描述成数字，它就变成了可以被处理的信息。", {
    x: 0.7, y: 3.65, w: 8.6, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  return slide;
}

module.exports = { createSlide, slideConfig };