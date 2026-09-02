const pptxgen = require("pptxgenjs");
const sc = { type: "divider", index: 69, title: "Module 5 Divider" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.12, fill: { color: theme.accent } });
  slide.addText("05", { x: 0.8, y: 1.5, w: 3, h: 1.5, fontSize: 96, fontFace: "Arial", color: theme.accent, bold: true });
  slide.addText("战略定位", { x: 0.8, y: 2.8, w: 8, h: 1, fontSize: 54, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("在价值网上找到你的位置", { x: 0.8, y: 3.8, w: 8, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.OVAL, { x: 8.2, y: 1.2, w: 1.5, h: 1.5, fill: { color: theme.accent, transparency: 25 } });
  slide.addShape(pres.shapes.OVAL, { x: 8.8, y: 2.4, w: 0.8, h: 0.8, fill: { color: theme.light, transparency: 35 } });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("69", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-69-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };