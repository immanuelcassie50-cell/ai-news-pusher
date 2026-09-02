const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 22, title: '本节小结（下）' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("22", { x: 8.8, y: 0.3, w: 1, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("本节小结（下）", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addText([
    { text: "陷阱一：完美主义——\"等准备好了再做\"", options: { bullet: true, breakLine: true } },
    { text: "陷阱二：范围蔓延——无限添加新内容", options: { bullet: true, breakLine: true } },
    { text: "陷阱三：比较心理——被竞品带着跑", options: { bullet: true, breakLine: true } },
    { text: "聚焦是动态过程：需要定期复盘和调整", options: { bullet: true } }
  ], { x: 0.6, y: 1.6, w: 8.8, h: 2.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 12 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.3, w: 8.8, h: 0.9, fill: { color: theme.light }, rectRadius: 0.05 });
  slide.addText("核心心法：一次只做一件事，做到极致再换档", { x: 0.8, y: 4.5, w: 8.4, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-22-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
