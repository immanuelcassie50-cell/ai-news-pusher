const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'summary', index: 24, title: '模块四完成' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("24", { x: 8.8, y: 0.3, w: 1, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("模块四完成", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addText("聚焦与排序", { x: 0.6, y: 1.6, w: 8.8, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "聚焦的本质是取舍", options: { bullet: true, breakLine: true } },
    { text: "找到TOP1是聚焦的关键", options: { bullet: true, breakLine: true } },
    { text: "识别并规避三大陷阱", options: { bullet: true } }
  ], { x: 0.6, y: 2.2, w: 4, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 8 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.2, w: 4.2, h: 1.8, fill: { color: theme.light }, rectRadius: 0.05 });
  slide.addText("下一站", { x: 5.4, y: 2.4, w: 3.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent });
  slide.addText("模块五：落地路径", { x: 5.4, y: 2.8, w: 3.8, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("从目标到实现的桥梁", { x: 5.4, y: 3.4, w: 3.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.3, w: 8.8, h: 0.9, fill: { color: theme.primary }, rectRadius: 0.05 });
  slide.addText("恭喜你完成了聚焦与排序的学习！", { x: 0.8, y: 4.5, w: 8.4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.bg, bold: true, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-24-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
