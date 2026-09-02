const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 14, title: 'AI重构地图的四大要素' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("14", { x: 9, y: 5.1, w: 0.8, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "right" });
  slide.addText("AI重构地图的四大要素", { x: 0.6, y: 0.5, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.3, w: 2, h: 0.04, fill: { color: theme.accent } });
  // 2x2 Grid
  const gridData = [
    { title: "目标场景", desc: "明确要改进的具体工作场景", x: 0.8, y: 1.8 },
    { title: "当前状态", desc: "现状的痛点与时间成本", x: 5.2, y: 1.8 },
    { title: "目标状态", desc: "AI赋能后的理想状态", x: 0.8, y: 3.5 },
    { title: "行动路径", desc: "分步骤实施计划与里程碑", x: 5.2, y: 3.5 }
  ];
  gridData.forEach((item, i) => {
    const fillColor = i % 2 === 0 ? theme.light : theme.primary;
    const textColor = i % 2 === 0 ? theme.secondary : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, { x: item.x, y: item.y, w: 4, h: 1.4, fill: { color: fillColor }, line: { color: theme.accent, width: 0.5 } });
    slide.addText(item.title, { x: item.x, y: item.y + 0.2, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: textColor, bold: true, align: "center" });
    slide.addText(item.desc, { x: item.x, y: item.y + 0.7, w: 4, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: i % 2 === 0 ? theme.accent : theme.light, align: "center" });
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-14-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
