// slide-05.js - Chapter 1
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '第一章'
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
  slide.addText("第一章", {
    x: 0.3, y: 0.3, w: 1.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Duration
  slide.addText("60分钟", {
    x: 1.9, y: 0.35, w: 0.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Title
  slide.addText("流量是别人的规则，信任是你自己的地盘", {
    x: 0.3, y: 0.95, w: 9.4, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Key quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.65, w: 9.4, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("你能用流量买到关注，买不到别人在做决定前替你说的那句话。", {
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
    { text: "流量：曝光解决'有没有人知道你'", options: { bullet: true, breakLine: true } },
    { text: "信任：解决'愿不愿把事交给你'", options: { bullet: true, breakLine: true } },
    { text: "巨头的主场 vs 你的主场", options: { bullet: true } }
  ], {
    x: 0.3, y: 2.9, w: 4.5, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right column - Tools
  slide.addText("工具表单", {
    x: 5.2, y: 2.5, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "流量行为 vs 信任行为分类表", options: { bullet: true, breakLine: true } },
    { text: '"被看见"之后的行为检查清单', options: { bullet: true } }
  ], {
    x: 5.2, y: 2.9, w: 4.5, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Exercise area
  slide.addText("练习", {
    x: 0.3, y: 4.0, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("我的战场选择诊断 / '那句话值一百万'案例重构", {
    x: 1.3, y: 4.0, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Notes area
  slide.addText("学习笔记", {
    x: 0.3, y: 4.45, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 4.8, w: 9.4, h: 0.03,
    fill: { color: theme.primary }
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("5", {
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
