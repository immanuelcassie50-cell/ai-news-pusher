// slide-19.js - Content: 翻译①：返工 → 人力成本
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '翻译①：返工 → 人力成本'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("翻译①：返工 → 人力成本", {
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

  // Calculation card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 2.4,
    fill: { color: theme.accent }
  });

  slide.addText("计算过程", {
    x: 0.8, y: 1.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText([
    { text: "每需求多确认2轮 × 3人 × 4小时 = 24人时，时薪150元", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每需求返工成本：", options: { breakLine: true } },
    { text: "24 × 150 = 3,600元", options: { fontSize: 20, bold: true, color: theme.accent, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每月30个需求：", options: { breakLine: true } },
    { text: "3,600 × 30 = 108,000元/月", options: { fontSize: 18, bold: true, color: theme.primary } }
  ], {
    x: 0.8, y: 1.65, w: 8.5, h: 1.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Result box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.7, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("翻译结果：年损失约130万元", {
    x: 0.7, y: 3.8, w: 8.6, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Note
  slide.addText("每月30个需求，每需求返工成本3,600元，月损失108,000元，年损失约130万元", {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };