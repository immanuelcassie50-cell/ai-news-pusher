const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 13, title: 'AI重构地图介绍' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("13", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("AI重构地图介绍", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // Visual map illustration
  slide.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 2.0, w: 2.5, h: 1.8, fill: { color: theme.light }, line: { color: theme.accent, width: 1 } });
  slide.addText("当前状态", { x: 1.5, y: 2.5, w: 2.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  slide.addText("现状分析", { x: 1.5, y: 2.9, w: 2.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
  // Arrow
  slide.addShape(pres.shapes.LINE, { x: 4.2, y: 2.9, w: 1.5, h: 0, line: { color: theme.primary, width: 2, dashType: "dash" } });
  slide.addText("AI重构", { x: 4.5, y: 2.5, w: 1, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  // Target state
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 2.0, w: 2.5, h: 1.8, fill: { color: theme.primary }, line: { color: theme.primary, width: 1 } });
  slide.addText("目标状态", { x: 6.0, y: 2.5, w: 2.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.bg, align: "center" });
  slide.addText("效率提升", { x: 6.0, y: 2.9, w: 2.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.light, align: "center" });
  // Description
  slide.addText("AI重构地图是一种可视化工具，帮助你：", { x: 0.6, y: 4.0, w: 8.8, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "明确当前状态与目标状态的差距", options: { bullet: true, breakLine: true } },
    { text: "规划从现状到目标的行动路径", options: { bullet: true, breakLine: true } },
    { text: "追踪AI落地的进度与效果", options: { bullet: true } }
  ], { x: 0.8, y: 4.4, w: 8.6, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-13-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
