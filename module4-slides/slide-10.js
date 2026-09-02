const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 10, title: '聚焦排序矩阵详解' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("10", { x: 9.0, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("聚焦排序矩阵详解", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const quadrants = [
    { x: 0.5, y: 1.4, color: "4CAF50", title: "快速胜利 (Quick Wins)", desc: "低难度 + 高价值", example: "例：优化一个流程、修复一个Bug、写一篇复盘", action: "立即执行，越多越好" },
    { x: 5.1, y: 1.4, color: theme.primary, title: "大项目 (Major Projects)", desc: "高难度 + 高价值", example: "例：系统重构、新产品研发、团队扩张", action: "拆解分期，小步快跑" },
    { x: 0.5, y: 3.5, color: theme.accent, title: "填充项 (Fill-ins)", desc: "低难度 + 低价值", example: "例：整理文档、回复邮件、参加低效会议", action: "有空再做，批量处理" },
    { x: 5.1, y: 3.5, color: "FF5722", title: "避免 (Avoid)", desc: "高难度 + 低价值", example: "例：重复造轮子、迎合无效需求、完美主义陷阱", action: "坚决不做，重新审视" }
  ];
  quadrants.forEach(q => {
    slide.addShape(pres.shapes.RECTANGLE, { x: q.x, y: q.y, w: 4.4, h: 1.85, fill: { color: q.color, transparency: 85 }, line: { color: q.color, width: 2 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: q.x, y: q.y, w: 4.4, h: 0.5, fill: { color: q.color } });
    slide.addText(q.title, { x: q.x + 0.15, y: q.y + 0.08, w: 4.1, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(q.desc, { x: q.x + 0.15, y: q.y + 0.58, w: 4.1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: q.color, bold: true });
    slide.addText(q.example, { x: q.x + 0.15, y: q.y + 0.95, w: 4.1, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(q.action, { x: q.x + 0.15, y: q.y + 1.4, w: 4.1, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: q.color, bold: true });
  });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-10-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
