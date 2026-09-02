// slide-58.js - Content: 斯密的完整人性观
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 58,
  title: '斯密的完整人性观'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("斯密的完整人性观", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Left card - 经济人
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 4.3, h: 0.5,
    fill: { color: theme.secondary }
  });

  slide.addText('"经济人"假设', {
    x: 0.5, y: 1.25, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "自利心的驱动作用", options: { bullet: true, breakLine: true } },
    { text: "追求个人利益是经济活动的根本动力", options: { bullet: true, breakLine: true } },
    { text: "但自利需在正义制度下运行", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.85, w: 3.9, h: 1.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    paraSpaceAfter: 6
  });

  // Right card - 道德人
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.25, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Right card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.25, w: 4.3, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText('"道德人"维度', {
    x: 5.2, y: 1.25, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "同情心：情感共鸣的基础", options: { bullet: true, breakLine: true } },
    { text: "正义感：社会秩序的保障", options: { bullet: true, breakLine: true } },
    { text: "旁观者视角：道德判断的他者维度", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.85, w: 3.9, h: 1.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    paraSpaceAfter: 6
  });

  // Center connecting element
  slide.addShape(pres.shapes.OVAL, {
    x: 4.5, y: 2.2, w: 1, h: 1,
    fill: { color: theme.accent }
  });

  slide.addText("+", {
    x: 4.5, y: 2.2, w: 1, h: 1,
    fontSize: 36, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.9, w: 9, h: 1.3,
    fill: { color: theme.secondary },
    transparency: 10
  });

  slide.addText("两只手", {
    x: 0.7, y: 4.0, w: 1.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Two columns inside the box
  slide.addText([
    { text: "看不见的手", options: { bold: true, breakLine: true } },
    { text: "市场机制：价格信号引导资源分配", options: { breakLine: true } },
    { text: "自利驱动的经济效率" }
  ], {
    x: 0.7, y: 4.4, w: 4, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText([
    { text: "旁观者的眼睛", options: { bold: true, breakLine: true } },
    { text: "道德约束：正义规则维护社会秩序", options: { breakLine: true } },
    { text: "同情心支撑的社会合作基础" }
  ], {
    x: 5.2, y: 4.4, w: 4, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("58", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
