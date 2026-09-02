const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with accent stripe
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.85, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("弗里德曼：货币主义的奠基人", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Portrait placeholder area
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 2.5, h: 3.2,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("Milton\nFriedman\n1912-2006", {
    x: 0.5, y: 1.8, w: 2.5, h: 2,
    fontFace: "Georgia", fontSize: 14, color: theme.secondary,
    align: "center", valign: "middle", italic: true
  });

  // Key facts column
  slide.addText("生平要点", {
    x: 3.3, y: 1.2, w: 6.2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  const facts = [
    "1976年诺贝尔经济学奖得主",
    "二战后最重要的价格理论家之一",
    "曾任教于芝加哥大学（1946-1977）",
    "《资本主义与自由》(1962) 影响深远",
    "《自由选择》(1979) 畅销全球"
  ];

  facts.forEach((fact, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 3.3, y: 1.72 + i * 0.42, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(fact, {
      x: 3.55, y: 1.65 + i * 0.42, w: 5.95, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 12, color: theme.secondary
    });
  });

  // Core contributions box
  slide.addShape(pres.ShapeType.rect, {
    x: 3.3, y: 3.9, w: 6.2, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("核心贡献", {
    x: 3.4, y: 3.95, w: 2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.accent, bold: true
  });
  slide.addText([
    { text: "货币供给量作为通胀主因", options: { bullet: true, breakLine: true } },
    { text: "永久收入假说", options: { bullet: true, breakLine: true } },
    { text: "浮动汇率主张", options: { bullet: true } }
  ], {
    x: 3.5, y: 4.3, w: 5.9, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Quote
  slide.addText("\"通胀永远而且无处不在是一种货币现象\"", {
    x: 0.5, y: 4.6, w: 2.5, h: 0.8,
    fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary,
    italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("32", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
