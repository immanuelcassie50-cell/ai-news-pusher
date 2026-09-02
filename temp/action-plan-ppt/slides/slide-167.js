// slide-167.js - 洞见二
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "insight-big", index: 167, title: "洞见二" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("INSIGHT 02 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 序号大数字
  slide.addText("02", {
    x: 0.5, y: 0.6, w: 2, h: 0.9,
    fontSize: 64, fontFace: "Arial",
    color: theme.light, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 中央大字
  slide.addText("B = MAP，", {
    x: 0.5, y: 1.95, w: 9, h: 0.8,
    fontSize: 42, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("是行为发生的三个必要条件。", {
    x: 0.5, y: 2.8, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  // 装饰
  slide.addShape("rect", {
    x: 4.5, y: 3.6, w: 1.0, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 解释
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 9, h: 1.25,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 0.08, h: 1.25,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("动机是必要的，但不是充分的。", {
    x: 0.8, y: 3.95, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("容易度（A）和提示（P），是计划设计最容易忽视、", {
    x: 0.8, y: 4.3, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("但往往最能提升执行率的两个杠杆。", {
    x: 0.8, y: 4.65, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
