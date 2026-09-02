const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块五：综合实战 — 模拟项目汇报", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Project scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("模拟项目：电商平台用户增长策略制定", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Project phases
  const phases = [
    {
      phase: "阶段一",
      title: "数据分析",
      duration: "1天",
      activities: ["AI分析用户数据", "识别增长机会点", "输出洞察报告"],
      color: theme.secondary
    },
    {
      phase: "阶段二",
      title: "策略共创",
      duration: "2天",
      activities: ["AI生成策略框架", "团队Workshop讨论", "策略迭代优化"],
      color: theme.blue
    },
    {
      phase: "阶段三",
      title: "方案定稿",
      duration: "1天",
      activities: ["撰写完整方案", "制作执行计划", "评审与修改"],
      color: theme.green
    }
  ];

  phases.forEach((p, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.85, w: 2.9, h: 2.4,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.85, w: 2.9, h: 0.5,
      fill: { color: p.color }
    });

    slide.addText(p.phase, {
      x: x, y: 1.9, w: 2.9, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "ffffff",
      align: "center"
    });

    slide.addText(p.title, {
      x: x, y: 2.1, w: 2.9, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText("⏱ " + p.duration, {
      x: x + 0.2, y: 2.45, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 2.8, w: 2.5, h: 0.02,
      fill: { color: theme.light }
    });

    p.activities.forEach((act, j) => {
      slide.addText("• " + act, {
        x: x + 0.2, y: 2.95 + j * 0.4, w: 2.5, h: 0.35,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });

    if (i < phases.length - 1) {
      slide.addText("→", {
        x: x + 2.8, y: 2.9, w: 0.4, h: 0.4,
        fontSize: 20, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Expected outcomes
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.45, w: 9, h: 1.1,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("预期产出", {
    x: 0.7, y: 4.55, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const outcomes = ["用户增长策略报告（20页）", "执行行动计划表", "ROI预测模型", "风险应对预案"];
  outcomes.forEach((o, i) => {
    const x = 0.7 + i * 2.25;
    slide.addText("✓ " + o, {
      x: x, y: 4.9, w: 2.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  return slide;
}

module.exports = { createSlide };
