const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("混合式催化会议设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("线上线下融合，公平参与体验", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Challenge-Solution table header
  const headerY = 1.5;

  // Challenge header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: headerY, w: 4.2, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("混合式挑战", {
    x: 0.5, y: headerY, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Solution header
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: headerY, w: 4.2, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("应对策略", {
    x: 5.3, y: headerY, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Table rows
  const challenges = [
    { challenge: "线下参与者优势明显", solution: "指定线上协调员" },
    { challenge: "线上参与者容易被忽视", solution: "摄像头设置建议" },
    { challenge: "技术问题影响体验", solution: "均匀分组" },
    { challenge: "互动设计难度增加", solution: "增强互动环节" }
  ];

  challenges.forEach((c, i) => {
    const y = 2.1 + i * 0.8;
    const isEven = i % 2 === 0;

    // Challenge cell
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.2, h: 0.7,
      fill: { color: isEven ? "ffffff" : theme.light }
    });
    slide.addText(c.challenge, {
      x: 0.7, y: y, w: 3.8, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: 4.6, y: y, w: 0.5, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Solution cell
    slide.addShape(pres.ShapeType.rect, {
      x: 5.3, y: y, w: 4.2, h: 0.7,
      fill: { color: isEven ? "ffffff" : theme.light }
    });
    slide.addText(c.solution, {
      x: 5.5, y: y, w: 3.8, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });
  });

  // Bottom key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.3, w: 9.0, h: 0.5,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7, y: 5.4, w: 0.3, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("!", {
    x: 0.7, y: 5.4, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("混合式会议的核心：让线上和线下参与者拥有同等的参与机会和体验", {
    x: 1.1, y: 5.3, w: 8.2, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
