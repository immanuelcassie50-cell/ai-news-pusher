// slide-02.js - Section divider for "开场"
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'section', index: 2, title: '开场' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Big section number
  slide.addText("01", {
    x: 0.6, y: 0.8, w: 3, h: 2.5,
    fontSize: 180, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // Section label
  slide.addText("PART  ONE", {
    x: 4.0, y: 1.6, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, charSpacing: 8
  });

  // Section title
  slide.addText("开场：为什么是谈判", {
    x: 4.0, y: 2.0, w: 5.5, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Description
  slide.addText("这门课要解决什么问题？\n学完后你能带走什么？\n谁应该来学？", {
    x: 4.0, y: 2.85, w: 5.5, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 20
  });

  // Footer gold line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.95, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("02", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
