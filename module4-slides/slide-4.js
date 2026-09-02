const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 4, title: '分散精力的机会成本' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Title
  slide.addText("分散精力的机会成本", { x: 0.4, y: 0.3, w: 9.2, h: 0.6, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
  // Visual: 10 small bars showing 10% each
  slide.addText("分散模式", { x: 0.4, y: 1.1, w: 4.3, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center", valign: "middle" });
  for (let i = 0; i < 10; i++) {
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 0.42, y: 1.6, w: 0.38, h: 1.8, fill: { color: theme.light } });
    slide.addText("10%", { x: 0.5 + i * 0.42, y: 3.5, w: 0.38, h: 0.3, fontSize: 8, fontFace: "Arial", color: theme.accent, bold: false, align: "center", valign: "middle" });
  }
  slide.addText("10个60分", { x: 0.4, y: 3.9, w: 4.3, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "center", valign: "middle" });
  // VS
  slide.addText("VS", { x: 4.5, y: 2.3, w: 1, h: 0.5, fontSize: 20, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  // 1 large bar showing 100%
  slide.addText("聚焦模式", { x: 5.3, y: 1.1, w: 4.3, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.6, w: 3.8, h: 1.8, fill: { color: theme.primary } });
  slide.addText("100%", { x: 5.5, y: 2.3, w: 3.8, h: 0.4, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("1个100分", { x: 5.3, y: 3.9, w: 4.3, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: false, align: "center", valign: "middle" });
  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.4, w: 9.2, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("10个60分不如1个100分", { x: 0.4, y: 4.4, w: 9.2, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("4", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
