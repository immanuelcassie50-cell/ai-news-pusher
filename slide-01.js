const pptxgen = require("pptxgenjs");
const sc = { type: "cover", index: 1, title: "说服时机判断" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("02", { x: 6.5, y: 0.5, w: 3.5, h: 3, fontSize: 160, fontFace: "Arial", color: "FFFFFF", bold: true, align: "right", transparency: 85 });
  slide.addText("公众表达实战工具箱 · 第2课", { x: 0.6, y: 1.2, w: 6, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 40 });
  slide.addText("说服时机判断", { x: 0.6, y: 1.8, w: 7, h: 1.5, fontSize: 44, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("什么时候提，对方最容易被打动", { x: 0.6, y: 3.4, w: 7, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-01-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };