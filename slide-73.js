const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 73, title: "战略定位的三个问题" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("战略定位的三个问题", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 0.8, y: 1.3, w: 1.0, h: 1.0, fill: { color: theme.accent } });
  slide.addText("Q1", { x: 0.8, y: 1.3, w: 1.0, h: 1.0, fontSize: 22, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("卖给谁？", { x: 2.0, y: 1.3, w: 2.5, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("目标客户选择", { x: 2.0, y: 1.8, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.OVAL, { x: 0.8, y: 2.5, w: 1.0, h: 1.0, fill: { color: theme.secondary } });
  slide.addText("Q2", { x: 0.8, y: 2.5, w: 1.0, h: 1.0, fontSize: 22, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("卖什么？", { x: 2.0, y: 2.5, w: 2.5, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("价值主张选择", { x: 2.0, y: 3.0, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.OVAL, { x: 0.8, y: 3.7, w: 1.0, h: 1.0, fill: { color: theme.light } });
  slide.addText("Q3", { x: 0.8, y: 3.7, w: 1.0, h: 1.0, fontSize: 22, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("如何赢？", { x: 2.0, y: 3.7, w: 2.5, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("竞争优势选择", { x: 2.0, y: 4.2, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.3, w: 4, h: 3.6, fill: { color: theme.primary, transparency: 8 }, rectRadius: 0.1 });
  slide.addText("战略定位的本质", { x: 5.7, y: 1.5, w: 3.6, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("战略定位是回答三个核心问题的过程：", { x: 5.7, y: 2.1, w: 3.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([{ text: "聚焦特定客户群体", options: { breakLine: true } }, { text: "创造差异化价值", options: { breakLine: true } }, { text: "建立持续竞争优势", options: {} }], { x: 5.7, y: 2.8, w: 3.6, h: 1.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("73", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-73-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };