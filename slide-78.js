const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 78, title: "价值曲线分析" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("价值曲线分析", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const steps = [
    { num: "1", text: "列出行业关键竞争要素" },
    { num: "2", text: "评估各企业在每个要素的表现" },
    { num: "3", text: "绘制对比曲线" }
  ];
  steps.forEach((s, i) => {
    const y = 1.2 + i * 0.85;
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: y, w: 0.6, h: 0.6, fill: { color: theme.accent } });
    slide.addText(s.num, { x: 0.7, y: y, w: 0.6, h: 0.6, fontSize: 18, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
    slide.addText(s.text, { x: 1.5, y: y, w: 4, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle" });
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.2, w: 4, h: 3.5, fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }, rectRadius: 0.08 });
  slide.addText("价值曲线示例", { x: 5.5, y: 1.3, w: 4, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  slide.addShape(pres.shapes.LINE, { x: 6.0, y: 1.8, w: 0, h: 2.5, line: { color: theme.primary, width: 2 } });
  slide.addText("高", { x: 5.7, y: 1.7, w: 0.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addText("低", { x: 5.7, y: 4.2, w: 0.3, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary });
  const factors = ["价格", "性能", "设计", "生态", "服务"];
  factors.forEach((f, i) => { slide.addText(f, { x: 6.1 + i * 0.65, y: 4.35, w: 0.6, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" }); });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("78", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-78-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };