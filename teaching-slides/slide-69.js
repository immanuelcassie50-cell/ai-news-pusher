const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习二：案例示范 — 需求收集流程", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Flow diagram title
  slide.addText("案例：市场部月度报告生成流程优化", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Process steps
  const processSteps = [
    { title: "数据收集", time: "2小时", ai: "AI辅助", color: theme.blue },
    { title: "数据分析", time: "1.5小时", ai: "AI强项", color: theme.green },
    { title: "图表制作", time: "1小时", ai: "AI强项", color: theme.green },
    { title: "报告撰写", time: "2小时", ai: "人机协作", color: theme.warm },
    { title: "审核修改", time: "30分钟", ai: "人工", color: theme.gray }
  ];

  processSteps.forEach((step, i) => {
    const x = 0.5 + i * 1.9;

    // Step card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 1.75, h: 2.2,
      fill: { color: "ffffff" },
      line: { color: step.color, width: 2 }
    });

    // Step header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 1.75, h: 0.45,
      fill: { color: step.color }
    });
    slide.addText(step.title, {
      x: x, y: 1.58, w: 1.75, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Time
    slide.addText("⏱ " + step.time, {
      x: x + 0.1, y: 2.1, w: 1.55, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // AI mode
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 2.5, w: 1.45, h: 0.35,
      fill: { color: step.color, transparency: 20 }
    });
    slide.addText(step.ai, {
      x: x + 0.15, y: 2.5, w: 1.45, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: step.color, bold: true,
      align: "center", valign: "middle"
    });

    // Arrow
    if (i < processSteps.length - 1) {
      slide.addText("→", {
        x: x + 1.65, y: 2.4, w: 0.35, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Summary section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.9, w: 9, h: 1.2,
    fill: { color: theme.light }
  });

  slide.addText("优化效果", {
    x: 0.7, y: 4.0, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const metrics = [
    { label: "原耗时", value: "7小时" },
    { label: "优化后", value: "3.5小时" },
    { label: "效率提升", value: "50%" }
  ];

  metrics.forEach((m, i) => {
    const x = 0.7 + i * 3;
    slide.addText(m.label, {
      x: x, y: 4.4, w: 2.5, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(m.value, {
      x: x, y: 4.65, w: 2.5, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: theme.green, bold: true
    });
  });

  return slide;
}

module.exports = { createSlide };
