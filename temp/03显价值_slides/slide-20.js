// slide-20.js - Content: 翻译②：信息断点 → 人力成本
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '翻译②：信息断点 → 人力成本'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("翻译②：信息断点 → 人力成本", {
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
    x: 0.5, y: 1.1, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 1.8,
    fill: { color: theme.accent }
  });

  slide.addText("计算过程", {
    x: 0.8, y: 1.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText([
    { text: "每周15小时对齐沟通（3人 × 5小时），时薪150元", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "年损失：15小时 × 150元 × 52周 = 117,000元", options: { fontSize: 18, bold: true, color: theme.accent } }
  ], {
    x: 0.8, y: 1.6, w: 8.5, h: 1.1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Additional cost
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.1, w: 9, h: 1.0,
    fill: { color: theme.light }
  });

  slide.addText("此外，沟通对齐失败导致功能上线平均晚7天。", {
    x: 0.7, y: 3.2, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("按产品月活跃用户增长机会测算，每晚1天约损失0.3%的用户增长窗口……", {
    x: 0.7, y: 3.55, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Result box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("翻译结果：年损失约11.7万元 + 机会成本（待量化）", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };