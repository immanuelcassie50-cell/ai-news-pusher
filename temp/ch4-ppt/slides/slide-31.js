// slide-31.js - 第五章预告
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '第五章预告'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第五章预告", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 主要内容卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.15
  });

  slide.addText("你已经能在千问里完成有效的多轮对话了", {
    x: 0.8, y: 1.45, w: 8.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // 分隔线
  slide.addShape(pres.shapes.LINE, {
    x: 2.5, y: 2.1, w: 5, h: 0,
    line: { color: theme.light, width: 1, dashType: "dash" }
  });

  slide.addText("但有些任务千问搞不定", {
    x: 0.8, y: 2.3, w: 8.4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // 具体场景
  const scenarios = [
    "有录音要处理",
    "有需要核实的最新信息",
    "有本地的批量文件"
  ];

  scenarios.forEach((text, idx) => {
    const y = 2.95 + idx * 0.6;
    slide.addShape(pres.shapes.OVAL, {
      x: 2.5, y: y + 0.1, w: 0.25, h: 0.25,
      fill: { color: theme.primary }
    });
    slide.addText(text, {
      x: 2.9, y: y, w: 5, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 箭头指向
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.08,
    fill: { color: theme.primary }
  });

  slide.addText("第五章教你在多个工具之间顺畅流转，以及工具切换时格式处理的关键方法", {
    x: 0.8, y: 5.05, w: 8.4, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };