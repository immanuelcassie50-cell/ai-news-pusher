const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'transition', index: 23, title: '确定TOP1之后呢？' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("23", { x: 8.8, y: 0.3, w: 1, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("确定TOP1之后呢？", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 2.0, w: 7, h: 2.8, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("下一模块预告", { x: 1.7, y: 2.2, w: 6.6, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent });
  slide.addText("模块五：落地路径", { x: 1.7, y: 2.7, w: 6.6, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "如何将TOP1目标转化为具体执行计划？", options: { bullet: true, breakLine: true } },
    { text: "从想法到落地的最后一公里", options: { bullet: true, breakLine: true } },
    { text: "常见的执行障碍及应对策略", options: { bullet: true } }
  ], { x: 1.7, y: 3.5, w: 6.6, h: 1.2, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 6 });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-23-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
