const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块二总结：AI介入决策框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Decision framework visualization
  slide.addText("决策流程图", {
    x: 0.5, y: 1.0, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Flow diagram
  const flowSteps = [
    { title: "任务识别", y: 1.5 },
    { title: "复杂度评估", y: 2.15 },
    { title: "价值矩阵定位", y: 2.8 },
    { title: "协作模式选择", y: 3.45 },
    { title: "执行与迭代", y: 4.1 }
  ];

  flowSteps.forEach((step, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: step.y, w: 4, h: 0.5,
      fill: { color: theme.light }
    });

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: step.y + 0.08, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: 0.6, y: step.y + 0.08, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.title, {
      x: 1.05, y: step.y + 0.08, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.dark
    });

    if (i < flowSteps.length - 1) {
      slide.addText("↓", {
        x: 2.2, y: step.y + 0.48, w: 0.5, h: 0.25,
        fontSize: 14, fontFace: "Arial",
        color: theme.secondary,
        align: "center"
      });
    }
  });

  // Right side - key takeaways
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.0, w: 4.5, h: 3.6,
    fill: { color: "ffffff" },
    line: { color: theme.primary, width: 1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.0, w: 4.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("关键要点", {
    x: 5.2, y: 1.08, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const takeaways = [
    "AI介入不是非黑即白的选择",
    "根据任务特性灵活组合模式",
    "人机协作需要持续迭代优化",
    "效果衡量是改进的基础",
    "建立团队统一的协作语言"
  ];

  takeaways.forEach((item, i) => {
    slide.addText("✓ " + item, {
      x: 5.2, y: 1.65 + i * 0.55, w: 4.1, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Next module teaser
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 4.7, w: 4.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("下一步：模块三 — 人机协作节奏", {
    x: 5.2, y: 4.8, w: 4.1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff"
  });

  return slide;
}

module.exports = { createSlide };
