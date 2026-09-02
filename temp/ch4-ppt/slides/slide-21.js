// slide-21.js - 收尾时你要做什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '收尾时你要做什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("收尾时你要做什么", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 核心动作
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("把这次对话里最有用的那个提示词（通常是第2或第3轮的）单独保存进Get笔记", {
    x: 0.7, y: 1.35, w: 8.6, h: 0.9,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 保存格式
  slide.addText("保存格式", {
    x: 0.5, y: 2.6, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.1, w: 9, h: 0.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08
  });
  slide.addText("场景名称-步骤名称-有效提示词", {
    x: 0.7, y: 3.2, w: 8.6, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // 效果
  slide.addText("效果", {
    x: 0.5, y: 4.1, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("下次遇到同类步骤，不用重新摸索，直接调用这条提示词，稍作调整就能用", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-21-preview.pptx" });
}

module.exports = { createSlide, slideConfig };