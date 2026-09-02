const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 74, title: "客户细分与选择" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("客户细分与选择", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.2, w: 2.9, h: 2.2, fill: { color: theme.secondary }, rectRadius: 0.08 });
  slide.addText("Mass Market", { x: 0.5, y: 1.4, w: 2.9, h: 0.5, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("大众市场", { x: 0.5, y: 1.9, w: 2.9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("覆盖大部分市场需求，追求规模效应", { x: 0.6, y: 2.4, w: 2.7, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.55, y: 1.2, w: 2.9, h: 2.2, fill: { color: theme.accent }, rectRadius: 0.08 });
  slide.addText("Segmented", { x: 3.55, y: 1.4, w: 2.9, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.primary, bold: true, align: "center" });
  slide.addText("细分市场", { x: 3.55, y: 1.9, w: 2.9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("针对特定需求特征的客户群体", { x: 3.65, y: 2.4, w: 2.7, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.6, y: 1.2, w: 2.9, h: 2.2, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("Niche Market", { x: 6.6, y: 1.4, w: 2.9, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.primary, bold: true, align: "center" });
  slide.addText("利基市场", { x: 6.6, y: 1.9, w: 2.9, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("高度专业化，填补市场空白", { x: 6.7, y: 2.4, w: 2.7, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  slide.addText("选择标准", { x: 0.5, y: 3.6, w: 3, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const criteria = ["规模", "成长性", "竞争强度", "战略匹配度"];
  criteria.forEach((c, i) => { slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 2.3, y: 4.1, w: 2.1, h: 0.7, fill: { color: theme.primary }, rectRadius: 0.06 }); slide.addText(c, { x: 0.5 + i * 2.3, y: 4.1, w: 2.1, h: 0.7, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" }); });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("74", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-74-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };