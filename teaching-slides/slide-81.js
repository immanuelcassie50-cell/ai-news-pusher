const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：五大判断节点工作表", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Worksheet format
  slide.addText("每个节点都需要回答以下问题", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Nodes with checklist
  const nodes = [
    {
      num: "1",
      title: "任务定义节点",
      checks: ["任务目标清晰吗？", "验收标准明确吗？", "AI能理解这个任务吗？"],
      color: theme.accent
    },
    {
      num: "2",
      title: "方案生成节点",
      checks: ["方案完整吗？", "有逻辑漏洞吗？", "符合预期风格吗？"],
      color: theme.blue
    },
    {
      num: "3",
      title: "风险评估节点",
      checks: ["有哪些潜在风险？", "出错后果严重吗？", "有备选方案吗？"],
      color: theme.warm
    },
    {
      num: "4",
      title: "执行监控节点",
      checks: ["进度正常吗？", "输出质量稳定吗？", "需要干预吗？"],
      color: theme.green
    },
    {
      num: "5",
      title: "效果评估节点",
      checks: ["达到预期了吗？", "效率提升明显吗？", "需要迭代吗？"],
      color: theme.primary
    }
  ];

  nodes.forEach((node, i) => {
    const y = 1.45 + i * 0.78;

    // Node number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.45, h: 0.65,
      fill: { color: node.color }
    });
    slide.addText(node.num, {
      x: 0.5, y: y, w: 0.45, h: 0.65,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Node title
    slide.addText(node.title, {
      x: 1.05, y: y + 0.1, w: 2.2, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Check items
    node.checks.forEach((check, j) => {
      const x = 3.4 + j * 2.2;

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y + 0.1, w: 0.25, h: 0.25,
        fill: { color: "ffffff" },
        line: { color: node.color, width: 1 }
      });

      slide.addText(check, {
        x: x + 0.35, y: y + 0.08, w: 1.8, h: 0.5,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.dark,
        valign: "middle"
      });
    });

    // Divider line
    if (i < nodes.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: 0.5, y: y + 0.72, w: 9, h: 0.02,
        fill: { color: theme.light }
      });
    }
  });

  // Usage note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.35, w: 9, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("使用说明：在每个节点填写判断结果，决定继续、调整或终止", {
    x: 0.7, y: 5.4, w: 8.6, h: 0.28,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
