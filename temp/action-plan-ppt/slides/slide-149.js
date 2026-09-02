// slide-149.js - 对话顺序的逻辑
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text", index: 149, title: "对话顺序的逻辑" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("SEQUENCE / LOGIC", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("三次对话的顺序", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 中央大公式
  slide.addText("清晰度  →  摩擦力  →  触发器", {
    x: 0.5, y: 1.7, w: 9, h: 0.95,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 装饰
  slide.addShape("rect", {
    x: 4.4, y: 2.75, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 为什么是这个顺序
  slide.addShape("rect", {
    x: 0.5, y: 3.05, w: 9, h: 1.95,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.05, w: 0.08, h: 1.95,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("为什么从清晰度开始？", {
    x: 0.8, y: 3.18, w: 8.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("模糊的任务在做摩擦力和触发器分析时无从分析——", {
    x: 0.8, y: 3.6, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("你需要先知道这件事到底要做什么，才能讨论怎么让它更容易发生。", {
    x: 0.8, y: 4.0, w: 8.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, lineSpacing: 20
  });

  // 强调句
  slide.addText("这个顺序是有逻辑的——不是凭感觉。", {
    x: 0.8, y: 4.55, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
