const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 6, title: '标准一：价值大' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addText("标准一：价值大", { x: 0.4, y: 0.3, w: 9.2, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, margin: 0 });
  const qa = [{ q: "这个任务完成后对我的核心目标贡献有多大？", d: "评估对核心成果的直接影响" }, { q: "如果只能做一件事是哪件？", d: "找到最具杠杆效应的任务" }];
  qa.forEach((item, i) => {
    const cy = 1.3 + i * 1.6;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: cy, w: 9.2, h: 1.3, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
    slide.addText("Q" + (i + 1), { x: 0.6, y: cy + 0.15, w: 0.5, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.primary, bold: true });
    slide.addText(item.q, { x: 1.2, y: cy + 0.15, w: 8, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true });
    slide.addText(item.d, { x: 1.2, y: cy + 0.7, w: 8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.5, w: 9.2, h: 0.6, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("价值越大越优先，核心价值任务值得投入80%精力", { x: 0.6, y: 4.5, w: 8.8, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("6", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
