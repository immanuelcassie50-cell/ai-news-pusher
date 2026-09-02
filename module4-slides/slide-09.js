const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 9, title: '聚焦排序矩阵' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("9", { x: 9.2, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("聚焦排序矩阵", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const matrixX = 1.5, matrixY = 1.5, matrixW = 7, matrixH = 3.5;
  const midX = matrixX + matrixW / 2, midY = matrixY + matrixH / 2;
  slide.addShape(pres.shapes.RECTANGLE, { x: matrixX, y: matrixY, w: matrixW, h: matrixH, fill: { color: theme.light }, line: { color: theme.accent, width: 2 } });
  slide.addShape(pres.shapes.LINE, { x: midX, y: matrixY, w: 0, h: matrixH, line: { color: theme.accent, width: 1, dashType: "dash" } });
  slide.addShape(pres.shapes.LINE, { x: matrixX, y: midY, w: matrixW, h: 0, line: { color: theme.accent, width: 1, dashType: "dash" } });
  const quadrants = [
    { x: matrixX + 0.1, y: matrixY + 0.1, w: midX - matrixX - 0.2, h: midY - matrixY - 0.2, label: "Quick Wins", labelCN: "快速胜利", color: "4CAF50", tx: 0.5, ty: 0.6 },
    { x: midX + 0.1, y: matrixY + 0.1, w: matrixX + matrixW - midX - 0.2, h: midY - matrixY - 0.2, label: "Major Projects", labelCN: "大项目", color: theme.primary, tx: 0.5, ty: 0.6 },
    { x: matrixX + 0.1, y: midY + 0.1, w: midX - matrixX - 0.2, h: matrixY + matrixH - midY - 0.2, label: "Fill-ins", labelCN: "填充项", color: theme.accent, tx: 0.5, ty: 0.6 },
    { x: midX + 0.1, y: midY + 0.1, w: matrixX + matrixW - midX - 0.2, h: matrixY + matrixH - midY - 0.2, label: "Avoid", labelCN: "避免", color: "FF5722", tx: 0.5, ty: 0.6 }
  ];
  quadrants.forEach(q => {
    slide.addShape(pres.shapes.RECTANGLE, { x: q.x, y: q.y, w: q.w, h: q.h, fill: { color: q.color, transparency: 80 } });
    slide.addText(q.labelCN, { x: q.x + q.w * 0.1, y: q.y + q.h * 0.25, w: q.w * 0.8, h: 0.35, fontSize: 16, fontFace: "Microsoft YaHei", color: q.color, bold: true, align: "center" });
    slide.addText(q.label, { x: q.x + q.w * 0.1, y: q.y + q.h * 0.55, w: q.w * 0.8, h: 0.25, fontSize: 11, fontFace: "Arial", color: theme.secondary, align: "center" });
  });
  slide.addText("价值大小 →", { x: matrixX + matrixW + 0.15, y: midY - 0.2, w: 1.2, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("↑ 实现难度", { x: midX - 0.6, y: matrixY - 0.5, w: 1.2, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.1, w: 9, h: 0.4, fill: { color: theme.primary, transparency: 90 } });
  slide.addText("优先做左上（快速胜利），谨慎做右上（大项目），少做右下，避免左上", { x: 0.6, y: 5.15, w: 8.8, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-09-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
