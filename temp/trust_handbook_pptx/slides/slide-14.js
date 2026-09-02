// slide-14.js - Chapter 10
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '第十章'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: theme.accent } });

  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 1.5, h: 0.5, fill: { color: theme.accent } });
  slide.addText("第十章", { x: 0.3, y: 0.3, w: 1.5, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("60分钟", { x: 1.9, y: 0.35, w: 0.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });

  slide.addText("信任的复利需要放弃流量带来的即时安全感", { x: 0.3, y: 0.95, w: 9.4, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });

  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.65, w: 9.4, h: 0.7, fill: { color: theme.light } });
  slide.addText("流量给你的是这个月安心的感觉，信任给你的是十年后还有饭吃的底气。", { x: 0.5, y: 1.7, w: 9, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center", valign: "middle" });

  slide.addText("核心概念", { x: 0.3, y: 2.5, w: 4.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText([
    { text: "信任复利的滞后性", options: { bullet: true, breakLine: true } },
    { text: "追逐流量上瘾的心理机制", options: { bullet: true, breakLine: true } },
    { text: "记账思维熬过等待期", options: { bullet: true } }
  ], { x: 0.3, y: 2.9, w: 4.5, h: 1.2, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addText("工具表单", { x: 5.2, y: 2.5, w: 4.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "信任账本", options: { bullet: true, breakLine: true } },
    { text: "焦虑来源识别表", options: { bullet: true } }
  ], { x: 5.2, y: 2.9, w: 4.5, h: 1.2, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addText("练习", { x: 0.3, y: 4.0, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText('"安全感账户"盘点 / "记账"体验工作坊', { x: 1.3, y: 4.0, w: 5, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addText("学习笔记", { x: 0.3, y: 4.45, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.8, w: 9.4, h: 0.03, fill: { color: theme.accent } });

  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.primary } });
  slide.addText("14", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "8B0000", secondary: "424242", accent: "C62828", light: "FFCDD2", bg: "FAFAFA" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
