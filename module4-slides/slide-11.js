const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 11, title: 'TOP1选择的思考过程' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("11", { x: 9.0, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("TOP1选择的思考过程", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const steps = [
    { num: "1", title: "列出候选任务", desc: "把所有想做、该做的事都写出来", hint: "不要过滤，先穷举" },
    { num: "2", title: "三标准筛选", desc: "标准一：想清楚 → 标准二：能落地 → 标准三：可积累", hint: "不符合任一标准，直接划掉" },
    { num: "3", title: "矩阵定位", desc: "在聚焦排序矩阵中找到你的任务位置", hint: "优先快速胜利区" },
    { num: "4", title: "问自己", desc: "如果只做一件事，哪件对结果影响最大？", hint: "这就是TOP1" }
  ];
  const stepW = 2.1, stepH = 3.2, startX = 0.55, stepY = 1.5, gap = 0.3;
  steps.forEach((step, i) => {
    const sx = startX + i * (stepW + gap);
    slide.addShape(pres.shapes.RECTANGLE, { x: sx, y: stepY, w: stepW, h: stepH, fill: { color: theme.light }, line: { color: theme.accent, width: 1 } });
    slide.addShape(pres.shapes.OVAL, { x: sx + stepW/2 - 0.4, y: stepY + 0.2, w: 0.8, h: 0.8, fill: { color: theme.primary } });
    slide.addText(step.num, { x: sx + stepW/2 - 0.4, y: stepY + 0.2, w: 0.8, h: 0.8, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(step.title, { x: sx + 0.1, y: stepY + 1.15, w: stepW - 0.2, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(step.desc, { x: sx + 0.1, y: stepY + 1.7, w: stepW - 0.2, h: 0.9, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
    slide.addShape(pres.shapes.RECTANGLE, { x: sx + 0.15, y: stepY + 2.65, w: stepW - 0.3, h: 0.4, fill: { color: theme.primary, transparency: 90 } });
    slide.addText(step.hint, { x: sx + 0.15, y: stepY + 2.7, w: stepW - 0.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
    if (i < steps.length - 1) {
      slide.addText("→", { x: sx + stepW + 0.02, y: stepY + stepH/2 - 0.3, w: 0.26, h: 0.6, fontSize: 24, fontFace: "Arial", color: theme.accent, align: "center", valign: "middle" });
    }
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-11-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
