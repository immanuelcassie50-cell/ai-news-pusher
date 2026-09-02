const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 8, title: '标准三：可积累' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("8", { x: 9.2, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("标准三：可积累", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("问自己：做完这件事，下次还能用上吗？能复用吗？", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  const qBoxes = [
    { x: 0.65, y: 1.8, q: "可复制？", hint: "这次的经验能复制到下次吗？" },
    { x: 5.15, y: 1.8, q: "可复用？", hint: "成果能用在其他项目吗？" },
    { x: 0.65, y: 3.0, q: "可迁移？", hint: "能力能迁移到新领域吗？" },
    { x: 5.15, y: 3.0, q: "可叠加？", hint: "能形成累积效应吗？" }
  ];
  qBoxes.forEach(box => {
    slide.addShape(pres.shapes.RECTANGLE, { x: box.x, y: box.y, w: 4.2, h: 1.0, fill: { color: theme.light }, line: { color: theme.accent, width: 1 } });
    slide.addText(box.q, { x: box.x + 0.2, y: box.y + 0.15, w: 3.8, h: 0.4, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(box.hint, { x: box.x + 0.2, y: box.y + 0.55, w: 3.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.65, y: 4.3, w: 8.7, h: 1.1, fill: { color: theme.primary } });
  slide.addText("复利思维", { x: 0.85, y: 4.4, w: 2, h: 0.45, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("每一次选择，都在为未来积蓄势能。选择可积累的事，就是选择为明天打工。", { x: 0.85, y: 4.85, w: 8.3, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-08-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
