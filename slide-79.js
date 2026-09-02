const pptxgen = require("pptxgenjs");
const sc = { type: "content", index: 79, title: "价值曲线的四个行动" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("价值曲线的四个行动", { x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const actions = [
    { word: "Eliminate", cn: "消除", desc: "哪些要素不再需要", color: theme.secondary },
    { word: "Reduce", cn: "降低", desc: "哪些要素降到标准以下", color: theme.light },
    { word: "Raise", cn: "提升", desc: "哪些要素超过行业标准", color: theme.accent },
    { word: "Create", cn: "创造", desc: "哪些要素行业从未提供", color: theme.primary }
  ];
  actions.forEach((a, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.2, w: 2.2, h: 3.5, fill: { color: a.color }, rectRadius: 0.1 });
    slide.addText(a.word, { x: x, y: 1.4, w: 2.2, h: 0.5, fontSize: 16, fontFace: "Arial", color: i === 2 ? theme.primary : "FFFFFF", bold: true, align: "center" });
    slide.addText(a.cn, { x: x, y: 1.95, w: 2.2, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", color: i === 2 ? theme.primary : "FFFFFF", bold: true, align: "center" });
    slide.addShape(pres.shapes.LINE, { x: x + 0.4, y: 2.6, w: 1.4, h: 0, line: { color: i === 2 ? theme.primary : "FFFFFF", width: 1, transparency: 50 } });
    slide.addText(a.desc, { x: x + 0.1, y: 2.8, w: 2.0, h: 1.5, fontSize: 13, fontFace: "Microsoft YaHei", color: i === 2 ? theme.primary : "FFFFFF", align: "center" });
  });
  slide.addText("ERRC法则", { x: 3.5, y: 4.85, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("79", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "264653", secondary: "2a9d8f", accent: "e9c46a", light: "f4a261", bg: "fefae0" }; createSlide(pres, theme); pres.writeFile({ fileName: "./output/slide-79-preview.pptx" }); }
module.exports = { createSlide, slideConfig: sc };