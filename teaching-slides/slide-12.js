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
  slide.addText("ORID聚焦式会话", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle intro
  slide.addText("Structured Focused Conversation | 促进深度对话与有效反思", {
    x: 0.5, y: 1.1, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Four-step horizontal flow
  const steps = [
    { letter: "O", name: "Objective", chinese: "客观事实", desc: "发生了什么？", color: theme.primary },
    { letter: "R", name: "Reflective", chinese: "感受反应", desc: "你的感受？", color: theme.accent },
    { letter: "I", name: "Interpretive", chinese: "意义价值", desc: "意义在哪？", color: theme.secondary },
    { letter: "D", name: "Decisional", chinese: "行动计划", desc: "下一步？", color: theme.primary }
  ];

  const startX = 0.5;
  const cardW = 2.1;
  const gap = 0.35;

  steps.forEach((step, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.7, w: cardW, h: 3.3,
      fill: { color: theme.light },
      line: { color: step.color, width: 1.5 }
    });

    // Top colored bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.7, w: cardW, h: 0.6,
      fill: { color: step.color }
    });

    // Letter circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + cardW / 2 - 0.35, y: 2.15, w: 0.7, h: 0.7,
      fill: { color: step.color }
    });
    slide.addText(step.letter, {
      x: x + cardW / 2 - 0.35, y: 2.2, w: 0.7, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle", margin: 0
    });

    // English name
    slide.addText(step.name, {
      x: x + 0.1, y: 2.95, w: cardW - 0.2, h: 0.4,
      fontSize: 13, fontFace: "Arial",
      color: step.color, bold: true, align: "center", margin: 0
    });

    // Chinese name
    slide.addText(step.chinese, {
      x: x + 0.1, y: 3.35, w: cardW - 0.2, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", margin: 0
    });

    // Divider line
    slide.addShape(pres.ShapeType.line, {
      x: x + 0.4, y: 3.9, w: cardW - 0.8, h: 0,
      line: { color: theme.secondary, width: 0.5, dashType: "dash" }
    });

    // Description question
    slide.addText(step.desc, {
      x: x + 0.1, y: 4.05, w: cardW - 0.2, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", margin: 0
    });

    // Connector arrow (except last)
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: x + cardW, y: 3.0, w: gap, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true, align: "center", margin: 0
      });
    }
  });

  return slide;
}

module.exports = { createSlide };
