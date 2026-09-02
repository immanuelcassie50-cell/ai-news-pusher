const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with soft color
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: "#43aa8b" }
  });
  slide.addText("催化师的自我关爱", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("照顾好自己，才能照顾好他人", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Challenge-Solution comparison
  // Left column - Challenges
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("职业挑战", {
    x: 0.4, y: 1.5, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  const challenges = [
    { title: "情感消耗", desc: "承载他人情绪" },
    { title: "保持中立", desc: "不说自己的观点" },
    { title: "高频出差", desc: "身心疲惫" },
    { title: "持续学习", desc: "跟上知识更新" }
  ];

  challenges.forEach((c, i) => {
    const y = 2.1 + i * 0.72;
    const isEven = i % 2 === 0;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 4.4, h: 0.62,
      fill: { color: isEven ? "ffffff" : theme.light }
    });

    // Warning indicator
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.55, y: y + 0.12, w: 0.38, h: 0.38,
      fill: { color: theme.accent, transparency: 30 }
    });
    slide.addText("⚠", {
      x: 0.55, y: y + 0.12, w: 0.38, h: 0.38,
      fontSize: 12,
      align: "center", valign: "middle"
    });

    slide.addText(c.title, {
      x: 1.05, y: y + 0.1, w: 3.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(c.desc, {
      x: 1.05, y: y + 0.36, w: 3.5, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Arrow
  slide.addText("→", {
    x: 4.7, y: 3.5, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Right column - Self-care
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.4, h: 0.5,
    fill: { color: "#43aa8b" }
  });
  slide.addText("自我关爱", {
    x: 5.2, y: 1.5, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  const cares = [
    { title: "设立边界", desc: "工作与生活平衡" },
    { title: "情绪隔离", desc: "不被情绪带走" },
    { title: "定期复盘", desc: "自我觉察成长" },
    { title: "社群支持", desc: "同行互相支持" }
  ];

  cares.forEach((c, i) => {
    const y = 2.1 + i * 0.72;
    const isEven = i % 2 === 0;

    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.4, h: 0.62,
      fill: { color: isEven ? "ffffff" : theme.light }
    });

    // Checkmark indicator
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: y + 0.12, w: 0.38, h: 0.38,
      fill: { color: "#43aa8b", transparency: 30 }
    });
    slide.addText("✓", {
      x: 5.35, y: y + 0.12, w: 0.38, h: 0.38,
      fontSize: 12, fontFace: "Arial",
      color: "#43aa8b", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(c.title, {
      x: 5.85, y: y + 0.1, w: 3.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(c.desc, {
      x: 5.85, y: y + 0.36, w: 3.5, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.0, w: 9.2, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("\"催化师不是燃烧自己照亮他人，而是让自己成为可持续的光源\"", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("记住：你不需要拯救所有人，你只需要帮助他们拯救自己", {
    x: 0.6, y: 5.48, w: 8.8, h: 0.28,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 30,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
