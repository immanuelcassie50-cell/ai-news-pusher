const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四：效果衡量 — 核心指标体系", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("人机协作效果衡量的四个维度", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four measurement dimensions
  const dimensions = [
    {
      title: "效率维度",
      metrics: ["任务完成时间", "AI响应速度", "人机交互轮次"],
      color: theme.green,
      icon: "⚡",
      x: 0.5
    },
    {
      title: "质量维度",
      metrics: ["输出准确率", "用户满意度", "目标达成率"],
      color: theme.blue,
      icon: "✓",
      x: 3.5
    },
    {
      title: "价值维度",
      metrics: ["成本节约", "效率提升比", "ROI计算"],
      color: theme.warm,
      icon: "💰",
      x: 6.5
    },
    {
      title: "能力维度",
      metrics: ["AI使用熟练度", "人机协作流畅度", "团队AI素养"],
      color: theme.accent,
      icon: "📈",
      x: 0.5,
      y: 3.2
    }
  ];

  // First row
  dimensions.slice(0, 3).forEach((dim) => {
    slide.addShape(pres.ShapeType.rect, {
      x: dim.x, y: 1.5, w: 2.8, h: 1.5,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: dim.x, y: 1.5, w: 2.8, h: 0.08,
      fill: { color: dim.color }
    });

    slide.addText(dim.icon, {
      x: dim.x + 0.15, y: 1.65, w: 0.5, h: 0.5,
      fontSize: 22,
      align: "center", valign: "middle"
    });

    slide.addText(dim.title, {
      x: dim.x + 0.7, y: 1.7, w: 2.0, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    dim.metrics.forEach((m, i) => {
      slide.addText("• " + m, {
        x: dim.x + 0.2, y: 2.2 + i * 0.35, w: 2.4, h: 0.3,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Fourth dimension spans bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.2, w: 9, h: 1.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.2, w: 0.1, h: 1.5,
    fill: { color: theme.accent }
  });

  slide.addText("📈", {
    x: 0.75, y: 3.5, w: 0.6, h: 0.6,
    fontSize: 28,
    align: "center", valign: "middle"
  });

  slide.addText("能力维度", {
    x: 1.5, y: 3.55, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const abilityMetrics = ["AI使用熟练度", "人机协作流畅度", "团队AI素养", "持续学习能力"];
  abilityMetrics.forEach((m, i) => {
    const x = 3.5 + i * 2.2;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.5, w: 2.0, h: 0.8,
      fill: { color: theme.accent, transparency: 15 }
    });
    slide.addText(m, {
      x: x, y: 3.5, w: 2.0, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.9, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("衡量重点：不是AI有多强，而是人机协作产生了多少额外价值", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
