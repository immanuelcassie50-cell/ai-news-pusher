const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 18, title: '聚焦的常见陷阱一：完美主义' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("18", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("聚焦的常见陷阱一：完美主义", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // Problem side
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.7, w: 4.0, h: 3.4, fill: { color: "FFF0F0" }, line: { color: theme.primary, width: 1 } });
  slide.addText("问题", { x: 0.8, y: 1.85, w: 4.0, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText([
    { text: "追求完美的AI方案", options: { bullet: true, breakLine: true } },
    { text: "等待"最佳时机"开始", options: { bullet: true, breakLine: true } },
    { text: "不断调整方案不落地", options: { bullet: true, breakLine: true } },
    { text: "错过最佳行动窗口", options: { bullet: true } }
  ], { x: 1.0, y: 2.5, w: 3.6, h: 2.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  // Solution side
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.7, w: 4.0, h: 3.4, fill: { color: "F0FFF0" }, line: { color: "2E8B57", width: 1 } });
  slide.addText("解法", { x: 5.2, y: 1.85, w: 4.0, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: "2E8B57", bold: true, align: "center" });
  slide.addText([
    { text: "先完成，再完美", options: { bullet: true, breakLine: true } },
    { text: "设定明确的启动标准", options: { bullet: true, breakLine: true } },
    { text: "接受"足够好"的方案", options: { bullet: true, breakLine: true } },
    { text: "快速迭代，持续优化", options: { bullet: true } }
  ], { x: 5.4, y: 2.5, w: 3.6, h: 2.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-18-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
