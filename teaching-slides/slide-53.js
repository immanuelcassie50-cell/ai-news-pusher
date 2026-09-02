const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("认证评估表解读", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left section - Score explanation cards
  slide.addText("评分标准", {
    x: 0.5, y: 1.0, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scores = [
    { score: "5分", desc: "优秀示范", color: theme.accent, bg: "fff5f5" },
    { score: "4分", desc: "良好表现", color: theme.primary, bg: theme.light },
    { score: "3分", desc: "达到基本要求", color: theme.secondary, bg: "ffffff" },
    { score: "2分", desc: "需要改进", color: theme.secondary, bg: "ffffff" }
  ];

  scores.forEach((s, i) => {
    const y = 1.5 + i * 0.85;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.5, h: 0.75,
      fill: { color: s.bg },
      line: { color: s.color, width: 1.5 }
    });

    // Score badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: s.color }
    });
    slide.addText(s.score, {
      x: 0.7, y: y + 0.12, w: 0.5, h: 0.5,
      fontSize: 11, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(s.desc, {
      x: 1.35, y: y + 0.12, w: 3.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Right section - Example
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.0, w: 4.5, h: 4.0,
    fill: { color: theme.primary }
  });

  slide.addText("评分示例", {
    x: 5.4, y: 1.15, w: 4.1, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  // Example content
  slide.addText("工具运用维度评分", {
    x: 5.4, y: 1.7, w: 4.1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  const examples = [
    { score: "5分", example: "熟练运用ORID、六帽等多种工具，灵活应对各类情境" },
    { score: "4分", example: "能正确使用ORID工具，提问层次清晰" },
    { score: "3分", example: "了解工具基本原理，使用时有些生硬" },
    { score: "2分", example: "工具使用不熟练，需要进一步练习" }
  ];

  examples.forEach((e, i) => {
    const y = 2.15 + i * 0.7;

    // Score tag
    slide.addShape(pres.ShapeType.rect, {
      x: 5.4, y: y, w: 0.5, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(e.score, {
      x: 5.4, y: y, w: 0.5, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Example text
    slide.addText(e.example, {
      x: 6.0, y: y, w: 3.5, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff"
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.15, w: 10, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("提示：每个维度独立评分，最终取加权平均", {
    x: 0.5, y: 5.15, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
