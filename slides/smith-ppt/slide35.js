const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with distinctive accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.85, w: 6, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("科斯：产权理论的诞生", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Portrait placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 2.3, h: 2.8,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("Ronald\nCoase\n1910-2013", {
    x: 0.5, y: 1.8, w: 2.3, h: 1.8,
    fontFace: "Georgia", fontSize: 14, color: theme.secondary,
    align: "center", valign: "middle", italic: true
  });

  // Biographical info
  slide.addText("生平要点", {
    x: 3.1, y: 1.2, w: 6.4, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  const bioItems = [
    "1991年诺贝尔经济学奖（迟到44年！）",
    "产权经济学和制度经济学的开创者",
    "1937年发表《企业的性质》（27岁！）",
    "1960年发表《社会成本问题》（里程碑）",
    "先后任教于芝加哥大学和弗吉尼亚大学"
  ];

  bioItems.forEach((item, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 3.1, y: 1.7 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 3.35, y: 1.62 + i * 0.4, w: 6.15, h: 0.38,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
    });
  });

  // Two seminal papers
  slide.addShape(pres.ShapeType.rect, {
    x: 3.1, y: 3.7, w: 3.1, h: 1.15,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 }
  });
  slide.addText("1937", {
    x: 3.2, y: 3.75, w: 0.8, h: 0.3,
    fontFace: "Georgia", fontSize: 12, color: theme.accent, bold: true
  });
  slide.addText("《企业的性质》", {
    x: 3.2, y: 4.0, w: 2.9, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.primary, bold: true
  });
  slide.addText("为何存在企业？市场交易有成本", {
    x: 3.2, y: 4.3, w: 2.9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 6.4, y: 3.7, w: 3.1, h: 1.15,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("1960", {
    x: 6.5, y: 3.75, w: 0.8, h: 0.3,
    fontFace: "Georgia", fontSize: 12, color: theme.accent, bold: true
  });
  slide.addText("《社会成本问题》", {
    x: 6.5, y: 4.0, w: 2.9, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.primary, bold: true
  });
  slide.addText("外部性问题：产权界定是关键", {
    x: 6.5, y: 4.3, w: 2.9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary
  });

  // Legacy quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("\"没有产权保护，市场经济无法运作\" — 科斯", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    italic: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("35", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
