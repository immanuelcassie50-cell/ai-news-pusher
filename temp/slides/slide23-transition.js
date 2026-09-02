const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("确定TOP1之后呢？", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("聚焦是开始，执行才是关键", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Preview content box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 2.0, w: 9, h: 2.6,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.1
  });

  // Module 5 label
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.7, y: 2.2, w: 1.8, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("MODULE 5", {
    x: 0.7, y: 2.25, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.bg, bold: false,
    align: "center"
  });

  // Next module title
  slide.addText("执行与复盘", {
    x: 0.7, y: 2.85, w: 8.6, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Preview points
  slide.addText("如何把计划变成行动？\n如何从执行中学习和迭代？\n如何建立持续改进的机制？", {
    x: 0.7, y: 3.5, w: 8.6, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Arrow
  slide.addText("→", {
    x: 8.5, y: 4.9, w: 0.5, h: 0.4,
    fontSize: 24, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  return slide;
}

module.exports = { createSlide };
