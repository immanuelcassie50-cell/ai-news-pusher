// slide-01.js - 封面
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "cover", index: 1, title: "封面" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧白色竖排小字
  slide.addText("ACTION PLAN", {
    x: 0.5, y: 0.5, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, charSpacing: 8, align: "left"
  });

  slide.addText("EXECUTION DESIGN", {
    x: 0.5, y: 0.85, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 8, align: "left"
  });

  // 左侧底部装饰线
  slide.addShape("rect", {
    x: 0.5, y: 4.8, w: 0.6, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  slide.addText("行动学习 · 2026", {
    x: 0.5, y: 4.95, w: 2.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "left"
  });

  // 右侧主标题
  slide.addText("行动计划", {
    x: 4.0, y: 1.4, w: 5.7, h: 0.9,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "left"
  });

  slide.addText("执行设计", {
    x: 4.0, y: 2.3, w: 5.7, h: 0.9,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 副标题
  slide.addShape("rect", {
    x: 4.0, y: 3.4, w: 0.3, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("让正确的计划真正发生", {
    x: 4.0, y: 3.55, w: 5.7, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "left"
  });

  // 课程编号
  slide.addText("MODULE 04", {
    x: 4.0, y: 4.5, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 4
  });

  slide.addText("从「应该做」到「会做」", {
    x: 4.0, y: 4.8, w: 5.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "left"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
