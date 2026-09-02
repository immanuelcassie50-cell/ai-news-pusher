const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("为什么'什么都想做'会让你什么都做不好", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Key insight box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.4, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });
  slide.addText("资源有限，选择即代价", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Comparison section
  slide.addText("A：分散10个项目", {
    x: 0.5, y: 2.4, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // 10 small bars at 10%
  for (let i = 0; i < 10; i++) {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5 + i * 0.42, y: 2.9, w: 0.35, h: 1.5,
      fill: { color: theme.light }
    });
  }
  slide.addText("60%", {
    x: 0.5, y: 4.5, w: 4.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });
  slide.addText("每个项目仅获10%资源", {
    x: 0.5, y: 4.8, w: 4.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center"
  });

  // VS
  slide.addText("VS", {
    x: 4.5, y: 3.4, w: 1, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  slide.addText("B：聚焦1个项目", {
    x: 5.2, y: 2.4, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // 1 tall bar at 100%
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.9, w: 0.8, h: 1.5,
    fill: { color: theme.primary }
  });
  slide.addText("100%", {
    x: 5.2, y: 4.5, w: 4.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });
  slide.addText("全力投入，突破临界点", {
    x: 5.2, y: 4.8, w: 4.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
