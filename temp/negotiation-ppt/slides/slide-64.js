// slide-64.js - M4 章节封面
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'section', index: 64, title: '模块 4：核心技术' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText("M4", {
    x: 0.6, y: 0.6, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("MODULE  FOUR", {
    x: 4.0, y: 1.4, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, charSpacing: 8
  });

  slide.addText("核心技术", {
    x: 4.0, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("锚定 · 让步 · 信息 · 价值", {
    x: 4.0, y: 2.7, w: 5.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 3.3, w: 1, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  slide.addText("核心内容：", {
    x: 4.0, y: 3.45, w: 5.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  锚定效应：先出价的人定规则\n·  让步节奏：大小、快慢、\"非货币\"让步\n·  信息管理：说什么、藏什么、怎么藏\n·  价值证明：让对方相信你的方案值这个价\n·  5 个核心动作：从开场到收尾的完整流程", {
    x: 4.0, y: 3.75, w: 5.5, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 16
  });

  slide.addText("学习时长：2.5-3 小时", {
    x: 0.6, y: 4.95, w: 6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
