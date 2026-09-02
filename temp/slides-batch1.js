// slide-06.js - AI时代信任危机的5大结构性成因（总览图）
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 6, title: 'AI时代信任危机的五大结构性成因' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: theme.primary } });
  slide.addText("AI时代信任危机的五大结构性成因", { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2, h: 0.04, fill: { color: theme.accent } });
  const causes = [
    { num: "01", title: "信息不对称", desc: "客户不知道AI在服务，不知道AI的能力边界" },
    { num: "02", title: "能力边界模糊", desc: "AI能做什么不能做什么，客户不清楚" },
    { num: "03", title: "承诺可追溯性缺失", desc: "AI的承诺无法追踪，出了问题无人负责" },
    { num: "04", title: "情绪累积效应", desc: "一次失败会放大客户对整体服务的怀疑" },
    { num: "05", title: "人工接替断层", desc: "AI无法处理时，人工介入的关键转换点断裂" }
  ];
  causes.forEach((c, i) => {
    const y = 1.3 + i * 0.8;
    slide.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.1, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(c.num, { x: 0.6, y: y + 0.1, w: 0.5, h: 0.5, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(c.title, { x: 1.3, y: y, w: 2.5, h: 0.35, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(c.desc, { x: 1.3, y: y + 0.35, w: 5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.light });
  });
  // 明稳接续映射
  const mapping = [ { cause: "信息不对称", model: "明" }, { cause: "能力边界模糊", model: "明" }, { cause: "承诺可追溯性缺失", model: "稳" }, { cause: "情绪累积效应", model: "接" }, { cause: "人工接替断层", model: "接" } ];
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7, y: 1.3, w: 2.6, h: 3.8, fill: { color: "FFFFFF" }, line: { color: theme.border, width: 1 }, rectRadius: 0.1 });
  slide.addText("明稳接续映射", { x: 7.1, y: 1.4, w: 2.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  mapping.forEach((m, i) => {
    const y = 1.9 + i * 0.65;
    slide.addText(m.cause.substring(0, 6) + "...", { x: 7.1, y: y, w: 1.5, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.6, y: y, w: 0.9, h: 0.35, fill: { color: theme.primary }, rectRadius: 0.08 });
    slide.addText(m.model, { x: 8.6, y: y, w: 0.9, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("6", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
