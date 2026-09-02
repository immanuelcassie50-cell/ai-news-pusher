// slide-166.js - 洞见一
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "insight-big", index: 166, title: "洞见一" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("INSIGHT 01 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 序号大数字
  slide.addText("01", {
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
  slide.addText("正确的计划和可执行的计划，", {
    x: 0.5, y: 1.95, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  slide.addText("是两件不同的事。", {
    x: 0.5, y: 2.7, w: 9, h: 0.8,
    fontSize: 38, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 装饰
  slide.addShape("rect", {
    x: 4.5, y: 3.65, w: 1.0, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 解释
  slide.addShape("rect", {
    x: 0.5, y: 3.9, w: 9, h: 1.2,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.9, w: 0.08, h: 1.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("一份正确的计划解决「做什么」和「为什么」的问题；", {
    x: 0.8, y: 4.0, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("一份可执行的计划，还解决「在现实中怎么让它真的发生」的问题。", {
    x: 0.8, y: 4.4, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("—— 前者是逻辑问题，后者是设计问题。", {
    x: 0.8, y: 4.75, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
