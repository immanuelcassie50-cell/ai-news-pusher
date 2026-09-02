const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("AI介入决策流程图", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Flow chart steps
  const steps = [
    { title: "任务识别", desc: "明确需要完成的具体任务", icon: "📋", y: 1.2 },
    { title: "复杂度评估", desc: "任务边界清晰吗？需要判断吗？", icon: "📊", y: 2.0 },
    { title: "AI能力匹配", desc: "AI在此类任务上的表现如何？", icon: "🤖", y: 2.8 },
    { title: "价值判断", desc: "效率提升 vs 质量要求的权衡", icon: "⚖", y: 3.6 },
    { title: "介入决策", desc: "纯AI / 人工+AI / 纯人工", icon: "✅", y: 4.4 }
  ];

  steps.forEach((step, i) => {
    // Step card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: step.y, w: 6.5, h: 0.65,
      fill: { color: "ffffff" },
      line: { color: theme.primary, width: 1 }
    });

    // Step number
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: step.y + 0.1, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: 0.65, y: step.y + 0.1, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Icon
    slide.addText(step.icon, {
      x: 1.2, y: step.y + 0.08, w: 0.5, h: 0.5,
      fontSize: 22,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: 1.8, y: step.y + 0.08, w: 2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(step.desc, {
      x: 1.8, y: step.y + 0.35, w: 5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Arrow down (except last)
    if (i < steps.length - 1) {
      slide.addText("↓", {
        x: 3.5, y: step.y + 0.62, w: 0.5, h: 0.35,
        fontSize: 16, fontFace: "Arial",
        color: theme.secondary,
        align: "center"
      });
    }
  });

  // Right side - decision points
  slide.addShape(pres.ShapeType.rect, {
    x: 7.2, y: 1.2, w: 2.3, h: 3.85,
    fill: { color: theme.light }
  });

  slide.addText("决策检查点", {
    x: 7.35, y: 1.35, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const checkpoints = [
    "任务能否被清晰定义？",
    "是否需要创意或判断？",
    "出错的后果严重吗？",
    "时效性要求如何？",
    "用户信任度如何？"
  ];

  checkpoints.forEach((cp, i) => {
    slide.addText("○ " + cp, {
      x: 7.35, y: 1.8 + i * 0.5, w: 2.0, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  return slide;
}

module.exports = { createSlide };
