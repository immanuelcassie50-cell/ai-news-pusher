const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三总结：节奏把控能力评估", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Self-assessment radar chart representation
  slide.addText("自我评估维度", {
    x: 0.5, y: 1.0, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Radar chart visualization (simplified as bars)
  const dimensions = [
    { name: "节奏感知", score: 4, max: 5 },
    { name: "时机判断", score: 3, max: 5 },
    { name: "灵活调整", score: 4, max: 5 },
    { name: "异常处理", score: 3, max: 5 },
    { name: "效率平衡", score: 4, max: 5 }
  ];

  dimensions.forEach((dim, i) => {
    const y = 1.5 + i * 0.7;

    slide.addText(dim.name, {
      x: 0.5, y: y + 0.05, w: 1.8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.dark
    });

    // Background bar
    slide.addShape(pres.ShapeType.rect, {
      x: 2.4, y: y + 0.1, w: 4, h: 0.35,
      fill: { color: theme.light }
    });

    // Score bar
    const scoreWidth = (dim.score / dim.max) * 4;
    slide.addShape(pres.ShapeType.rect, {
      x: 2.4, y: y + 0.1, w: scoreWidth, h: 0.35,
      fill: { color: theme.accent }
    });

    slide.addText(dim.score + "/" + dim.max, {
      x: 6.5, y: y + 0.05, w: 0.8, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true
    });
  });

  // Key takeaways
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5, y: 1.5, w: 2.2, h: 3.2,
    fill: { color: theme.primary }
  });

  slide.addText("核心要点", {
    x: 7.65, y: 1.65, w: 1.9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const takeaways = [
    "节奏是工具",
    "节点是锚点",
    "灵活是智慧",
    "效果是标准"
  ];

  takeaways.forEach((t, i) => {
    slide.addText("✓ " + t, {
      x: 7.65, y: 2.1 + i * 0.55, w: 1.9, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff"
    });
  });

  // Next module teaser
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.65,
    fill: { color: theme.secondary }
  });
  slide.addText("下一步：模块四 — 人机协作效果衡量", {
    x: 0.7, y: 5.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
