// slide-163.js - 核心思维转变
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text-shift", index: 163, title: "核心思维转变" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("KEY SHIFT", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("一个最重要的思维转变", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 上半部分 - 旧问题
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.08, h: 1.0,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  slide.addText("大多数人问的问题：", {
    x: 0.8, y: 1.95, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("「这些人为什么没有执行？」", {
    x: 0.8, y: 2.25, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 箭头
  slide.addText("↓", {
    x: 4.5, y: 2.85, w: 1, h: 0.4,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  // 下半部分 - 新问题
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 0.08, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("执行设计问的问题：", {
    x: 0.8, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("「这个计划在设计上，是否为执行者提供了足够的支撑？」", {
    x: 0.8, y: 3.7, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 0.08, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("从「人的问题」转向「设计的问题」——", {
    x: 0.8, y: 4.6, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("你能做的干预就多了——因为设计可以改变，而人的意志力往往很难短期改变。", {
    x: 0.8, y: 4.9, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
