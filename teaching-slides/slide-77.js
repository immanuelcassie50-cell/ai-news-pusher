const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏模式 — 中节奏案例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.55,
    fill: { color: theme.blue, transparency: 20 }
  });
  slide.addText("场景：产品团队需要在一周内完成新功能方案设计", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  // Timeline phases
  const phases = [
    {
      day: "Day 1",
      title: "需求探索",
      duration: "2小时",
      activities: ["用户访谈记录整理", "痛点归纳", "AI辅助数据分析"],
      color: theme.secondary
    },
    {
      day: "Day 2-3",
      title: "方案共创",
      duration: "4小时",
      activities: ["AI生成多方案草稿", "团队评审讨论", "方案迭代优化"],
      color: theme.blue
    },
    {
      day: "Day 4",
      title: "细节打磨",
      duration: "2小时",
      activities: ["技术可行性评估", "用户体验优化", "风险识别"],
      color: theme.accent
    },
    {
      day: "Day 5",
      title: "方案定稿",
      duration: "2小时",
      activities: ["文档完善", "评审汇报", "后续计划制定"],
      color: theme.green
    }
  ];

  phases.forEach((p, i) => {
    const x = 0.5 + i * 2.4;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.8, w: 2.2, h: 2.7,
      fill: { color: "ffffff" },
      line: { color: p.color, width: 2 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.8, w: 2.2, h: 0.5,
      fill: { color: p.color }
    });

    slide.addText(p.day, {
      x: x, y: 1.85, w: 2.2, h: 0.2,
      fontSize: 9, fontFace: "Arial",
      color: "ffffff",
      align: "center"
    });

    slide.addText(p.title, {
      x: x, y: 2.05, w: 2.2, h: 0.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText("⏱ " + p.duration, {
      x: x + 0.15, y: 2.4, w: 1.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 2.75, w: 1.8, h: 0.02,
      fill: { color: theme.light }
    });

    slide.addText("活动：", {
      x: x + 0.15, y: 2.85, w: 1.9, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    p.activities.forEach((act, j) => {
      slide.addText("• " + act, {
        x: x + 0.15, y: 3.1 + j * 0.4, w: 1.9, h: 0.35,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });

    if (i < phases.length - 1) {
      slide.addText("→", {
        x: x + 2.1, y: 3.0, w: 0.4, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("中节奏核心：给足够的迭代时间，但不拖延deadline", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
