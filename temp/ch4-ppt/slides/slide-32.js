// slide-32.js - 课后作业
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '课后作业'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("课后作业", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 作业内容
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.15
  });

  // 作业1
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 1.45, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.8, y: 1.45, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("把这一章的对话记录表完整保存", {
    x: 1.45, y: 1.45, w: 7.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // 作业2
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 2.2, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 0.8, y: 2.2, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("把你认为这次最有效的那轮提示词，存进Get笔记", {
    x: 1.45, y: 2.2, w: 7.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // 标注格式
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.45, y: 2.8, w: 7.8, h: 0.7,
    fill: { color: theme.bg },
    rectRadius: 0.08
  });
  slide.addText("标注格式：场景名称-步骤名称-有效提示词", {
    x: 1.65, y: 2.85, w: 7.4, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // 效果说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 3.7, w: 8.4, h: 0.04,
    fill: { color: theme.light }
  });

  slide.addText("效果", {
    x: 0.8, y: 3.9, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("下次遇到同类步骤，直接从Get笔记里调这条提示词，稍作修改就能用。这是你的第一条可复用提示词。", {
    x: 0.8, y: 4.3, w: 8.4, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };