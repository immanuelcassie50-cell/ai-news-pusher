// slide-69.js - 描述性语言替代第1页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '描述性语言替代'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("描述性语言替代", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Example card
  const example = {
    before: "你看看你哥哥多懂事",
    after: "我看到你在收拾玩具，很负责"
  };

  // Before card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("Before", {
    x: 0.5, y: 1.2, w: 4.4, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText(example.before, {
    x: 0.7, y: 1.85, w: 4.0, h: 1.2,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Arrow
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.75, y: 2.05, w: 0.5, h: 0.08,
    fill: { color: theme.primary }
  });

  // After card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.2, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.2, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("After", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText(example.after, {
    x: 5.3, y: 1.85, w: 4.0, h: 1.2,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 0.08, h: 1.7,
    fill: { color: theme.primary }
  });
  slide.addText("转变的关键", {
    x: 0.8, y: 3.65, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText([
    { text: "描述行为，而非评价他人", options: { bullet: true, breakLine: true } },
    { text: "关注过程，而非只看重结果", options: { bullet: true, breakLine: true } },
    { text: "用具体事实替代主观判断", options: { bullet: true } }
  ], {
    x: 0.8, y: 4.1, w: 8.5, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
