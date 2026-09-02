const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 95, title: "练习场景一：项目提案时机" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("练习场景一：项目提案时机", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`练习场景一：项目提案时机

情境：你需要向领导争取资源推动一个新项目。领导刚刚开完一个紧张会议，看起来很忙。

练习任务：
• 判断当前是否是合适的时机
• 如果不合适，如何创造时机？
• 如何开场能提高成功率？

反馈要点：时机判断是否准确、策略选择是否恰当、开场方式是否有效`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("95", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-95-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };