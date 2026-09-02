// slide-13.js - Content: 公式一 - 时间延误导致客户流失
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '公式一：时间延误 → 客户流失损失'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("公式一：时间延误 → 客户流失损失", {
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
  slide.addText("什么时候用：服务流程里的等待和延迟，直接影响客户体验，导致客户流失或放弃。", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Formula card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.85, w: 9, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("计算逻辑", {
    x: 0.7, y: 1.95, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("流程超时 → 流失率上升 → 月流失件数 × 每件价值 = 月损失 × 12 = 年损失", {
    x: 0.7, y: 2.35, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Example header
  slide.addText("示例（保险理赔复核等待）", {
    x: 0.5, y: 3.05, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Example content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.45, w: 9, h: 1.65,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText([
    { text: "处理时间超过5天，流失率约12%；5天内完成，流失率约3%。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每月200件中，约140件会超过5天，其中额外流失：", options: { breakLine: true } },
    { text: "140件 × 9% = 13件/月", options: { bold: true, color: theme.accent, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每件保单年均保费8,000元，承保利润率20%，每件价值 = 1,600元", options: { breakLine: true } },
    { text: "月损失：13件 × 1,600元 = 20,800元　　年损失：约25万元", options: { bold: true } }
  ], {
    x: 0.7, y: 3.55, w: 8.6, h: 1.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };