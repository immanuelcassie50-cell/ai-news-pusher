// slide-01.js - Cover
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'cover', index: 1, title: '谈判——在利益的博弈中找到双赢的路' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative gold vertical line on left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 0.08, h: 3.2,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Series tag
  slide.addText("五维表达 · 从说清楚到说到位", {
    x: 0.8, y: 1.15, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, charSpacing: 6
  });

  // Main title (large)
  slide.addText("谈  判", {
    x: 0.8, y: 1.55, w: 8.5, h: 1.0,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 8
  });

  // Subtitle
  slide.addText("在利益的博弈中找到双赢的路", {
    x: 0.8, y: 2.7, w: 8.5, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // English subtitle
  slide.addText("Negotiation: Finding Win-Win in the Game of Interests", {
    x: 0.8, y: 3.35, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Arial",
    color: theme.accent, italic: true
  });

  // Divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.0, w: 2.0, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // Footer info
  slide.addText([
    { text: "2 天工作坊  ·  14-16 小时  ·  七个模块  ·  九大情境", options: { color: "FFFFFF", fontSize: 13, fontFace: "Microsoft YaHei" } }
  ], { x: 0.8, y: 4.15, w: 8.5, h: 0.4 });

  slide.addText("讲师：罗宏伟  |  五维表达 · 谈判", {
    x: 0.8, y: 4.6, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Bottom right corner: series mark
  slide.addText("M3", {
    x: 9.0, y: 5.05, w: 0.8, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true, align: "right"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
