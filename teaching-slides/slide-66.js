const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块二练习详解：AI介入价值矩阵", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Matrix introduction
  slide.addText("价值矩阵：根据任务复杂度与AI能力匹配度划分四象限", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four quadrants
  const quadrants = [
    {
      title: "Q1: 高价值+AI强项",
      tasks: ["文案生成", "代码补全", "数据汇总"],
      color: theme.green,
      x: 0.5, y: 1.5,
      action: "优先AI介入"
    },
    {
      title: "Q2: 高价值+AI弱项",
      tasks: ["战略规划", "创新设计", "复杂谈判"],
      color: theme.blue,
      x: 5.2, y: 1.5,
      action: "人机协作"
    },
    {
      title: "Q3: 低价值+AI强项",
      tasks: ["格式转换", "批量处理", "简单查询"],
      color: theme.gray,
      x: 0.5, y: 3.4,
      action: "自动化执行"
    },
    {
      title: "Q4: 低价值+AI弱项",
      tasks: ["关系维护", "突发应对", "模糊决策"],
      color: theme.warm,
      x: 5.2, y: 3.4,
      action: "人工处理"
    }
  ];

  quadrants.forEach((q) => {
    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: 4.3, h: 1.7,
      fill: { color: "ffffff" },
      line: { color: q.color, width: 2 }
    });

    // Title bar
    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: 4.3, h: 0.45,
      fill: { color: q.color }
    });

    slide.addText(q.title, {
      x: q.x + 0.15, y: q.y + 0.08, w: 3.0, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true
    });

    // Task list
    slide.addText("典型任务：", {
      x: q.x + 0.15, y: q.y + 0.55, w: 1.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    q.tasks.forEach((task, i) => {
      slide.addText("• " + task, {
        x: q.x + 0.15 + (i % 2) * 1.8, y: q.y + 0.85 + Math.floor(i / 2) * 0.3, w: 1.7, h: 0.28,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });

    // Action label
    slide.addShape(pres.ShapeType.rect, {
      x: q.x + 0.15, y: q.y + 1.35, w: 1.8, h: 0.28,
      fill: { color: q.color, transparency: 20 }
    });
    slide.addText(q.action, {
      x: q.x + 0.15, y: q.y + 1.35, w: 1.8, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: q.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.25, w: 9, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("关键：不是问\"AI能不能做\"，而是问\"AI做是否比人做更好\"", {
    x: 0.7, y: 5.32, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  return slide;
}

module.exports = { createSlide };
