const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 80, title: "价值曲线案例：小米" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("价值曲线案例：小米", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.15, w: 3.5, h: 0.8, fill: { color: theme.secondary }, rectRadius: 0.06 });
  slide.addText("性价比手机", { x: 0.5, y: 1.15, w: 3.5, h: 0.8, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("→", { x: 4.0, y: 1.15, w: 0.8, h: 0.8, fontSize: 28, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.8, y: 1.15, w: 3.5, h: 0.8, fill: { color: theme.accent }, rectRadius: 0.06 });
  slide.addText("AIoT生态", { x: 4.8, y: 1.15, w: 3.5, h: 0.8, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.1, w: 9, h: 2.8, fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }, rectRadius: 0.08 });
  slide.addText("价值曲线对标", { x: 0.5, y: 2.2, w: 9, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  slide.addShape(pres.shapes.LINE, { x: 1.0, y: 2.7, w: 0, h: 1.8, line: { color: theme.primary, width: 2 } });
  slide.addShape(pres.shapes.LINE, { x: 1.0, y: 4.5, w: 8, h: 0, line: { color: theme.primary, width: 2 } });
  slide.addText("高", { x: 0.7, y: 2.6, w: 0.3, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addText("低", { x: 0.7, y: 4.3, w: 0.3, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.primary });
  const factors = ["价格", "性能", "设计", "生态", "渠道", "服务"];
  factors.forEach((f, i) => { slide.addText(f, { x: 1.1 + i * 1.35, y: 4.55, w: 1.2, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" }); });
  slide.addShape(pres.shapes.LINE, { x: 5.5, y: 2.5, w: 0.6, h: 0, line: { color: theme.secondary, width: 2, dashType: "dash" } });
  slide.addText("传统手机", { x: 6.2, y: 2.35, w: 1.2, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.LINE, { x: 5.5, y: 2.9, w: 0.6, h: 0, line: { color: theme.accent, width: 3 } });
  slide.addText("小米生态", { x: 6.2, y: 2.75, w: 1.2, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.accent });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("80", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-80-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };