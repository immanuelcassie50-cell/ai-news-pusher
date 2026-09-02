// slide-63.js - 深入 M：动机，真实但不可靠
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "deep-dive", index: 63, title: "深入 M：动机" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("ELEMENT 1 OF 3", {
    x: 0.5, y: 0.3, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 左侧大字
  slide.addText("M", {
    x: 0.5, y: 0.7, w: 3, h: 2.8,
    fontSize: 280, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  slide.addText("Motivation", {
    x: 0.5, y: 3.5, w: 4, h: 0.4,
    fontSize: 22, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("动机", {
    x: 0.5, y: 3.9, w: 4, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 右侧 - 关键认知
  slide.addShape("rect", {
    x: 4.6, y: 0.7, w: 5, h: 0.05,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("真实，但不可靠", {
    x: 4.6, y: 0.85, w: 5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 解释
  slide.addText("动机确实影响行为", {
    x: 4.6, y: 1.65, w: 5, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("当一个人对一件事高度在乎，他确实会克服更多阻碍去完成它", {
    x: 4.6, y: 2.0, w: 5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 核心问题
  slide.addShape("rect", {
    x: 4.6, y: 2.7, w: 5, h: 2.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });

  slide.addText("但动机有一个根本特征：", {
    x: 4.8, y: 2.85, w: 4.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("它是波动的", {
    x: 4.8, y: 3.2, w: 4.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 4.8, y: 3.75, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("今天 9 分，明天 7 分，后天可能 4 分", {
    x: 4.8, y: 3.85, w: 4.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("这不是态度问题，是正常的人类状态", {
    x: 4.8, y: 4.15, w: 4.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("下一页：用一张图看动机怎么波动", {
    x: 4.8, y: 4.4, w: 4.6, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
