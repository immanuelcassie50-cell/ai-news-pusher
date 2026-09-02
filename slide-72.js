const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 72, title: "三种战略定位类型" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("三种战略定位类型", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.2, w: 2.9, h: 3.8, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("差异化定位", { x: 0.5, y: 1.4, w: 2.9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("做不同", { x: 0.5, y: 2.0, w: 2.9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center" });
  slide.addText([{ text: "独特的产品或服务", options: { breakLine: true } }, { text: "品牌溢价", options: { breakLine: true } }, { text: "客户忠诚度", options: { breakLine: true } }, { text: "不易被复制", options: {} }], { x: 0.7, y: 2.7, w: 2.5, h: 2.0, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", valign: "top" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.55, y: 1.2, w: 2.9, h: 3.8, fill: { color: theme.secondary }, rectRadius: 0.1 });
  slide.addText("成本领先定位", { x: 3.55, y: 1.4, w: 2.9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("做更低", { x: 3.55, y: 2.0, w: 2.9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent, bold: true, align: "center" });
  slide.addText([{ text: "规模化生产", options: { breakLine: true } }, { text: "成本控制", options: { breakLine: true } }, { text: "效率优化", options: { breakLine: true } }, { text: "价格竞争力", options: {} }], { x: 3.75, y: 2.7, w: 2.5, h: 2.0, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", valign: "top" });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.6, y: 1.2, w: 2.9, h: 3.8, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("聚焦定位", { x: 6.6, y: 1.4, w: 2.9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("做深透", { x: 6.6, y: 2.0, w: 2.9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText([{ text: "细分市场深耕", options: { breakLine: true } }, { text: "专业壁垒", options: { breakLine: true } }, { text: "客户黏性", options: { breakLine: true } }, { text: "灵活应对", options: {} }], { x: 6.8, y: 2.7, w: 2.5, h: 2.0, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("72", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-72-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };