const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("模拟会议观察与反馈", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left section: Four observation dimensions
  slide.addText("观察维度", {
    x: 0.5, y: 1.05, w: 4.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const dimensions = [
    {
      title: "空间创造",
      question: "是否营造了安全空间？",
      icon: "🏠",
      color: theme.accent
    },
    {
      title: "提问质量",
      question: "提问是否有效引导？",
      icon: "❓",
      color: theme.primary
    },
    {
      title: "过程管理",
      question: "是否有效控制节奏？",
      icon: "⏱",
      color: theme.accent
    },
    {
      title: "中立立场",
      question: "是否保持客观中立？",
      icon: "⚖",
      color: theme.primary
    }
  ];

  dimensions.forEach((d, i) => {
    const y = 1.5 + i * 0.9;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.5, h: 0.8,
      fill: { color: theme.light }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.06, h: 0.8,
      fill: { color: d.color }
    });

    // Icon
    slide.addText(d.icon, {
      x: 0.65, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 22,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(d.title, {
      x: 1.25, y: y + 0.12, w: 1.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Question
    slide.addText(d.question, {
      x: 1.25, y: y + 0.45, w: 3.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right section: ORID Feedback method
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.05, w: 4.5, h: 4.2,
    fill: { color: theme.primary }
  });

  slide.addText("ORID反馈法", {
    x: 5.4, y: 1.15, w: 4.1, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const oridSteps = [
    {
      letter: "O",
      title: "Objective",
      desc: "客观事实：我观察到了什么？",
      cn: "发生了什么？"
    },
    {
      letter: "R",
      title: "Reflective",
      desc: "感受反应：我有什么感受？",
      cn: "我的感受是？"
    },
    {
      letter: "I",
      title: "Interpretive",
      desc: "意义解释：这意味着什么？",
      cn: "这说明了什么？"
    },
    {
      letter: "D",
      title: "Decisional",
      desc: "行动决定：我将要做什么？",
      cn: "我打算怎么做？"
    }
  ];

  oridSteps.forEach((o, i) => {
    const y = 1.7 + i * 0.85;

    // Letter badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.45, y: y + 0.1, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(o.letter, {
      x: 5.45, y: y + 0.1, w: 0.55, h: 0.55,
      fontSize: 20, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title (English)
    slide.addText(o.title, {
      x: 6.1, y: y + 0.08, w: 1.5, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true
    });

    // Description (English question)
    slide.addText(o.desc, {
      x: 6.1, y: y + 0.35, w: 3.3, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.light
    });

    // Chinese question
    slide.addText(o.cn, {
      x: 7.6, y: y + 0.08, w: 1.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.4, w: 10, h: 0.35,
    fill: { color: theme.accent }
  });

  slide.addText("观察 + 反馈 = 持续改进", {
    x: 0.5, y: 5.4, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
