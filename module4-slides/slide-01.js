const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'cover', index: 1, title: '聚焦与排序' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("04", { x: 0.6, y: 1.5, w: 2, h: 1.2, fontSize: 96, fontFace: "Arial", color: theme.primary, bold: true, align: "left" });
  slide.addText("聚焦与排序", { x: 0.6, y: 2.7, w: 8.8, h: 1, fontSize: 48, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("为什么'什么都想做'会让你什么都做不好", { x: 0.6, y: 3.7, w: 8.8, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.5, w: 3, h: 0.04, fill: { color: theme.accent } });
  slide.addText("模块四", { x: 0.6, y: 4.7, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-01-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
