const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 86, title: "案例二：时机分析" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("案例二：时机分析", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`时机分析复盘：

✅ 做对了什么？
• 在对方困难时主动帮忙（窗口开启）
• 提供了价值而非要求（策略得当）
• 利用了季度初的时间节点

❌ 还可以改进？
• 可以更早了解各部门的节奏
• 可以建立更广泛的跨部门关系

工具应用：F3时机策略选择器 + F6自评表`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("86", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-86-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };