const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("熊彼特：创造性破坏", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Left: Biography
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 3.0, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 3.0, h: 0.06,
    fill: { color: theme.accent }
  });
  slide.addText("Joseph Schumpeter", {
    x: 0.65, y: 1.35, w: 2.7, h: 0.35,
    fontSize: 14, fontFace: "Georgia",
    color: theme.primary, bold: true, italic: true
  });
  slide.addText("1883-1950", {
    x: 0.65, y: 1.75, w: 2.7, h: 0.25,
    fontSize: 11, fontFace: "Calibri",
    color: theme.light
  });
  slide.addText([
    { text: "奥地利学派第三代", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "哈佛大学教授", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "《经济发展理论》(1912)", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "《资本主义、社会主义与民主》(1942)", options: { fontSize: 11 } }
  ], {
    x: 0.65, y: 2.1, w: 2.7, h: 2.4,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right: Core concept
  slide.addText("创造性破坏（Creative Destruction）", {
    x: 3.8, y: 1.15, w: 5.7, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 1.7, w: 5.7, h: 2.0,
    fill: { color: theme.accent, transparency: 90 }
  });
  slide.addText([
    { text: "资本主义的本质特征是\"动态的不均衡\"：", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "企业家创新打破现有经济结构", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "旧技术、旧企业被淘汰", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "新组合（new combinations）推动经济发展", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "这并非失调，而是发展的本质", options: { bullet: true, fontSize: 12 } }
  ], {
    x: 4.0, y: 1.85, w: 5.3, h: 1.7,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Bottom: Quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("\"创造性破坏的长流永不枯竭——它不断吞噬现状，又不断创造新世界。\"", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.bg, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("21", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
