const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 51, title: "模块二小结" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("模块二小结", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`模块二 核心要点：

✓ 窗口期分三级：黄金，白银，青铜
✓ 窗口叠加效应让效果倍增
✓ 决策前72小时是最佳影响窗口
✓ 窗口预测可以提前准备
✓ F2工具帮助你评估窗口等级

思考：你在生活中遇到过哪些黄金窗口？`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("51", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-51-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };