const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 71, title: "价值网络" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("价值网络：商业生态中的位置", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 4.2, y: 2.0, w: 1.6, h: 1.6, fill: { color: theme.primary } });
  slide.addText("企业", { x: 4.2, y: 2.0, w: 1.6, h: 1.6, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 1.5, y: 1.3, w: 1.3, h: 1.0, fill: { color: theme.secondary } });
  slide.addText("供应商", { x: 1.5, y: 1.3, w: 1.3, h: 1.0, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 7.2, y: 1.3, w: 1.3, h: 1.0, fill: { color: theme.accent } });
  slide.addText("客户", { x: 7.2, y: 1.3, w: 1.3, h: 1.0, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 1.5, y: 3.5, w: 1.3, h: 1.0, fill: { color: theme.light } });
  slide.addText("竞争对手", { x: 1.5, y: 3.5, w: 1.3, h: 1.0, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 7.2, y: 3.5, w: 1.3, h: 1.0, fill: { color: theme.secondary, transparency: 30 } });
  slide.addText("互补者", { x: 7.2, y: 3.5, w: 1.3, h: 1.0, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.LINE, { x: 2.8, y: 1.8, w: 1.4, h: 0.8, line: { color: theme.secondary, width: 2, dashType: "dash" } });
  slide.addShape(pres.shapes.LINE, { x: 5.8, y: 1.8, w: 1.4, h: 0.8, line: { color: theme.accent, width: 2, dashType: "dash" }, flipH: true });
  slide.addShape(pres.shapes.LINE, { x: 2.8, y: 3.2, w: 1.4, h: 0.8, line: { color: theme.light, width: 2, dashType: "dash" } });
  slide.addShape(pres.shapes.LINE, { x: 5.8, y: 3.2, w: 1.4, h: 0.8, line: { color: theme.secondary, width: 2, dashType: "dash" }, flipH: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 4.7, w: 5, h: 0.7, fill: { color: theme.primary, transparency: 10 }, rectRadius: 0.08 });
  slide.addText("你的位置决定了你的利润", { x: 2.5, y: 4.7, w: 5, h: 0.7, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("71", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-71-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };