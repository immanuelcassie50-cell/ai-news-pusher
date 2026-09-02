const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Module completed badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 3.5, y: 0.8, w: 3, h: 0.6,
    fill: { color: "4CAF50" },
    rectRadius: 0.08
  });
  slide.addText("MODULE 4 COMPLETE", {
    x: 3.5, y: 0.9, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.bg, bold: true,
    align: "center",
    charSpacing: 2
  });

  // Title
  slide.addText("模块四完成", {
    x: 0.5, y: 1.6, w: 9, h: 0.8,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  // Summary box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.5, y: 2.6, w: 7, h: 1.8,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.1
  });

  slide.addText("本模块核心收获", {
    x: 1.7, y: 2.75, w: 6.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("聚焦的本质是选择，选择即代价\nTOP1思维：用三标准筛选，用矩阵排序\nAI重构地图：四要素重构工作流\n避开三大陷阱，专注自己的战场", {
    x: 1.7, y: 3.2, w: 6.6, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Next module teaser
  slide.addText("下一模块：执行与复盘 →", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Decorative elements
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.3, y: 4.9, w: 0.8, h: 0.8,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.1
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 8.9, y: 0.3, w: 0.8, h: 0.8,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.1
  });

  return slide;
}

module.exports = { createSlide };
