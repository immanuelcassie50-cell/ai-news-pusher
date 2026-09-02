// slide-01.js - 封面页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '第四章：多轮对话'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 2.5, h: 0.06,
    fill: { color: theme.primary }
  });

  // 章节标签
  slide.addText("第四章", {
    x: 0.5, y: 1.5, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 主标题
  slide.addText("多轮对话", {
    x: 0.5, y: 2.1, w: 9, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 副标题
  slide.addText("让AI按你的想法推进", {
    x: 0.5, y: 3.4, w: 9, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 底部装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.1, w: 10, h: 0.525,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 1.8, h: 0.525,
    fill: { color: theme.primary }
  });

  // 课程信息
  slide.addText("AI组合作战 · 教学文档", {
    x: 0.5, y: 4.6, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3C",
    secondary: "4A4A4A",
    accent: "C43C3C",
    light: "888888",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };