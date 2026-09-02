const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 111, title: "工具汇总" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("工具汇总", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`八大工具表单汇总：

F1 时机信号识别卡 → 信号识别
F2 窗口期判断表 → 窗口评估
F3 时机策略选择器 → 策略匹配
F4 六场景时机地图 → 场景导航
F5 说服时机复盘表 → 事后复盘
F6 时机影响力自评表 → 自我评估
F7 团队时机判断力检测 → 团队评估
F8 情境时机地图 → 综合分析`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("111", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-111-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };