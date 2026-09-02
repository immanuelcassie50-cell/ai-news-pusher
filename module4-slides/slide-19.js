const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 19, title: '聚焦的常见陷阱二：范围蔓延' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("19", { x: 8.8, y: 0.3, w: 1, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("聚焦的常见陷阱二：范围蔓延", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addText("问题", { x: 0.6, y: 1.6, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "TOP1目标确定后，执行过程中不断添加新内容", options: { bullet: true, breakLine: true } },
    { text: ""再做一个功能就完美了"——无限循环", options: { bullet: true, breakLine: true } },
    { text: "资源分散，最终哪件事都没做到位", options: { bullet: true } }
  ], { x: 0.6, y: 2.1, w: 4.2, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 8 });
  slide.addText("解决方案", { x: 5.2, y: 1.6, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "锁定范围：TOP1确定后，其余需求进待办池", options: { bullet: true, breakLine: true } },
    { text: "设置边界：明确\"完成\"的定义，不轻易扩容", options: { bullet: true, breakLine: true } },
    { text: "周期复盘：每周检查是否偏离核心目标", options: { bullet: true } }
  ], { x: 5.2, y: 2.1, w: 4.2, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 8 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.0, w: 8.8, h: 1.2, fill: { color: theme.light }, rectRadius: 0.05 });
  slide.addText("核心原则：聚焦不是\"只做一个\"，而是\"一次只做一个\"", { x: 0.8, y: 4.3, w: 8.4, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-19-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
