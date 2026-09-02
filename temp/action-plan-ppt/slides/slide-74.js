// slide-74.js - 深入 P：提示，最被忽视的要素
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "deep-dive", index: 74, title: "深入 P：提示" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("ELEMENT 3 OF 3", {
    x: 0.5, y: 0.3, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 左侧大字
  slide.addText("P", {
    x: 0.5, y: 0.7, w: 3, h: 2.8,
    fontSize: 280, fontFace: "Arial",
    color: theme.ink, bold: true
  });

  slide.addText("Prompt", {
    x: 0.5, y: 3.5, w: 4, h: 0.4,
    fontSize: 22, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("提示", {
    x: 0.5, y: 3.9, w: 4, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 右侧 - 关键认知
  slide.addShape("rect", {
    x: 4.6, y: 0.7, w: 5, h: 0.05,
    fill: { color: theme.ink }, line: { color: theme.ink }
  });
  slide.addText("最被忽视的要素", {
    x: 4.6, y: 0.85, w: 5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("也是最关键的一个", {
    x: 4.6, y: 1.45, w: 5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 反直觉
  slide.addShape("rect", {
    x: 4.6, y: 2.15, w: 5, h: 0.4,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("反直觉：最容易设计错、最不被讨论、却最关键", {
    x: 4.6, y: 2.15, w: 5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center", valign: "middle"
  });

  // 关键事实
  slide.addShape("rect", {
    x: 4.6, y: 2.8, w: 5, h: 1.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });

  slide.addText("Fogg 的观点：", {
    x: 4.8, y: 2.95, w: 4.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("提示 P 实际是最关键的一个", {
    x: 4.8, y: 3.3, w: 4.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 4.8, y: 3.8, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("在行动计划里", {
    x: 4.8, y: 3.9, w: 4.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("几乎所有任务的 P = 人的记忆", {
    x: 4.8, y: 4.2, w: 4.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
