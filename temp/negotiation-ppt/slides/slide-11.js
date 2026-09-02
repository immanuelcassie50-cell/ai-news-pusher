// slide-11.js - Module 1 section divider
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'section', index: 11, title: '模块 1：重新认识谈判' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Big number
  slide.addText("M1", {
    x: 0.6, y: 0.6, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // Module label
  slide.addText("MODULE  ONE", {
    x: 4.0, y: 1.4, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, charSpacing: 8
  });

  // Module title
  slide.addText("重新认识谈判", {
    x: 4.0, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Sub
  slide.addText("拆除三个最常见的谈判误解，建立正确底层观", {
    x: 4.0, y: 2.7, w: 5.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 3.3, w: 1, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Key content
  slide.addText("核心内容：", {
    x: 4.0, y: 3.45, w: 5.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  谈判发生的三个必要条件\n·  关于谈判的五个错误认知\n·  \"分饼\"思维 vs \"把饼做大\"思维\n·  橙子实验（哈佛谈判学经典活动）", {
    x: 4.0, y: 3.75, w: 5.5, h: 1.1,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 18
  });

  // Duration
  slide.addText("学习时长：1.5 - 2 小时（含演练）", {
    x: 0.6, y: 4.95, w: 6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("11", {
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
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
