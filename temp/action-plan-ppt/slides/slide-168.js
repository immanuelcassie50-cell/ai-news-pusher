// slide-168.js - 洞见三
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "insight-big", index: 168, title: "洞见三" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("INSIGHT 03 / 03", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 序号大数字
  slide.addText("03", {
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
  slide.addText("顺人性，", {
    x: 0.5, y: 1.95, w: 9, h: 0.85,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("而不是对抗人性。", {
    x: 0.5, y: 2.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
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

  slide.addText("行为设计的本质，", {
    x: 0.8, y: 4.0, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("不是让人更努力，", {
    x: 0.8, y: 4.35, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("而是让环境和设计与人的真实行为规律对齐。", {
    x: 0.8, y: 4.7, w: 8.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
