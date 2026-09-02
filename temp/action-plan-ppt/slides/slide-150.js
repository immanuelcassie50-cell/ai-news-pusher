// slide-150.js - 全局负荷提醒
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text-warning", index: 150, title: "全局负荷提醒" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("OVERALL LOAD / WARNING", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("一个全局的提醒", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 大字警示
  slide.addText("你的计划整体上", {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  slide.addText("是否超载了？", {
    x: 0.5, y: 2.25, w: 9, h: 1.1,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 说明
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 1.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 0.08, h: 1.4,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("一个超载的计划，即使每条任务都被单独设计得很好，", {
    x: 0.8, y: 3.75, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("也仍然会失败——", {
    x: 0.8, y: 4.1, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("因为执行所有任务所需要的总时间和精力，超出了负责人实际可以投入的上限。", {
    x: 0.8, y: 4.45, w: 8.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
