// slide-24.js - Content: 练习3-A目的
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '练习3-A目的'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("练习 3-A：价值损失换算", {
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

  // Purpose card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.2,
    fill: { color: theme.primary }
  });

  slide.addText("目的", {
    x: 0.7, y: 1.2, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("把你浪费清单里最重要的1-2条，翻译成业务语言和数字。", {
    x: 0.7, y: 1.6, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Requirements
  slide.addText("要求", {
    x: 0.5, y: 2.5, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const requirements = [
    "从你的浪费清单里选影响最大的1-2条",
    "选一个最适合的公式，跑一遍计算",
    "数字不用精确，但必须能说清楚每一步是怎么估的"
  ];

  requirements.forEach((req, i) => {
    const y = 2.95 + i * 0.65;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(req, {
      x: 1.2, y: y, w: 8, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };