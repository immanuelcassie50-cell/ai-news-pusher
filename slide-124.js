const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 124, title: "八大工具 回顾" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("八大工具 回顾", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText(`F1 信号识别卡 → 快速识别四维信号
F2 窗口判断表 → 评估窗口等级
F3 策略选择器 → 匹配最佳策略
F4 六场景地图 → 场景导航
F5 复盘表 → 事后分析
F6 自评表 → 自我评估
F7 团队检测 → 团队评估
F8 综合地图 → 综合分析`, { x: 0.5, y: 1.1, w: 9, h: 3.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("124", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = {
  primary: "B5401F",
  secondary: "5A5A5A",
  accent: "C4501A",
  light: "8A8A8A",
  bg: "FAFAF8"
};; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-124-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };