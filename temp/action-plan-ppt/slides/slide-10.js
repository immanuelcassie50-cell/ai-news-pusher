// slide-10.js - 计划的悖论
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-quote", index: 10, title: "计划的悖论" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 背景大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部
  slide.addText("THE PARADOX", {
    x: 0.5, y: 0.4, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 8
  });
  slide.addText("执行悖论", {
    x: 0.5, y: 0.7, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 右上角大数字
  slide.addText("01", {
    x: 8.5, y: 0.2, w: 1.2, h: 1.0,
    fontSize: 80, fontFace: "Arial",
    color: theme.redDeep, bold: true, align: "right"
  });

  // 中央巨型引号
  slide.addText('"', {
    x: 0.4, y: 1.0, w: 1.5, h: 1.5,
    fontSize: 140, fontFace: "Arial",
    color: theme.light, bold: true
  });

  // 主金句 - 拆成两行
  slide.addText("越认真，", {
    x: 1.5, y: 1.8, w: 8, h: 1.0,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("失败得越彻底。", {
    x: 1.5, y: 2.8, w: 8, h: 1.0,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 1.5, y: 4.0, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 解释
  slide.addText("一份完整的计划，会让制定者产生一种\"已经完成了\"的心理满足感——\n完成了想象中的执行，但执行本身还没有发生。\n越完整的计划 = 越多的承诺 + 越高的期望 + 越依赖意志力。", {
    x: 1.5, y: 4.15, w: 8, h: 0.95,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
