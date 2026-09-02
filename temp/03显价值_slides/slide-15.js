// slide-15.js - Content: 公式三 - 流程断点导致机会成本损失
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '公式三：流程断点 → 机会成本损失'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("公式三：流程断点 → 机会成本损失", {
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
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("什么时候用：流程卡顿不是直接导致客户流失，而是让你错失了本来可以做成的机会——比如业务发展慢了、市场窗口错过了、对手先你一步。", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  // Formula card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("计算逻辑", {
    x: 0.7, y: 2.05, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("被延误的业务量 × 每单位业务的价值贡献 = 机会成本", {
    x: 0.7, y: 2.45, w: 8.6, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Example header
  slide.addText("示例（银行贷款审批慢于竞争对手）", {
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
    { text: "贷款审批平均5天，主要竞争对手平均2天，差了3天。", options: { breakLine: true } },
    { text: "因为审批慢，每月估计有20笔意向客户转投他行。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每笔平均贷款额100万元，贷款利率5%、资金成本3%，净利差2%。", options: { breakLine: true } },
    { text: "每笔年贡献：100万 × 2% = 20,000元/年", options: { color: theme.accent, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "20笔客户流失的年机会成本：20笔 × 20,000元 = 40万元/年", options: { bold: true } }
  ], {
    x: 0.7, y: 3.55, w: 8.6, h: 1.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };