const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 12, title: '聚焦决策树' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("12", { x: 9.0, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("聚焦决策树", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const nodeStyle = { fill: { color: theme.light }, line: { color: theme.primary, width: 2 } };
  const yesStyle = { color: "4CAF50", label: "是" };
  const noStyle = { color: "FF5722", label: "否" };
  const nodes = [
    { x: 4.25, y: 1.3, w: 1.5, h: 0.55, text: "想做？", type: "question" },
    { x: 2.5, y: 2.2, w: 2.0, h: 0.55, text: "想清楚了吗？", type: "question" },
    { x: 5.5, y: 2.2, w: 2.0, h: 0.55, text: "（结束）放一放", type: "end" },
    { x: 1.2, y: 3.1, w: 1.6, h: 0.55, text: "能落地吗？", type: "question" },
    { x: 3.8, y: 3.1, w: 1.6, h: 0.55, text: "可积累吗？", type: "question" },
    { x: 0.3, y: 4.0, w: 1.4, h: 0.55, text: "→ 立即做", type: "action" },
    { x: 2.3, y: 4.0, w: 1.4, h: 0.55, text: "→ 拆解分期", type: "action" },
    { x: 4.3, y: 4.0, w: 1.4, h: 0.55, text: "→ 填充项", type: "action" },
    { x: 6.0, y: 4.0, w: 1.4, h: 0.55, text: "→ 避免", type: "avoid" }
  ];
  const connections = [
    { x1: 5, y1: 1.85, x2: 3.5, y2: 2.2, label: "否" },
    { x1: 5, y1: 1.85, x2: 6.5, y2: 2.2, label: "是" },
    { x1: 2.5, y1: 2.75, x2: 2, y2: 3.1, label: "是" },
    { x1: 2.5, y1: 2.75, x2: 4.6, y2: 3.1, label: "否" },
    { x1: 1.2, y1: 3.65, x2: 1, y2: 4.0, label: "是" },
    { x1: 1.2, y1: 3.65, x2: 2.8, y2: 4.0, label: "否" },
    { x1: 3.8, y1: 3.65, x2: 4.6, y2: 4.0, label: "是" },
    { x1: 3.8, y1: 3.65, x2: 6.7, y2: 4.0, label: "否" }
  ];
  connections.forEach(c => {
    slide.addShape(pres.shapes.LINE, { x: c.x1, y: c.y1, w: c.x2 - c.x1, h: c.y2 - c.y1, line: { color: theme.accent, width: 1 } });
  });
  nodes.forEach(n => {
    const fillColor = n.type === "action" ? theme.primary : n.type === "avoid" ? "FF5722" : n.type === "end" ? theme.accent : theme.light;
    slide.addShape(pres.shapes.RECTANGLE, { x: n.x, y: n.y, w: n.w, h: n.h, fill: { color: fillColor, transparency: n.type === "action" || n.type === "avoid" ? 0 : 70 }, line: { color: fillColor, width: 2 } });
    slide.addText(n.text, { x: n.x, y: n.y, w: n.w, h: n.h, fontSize: n.type === "action" || n.type === "avoid" ? 11 : 10, fontFace: "Microsoft YaHei", color: n.type === "action" || n.type === "avoid" ? "FFFFFF" : theme.primary, bold: true, align: "center", valign: "middle" });
  });
  connections.forEach(c => {
    slide.addText(c.label, { x: (c.x1 + c.x2) / 2 - 0.3, y: (c.y1 + c.y2) / 2 - 0.2, w: 0.6, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: c.label === "是" ? "4CAF50" : "FF5722", align: "center" });
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-12-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
