const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("分散精力的机会成本", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Visual: 10 bars at 10%
  slide.addText("分散精力", {
    x: 0.5, y: 1.2, w: 4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  for (let i = 0; i < 10; i++) {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5 + i * 0.4, y: 1.6, w: 0.32, h: 2.0,
      fill: { color: theme.light }
    });
    slide.addText("10%", {
      x: 0.5 + i * 0.4, y: 3.7, w: 0.32, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.accent, bold: false,
      align: "center"
    });
  }

  // Result label
  slide.addText("= 总投入 100%，效果分散", {
    x: 0.5, y: 4.1, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  // Single bar at 100%
  slide.addText("聚焦精力", {
    x: 5.5, y: 1.2, w: 4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.5, y: 1.6, w: 1.2, h: 2.0,
    fill: { color: theme.primary }
  });
  slide.addText("100%", {
    x: 5.5, y: 3.7, w: 1.2, h: 0.25,
    fontSize: 9, fontFace: "Arial",
    color: theme.primary, bold: false,
    align: "center"
  });

  slide.addText("= 总投入 100%，效果集中", {
    x: 5.5, y: 4.1, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  // Key insight box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.6, w: 9, h: 0.7,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("10个60分不如1个100分", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
