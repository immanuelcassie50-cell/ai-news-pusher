// slide-07.js - 章节扉页
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "divider", index: 7, title: "开场" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右上深红色大色块
  slide.addShape("rect", {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左上小字
  slide.addText("PART", {
    x: 0.5, y: 1.0, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 8, bold: true
  });

  // 大数字
  slide.addText("00", {
    x: 0.5, y: 1.4, w: 3, h: 1.5,
    fontSize: 120, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  // 章节标题
  slide.addText("开场", {
    x: 0.5, y: 3.1, w: 5.5, h: 0.7,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("为什么越认真的计划，有时越难落地", {
    x: 0.5, y: 3.8, w: 5.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 右侧白色文字
  slide.addText("OPENING", {
    x: 6.8, y: 0.5, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 8, bold: true
  });

  slide.addText("从「执行悖论」开始", {
    x: 6.8, y: 4.5, w: 3, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // 底部小标识
  addFooterMark(slide, theme);

  return slide;
}

module.exports = { createSlide, slideConfig };
