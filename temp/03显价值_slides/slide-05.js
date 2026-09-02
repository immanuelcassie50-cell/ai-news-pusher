// slide-05.js - Content: 说法B完整版
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '说法B完整版'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("说法B：业务语言", {
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

  // Main content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 2.2,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "按每件保单年均保费8,000元、承保利润率20%计算，", options: { breakLine: true } },
    { text: "每件流失价值约1,600元，", options: { bold: true, color: theme.accent, breakLine: true } },
    { text: "每月因此额外流失约18件，年损失约35万元。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "如果复核时间压到1天，理赔周期从7天降到5天，这35万里保守能挽回一半以上。", options: {} }
  ], {
    x: 0.8, y: 1.3, w: 8.5, h: 1.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Question box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });

  slide.addText("你觉得哪个版本更可能推动老板做决策？", {
    x: 0.7, y: 3.6, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };