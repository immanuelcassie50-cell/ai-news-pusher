const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏模式 — 慢节奏案例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.55,
    fill: { color: theme.warm, transparency: 20 }
  });
  slide.addText("场景：企业战略转型 — 3年数字化转型规划制定", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  // Workshop phases over months
  const months = [
    {
      month: "Month 1",
      title: "深度调研",
      focus: "现状诊断与挑战分析",
      activities: ["高管访谈", "业务调研", "AI数据分析", "趋势研判"],
      color: theme.secondary
    },
    {
      month: "Month 2-3",
      title: "战略共创",
      focus: "方向探索与方案设计",
      activities: ["多轮Workshop", "AI方案生成", "专家咨询", "方案迭代"],
      color: theme.blue
    },
    {
      month: "Month 4-5",
      title: "验证优化",
      focus: "小范围试点与调整",
      activities: ["试点项目启动", "效果跟踪", "反馈收集", "方案调整"],
      color: theme.accent
    },
    {
      month: "Month 6",
      title: "规划定稿",
      focus: "3年规划与落地计划",
      activities: ["规划文档完善", "资源规划", "风险预案", "启动准备"],
      color: theme.green
    }
  ];

  months.forEach((m, i) => {
    const x = 0.5 + i * 2.4;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.75, w: 2.2, h: 2.85,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.75, w: 2.2, h: 0.55,
      fill: { color: m.color }
    });

    slide.addText(m.month, {
      x: x, y: 1.8, w: 2.2, h: 0.2,
      fontSize: 9, fontFace: "Arial",
      color: "ffffff",
      align: "center"
    });

    slide.addText(m.title, {
      x: x, y: 2.0, w: 2.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    slide.addText(m.focus, {
      x: x + 0.1, y: 2.4, w: 2.0, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 2.85, w: 1.9, h: 0.02,
      fill: { color: theme.light }
    });

    slide.addText("核心活动：", {
      x: x + 0.1, y: 2.95, w: 2.0, h: 0.25,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    m.activities.forEach((act, j) => {
      slide.addText("• " + act, {
        x: x + 0.1, y: 3.2 + j * 0.35, w: 2.0, h: 0.3,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });

    if (i < months.length - 1) {
      slide.addText("→", {
        x: x + 2.1, y: 3.1, w: 0.4, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.65,
    fill: { color: theme.primary }
  });
  slide.addText("慢节奏核心：深度思考需要时间，战略规划不能急于求成", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
