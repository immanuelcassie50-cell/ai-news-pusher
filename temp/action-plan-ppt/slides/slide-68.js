// slide-68.js - 深入 A：容易度，"那个时刻有多容易"
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "deep-dive", index: 68, title: "深入 A：容易度" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("ELEMENT 2 OF 3", {
    x: 0.5, y: 0.3, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 左侧大字
  slide.addText("A", {
    x: 0.5, y: 0.7, w: 3, h: 2.8,
    fontSize: 280, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("Ability", {
    x: 0.5, y: 3.5, w: 4, h: 0.4,
    fontSize: 22, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("容易度", {
    x: 0.5, y: 3.9, w: 4, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 右侧 - 核心定义
  slide.addShape("rect", {
    x: 4.6, y: 0.7, w: 5, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("在那个具体的时刻", {
    x: 4.6, y: 0.85, w: 5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("做这件事有多容易", {
    x: 4.6, y: 1.45, w: 5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 强调关键语境
  slide.addShape("rect", {
    x: 4.6, y: 2.15, w: 5, h: 0.4,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("注意：不是「会不会做」，是「这一刻有多容易」", {
    x: 4.6, y: 2.15, w: 5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center", valign: "middle"
  });

  // 杠杆结论
  slide.addShape("rect", {
    x: 4.6, y: 2.8, w: 5, h: 1.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });

  slide.addText("让任务变更容易", {
    x: 4.8, y: 2.95, w: 4.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("比 提升动机", {
    x: 4.8, y: 3.35, w: 4.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 4.8, y: 3.85, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("更可靠、更持久", {
    x: 4.8, y: 3.95, w: 4.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("A 是最被低估的杠杆", {
    x: 4.8, y: 4.25, w: 4.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
