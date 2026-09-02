// slide-23.js - 过渡到模块2
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 23, title: '过渡到 M2' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.4, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("TRANSITION", {
    x: 0.4, y: 0.55, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 6
  });

  // Big question
  slide.addText("\"分饼思维\"和\"把饼做大\"听起来都好", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("但具体怎么做？", {
    x: 0.4, y: 1.85, w: 9.2, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.85, w: 1.5, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Bridge
  slide.addText("把饼做大的核心是：", {
    x: 0.4, y: 3.05, w: 9.2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light
  });
  slide.addText("你必须先理解对方真正想要什么，而不是他嘴上说什么。", {
    x: 0.4, y: 3.45, w: 9.2, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Next module preview
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.4, w: 9.2, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF", width: 0 }
  });
  slide.addText("M2", {
    x: 0.6, y: 4.55, w: 1.0, h: 0.55,
    fontSize: 32, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("下一个模块：立场 vs 利益", {
    x: 1.7, y: 4.55, w: 7.7, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("这听起来简单，做起来非常难——下一模块我们来拆解这个。", {
    x: 1.7, y: 4.9, w: 7.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("23", {
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
  pres.writeFile({ fileName: "slide-23-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
