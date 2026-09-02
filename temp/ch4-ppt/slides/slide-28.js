// slide-28.js - 两人交叉测试
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '两人交叉测试'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("两人交叉测试", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 说明文字
  slide.addText("互换对话记录表，对方回答两个问题", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 问题1
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 1.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 1.75, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.7, y: 1.75, w: 0.4, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("哪一轮的提问写得最清楚？为什么？", {
    x: 1.25, y: 1.75, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.25, w: 8.6, h: 0.85,
    fill: { color: "FAFAFA" },
    line: { color: theme.light, width: 0.5, dashType: "dash" }
  });
  slide.addText("回答：", {
    x: 0.9, y: 2.3, w: 8.2, h: 0.75,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
  });

  // 问题2
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.4, w: 9, h: 1.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.55, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 0.7, y: 3.55, w: 0.4, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("如果你来做下一轮，你会怎么问？", {
    x: 1.25, y: 3.55, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.05, w: 8.6, h: 0.85,
    fill: { color: "FAFAFA" },
    line: { color: theme.light, width: 0.5, dashType: "dash" }
  });
  slide.addText("回答：", {
    x: 0.9, y: 4.1, w: 8.2, h: 0.75,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };