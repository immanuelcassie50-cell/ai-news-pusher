const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 15, title: 'AI重构地图示例' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("15", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("AI重构地图示例", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // Example: 销售日报
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.8, w: 8.4, h: 3.4, fill: { color: theme.light }, line: { color: theme.accent, width: 0.5 } });
  slide.addText("案例：销售日报自动化", { x: 1.0, y: 2.0, w: 8, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  // Current state
  slide.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 2.6, w: 3.5, h: 1.0, fill: { color: theme.bg }, line: { color: theme.accent, width: 1 } });
  slide.addText("当前状态", { x: 1.2, y: 2.7, w: 3.5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
  slide.addText("60分钟/天", { x: 1.2, y: 3.0, w: 3.5, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center" });
  // Arrow
  slide.addText(">>>", { x: 4.5, y: 2.9, w: 1, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.primary, bold: true, align: "center" });
  // Target state
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 2.6, w: 3.5, h: 1.0, fill: { color: theme.primary }, line: { color: theme.primary, width: 1 } });
  slide.addText("目标状态", { x: 5.5, y: 2.7, w: 3.5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.light, align: "center" });
  slide.addText("10分钟/天", { x: 5.5, y: 3.0, w: 3.5, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.bg, bold: true, align: "center" });
  // Efficiency badge
  slide.addShape(pres.shapes.OVAL, { x: 7.8, y: 3.8, w: 1.2, h: 1.0, fill: { color: theme.primary } });
  slide.addText("6倍", { x: 7.8, y: 4.1, w: 1.2, h: 0.5, fontSize: 18, fontFace: "Arial", color: theme.bg, bold: true, align: "center" });
  // Description
  slide.addText("使用AI自动收集数据、生成报表，人工只需审核确认", { x: 1.0, y: 4.6, w: 8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-15-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
