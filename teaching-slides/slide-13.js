const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("ORID四层提问深度解析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four-layer pyramid structure (bottom to top: largest to smallest conceptually)
  // Using four columns instead - left to right progression

  const layers = [
    {
      letter: "O",
      name: "Objective",
      chinese: "客观层",
      questions: "发生了什么？具体事实是什么？数据和信息有哪些？",
      detail: "关注客观事实与具体数据",
      color: theme.primary,
      width: 2.15
    },
    {
      letter: "R",
      name: "Reflective",
      chinese: "反应层",
      questions: "你的感受是什么？情绪如何？有什么惊喜或触动？",
      detail: "关注情绪反应与内心感受",
      color: theme.accent,
      width: 2.15
    },
    {
      letter: "I",
      name: "Interpretive",
      chinese: "诠释层",
      questions: "意义是什么？价值在哪里？学到了什么？",
      detail: "关注意义建构与价值提炼",
      color: theme.secondary,
      width: 2.15
    },
    {
      letter: "D",
      name: "Decisional",
      chinese: "决定层",
      questions: "下一步行动是什么？谁能做什么？何时开始？",
      detail: "关注行动承诺与具体计划",
      color: theme.primary,
      width: 2.15
    }
  ];

  const startX = 0.5;
  const gap = 0.2;

  // Draw connecting line behind cards
  slide.addShape(pres.ShapeType.line, {
    x: startX + 1.075, y: 1.35, w: 8.05, h: 0,
    line: { color: theme.secondary, width: 2, dashType: "dash" }
  });

  layers.forEach((layer, i) => {
    const x = startX + i * (layer.width + gap);
    const y = 1.5;
    const cardH = 3.6;

    // Card background with depth shadow effect
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.05, y: y + 0.05, w: layer.width, h: cardH,
      fill: { color: theme.secondary, transparency: 70 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: layer.width, h: cardH,
      fill: { color: theme.light },
      line: { color: layer.color, width: 1 }
    });

    // Top accent block
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: layer.width, h: 0.7,
      fill: { color: layer.color }
    });

    // Letter badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + layer.width / 2 - 0.3, y: y + 0.1, w: 0.6, h: 0.6,
      fill: { color: "ffffff" }
    });
    slide.addText(layer.letter, {
      x: x + layer.width / 2 - 0.3, y: y + 0.15, w: 0.6, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: layer.color, bold: true, align: "center", valign: "middle", margin: 0
    });

    // Layer number indicator
    slide.addText(`第${i + 1}层`, {
      x: x + 0.1, y: y + 0.8, w: layer.width - 0.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", margin: 0
    });

    // Chinese name
    slide.addText(layer.chinese, {
      x: x + 0.1, y: y + 1.1, w: layer.width - 0.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", margin: 0
    });

    // English name
    slide.addText(layer.name, {
      x: x + 0.1, y: y + 1.45, w: layer.width - 0.2, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: layer.color, align: "center", margin: 0
    });

    // Divider
    slide.addShape(pres.ShapeType.line, {
      x: x + 0.3, y: y + 1.85, w: layer.width - 0.6, h: 0,
      line: { color: theme.secondary, width: 0.5, transparency: 50 }
    });

    // Questions label
    slide.addText("关键提问", {
      x: x + 0.15, y: y + 1.95, w: layer.width - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, margin: 0
    });

    // Questions content
    slide.addText(layer.questions, {
      x: x + 0.15, y: y + 2.2, w: layer.width - 0.3, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, margin: 0
    });

    // Bottom detail tag
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: y + 3.25, w: layer.width - 0.3, h: 0.25,
      fill: { color: layer.color, transparency: 85 }
    });
    slide.addText(layer.detail, {
      x: x + 0.15, y: y + 3.25, w: layer.width - 0.3, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: layer.color, align: "center", valign: "middle", margin: 0
    });

    // Step indicator at bottom
    slide.addText(`${i + 1}`, {
      x: x + layer.width / 2 - 0.15, y: y + cardH - 0.1, w: 0.3, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, align: "center", margin: 0
    });
  });

  // Arrow indicators between cards
  for (let i = 0; i < 3; i++) {
    const x = startX + (i + 1) * (layers[0].width + gap) - gap / 2 - 0.1;
    slide.addText("→", {
      x: x, y: 3.1, w: 0.3, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", margin: 0
    });
  }

  return slide;
}

module.exports = { createSlide };
