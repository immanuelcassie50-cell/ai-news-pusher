const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 70, title: "什么是战略定位" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("什么是战略定位", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.2, w: 8.4, h: 1.4, fill: { color: theme.secondary, transparency: 15 }, rectRadius: 0.1 });
  slide.addText("在价值网上找到你的独特位置", { x: 0.8, y: 1.2, w: 8.4, h: 1.4, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("战略定位的定义", { x: 0.8, y: 2.8, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true });
  slide.addText("相对于竞争对手，选择为哪些客户、提供什么独特价值", { x: 0.8, y: 3.3, w: 8.4, h: 0.8, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.2, w: 2.6, h: 1.0, fill: { color: theme.accent }, rectRadius: 0.08 });
  slide.addText("目标客户", { x: 0.8, y: 4.2, w: 2.6, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("卖给谁", { x: 0.8, y: 4.65, w: 2.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.7, y: 4.2, w: 2.6, h: 1.0, fill: { color: theme.secondary }, rectRadius: 0.08 });
  slide.addText("独特价值", { x: 3.7, y: 4.2, w: 2.6, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("卖什么", { x: 3.7, y: 4.65, w: 2.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.6, y: 4.2, w: 2.6, h: 1.0, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("竞争优势", { x: 6.6, y: 4.2, w: 2.6, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("如何赢", { x: 6.6, y: 4.65, w: 2.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("70", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-70-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };