// slide-161.js - 核心原则重申
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text-final", index: 161, title: "核心原则重申" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("CORE PRINCIPLE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("一个最基本的设计原则", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 中央大字
  slide.addText("为「日常状态的自己」设计，", {
    x: 0.5, y: 1.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  slide.addText("而不是为「状态最好的那天的自己」设计。", {
    x: 0.5, y: 2.55, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 装饰
  slide.addShape("rect", {
    x: 4.5, y: 3.4, w: 1.0, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 对比
  slide.addText("前者能经得住日常考验。", {
    x: 0.5, y: 3.6, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  slide.addText("后者只在你精力充沛、状态完美的时刻成立。", {
    x: 0.5, y: 4.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 强调
  slide.addShape("rect", {
    x: 1.5, y: 4.55, w: 7, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("能经得住日常考验的任务，才是真正可执行的任务。", {
    x: 1.5, y: 4.55, w: 7, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
