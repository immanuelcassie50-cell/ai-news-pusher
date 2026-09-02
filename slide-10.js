const pptxgen = require("pptxgenjs");
const sc = { type: "divider", index: 10, title: "时机感知" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("10", { x: 0.5, y: 0.8, w: 3, h: 2.5, fontSize: 140, fontFace: "Arial", color: "FFFFFF", bold: true, transparency: 85 });
  slide.addText("时机感知", { x: 0.6, y: 2.0, w: 8, h: 1.2, fontSize: 42, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("识别四大时机信号，看清说服的最佳切入时刻", { x: 0.6, y: 3.3, w: 8, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 30 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: theme.accent } });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-10-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };