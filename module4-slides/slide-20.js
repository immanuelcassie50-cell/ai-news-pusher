const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 20, title: '聚焦的常见陷阱三：比较心理' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("20", { x: 8.8, y: 0.3, w: 1, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("聚焦的常见陷阱三：比较心理", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  slide.addText("问题", { x: 0.6, y: 1.6, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "看到竞品做得好就模仿，看到别人成功就动摇", options: { bullet: true, breakLine: true } },
    { text: "\"他们能做到，我为什么不能\"——盲目跟随", options: { bullet: true, breakLine: true } },
    { text: "失去自己的节奏，被市场噪音牵着走", options: { bullet: true } }
  ], { x: 0.6, y: 2.1, w: 4.2, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 8 });
  slide.addText("解决方案", { x: 5.2, y: 1.6, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "回到原点：始终以自己的用户需求为基准", options: { bullet: true, breakLine: true } },
    { text: "差异化定位：找到自己的独特价值点", options: { bullet: true, breakLine: true } },
    { text: "延迟满足：成功需要耐心，不被短期波动影响", options: { bullet: true } }
  ], { x: 5.2, y: 2.1, w: 4.2, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, paraSpaceAfter: 8 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.0, w: 8.8, h: 1.2, fill: { color: theme.light }, rectRadius: 0.05 });
  slide.addText("核心原则：聚焦是\"做自己\"，不是\"做别人\"", { x: 0.8, y: 4.3, w: 8.4, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-20-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
