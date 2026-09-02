const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 3, title: '为什么"什么都想做"会让你什么都做不好' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Title
  slide.addText("为什么"什么都想做"会让你什么都做不好", { x: 0.4, y: 0.3, w: 9.2, h: 0.6, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
  // Key insight box with primary color
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 0.8, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("核心问题：资源有限，欲望无限，排序失误，满盘皆输", { x: 0.4, y: 1.1, w: 9.2, h: 0.8, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: false, align: "center", valign: "middle" });
  // Two comparison cards: A分散 vs B聚焦
  // Card A - 分散
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.2, w: 4.3, h: 2.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("A", { x: 0.6, y: 2.3, w: 0.5, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.secondary, bold: true, align: "center", valign: "middle" });
  slide.addText("分散", { x: 1.1, y: 2.35, w: 1.5, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
  slide.addText([
    { text: "同时推进多个任务", options: { bullet: true, breakLine: true } },
    { text: "每个都浅尝辄止", options: { bullet: true, breakLine: true } },
    { text: "无法形成优势积累", options: { bullet: true, breakLine: true } },
    { text: "结果：处处平庸", options: { bullet: true } }
  ], { x: 0.6, y: 2.9, w: 3.9, h: 1.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "top" });
  // Card B - 聚焦
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 2.2, w: 4.3, h: 2.5, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("B", { x: 5.5, y: 2.3, w: 0.5, h: 0.5, fontSize: 24, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("聚焦", { x: 6.0, y: 2.35, w: 1.5, h: 0.4, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });
  slide.addText([
    { text: "集中资源攻一个点", options: { bullet: true, breakLine: true } },
    { text: "深度投入形成壁垒", options: { bullet: true, breakLine: true } },
    { text: "快速突破建立优势", options: { bullet: true, breakLine: true } },
    { text: "结果：一处领先", options: { bullet: true } }
  ], { x: 5.5, y: 2.9, w: 3.9, h: 1.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: false, align: "left", valign: "top" });
  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("3", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
