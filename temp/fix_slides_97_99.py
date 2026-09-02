#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-97
write_slide(97, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 97, title: "高频应答卡F01-F02" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高频应答卡 F01-F02", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const cards = [
    { q: "这个项目投资回报率多少？", a: "预计年化回报率28%，18个月回收投资。重点不在数字高低，而在我们有能力达成这个目标。" },
    { q: "竞争对手怎么做？", a: "三家同行已落地，平均提升毛利3-5个百分点。我们方案借鉴了最新实践。" }
  ];
  cards.forEach((c, i) => {
    const y = 1.1 + i * 2.15;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 2.0, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 2.0, fill: { color: theme.accent } });
    slide.addText("Q: " + c.q, { x: 0.75, y: y + 0.15, w: 8.5, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("A: " + c.a, { x: 0.75, y: y + 0.65, w: 8.5, h: 1.1, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("97", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-97-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-98
write_slide(98, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 98, title: "高频应答卡F03-F04" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高频应答卡 F03-F04", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const cards = [
    { q: "团队怎么看这个项目？", a: "核心团队已参与评估，90%认为可行。我们有明确的团队支持基础。" },
    { q: "失败了怎么办？", a: "我们设计了止损边界：试点阶段最大损失可控在40万以内，是全局风险的5%。" }
  ];
  cards.forEach((c, i) => {
    const y = 1.1 + i * 2.15;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 2.0, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 2.0, fill: { color: theme.accent } });
    slide.addText("Q: " + c.q, { x: 0.75, y: y + 0.15, w: 8.5, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("A: " + c.a, { x: 0.75, y: y + 0.65, w: 8.5, h: 1.1, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("98", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-98-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-99
write_slide(99, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 99, title: "高频应答卡F05-F06" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高频应答卡 F05-F06", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const cards = [
    { q: "现在做不是最好的时机？", a: "市场窗口期就在眼前。等待的代价比尝试的风险更不确定。" },
    { q: "你有没有考虑过XX风险？", a: "我们评估过这个风险，已准备了三套应对预案，可以详细说明。" }
  ];
  cards.forEach((c, i) => {
    const y = 1.1 + i * 2.15;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 2.0, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 2.0, fill: { color: theme.accent } });
    slide.addText("Q: " + c.q, { x: 0.75, y: y + 0.15, w: 8.5, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("A: " + c.a, { x: 0.75, y: y + 0.65, w: 8.5, h: 1.1, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("99", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-99-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-109
write_slide(109, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 109, title: "高频应答卡F07-F08" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高频应答卡 F07-F08", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const cards = [
    { q: "这个ROI怎么算出来的？", a: "基于三个核心假设：效率提升15%，人力成本节省80万，错误率降低带来的质量成本节约。每个假设都有历史数据支撑。" },
    { q: "为什么不分阶段做？", a: "这正是我们的方案设计：先从试点部门开始，3个月验证后再扩展到全公司。最小授权，降低您的决策风险。" }
  ];
  cards.forEach((c, i) => {
    const y = 1.1 + i * 2.15;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 2.0, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 2.0, fill: { color: theme.accent } });
    slide.addText("Q: " + c.q, { x: 0.75, y: y + 0.15, w: 8.5, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("A: " + c.a, { x: 0.75, y: y + 0.65, w: 8.5, h: 1.1, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("109", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-109-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Done")