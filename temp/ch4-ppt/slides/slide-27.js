// slide-27.js - 核心练习：提示词保存与问题记录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '核心练习：提示词保存与问题记录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("核心练习：提示词保存与问题记录", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 最好的一轮提示词
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.15, w: 9, h: 1.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("这次对话里，我认为写得最好的一轮提示词是第___轮", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("把这轮提示词的核心内容写在下面（这是你要存进Get笔记的内容）：", {
    x: 0.7, y: 1.7, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.05, w: 8.6, h: 0.5,
    fill: { color: "FAFAFA" },
    line: { color: theme.light, width: 0.5, dashType: "dash" }
  });
  slide.addText("我发给千问的内容：", {
    x: 0.9, y: 2.1, w: 8.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // 遇到的问题
  slide.addText("我在这次对话里遇到的问题：", {
    x: 0.5, y: 2.85, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.25, w: 9, h: 0.55,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  // 如何处理
  slide.addText("我是怎么处理的（或者我打算怎么处理）：", {
    x: 0.5, y: 4, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.55,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };