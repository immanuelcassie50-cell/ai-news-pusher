const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("节奏模式案例二：深对话应用场景", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.55,
    fill: { color: theme.blue, transparency: 20 }
  });
  slide.addText("场景：战略规划Workshop — 探讨公司未来3年数字化转型方向", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  // Deep dialogue phases
  slide.addText("深对话阶段", {
    x: 0.5, y: 1.75, w: 2.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const phases = [
    {
      phase: "Phase 1",
      title: "现状共识",
      duration: "30分钟",
      activities: ["个人静默书写", "小组分享", "全班共识"],
      color: theme.secondary
    },
    {
      phase: "Phase 2",
      title: "挑战探索",
      duration: "45分钟",
      activities: ["AI辅助数据分析", "趋势解读", "痛点讨论"],
      color: theme.blue
    },
    {
      phase: "Phase 3",
      title: "方向共创",
      duration: "60分钟",
      activities: ["方案草案生成", "AI提供参考案例", "小组方案打磨"],
      color: theme.accent
    },
    {
      phase: "Phase 4",
      title: "行动规划",
      duration: "30分钟",
      activities: ["优先级排序", "责任分工", "资源确认"],
      color: theme.green
    }
  ];

  phases.forEach((p, i) => {
    const x = 0.5 + i * 2.4;

    // Phase card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.2, w: 2.2, h: 2.5,
      fill: { color: "ffffff" },
      line: { color: p.color, width: 2 }
    });

    // Phase header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.2, w: 2.2, h: 0.5,
      fill: { color: p.color }
    });

    slide.addText(p.phase, {
      x: x, y: 2.25, w: 2.2, h: 0.2,
      fontSize: 9, fontFace: "Arial",
      color: "ffffff",
      align: "center"
    });

    slide.addText(p.title, {
      x: x, y: 2.45, w: 2.2, h: 0.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Duration
    slide.addText("⏱ " + p.duration, {
      x: x + 0.15, y: 2.8, w: 1.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 3.1, w: 1.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Activities
    slide.addText("活动：", {
      x: x + 0.15, y: 3.2, w: 1.9, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    p.activities.forEach((act, j) => {
      slide.addText("• " + act, {
        x: x + 0.15, y: 3.45 + j * 0.4, w: 1.9, h: 0.35,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });

    // Arrow
    if (i < phases.length - 1) {
      slide.addText("→", {
        x: x + 2.1, y: 3.3, w: 0.4, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("深对话的核心：AI不是答案的提供者，而是思考的催化剂", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
