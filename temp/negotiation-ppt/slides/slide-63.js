// slide-63.js - 过渡到模块4
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 63, title: '过渡到 M4' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.4, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("TRANSITION", {
    x: 0.4, y: 0.55, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 6
  });

  slide.addText("准备已经做完了", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.55,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("坐下来之后，", {
    x: 0.4, y: 1.9, w: 9.2, h: 0.55,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("每一秒都在发生什么？", {
    x: 0.4, y: 2.5, w: 9.2, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.5, w: 1.5, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  slide.addText("模块 4：核心技术", {
    x: 0.4, y: 3.7, w: 9.2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("——锚定 / 让步节奏 / 信息管理 / 价值证明", {
    x: 0.4, y: 4.1, w: 9.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.6, w: 9.2, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF", width: 0 }
  });
  slide.addText("谈判桌上有 4 个核心技术——这些是 M3 准备在现场的\"转化机制\"", {
    x: 0.6, y: 4.6, w: 8.7, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("63", {
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
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
