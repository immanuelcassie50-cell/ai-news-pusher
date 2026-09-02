// slide-16.js - Content: 数字找不到怎么办
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '数字找不到怎么办'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("数字找不到怎么办？", {
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

  // Tip card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 1.8,
    fill: { color: theme.accent }
  });

  slide.addText("你不是在做审计，你是在建立一个「值得被重视」的量级感。", {
    x: 0.8, y: 1.25, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "流失率可以从投诉记录里估，", options: { breakLine: true } },
    { text: "保单价值可以问业务部门，", options: { breakLine: true } },
    { text: "利润率可以保守用15%-20%。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "数字方向对了，就够用。", options: { bold: true } }
  ], {
    x: 0.8, y: 1.8, w: 8.5, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Three tips
  const tips = [
    { label: "流失率", value: "从投诉记录里估" },
    { label: "保单价值", value: "问业务部门" },
    { label: "利润率", value: "保守用15%-20%" }
  ];

  tips.forEach((tip, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.15, w: 2.9, h: 1.0,
      fill: { color: theme.primary }
    });
    slide.addText(tip.label, {
      x: x, y: 3.2, w: 2.9, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "center"
    });
    slide.addText(tip.value, {
      x: x, y: 3.65, w: 2.9, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center"
    });
  });

  // Bottom message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("时薪怎么估？用月薪 ÷ 22天 ÷ 8小时，再乘以1.3（约算社保公积金）。", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };