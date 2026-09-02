// slide-38.js - Content: AI帮你做价值翻译
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: 'AI帮你做价值翻译'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("AI帮你做价值翻译", {
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

  // Prompt template
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("提示词模板", {
    x: 0.7, y: 1.2, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 1.6, w: 8.5, h: 2.5,
    fill: { color: theme.light }
  });

  slide.addText([
    { text: "请帮我把以下浪费现象翻译成业务语言：", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "【浪费描述】", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "请使用以下公式之一进行量化：", options: { breakLine: true } },
    { text: "1. 时间延误→客户流失损失", options: { breakLine: true } },
    { text: "2. 重复/返工→人力成本损失", options: { breakLine: true } },
    { text: "3. 流程断点→机会成本损失", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "请给出计算过程和年度损失估算。", options: {} }
  ], {
    x: 0.9, y: 1.7, w: 8.1, h: 2.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Note
  slide.addText("配合练习3-A和3-B使用效果更佳", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };