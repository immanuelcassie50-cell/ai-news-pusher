const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 91, title: "案例五：跨部门协调" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("案例五：跨部门协调", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`案例五：跨部门协调

王总需要推动跨部门协作，但部门墙严重。

时机分析：
• 公司刚宣布数字化转型战略（外部信号）
• 相关部门面临业绩压力（认知开放）
• 跨部门协作成为KPI之一（时间节点）

策略：借公司战略东风，推动协作机制
结果：建立跨部门协作机制`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("91", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-91-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };