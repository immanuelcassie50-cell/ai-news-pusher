// slide-04.js - Content: 同一件事，两种说法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '同一件事，两种说法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("同一件事，两种说法", {
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

  // Label A
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.8, h: 0.4,
    fill: { color: theme.secondary }
  });
  slide.addText("说法A", {
    x: 0.5, y: 1.1, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Card A
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("「主管，我们复核环节效率比较低，流程有一些问题，希望能优化一下。」", {
    x: 0.7, y: 1.7, w: 8.6, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Label B
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.9, w: 0.8, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("说法B", {
    x: 0.5, y: 2.9, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Card B
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.4, w: 9, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("「主管，我们复核环节平均需要等3天，目前每月处理200件理赔，处理时间超过5天的案件客户流失率约12%，5天内完成的只有3%。」", {
    x: 0.7, y: 3.5, w: 8.6, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Question
  slide.addText("哪个版本更容易推动老板做决策？", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };