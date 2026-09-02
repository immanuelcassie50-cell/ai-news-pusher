const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦决策树", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decision tree nodes
  // Root node
  slide.addShape(pres.ShapeType.roundRect, {
    x: 3.8, y: 1.0, w: 2.4, h: 0.7,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("这件事有价值吗？", {
    x: 3.8, y: 1.1, w: 2.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  // Branch lines from root
  slide.addShape(pres.ShapeType.line, {
    x: 4.2, y: 1.7, w: 0, h: 0.4,
    line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.ShapeType.line, {
    x: 5.8, y: 1.7, w: 0, h: 0.4,
    line: { color: theme.accent, width: 1 }
  });
  slide.addText("否", {
    x: 3.9, y: 2.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false
  });
  slide.addText("是", {
    x: 5.6, y: 2.0, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false
  });

  // Second level nodes
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.5, y: 2.4, w: 2.2, h: 0.6,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("放弃", {
    x: 1.5, y: 2.5, w: 2.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.3, y: 2.4, w: 2.2, h: 0.6,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("你能落地吗？", {
    x: 6.3, y: 2.5, w: 2.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  // Branch lines from second level
  slide.addShape(pres.ShapeType.line, {
    x: 6.7, y: 3.0, w: 0, h: 0.4,
    line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.ShapeType.line, {
    x: 8.0, y: 3.0, w: 0, h: 0.4,
    line: { color: theme.accent, width: 1 }
  });
  slide.addText("否", {
    x: 6.4, y: 3.3, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false
  });
  slide.addText("是", {
    x: 7.7, y: 3.3, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false
  });

  // Third level nodes
  slide.addShape(pres.ShapeType.roundRect, {
    x: 4.5, y: 3.7, w: 2.2, h: 0.6,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("先练能力", {
    x: 4.5, y: 3.8, w: 2.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 7.3, y: 3.7, w: 2.2, h: 0.6,
    fill: { color: "4CAF50" },
    rectRadius: 0.08
  });
  slide.addText("立即执行！", {
    x: 7.3, y: 3.8, w: 2.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  // Final arrow
  slide.addShape(pres.ShapeType.line, {
    x: 8.4, y: 4.3, w: 0, h: 0.5,
    line: { color: theme.accent, width: 1 }
  });

  // Result box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.8, y: 4.85, w: 3.0, h: 0.5,
    fill: { color: "4CAF50", transparency: 20 },
    line: { color: "4CAF50", width: 1 },
    rectRadius: 0.08
  });
  slide.addText("TOP1 = 价值大 × 能落地", {
    x: 6.8, y: 4.9, w: 3.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "4CAF50", bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
