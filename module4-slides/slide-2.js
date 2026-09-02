const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'section-divider', index: 2, title: '聚焦与排序' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  // Large "04" centered (120pt, white, transparency:20)
  slide.addText("04", { x: 0, y: 1.5, w: 10, h: 1.5, fontSize: 120, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle", transparency: 20 });
  // Title "聚焦与排序" (44pt white bold)
  slide.addText("聚焦与排序", { x: 0, y: 3.2, w: 10, h: 0.8, fontSize: 44, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, { x: 4, y: 4.1, w: 2, h: 0.05, fill: { color: "FFFFFF" } });
  // Page badge: white circle with "2"
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: "FFFFFF" } });
  slide.addText("2", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
