const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.85, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("公共选择理论：布坎南", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Portrait placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 2.3, h: 2.6,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("James\nBuchanan\n1919-2013", {
    x: 0.5, y: 1.7, w: 2.3, h: 1.6,
    fontFace: "Georgia", fontSize: 14, color: theme.secondary,
    align: "center", valign: "middle", italic: true
  });

  // Key facts
  slide.addText("生平要点", {
    x: 3.1, y: 1.15, w: 6.4, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  const facts = [
    "1986年诺贝尔经济学奖",
    "公共选择理论之父",
    "维吉尼亚理工大学和乔治·梅森大学教授",
    "《同意的计算》(1962) 与塔洛克合著",
    "将经济学方法应用于政治决策分析"
  ];

  facts.forEach((fact, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 3.1, y: 1.58 + i * 0.38, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(fact, {
      x: 3.35, y: 1.5 + i * 0.38, w: 6.15, h: 0.36,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
    });
  });

  // Core innovation box
  slide.addShape(pres.ShapeType.rect, {
    x: 3.1, y: 3.5, w: 6.4, h: 0.9,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("核心创新：用经济学方法分析政治过程，把政府当作\"经济人\"", {
    x: 3.2, y: 3.6, w: 6.2, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 13, color: theme.secondary,
    valign: "middle"
  });

  // Key works
  slide.addText("代表著作", {
    x: 0.5, y: 4.55, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const works = [
    { title: "《同意的计算》", year: "1962", topic: "立宪民主的经济学基础" },
    { title: "《自由、市场与国家》", year: "1980s", topic: "公共选择理论通俗读物" },
    { title: "《立宪经济学》", year: "1980s", topic: "制度与宪政的经济分析" }
  ];

  works.forEach((w, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 4.9, w: 2.95, h: 0.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(w.title + " (" + w.year + ")", {
      x: x + 0.1, y: 4.93, w: 2.75, h: 0.3,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.accent, bold: true
    });
    slide.addText(w.topic, {
      x: x + 0.1, y: 5.23, w: 2.75, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("40", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
