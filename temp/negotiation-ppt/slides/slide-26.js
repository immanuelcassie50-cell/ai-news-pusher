// slide-26.js - 立场 vs 利益 核心区分
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 26, title: '立场 vs 利益' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 核心区分", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("\"要什么\" vs \"为什么想要\"", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("谈判中最重要的认知区分——99% 的零和对立都源于忽视这个区分", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Two-column comparison
  // LEFT - Position
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 4.5, h: 3.05,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 4.5, h: 0.5,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("立场 (Position)", {
    x: 0.55, y: 1.75, w: 4.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"我想要什么\"", {
    x: 0.55, y: 2.3, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true, bold: true
  });
  slide.addText("·  具体的需求或方案\n·  摆到桌面上可观察\n·  通常是\"我方\"和\"他方\"的对立\n·  往往以\"非此即彼\"的方式存在\n·  满足一个意味着另一个被牺牲\n·  容易陷入\"谁更对\"的争论", {
    x: 0.55, y: 2.7, w: 4.2, h: 2.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 18
  });

  // RIGHT - Interest
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.75, w: 4.5, h: 3.05,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.75, w: 4.5, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("利益 (Interest)", {
    x: 5.25, y: 1.75, w: 4.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("\"我为什么想要\"", {
    x: 5.25, y: 2.3, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });
  slide.addText("·  立场背后的需求 / 担忧 / 价值\n·  隐藏在立场之后，需要提问挖掘\n·  双方常发现彼此利益有交集\n·  同一利益可由多种立场满足\n·  利益常常是多维的、不对立的\n·  共同解往往从利益层面生长出来", {
    x: 5.25, y: 2.7, w: 4.2, h: 2.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 18
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("立场是\"问题的表面\"，利益是\"问题的根\"——把饼做大，从挖根开始。", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("26", {
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
  pres.writeFile({ fileName: "slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
