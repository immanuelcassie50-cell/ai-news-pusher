// slide-04.js - Chapter page template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '前言'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.1, h: 5.625,
    fill: { color: theme.primary }
  });

  // Chapter header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 0.3, w: 1.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("前言", {
    x: 0.3, y: 0.3, w: 1.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Duration
  slide.addText("30分钟", {
    x: 1.9, y: 0.35, w: 0.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Title
  slide.addText("信任是培训师的生死之脉", {
    x: 0.3, y: 0.95, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Key quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.65, w: 9.4, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("流量是别人定义的规则，你玩得再好也只是一次陪跑；信任是你自己一块一块垒起来的，垒得慢，但垒起来的部分谁也拿不走。", {
    x: 0.5, y: 1.7, w: 9, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Left column - Core concepts
  slide.addText("核心概念", {
    x: 0.3, y: 2.5, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "流量 vs 信任：两个完全不同的问题", options: { bullet: true, breakLine: true } },
    { text: "信任账户：每一次交互都是存/取款", options: { bullet: true, breakLine: true } },
    { text: "托付层面 vs 认知层面", options: { bullet: true } }
  ], {
    x: 0.3, y: 2.9, w: 4.5, h: 1.2,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right column - Tools
  slide.addText("工具表单", {
    x: 5.2, y: 2.5, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "信任资产盘点表", options: { bullet: true, breakLine: true } },
    { text: "存/取款自检清单", options: { bullet: true } }
  ], {
    x: 5.2, y: 2.9, w: 4.5, h: 1.2,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Notes area
  slide.addText("学习笔记", {
    x: 0.3, y: 4.2, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 4.55, w: 9.4, h: 0.03,
    fill: { color: theme.primary }
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "424242",
    accent: "C62828",
    light: "FFCDD2",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
