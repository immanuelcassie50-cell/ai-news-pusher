// slide-14.js - Content: 公式二 - 重复返工导致人力成本损失
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '公式二：重复返工 → 人力成本损失'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("公式二：重复返工 → 人力成本损失", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // When to use
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("什么时候用：大量重复操作、无效沟通、返工重做，消耗的主要是人工时间。", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Formula card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.85, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("计算逻辑", {
    x: 0.7, y: 1.95, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("浪费时间（小时） × 人员时薪 × 频率 = 成本损失", {
    x: 0.7, y: 2.35, w: 8.6, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Example header
  slide.addText("示例（研发需求确认反复）", {
    x: 0.5, y: 2.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Example content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.35, w: 9, h: 1.75,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText([
    { text: "每个需求平均确认3轮，实际只有1轮有效，多余2轮是返工。", options: { breakLine: true } },
    { text: "每轮涉及PM+开发+业务共3人，每轮约4小时（半天）。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每个需求返工成本：", options: { bold: true, breakLine: true } },
    { text: "2轮 × 3人 × 4小时 = 24人时 × 150元/时 = 3,600元", options: { color: theme.accent, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每月30个需求：3,600元 × 30 = 108,000元/月　　年损失：约130万元", options: { bold: true } }
  ], {
    x: 0.7, y: 3.45, w: 8.6, h: 1.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };