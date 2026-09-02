const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 36, title: "窗口关闭的信号" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("窗口关闭的信号", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`5个窗口即将关闭的信号：

1. 对方表现出不耐烦或急于结束
2. 环境被打断或注意力分散
3. 对方已有明确立场且坚持
4. 外部压力导致对方无法决策
5. 时间紧迫，只能快速决策`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("36", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-36-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };