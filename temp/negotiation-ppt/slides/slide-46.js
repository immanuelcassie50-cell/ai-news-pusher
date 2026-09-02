// slide-46.js - BATNA 概念
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 46, title: 'BATNA 概念' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · BATNA：最佳替代方案", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("Best Alternative to a Negotiated Agreement", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, italic: true, bold: true
  });
  slide.addText("\"如果这次谈崩了，我还有什么别的选择？\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Definition card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.95, w: 9.2, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addText("定义", {
    x: 0.55, y: 2.0, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("如果和这个人谈不成，我能去的下一个最好选择。它是你议价能力的真正来源——比\"态度\"或\"气场\"都管用。", {
    x: 0.55, y: 2.3, w: 9, h: 0.5,
    fontSize: 11.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 16
  });

  // Comparison: weak BATNA vs strong BATNA
  // Weak
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.95, w: 4.5, h: 1.95,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.95, w: 4.5, h: 0.5,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("弱 BATNA", {
    x: 0.55, y: 2.95, w: 4.2, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("你只有这一个选择", {
    x: 0.55, y: 3.55, w: 4.2, h: 0.3,
    fontSize: 11.5, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("·  对方知道你离不开他\n·  议价能力在对方\n·  你容易接受不利条款\n·  心态：\"求他\"", {
    x: 0.55, y: 3.9, w: 4.2, h: 1.0,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 16
  });

  // Strong
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.95, w: 4.5, h: 1.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.95, w: 4.5, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("强 BATNA", {
    x: 5.25, y: 2.95, w: 4.2, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("你有几个真实选择", {
    x: 5.25, y: 3.55, w: 4.2, h: 0.3,
    fontSize: 11.5, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  对方知道你不缺他\n·  议价能力在你\n·  你能坚持底线\n·  心态：\"我选择他\"", {
    x: 5.25, y: 3.9, w: 4.2, h: 1.0,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 16
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("BATNA 不是\"心理暗示\"——是真实存在的选项，需要在谈判前就准备好", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("46", {
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
  pres.writeFile({ fileName: "slide-46-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
