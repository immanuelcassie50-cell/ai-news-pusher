// slide-19.js - Chapter 15
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '第十五章'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: theme.accent } });

  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 1.5, h: 0.5, fill: { color: theme.accent } });
  slide.addText("第十五章", { x: 0.3, y: 0.3, w: 1.5, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("45分钟", { x: 1.9, y: 0.35, w: 0.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });

  slide.addText("家人不理解放弃单子去守信任也是一种成本", { x: 0.3, y: 0.95, w: 9.4, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });

  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.65, w: 9.4, h: 0.7, fill: { color: theme.light } });
  slide.addText("你放弃的那一单，在外人眼里是钱没赚到，只有你自己知道，那是护城河的一块砖。", { x: 0.5, y: 1.7, w: 9, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center", valign: "middle" });

  slide.addText("核心概念", { x: 0.3, y: 2.5, w: 4.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText([
    { text: "信任积累的长期性与家人短期视角的张力", options: { bullet: true, breakLine: true } },
    { text: "不被理解的代价", options: { bullet: true, breakLine: true } },
    { text: "用结果说话", options: { bullet: true } }
  ], { x: 0.3, y: 2.9, w: 4.5, h: 1.2, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addText("练习", { x: 0.3, y: 4.0, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("家庭沟通情景模拟 / 写下你的'信任账本'", { x: 1.3, y: 4.0, w: 5, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addText("学习笔记", { x: 0.3, y: 4.45, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.8, w: 9.4, h: 0.03, fill: { color: theme.accent } });

  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.primary } });
  slide.addText("19", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "8B0000", secondary: "424242", accent: "C62828", light: "FFCDD2", bg: "FAFAFA" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
