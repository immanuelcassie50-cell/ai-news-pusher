const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 16, title: '练习：绘制你的AI重构地图' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("16", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("练习：绘制你的AI重构地图", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // 3 Steps
  const steps = [
    { num: "1", title: "选择TOP1场景", desc: "从日常工作选中一个最值得AI化的场景" },
    { num: "2", title: "填写四要素", desc: "明确目标场景、当前状态、目标状态、行动路径" },
    { num: "3", title: "分解4周计划", desc: "将行动路径分解为4周的里程碑任务" }
  ];
  steps.forEach((step, i) => {
    const y = 1.8 + i * 1.2;
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: 1.0, y: y, w: 0.7, h: 0.7, fill: { color: theme.primary } });
    slide.addText(step.num, { x: 1.0, y: y + 0.1, w: 0.7, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.bg, bold: true, align: "center" });
    // Content
    slide.addText(step.title, { x: 2.0, y: y, w: 7, h: 0.4, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(step.desc, { x: 2.0, y: y + 0.4, w: 7, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-16-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
