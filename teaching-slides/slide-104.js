const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师话术手册：提问", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("好问题比好答案更有力量", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Question types - 5 types in horizontal layout
  const questions = [
    { type: "澄清式", script: "\"能具体说说吗？\"", scene: "对方表达模糊时", icon: "?", color: theme.accent },
    { type: "深入式", script: "\"这背后的原因是什么？\"", scene: "需要挖掘本质时", icon: "↓", color: theme.primary },
    { type: "挑战式", script: "\"有没有考虑过另一种可能？\"", scene: "需要拓展思维时", icon: "↗", color: "#43aa8b" },
    { type: "归因式", script: "\"根本原因是什么呢？\"", scene: "需要找到根源时", icon: "◎", color: theme.secondary },
    { type: "行动式", script: "\"下一步我们具体做什么？\"", scene: "需要推动行动时", icon: "→", color: "#e07a5f" }
  ];

  questions.forEach((q, i) => {
    const x = 0.35 + i * 1.92;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 1.8, h: 3.2,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 1.8, h: 0.12,
      fill: { color: q.color }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.55, y: 1.75, w: 0.7, h: 0.7,
      fill: { color: q.color }
    });
    slide.addText(q.icon, {
      x: x + 0.55, y: 1.75, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Type name
    slide.addText(q.type, {
      x: x + 0.1, y: 2.55, w: 1.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Script
    slide.addText(q.script, {
      x: x + 0.1, y: 2.95, w: 1.6, h: 0.8,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: q.color, bold: true,
      align: "center"
    });

    // Scene
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.1, y: 3.75, w: 1.6, h: 0.8,
      fill: { color: theme.light }
    });
    slide.addText(q.scene, {
      x: x + 0.15, y: 3.8, w: 1.5, h: 0.7,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.9, w: 9.2, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("提问心法", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });
  slide.addText("提问时保持好奇而非质疑的态度；一次只问一个问题；给对方足够的思考时间（至少5秒）", {
    x: 0.6, y: 5.25, w: 8.8, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "ffffff", transparency: 20
  });

  return slide;
}

module.exports = { createSlide };
