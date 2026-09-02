const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 17, title: '练习模板：AI重构地图' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("17", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("练习模板：AI重构地图", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // Template grid
  const fields = [
    { label: "目标场景", hint: "例如：每日销售汇报", x: 0.8, y: 1.7, w: 4.2, h: 1.0 },
    { label: "当前状态", hint: "耗时、痛点...", x: 5.0, y: 1.7, w: 4.2, h: 1.0 },
    { label: "目标状态", hint: "期望的时间、效果...", x: 0.8, y: 2.9, w: 4.2, h: 1.0 },
    { label: "行动路径", hint: "分步骤实施计划", x: 5.0, y: 2.9, w: 4.2, h: 1.0 }
  ];
  fields.forEach((f) => {
    slide.addShape(pres.shapes.RECTANGLE, { x: f.x, y: f.y, w: f.w, h: f.h, fill: { color: theme.light }, line: { color: theme.accent, width: 1, dashType: "dash" } });
    slide.addText(f.label, { x: f.x + 0.2, y: f.y + 0.1, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(f.hint, { x: f.x + 0.2, y: f.y + 0.5, w: f.w - 0.4, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, italic: true });
  });
  // Timeline
  slide.addText("4周计划", { x: 0.8, y: 4.1, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const weeks = ["第1周", "第2周", "第3周", "第4周"];
  weeks.forEach((w, i) => {
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.8 + i * 2.3, y: 4.5, w: 2.1, h: 0.6, fill: { color: theme.bg }, line: { color: theme.accent, width: 1 } });
    slide.addText(w, { x: 0.8 + i * 2.3, y: 4.55, w: 2.1, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-17-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
